# Sonar GTM — Roadmap

Source: Notion Roadmap database (6 phases, pulled June 2026)
Live Notion: https://app.notion.com/p/37338a5635658025a8bfd21759289196

---

## Phase 1 — Foundation
**Goal:** Business infrastructure and operating system live.
**Owner:** Lucas + Tiago
**Status:** IN PROGRESS (June 2026)

- [x] V2MOM defined and locked
- [x] ICP confirmed
- [x] Entry offer defined (Architecture Sprint)
- [x] Brand system created
- [x] Sonar AIOS built (this repo)
- [x] GitHub repo live (sonargtmlucas/sonar-core)
- [ ] lucas@sonargtm.com mailbox created
- [ ] Supabase schema deployed (run scripts/setup-database.sql)
- [ ] n8n workflows built and activated
- [ ] Tiago persona capture completed (context/founders/tiago-brand.md Part 2)

---

## Phase 2 — Authority Engine
**Goal:** Tiago's LinkedIn presence generating inbound leads and warming the audience.
**Owner:** Tiago (Lucas supports content engine)

- [ ] Tiago persona capture completed (feeds content engine)
- [ ] First 10 LinkedIn posts drafted and scheduled
- [ ] Content cadence running (3x/week)
- [ ] Lead magnets created (Revenue Audit, Blueprint PDF, Swipe File)
- [ ] Tiago LinkedIn followers growing (target: 500 new in 60 days)

---

## Phase 3 — Product Buildout
**Goal:** The Sonar dashboard (the actual product) is live and connected to real data.
**Owner:** Lucas
**Dependencies:** Phase 1 Supabase schema complete

- [ ] Dashboard built in Lovable (use prompts/dashboard-lovable.md)
- [ ] Dashboard connected to Supabase (leads, pipeline, signals, campaigns tables)
- [ ] Instantly integration live (campaign metrics sync)
- [ ] n8n workflows running and feeding data into Supabase
- [ ] Signal Monitor running daily
- [ ] Reply Detection running hourly
- [ ] Daily Brief reaching Tiago on Telegram every morning
- [ ] Lead Enrichment webhook live

---

## Phase 4 — GTM Assets and Validation
**Goal:** Everything needed to sell is ready. First outreach goes out.
**Owner:** Tiago (Lucas supports)

- [ ] Target account list built (Tiago via Sales Navigator, 100+ accounts)
- [ ] First email campaign active in Instantly (mailboxes warmed by June 25-27)
- [ ] LinkedIn outreach running via Expand.io (Tiago's account connected)
- [ ] Proposal template built
- [ ] One-page offer summary built
- [ ] Discovery call scorecard built
- [ ] sonargtm.com live (use prompts/website-v0.md)

---

## Phase 5 — Internal Launch
**Goal:** First real client conversation in progress. System being battle-tested on ourselves.
**Owner:** Lucas + Tiago

- [ ] 50+ outreach sequences sent (email + LinkedIn)
- [ ] 5+ discovery calls booked
- [ ] First Architecture Sprint proposal sent
- [ ] Dashboard showing real data from live campaigns
- [ ] AIOS being used daily by both founders

---

## Phase 6 — First Clients
**Goal:** $10K MRR by July 31, 2026.
**Owner:** Tiago (closes), Lucas (delivers)

- [ ] First Architecture Sprint signed ($7.5K-$15K)
- [ ] First client onboarded (run delivery/onboard-client skill)
- [ ] First client campaign live
- [ ] First client report delivered
- [ ] Case study documented
- [ ] $10K MRR hit → begin scaling to $40K target by Dec 31

---

## Current priority order
1. Deploy Supabase schema (scripts/setup-database.sql → Supabase SQL editor)
2. Tiago fills tiago-brand.md Part 2
3. Build dashboard in Lovable (prompts/dashboard-lovable.md)
4. Activate Instantly email campaigns (June 25-27)
5. Run first LinkedIn outreach batch
6. Build n8n workflows
