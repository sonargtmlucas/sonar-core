-- Sonar GTM — Database Schema
-- Run this in: app.supabase.com → project pdfonsharlebsmfncwkj → SQL Editor → Run
-- Order matters: run the full script at once.

-- =========================================================
-- LEADS — all sourced contacts
-- =========================================================
create table if not exists leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  title text,
  company text,
  company_domain text,
  linkedin_url text,
  email text,
  icp_score integer default 0,
  signals jsonb default '[]',
  why_now text,
  personalized_line text,
  status text default 'new', -- new | added_to_campaign | replied | meeting_booked | qualified | disqualified | watch
  campaign_id text,
  instantly_lead_id text,
  source text default 'manual', -- manual | apify | n8n_signal_monitor | linkedin_outreach
  notes text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- =========================================================
-- PIPELINE_ACCOUNTS — accounts moving through the sales funnel
-- =========================================================
create table if not exists pipeline_accounts (
  id uuid primary key default gen_random_uuid(),
  lead_id uuid references leads(id),
  company text not null,
  contact_name text,
  contact_title text,
  stage text default 'identified', -- identified | contacted | replied | meeting_booked | proposal_sent | closed_won | closed_lost
  deal_value numeric(10,2),
  last_activity timestamptz default now(),
  next_action text,
  next_action_date date,
  notes text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- =========================================================
-- SIGNALS — detected buying signals
-- =========================================================
create table if not exists signals (
  id uuid primary key default gen_random_uuid(),
  company text not null,
  company_domain text,
  signal_type text not null, -- hiring | leadership_change | funding | expansion | tech_shift | public_pain | first_party
  signal_detail text,
  evidence text,
  icp_score integer,
  status text default 'new', -- new | actioned | watch | passed
  lead_id uuid references leads(id),
  detected_at timestamptz default now(),
  source text default 'apify' -- apify | linkedin | crunchbase | manual
);

-- =========================================================
-- CAMPAIGNS — Instantly campaign tracking
-- =========================================================
create table if not exists campaigns (
  id uuid primary key default gen_random_uuid(),
  instantly_id text unique,
  name text not null,
  status text default 'active', -- active | paused | completed | draft
  target_icp text,
  emails_sent integer default 0,
  open_rate numeric(5,2) default 0,
  reply_rate numeric(5,2) default 0,
  positive_reply_count integer default 0,
  meetings_booked integer default 0,
  last_synced_at timestamptz,
  created_at timestamptz default now()
);

-- =========================================================
-- MEETINGS — booked discovery/strategy calls
-- =========================================================
create table if not exists meetings (
  id uuid primary key default gen_random_uuid(),
  lead_id uuid references leads(id),
  pipeline_id uuid references pipeline_accounts(id),
  contact_name text,
  company text,
  meeting_date timestamptz,
  meeting_type text default 'discovery', -- discovery | strategy | proposal | follow_up
  status text default 'scheduled', -- scheduled | completed | cancelled | no_show
  outcome text,
  next_step text,
  notes text,
  booked_via text default 'calendly', -- calendly | linkedin | email
  created_at timestamptz default now()
);

-- =========================================================
-- AGENT_LOGS — what the n8n agents are doing (for the activity feed)
-- =========================================================
create table if not exists agent_logs (
  id uuid primary key default gen_random_uuid(),
  agent text not null, -- scout | outreach | enrichment | signal_engine | daily_brief
  action text not null,
  result text,
  metadata jsonb,
  status text default 'success', -- success | error | running
  duration_ms integer,
  created_at timestamptz default now()
);

-- =========================================================
-- ENGAGEMENTS — client engagements (when we close a deal)
-- =========================================================
create table if not exists engagements (
  id uuid primary key default gen_random_uuid(),
  client_name text not null,
  contact_name text,
  contact_email text,
  engagement_type text, -- architecture_sprint | system_deployment | managed_operation
  monthly_value numeric(10,2),
  setup_value numeric(10,2),
  status text default 'active', -- active | paused | completed | churned
  start_date date,
  next_review_date date,
  notes text,
  created_at timestamptz default now()
);

-- =========================================================
-- METRICS_SNAPSHOTS — daily KPI snapshots for charts
-- =========================================================
create table if not exists metrics_snapshots (
  id uuid primary key default gen_random_uuid(),
  snapshot_date date not null unique,
  emails_sent integer default 0,
  open_rate numeric(5,2) default 0,
  reply_rate numeric(5,2) default 0,
  signals_detected integer default 0,
  leads_added integer default 0,
  meetings_booked integer default 0,
  pipeline_value numeric(10,2) default 0,
  mrr numeric(10,2) default 0,
  created_at timestamptz default now()
);

-- =========================================================
-- INDEXES
-- =========================================================
create index if not exists idx_leads_status on leads(status);
create index if not exists idx_leads_icp_score on leads(icp_score desc);
create index if not exists idx_leads_created_at on leads(created_at desc);
create index if not exists idx_signals_detected_at on signals(detected_at desc);
create index if not exists idx_signals_status on signals(status);
create index if not exists idx_pipeline_stage on pipeline_accounts(stage);
create index if not exists idx_agent_logs_created_at on agent_logs(created_at desc);
create index if not exists idx_agent_logs_agent on agent_logs(agent);
create index if not exists idx_meetings_date on meetings(meeting_date desc);
create index if not exists idx_metrics_date on metrics_snapshots(snapshot_date desc);

-- =========================================================
-- SEED — initial data so dashboard renders something
-- =========================================================
insert into metrics_snapshots (snapshot_date, emails_sent, open_rate, reply_rate, signals_detected, leads_added, meetings_booked, pipeline_value, mrr)
values
  (current_date - 6, 0, 0, 0, 0, 0, 0, 0, 0),
  (current_date - 5, 0, 0, 0, 0, 0, 0, 0, 0),
  (current_date - 4, 0, 0, 0, 0, 0, 0, 0, 0),
  (current_date - 3, 0, 0, 0, 0, 0, 0, 0, 0),
  (current_date - 2, 0, 0, 0, 0, 0, 0, 0, 0),
  (current_date - 1, 0, 0, 0, 0, 0, 0, 0, 0),
  (current_date,     0, 0, 0, 0, 0, 0, 0, 0)
on conflict (snapshot_date) do nothing;

insert into agent_logs (agent, action, result, status)
values
  ('scout', 'System initialized', 'Sonar GTM database ready', 'success'),
  ('signal_engine', 'Schema deployed', 'All tables created successfully', 'success');
