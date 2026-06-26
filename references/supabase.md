# Supabase — Technical Reference

Project ref: `pdfonsharlebsmfncwkj`
URL: `https://pdfonsharlebsmfncwkj.supabase.co`

## Access rules
- MCP (`mcp__claude_ai_Supabase__*`) — read/explore only
- All production writes go through `scripts/supabase-insert.ts` or API routes
- RLS: disabled (single-team, no public access)

## Key tables

| Table | Purpose |
|---|---|
| `leads` | Enriched lead records (name, company, icp_score, why_now, personalized_line) |
| `pipeline_accounts` | Accounts in active sales motion |
| `campaigns` | Campaign configs and metadata |
| `client_configs` | Per-client deployment settings |
| `signal_logs` | Raw signal events (hiring, funding, web activity) |

## Scripts

```bash
# Insert a row
npx ts-node scripts/supabase-insert.ts --table leads --data '{"name":"...","company":"..."}'

# Query via MCP (exploration only)
mcp__claude_ai_Supabase__execute_sql
```

## Client init (TypeScript)

```typescript
import { createClient } from '@supabase/supabase-js'
const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!)
```
