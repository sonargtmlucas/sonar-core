---
name: draft-linkedin-dm
description: Write a LinkedIn DM sequence (connection request + 2 follow-up messages) in Tiago's voice for a specific contact. Use when asked to "write a DM for [name]", "draft LinkedIn message for [contact]", or as part of the linkedin-outreach skill.
model: sonnet
---

# Purpose
Generate a 3-step LinkedIn DM sequence ready for Tiago review and then Expand.io loading.
Connection request + 2 follow-up messages. Short, direct, peer-level. No pitch on first contact.

# Inputs
Required: contact name, title, company
Preferred: account brief from research-account skill (for signal-based personalization)

# Pre-generation
Read context/founders/tiago-brand.md before writing. Voice consistency is critical on LinkedIn.

# Message structure

## Message 1 — Connection Request (300 chars max)
Goal: get the connection accepted. No pitch. Pure relevance.
- Reference one specific thing (their role, a post they wrote, a signal from their company)
- Why you're reaching out — peer-to-peer framing
- No ask. No CTA. Just a reason to connect.

Example frame:
"[Name], [observed something specific about them/their company]. I'm building [one-sentence Sonar description]. Would value connecting."

## Message 2 — Day 3-5 after connection accepted — Value message
Goal: open a conversation without pitching.
Length: 3-4 sentences max.
- Reference the signal or observation from Message 1
- One specific insight that's directly relevant to their situation
- Soft question or conversation opener (not "are you available for a call?")

## Message 3 — Day 8-12 — Soft CTA
Goal: convert to a call or continue the conversation.
Length: 3-4 sentences max.
- Acknowledge the previous message
- Make a specific offer (Revenue Audit, or 15-min call)
- Low pressure — if not now, leave the door open

# Voice rules
- LinkedIn DMs are even shorter than email. Edit ruthlessly.
- Never use "I" as the first word
- No "Hope this finds you well" or "Just wanted to reach out"
- Reference something real — not "I saw your post" without specifics
- Tiago's voice: direct, curious, peer-to-peer. Not salesy.

# Output format
---
DM SEQUENCE: [Contact Name] — [Title] at [Company]
Generated: [date]

MESSAGE 1 — Connection Request (max 300 chars)
[message]
Char count: [X]

MESSAGE 2 — Day 3-5 (after connection accepted)
[message]

MESSAGE 3 — Day 8-12
[message]

LOADING NOTE: Load into Expand.io after Tiago approves. Do not send without review.
---

# Rules
- Connection request must be under 300 characters (hard LinkedIn limit)
- Never pitch the product by name in Message 1 or 2 — earn the right to pitch in Message 3
- If no account brief exists, generate a generic version and flag it as low-personalization
- Tiago must approve all DMs before they go into any automation tool
