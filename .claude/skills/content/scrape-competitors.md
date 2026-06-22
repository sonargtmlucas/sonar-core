---
name: scrape-competitors
description: Scrape the top GTM/outbound creators on LinkedIn to find trending topics, top-performing hooks, and content gaps. Use when asked to "research what's trending", "what are competitors posting about", or before generating a batch of content posts. Returns a content insights brief.
model: sonnet
---

# Purpose
Scan the competitive content landscape to find what's resonating with Tiago's ICP, identify gaps, and surface specific topic ideas.

# Target creators to scrape
The 7 creators Sonar tracks for content intelligence:
1. Brendan Short — LinkedIn/newsletter (signal frameworks, data-driven GTM)
2. Yash Tekriwal — LinkedIn (educational frameworks, outbound systems)
3. Eric Nowoslawski — LinkedIn/YouTube (system reveals, Clay workflows)
4. Jorge Macías — LinkedIn (Clay tactics, enrichment)
5. Varun Anand — LinkedIn (transparency, founder-led sales)
6. Kyle Poyar — LinkedIn/newsletter (data-backed research, SaaS growth)
7. Noah Adelstein — LinkedIn (trend aggregation, GTM trends)

# Execution

## Step 1 — Scrape recent posts
For each creator with a LinkedIn URL, run:
```
npx ts-node scripts/apify-scrape.ts --url "[CREATOR_LINKEDIN_URL]" --type "posts" --limit 20
```

Scrape last 20 posts per creator. Extract:
- Post text
- Engagement (likes + comments if available)
- Topic/theme
- Hook formula used
- Format (story, framework, data, hot take, list, case study)

## Step 2 — Analyze patterns
After scraping all 7 creators, analyze:

Top performing topics this week:
- Which themes appear across 3+ creators (high resonance)
- Which topics got the most engagement
- Any emerging trends or news events being referenced

Hook formulas winning right now:
- Which opening structures are getting the most engagement
- Examples of strong hooks from the batch

Content gaps (what no one is talking about):
- Topics in Tiago's pillars that are underrepresented
- Angles that contradict the consensus (contrarian opportunity)
- Signal-based or timing-related content (Tiago's differentiation)

## Step 3 — Generate content brief
Output a brief for the content/tiago-post skill to use:

---
CONTENT INTELLIGENCE BRIEF — [date]
Scraped: [N] posts from 7 creators

TRENDING TOPICS THIS WEEK
1. [Topic] — [which creators, sample hook]
2. [Topic] — [which creators, sample hook]
3. [Topic] — [which creators, sample hook]

TOP HOOK FORMULA THIS WEEK
[The specific hook pattern that got the most engagement, with 2-3 examples]

CONTENT GAPS (Tiago's opportunity)
1. [Gap or underrepresented angle]
2. [Contrarian take no one is making]
3. [Signal-based angle that differentiates from generic GTM content]

RECOMMENDED POSTS FOR THIS WEEK
1. [Post idea — pillar + angle + suggested hook] — High timing fit
2. [Post idea] — Trending topic with Tiago's spin
3. [Post idea] — Contrarian angle

CREATORS WITH HIGHEST ENGAGEMENT THIS WEEK
[Top 2-3 creators and what's working for them]
---

# Rules
- Do not generate actual posts in this skill — that's content/tiago-post
- Focus on patterns, not individual posts (avoid plagiarism)
- Always look for the angle that fits Tiago's signal-based differentiation
- If scraping fails for a creator, note it and continue with the rest
