---
name: onboarding
description: First-time setup for a new user of the Sonar AIOS. Asks who you are, writes your local identity file, and gets you ready to work. Run this once when you first clone the repo. Also use when onboarding a new client instance.
model: sonnet
---

# Purpose
Configure the AIOS for a specific person so it knows who it's talking to, what their role is, and what context to load in every session.

# When to run
- First time someone clones this repo
- When setting up a new client deployment
- When a new team member joins

# Execution

## Step 1 — Identify the user
Ask:

"Welcome to Sonar GTM. Let's get you set up. Who are you?

1. **Lucas** — Technical founder (you built this)
2. **Tiago** — Commercial founder (sales, content, client relationships)
3. **Client / other** — I'll ask for more details

Type 1, 2, or 3."

## Step 2 — Write settings.local.json
Based on the answer, write `.claude/settings.local.json` in the repo root:

**If Lucas (1):**
```json
{
  "env": {
    "SONAR_USER": "lucas",
    "SONAR_ROLE": "technical"
  }
}
```

**If Tiago (2):**
```json
{
  "env": {
    "SONAR_USER": "tiago",
    "SONAR_ROLE": "commercial"
  }
}
```

**If client / other (3):**
Ask: "What's your name and company?"
Then write:
```json
{
  "env": {
    "SONAR_USER": "[name_lowercase]",
    "SONAR_ROLE": "client",
    "SONAR_CLIENT_NAME": "[Company Name]"
  }
}
```

Use the Write tool to create `.claude/settings.local.json` with the correct content.

## Step 3 — Confirm environment
Run:
```bash
echo "SONAR_USER is: $SONAR_USER"
```

If it returns the correct value, identity is confirmed.
If it returns blank, tell the user: "Close and reopen Claude Code for the identity to load — the env var needs a fresh session."

## Step 4 — Load their context and brief them
Based on who they are:

**Lucas:** Read `context/founders/lucas.md` and `docs/build-log.md`. Tell him:
- What was last built
- What's next in the roadmap
- Any pending technical tasks in ClickUp

**Tiago:** Read `context/founders/tiago.md` and `docs/build-log.md`. Tell him:
- Current system status (what's running, what's pending him)
- His pending tasks: Q17 and Q20 in tiago-brand.md, LinkedIn in HeyReach, prospect list
- How to use the system daily (3-step workflow below)

**Client:** Read `context/shared/company.md` for their deployment. Tell them what the system does and how to interact with it.

## Step 5 — For Tiago only: explain the daily workflow
"Here's how you work with this system:

**Every session:**
1. Open Terminal → `cd sonar-core` → `git pull`
2. Open Claude Code (or claude.ai connected to this repo)
3. Tell me what you need — I know the full context

**When you're done:**
Just tell me: 'commit what we did today' and I'll log it and push.

That's it. No commands to memorize. No files to manage."

## Step 6 — Done
Confirm: "You're set up as [name]. This identity is saved locally and won't be committed to GitHub. Next session starts automatically with your context."
