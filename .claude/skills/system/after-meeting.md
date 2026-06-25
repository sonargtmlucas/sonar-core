---
name: after-meeting
description: Run after every Lucas x Tiago meeting. Reads the transcript (from Fathom or a pasted file), extracts decisions and action items, creates ClickUp tasks in the right person's list, and writes a brief to the references/ file. This is the only post-meeting step needed — everything else follows from here.
model: sonnet
---

# Purpose
Turn a meeting into clean, actionable output in under 2 minutes. No manual task creation, no transcript hunting.

# When to run
After any Lucas x Tiago call. Either say "after meeting" or "/after-meeting". Optionally pass a Fathom recording ID or URL.

# Inputs
- **Fathom recording ID or URL** (preferred) — Claude fetches transcript directly
- **OR** a file path like `references/june_25_call.md` if transcript was already pasted
- **OR** paste the transcript inline

# Execution

## Step 1 — Get the transcript
If a Fathom recording ID or URL is provided, fetch via Fathom MCP:
- URL/share link → use `get_recording_by_url` → get recording_id → `get_meeting_transcript`
- Numeric ID → try `get_meeting_transcript` directly

If a file path is provided, read it with the Read tool.

If transcript is pasted inline, use it directly.

## Step 2 — Extract structured output
Read the full transcript and extract:

**Decisions** — things that were resolved, agreed upon, or changed. Be specific. Not "we discussed X" but "decided to use X instead of Y because Z."

**Lucas action items** — concrete tasks with enough context to act on.

**Tiago action items** — same. Flag URGENT if mentioned or if it's blocking something else.

**Things to update in the AIOS** — context changes, decisions that affect how the AI should behave, architecture changes.

## Step 3 — Write the brief to references/

Check if a file already exists for this meeting date (e.g. `references/june_25_call.md`).

If yes: add/replace the Brief section at the top (keep full transcript intact below).
If no: create `references/[date]_call.md` with brief + transcript.

Brief format (exactly this):
```markdown
## Brief (AI reference — do not put in ClickUp)

**Decisions:**
- [decision 1]
- [decision 2]

**Action items by person (all in ClickUp):**

Lucas: [comma-separated one-liners]

Tiago: [comma-separated one-liners, flag URGENT where needed]
```

## Step 4 — Create ClickUp tasks

ClickUp IDs:
- Lucas list: `901714775127`
- Tiago list: `901714775128`
- Token: read from `$CLICKUP_PERSONAL_TOKEN` or `.env`

For each action item, call the ClickUp API:
```bash
curl -s -X POST "https://api.clickup.com/api/v2/list/[LIST_ID]/task" \
  -H "Authorization: [TOKEN]" \
  -H "Content-Type: application/json" \
  -d '{"name": "[task]", "description": "[context from transcript]", "priority": [1=urgent|2=high|3=normal]}'
```

Priority rules:
- 1 (urgent): blocks outreach, blocks a client, mentioned as ASAP or "before Monday"
- 2 (high): mentioned as a priority or part of the weekly goal
- 3 (normal): everything else

Do NOT create duplicate tasks. First check existing tasks in each list:
```bash
curl -s "https://api.clickup.com/api/v2/list/[LIST_ID]/task" \
  -H "Authorization: [TOKEN]"
```
If a task with a very similar name already exists, skip or update it instead of creating a duplicate.

## Step 5 — Update AIOS if needed

If any decision changes how the system works (new tool, new process, architecture change, pricing update), update the relevant file:
- Architectural → `decisions/[date]-[topic].md`
- Tech stack change → update `docs/build-log.md`
- Context change → update `context/shared/company.md` or relevant file
- New approved prices → `context/shared/company.md`

## Step 6 — Confirm

Output a clean summary:
```
Meeting brief written to: references/[date]_call.md

ClickUp tasks created:
  Lucas (N): [task names]
  Tiago (N): [task names]

AIOS updated: [files changed, or "none"]
```

# What NOT to do
- Do NOT create a ClickUp doc or folder for the meeting
- Do NOT put the transcript in ClickUp
- Do NOT put the brief in ClickUp
- Do NOT create Phase lists or tracking lists
- Do NOT summarize things that don't require action
