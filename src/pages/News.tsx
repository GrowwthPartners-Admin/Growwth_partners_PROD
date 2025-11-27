import { Navigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { PlaceholderContent } from "@/components/PlaceholderContent";
import { useCountry } from "@/contexts/CountryContext";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Construction } from "lucide-react";
import SEOhelper from "@/components/SEOhelper";

const NewsPage = () => {
  const newsSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "News & Updates | Growwth Partners",
    description:
      "Get the latest announcements, product updates, and industry news on payroll services and financial solutions from Growwth Partners.",
    url: `https://growwthpartners.com/news`,
    publisher: {
      "@type": "Organization",
      name: "Growwth Partners",
      url: "https://growwthpartners.com",
    },
    about: {
      "@type": "Thing",
      name: "Financial Services News",
    },
  };

  return (
    <Layout>
      <SEOhelper
        title="News & Updates | Growwth Partners"
        description="Get the latest announcements, product updates, and industry news on payroll services and financial solutions from Growwth Partners."
        keywords="growwth partners news, financial industry updates, singapore business news, accounting announcements"
        canonicalUrl={`https://growwthpartners.com/news`}
        structuredData={newsSchema}
      />
      <PlaceholderContent
        title="In The News"
        description="Stay updated with Growwth's latest developments, media coverage, and industry insights that showcase our impact in the financial services sector."
        imageBg="bg-gradient-to-r from-slate-700 to-slate-900"
        features={[
          {
            title: "Digital Innovation",
            description:
              "Featured in Tech Asia for our groundbreaking AI-powered financial advisory platform, revolutionizing how businesses access expert financial guidance",
          },
          {
            title: "Market Leadership",
            description:
              "Recognized by Singapore Business Review for our contributions to empowering SMEs with accessible, professional financial services",
          },
          {
            title: "Industry Impact",
            description:
              "Highlighted in The Business Times for our role in helping Singapore startups optimize their financial operations and achieve sustainable growth",
          },
        ]}
      />
      <div className="container-custom mb-16">

      </div>
    </Layout>
  );
};

export default NewsPage;
