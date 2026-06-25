# N8N Workflows

Importar en n8n: Settings (engrane arriba derecha) → Import from file → seleccionar el JSON.

## Orden de importación recomendado
1. `lead-enrichment.json` — importar y probar primero
2. `reply-detection.json`
3. `daily-brief.json`
4. `signal-monitor.json`

## Variables de entorno requeridas en n8n
Settings → Variables → crear cada una:

| Variable | Valor |
|---|---|
| `ANTHROPIC_API_KEY` | Ver .env |
| `SUPABASE_URL` | `https://pdfonsharlebsmfncwkj.supabase.co` |
| `SUPABASE_SERVICE_ROLE_KEY` | Ver .env |
| `INSTANTLY_API_KEY` | Ver .env |
| `INSTANTLY_CAMPAIGN_A_ID` | ID de Campaign A en Instantly (DFY — score 75+ CRO/VP) |
| `INSTANTLY_CAMPAIGN_B_ID` | ID de Campaign B en Instantly (Discovery — score 65-74 o Founder/CEO) |
| `APIFY_API_KEY` | Ver .env |

## Cómo agregar variables en n8n
1. Abrir n8n → Settings (engrane) → Variables
2. Clic en + New Variable
3. Agregar cada una de la tabla arriba

## Lead Enrichment — cómo Tiago lo usa
Una vez deployado en Railway, Tiago puede enviar un lead vía POST:

```bash
curl -X POST https://[tu-n8n-url]/webhook/leads/new \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Smith",
    "title": "CRO",
    "company": "Acme Corp",
    "company_domain": "acme.com",
    "linkedin_url": "https://linkedin.com/in/johnsmith",
    "email": "john@acme.com",
    "company_size": "50-100",
    "industry": "B2B SaaS"
  }'
```

O desde Claude Code: "Enrich this lead: [nombre], [título], [empresa], [email]"

## Notas importantes
- Lead Enrichment: activa `responseMode: lastNode` en el Webhook node para que devuelva el score
- Reply Detection: verificar el endpoint exacto de Instantly v2 para replies — puede variar
- Signal Monitor: empieza con 15 jobs/día (controla costo de Apify ~$3/mes)
- Daily Brief: usar Claude Sonnet (más caro pero justificado para el brief)
- Todos los workflows loguean a `agent_logs` → aparecen en el dashboard automáticamente
