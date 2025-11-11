import { Navigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { useCountry } from "@/contexts/CountryContext";
import SEOhelper from "@/components/SEOhelper";
import { AchievementsHero } from "@/components/achievements/AchievementsHero";
import { AwardHighlights } from "@/components/achievements/AwardHighlights";

const AchievementsPage = () => {
  const { country } = useCountry();

  // Redirect non-Singapore users to their respective home pages
  if (country === "uae") {
    return <Navigate to="/uae" replace />;
  }

  if (country === "australia") {
    return <Navigate to="/au" replace />;
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": "https://growwthpartners.com/achievements/#about",
        name: "Achievements & Awards | Growwth Partners",
        description:
          "Independent recognition for fractional CFO excellence, innovation, and leadership across APAC. Explore Growwth Partners' industry awards and recognitions.",
        url: "https://growwthpartners.com/achievements",
        publisher: {
          "@id": "https://growwthpartners.com/#organization",
        },
        mainEntity: {
          "@id": "https://growwthpartners.com/#organization",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://growwthpartners.com/#organization",
        name: "Growwth Partners",
        url: "https://growwthpartners.com",
        award: [
          "Acquisition International M&A Awards 2024 Winner",
          "Best Fractional CFO Services Award 2024 - Golden Globe Tigers",
          "CMO Asia Innovation Leadership Award 2022",
          "Most Admired Global Indians 2021",
        ],
      },
    ],
  };

  return (
    <Layout>
      <SEOhelper
        title="Achievements & Awards | Growwth Partners - Fractional CFO Excellence"
        description="Independent recognition for fractional CFO excellence, innovation, and leadership across APAC. Our work is measured by outcomes for clients first."
        keywords="growwth partners awards, fractional cfo excellence, m&a awards, golden globe tigers, cmo asia, financial services recognition, apac awards"
        canonicalUrl="https://growwthpartners.com/achievements"
        structuredData={structuredData}
      />

      <AchievementsHero />
      <AwardHighlights />
    </Layout>
  );
};

export default AchievementsPage;
