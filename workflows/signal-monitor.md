# Workflow: Signal Monitor
**Pattern:** Scheduled Task
**Trigger:** Every day at 7:00 AM
**Purpose:** Scan the ICP universe for new buying signals and surface high-intent accounts to Tiago before the workday starts.

## What it does
1. Pulls the current ICP target list from Supabase (or a static search query)
2. Runs Apify scrapes to detect new signals across those accounts
3. Scores each account using Claude (haiku) against the ICP model
4. Writes new accounts to Supabase `signal_logs` table
5. Sends Tiago a Telegram alert with the day's top 3-5 high-intent accounts

## Node structure
```
Schedule (7:00 AM daily)
  → HTTP Request (Supabase: GET /signal_log?select=company_domain — get already-seen accounts)
  → Code (prepare search queries from ICP criteria)
  → HTTP Request (Apify: run linkedin-company-scraper with ICP filters)
    [hiring: SDR/AE/RevOps, company size: 20-150, industry: SaaS]
  → Code (deduplicate against already-seen accounts)
  → Split in Batches (batchSize: 5 — process 5 accounts at a time)
    → HTTP Request (Anthropic Claude haiku: score account against ICP)
    → IF (score >= 75)
      [True]  → HTTP Request (Supabase POST: insert to signal_logs with status=high_intent)
      [False] → HTTP Request (Supabase POST: insert to signal_logs with status=watch)
  → Aggregate (collect all high-intent accounts from batch)
  → Code (format Telegram message with top accounts)
  → HTTP Request (Telegram: send to Tiago)
  → Error Trigger → HTTP Request (Telegram: "Signal Monitor failed — check n8n")
```

## Claude prompt for scoring (in the HTTP Request body)
```
Score this account against our ICP (0-100). Return JSON: {"score": N, "signals": ["signal1", "signal2"], "why_now": "one sentence"}

ICP: Founder-led B2B SaaS or tech-enabled services. 20-150 employees. $15K+ ACV. Existing CRM + outbound stack. Inconsistent pipeline.

Account data:
Company: {{ $json.name }}
Size: {{ $json.employeeCount }}
Industry: {{ $json.industry }}
Recent activity: {{ $json.recentPosts }}
Open roles: {{ $json.openRoles }}
```

## Telegram message format
```
🔔 *Signal Monitor — {{ $now.toFormat('MMM d') }}*

High-intent accounts today:

*1. [Company Name]* — Score: 85/100
Signal: New CRO hired + 3 SDR roles open
Why now: Leadership change window (posted 4 days ago)

*2. [Company Name]* — Score: 78/100
...

[View all in Supabase →]
```
(no emoji in content we send externally — Telegram alerts are internal only)

## Supabase table: signal_logs
```sql
create table signal_logs (
  id uuid primary key default gen_random_uuid(),
  company_name text,
  company_domain text,
  icp_score integer,
  signals jsonb,
  why_now text,
  status text, -- 'high_intent' | 'watch' | 'pass'
  detected_at timestamp default now()
);
```

## Environment variables needed
- ANTHROPIC_API_KEY
- APIFY_API_KEY
- SUPABASE_URL
- SUPABASE_SERVICE_ROLE_KEY
- TELEGRAM_BOT_TOKEN
- TIAGO_TELEGRAM_CHAT_ID

## Status
[ ] Workflow designed
[ ] Supabase table created
[ ] n8n workflow built and tested
[ ] Activated
