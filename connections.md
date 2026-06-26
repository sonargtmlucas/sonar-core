# Connections — Sonar GTM AIOS

This file defines every external system the AI can reach and interact with.
Credentials live in `.env` (never committed). Technical API details live in `references/`.

---

## Status legend
- **Live** — connected, tested, in active use
- **Configured** — credentials set, not yet in active use
- **Pending** — decision made, not yet set up
- **Deprecated** — replaced, no longer used

---

## Task Management

| Tool | Status | Access method | Credentials |
|---|---|---|---|
| ClickUp (SonarGTM workspace) | Live | REST API + MCP | `CLICKUP_PERSONAL_TOKEN`, `CLICKUP_USER_ID` |

- Workspace ID: `90171339342` (SonarGTM)
- 2 active lists: Lucas — Active Tasks (`901714782244`), Tiago — Active Tasks (`901714782245`)
- MCP tools available: `mcp__claude_ai_ClickUp__*`
- Technical reference: none needed (API is simple enough inline)

---

## Database

| Tool | Status | Access method | Credentials |
|---|---|---|---|
| Supabase | Live | `@supabase/supabase-js` + MCP | `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY` |

- Project ref: `pdfonsharlebsmfncwkj`
- MCP tools available: `mcp__claude_ai_Supabase__*` (read/explore only — writes go through scripts/)
- Technical reference: `references/supabase.md`

---

## Email Outreach

| Tool | Status | Access method | Credentials |
|---|---|---|---|
| Instantly | Configured (warming) | REST API | `INSTANTLY_API_KEY` |

- Campaigns active ~Jun 27, 2026
- Campaign A (DFY): `26afd277-e0a0-449b-8315-81ea3b02ba2f`
- Campaign B (Discovery): `bbb8b66d-7651-4fa3-88f4-4b591be593f2`
- Technical reference: `references/instantly.md`

---

## LinkedIn Outreach

| Tool | Status | Access method | Credentials |
|---|---|---|---|
| HeyReach | Configured | REST API | `HEYREACH_API_KEY` |

- Plan: $79/mo
- Tiago's LinkedIn: pending connection
- Lucas's LinkedIn: pending connection (add via app.heyreach.io)
- Technical reference: `references/heyreach.md`

---

## Web Scraping

| Tool | Status | Access method | Credentials |
|---|---|---|---|
| Apify | Configured | REST API via `scripts/apify-scrape.ts` | `APIFY_API_KEY` |
| Proxycurl | Configured | REST API | `PROXYCURL_API_KEY` |

- Apify: general web + job boards ($0.10–0.50/run)
- Proxycurl: LinkedIn person/company enrichment ($0.01/person, $0.02/company)
- Technical reference: `references/apify.md`

---

## Orchestration

| Tool | Status | Access method | Credentials |
|---|---|---|---|
| N8N | Live (local) | REST API + webhook triggers | `N8N_API_KEY` |

- Local: `http://localhost:5678` — start with `bash ~/start-n8n.sh`
- Cloud migration: pending (n8n.cloud with sonargtm.com email)
- 4 active workflows: signal-monitor, reply-detection, daily-brief, lead-enrichment
- Technical reference: `references/n8n.md`

---

## AI

| Tool | Status | Access method | Credentials |
|---|---|---|---|
| Anthropic Claude API | Live | REST API (server-side only) | `ANTHROPIC_API_KEY` |

- Sonnet (`claude-sonnet-4-6`): reasoning, briefs, complex tasks
- Haiku (`claude-haiku-4-5-20251001`): classify, score, format, atomic tasks
- Never call from client browser — server-side only

---

## Meetings

| Tool | Status | Access method | Credentials |
|---|---|---|---|
| Fathom | Live | MCP | none (OAuth via MCP) |

- MCP tools available: `mcp__claude_ai_Fathom__*`
- Use `list_meetings` to discover, `get_meeting_transcript` for content
- All tools are read-only

---

## Calendar & Docs

| Tool | Status | Access method | Credentials |
|---|---|---|---|
| Google Calendar | Live | MCP | none (OAuth via MCP) |
| Google Drive | Live | MCP | none (OAuth via MCP) |
| Notion | Live | MCP | none (OAuth via MCP) |

- MCP tools: `mcp__claude_ai_Google_Calendar__*`, `mcp__claude_ai_Google_Drive__*`, `mcp__claude_ai_Notion__*`

---

## Lead Data

| Tool | Status | Access method | Credentials |
|---|---|---|---|
| Apollo.io | Pending | CSV export → Lead Enrichment webhook | n/a |

- Decision: purchase dedicated account with sonargtm.com email
- Workflow: Tiago exports CSV → Lucas loads to `/webhook/leads/new`
- API integration: evaluate after manual flow is validated

---

## Deprecated

| Tool | Replaced by | Notes |
|---|---|---|
| Telegram | Claude Code mobile | Removed Jun 24, 2026 |
| Expand.io | HeyReach | Decision made Jun 24, 2026 |
