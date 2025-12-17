import SEOhelper from "@/components/SEOhelper";
import { HeroSection } from "@/components/incorporation/HeroSection";
import { WhyChooseSection } from "@/components/incorporation/WhyChooseSection";
import { WhatIsIncludedSection } from "@/components/incorporation/WhatIsIncludedSection";
import { ProcessSection } from "@/components/incorporation/ProcessSection";
import { WhoWeHelpSection } from "@/components/incorporation/WhoWeHelpSection";
import { AddOnsSection } from "@/components/incorporation/AddOnsSection";
import { CTASection } from "@/components/incorporation/CTASection";
import { FaqSection } from "@/components/accounting/FaqSection";
import { Layout } from "@/components/Layout";

const faqs = [
  {
    question: "Does a Singaporean business need a director who resides there?",
    answer:
      "Yes, at least one director who resides in Singapore must be present in a Singaporean business. This is required according to Singapore's Companies Act.",
  },
  {
    question: "What steps are necessary to form a company in Singapore?",
    answer:
      "The process includes: understanding registration requirements, choosing a corporate structure, assembling required documents, checking company name availability, submitting ACRA filings, and opening a corporate bank account. Required documents include identification documents of directors and shareholders, company name approval, registration form, memorandum and articles of association, appointment of company secretary, permits and business license, and bank account details.",
  },
  {
    question:
      "What credentials are required for a director of a Singaporean company?",
    answer:
      "The director must be 18 years or above, mentally and physically capable, not involved in any punishable offense or fraud, financially stable and responsible, and have a record of adhering to laws and compliance requirements.",
  },
  {
    question: "What is the cost of registering a company in Singapore?",
    answer:
      "The standard ACRA fee for registering a company in Singapore is approximately SGD 315. Additional professional fees for advisory and secretarial services vary based on the scope of support required.",
  },
  {
    question: "Can I operate a business in Singapore without registering it?",
    answer:
      "No, you cannot legally operate a business in Singapore without proper registration. Company registration with ACRA is mandatory for all business entities operating in Singapore.",
  },
  {
    question: "Why should your company incorporate in Singapore?",
    answer:
      "Singapore offers an attractive tax system with no capital gains tax, strong legal framework, strategic location in Asia, ease of doing business, access to talent, and robust financial infrastructure. These factors make it a preferred choice for entrepreneurs and businesses expanding in Asia.",
  },
];

const Incorporation = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "@id": "https://growwthpartners.com/esop-valuation-singapore/#faq",
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
    <Layout>
      <SEOhelper
        title="Company Incorporation Services in Singapore"
        description="Register your company in Singapore with expert guidance. Fast, compliant, and seamless incorporation services for entrepreneurs and SMEs."
        keywords="company incorporation singapore, register company singapore, singapore business registration, ACRA registration, singapore company setup"
        canonicalUrl="https://growwthpartners.com/incorporation"
        structuredData={structuredData}
      />
      <main>
        <HeroSection />
        <WhyChooseSection />
        <WhatIsIncludedSection />
        <WhoWeHelpSection />
        <ProcessSection />
        <AddOnsSection />
        <FaqSection faqs={faqs} />
        <CTASection />
      </main>
    </Layout>
  );
};

export default Incorporation;
