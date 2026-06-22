---
name: score-lead
description: Score a company or contact against Sonar's ICP (0-100) and identify the "why now" logic. Use when asked to "score [company]", "is [company] a good fit?", or as part of research-account. Returns a score, fit assessment, and recommended action.
model: haiku
---

# Purpose
Fast ICP scoring for a single account. Read context/shared/company.md (ICP section) before scoring.

# Scoring model

## Fit score (0-100)
Start at 0. Add points for each criterion met.

Company profile:
- Headcount 20-150 employees: +25
- B2B SaaS or tech-enabled services: +15
- $15K+ ACV market (estimated from product/pricing): +20
- Existing CRM tool (HubSpot, Salesforce, Pipedrive): +10
- Existing outbound tool (Apollo, Outreach, Salesloft, LinkedIn Sales Nav): +10

Decision maker:
- Founder, CRO, VP Sales, or Head of Revenue reachable: +15
- Multiple revenue leaders at company: +5

Deductions:
- Headcount under 10 or over 500: -20
- ACV clearly below $5K (SMB tool, low-price market): -30
- No CRM or sales team: -25
- Consumer product (B2C): -40

## Signal multiplier
After fit score, assess signal strength:
- 0 active signals: score stays as-is
- 1 active signal: +5
- 2 active signals: +15
- 3+ active signals: +25
- Leadership change (new CRO/VP) in last 90 days: additional +15

Cap: max score is 100.

# Output format
---
LEAD SCORE: [Company Name]
Fit Score: [X/100]
Signal Bonus: +[Y]
Final Score: [Z/100]

FIT BREAKDOWN
[List each criterion with points earned or deducted]

ACTIVE SIGNALS
[List signals found with brief evidence]

WHY NOW
[1-2 sentences: what makes this account worth pursuing this week specifically]

RECOMMENDED ACTION
Immediate (score 75+): reach out this week, high priority
Active (score 55-74): add to sequence, monitor signals
Watch (score 35-54): revisit in 30 days, wait for stronger signal
Pass (score below 35): not ready, does not fit, move on
---

# Rules
- Do not generate a score without checking against the ICP in context/shared/company.md
- Signal evidence must be specific ("hired VP Sales on [date]" not "leadership change signal")
- If data is insufficient to score accurately, say so and list what's missing
