import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import SEOhelper from "@/components/SEOhelper";
import HeroSection from "@/components/outsourcedBookkeeping/HeroSection";
import WhatIsSection from "@/components/outsourcedBookkeeping/WhatIsSection";
import WhoShouldUseSection from "@/components/outsourcedBookkeeping/WhoShouldUseSection";
import ChallengesSection from "@/components/outsourcedBookkeeping/ChallengesSection";
import HowWeDeliverSection from "@/components/outsourcedBookkeeping/HowWeDeliverSection";
import WhyChooseSection from "@/components/outsourcedBookkeeping/WhyChooseSection";
import UseCaseSection from "@/components/outsourcedBookkeeping/UseCaseSection";
import { FaqSection } from "@/components/accounting/FaqSection";
import CTASection from "@/components/outsourcedBookkeeping/CTASection";

const faqs = [
  {
    question: "How is outsourced bookkeeping different from hiring an in-house bookkeeper?",
    answer: "Outsourced bookkeeping provides access to experienced professionals, structured processes, and scalability without the cost or risk of full-time hiring. You get consistent quality, backup resources, and established systems that would take years to build internally."
  },
  {
    question: "Can outsourced bookkeeping support audits and fundraising?",
    answer: "Yes. Clean, accurate books are essential for audits, due diligence, and investor reviews. Our bookkeeping services ensure your financial records meet the standards expected by auditors and investors, making these processes smoother and more successful."
  },
  {
    question: "Will I still have visibility into my financial data?",
    answer: "Absolutely. Cloud-based systems provide real-time access to your financial records and reports. You maintain full visibility and control while we handle the day-to-day execution, giving you the best of both worlds."
  }
];

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
          text: faq.answer
        }
      }))
    },
    {
      "@type": "Service",
      "@id": "https://growwthpartners.com/outsourced-bookkeeping/#service",
      name: "Outsourced Bookkeeping Services Singapore",
      serviceType: "Bookkeeping Services",
      description: "Monthly bookkeeping, reconciliations, expense tracking, and closing delivered by an expert team.",
      provider: {
        "@id": "https://growwthpartners.com/#organization"
      },
      areaServed: ["Singapore", "United Arab Emirates", "Australia"]
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
          areaServed: "SG"
        }
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "65 Chulia Street",
        addressLocality: "Singapore",
        postalCode: "049513",
        addressCountry: "SG"
      }
    }
  ]
};

const OutsourcedBookkeeping = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEOhelper
        title="Outsourced Bookkeeping Singapore | Accurate, Reliable, Fast"
        description="Monthly bookkeeping, reconciliations, expense tracking, and closing delivered by an expert team."
        keywords="outsourced bookkeeping Singapore, bookkeeping services, monthly accounting"
        canonicalUrl="https://growwthpartners.com/outsourced-bookkeeping"
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
          subtitle="Find answers to common questions about Outsourced Bookkeeping services"
        />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default OutsourcedBookkeeping;
