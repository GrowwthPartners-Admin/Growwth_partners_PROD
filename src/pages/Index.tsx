import React, { lazy, Suspense } from "react";
import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustedSection } from "@/components/accounting/TrustedSection";
import SEOhelper from "@/components/SEOhelper";

// More effective code splitting with smaller chunks
const ServicesSection = lazy(() =>
  import("@/components/home/ServicesSection").then((mod) => ({
    default: mod.ServicesSection,
  }))
);

const AchievementsSection = lazy(() =>
  import("@/components/home/AchievementsSection").then((mod) => ({
    default: mod.AchievementsSection,
  }))
);

const TestimonialsSection = lazy(() =>
  import("@/components/home/TestimonialsSection").then((mod) => ({
    default: mod.TestimonialsSection,
  }))
);

const CtaSection = lazy(() =>
  import("@/components/home/CtaSection").then((mod) => ({
    default: mod.CtaSection,
  }))
);

// Minimal fallback for better mobile experience
const SectionLoader = () => (
  <div className="py-4 flex justify-center items-center">
    <div className="w-6 h-6 border-2 border-brand-orange border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const Index = () => {

  const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://growwthpartners.com/#organization",
      "name": "Growwth Partners",
      "url": "https://growwthpartners.com/",
      "logo": "https://growwthpartners.com/lovable-uploads/5f2bc1cf-2bab-424d-8245-eb52af504603.png",
      "sameAs": [
        "https://www.linkedin.com/company/growwth-partners/",
        "https://www.youtube.com/@GrowwthPartners"
      ],
      "description": "Expert financial, accounting, bookkeeping, CFO, and fundraising services for businesses in Singapore, UAE, and Australia.",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "SG"
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "email": "jd@growwthpartners.com",
          "telephone": "+65 9861 5600",
          "contactType": "Business Service"
        }
      ]
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://growwthpartners.com/#localbusiness",
      "name": "Growwth Partners",
      "url": "https://growwthpartners.com",
      "description": "Professional accounting, bookkeeping, payroll, taxation, compliance, cash flow modeling, and CFO services in Singapore.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "65 Chulia Street",
        "addressLocality": "Singapore",
        "addressRegion": "#46-00 OCBC Centre",
        "postalCode": "049513",
        "addressCountry": "SG"
      },
      "telephone": "+65 9861 5600"
    }
  ]
};

  return (
    <Layout>
      <SEOhelper
        title="Growwth Partners - Financial & Accounting Services"
        description="Expert financial, accounting, and bookkeeping services. Get started with our CFO, finance and accounting solutions to manage and grow your business efficiently."
        keywords="financial services, accounting singapore, cfo services, bookkeeping, business growth"
        canonicalUrl="https://growwthpartners.com/"
        structuredData={structuredData}
      />

      {/* Critical content - loads immediately */}
      <HeroSection />
      <TrustedSection />

      {/* Lazy loaded sections with minimal loading indicators */}
      <Suspense fallback={<SectionLoader />}>
        <ServicesSection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <AchievementsSection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <TestimonialsSection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <CtaSection />
      </Suspense>
    </Layout>
  );
};

export default Index;
