# Workflow: Lead Enrichment Pipeline
**Pattern:** Webhook Processing
**Trigger:** POST webhook — fires when Tiago submits a new lead
**Purpose:** The moment Tiago drops a lead (from Sales Navigator export or manual), the system scores it, generates a personalized first line, and loads it into the right Instantly campaign automatically.

## Input — what Tiago sends
```json
{
  "name": "John Smith",
  "title": "VP of Sales",
  "company": "Acme Corp",
  "company_domain": "acme.com",
  "linkedin_url": "https://linkedin.com/in/johnsmith",
  "email": "john@acme.com",
  "company_size": "45",
  "industry": "B2B SaaS"
}
```
All fields from Sales Navigator export. `email` and `company_size` optional.

## Node structure
```
Webhook (POST /leads/new)
  → HTTP Request (Anthropic haiku: score + extract signals from provided data)
  → IF (score >= 65)
    [True — qualified]
      → HTTP Request (Anthropic haiku: generate personalized first line)
      → HTTP Request (Supabase POST: insert to leads table, status=added_to_campaign)
      → HTTP Request (Instantly POST /lead/add: add to matching campaign)
      → HTTP Request (Supabase POST: insert to agent_logs — "Lead qualified: [name] at [company] — Score: [X]")
    [False — not qualified]
      → HTTP Request (Supabase POST: insert to leads table, status=watch)
      → HTTP Request (Supabase POST: insert to agent_logs — "Lead watched: [name] at [company] — Score: [X]")
```

## Scoring prompt (Claude haiku)
```
Score this person against our ICP (0-100). Return JSON only:
{"score": N, "signals": ["signal1", "signal2"], "why_now": "one sentence reason", "campaign": "dfy|discovery|watch"}

ICP: Founder, CRO, VP Sales, Head of Revenue at B2B SaaS or tech-enabled services, 20-150 employees, $15K+ ACV, has CRM + outbound stack.

Person: {{ $json.name }}, {{ $json.title }} at {{ $json.company }}
Company size: {{ $json.company_size }} employees
Industry: {{ $json.industry }}
Domain: {{ $json.company_domain }}
```

## Personalized first line prompt (Claude haiku)
```
Write ONE personalized first line for a cold email to {{ name }}, {{ title }} at {{ company }}.
Use this signal context: {{ why_now }}
Voice: direct, peer-level, no fluff. Max 25 words.
Example: "Saw [Company] just hired a new CRO — that window where the new team is rebuilding the pipeline is usually when Sonar is most useful."
```

## Instantly campaign routing
- score >= 75 AND title includes CRO/VP Sales → Campaign A (DFY offer)
- score 65-74 OR title is Founder/CEO → Campaign B (Discovery call)
- score < 65 → Do not add to Instantly, log as watch

## Supabase insert — leads table
```json
{
  "name": "{{ name }}",
  "title": "{{ title }}",
  "company": "{{ company }}",
  "company_domain": "{{ company_domain }}",
  "linkedin_url": "{{ linkedin_url }}",
  "email": "{{ email }}",
  "icp_score": {{ score }},
  "signals": {{ signals }},
  "why_now": "{{ why_now }}",
  "personalized_line": "{{ personalized_line }}",
  "status": "added_to_campaign|watch",
  "campaign_id": "{{ instantly_campaign_id }}",
  "source": "n8n_lead_enrichment"
}
```

## Supabase insert — agent_logs table
```json
{
  "agent": "enrichment",
  "action": "lead_processed",
  "result": "Lead [name] at [company] scored [X]/100 — [status]",
  "status": "success",
  "metadata": { "icp_score": N, "campaign": "A|B|watch" }
}
```

## Webhook URL
POST https://your-n8n-instance.com/webhook/leads/new
(Update to Railway URL in week 2)

Tiago submits leads via:
1. Simple form (build later) or
2. Direct POST from a script Lucas provides

## Environment variables needed
- ANTHROPIC_API_KEY
- INSTANTLY_API_KEY
- SUPABASE_URL
- SUPABASE_SERVICE_ROLE_KEY

## Status
[ ] Workflow designed ✅
[ ] Supabase tables created ✅
[ ] n8n workflow built and tested
[ ] Webhook URL shared with Tiago
[ ] Activated
