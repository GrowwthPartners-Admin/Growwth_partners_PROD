import SEOhelper from "@/components/SEOhelper";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import HeroSection from "@/components/vcFinance/HeroSection";
import WhatIsSection from "@/components/vcFinance/WhatIsSection";
import WhoShouldUseSection from "@/components/vcFinance/WhoShouldUseSection";
import ChallengesSection from "@/components/vcFinance/ChallengesSection";
import HowWeDeliverSection from "@/components/vcFinance/HowWeDeliverSection";
import WhyChooseSection from "@/components/vcFinance/WhyChooseSection";
import UseCaseSection from "@/components/vcFinance/UseCaseSection";
import { FaqSection } from "@/components/accounting/FaqSection";
import CTASection from "@/components/vcFinance/CTASection";

const faqs = [
  {
    question: "How are fund finance services different from company finance?",
    answer:
      "Fund finance focuses on investor reporting, NAV, capital flows, and governance rather than operating performance. Unlike company finance which tracks P&L and operational metrics, fund finance centres on LP reporting accuracy, capital account management, waterfall calculations, and regulatory compliance specific to investment vehicles.",
  },
  {
    question: "Can these services support first-time fund managers?",
    answer:
      "Yes. First-time GPs benefit significantly from structured fund finance and reporting. We help emerging managers establish institutional-grade finance infrastructure from day one, building credibility with LPs and ensuring compliance readiness as the fund scales.",
  },
  {
    question: "Are these services compliant with Singapore regulations?",
    answer:
      "Yes. Services are designed to support regulatory and audit readiness in Singapore. We ensure fund operations meet MAS requirements and international reporting standards expected by institutional investors.",
  },
];

const VCFinance = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "@id": "https://growwthpartners.com/vc-fund-finance/#faq",
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
        "@type": "Service",
        "@id": "https://growwthpartners.com/vc-fund-finance/#service",
        name: "vc-fund-finance Services Singapore",
        serviceType: "vc-fund-finance",
        description:
          "Finance support for VC funds including LP reporting, NAV calculation, capital calls, and fund governance in Singapore",
        provider: {
          "@id": "https://growwthpartners.com/#organization",
        },
        areaServed: ["Singapore", "United Arab Emirates", "Australia"],
      },
      {
        "@type": "Organization",
        "@id": "https://growwthpartners.com/#organization",
        name: "Growwth Partners",
        url: "https://growwthpartners.com",
        areaServed: ["Singapore", "United Arab Emirates", "Australia"],
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
    <div className="min-h-screen bg-background">
      <SEOhelper
        title="VC & Fund Finance Services Singapore | LP Reporting & NAV"
        description="Finance support for VC funds including LP reporting, NAV calculation, capital calls, and fund governance in Singapore."
        keywords="vc finance Singapore, fund finance, LP reporting, NAV calculation, venture capital CFO, fund governance"
        canonicalUrl="https://growwthpartners.com/vc-fund-finance"
        ogType="website"
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
          subtitle="Common questions about our EdTech Finance services"
        />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default VCFinance;
