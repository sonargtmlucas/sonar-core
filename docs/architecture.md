# Sonar GTM — System Architecture

## Overview
Sonar is a closed-loop intelligence system. One mode listens for market movement. One mode deliberately pings the market. Both feed the same intelligence core.

```
LISTEN (always-on)                    PULSE (directed)
       |                                     |
       v                                     v
  Signal Detection                   Campaign Activation
  (Apify + enrichment)               (Instantly + Expand.io)
       |                                     |
       v                                     v
       +-------> INTELLIGENCE CORE <---------+
                        |
              Resolve identity
              Infer context
              Score relevance
              Select plays
              Route action
              Record outcomes
                        |
                        v
                  CRM + Reporting
```

## The reusable loop (every client build follows this)
Account → Person → Signal → Context → Score → Play → Action → Outcome

## The 6 engine layers

| Layer | What it does | Tool |
|---|---|---|
| Strategy | ICP definition, offer, messaging | Workshop + Claude |
| Data | Account sourcing, enrichment, scoring | Apify + Apollo |
| Personalization | First lines, pain matching, dynamic copy | Claude API |
| Campaign | Sequence execution, A/B testing, volume | Instantly |
| Optimization | Reply analysis, subject testing, ICP refinement | Claude + review |
| Reporting | Pipeline generated, meetings booked, ROI | Supabase + scripts |

## AIOS architecture (this repo)

```
CLAUDE.md (routing table)
       |
  .claude/rules/        <- always loaded, low token cost
       |
  context/              <- loaded on demand, qualitative
  ├── shared/
  └── founders/
       |
  .claude/skills/       <- loaded lazily (YAML only first, full content when triggered)
  ├── gtm/
  ├── content/
  └── delivery/
       |
  references/           <- loaded only when a skill or task needs them
  decisions/            <- strategic memory (why we decided what we decided)
       |
  scripts/              <- direct API calls (no server needed)
  └── [apify, supabase, instantly]
```

## Skills without a server
Sonar doesn't have a running app yet. Skills call scripts directly:
```
npx ts-node scripts/apify-scrape.ts --url "URL" --type "person|company|posts"
npx ts-node scripts/supabase-insert.ts --table TABLE --data '{"key":"val"}'
npx ts-node scripts/instantly-report.ts --period "last_7_days"
```

Once the Sonar MVP is on Vercel, skills will call the Vercel API endpoints instead — same pattern as Jarvis localhost:3000 but with the production URL.

## Multi-user pattern (Tiago + Lucas)
Both founders connect their AI to the same GitHub repo.
- Shared: context/shared/, .claude/rules/, .claude/skills/, decisions/, references/
- Personal: context/founders/tiago.md (Tiago's ChatGPT reads this), context/founders/lucas.md (Lucas's Claude Code reads this)
- Settings: .claude/settings.json for shared standards, settings.local.json for personal API keys (not committed)

## Client replication model
This repo = Sonar-Core template.
One repo per client:
```
sonar-core/            <- this repo
sonar-client-acme/     <- clone of sonar-core for ACME Corp
sonar-client-xyz/      <- clone for XYZ Inc
```
Each client repo: own context/shared/company.md, own .env with their credentials. All skills unchanged — only context changes. That's the product moat.

## What gets automated (Phase 1 priorities)
1. Account research: Apify scrape → signal detection → ICP score → account brief (research-account skill)
2. Email personalization: account brief → 4-email sequence in Tiago's voice (draft-email skill)
3. LinkedIn DM generation: account brief → 3-step DM sequence (draft-linkedin-dm skill)
4. Content creation: creator scrape + pillar selection → post draft (tiago-post skill)
5. Weekly reporting: Instantly API → structured scorecard (weekly-report skill)

## What stays human-in-the-loop (always)
- Approving email sequences before loading to Instantly
- Approving LinkedIn DMs before loading to Expand.io
- Approving posts before publishing to LinkedIn
- All discovery calls and client conversations
- Pricing decisions and proposal approvals
- Any action that costs money or affects live campaigns
