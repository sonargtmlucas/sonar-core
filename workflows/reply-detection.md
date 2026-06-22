# Workflow: Reply Detection
**Pattern:** Scheduled Task (frequent)
**Trigger:** Every hour, Mon-Fri 8am-8pm
**Purpose:** Catch positive replies in Instantly campaigns and alert Tiago immediately so no hot lead goes cold.

## What it does
1. Polls Instantly API for new replies across all active campaigns
2. Filters for positive/interested replies (not unsubscribes or out-of-office)
3. For each positive reply: fetches the account brief from Supabase
4. Sends Tiago a Telegram alert with context + suggested response

## Node structure
```
Schedule (every hour, business hours only)
  → HTTP Request (Instantly GET /reply/list?filter=unread&limit=50)
  → IF (replies exist?)
    [False] → End
    [True]
      → Code (classify replies: positive / negative / neutral / OOO)
      → IF (has positive replies?)
        [False] → HTTP Request (Supabase: log all replies, mark as read) → End
        [True]
          → Split in Batches (one positive reply at a time)
            → HTTP Request (Supabase: GET lead by email from signal_logs or leads table)
            → HTTP Request (Anthropic haiku: suggest a response to this reply)
            → HTTP Request (Telegram: alert Tiago with reply + context + suggested response)
            → HTTP Request (Instantly: mark reply as read)
          → HTTP Request (Supabase: update lead status to 'replied_positive')
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
Goal: book a 15-min call.

Original email context: {{ $json.originalEmail }}
Their reply: {{ $json.replyText }}
Company: {{ $json.company }}
Contact: {{ $json.contactName }}, {{ $json.contactTitle }}
```

## Telegram alert format
```
*HOT REPLY — Act now*

*From:* {{ contactName }} ({{ title }}) at {{ company }}
*ICP Score:* {{ score }}/100

*Their reply:*
"{{ replyText }}"

*Suggested response:*
{{ suggestedResponse }}

*Reply in Instantly:* [link]
```

## Environment variables needed
- INSTANTLY_API_KEY
- ANTHROPIC_API_KEY
- SUPABASE_URL
- SUPABASE_SERVICE_ROLE_KEY
- TELEGRAM_BOT_TOKEN
- TIAGO_TELEGRAM_CHAT_ID

## Status
[ ] Workflow designed
[ ] n8n workflow built and tested
[ ] Activated
