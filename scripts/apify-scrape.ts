/**
 * Apify scraper — LinkedIn profiles, companies, and posts
 * Usage:
 *   npx ts-node scripts/apify-scrape.ts --url "URL" --type "person|company|posts"
 *   npx ts-node scripts/apify-scrape.ts --query "Company Name" --type "company-search"
 *   npx ts-node scripts/apify-scrape.ts --url "URL" --type "posts" --limit 20
 */

import * as https from "https";

const APIFY_API_KEY = process.env.APIFY_API_KEY;
if (!APIFY_API_KEY) throw new Error("APIFY_API_KEY not set in environment");

const args = process.argv.slice(2);
const getArg = (flag: string) => {
  const i = args.indexOf(flag);
  return i >= 0 ? args[i + 1] : undefined;
};

const url = getArg("--url");
const query = getArg("--query");
const type = getArg("--type") ?? "person";
const limit = parseInt(getArg("--limit") ?? "20");

const ACTOR_MAP: Record<string, string> = {
  person: "apidojo/linkedin-scraper",
  company: "apidojo/linkedin-company-scraper",
  posts: "apidojo/linkedin-posts-scraper",
  "company-search": "apidojo/linkedin-company-scraper",
};

async function runActor(actorId: string, input: object): Promise<void> {
  const baseUrl = `https://api.apify.com/v2/acts/${actorId}/run-sync-get-dataset-items`;
  const params = new URLSearchParams({ token: APIFY_API_KEY });

  const body = JSON.stringify(input);

  return new Promise((resolve, reject) => {
    const req = https.request(
      `${baseUrl}?${params}`,
      { method: "POST", headers: { "Content-Type": "application/json" } },
      (res) => {
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => {
          console.log(data);
          resolve();
        });
      }
    );
    req.on("error", reject);
    req.write(body);
    req.end();
  });
}

const actorId = ACTOR_MAP[type];
if (!actorId) throw new Error(`Unknown type: ${type}`);

const input: Record<string, unknown> = { maxItems: limit };
if (url) input.startUrls = [{ url }];
if (query) input.searchQueries = [query];

runActor(actorId, input).catch(console.error);
