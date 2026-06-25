# Workflow: Reply Detection
**Pattern:** Scheduled Task (frequent)
**Trigger:** Every hour, Mon-Fri 8am-8pm
**Purpose:** Catch positive replies in Instantly campaigns. Updates lead status in Supabase and logs activity — visible in the dashboard's Agent Activity feed and Accounts screen in real time.

## What it does
1. Polls Instantly API for new unread replies across all active campaigns
2. Classifies each reply: positive / negative / neutral / OOO
3. For each positive reply: fetches the lead from Supabase, generates a suggested response
4. Updates lead status to `replied_positive` in Supabase
5. Logs everything to agent_logs — dashboard shows it instantly

## Node structure
```
Schedule (every hour, Mon-Fri 8am-8pm)
  → HTTP Request (Instantly GET /api/v1/reply/list?filter=unread&limit=50)
  → IF (replies exist?)
    [False] → End
    [True]
      → Code (classify replies: positive / negative / neutral / OOO)
      → IF (has positive replies?)
        [False] → HTTP Request (Instantly: mark all as read) → End
        [True]
          → Split in Batches (one positive reply at a time)
            → HTTP Request (Supabase GET /leads?email=eq.[email])
            → HTTP Request (Anthropic haiku: suggest response in Tiago's voice)
            → HTTP Request (Supabase PATCH /leads: update status=replied_positive, notes=suggested_response)
            → HTTP Request (Supabase POST /agent_logs: log HOT REPLY with suggested response)
            → HTTP Request (Instantly: mark reply as read)
```

## Reply classification prompt (Claude haiku)
```
Classify this email reply as: positive / negative / neutral / ooo
Only reply with one word.

Reply text: {{ $json.replyText }}
```

## Response suggestion prompt (Claude haiku)
```
Write a 2-3 sentence reply to this email in Tiago Castro's voice. Direct, peer-level, no fluff.
Goal: book a 15-min call. Include the booking link: https://tidycal.com/castro

Original email context: {{ $json.originalEmail }}
Their reply: {{ $json.replyText }}
Company: {{ $json.company }}
Contact: {{ $json.contactName }}, {{ $json.contactTitle }}
```

## Supabase agent_logs entry (replaces Telegram alert)
```json
{
  "agent": "outreach",
  "action": "hot_reply_detected",
  "result": "HOT REPLY from {{ contactName }} at {{ company }} — suggested response ready",
  "status": "success",
  "metadata": {
    "contact_name": "{{ contactName }}",
    "company": "{{ company }}",
    "their_reply": "{{ replyText }}",
    "suggested_response": "{{ suggestedResponse }}",
    "instantly_reply_link": "{{ replyLink }}"
  }
}
```
Dashboard Agent Activity feed shows this immediately. Click the entry to see full context + suggested response.

## Supabase lead update
```json
{
  "status": "replied",
  "notes": "HOT REPLY — {{ date }}\nTheir message: {{ replyText }}\nSuggested: {{ suggestedResponse }}"
}
```

## Environment variables needed
- INSTANTLY_API_KEY
- ANTHROPIC_API_KEY
- SUPABASE_URL
- SUPABASE_SERVICE_ROLE_KEY

## Status
[ ] Workflow designed ✅
[ ] n8n workflow built and tested
[ ] Activated
