# Workflow: Daily Brief
**Pattern:** Scheduled Task
**Trigger:** Every weekday at 8:00 AM
**Purpose:** Generates a daily operating brief and writes it to Supabase — visible in the dashboard Overview. Tiago opens the dashboard or Claude Code mobile to read it.

## What it does
1. Pulls data from 3 sources: Supabase (signals), Instantly (campaign metrics), Supabase (active leads)
2. Feeds everything to Claude Sonnet to generate a structured daily brief
3. Writes the brief to agent_logs in Supabase — appears in Dashboard Agent Activity feed
4. Updates metrics_snapshots with yesterday's numbers

## Node structure
```
Schedule (8:00 AM Mon-Fri)
  → [Parallel fetch — 3 branches]
    Branch 1: HTTP Request (Supabase GET /signals?status=eq.high_intent&order=detected_at.desc&limit=10)
    Branch 2: HTTP Request (Instantly GET /api/v1/analytics/campaign/summary)
    Branch 3: HTTP Request (Supabase GET /leads?status=in.(replied,meeting_booked)&order=updated_at.desc&limit=10)
  → Merge (combine all 3 data streams)
  → Code (format into a single context string)
  → HTTP Request (Anthropic claude-sonnet-4-6: generate the brief)
  → HTTP Request (Supabase POST /agent_logs: write full brief as a log entry)
  → HTTP Request (Supabase POST /metrics_snapshots: upsert yesterday's metrics)
  → Error Trigger → HTTP Request (Supabase POST /agent_logs: log failure with error message)
```

## Claude prompt
```
You are generating Tiago's daily operating brief for Sonar GTM. Be direct and specific. No fluff.

Today's data:
---
New high-intent signals (last 24h):
{{ $json.signals }}

Campaign performance (last 24h):
{{ $json.instantly }}

Active conversations:
{{ $json.activeLeads }}

Today's date: {{ $now.toFormat('EEEE, MMMM d') }}
---

Generate a brief with these sections:
1. TOP SIGNALS TODAY (max 3, with company + why now)
2. OUTREACH STATUS (emails sent, reply rate, hot conversations)
3. OPEN CONVERSATIONS (who to follow up with today)
4. ONE PRIORITY (the single most important action today)

Keep it under 300 words. Direct. Tiago reads this in 60 seconds.
```

## Supabase agent_logs entry
```json
{
  "agent": "daily_brief",
  "action": "brief_generated",
  "result": "{{ brief_text }}",
  "status": "success",
  "metadata": {
    "signals_count": N,
    "emails_sent_yesterday": N,
    "active_conversations": N,
    "date": "{{ today }}"
  }
}
```
Brief appears in Dashboard Overview → Agent Activity feed. Click to read full text.

## Environment variables needed
- ANTHROPIC_API_KEY
- SUPABASE_URL
- SUPABASE_SERVICE_ROLE_KEY
- INSTANTLY_API_KEY

## Status
[ ] Workflow designed ✅
[ ] n8n workflow built and tested
[ ] Activated
