import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import SEOhelper from "@/components/SEOhelper";
import HeroSection from "@/components/techBusinessFinance/HeroSection";
import WhatIsSection from "@/components/techBusinessFinance/WhatIsSection";
import WhoShouldUseSection from "@/components/techBusinessFinance/WhoShouldUseSection";
import ChallengesSection from "@/components/techBusinessFinance/ChallengesSection";
import HowWeDeliverSection from "@/components/techBusinessFinance/HowWeDeliverSection";
import WhyChooseSection from "@/components/techBusinessFinance/WhyChooseSection";
import UseCaseSection from "@/components/techBusinessFinance/UseCaseSection";
import { FaqSection } from "@/components/accounting/FaqSection";
import CTASection from "@/components/techBusinessFinance/CTASection";

const faqs = [
  {
    question: "How is tech finance different from traditional finance?",
    answer:
      "Tech finance focuses on recurring revenue, burn rate, runway, and scalable cost structures rather than linear growth models. It requires understanding of SaaS metrics, cloud infrastructure costs, and technology-specific revenue recognition.",
  },
  {
    question: "Can these services support SaaS and subscription models?",
    answer:
      "Yes. Subscription and recurring revenue models are a core focus of tech finance services. We handle complex revenue recognition, deferred revenue accounting, and subscription analytics.",
  },
  {
    question: "Are these services suitable for early-stage tech startups?",
    answer:
      "Yes. Early financial discipline significantly improves scalability and fundraising outcomes. Starting with proper financial systems from day one prevents costly rework and builds investor confidence.",
  },
];

const TechBusinessFinance = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "@id": "https://growwthpartners.com/tech-business-finance/#faq",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      {
        "@type": "Organization",
        "@id": "https://growwthpartners.com/#organization",
        name: "Growwth Partners",
        url: "https://growwthpartners.com",
        areaServed: ["Singapore", "United Arab Emirates", "Australia"],
        serviceArea: [
          {
            "@type": "AdministrativeArea",
            name: "Singapore",
          },
          {
            "@type": "Country",
            name: "United Arab Emirates",
          },
          {
            "@type": "Country",
            name: "Australia",
          },
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            email: "jd@growwthpartners.com",
            telephone: "+65 9861 5600",
            contactType: "business",
            areaServed: "SG",
          },
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: "65 Chulia Street",
          addressLocality: "Singapore",
          postalCode: "049513",
          addressCountry: "SG",
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <SEOhelper
        title="Tech Finance Services | Forecasting, Reporting & Strategy"
        description="Finance support for tech companies including modelling, dashboards, KPIs, and runway planning."
        keywords="tech finance Singapore, tech CFO, KPI dashboards tech, forecasting for tech"
        canonicalUrl="https://growwthpartners.com/tech-business-finance"
        structuredData={structuredData}
      />
      <Navbar />
      <main>
        <HeroSection />
        <WhatIsSection />
        <WhoShouldUseSection />
        <ChallengesSection />
        <HowWeDeliverSection />
        <WhyChooseSection />
        <UseCaseSection />
        <FaqSection
          faqs={faqs}
          subtitle="Find answers to common questions about tech finance services"
        />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default TechBusinessFinance;
