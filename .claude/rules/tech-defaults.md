# Technical Defaults

## Credentials
All API keys and tokens live in `.env` — never commit to the repo.
See `connections.md` for which env vars each tool uses.

## Claude model defaults
- `claude-sonnet-4-6` — reasoning, briefs, complex analysis
- `claude-haiku-4-5-20251001` — classify, score, format, atomic tasks (set in skill YAML frontmatter)
- All AI calls are server-side only — never from client browser
- Always load relevant context files before generating output

## Scripts pattern
Skills call scripts directly via Bash when there is no API server:

```bash
npx ts-node scripts/apify-scrape.ts --url "URL" --type "person|company"
npx ts-node scripts/supabase-insert.ts --table TABLE --data '{"key":"val"}'
```

Once Sonar is deployed on Vercel, skills will call Vercel API endpoints instead.

## Git workflow
- Main branch: `main`
- One repo per client when deploying Sonar for clients
- This repo (`sonar-core`) is the Sonar template
- `.env` files are never committed — enforced via `.gitignore`
