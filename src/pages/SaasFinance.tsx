import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import SEOhelper from "@/components/SEOhelper";
import HeroSection from "@/components/saasFinance/HeroSection";
import WhatIsSection from "@/components/saasFinance/WhatIsSection";
import WhoShouldUseSection from "@/components/saasFinance/WhoShouldUseSection";
import ChallengesSection from "@/components/saasFinance/ChallengesSection";
import HowWeDeliverSection from "@/components/saasFinance/HowWeDeliverSection";
import WhyChooseSection from "@/components/saasFinance/WhyChooseSection";
import UseCaseSection from "@/components/saasFinance/UseCaseSection";
import { FaqSection } from "@/components/accounting/FaqSection";
import CTASection from "@/components/saasFinance/CTASection";

const faqs = [
  {
    question: "How is SaaS finance different from tech finance?",
    answer:
      "SaaS finance focuses specifically on recurring revenue, churn, deferred revenue, and valuation-driven metrics. While tech finance covers a broader range of technology businesses, SaaS finance is tailored to subscription-based business models with emphasis on ARR/MRR, customer lifetime value, and unit economics.",
  },
  {
    question: "Can SaaS finance services help improve valuation?",
    answer:
      "Yes. Clear SaaS metrics and disciplined financial reporting directly influence valuation and investor confidence. By accurately tracking and presenting key metrics like ARR growth, churn rates, LTV/CAC ratios, and burn rate, you demonstrate financial maturity that investors value highly during fundraising.",
  },
  {
    question: "Are these services suitable for early-stage SaaS startups?",
    answer:
      "Yes. Early SaaS finance discipline significantly improves scalability and funding outcomes. Setting up proper financial systems, metrics tracking, and reporting frameworks from the start prevents costly rework later and builds the foundation for investor confidence as you scale.",
  },
];

const SaasFinance = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "@id": "https://growwthpartners.com/saas-finance/#faq",
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
        title="SaaS Finance Services | Metrics, Forecasting & Valuation"
        description="Financial modelling, MRR dashboards, ARR forecasting, and SaaS KPI tracking."
        keywords="SaaS finance Singapore, SaaS CFO, MRR reporting, churn analysis"
        canonicalUrl="https://growwthpartners.com/saas-finance"
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
          subtitle="Find answers to common questions about our SaaS finance solutions"
        />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default SaasFinance;
