---
name: onboard-client
description: Run the new client onboarding workflow. Takes a signed client's basic info and produces: a client context file, an ICP workshop agenda, a signal architecture brief, and a technical access checklist. Use when a new client signs or when asked to "onboard [client name]".
model: sonnet
---

# Purpose
Get a new client from signed contract to ready-for-launch in 7 days. By the time Tiago and Lucas get on the onboarding call, 80% of the work is done.

# Inputs
Required: client company name, primary contact name/email, brief description of their business and offer

# Workflow

## Step 1 — Create client context file
Create: context/clients/[client-name].md

Use this template:
```
# [Client Name] — Client Context

## Company
[Company name, industry, size, website]

## Their offer
[What they sell, ACV, ICP, target market]

## Their current stack
CRM: [TBD until intake form returned]
Outbound: [TBD]
LinkedIn Sales Nav: [Y/N TBD]

## Why they hired Sonar
[Their stated pain — inconsistent pipeline, no signal layer, manual prospecting]

## Primary contact
[Name, title, email, LinkedIn]

## Engagement
Type: [Architecture Sprint / System Deployment / Managed Operation]
Start date: [date]
Monthly: $[X]

## ICP (their client)
[To be filled in ICP workshop]

## Signal architecture
[To be filled in workshop]

## Status
[ ] Intake form sent
[ ] Intake form returned
[ ] ICP workshop completed
[ ] Signal architecture defined
[ ] Lead list built
[ ] First campaign live
[ ] First meeting booked
```

## Step 2 — Send intake form
Generate an intake form request email for Tiago to send:

"Hi [name], excited to get started. Before our kickoff call, I'd love to get some context so we can make the most of our time together. Could you fill out this quick form? [FORM LINK or list of questions below]

Questions:
1. Describe your ideal client in one paragraph — not their industry, their situation.
2. What does your offer solve for them? One sentence.
3. What outbound have you tried before? What worked? What didn't?
4. What tools are you currently using? (CRM, email, LinkedIn, enrichment)
5. How does a typical deal close for you? Who's involved, how long does it take?
6. What does 'success in 90 days' look like for you?
7. Do you have existing case studies or client results we can reference?"

## Step 3 — Prepare ICP workshop agenda
Generate a 60-minute workshop agenda for Tiago to run with the client:

---
ICP WORKSHOP AGENDA — [Client Name]
Duration: 60 minutes

0:00 — 0:10: Context (what we're doing, why it matters)
0:10 — 0:25: Ideal Company Profile (industry, size, stage, stack, pain)
0:25 — 0:40: Ideal Contact Profile (title, seniority, what they care about)
0:40 — 0:50: Anti-ICP (who NOT to target — saves wasted outreach)
0:50 — 1:00: Signal mapping (which signals indicate this company is in-market right now)

Outputs: ICP document, buyer persona, messaging angles, signal list
---

## Step 4 — Technical access checklist
Generate a checklist for Lucas:
- [ ] CRM API access or export (HubSpot/Salesforce)
- [ ] Outbound tool access (Apollo, Outreach, or Instantly)
- [ ] LinkedIn Sales Navigator (Tiago or client's seat)
- [ ] Domain setup for sending (if not using client's domain)
- [ ] Supabase project created for this client
- [ ] Client context file created in this repo (Step 1)
- [ ] Apify actor configured for their ICP search

# Output
Deliver all four items:
1. Client context file (saved to context/clients/[client-name].md)
2. Intake form email (for Tiago to send)
3. ICP workshop agenda
4. Technical access checklist (for Lucas)

# Rules
- Never start building before the intake form is returned
- Client context file is the source of truth for all future work on this engagement
- Log the engagement in Supabase (table: engagements) once database is configured
