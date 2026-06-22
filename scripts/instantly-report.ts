/**
 * Instantly API — pull campaign analytics
 * Usage:
 *   npx ts-node scripts/instantly-report.ts --period "last_7_days"
 *   npx ts-node scripts/instantly-report.ts --client "acme" --period "last_30_days"
 */

import * as https from "https";

const INSTANTLY_API_KEY = process.env.INSTANTLY_API_KEY;
if (!INSTANTLY_API_KEY) throw new Error("INSTANTLY_API_KEY not set in environment");

const args = process.argv.slice(2);
const getArg = (flag: string) => {
  const i = args.indexOf(flag);
  return i >= 0 ? args[i + 1] : undefined;
};

const period = getArg("--period") ?? "last_7_days";
const clientFilter = getArg("--client");

function get(path: string): Promise<unknown> {
  return new Promise((resolve, reject) => {
    const url = `https://api.instantly.ai/api/v1${path}`;
    const req = https.request(
      url,
      { headers: { Authorization: `Bearer ${INSTANTLY_API_KEY}` } },
      (res) => {
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => {
          try { resolve(JSON.parse(data)); }
          catch { resolve(data); }
        });
      }
    );
    req.on("error", reject);
    req.end();
  });
}

async function main() {
  // Get all campaigns
  const campaigns = await get("/campaign/list?limit=50&status=1") as { campaigns?: { id: string; name: string }[] };

  if (!campaigns?.campaigns) {
    console.log("No campaigns found or API error:", campaigns);
    return;
  }

  const filtered = clientFilter
    ? campaigns.campaigns.filter((c) => c.name.toLowerCase().includes(clientFilter.toLowerCase()))
    : campaigns.campaigns;

  const results = [];

  for (const campaign of filtered) {
    const analytics = await get(`/analytics/campaign/summary?campaign_id=${campaign.id}`) as Record<string, unknown>;
    results.push({
      name: campaign.name,
      id: campaign.id,
      ...analytics,
    });
  }

  console.log(JSON.stringify(results, null, 2));
}

main().catch(console.error);
