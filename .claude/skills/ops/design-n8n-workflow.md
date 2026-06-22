---
name: design-n8n-workflow
description: Design or build an n8n workflow for Sonar GTM. Use when asked to "build an n8n workflow for [task]", "automate [repetitive task] in n8n", or "how should [X] work in n8n". Returns a complete workflow design with node structure, data flow, and implementation notes.
model: sonnet
---

# Purpose
Design n8n workflows that handle the scheduled and repetitive layer of Sonar's GTM stack.
n8n handles: triggers, scheduling, API pipelines, routing, webhooks.
Claude handles: research, scoring, copywriting, reasoning, report generation.

# When to use n8n vs Claude for a task
Use n8n when:
- The task runs on a schedule (daily, hourly, weekly)
- The task is a linear pipeline (fetch → transform → store → notify)
- The task is triggered by an external event (webhook from Instantly, Supabase, etc.)
- The logic is deterministic — the same input always produces the same output

Use Claude when:
- The task requires judgment or reasoning
- Output quality depends on context (personalization, scoring, copywriting)
- The task is one-off or user-initiated
- The task requires reading multiple context files

Many tasks use BOTH: n8n handles the schedule and data fetch, Claude API handles the intelligence step.

# Sonar's n8n workflow catalog
See workflows/ folder for full specs of each workflow.
Current workflows: signal-monitor, reply-detection, lead-enrichment, daily-brief, weekly-report

# Design pattern for Sonar workflows

## Standard GTM pipeline pattern
```
Schedule/Webhook → Fetch Data (HTTP Request) → Transform (Code node) → Score/Qualify (IF node) → 
  [If qualifies] → Claude API (HTTP Request to Anthropic) → Write to Supabase → Notify Tiago (Telegram/Slack)
  [If doesn't qualify] → Log to Supabase → End
```

## Claude API call in n8n (HTTP Request node config)
URL: https://api.anthropic.com/v1/messages
Method: POST
Headers:
  x-api-key: {{ $env.ANTHROPIC_API_KEY }}
  anthropic-version: 2023-06-01
  Content-Type: application/json
Body (JSON):
```json
{
  "model": "claude-haiku-4-5-20251001",
  "max_tokens": 1024,
  "messages": [
    {
      "role": "user",
      "content": "{{ $json.prompt }}"
    }
  ]
}
```
Use haiku for simple tasks (formatting, filtering, brief summaries).
Use sonnet for complex reasoning (scoring with context, copywriting).

## Instantly API call pattern
Base: https://api.instantly.ai/api/v1
Auth header: Authorization: Bearer {{ $env.INSTANTLY_API_KEY }}
Key endpoints: /campaign/list, /analytics/campaign/summary, /lead/list

## Apify actor call pattern
POST https://api.apify.com/v2/acts/{{ actorId }}/run-sync-get-dataset-items?token={{ $env.APIFY_API_KEY }}
Body: { "startUrls": [{"url": "URL"}], "maxItems": 20 }
Actor IDs: apidojo/linkedin-scraper (person), apidojo/linkedin-company-scraper (company)

## Supabase write pattern
POST https://{{ $env.SUPABASE_URL }}/rest/v1/{{ tableName }}
Headers:
  apikey: {{ $env.SUPABASE_SERVICE_ROLE_KEY }}
  Authorization: Bearer {{ $env.SUPABASE_SERVICE_ROLE_KEY }}
  Content-Type: application/json
  Prefer: return=representation

## Telegram notification pattern
Bot API: https://api.telegram.org/bot{{ $env.TELEGRAM_BOT_TOKEN }}/sendMessage
Body: { "chat_id": "{{ $env.TIAGO_TELEGRAM_CHAT_ID }}", "text": "{{ message }}", "parse_mode": "Markdown" }

# Output format when designing a workflow
Return:
1. Workflow name and trigger type
2. Node-by-node description with data flow
3. Error handling strategy
4. n8n environment variables required
5. Estimated execution time
6. Link to full spec in workflows/ folder if it exists

# n8n installation
Installed locally at ~/.n8n/
Start: npx n8n (or n8n start)
Default port: 5678 → http://localhost:5678
