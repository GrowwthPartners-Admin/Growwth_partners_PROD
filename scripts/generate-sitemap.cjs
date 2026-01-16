const { writeFileSync } = require("fs");
const { join } = require("path");
require("dotenv").config();

// const { createClient } = require("@supabase/supabase-js");

// Initialize with the same URL & key, via env
// const supabase = createClient(
//   process.env.SUPABASE_URL,
//   process.env.SUPABASE_ANON_KEY
// );

// Define all static routes
const staticRoutes = [
  // Singapore pages (base)
  { path: "/", priority: "1.0", changefreq: "daily" },
  { path: "/services", priority: "0.9", changefreq: "weekly" },
  { path: "/about", priority: "0.8", changefreq: "weekly" },
  { path: "/blog", priority: "0.7", changefreq: "daily" },
  { path: "/contact-us", priority: "0.8", changefreq: "weekly" },
  {
    path: "/accounting-services-in-singapore",
    priority: "0.8",
    changefreq: "weekly",
  },
  {
    path: "/bookkeeping-services-in-singapore",
    priority: "0.8",
    changefreq: "weekly",
  },
  {
    path: "/payroll-services-in-singapore",
    priority: "0.8",
    changefreq: "weekly",
  },
  {
    path: "/cash-flow-services-in-singapore",
    priority: "0.8",
    changefreq: "weekly",
  },
  {
    path: "/company-incorporation-services-in-singapore",
    priority: "0.8",
    changefreq: "weekly",
  },
  {
    path: "/corporate-secretary-services-in-singapore",
    priority: "0.8",
    changefreq: "weekly",
  },
  { path: "/part-time-cfo", priority: "0.8", changefreq: "weekly" },
  { path: "/success-stories", priority: "0.7", changefreq: "weekly" },
  { path: "/taxation", priority: "0.8", changefreq: "weekly" },
  { path: "/achievements", priority: "0.7", changefreq: "weekly" },
  { path: "/guide", priority: "0.7", changefreq: "weekly" },
  { path: "/news", priority: "0.7", changefreq: "daily" },
  { path: "/terms", priority: "0.3", changefreq: "monthly" },
  { path: "/privacy-policy", priority: "0.3", changefreq: "monthly" },
  { path: "/ecommerce-finance-services", priority: "0.8", changefreq: "weekly" },
  { path: "/use-of-ai-in-finance", priority: "0.8", changefreq: "monthly" },
  {
    path: "/valuation-services-singapore",
    priority: "0.8",
    changefreq: "weekly",
  },
  {
    path: "/corporate-tax-filing-singapore",
    priority: "0.8",
    changefreq: "weekly",
  },
  {
    path: "/strategic-finance-singapore",
    priority: "0.8",
    changefreq: "weekly",
  },
  { path: "/esop-advisory-singapore", priority: "0.8", changefreq: "weekly" },
  { path: "/esop-valuation-singapore", priority: "0.8", changefreq: "weekly" },
  {
    path: "/ai-finance-workflow-singapore",
    priority: "0.8",
    changefreq: "weekly",
  },
  {
    path: "/ai-financial-forecasting-singapore",
    priority: "0.8",
    changefreq: "weekly",
  },
  {
    path: "/ai-risk-compliance-singapore",
    priority: "0.8",
    changefreq: "weekly",
  },
  {
    path: "/ai-decision-intelligence-singapore",
    priority: "0.8",
    changefreq: "weekly",
  },

  {
    path: "/ai-advisory-finance-transformation-singapore",
    priority: "0.8",
    changefreq: "weekly",
  },
  {
    path: "/simplified-banking-solutions",
    priority: "0.8",
    changefreq: "weekly",
  },
  {
    path: "/accounting-for-tech-start-ups-companies",
    priority: "0.8",
    changefreq: "weekly",
  },
  {
    path: "/ecommerce-accounting-services",
    priority: "0.8",
    changefreq: "weekly",
  },
  {
    path: "/sme-finance-services",
    priority: "0.8",
    changefreq: "weekly",
  },
  {
    path: "/family-office-finance-services",
    priority: "0.8",
    changefreq: "weekly",
  },
  {
    path: "/incorporation",
    priority: "0.8",
    changefreq: "weekly",
  },

  {
    path: "/incorporation/foreigner",
    priority: "0.8",
    changefreq: "weekly",
  },
  {
    path: "/fintech-finance",
    priority: "0.8",
    changefreq: "weekly",
  },
  {
    path: "/tech-business-finance",
    priority: "0.8",
    changefreq: "weekly",
  },
  {
    path: "/saas-finance",
    priority: "0.8",
    changefreq: "weekly",
  },
  {
    path: "/ai-cfo-services",
    priority: "0.8",
    changefreq: "weekly",
  },
  {
    path: "/on-demand-cfo-services",
    priority: "0.8",
    changefreq: "weekly",
  },
  {
    path: "/outsourced-cfo-services",
    priority: "0.8",
    changefreq: "weekly",
  },
  {
    path: "/sme-cfo-services",
    priority: "0.8",
    changefreq: "weekly",
  },
  {
    path: "/startup-cfo-services",
    priority: "0.8",
    changefreq: "weekly",
  },
  {
    path: "/remote-cfo-finance-team",
    priority: "0.8",
    changefreq: "weekly",
  },
   {
    path: "/part-time-finance-team",
    priority: "0.8",
    changefreq: "weekly",
  },
   {
    path: "/fractional-finance-team",
    priority: "0.8",
    changefreq: "weekly",
  },
     {
    path: "/outsourced-payroll",
    priority: "0.8",
    changefreq: "weekly",
  },
       {
    path: "/outsourced-bookkeeping",  
    priority: "0.8",
    changefreq: "weekly",
  },

  {
    path: "/virtual-finance-team",
    priority: "0.8",
    changefreq: "weekly",
  },
  {
    path: "/part-time-cfo-services",
    priority: "0.8",
    changefreq: "weekly",
  },
  {
    path: "/fractional-cfo-services",
    priority: "0.8",
    changefreq: "weekly",
  },
  {
    path: "/virtual-cfo-services",
    priority: "0.8",
    changefreq: "weekly",
  },
  {
    path: "/interim-cfo-services",
    priority: "0.8",
    changefreq: "weekly",
  },
  {
    path: "/crypto-web3-finance",
    priority: "0.8",
    changefreq: "weekly",
  },
  {
    path: "/trading-distribution-finance",
    priority: "0.8",
    changefreq: "weekly",
  },
  {
    path: "/professional-services-finance",
    priority: "0.8",
    changefreq: "weekly",
  },
  {
    path: "/medtech-finance",
    priority: "0.8",
    changefreq: "weekly",
  },
  {
    path: "/esports-finance",
    priority: "0.8",
    changefreq: "weekly",
  },

  {
    path: "/help-support",
    priority: "0.8",
    changefreq: "weekly",
  },

    {
    path: "/edtech-finance",
    priority: "0.8",
    changefreq: "weekly",
  },

    {
    path: "/esports-finance",
    priority: "0.8",
    changefreq: "weekly",
  },
  {
    path: "/vc-fund-finance",
    priority: "0.8",
    changefreq: "weekly",
  },

  // UAE pages
  { path: "/uae", priority: "1.0", changefreq: "daily" },
  { path: "/uae/about", priority: "0.8", changefreq: "weekly" },
  { path: "/uae/blog", priority: "0.7", changefreq: "daily" },
  { path: "/uae/contact-us", priority: "0.8", changefreq: "weekly" },

  {
    path: "/uae/company-incorporation-services-in-uae",
    priority: "0.8",
    changefreq: "weekly",
  },
  {
    path: "/uae/corporate-secretary-services-in-uae",
    priority: "0.8",
    changefreq: "weekly",
  },
  { path: "/uae/part-time-cfo-uae", priority: "0.8", changefreq: "weekly" },
  { path: "/uae/success-stories", priority: "0.7", changefreq: "weekly" },
  { path: "/uae/taxation", priority: "0.8", changefreq: "weekly" },
  { path: "/uae/achievements", priority: "0.7", changefreq: "weekly" },
  { path: "/uae/guide", priority: "0.7", changefreq: "weekly" },
  { path: "/uae/news", priority: "0.7", changefreq: "daily" },

  {
    path: "/uae/virtual-cfo-services-uae",
    priority: "0.8",
    changefreq: "monthly",
  },

  {
    path: "/uae/corporate-tax-filing-uae",
    priority: "0.8",
    changefreq: "monthly",
  },
  { path: "/uae/esop-advisory-uae", priority: "0.8", changefreq: "monthly" },
  {
    path: "/uae/ai-finance-workflow-uae",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    path: "/uae/on-demand-cfo-services",
    priority: "0.8",
    changefreq: "weekly",
  },
  {
    path: "/uae/part-time-cfo-services",
    priority: "0.8",
    changefreq: "weekly",
  },
  {
    path: "/uae/fractional-cfo-services",
    priority: "0.8",
    changefreq: "weekly",
  },
  {
    path: "/uae/virtual-cfo-services",
    priority: "0.8",
    changefreq: "weekly",
  },
  {
    path: "/uae/interim-cfo-services",
    priority: "0.8",
    changefreq: "weekly",
  },

  // Australia pages
  { path: "/au", priority: "1.0", changefreq: "daily" },
  { path: "/au/about", priority: "0.8", changefreq: "weekly" },
  { path: "/au/blog", priority: "0.7", changefreq: "daily" },
  { path: "/au/contact-us", priority: "0.8", changefreq: "weekly" },

  {
    path: "/au/company-incorporation-services-in-australia",
    priority: "0.8",
    changefreq: "weekly",
  },
  {
    path: "/au/corporate-secretary-services-in-australia",
    priority: "0.8",
    changefreq: "weekly",
  },
  {
    path: "/au/part-time-cfo-australia",
    priority: "0.8",
    changefreq: "weekly",
  },
  { path: "/au/success-stories", priority: "0.7", changefreq: "weekly" },
  { path: "/au/taxation", priority: "0.8", changefreq: "weekly" },
  { path: "/au/achievements", priority: "0.7", changefreq: "weekly" },
  { path: "/au/guide", priority: "0.7", changefreq: "weekly" },
  { path: "/au/news", priority: "0.7", changefreq: "daily" },
  {
    path: "/au/virtual-cfo-services-australia",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    path: "/au/corporate-tax-filing-australia",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    path: "/au/ai-finance-workflow-australia",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    path: "/au/ai-financial-forecasting-australia",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    path: "/au/esop-advisory-australia",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    path: "/au/ai-risk-compliance-australia",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    path: "/au/ai-decision-intelligence-australia",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    path: "/au/on-demand-cfo-services",
    priority: "0.8",
    changefreq: "weekly",
  },
  {
    path: "/au/part-time-cfo-services",
    priority: "0.8",
    changefreq: "weekly",
  },
  {
    path: "/au/fractional-cfo-services",
    priority: "0.8",
    changefreq: "weekly",
  },
  {
    path: "/au/virtual-cfo-services",
    priority: "0.8",
    changefreq: "weekly",
  },
  {
    path: "/au/interim-cfo-services",
    priority: "0.8",
    changefreq: "weekly",
  },
  {
    path: "/startup-finance-services",
    priority: "0.8",
    changefreq: "weekly",
  },
  {
    path: "/uae/startup-finance-services",
    priority: "0.8",
    changefreq: "weekly",
  },
  {
    path: "/au/startup-finance-services",
    priority: "0.8",
    changefreq: "weekly",
  },
];


async function generateSitemap() {
  const outPath = join(__dirname, "..", "public", "sitemap.xml");
  const BASE_API_URL = "https://api-growwth-dev.growwthpartners.in" || "https://api-growwth-prod.growwthpartners.in"

  const SITEMAP_POSTS_URL = `${BASE_API_URL}/api/website/blog/public/sitemapPosts`;

  try {
    const abortController = new AbortController();
    const timeoutId = setTimeout(() => abortController.abort(), 15000);

    const res = await fetch(SITEMAP_POSTS_URL, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      signal: abortController.signal,
    });

    clearTimeout(timeoutId);

    const text = await res.text();

    if (!res.ok) {
      console.warn(
        "⚠️  Blog API fetch error for sitemap:",
        res.status,
        text.slice(0, 200)
      );
      console.warn(
        "⚠️  Keeping existing sitemap.xml to allow build to continue"
      );
      process.exit(0);
    }

    let json;
    try {
      json = JSON.parse(text);
    } catch (e) {
      console.warn(
        "⚠️  Blog API returned non-JSON for sitemap:",
        text.slice(0, 200)
      );
      console.warn(
        "⚠️  Keeping existing sitemap.xml to allow build to continue"
      );
      process.exit(0);
    }

    const posts = json?.data ?? json;
    if (!Array.isArray(posts)) {
      console.warn("⚠️  Blog API unexpected shape for sitemap:", json);
      console.warn(
        "⚠️  Keeping existing sitemap.xml to allow build to continue"
      );
      process.exit(0);
    }

    const baseUrl = "https://growwthpartners.com";

    const staticUrlsXml = staticRoutes
      .map(
        (route) =>
          `  <url>
    <loc>${baseUrl}${route.path}</loc>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
      )
      .join("\n");

    const blogPostsXml =
      posts.length > 0
        ? posts
            .map((post) => {
              const slug = String(post.slug || "").trim();
              const lastmod = String(post.publishdate || "").trim();

              // If publishdate is empty, skip lastmod tag (valid sitemap)
              return `  <url>
    <loc>${baseUrl}/blog/${slug}</loc>
${
  lastmod ? `    <lastmod>${lastmod}</lastmod>\n` : ""
}    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`;
            })
            .join("\n")
        : "";

    const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticUrlsXml}
${blogPostsXml ? "\n" + blogPostsXml : ""}
</urlset>`;

    writeFileSync(outPath, sitemapXml, "utf-8");

    console.log(
      `✅ Successfully generated sitemap with ${staticRoutes.length} static pages and ${posts.length} blog posts`
    );
  } catch (err) {
    console.warn("⚠️  Failed to generate sitemap:", err?.message || err);
    console.warn("⚠️  Keeping existing sitemap.xml to allow build to continue");
    process.exit(0);
  }
}

generateSitemap().catch((err) => {
  console.error("⚠️  Unexpected error:", err);
  process.exit(0); // Exit successfully to allow build to proceed
});
