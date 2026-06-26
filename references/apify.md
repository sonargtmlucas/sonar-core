# Apify — Technical Reference

Base URL: `https://api.apify.com/v2`
Auth: `?token=$APIFY_API_KEY`
Rate limit: 1 req/sec for scraping tasks

## Key actors

| Actor ID | Use case | Cost |
|---|---|---|
| `apidojo/linkedin-scraper` | LinkedIn profile scrape | ~$0.10/run |
| `apidojo/linkedin-company-scraper` | LinkedIn company page | ~$0.10/run |
| `apidojo/website-content-crawler` | General web content | ~$0.10–0.50/run |

> Note: LinkedIn scraping is partially blocked by LinkedIn (2025–2026). Use Proxycurl for reliable person/company enrichment. Use Apify for job boards and general web content.

## Scripts

```bash
# Scrape a person profile
npx ts-node scripts/apify-scrape.ts --url "https://linkedin.com/in/..." --type "person"

# Scrape a company
npx ts-node scripts/apify-scrape.ts --url "https://linkedin.com/company/..." --type "company"
```

## Proxycurl (preferred for LinkedIn enrichment)

Base URL: `https://nubela.co/proxycurl/api`
Auth: `Authorization: Bearer $PROXYCURL_API_KEY`
Cost: $0.01/person, $0.02/company

```bash
# Person lookup
GET /v2/linkedin?url=https://linkedin.com/in/...

# Company lookup
GET /linkedin/company/profile?url=https://linkedin.com/company/...
```
