# Workflow: Daily Brief
**Pattern:** Scheduled Task
**Trigger:** Every weekday at 8:00 AM
**Purpose:** Tiago wakes up knowing exactly what's happening: top signals, campaign performance, open conversations, and today's priorities.

## What it does
1. Pulls data from 3 sources: Supabase (signal_logs), Instantly (campaign metrics), and Supabase (leads in active conversation)
2. Feeds everything to Claude sonnet to generate a structured daily brief
3. Sends to Tiago's Telegram

## Node structure
```
Schedule (8:00 AM Mon-Fri)
  → [Parallel fetch — 3 branches]
    Branch 1: HTTP Request (Supabase: GET signal_logs where detected_at >= today AND status = 'high_intent')
    Branch 2: HTTP Request (Instantly: GET /analytics/campaign/summary for last 24h)
    Branch 3: HTTP Request (Supabase: GET leads where status IN ('replied_positive', 'in_conversation'))
  → Merge (combine all 3 data streams)
  → Code (format into a single context object)
  → HTTP Request (Anthropic Claude sonnet: generate the brief)
  → HTTP Request (Telegram: send to Tiago)
  → Error Trigger → HTTP Request (Telegram: "Daily brief failed")
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

Keep it under 300 words. No bullet walls. Tiago reads this on his phone.
```

## Telegram format
```
Good morning. Here's your brief.

*TOP SIGNALS*
1. Acme Corp — New CRO hired, 2 SDR roles open. Reach out today.
2. ...

*OUTREACH*
47 emails sent yesterday. 3 replies (1 positive). Reply rate: 6.4%.

*OPEN CONVERSATIONS*
- John Smith at XYZ — replied 2 days ago, no follow-up yet
- ...

*TODAY'S PRIORITY*
Follow up with John Smith. He's warm and has been waiting 48h.
```

## Environment variables needed
- ANTHROPIC_API_KEY
- SUPABASE_URL
- SUPABASE_SERVICE_ROLE_KEY
- INSTANTLY_API_KEY
- TELEGRAM_BOT_TOKEN
- TIAGO_TELEGRAM_CHAT_ID

## Status
[ ] Workflow designed
[ ] n8n workflow built and tested
[ ] Activated
