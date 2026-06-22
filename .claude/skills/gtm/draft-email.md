---
name: draft-email
description: Write a personalized 4-email outreach sequence in Tiago's voice for a specific company or contact. Use when asked to "draft email for [company]", "write the sequence for [name]", or "create outreach for [company]". Always read tiago-brand.md before generating.
model: sonnet
---

# Purpose
Generate a complete 4-email sequence ready to load into Instantly. Personalized per contact, written in Tiago's voice, referencing real buying signals.

# Inputs
Required: company name, contact name and title
Optional: account brief from research-account skill (run it first if not available)

# Pre-generation checklist
Before writing any email:
1. Read context/founders/tiago-brand.md (Part 1 for strategy, Part 2 for voice samples if filled)
2. Check if account brief exists. If not, run research-account skill first.
3. Confirm the top signal — this drives the hook.

# Email structure

## Email 1 — Day 0 — Cold intro (personalized hook)
Subject: [short, specific, no hype — reference the company or signal]
Length: 4-6 sentences max

Structure:
- Line 1: personalized first line referencing the specific signal (from account brief)
- Line 2-3: the problem they're living right now (map to their situation, not generic)
- Line 4: what Sonar does — one sentence, no features, just the outcome
- Line 5: CTA — soft ask, 15 minutes

## Email 2 — Day 3-4 — Value add
Subject: [reference a specific cost or friction]
Length: 5-7 sentences max

Structure:
- Reference what most companies their size experience (peer-level, not preachy)
- One specific insight about the hidden cost of their current approach
- What Sonar replaces or eliminates
- Proof point or result (if available from client cases — if not, use category data)
- Soft CTA

## Email 3 — Day 7-8 — Proof
Subject: [specific result — "how we built $X pipeline in Y days"]
Length: 5-8 sentences, can include a short bullet list

Structure:
- "I don't want to take more of your time without showing you something real."
- Specific example workflow or result (numbers if available, or show the system if not)
- The contrast: no SDRs, no ramp time, no guesswork
- Book a call CTA with booking link placeholder

## Email 4 — Day 12-14 — Breakup
Subject: [low-pressure close — "closing the loop"]
Length: 3-4 sentences max

Structure:
- Acknowledge no response, validate their time
- Leave the door open without any pressure
- One-line call to action if timing ever shifts

# Voice rules (read tiago-brand.md before writing)
- Short sentences. One idea per sentence.
- Data-backed: anchor claims with specifics, not generalities
- Peer-level: "you" not "companies like yours"
- No hedge words: not "might", "could potentially", "we believe"
- No hype: not "revolutionary", "game-changing", "10x your pipeline"
- The hook references ONE specific signal — not a generic compliment

# Output format
Return all four emails in this format:

---
SEQUENCE: [Company Name] — [Contact Name]
Generated: [date]
ICP Score: [from account brief if available]
Top Signal: [the signal driving the hook]

--- EMAIL 1 — Day 0 ---
Subject: [subject line]
[body]
— Tiago

--- EMAIL 2 — Day 3 ---
Subject: [subject line]
[body]
— Tiago

--- EMAIL 3 — Day 8 ---
Subject: [subject line]
[body]
— Tiago

--- EMAIL 4 — Day 14 ---
Subject: [subject line]
[body]
— Tiago

LOADING INSTRUCTIONS:
- Replace [BOOKING LINK] with Tiago's Calendly URL before loading
- Load into Instantly as a sequence with the day delays above
- Tiago to review before activating
---

# Rules
- Never auto-load to Instantly. Output for Tiago review only.
- Never promise specific results (meetings, pipeline amounts) unless from an actual case
- If account brief is not available, ask for it before generating — personalization requires signals
- Subject lines: max 6 words, lowercase preferred, no exclamation marks
