import { Layout } from '@/components/Layout';
import SEOhelper from '@/components/SEOhelper';
import HeroSection from '@/components/corporateTaxUAE/HeroSection';
import WhyChooseSection from '@/components/corporateTaxUAE/WhyChooseSection';
import WhatIncludesSection from '@/components/corporateTaxUAE/WhatIncludesSection';
import WhoWeHelpSection from '@/components/corporateTaxUAE/WhoWeHelpSection';
import WhyGrowwthSection from '@/components/corporateTaxUAE/WhyGrowwthSection';
import FAQSection from '@/components/corporateTaxUAE/FAQSection';
import CTASection from '@/components/corporateTaxUAE/CTASection';
import { FaqSection } from "@/components/accounting/FaqSection";


const faqs = [
  {
    question: "What does corporate tax filing in the UAE involve with Growwth Partners?",
    answer: "Corporate tax filing in the UAE with Growwth Partners covers taxable income calculation, application of eligible reliefs, preparation of company tax returns and FTA compliant lodgement with complete supporting schedules."
  },
  {
    question: "How does Growwth Partners handle late filings or FTA notices?",
    answer: "Growwth Partners conducts a rapid compliance review, regularises outstanding items, manages FTA correspondence and pursues penalty mitigation where appropriate."
  },
  {
    question: "Does Growwth Partners optimise tax for SMEs under the new regime?",
    answer: "Growwth Partners delivers SME focused optimisation by assessing relief eligibility, aligning expense timing, reviewing asset treatment and advising on structure for improved after-tax outcomes."
  },
  {
    question: "How does Growwth Partners coordinate VAT, ESR and year-end corporate tax?",
    answer: "Growwth Partners reconciles VAT records to the final position, supports Economic Substance notifications and reports, and aligns all documentation with the year-end company tax return."
  },
  {
    question: "What records does Growwth Partners require for FTA compliant lodgement?",
    answer: "Growwth Partners typically requests finalised financial statements, fixed asset registers, VAT filings, prior-year returns, contracts and relevant supporting documentation."
  },
  {
    question: "Does Growwth Partners support multi-entity and free zone structures?",
    answer: "Growwth Partners supports mainland and free zone entities, including multi-entity groups that require coordinated filings and consolidated reporting."
  },
  {
    question: "How can businesses start corporate tax filing with Growwth Partners?",
    answer: "Businesses can begin with a short consultation, after which Growwth Partners confirms scope, timelines and a fixed-fee plan before work begins."
  }
];

const CorporateTaxFilingUAE = () => {
 const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
     {
        "@type": "FAQPage",
        "@id": "https://growwthpartners.com/uae/corporate-tax-filing-uae/#faq",
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
      "@id": "https://growwthpartners.com/uae/corporate-tax-filing-uae/#service",
      "name": "Corporate Tax Filing Services in UAE",
      "serviceType": [
        "Corporate Tax Filing Services UAE",
        
      ],
      "description": "Ensure compliance with UAE's new corporate tax laws with expert assistance. Growwth Partners provides corporate tax filing in the UAE with SME focused optimisation and FTA aligned reporting.",
      "areaServed": [
        "United Arab Emirates"
      ],
      "provider": {
        "@id": "https://growwthpartners.com/#organization"
      }
    },
    {
      "@type": "Organization",
      "@id": "https://growwthpartners.com/#organization",
      "name": "Growwth Partners",
      "url": "https://growwthpartners.com",
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "email": "jd@growwthpartners.com",
          "telephone": "+65 9861 5600",
          "contactType": "business"
        }
      ]
    }
  ]
};

  return (
    <Layout>
      <SEOhelper
        title="Corporate Tax Filing Services UAE | Growwth Partners"
        description="Ensure compliance with UAE's new corporate tax laws with expert assistance. Growwth Partners provides corporate tax filing in the UAE with SME focused optimisation and FTA aligned reporting."
        keywords="corporate tax filing UAE, FTA compliance, UAE tax services, corporate tax UAE, SME tax optimisation, VAT UAE, ESR compliance"
        canonicalUrl="https://growwthpartners.com/uae/corporate-tax-filing-uae"
        structuredData={structuredData}
      />
      <HeroSection />
      <WhyChooseSection />
      <WhatIncludesSection />
      <WhoWeHelpSection />
      <WhyGrowwthSection />
      <FaqSection
                faqs={faqs}
                subtitle="Find answers to Common questions about  Corporate Tax Filing in UAE"
              />
      <CTASection />
    </Layout>
  );
};

export default CorporateTaxFilingUAE;
