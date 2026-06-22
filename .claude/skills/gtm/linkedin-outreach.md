---
name: linkedin-outreach
description: Run Sonar's own LinkedIn client acquisition workflow. Takes a list of prospect names + LinkedIn URLs from Tiago, researches each, generates DM sequences, and prepares a batch for Tiago approval before Expand.io loading. Use when asked to "run LinkedIn outreach", "process the prospect list", or "prepare DMs for [list of names]".
model: sonnet
---

# Purpose
Process a batch of LinkedIn prospects from Tiago's list. Produce a review-ready package of DM sequences that Tiago approves before anything touches Expand.io.

# Inputs
Required: a list of prospects with at minimum (name, company, LinkedIn URL)
Optional: Tiago's list can be a CSV path, a pasted table, or a bullet list

# Workflow

## Step 1 — Validate the list
Parse the input list. For each prospect, confirm:
- Name
- Title / role
- Company
- LinkedIn URL

Flag any missing LinkedIn URLs — these cannot be personalized without a scrape.

## Step 2 — Research each account
For each prospect with a LinkedIn URL:
Run research-account skill (or equivalent scrape) to get:
- Company buying signals
- Contact's recent activity
- ICP score

Batch maximum: 10 accounts per session. For larger lists, process in batches of 10.

## Step 3 — Generate DM sequences
For each researched account, run draft-linkedin-dm skill.
Read context/founders/tiago-brand.md before the first DM — voice is consistent across the batch.

## Step 4 — Compile review package
Output a single document with all DM sequences, organized for Tiago to review:

---
LINKEDIN OUTREACH BATCH — [date]
Total prospects: [N]
Ready for review: [N]
Flagged (no URL or low ICP score): [N]

--- PROSPECT 1 ---
[DM sequence from draft-linkedin-dm output]

--- PROSPECT 2 ---
[DM sequence]

[... repeat for all]

--- FLAGGED PROSPECTS ---
[Names and why they were flagged]

NEXT STEP: Tiago reviews, marks approved/rejected/edit for each, then loads approved sequences to Expand.io.
---

## Step 5 — Tiago review gate
Do not load anything to Expand.io. Do not send anything.
The output is a review document only.
Once Tiago approves, he loads to Expand.io manually or instructs Lucas to configure the tool.

# Tool configuration notes (for Lucas)
LinkedIn automation tool: Expand.io (or Phantom Buster — decision TBD per decisions/2026-06-18-v2mom-icp-offer.md)
Tiago connects his LinkedIn account to the tool.
Sequences loaded per approved batch.
Pre-approval setting: Tiago must confirm before any action executes in the tool.
Daily volume: start at 20-30 profile visits/day + 10-15 connection requests/day. Stay within LinkedIn limits.

# Rules
- Never process more than 10 accounts per session without pausing for review
- Low ICP score (below 50) → flag, do not generate DM, explain why
- All output is for Tiago review. Nothing touches automation tools without his sign-off.
- Log each batch in Supabase (table: outreach_batches) if database is configured
