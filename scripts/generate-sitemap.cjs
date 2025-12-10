const { writeFileSync } = require("fs");
const { join } = require("path");
require("dotenv").config();

const { createClient } = require("@supabase/supabase-js");

// Initialize with the same URL & key, via env
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

// Define all static routes
const staticRoutes = [
  // Singapore pages (base)
  { path: "/", priority: "1.0", changefreq: "daily" },
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

  // UAE pages
  { path: "/uae", priority: "1.0", changefreq: "daily" },
  { path: "/uae/about", priority: "0.8", changefreq: "weekly" },
  { path: "/uae/blog", priority: "0.7", changefreq: "daily" },
  { path: "/uae/contact-us", priority: "0.8", changefreq: "weekly" },
  {
    path: "/uae/accounting-services-in-uae",
    priority: "0.8",
    changefreq: "weekly",
  },
  {
    path: "/uae/bookkeeping-services-in-uae",
    priority: "0.8",
    changefreq: "weekly",
  },
  {
    path: "/uae/payroll-services-in-uae",
    priority: "0.8",
    changefreq: "weekly",
  },
  {
    path: "/uae/cash-flow-services-in-uae",
    priority: "0.8",
    changefreq: "weekly",
  },
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
    path: "/uae/taxation-services-in-uae",
    priority: "0.8",
    changefreq: "monthly",
  },
  { path: "/uae/virtual-cfo-services-uae", priority: "0.8", changefreq: "monthly" },

  // Australia pages
  { path: "/au", priority: "1.0", changefreq: "daily" },
  { path: "/au/about", priority: "0.8", changefreq: "weekly" },
  { path: "/au/blog", priority: "0.7", changefreq: "daily" },
  { path: "/au/contact-us", priority: "0.8", changefreq: "weekly" },
  {
    path: "/au/accounting-services-in-australia",
    priority: "0.8",
    changefreq: "weekly",
  },
  {
    path: "/au/bookkeeping-services-in-australia",
    priority: "0.8",
    changefreq: "weekly",
  },
  {
    path: "/au/payroll-services-in-australia",
    priority: "0.8",
    changefreq: "weekly",
  },
  {
    path: "/au/cash-flow-services-in-australia",
    priority: "0.8",
    changefreq: "weekly",
  },
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
    path: "/au/taxation-services-in-australia",
    priority: "0.8",
    changefreq: "monthly",
  },
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
];

async function generateSitemap() {
  const outPath = join(__dirname, "..", "public", "sitemap.xml");

  try {
    // Create an abort signal with 15 second timeout
    const abortController = new AbortController();
    const timeoutId = setTimeout(() => abortController.abort(), 15000);

    // Fetch blog posts with slugs and publish dates
    const { data: posts, error } = await supabase
      .from("blog_post")
      .select("slug, publishdate")
      .not("slug", "is", null)
      .abortSignal(abortController.signal);

    clearTimeout(timeoutId);

    if (error) {
      console.warn("⚠️  Supabase fetch error for sitemap:", error);
      console.warn(
        "⚠️  Keeping existing sitemap.xml to allow build to continue"
      );
      process.exit(0); // Exit successfully to allow build to proceed
    }

    // Generate XML sitemap
    const baseUrl = "https://growwthpartners.com";

    // Static routes XML
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

    // Blog posts XML (with lastmod dates)
    const blogPostsXml =
      posts && posts.length > 0
        ? posts
            .map(
              (post) =>
                `  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <lastmod>${post.publishdate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`
            )
            .join("\n")
        : "";

    // Combine into final XML
    const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticUrlsXml}
${blogPostsXml ? "\n" + blogPostsXml : ""}
</urlset>`;

    writeFileSync(outPath, sitemapXml, "utf-8");
    console.log(
      `✅ Successfully generated sitemap with ${
        staticRoutes.length
      } static pages and ${posts?.length || 0} blog posts`
    );
  } catch (err) {
    console.warn("⚠️  Failed to generate sitemap:", err.message);
    console.warn("⚠️  Keeping existing sitemap.xml to allow build to continue");
    process.exit(0); // Exit successfully to allow build to proceed
  }
}

generateSitemap().catch((err) => {
  console.error("⚠️  Unexpected error:", err);
  process.exit(0); // Exit successfully to allow build to proceed
});
