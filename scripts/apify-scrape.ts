/**
 * Scraper — LinkedIn via Proxycurl, web content via Apify
 *
 * LinkedIn (person/company): uses Proxycurl API (~$0.01-0.02/call, reliable)
 * Web content / job boards: uses Apify actors
 *
 * Usage:
 *   npx ts-node -r dotenv/config scripts/apify-scrape.ts --url "URL" --type "person"
 *   npx ts-node -r dotenv/config scripts/apify-scrape.ts --url "URL" --type "company"
 *   npx ts-node -r dotenv/config scripts/apify-scrape.ts --url "URL" --type "website"
 */

import * as https from "https";

const PROXYCURL_API_KEY = process.env.PROXYCURL_API_KEY;
const APIFY_API_KEY = process.env.APIFY_API_KEY;

const args = process.argv.slice(2);
const getArg = (flag: string) => {
  const i = args.indexOf(flag);
  return i >= 0 ? args[i + 1] : undefined;
};

const url = getArg("--url");
const query = getArg("--query");
const type = getArg("--type") ?? "person";
const limit = parseInt(getArg("--limit") ?? "10");

if (!url && !query) throw new Error("--url or --query is required");

// ─── Proxycurl: LinkedIn person profile ──────────────────────────────────────

function proxycurlPerson(linkedinUrl: string): Promise<void> {
  if (!PROXYCURL_API_KEY) throw new Error("PROXYCURL_API_KEY not set in .env");
  const endpoint = `https://nubela.co/proxycurl/api/v2/linkedin?url=${encodeURIComponent(linkedinUrl)}&skills=include&extra=include&github_profile_id=include&facebook_profile_id=include&twitter_profile_id=include&personal_email=include&personal_contact_number=include&inferred_salary=include&use_cache=if-present`;
  return httpGet(endpoint, { Authorization: `Bearer ${PROXYCURL_API_KEY}` });
}

// ─── Proxycurl: LinkedIn company profile ─────────────────────────────────────

function proxycurlCompany(linkedinUrl: string): Promise<void> {
  if (!PROXYCURL_API_KEY) throw new Error("PROXYCURL_API_KEY not set in .env");
  const endpoint = `https://nubela.co/proxycurl/api/v2/linkedin/company?url=${encodeURIComponent(linkedinUrl)}&categories=include&funding=include&extra=include&use_cache=if-present`;
  return httpGet(endpoint, { Authorization: `Bearer ${PROXYCURL_API_KEY}` });
}

// ─── Apify: generic web / job board scraping ─────────────────────────────────

function apifyScrape(actorId: string, input: object): Promise<void> {
  if (!APIFY_API_KEY) throw new Error("APIFY_API_KEY not set in .env");
  const endpoint = `https://api.apify.com/v2/acts/${actorId.replace("/", "~")}/run-sync-get-dataset-items?token=${APIFY_API_KEY!}`;
  return httpPost(endpoint, input);
}

// ─── HTTP helpers ─────────────────────────────────────────────────────────────

function httpGet(url: string, headers: Record<string, string> = {}): Promise<void> {
  return new Promise((resolve, reject) => {
    const req = https.request(url, { method: "GET", headers: { "Content-Type": "application/json", ...headers } }, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => { console.log(data); resolve(); });
    });
    req.on("error", reject);
    req.end();
  });
}

function httpPost(url: string, body: object): Promise<void> {
  const bodyStr = JSON.stringify(body);
  return new Promise((resolve, reject) => {
    const req = https.request(url, { method: "POST", headers: { "Content-Type": "application/json" } }, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => { console.log(data); resolve(); });
    });
    req.on("error", reject);
    req.write(bodyStr);
    req.end();
  });
}

// ─── Router ──────────────────────────────────────────────────────────────────

async function main() {
  switch (type) {
    case "person":
      await proxycurlPerson(url!);
      break;

    case "company":
      await proxycurlCompany(url!);
      break;

    case "website":
      await apifyScrape("apify/website-content-crawler", {
        startUrls: [{ url }],
        maxCrawlPages: 5,
        maxCrawlDepth: 1,
      });
      break;

    case "jobs":
      // Scrape job postings to detect hiring signals
      await apifyScrape("curious_coder/linkedin-jobs-scraper", {
        queries: [query ?? url],
        maxItems: limit,
      });
      break;

    default:
      throw new Error(`Unknown type: ${type}. Use: person | company | website | jobs`);
  }
}

main().catch(console.error);
