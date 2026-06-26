# HeyReach — Technical Reference

Base URL: `https://api.heyreach.io/api/public`
Auth: `X-API-KEY: $HEYREACH_API_KEY`
Plan: $79/mo

## LinkedIn accounts

Both founders will have their own LinkedIn accounts in HeyReach targeting different audiences:
- **Tiago**: revenue growth, business leaders (pending connection)
- **Lucas**: technical founders, SaaS-oriented (pending — add via app.heyreach.io → LinkedIn Accounts)

Get account IDs after connecting:
```bash
GET /linkedInAccount/GetAll
```

## Key endpoints

```bash
# List LinkedIn accounts
GET /linkedInAccount/GetAll

# Create a campaign
POST /campaign/Create
{
  "name": "...",
  "linkedInAccountIds": ["..."],
  "dailyLimit": { "connectionRequests": 15, "profileVisits": 25 },
  "requiresApproval": true
}

# Add leads to campaign
POST /campaign/AddLeadsToCampaign
{
  "campaignId": "...",
  "leads": [{ "linkedInUrl": "...", "firstName": "...", "lastName": "..." }]
}

# Get campaign stats
GET /campaign/GetAllCampaigns
```

## Operating rules
- Daily limits: 20–30 profile visits, 10–15 connection requests (stay under LinkedIn thresholds)
- Always enable `requiresApproval: true` — Tiago approves batches before sending
- Do not run campaigns without Tiago reviewing the lead list first
