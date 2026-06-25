# Tiago — Welcome to the Sonar Brain

This repo is the AI operating system for Sonar GTM. Everything the company knows lives here — the strategy, the brand, the offer, the playbooks, and the skills. Connect your AI here and you have a business partner that already knows everything, never forgets, and executes on demand.

---

## What this system can do for you right now

Once you connect your AI to this repo, you can say any of the following and it will execute:

### Outreach (the core product)
- **"Research Acme Corp before I reach out"** → returns a full account brief: company snapshot, buying signals detected, ICP score, and the exact first line to use in your email
- **"Draft the email sequence for John Smith at Acme"** → returns a 4-email sequence in your voice, ready to paste into Instantly
- **"Write a LinkedIn DM for Sarah Chen, VP Sales at XYZ Inc"** → 3-step LinkedIn sequence (connection + 2 follow-ups), ready for Expand.io
- **"Score this company: [name]"** → ICP fit score 0-100 with explanation of signals and recommended action

### Your content
- **"Write a LinkedIn post about pipeline architecture"** → full post in your voice, saved to drafts for your review. You post it. It never posts automatically.
- **"Create a post about why most VPs of Sales are doing outbound wrong"** → same, tailored to your content pillars
- **"What's trending in the GTM content space this week?"** → scrapes your 7 reference creators and tells you what's resonating, what gaps exist, and what you should post about

### Client delivery
- **"Run the onboarding for a new client called TechCorp"** → generates the client context file, intake form to send them, ICP workshop agenda, and technical access checklist
- **"What should we automate first for [client]?"** → runs the task audit (5 diagnostic questions) and returns a prioritized automation brief
- **"Generate the monthly report for [client]"** → pulls campaign metrics and formats a client-ready report

### Weekly operations
- **"Weekly report"** → pulls Instantly data and formats the Friday scorecard
- **"What are our priorities this week?"** → reads current pipeline and tells you where to focus

---

## What gets automated WITHOUT you doing anything (n8n workflows)

Once Lucas sets up the n8n server, these run on their own:

| Workflow | When | What it does |
|---|---|---|
| Daily Brief | Every weekday 8am | Pulls your signals + campaign data → Claude writes a brief → sends to your Telegram |
| Signal Monitor | Every day 7am | Scans the ICP universe for new buying signals → sends top 3-5 accounts to your Telegram |
| Reply Detection | Every hour (business hours) | Polls Instantly for new replies → classifies them → alerts you instantly on positive replies with a suggested response |
| Lead Enrichment | When you add a lead | Receives a name + LinkedIn URL → researches + scores → if qualified, adds them to the right Instantly campaign automatically |

You wake up knowing exactly what to do. Hot replies surface immediately. Qualified leads enter campaigns without you touching Instantly.

---

## Setup — one time only (10 minutes)

### Step 1 — Install Claude Code
Download: [claude.ai/code](https://claude.ai/code) → install the desktop app → subscribe to Claude Pro ($20/mo)

### Step 2 — Clone the repo
Open Terminal (Cmd+Space → "Terminal") and paste this exactly:
```
git clone https://github.com/sonargtmlucas/sonar-core.git
cd sonar-core
```

### Step 3 — Run onboarding
Still in Terminal, type:
```
claude
```
Claude Code opens. Then type: `/onboarding`

It will ask who you are → say Tiago → it sets everything up automatically.

**That's it. You never touch the terminal again after this.**

---

## Daily workflow — 3 steps

**Every time you open Claude Code:**

```
1. Open Terminal → cd sonar-core → git pull
2. Type: claude
3. Type: /morning-coffee
```

`git pull` syncs what Lucas built since your last session. `/morning-coffee` tells you exactly what to focus on today based on your ClickUp tasks, the latest signals, and what Lucas worked on.

**At the end of your session**, just tell Claude:
> "Commit what we did today"

It logs everything and pushes. Lucas will see it when he does `git pull` in his next session.

---

## What to say to get things done

Just talk naturally. Examples:
> "Research Acme Corp before I reach out"
> "Write a LinkedIn post about why most VPs of Sales are doing outbound wrong"
> "Draft the email sequence for John Smith, CRO at Rippling"
> "Score this company against our ICP: [name]"
> "What should I post about this week?"
> "Morning coffee" → daily briefing

---

## The ONE thing you need to fill in yourself

Open `context/founders/tiago-brand.md` and scroll to **PART 2 — PERSONA CAPTURE**.

There are 25 questions. They cover your career, your transformation story, your opinions, and your voice. **The content engine cannot produce authentic posts without these answers.**

The fastest way to fill them:
1. Open your ChatGPT with the Sonar folder loaded
2. Ask it: *"Based on everything you know about me, answer these questions in my voice as specifically as possible. I'll review and correct anything that's off."*
3. Copy the answers into the file under each question
4. Push the updated file to the repo (or ask Lucas to do it)

The more specific your answers, the more your posts will sound like YOU and not like generic LinkedIn content.

---

## What you own in this system

| You own | Lucas owns |
|---|---|
| All client-facing communication | All technical builds |
| Offer design and pricing | System architecture |
| Content strategy and posting | Automations and scripts |
| Discovery calls and sales | Website and product |
| Target account selection | Supabase and integrations |

Neither overrides the other in their domain. For shared decisions (strategy, pricing changes, equity), you both need to agree.

---

## Approval gates — nothing sends without you

The system generates. You approve. You send.

- Email sequences → you review in Instantly before activating
- LinkedIn DMs → you review before Expand.io loads them
- Content posts → you review drafts before posting
- Client proposals → both of you review before sending

The AI never posts, sends, or commits to anything on your behalf automatically. It prepares, you decide.

---

## Access setup checklist

Lucas needs to give you:
- [ ] Collaborator access to this repo (github.com/sonargtmlucas/sonar-core → Settings → Collaborators)
- [ ] Supabase access (the project that stores leads, pipeline, and campaign data)

You need to set up:
- [ ] Claude Code or ChatGPT Codex connected to this repo
- [ ] Expand.io or Phantom Buster with your LinkedIn connected (for LinkedIn automation)
- [ ] Your Instantly account (email campaigns — mailboxes warming until June 25-27)
- [ ] Telegram bot for your daily brief and alerts (Lucas sets this up, you just receive)

---

## Quick reference — things to say to the AI

| What you want | What to say |
|---|---|
| Research a prospect | "Research [company name]" |
| Write email sequence | "Draft email sequence for [name] at [company]" |
| Write LinkedIn DM | "Write LinkedIn DM for [name], [title] at [company]" |
| Score a lead | "Score [company] against our ICP" |
| Write a LinkedIn post | "Write a LinkedIn post about [topic or pillar]" |
| See what's trending | "What should I post about this week?" |
| Weekly performance | "Weekly report" |
| Onboard a new client | "Onboard new client [company name]" |
| Find what to automate | "Run task audit for [client name]" |

---

*Built by Lucas × Claude — June 2026*
*Sonar GTM · sonargtm.com*
