# N8N — Technical Reference

Local: `http://localhost:5678`
Start command: `bash ~/start-n8n.sh` (NEVER use `n8n start` directly — API keys won't load)
API key: `N8N_API_KEY` in `.env`

## Active workflows

| Workflow | Trigger | Status | Notes |
|---|---|---|---|
| `lead-enrichment` | Webhook POST `/webhook/leads/new` | Ready | Needs `INSTANTLY_CAMPAIGN_A_ID` + `B_ID` in `~/.n8n/.env` |
| `reply-detection` | Hourly Mon–Fri | Ready | Needs active Instantly plan |
| `daily-brief` | 8am weekdays | Ready | — |
| `signal-monitor` | 7am daily | Ready | — |

Workflow JSON specs: `workflows/` folder in this repo.

## Claude API call pattern (in N8N HTTP Request node)

```
POST https://api.anthropic.com/v1/messages
Headers:
  x-api-key: {{ $env.ANTHROPIC_API_KEY }}
  anthropic-version: 2023-06-01
  content-type: application/json

Body:
{
  "model": "claude-haiku-4-5-20251001",   ← for classify/score/format
  "model": "claude-sonnet-4-6",           ← for briefs and complex reasoning
  "max_tokens": 1024,
  "messages": [{ "role": "user", "content": "..." }]
}
```

## Lead enrichment flow

```
POST /webhook/leads/new
  → Apify scrape (company + person)
  → Claude score (ICP 0–100 + why_now)
  → Supabase insert
  → If score 75+: add to Instantly Campaign A
  → If score 65–74: add to Instantly Campaign B
```

## Cloud migration plan

Target: n8n.cloud with sonargtm.com email
Steps:
1. Start free trial at n8n.io with sonargtm.com email
2. Invite Tiago as team member
3. Export 4 workflows as JSON from local → import to cloud
4. Update webhook URL in HeyReach
