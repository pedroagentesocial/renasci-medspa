#!/usr/bin/env node
// IndexNow ping — notifies Bing/Yandex about all URLs in the live sitemap.
// Run after a meaningful publish: `npm run indexnow`
//
// Docs: https://www.indexnow.org/documentation
// Bing IndexNow: https://www.bing.com/indexnow

const KEY = '86c08e57221645e88fce2c8c5606ddc1';
const HOST = 'renascimedspa.com';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const SITEMAP_URL = `https://${HOST}/sitemap.xml`;
const ENDPOINT = 'https://api.indexnow.org/indexnow';
const BATCH_SIZE = 10000;

async function fetchSitemapUrls() {
  console.log(`→ Fetching sitemap from ${SITEMAP_URL}`);
  const res = await fetch(SITEMAP_URL);
  if (!res.ok) {
    throw new Error(`Sitemap fetch failed: HTTP ${res.status}`);
  }
  const xml = await res.text();
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
  console.log(`→ Found ${urls.length} URLs in sitemap`);
  return urls;
}

async function pingIndexNow(urls) {
  const body = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls
  };

  console.log(`→ POSTing ${urls.length} URLs to ${ENDPOINT}`);
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(body)
  });

  const txt = await res.text().catch(() => '');
  console.log(`← HTTP ${res.status} ${res.statusText}`);
  if (txt) console.log(`← Body: ${txt.slice(0, 500)}`);

  // 200 = accepted and processed
  // 202 = accepted, will be processed
  // 400 = bad request (check key/host)
  // 403 = key not found at keyLocation
  // 422 = URLs don't belong to host
  // 429 = too many requests
  if (res.status !== 200 && res.status !== 202) {
    throw new Error(`IndexNow rejected with HTTP ${res.status}`);
  }
}

async function verifyKeyHosted() {
  console.log(`→ Verifying key file is reachable at ${KEY_LOCATION}`);
  const res = await fetch(KEY_LOCATION);
  if (!res.ok) {
    throw new Error(
      `Key file not reachable (HTTP ${res.status}). Deploy first so ${KEY_LOCATION} is live, then re-run.`
    );
  }
  const txt = (await res.text()).trim();
  if (txt !== KEY) {
    throw new Error(`Key file content mismatch. Expected "${KEY}", got "${txt.slice(0, 64)}"`);
  }
  console.log(`✓ Key file verified`);
}

async function main() {
  try {
    await verifyKeyHosted();
    const urls = await fetchSitemapUrls();
    if (urls.length === 0) {
      console.error('✗ No URLs found in sitemap. Aborting.');
      process.exit(1);
    }

    // Split into batches of BATCH_SIZE (IndexNow accepts up to 10k per request)
    for (let i = 0; i < urls.length; i += BATCH_SIZE) {
      const batch = urls.slice(i, i + BATCH_SIZE);
      await pingIndexNow(batch);
    }

    console.log(`✓ IndexNow ping complete (${urls.length} URLs submitted)`);
  } catch (err) {
    console.error(`✗ ${err.message}`);
    process.exit(1);
  }
}

main();
