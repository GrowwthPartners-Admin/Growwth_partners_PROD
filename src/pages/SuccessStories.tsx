import { Navigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { PlaceholderContent } from "@/components/PlaceholderContent";
import { useCountry } from "@/contexts/CountryContext";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Construction } from "lucide-react";
import SEOhelper from "@/components/SEOhelper";

const SuccessStoriesPage = () => {
  const successStoriesSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Success Stories | Growwth Partners",
    description:
      "See how startups and SMEs have transformed their payroll and financial operations with Growwth Partners in our client success stories.",
    url: `https://growwthpartners.com/success-stories`,
    publisher: {
      "@type": "Organization",
      name: "Growwth Partners",
      url: "https://growwthpartners.com",
    },
    about: {
      "@type": "Thing",
      name: "Client Success Stories",
    },
  };

  return (
    <Layout>
      <SEOhelper
        title="Success Stories | Growwth Partners"
        description="See how startups and SMEs have transformed their payroll and financial operations with Growwth Partners in our client success stories."
        keywords="success stories, client testimonials, case studies, business growth, singapore"
        canonicalUrl={`https://growwthpartners.com/success-stories`}
        structuredData={successStoriesSchema}
      />
      <PlaceholderContent
        title="Success Stories"
        description="Discover how we've helped businesses overcome financial challenges and achieve sustainable growth."
        imageBg="bg-gradient-to-r from-green-500 to-brand-green"
      />
      <div className="container-custom mb-16">
       
      </div>
    </Layout>
  );
};

export default SuccessStoriesPage;
