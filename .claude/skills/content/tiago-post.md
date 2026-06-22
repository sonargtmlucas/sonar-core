---
name: tiago-post
description: Generate a LinkedIn post in Tiago's exact voice. Use when asked to "write a LinkedIn post", "create content for [pillar]", or "draft a post about [topic]". Always read tiago-brand.md before generating. Output goes to drafts/linkedin-posts/ for Tiago review before posting.
model: sonnet
---

# Purpose
Produce one LinkedIn post in Tiago's voice. High quality, specific, publishable after light editing.

# Pre-generation (required)
Read context/founders/tiago-brand.md in full before writing.
Pay attention to:
- Part 1: hook formulas, content pillars, voice description
- Part 2: persona capture answers (if filled — use these for specific examples and opinions)

# Post structure

## The hook (line 1 — the only thing most people read)
The hook must stop the scroll. One sentence. No throat-clearing.

Hook formulas (choose the one that fits the topic):
1. The mistake: "Most [role] [do X wrong]. Here's what actually works:"
2. The before/after: "I spent [time] doing [thing] manually. Here's what changed:"
3. The counterintuitive: "[Bold claim]. Here's why I know this:"
4. The signal insight: "Your CRM can't tell you [X]. But [signal] can."
5. The build: "We just [action at Sonar]. [Result]. Here's what happened:"
6. The peer challenge: "If you're a [role] doing [X], stop. [Why]."

## The body (lines 2-8, white space required)
- One idea per line or short paragraph
- Specific over generic: numbers, examples, named tools, real situations
- If Tiago's persona answers are filled: pull real examples, quotes, and stories from Part 2
- If not filled: write strong hypothetical but flag as "placeholder — replace with real example"
- Build toward the key insight — do not reveal it in the hook

## The insight / payoff (last 2-3 lines before CTA)
The single most valuable thing in the post. The reader should feel they learned something they didn't know 2 minutes ago.

## The CTA (final line, optional)
Soft CTA only — no hard pitch. Options:
- "If you want the full framework, drop a comment."
- "I've got a blueprint for this — DM me and I'll send it."
- "Doing a Revenue Audit for 3 companies this week. DM if you want one."
- Or no CTA — some posts end with the insight and that's stronger.

# Pillar selection guide
If no pillar is specified, default to Pipeline Architecture (Monday) or The Sonar Build (Friday).

- Monday → Pipeline Architecture (frameworks, how-to, shareable)
- Wednesday → AI in Sales or Signal-Based Selling (opinion, data-backed, contrarian)
- Friday → The Sonar Build or Revenue Leadership (personal, transparent, story)

# Output format
Save draft to: drafts/linkedin-posts/YYYY-MM-DD-[topic-slug].md

File content:
---
date: YYYY-MM-DD
pillar: [pillar name]
status: draft
hook-formula: [which formula was used]
notes: [any replacements needed, e.g., "replace placeholder in line 4 with real example from Tiago"]

---

[POST CONTENT — exactly as it should appear on LinkedIn]

---
Estimated read time: [X] seconds
Word count: [N]
---

# Rules
- Do not post. Output to drafts/ only. Tiago reviews and posts manually.
- No emoji (Tiago's brand is text-only, no emoji)
- White space matters on LinkedIn — short paragraphs, line breaks between ideas
- If Part 2 of tiago-brand.md is not filled, add a [NEEDS REAL EXAMPLE] note wherever a personal story would strengthen the post
- Max length: 1,300 characters (LinkedIn ideal) — can go to 3,000 if the content earns it
- Never write "I'm excited to share", "Game changer", or "Thought leader"
