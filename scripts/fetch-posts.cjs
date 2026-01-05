const { writeFileSync } = require("fs");
const { join } = require("path");
require("dotenv").config();

const BASE_API_URL = "https://api-growwth-dev.growwthpartners.in" || "https://api-growwth-prod.growwthpartners.in"
const POSTS_ENDPOINT = `${BASE_API_URL}/api/website/blog/public/ssgPosts`;

async function dumpPosts() {
  const outPath = join(__dirname, "..", "src", "generated", "posts.json");

  try {
    const abortController = new AbortController();
    const timeoutId = setTimeout(() => abortController.abort(), 15000);

    const res = await fetch(POSTS_ENDPOINT, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      signal: abortController.signal,
    });

    clearTimeout(timeoutId);

    const text = await res.text();

    if (!res.ok) {
      console.warn("⚠️  Blog API fetch error:", res.status, text.slice(0, 200));
      console.warn("⚠️  Writing empty posts array to allow build to continue");
      writeFileSync(outPath, JSON.stringify([], null, 2), "utf-8");
      process.exit(0);
    }

    let json;
    try {
      json = JSON.parse(text);
    } catch (e) {
      console.warn("⚠️  Blog API returned non-JSON:", text.slice(0, 200));
      writeFileSync(outPath, JSON.stringify([], null, 2), "utf-8");
      process.exit(0);
    }

    const posts = json?.data ?? json;
    if (!Array.isArray(posts)) {
      console.warn("⚠️  Blog API unexpected shape:", json);
      writeFileSync(outPath, JSON.stringify([], null, 2), "utf-8");
      process.exit(0);
    }

    writeFileSync(outPath, JSON.stringify(posts, null, 2), "utf-8");
    console.log(`✅ Successfully fetched ${posts.length} posts for build-time SEO`);
    process.exit(0);
  } catch (err) {
    console.warn("⚠️  Failed to fetch posts:", err?.message || err);
    console.warn("⚠️  Writing empty posts array to allow build to continue");
    writeFileSync(outPath, JSON.stringify([], null, 2), "utf-8");
    process.exit(0);
  }
}

dumpPosts().catch((err) => {
  console.error("⚠️  Unexpected error:", err);
  const outPath = join(__dirname, "..", "src", "generated", "posts.json");
  writeFileSync(outPath, JSON.stringify([], null, 2), "utf-8");
  process.exit(0);
});
