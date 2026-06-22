---
name: client-report
description: Generate a monthly performance report for a specific client. Pulls campaign metrics, pipeline progress, and ROI summary. Use when asked to "generate report for [client]", "monthly review for [client]", or "how is [client]'s system performing".
model: sonnet
---

# Purpose
Client-facing monthly report. Shows what the system did, what it produced, and what's changing next month. Professional, specific, no spin.

# Inputs
Required: client name
Data sources: Instantly API (campaign metrics), Supabase (pipeline data), client context file

# Execution

## Step 1 — Load client context
Read context/clients/[client-name].md for:
- Their ICP and offer
- Campaign start date
- What we promised

## Step 2 — Pull campaign data
```
npx ts-node scripts/instantly-report.ts --client "[client-name]" --period "last_30_days"
```

## Step 3 — Pull pipeline data (Supabase)
Query leads table filtered by client_id:
- Leads sourced this month
- Open rate, reply rate, positive reply rate
- Meetings booked
- Deals in pipeline from Sonar activity

# Output format
---
SONAR PERFORMANCE REPORT
Client: [Client Name]
Period: [Month Year]
Report date: [date]

EXECUTIVE SUMMARY
[2-3 sentences: what happened this month, the top result, what's next]

CAMPAIGN ACTIVITY
Emails sent: [N]
Accounts reached: [N]
Open rate: [X]% (benchmark: 35-45%)
Reply rate: [X]% (benchmark: 3-8%)
Positive reply rate: [X]%

PIPELINE GENERATED
Meetings booked: [N]
Qualified conversations: [N]
Estimated pipeline value: $[X] (based on [N] meetings × [client's ACV])

SIGNAL INTELLIGENCE
New accounts identified this month: [N]
Top signal driving replies: [signal type with specific example]
Best performing ICP segment: [segment description]

WHAT WORKED
[Top 1-2 specific findings with evidence]

WHAT WE'RE CHANGING
[Top 1-2 optimizations for next month — subject line test, new segment, sequence adjustment]

NEXT 30 DAYS
[ ] [Specific action 1]
[ ] [Specific action 2]
[ ] [Specific action 3]

ROI SUMMARY
Investment this month: $[client's monthly fee]
Pipeline generated: $[estimated pipeline]
Meetings booked at [client's ACV]: $[N × ACV]
ROI ratio: [pipeline / fee]x
---

# Rules
- Client-facing report: professional tone, no internal notes
- Never make up metrics. If data is unavailable, show "[data unavailable — check [source]]"
- ROI summary uses pipeline generated, not closed revenue — note this clearly
- Tiago reviews before sending to client
