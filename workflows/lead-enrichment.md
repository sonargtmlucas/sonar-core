# Workflow: Lead Enrichment Pipeline
**Pattern:** Webhook Processing
**Trigger:** POST webhook — fires when Tiago adds a new lead (name + LinkedIn URL)
**Purpose:** The moment Tiago drops a name, the system researches it, scores it, and if it qualifies, loads it into the right Instantly campaign automatically.

## What it does
1. Receives a new lead via webhook (name + LinkedIn URL + optional company)
2. Scrapes the LinkedIn profile and company via Apify
3. Scores the account against ICP
4. If score >= 65: generates a personalized first line with Claude, inserts lead to Supabase, adds to the correct Instantly campaign
5. If score < 65: logs to Supabase with status=watch, notifies Tiago

## Node structure
```
Webhook (POST /leads/new)
  Body: { "name": "John Smith", "linkedin": "URL", "company": "Acme Corp" }
  → HTTP Request (Apify: scrape LinkedIn person profile)
  → HTTP Request (Apify: scrape LinkedIn company page)
  → Merge (combine person + company data)
  → HTTP Request (Anthropic haiku: score + extract signals)
  → IF (score >= 65)
    [True — qualified]
      → HTTP Request (Anthropic haiku: generate personalized first line for email)
      → HTTP Request (Supabase POST: insert to leads table with all data)
      → HTTP Request (Instantly POST /lead/add: add to matching campaign)
      → HTTP Request (Telegram: "Lead added to campaign: [name] at [company] — Score: [X]")
    [False — not qualified]
      → HTTP Request (Supabase POST: insert to leads table with status=watch)
      → HTTP Request (Telegram: "[name] at [company] scored [X]/100 — added to watch list")
```

## Scoring prompt (Claude haiku)
```
Score this person against our ICP (0-100). Return JSON only:
{"score": N, "signals": ["signal1"], "why_now": "one sentence", "campaign": "dfy|discovery|watch"}

ICP: Founder, CRO, VP Sales, Head of Revenue at B2B SaaS/tech-enabled services, 20-150 employees, $15K+ ACV, has CRM + outbound stack.

Person: {{ $json.person.name }}, {{ $json.person.headline }}
Company: {{ $json.company.name }}, {{ $json.company.size }} employees, {{ $json.company.industry }}
Open roles: {{ $json.company.openRoles }}
Recent activity: {{ $json.person.recentPosts }}
```

## Personalized first line prompt (Claude haiku)
```
Write ONE personalized first line for a cold email to {{ name }} at {{ company }}.
Reference this specific signal: {{ why_now }}
Voice: direct, peer-level, no fluff. Max 25 words.
Example: "Saw [Company] just hired a new CRO — that window where the new team is rebuilding the pipeline is usually when Sonar is most useful."
```

## Instantly campaign routing
- score >= 75 AND title includes CRO/VP Sales → Campaign A (DFY offer)
- score 65-74 OR title is Founder/CEO → Campaign B (Discovery call)
- score < 65 → Do not add to Instantly

## Supabase table: leads
```sql
create table leads (
  id uuid primary key default gen_random_uuid(),
  name text,
  title text,
  company text,
  linkedin_url text,
  email text,
  icp_score integer,
  signals jsonb,
  why_now text,
  personalized_line text,
  status text, -- 'added_to_campaign' | 'watch' | 'pass'
  campaign_id text,
  created_at timestamp default now()
);
```

## Webhook URL (set this up in n8n)
POST https://your-n8n-instance.com/webhook/leads/new

Tiago adds leads by sending a POST to this URL (can do via Telegram bot, Notion button, or a simple form).

## Environment variables needed
- APIFY_API_KEY
- ANTHROPIC_API_KEY
- INSTANTLY_API_KEY
- SUPABASE_URL
- SUPABASE_SERVICE_ROLE_KEY
- TELEGRAM_BOT_TOKEN
- TIAGO_TELEGRAM_CHAT_ID

## Status
[ ] Workflow designed
[ ] Supabase leads table created
[ ] n8n workflow built and tested
[ ] Webhook URL shared with Tiago
[ ] Activated
