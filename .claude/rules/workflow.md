# Workflow Rules

## Operating cadence
Monday founder meeting (45 min): revenue + pipeline, product + delivery, cash + expenses, blockers, top 3 priorities for the week
Friday scorecard (20 min): prospects contacted, conversations started, discovery calls booked/completed, qualified pipeline, proposals sent, MRR closed, workflows shipped, % delivery automated

## Scope discipline
- Build reusable components only when tied to a real sales or delivery need
- Every client build must produce at least one reusable Sonar IP artifact (skill, script, or playbook)
- No custom features that work for one client and no one else
- Document every reusable workflow in docs/ immediately after building it

## Build order for Phase 1
1. Context layer (this repo, DONE when all files are filled)
2. Tiago persona capture (Tiago fills tiago-brand.md via ChatGPT)
3. Skills — research-account and draft-email first (highest immediate impact)
4. LinkedIn outreach workflow (Expand.io or Phantom Buster, Tiago to configure)
5. Email campaigns live (Instantly, mailboxes warmed by Jun 25)
6. First client conversation → Signal Architecture Sprint proposal

## Session handoff
At the end of any significant build session, update docs/build-log.md with:
- What was built
- What was deferred and why
- What comes next

## Approval gates
All external output requires explicit approval before sending/publishing:
- Email sequences → Tiago reviews in Instantly before activating
- LinkedIn DMs → Tiago approves draft batch before Expand.io loads them
- Content posts → Tiago reviews drafts/ before posting
- Client proposals → both founders review before sending

## CLAUDE.md rule
Keep CLAUDE.md under 200 lines. It is a routing table only — it points to files, it does not contain content.
If CLAUDE.md grows past 200 lines, move content to the appropriate context/ or references/ file.

## Context efficiency
- Qualitative business identity (who we are, voice, strategy) → Markdown files read directly by Claude
- Quantitative/transactional data (leads, pipeline, metrics) → Supabase, queried on demand
- Skills load lazily — YAML frontmatter describes the skill, full content loads only when triggered
- Sub-agents with model: haiku for atomic/cheap tasks (logging, simple inserts)
