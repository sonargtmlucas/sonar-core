# Sonar GTM — Operating Dashboard
## Lovable / v0 Prompt

Paste this into Lovable or v0.dev to generate the Sonar operating dashboard.
This is the INTERNAL product — what Sonar uses for itself and sells to clients.
It is NOT the marketing website (that's in prompts/website-v0.md).

---

Build the Sonar GTM operating dashboard. This is a dark, premium internal tool for a B2B revenue intelligence company. It shows real-time pipeline, outreach campaigns, AI agent activity, and buying signals all in one place.

## Tech stack
- Next.js 14 with TypeScript and App Router
- Tailwind CSS
- Supabase (PostgreSQL) for all data — use @supabase/supabase-js
- Recharts for all charts and graphs
- Lucide React for icons
- Framer Motion for subtle animations
- tabular-nums font feature for all numbers

## Brand / Design system
Colors (exact hex — do not substitute):
- Background: #050a12
- Panel/card: #0a1320
- Elevated card: #0e1928
- Border: rgba(28, 183, 255, 0.10)
- Border bright: rgba(28, 183, 255, 0.30)
- Signal Blue: #1CB7FF (primary accent — use for active states, highlights, CTAs)
- Success green: #37d399
- Warning amber: #ffb547
- Error red: #ff5d6c
- Text primary: #e8f4ff
- Text muted: #5a7a9a
- Text dim: #3a5a7a

Typography:
- UI: Inter (Google Font)
- All numeric values (KPI cards, metrics, scores): font-variant-numeric: tabular-nums, font-weight: 700
- Monospace accents (status labels, IDs): DM Mono

## Layout
Fixed sidebar (220px) + main content area + fixed topbar (56px).
Sidebar and topbar persist across all tabs.

## Navigation tabs (sidebar)
- Overview (home icon)
- Signal Engine
- Outreach
- Pipeline
- Accounts
- Settings (gear icon, bottom of sidebar)

Sonar logo in sidebar header: concentric ring SVG animation (3 rings pulsing outward from center dot in #1CB7FF). Logo text: "SONAR" in Inter ExtraBold.

Active nav item: Signal Blue left border + slightly lighter background.

---

## SCREEN 1 — Overview (default screen)

### Topbar
Left: "SONAR" logo + "GTM Operating System"
Center: nothing
Right: live clock (HH:MM UTC), "SYSTEM ACTIVE" badge with pulsing green dot, avatar/initials

### KPI Cards row (4 cards, full width)
Each card: dark panel (#0a1320), Signal Blue border, glassmorphic overlay.

Card 1 — Pipeline Generated
Value: ${pipeline_value} (from pipeline_accounts where stage != 'closed_lost', sum deal_value)
Label: "PIPELINE GENERATED"
Subtext: "All active stages"
Accent: Signal Blue glow

Card 2 — Meetings Booked
Value: count from meetings where status = 'scheduled' or 'completed'
Label: "MEETINGS BOOKED"
Subtext: "This month"
Accent: success green

Card 3 — Reply Rate
Value: X.X% (from campaigns table, avg reply_rate)
Label: "REPLY RATE"
Subtext: "Active campaigns avg"
Accent: amber if < 3%, green if >= 5%

Card 4 — Accounts Identified
Value: count from leads
Label: "ACCOUNTS IDENTIFIED"
Subtext: "Total in system"
Accent: Signal Blue

### Signal Activity Chart
Full-width card below KPIs.
Title: "Signal Activity — Last 7 Days"
Area chart using Recharts: x-axis = last 7 dates, y-axis = signals_detected from metrics_snapshots.
Line color: #1CB7FF, area fill: rgba(28,183,255,0.08).
No grid lines on y-axis, subtle x-axis grid only.

### Bottom row (2 columns, 60/40 split)

#### Left — High-Intent Opportunities
Table with columns: Company, Score, Top Signal, Status, Action
Query: leads where icp_score >= 75 order by icp_score desc limit 8
Score shown as badge: ≥85 = green, 75-84 = amber
"Research" button per row → opens slide-over with full account brief
Empty state: "Signal monitor is scanning. Check back after the next run."

#### Right — Agent Activity
Live feed of last 15 entries from agent_logs ordered by created_at desc.
Each entry: agent icon + agent name (colored badge) + action text + time ago + status dot.

Agent colors:
- scout: #1CB7FF (blue)
- signal_engine: #37d399 (green)
- outreach: #ffb547 (amber)
- enrichment: #a78bfa (purple)
- daily_brief: #fb7185 (rose)

Auto-refresh every 30 seconds (use SWR or React Query with 30s interval).

---

## SCREEN 2 — Signal Engine

### Topbar supplement
Right side: "Last scan: X minutes ago" + "Run Now" button (calls n8n webhook)

### Stats row (3 cards)
- Signals Detected Today: count from signals where detected_at >= today
- High Intent (75+): count from signals where icp_score >= 75 and detected_at >= today
- Active Sources: static "LinkedIn · Crunchbase · Job Boards"

### Live Account Scanner (main table)
Columns: Company, Domain, Signal Type, Evidence (truncated), ICP Score, Detected, Status, Action
Query: signals order by detected_at desc limit 50

Signal type badges with icons:
- hiring: briefcase icon, amber
- leadership_change: user-check icon, Signal Blue
- funding: trending-up icon, green
- expansion: globe icon, purple
- tech_shift: cpu icon, rose
- public_pain: message-square icon, orange

Score shown as number + colored bar (0-100).
Status dropdown per row: new / actioned / watch / passed (updates signal status in Supabase).
"Add to Outreach" button → creates lead record + adds to default campaign.

---

## SCREEN 3 — Outreach

### Stats row (4 metrics from campaigns table, avg)
Emails Sent · Open Rate · Reply Rate · Positive Replies

### Campaigns table
Query: campaigns order by created_at desc
Columns: Campaign Name, Status badge, Emails Sent, Open Rate, Reply Rate, Meetings Booked, Last Synced, Actions
Status badges: active=green, paused=amber, draft=dim, completed=muted

"Sync Instantly" button top-right → triggers scripts/instantly-report.ts and updates campaigns table.

### Message Preview panel (slide-over or right panel)
When a campaign row is clicked:
- Shows campaign name + status
- Shows a mock of Email 1 → Email 2 → Email 3 → Email 4 (styled as actual emails)
- Simple timeline showing sequence days
- "View in Instantly" external link

---

## SCREEN 4 — Pipeline

### KPI row
Total Pipeline ($) · Meetings Booked · Avg Deal Value · Close Rate (closed_won / total)

### Kanban board (horizontal scroll on mobile)
6 columns: Identified | Contacted | Replied | Meeting Booked | Proposal Sent | Closed Won

Each column: dark card, column header with count badge, scrollable card list.
Deal cards show: company name, contact name + title, ICP score badge, deal value (if set), last activity time.
Drag and drop between stages (updates pipeline_accounts.stage in Supabase).

Column colors (header accent):
- Identified: dim gray
- Contacted: Signal Blue
- Replied: amber
- Meeting Booked: green
- Proposal Sent: purple
- Closed Won: bright green with celebration micro-animation

Clicking a deal card opens a slide-over with full details + edit + notes.

---

## SCREEN 5 — Accounts

### Filter bar
Search by name/company · Filter by status · Filter by ICP score range · Sort by score/date

### Accounts table
Query: leads order by icp_score desc, created_at desc
Columns: Name, Title, Company, ICP Score, Signals (count badges), Status, Source, Added, Actions

ICP score shown as:
- 80-100: green badge "HIGH FIT"
- 60-79: amber badge "QUALIFIED"
- 40-59: dim badge "WATCH"
- <40: gray badge "PASS"

Signals shown as small colored chips (1 per signal type detected).

Actions per row:
- "Research" → runs research-account flow (POST to n8n webhook or Sonar API)
- "Draft Email" → opens DM/email composer with pre-filled account data
- "Add to Campaign" → dropdown to select Instantly campaign
- "View Pipeline" → jumps to pipeline view filtered to this account

### Add Lead button (top right)
Opens modal: Name, LinkedIn URL, Company (optional)
On submit: POST to n8n lead-enrichment webhook → system handles the rest automatically.
Modal shows "Processing..." state while n8n runs.

---

## SCREEN 6 — Settings

Simple settings page with sections:
- API Connections (Instantly: connected/disconnected with test button, Apify: status, Supabase: always connected)
- n8n Workflows (list of 4 workflows with toggle active/paused + last run time)
- Team (Tiago + Lucas with role badges)
- Notification preferences (Telegram on/off for each workflow)

---

## Global UX details
- Page transitions: fade (opacity 0→1, 150ms)
- Empty states: always include an icon, a title, and a one-line description. Never just "No data."
- Loading states: skeleton shimmer (matching card backgrounds) — no spinners
- Responsive: sidebar collapses to icon-only at < 1024px. Mobile shows bottom nav with 5 icons.
- Error states: subtle red banner at top with dismiss
- Numbers always use toLocaleString() for commas
- Dates: relative time (X minutes ago, Yesterday, Jun 18) — use date-fns
- All timestamps stored as UTC in Supabase, displayed in user's local timezone

## Supabase connection
Use environment variable NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.
Values:
- NEXT_PUBLIC_SUPABASE_URL=https://pdfonsharlebsmfncwkj.supabase.co
- NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBkZm9uc2hhcmxlYnNtZm5jd2tqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIwOTQ0NjEsImV4cCI6MjA5NzY3MDQ2MX0.zDH7jAJZHl9xsiq5tRUcrZXTege858dbHerI7CPPu4Q

All reads use the anon key. Never expose the service role key in the client.

## What NOT to build
- No authentication/login (internal tool, single team)
- No user management beyond the Settings page display
- No billing or subscription UI
- No emoji anywhere in the UI
- No gradients that look like consumer apps (keep it dark and technical)
- No tooltips on every element (only where genuinely needed)
