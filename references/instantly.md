# Instantly — Technical Reference

Base URL: `https://api.instantly.ai/api/v1`
Auth: `Authorization: Bearer $INSTANTLY_API_KEY`

## Active campaigns

| Campaign | ID | Target | Score threshold |
|---|---|---|---|
| Campaign A — DFY | `26afd277-e0a0-449b-8315-81ea3b02ba2f` | CRO / VP Sales | 75+ |
| Campaign B — Discovery | `bbb8b66d-7651-4fa3-88f4-4b591be593f2` | Founder / CEO | 65–74 |

4 mailboxes assigned. Warming until ~Jun 27, 2026.

## Key endpoints

```bash
# List campaigns
GET /campaigns

# Add lead to campaign
POST /leads
{ "email": "...", "first_name": "...", "campaign_id": "..." }

# Campaign analytics
GET /analytics/campaign/summary?campaign_id=...&start_date=...&end_date=...

# List leads in campaign
GET /leads?campaign_id=...
```

## Lead enrichment flow

N8N lead-enrichment workflow calls Instantly after scoring:
- Score 75+ → add to Campaign A
- Score 65–74 → add to Campaign B
- Score < 65 → do not add, log to Supabase only

## Website visitor tracking

Tracking pixel added to sonargtm.com `<head>`. View identified visitors in:
Instantly dashboard → Website Tracking
