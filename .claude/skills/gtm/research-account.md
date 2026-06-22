---
name: research-account
description: Deep research on a company before outreach. Given a company name or LinkedIn URL, scrapes the company page and target contact, maps buying signals, scores against ICP, and outputs a 1-page account brief. Use when asked to "research [company]" or "tell me about [company] before I reach out."
model: sonnet
---

# Purpose
Produce a structured account brief that tells Tiago exactly why this company deserves outreach, what the "why now" is, and what the hook should be.

# Inputs
Required: company name or LinkedIn company URL
Optional: target contact name/title, LinkedIn profile URL

# Execution

## Step 1 — Scrape company
Run via Bash:
```
npx ts-node scripts/apify-scrape.ts --url "[COMPANY_LINKEDIN_URL]" --type "company"
```
If only a company name is provided, search LinkedIn manually or use:
```
npx ts-node scripts/apify-scrape.ts --query "[COMPANY NAME]" --type "company-search"
```

## Step 2 — Scrape target contact (if URL provided)
```
npx ts-node scripts/apify-scrape.ts --url "[CONTACT_LINKEDIN_URL]" --type "person"
```

## Step 3 — Check signals
From the scraped data, identify which of the 6 signal types are present (see references/signal-types.md):
1. Revenue hiring (open BDR/SDR/AE/RevOps roles)
2. Leadership change (new CRO/VP Sales in last 90 days)
3. First-party activity (if available)
4. Expansion signals (funding, new market, product launch)
5. Technology shift (new CRM or outbound tools)
6. Public pain (LinkedIn posts, job descriptions revealing friction)

## Step 4 — Score against ICP
Read context/shared/company.md (ICP section).
Score 0–100:
- Headcount in 20–150: +25 points
- $15K+ ACV market: +20 points
- Has CRM + outbound stack: +20 points
- At least 2 active signals: +20 points
- Founder or revenue leader as DM: +15 points
Deduct 30 points if: ACV clearly below $5K, no outbound history, no sales team

## Step 5 — Output format
Return a structured brief in this format:

---
ACCOUNT BRIEF: [Company Name]
Date: [today]
ICP Score: [X/100]

COMPANY SNAPSHOT
Industry: [industry]
Size: [headcount estimate]
Stack (visible): [CRM/tools if visible]

TARGET CONTACT
Name: [name]
Title: [title]
LinkedIn: [URL]

BUYING SIGNALS DETECTED
[List each signal with evidence — "Hired 3 SDRs in the last 30 days" not just "hiring signal"]

WHY NOW
[2-3 sentences: the combination of signals that makes this account worth reaching out to this week, not next month]

SUGGESTED HOOK
[The specific personalized first line for email or DM — references the most compelling signal]

RECOMMENDED ACTION
[ ] Priority outreach — reach out this week
[ ] Watch — check again in 30 days
[ ] Not ready — no active signals
---

# Rules
- Only include signals with evidence. Do not invent signals.
- If ICP score is below 50, recommend "Watch" not immediate outreach.
- If no contact is found, note "Contact research needed" and suggest job title to target.
- Do not hallucinate company data. If something is not in the scraped output, say "not found."
