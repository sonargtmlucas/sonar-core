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
Installed locally at ~/.n8n — not running in production yet.
Will become the automation layer for scheduled workflows (signal monitoring, daily briefs).
Skills are designed to be callable from n8n workflows.

## Git workflow
- Main branch: main
- One repo per client when deploying Sonar for clients
- This repo (sonar-gtm) is the Sonar-Core template
- .env files never committed — add to .gitignore
