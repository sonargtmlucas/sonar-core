# SONAR GTM — AI Operating System

One GitHub repo. Two founders. One AI brain for the entire business.
This repo is the memory, context layer, and skill system for Sonar GTM.
Connect your Claude Code or ChatGPT to this repo and you have full company context.

## Who is talking right now
Check $SONAR_USER env var (set in .claude/settings.local.json — not committed):
- `lucas` → load context/founders/lucas.md. Technical scope. Approves architecture decisions.
- `tiago` → load context/founders/tiago.md + context/founders/tiago-brand.md. Commercial scope. Approves all external output.
- Unknown → ask who is talking before proceeding with business tasks.

## Absolute rules
- Never send outreach, post content, or make client commitments without explicit approval
- Always read the relevant context file before acting on any business task
- Tiago approves all external-facing output (emails, DMs, posts, proposals)
- Lucas approves all technical architecture decisions
- Shared decisions (strategy, pricing, equity) require both founders

## Where things live
- Company vision, offer, ICP, metrics → context/shared/company.md
- Brand voice, colors, copy rules → context/shared/brand.md + .claude/rules/brand.md
- Tiago: role, scope, tools → context/founders/tiago.md
- Tiago: full personal brand system + persona capture → context/founders/tiago-brand.md
- Lucas: role, technical scope → context/founders/lucas.md
- Strategic decisions log → decisions/
- Sales deck narrative, pricing, signal types → references/
- System architecture → docs/architecture.md
- LinkedIn outreach SOP → docs/linkedin-acquisition.md
- What's been built + next → docs/build-log.md
- **What tools the AI can reach** → connections.md
- Tool-specific API details → references/supabase.md, references/instantly.md, references/apify.md, references/heyreach.md, references/n8n.md

## Skills available
- system/onboarding — first-time setup: asks who you are, writes settings.local.json, briefs you
- system/morning-coffee — daily briefing: git log + ClickUp tasks + signals → what to focus on today
- system/after-meeting — run after every Lucas x Tiago call: transcript → brief in references/ + ClickUp tasks created automatically
- gtm/research-account — deep account research via Apify + Claude
- gtm/score-lead — ICP score (0-100) + "why now" logic
- gtm/draft-email — personalized 4-email sequence in Tiago's voice
- gtm/draft-linkedin-dm — LinkedIn DM sequence for a specific contact
- gtm/linkedin-outreach — Sonar's own LinkedIn acquisition workflow
- gtm/weekly-report — Instantly + pipeline data → weekly performance report
- content/tiago-post — LinkedIn post in Tiago's exact voice
- content/scrape-competitors — Apify scrape top creators → content insights
- delivery/onboard-client — new client intake → ICP workshop → campaign setup
- delivery/task-audit — Level Up: 5-question audit to find what to automate first
- delivery/client-report — monthly client report (pipeline, meetings, ROI)

For reasoning tasks (strategy, analysis, planning): do not force a skill — reason normally.
Skills are for deterministic, repeatable, single-action operations only.

## Current phase
Phase 1 — Foundation + Client Acquisition Engine
Target: $10K MRR by Jul 31, 2026 · $40K stretch by Dec 31, 2026

## Tech stack
Supabase (leads, pipeline, metrics) · Instantly (email campaigns) · Apify (scraping)
HeyReach (LinkedIn automation) · Anthropic Claude API · n8n (orchestration/automation layer)
See connections.md for full tool inventory. See .claude/rules/tech-defaults.md for model defaults and scripts pattern.

## n8n workflows
- signal-monitor — daily signal scrape + ICP scoring
- reply-detection — hourly Instantly poll → classify → hot lead alerts
- daily-brief — 8am multi-source pull → Claude summary
- lead-enrichment — webhook: new lead → enrich → score → Instantly campaign
See workflows/ for full specs. See references/n8n.md for API details.
