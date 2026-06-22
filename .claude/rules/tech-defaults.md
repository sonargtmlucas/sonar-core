# Technical Defaults

## API keys
Store in .env — never commit to the repo.
Required env vars:
- APIFY_API_KEY — web scraping (Apify actors)
- ANTHROPIC_API_KEY — Claude API calls
- SUPABASE_URL — Sonar Supabase project URL
- SUPABASE_SERVICE_ROLE_KEY — server-side writes (never expose to client)
- INSTANTLY_API_KEY — Instantly campaign management
- EXPAND_IO_API_KEY — LinkedIn automation (when configured)

## Supabase
- Client: @supabase/supabase-js
- All writes go through scripts/ or API routes — never raw MCP inserts in production
- MCP (mcp__claude_ai_Supabase__*) is for exploration and read queries only
- RLS: disabled for now (single-team, no public access)
- Key tables: leads, pipeline_accounts, campaigns, client_configs, signal_logs

## Apify
- API key: APIFY_API_KEY from env
- Base URL: https://api.apify.com/v2
- Key actors:
  - LinkedIn Profile Scraper: apidojo/linkedin-scraper
  - LinkedIn Company Scraper: apidojo/linkedin-company-scraper
  - Web content: apidojo/website-content-crawler
- Rate limit: respect 1 req/sec for scraping

## Instantly
- API: https://api.instantly.ai/api/v1/
- Auth: Bearer INSTANTLY_API_KEY
- Key endpoints: /campaigns, /leads, /analytics/campaign/summary

## Claude API
- Model: claude-sonnet-4-6 for reasoning tasks
- Model: claude-haiku-4-5-20251001 for atomic/cheap tasks (set in skill YAML)
- All AI calls are server-side only — never from client browser
- Context first: always load relevant context files before generating output

## Scripts pattern
Skills without a server call scripts directly via Bash:
  npx ts-node scripts/apify-scrape.ts --url "URL" --type "person|company"
  npx ts-node scripts/supabase-insert.ts --table TABLE --data '{"key":"val"}'

Once Sonar MVP is on Vercel, skills will call the Vercel API endpoints instead
(same pattern as Jarvis localhost:3000 but with the production URL).

## n8n
Installed locally at ~/.n8n/
Start: npx n8n or n8n start. Default port: 5678 → http://localhost:5678

Role in the stack: orchestration layer for scheduled and webhook-triggered automations.
Claude handles reasoning. n8n handles scheduling, API pipelines, routing, and notifications.

Active workflows (see workflows/ folder for full specs):
- signal-monitor: daily 7am — Apify ICP scrape → score → Telegram alert
- reply-detection: hourly — Instantly poll → classify → alert on positive replies
- daily-brief: daily 8am — Supabase + Instantly → Claude sonnet → Telegram
- lead-enrichment: webhook — new lead → Apify scrape → score → Instantly campaign

n8n calls Claude API via HTTP Request node:
POST https://api.anthropic.com/v1/messages
Headers: x-api-key: {{ $env.ANTHROPIC_API_KEY }}, anthropic-version: 2023-06-01
Use haiku for classify/score/format tasks. Use sonnet for briefs and complex reasoning.

Skills can also be triggered from n8n via HTTP Request to the Sonar API (once on Vercel).

## Git workflow
- Main branch: main
- One repo per client when deploying Sonar for clients
- This repo (sonar-gtm) is the Sonar-Core template
- .env files never committed — add to .gitignore
