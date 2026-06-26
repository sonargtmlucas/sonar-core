---
name: morning-coffee
description: Daily briefing for the current user. Reads ClickUp tasks, latest build activity, pipeline status, and signals. Tells you exactly what to focus on today. Run at the start of any session.
model: sonnet
---

# Purpose
Start every session with full context: what the other founder did since you last worked, what's pending you specifically, and what the one priority for today is.

# When to run
Start of any work session. Either say "morning coffee" or "/morning-coffee".

# Execution

## Step 1 — Identify current user
Read `$SONAR_USER` env var. If blank, run the `/onboarding` skill first.

## Step 2 — Read what changed since last session
```bash
git log --oneline --since="24 hours ago"
```
Also read the last 20 lines of `docs/build-log.md` to get the most recent update.

## Step 3 — Pull ClickUp tasks for current user
Each person sets their own `CLICKUP_PERSONAL_TOKEN` in their local `.env`.
This ensures the query returns THEIR tasks, not someone else's.

```bash
curl -s "https://api.clickup.com/api/v2/team/90171339342/task?statuses[]=to%20do&statuses[]=in%20progress&order_by=priority&assignees[]=$CLICKUP_USER_ID" \
  -H "Authorization: $CLICKUP_PERSONAL_TOKEN" | python3 -c "
import sys, json
d = json.load(sys.stdin)
tasks = d.get('tasks', [])
print(f'Open tasks: {len(tasks)}')
for t in tasks[:5]:
    print(f'  [{t.get(\"priority\",{}).get(\"priority\",\"normal\")}] {t.get(\"name\")}')
" 2>/dev/null || echo "ClickUp not configured — check CLICKUP_PERSONAL_TOKEN in .env"
```

ClickUp user IDs:
- Lucas: `210067012`
- Tiago: get from ClickUp → Profile → Apps → API token page (user ID shown there)

If the API call fails, skip gracefully and continue with git log and Supabase data only.

## Step 4 — Check Supabase for overnight activity
```bash
npx ts-node -r dotenv/config scripts/supabase-insert.ts --table agent_logs --data '{"agent":"morning_coffee","action":"session_start","status":"success"}'
```

Also query recent signals and leads:
```bash
curl -s "https://pdfonsharlebsmfncwkj.supabase.co/rest/v1/signals?order=detected_at.desc&limit=3&select=company,icp_score,why_now,detected_at" \
  -H "apikey: $SUPABASE_SERVICE_ROLE_KEY" \
  -H "Authorization: Bearer $SUPABASE_SERVICE_ROLE_KEY"
```

## Step 5 — Generate the brief

Format the output differently based on who's asking:

**If SONAR_USER=lucas:**
```
Good morning, Lucas.

WHAT TIAGO DID:
[git log summary or "No commits from Tiago in the last 24h"]

YOUR OPEN TASKS:
[top 3 ClickUp tasks by priority]

NEW SIGNALS OVERNIGHT:
[top 3 signals from Supabase, or "Signal monitor hasn't run yet"]

TODAY'S PRIORITY:
[one specific thing based on context — the most unblocking action]
```

**If SONAR_USER=tiago:**
```
Buenos días, Tiago.

LO QUE LUCAS CONSTRUYÓ:
[git log summary o "Sin cambios técnicos en las últimas 24h"]

TUS TAREAS PENDIENTES:
[top 3 ClickUp tasks asignadas a Tiago]

SEÑALES NUEVAS:
[top 3 signals o "El monitor de señales no ha corrido aún hoy"]

TU PRIORIDAD HOY:
[una acción específica — lo que más desbloquea el revenue]
```

## Step 6 — End with a question
"What do you want to work on first?"

Wait for their answer and proceed accordingly.
