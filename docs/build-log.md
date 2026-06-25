# Build Log

## Phase 1 — Foundation + Client Acquisition Engine
Started: June 22, 2026

### Built
- Full AIOS folder structure
- CLAUDE.md (routing table, 200 line target)
- .claude/rules/ — business.md, brand.md, workflow.md, tech-defaults.md
- context/shared/ — company.md, brand.md
- context/founders/ — tiago.md, tiago-brand.md (Part 1 filled, Part 2 awaiting Tiago)
- context/founders/lucas.md
- decisions/2026-06-18-v2mom-icp-offer.md
- references/ — sales-deck.md, pricing.md, signal-types.md
- .claude/skills/gtm/ — research-account, score-lead, draft-email, draft-linkedin-dm, linkedin-outreach, weekly-report
- .claude/skills/content/ — tiago-post, scrape-competitors
- .claude/skills/delivery/ — onboard-client, task-audit, client-report
- docs/ — architecture.md, linkedin-acquisition.md, this build-log
- scripts/ — stubs created (need Supabase keys + Apify key to complete)
- .gitignore

### Pending (what comes next)
- [ ] Tiago fills context/founders/tiago-brand.md Part 2 (persona capture via ChatGPT)
- [ ] Lucas gets lucas@sonargtm.com from Tiago
- [ ] Lucas creates GitHub repo under sonargtm.com account
- [ ] Lucas adds Tiago as admin to the repo
- [ ] Supabase keys added to .env (Lucas to share or input directly)
- [ ] Scripts completed once Supabase + Apify keys are confirmed
- [ ] LinkedIn outreach tool decided (Expand.io vs Phantom Buster) and configured
- [ ] First prospect list from Tiago → run linkedin-outreach skill
- [ ] Instantly campaigns activated (mailboxes warming until June 25-27)
- [ ] Website prompt (prompts/website-v0.md) → run in v0.dev

### Deviations from plan
None yet.

### Next phase trigger
Phase 2 begins when: first client conversation is booked via LinkedIn or email outreach.

---

## Session: Jun 24, 2026

### Built
- **ClickUp workspace** configurado: Space "Sonar GTM" con Folder "Build del Producto" (Fases 0-5), Folder "Decisiones de Arquitectura", Folder "Contexto del Negocio" (empresa, ICP, oferta, tech stack, cómo usar el sistema)
- **Supabase schema** deployado: 8 tablas (leads, pipeline_accounts, signals, campaigns, meetings, agent_logs, engagements, metrics_snapshots) + indexes + seed data
- **package.json + tsconfig.json** agregados al repo — ts-node + dotenv configurados
- **Scripts** verificados: supabase-insert.ts funciona contra Supabase live
- **Apify scrape** refactorizado: LinkedIn via Proxycurl/NinjaPear (decisión: suspendido, ver abajo), website y jobs via Apify actors
- **4 workflow specs** actualizados: Telegram eliminado → todo loguea a agent_logs en Supabase
- **Lead Enrichment workflow** rediseñado: acepta datos de Sales Navigator directamente (sin scraping de LinkedIn)
- **sonar-command-center** generado en Lovable: dashboard completo con 6 pantallas conectado a Supabase real (React Query, 30s refresh)
- **Types corregidos** en sonar-command-center: 6 mismatches con schema SQL resueltos

### Decisions
- **LinkedIn scraping**: bloqueado por LinkedIn en 2025-2026. Apify actors retornan vacío. Proxycurl deprecated → NinjaPear (producto diferente, key inválida). Decisión: para bootstrapping, Tiago exporta de Sales Navigator → datos van directamente al webhook de Lead Enrichment. Evaluar Clay o RocketReach a escala.
- **Telegram**: eliminado del stack. Claude Code mobile es mejor interfaz para ambos founders.
- **LinkedIn tool**: HeyReach ($79/mo) sobre Expandi. Webhooks nativos para n8n.
- **N8N hosting**: local semana 1, Railway semana 2.
- **Dashboard**: Lovable (no v0) → sonar-command-center repo → deploy en Vercel.

### Deferred
- n8n workflows: construir en Fase 3 (después de deploy del dashboard)
- HeyReach setup: Fase 4
- Tiago brand Q17/Q20: Fase 5

### Next
1. Lucas pushea fixes de types al repo sonar-command-center
2. Deploy en Vercel (sonar-command-center)
3. Construir n8n workflows (Lead Enrichment primero)
4. HeyReach setup
5. Tiago llena Q17 y Q20

### Dashboard deployment fix (Jun 24 — later)
- **Problema:** Lovable genera TanStack Start SSR. Fuera del contexto de Lovable, el build salta el SSR y produce assets sin `index.html` → 404 en Vercel.
- **Solución:** Convertir a Vite SPA estándar:
  - Reemplazar `@lovable.dev/vite-tanstack-config` con plugins estándar
  - Agregar `index.html` + `src/main.tsx` como entry point
  - Remover `HeadContent`/`Scripts`/`shellComponent` de `__root.tsx`
  - `vercel.json` con `outputDirectory: "dist"` + rewrites SPA
- **Dashboard live:** sonar-command-center.vercel.app
- **Repo:** sonargtmlucas/sonar-command-center
- **Para futuras apps de Lovable:** hacer este mismo proceso de conversión antes de deployar a Vercel.
