/**
 * Supabase row insert — generic script for skills to call
 * Usage: npx ts-node scripts/supabase-insert.ts --table TABLE --data '{"key":"val"}'
 */

import * as https from "https";

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY) {
  throw new Error("SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be set in .env");
}

const args = process.argv.slice(2);
const getArg = (flag: string) => {
  const i = args.indexOf(flag);
  return i >= 0 ? args[i + 1] : undefined;
};

const table = getArg("--table");
const dataStr = getArg("--data");

if (!table) throw new Error("--table is required");
if (!dataStr) throw new Error("--data is required (JSON string)");

const data = JSON.parse(dataStr);
const body = JSON.stringify(data);
const endpoint = new URL(`/rest/v1/${table}`, SUPABASE_URL);

const options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    apikey: SUPABASE_KEY,
    Authorization: `Bearer ${SUPABASE_KEY}`,
    Prefer: "return=representation",
  },
};

const req = https.request(endpoint, options, (res) => {
  let result = "";
  res.on("data", (chunk) => (result += chunk));
  res.on("end", () => {
    if (res.statusCode && res.statusCode >= 200 && res.statusCode < 300) {
      console.log("Inserted:", result);
    } else {
      console.error(`Error ${res.statusCode}:`, result);
      process.exit(1);
    }
  });
});

req.on("error", console.error);
req.write(body);
req.end();
