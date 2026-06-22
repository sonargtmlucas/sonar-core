---
name: task-audit
description: Run a Level Up task audit for a client to identify the highest-ROI automation opportunities. Use when asked to "what should we automate first for [client]", "run a task audit", or during the Architecture Sprint phase. Asks 5 diagnostic questions and outputs a prioritized automation brief.
model: sonnet
---

# Purpose
Find the 3 highest-ROI automation opportunities for a client using the Level Up framework. Output: a prioritized brief that tells Lucas exactly what to build first.

# Context required
Read context/clients/[client-name].md before running the audit.

# The 5 diagnostic questions (ask the client in order)

These questions surface what actually costs time and money — not what the client thinks they want automated.

1. DRUDGERY: "Walk me through your last 5 working days. What did you do 3 or more times that was manual, repetitive, or felt like copy-paste?"

2. SMART INTERN TEST: "What task did you do this week that you could theoretically hand off to a smart intern — but you did it yourself because explaining it would take longer than just doing it?"

3. SCALE CONSTRAINT: "If 500 new clients showed up tomorrow, what process would break first?"

4. GROWTH LEVER: "What one process, if it ran on autopilot, would bring you 500 more clients or $X more revenue?"

5. SILENT COST: "Where are you spending time that your clients never see and never pay for?"

# Analysis framework

After collecting answers, rank each identified task on two axes:
- Time cost: how many hours/week does this consume?
- Repeatability: is this exactly the same every time (deterministic) or does it require judgment?

High repeatability + high time cost = automate first
Low repeatability + high time cost = augment with AI assist (not full automation)
Low repeatability + low time cost = do not automate

# Output format
---
TASK AUDIT — [Client Name]
Date: [date]
Conducted by: [Tiago]

TASKS IDENTIFIED
[List all tasks surfaced in the audit with estimated hours/week]

AUTOMATION CANDIDATES (ranked by ROI)

PRIORITY 1 — [Task name]
Current time cost: [X hours/week]
Repeatability: [high/medium]
What it looks like automated: [1-2 sentences describing the automated version]
Estimated build time: [rough estimate]
Sonar IP it creates: [which reusable skill or script this becomes]

PRIORITY 2 — [Task name]
[Same format]

PRIORITY 3 — [Task name]
[Same format]

DO NOT AUTOMATE YET
[Tasks that require judgment or are low-value — with one sentence explaining why]

RECOMMENDED NEXT STEP
[ ] Approve priorities 1-3 with client
[ ] Add to Architecture Sprint scope
[ ] Lucas to estimate technical build for approved items

VALUE SUMMARY
If all 3 automations are built: [X hours/week saved] = [value at client's estimated hourly cost]
---

# Rules
- Ask the 5 questions in a conversational way — not as a form. Let the client's answers lead.
- The goal is specificity: "I send the same follow-up email to every trial user who doesn't log in on day 3" is better than "email follow-ups"
- Do not recommend automating anything that requires judgment about what to do in unexpected situations
- Every automation candidate should map to a reusable Sonar skill (if the skill doesn't exist, note that it should be built)
