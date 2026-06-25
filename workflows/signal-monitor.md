# Workflow: Signal Monitor
**Pattern:** Scheduled Task
**Trigger:** Every day at 7:00 AM
**Purpose:** Scan the ICP universe for new buying signals. High-intent accounts appear in the Dashboard's Signal Engine screen and agent_logs feed automatically.

## What it does
1. Pulls already-seen company domains from Supabase (deduplication)
2. Runs Apify job board scraping to detect hiring signals (SDR/AE/RevOps openings = buying signal)
3. Scores each account using Claude Haiku against the ICP model
4. Writes results to Supabase `signals` table
5. Logs a summary to agent_logs — appears in dashboard Signal Engine + Activity feed

## Node structure
```
Schedule (7:00 AM daily)
  → HTTP Request (Supabase GET /signals?select=company_domain — get already-processed domains)
  → Code (prepare ICP search queries: "VP Sales hire" OR "SDR" OR "RevOps" + B2B SaaS)
  → HTTP Request (Apify: run curious_coder/linkedin-jobs-scraper)
    [queries: SDR/AE/RevOps/CRO openings, limit: 20 per day to control Apify cost]
  → Code (deduplicate against already-seen domains, extract company names + domains)
  → Split in Batches (batchSize: 5)
    → HTTP Request (Anthropic haiku: score account against ICP)
    → IF (score >= 75)
      [True]  → HTTP Request (Supabase POST /signals: status=high_intent)
      [False] → HTTP Request (Supabase POST /signals: status=watch)
  → Aggregate (collect all high_intent accounts)
  → Code (format summary text)
  → HTTP Request (Supabase POST /agent_logs: log daily signal summary)
  → Error Trigger → HTTP Request (Supabase POST /agent_logs: log failure with error)
```

## Claude prompt for scoring
```
Score this account against our ICP (0-100). Return JSON only:
{"score": N, "signals": ["signal1", "signal2"], "why_now": "one sentence"}

ICP: Founder-led B2B SaaS or tech-enabled services. 20-150 employees. $15K+ ACV. Existing CRM + outbound stack. Inconsistent pipeline.

Account data:
Company: {{ $json.company_name }}
Size estimate: {{ $json.employee_count }}
Industry: {{ $json.industry }}
Open roles detected: {{ $json.open_roles }}
Job posting date: {{ $json.posted_date }}
```

## Supabase signals insert
```json
{
  "company": "{{ company_name }}",
  "company_domain": "{{ domain }}",
  "signal_type": "hiring",
  "signal_detail": "{{ open_roles }}",
  "evidence": "{{ job_posting_url }}",
  "icp_score": {{ score }},
  "status": "high_intent|watch",
  "source": "apify"
}
```
NOTE: Uses `signals` table (not signal_logs — that table doesn't exist in the schema).

## Supabase agent_logs summary entry
```json
{
  "agent": "signal_engine",
  "action": "daily_scan_complete",
  "result": "Signal scan complete — {{ high_intent_count }} high-intent, {{ watch_count }} watch accounts",
  "status": "success",
  "metadata": {
    "high_intent_accounts": [{ "company": "...", "score": N, "why_now": "..." }],
    "total_scanned": N,
    "date": "{{ today }}"
  }
}
```
Dashboard Signal Engine screen reads from `signals` table directly. Agent Activity shows the summary log.

## Cost control
- Apify job scraping: ~$0.005/job posting → 20 posts/day = ~$0.10/day = ~$3/month
- Claude Haiku scoring: ~$0.001/account → 20 accounts = $0.02/day = ~$0.60/month
- Total: ~$4/month for signal monitor

## Environment variables needed
- APIFY_API_KEY
- ANTHROPIC_API_KEY
- SUPABASE_URL
- SUPABASE_SERVICE_ROLE_KEY

## Status
[ ] Workflow designed ✅
[ ] Supabase tables created ✅
[ ] n8n workflow built and tested
[ ] Activated
