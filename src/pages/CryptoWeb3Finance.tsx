import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import SEOhelper from "@/components/SEOhelper";
import HeroSection from "@/components/cryptoWeb3Finance/HeroSection";
import WhatIsSection from "@/components/cryptoWeb3Finance/WhatIsSection";
import WhoShouldUseSection from "@/components/cryptoWeb3Finance/WhoShouldUseSection";
import ChallengesSection from "@/components/cryptoWeb3Finance/ChallengesSection";
import HowWeDeliverSection from "@/components/cryptoWeb3Finance/HowWeDeliverSection";
import WhyChooseSection from "@/components/cryptoWeb3Finance/WhyChooseSection";
import UseCaseSection from "@/components/cryptoWeb3Finance/UseCaseSection";
import { FaqSection } from "@/components/accounting/FaqSection";
import CTASection from "@/components/cryptoWeb3Finance/CTASection";

const faqs = [
  {
    question: "How is crypto accounting different from traditional accounting?",
    answer:
      "Crypto accounting includes token valuation, wallet reconciliation, volatility management, and on-chain activity tracking—beyond fiat accounting. It requires understanding of fair value measurements, cost basis tracking for digital assets, and recognition of various token types (utility, governance, rewards) according to their economic substance.",
  },
  {
    question: "Are these services compliant with Singapore regulations?",
    answer:
      "Yes. Our services are structured to support compliance-ready reporting aligned with Singapore regulatory expectations. We stay updated with MAS guidelines and ensure your financial reporting meets both local and international standards for crypto businesses.",
  },
  {
    question: "Can Web3 finance services support fundraising?",
    answer:
      "Yes. Investor-grade reporting and treasury transparency are critical for successful Web3 fundraising. We provide the financial documentation, dashboards, and governance frameworks that institutional investors and VCs expect to see before committing capital.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "@id": "https://growwthpartners.com/crypto-web3-finance/#faq",
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
    {
      "@type": "Service",
      name: "Crypto & Web3 Finance Services",
      description: "Institutional-grade financial control, token accounting, treasury management, and compliance-ready reporting for crypto and Web3 companies in Singapore.",
      provider: {
        "@type": "Organization",
        name: "Growwth Partners",
      },
      areaServed: {
        "@type": "Country",
        name: "Singapore",
      },
      serviceType: "Financial Services",
    },
  ],
};

const CryptoWeb3Finance = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEOhelper
        title="Crypto & Web3 Finance Services Singapore | Accounting & Compliance"
        description="Financial reporting, token accounting, compliance and treasury management for crypto and Web3 companies."
        keywords="crypto accounting Singapore, token accounting, Web3 finance, crypto CFO"
        canonicalUrl="https://growwthpartners.com/crypto-web3-finance"
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
          subtitle="Find answers to common questions about Crypto & Web3 finance services"
        />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default CryptoWeb3Finance;
