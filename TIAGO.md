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

## How to connect and use it

### Option A — Claude Code (recommended, same as Lucas)

1. Download Claude Code: [claude.ai/code](https://claude.ai/code) (desktop app or VS Code extension)
2. Subscribe to Claude Pro ($20/mo) or Max ($100/mo)
3. Clone this repo to your Mac:
   ```
   git clone https://github.com/sonargtmlucas/sonar-core.git
   cd sonar-core
   ```
4. Open Claude Code inside the `sonar-core` folder
5. That's it. Claude reads `CLAUDE.md` automatically and knows everything about Sonar.

From there, you just talk to it in plain English. Examples:
> "Research Hubspot competitor Attio before I reach out to their VP Sales"
> "Write a LinkedIn post for Monday — Pipeline Architecture pillar"
> "Draft the email sequence for the CEO of Rippling"

### Option B — ChatGPT with Codex (if you prefer ChatGPT)

1. Go to [chatgpt.com](https://chatgpt.com) → open a Project
2. In the Project settings, connect your GitHub account and select the `sonargtmlucas/sonar-core` repo
3. Now ChatGPT (Codex) has access to all the files in this repo as context
4. Talk to it the same way — it reads the same CLAUDE.md and context files

**Note:** Claude Code is better for this specific setup because it was designed for file-based context. ChatGPT with Codex works but may need you to reference files more explicitly.

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
