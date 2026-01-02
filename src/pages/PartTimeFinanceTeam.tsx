import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import SEOhelper from "@/components/SEOhelper";
import HeroSection from "@/components/partTimeFinanceTeam/HeroSection";
import WhatIsSection from "@/components/partTimeFinanceTeam/WhatIsSection";
import WhoShouldUseSection from "@/components/partTimeFinanceTeam/WhoShouldUseSection";
import ChallengesSection from "@/components/partTimeFinanceTeam/ChallengesSection";
import HowWeDeliverSection from "@/components/partTimeFinanceTeam/HowWeDeliverSection";
import WhyChooseSection from "@/components/partTimeFinanceTeam/WhyChooseSection";
import UseCaseSection from "@/components/partTimeFinanceTeam/UseCaseSection";
import FaqSection from "@/components/partTimeFinanceTeam/FaqSection";
import CTASection from "@/components/partTimeFinanceTeam/CTASection";

const faqs = [
  {
    question: "How is a Virtual Finance Team different from outsourcing accounting?",
    answer: "A Virtual Finance Team provides continuous, integrated support with clear ownership, rather than isolated or task-based outsourcing. You get dedicated professionals who understand your business, use unified cloud systems, and operate as a true extension of your organisation with full accountability.",
  },
  {
    question: "Can Virtual Finance Teams support growing transaction volumes?",
    answer: "Yes. Virtual Finance Teams scale efficiently as transaction volume and complexity increase. The cloud-based infrastructure and process-driven approach means we can expand capacity, add specialised resources, or enhance capabilities without disruption to your operations.",
  },
  {
    question: "Is data security maintained with a Virtual Finance Team?",
    answer: "Absolutely. Secure cloud systems and access controls ensure data integrity and confidentiality. We implement enterprise-grade security protocols, regular backups, and role-based access to protect your financial data at all times.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "@id": "https://growwthpartners.com/part-time-finance-team/#faq",
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

const PartTimeFinanceTeam = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEOhelper
        title="Virtual Finance Team Singapore | Data-Driven Finance Workflows"
        description="Virtual finance teams leveraging cloud and AI tools to streamline accounting, reporting, and forecasting."
        keywords="virtual finance team, cloud accounting team, remote bookkeeping, finance automation"
        canonicalUrl="https://growwthpartners.com/part-time-finance-team"
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
        <FaqSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default PartTimeFinanceTeam;
