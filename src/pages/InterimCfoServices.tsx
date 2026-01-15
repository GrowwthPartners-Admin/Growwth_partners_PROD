import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import SEOhelper from "@/components/SEOhelper";
import HeroSection from "@/components/interimCfo/HeroSection";
import WhatIsSection from "@/components/interimCfo/WhatIsSection";
import WhenNeededSection from "@/components/interimCfo/WhenNeededSection";
import ChallengesSection from "@/components/interimCfo/ChallengesSection";
import HowWeDeliverSection from "@/components/interimCfo/HowWeDeliverSection";
import WhyChooseSection from "@/components/interimCfo/WhyChooseSection";
import UseCaseSection from "@/components/interimCfo/UseCaseSection";
import { FaqSection } from "@/components/accounting/FaqSection";
import CTASection from "@/components/interimCfo/CTASection";

const faqs = [
  {
    question: "How long does an Interim CFO engagement last?",
    answer:
      "Engagements typically range from a few months to one year, depending on business needs and transition complexity. We tailor the duration to ensure proper stabilisation and handover.",
  },
  {
    question: "Is an Interim CFO involved in daily operations?",
    answer:
      "Yes. Interim CFOs take full ownership of finance leadership, including team oversight and operational decision-making. Unlike advisory roles, they are hands-on and accountable for results.",
  },
  {
    question: "Can an Interim CFO help during audits or due diligence?",
    answer:
      "Yes. Interim CFOs frequently support audits, regulatory reviews, and investor due diligence processes. They bring the expertise and credibility needed to manage these critical situations.",
  },
];

const InterimCfoServices = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "@id": "https://growwthpartners.com/outsourced-bookkeeping/#faq",
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
        "@id": "https://growwthpartners.com/outsourced-bookkeeping/#service",
        name: "Outsourced Bookkeeping Services Singapore",
        serviceType: "Bookkeeping Services",
        description:
          "Monthly bookkeeping, reconciliations, expense tracking, and closing delivered by an expert team.",
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
    <div className="min-h-screen bg-white">
      <SEOhelper
        title="Interim CFO Services in Singapore | Leadership Through Transition"
        description="Expert interim CFO support during leadership gaps, restructuring, mergers, or transitions."
        keywords="interim CFO Singapore, temporary CFO, CFO replacement, transition finance leadership"
        canonicalUrl="https://growwthpartners.com/interim-cfo-services"
        structuredData={structuredData}
      />
      <Navbar />
      <main>
        <HeroSection />
        <WhatIsSection />
        <WhenNeededSection />
        <ChallengesSection />
        <HowWeDeliverSection />
        <WhyChooseSection />
        <UseCaseSection />
        <FaqSection
          faqs={faqs}
          subtitle="Common questions about our Intrim CFO services"
        />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default InterimCfoServices;
