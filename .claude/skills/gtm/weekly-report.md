---
name: weekly-report
description: Generate a weekly performance report from Instantly campaigns and pipeline data. Use when asked for "weekly report", "how did we do this week", or the Friday scorecard. Pulls Instantly metrics and outputs a structured summary for the Friday founder review.
model: haiku
---

# Purpose
Friday scorecard. Pull the numbers, show what's working, flag what needs attention.

# Data sources

## Instantly (email campaigns)
Pull via Bash:
```
npx ts-node scripts/instantly-report.ts --period "last_7_days"
```
Fields to extract:
- Emails sent
- Open rate
- Reply rate
- Positive reply count
- Meetings booked (if tracked in Instantly)
- Campaign names and individual performance

## Pipeline (Supabase — when configured)
Query leads table for the week:
- New leads added
- Leads moved to "contacted"
- Leads moved to "replied"
- Leads moved to "meeting booked"
- Leads moved to "qualified"

Until Supabase is configured, request Tiago to provide pipeline update manually.

## LinkedIn (Expand.io — when configured)
- Connection requests sent
- Connections accepted
- DMs sent
- Replies received

# Output format
---
SONAR WEEKLY SCORECARD — Week of [date]

OUTBOUND ACTIVITY
Emails sent: [N]
LinkedIn connection requests: [N]
LinkedIn DMs sent: [N]

ENGAGEMENT
Email open rate: [X]%
Email reply rate: [X]%
LinkedIn connection acceptance rate: [X]%
LinkedIn DM reply rate: [X]%

PIPELINE
New leads added: [N]
Conversations started: [N]
Discovery calls booked: [N]
Discovery calls completed: [N]
Qualified pipeline: [N]
Proposals sent: [N]
MRR closed: $[X]

DELIVERY (Lucas fills)
Workflows shipped: [N]
% delivery automated: [X]%

WHAT'S WORKING
[Top 1-2 specific observations — which campaign, which ICP segment, which message type]

WHAT NEEDS ATTENTION
[Top 1-2 issues — low open rate on a campaign, low reply rate, missing pipeline data]

NEXT WEEK PRIORITIES
1. [Priority 1 — specific action]
2. [Priority 2]
3. [Priority 3]
---

# Rules
- If Instantly script fails or is not configured, output a template with [DATA NEEDED] placeholders
- Do not fabricate metrics. If data is unavailable, say so explicitly.
- Keep the "what's working" section specific — not "email performed well" but "Email 1 for the leadership change segment got 40% open rate"
- This report is for internal review only. Not for sharing with clients.
