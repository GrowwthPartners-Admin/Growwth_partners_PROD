
import React, { useState } from 'react';
import { Layout } from "@/components/Layout";
import SEOhelper from '@/components/SEOhelper';
import { useCountry } from '@/contexts/CountryContext';
import { ContactModal } from '@/components/ui/contact-modal';
import { HeroSection } from '@/components/fundraising/HeroSection';
import { AboutSection } from '@/components/fundraising/AboutSection';
import { ServicesSection } from '@/components/fundraising/ServicesSection';
import { WhyChooseUsSection } from '@/components/fundraising/WhyChooseUsSection';
import { FAQSection } from '@/components/fundraising/FAQSection';
import { CTASection } from '@/components/fundraising/CTASection';

const Fundraising = () => {
  const { getCountryUrl } = useCountry();
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "@id": "https://growwthpartners.com/fundraising-services/#faq",
      "name": "Expert Fundraising Services for Startups | Growwth Partners - FAQ",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What types of companies do you work with?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We work with companies across various industries and stages, from pre-seed startups to established businesses seeking growth capital. Our expertise spans technology, healthcare, fintech, e-commerce, and other high-growth sectors."
          }
        },
        {
          "@type": "Question",
          "name": "How long does the fundraising process typically take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Timelines vary based on stage, round size, and market conditions, but most processes take around 4–6 months from engagement to closing. Some rounds may close faster or take longer depending on complexity and investor appetite."
          }
        },
        {
          "@type": "Question",
          "name": "Do you guarantee funding success?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No one can guarantee funding outcomes. However, our structured process, investor network, and positioning support significantly improve your chances by sharpening your narrative, numbers, and target list."
          }
        },
        {
          "@type": "Question",
          "name": "How do you help prepare our pitch deck?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We work with your leadership team to build an investor-ready deck that clearly articulates your value proposition, traction, market size, business model, unit economics, and growth story in a way that resonates with serious investors."
          }
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://growwthpartners.com/fundraising-services/#service",
      "name": "Fundraising Advisory & Investor-Readiness for Startups",
      "serviceType": [
        "Fundraising Advisory",
        "Investor Readiness",
        "Pitch Deck & Financial Model Support"
      ],
      "description": "Strategic fundraising support for startups, including investor targeting, pitch narrative, financial modeling, and end-to-end deal support.",
      "provider": {
        "@id": "https://growwthpartners.com/#organization"
      },
      "areaServed": [
        "Singapore",
        "United Arab Emirates",
        "Australia"
      ]
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
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "65 Chulia Street",
        "addressLocality": "Singapore",
        "postalCode": "049513",
        "addressCountry": "SG"
      }
    }
  ]
};

  return (
    <Layout>
      <SEOhelper
        title="Expert Fundraising Services for Startups | Growwth Partners"
        description="Secure the capital your business needs to scale with our expert-led fundraising solutions. From seed to Series A and beyond - start your fundraising journey today."
        keywords="fundraising services, startup funding, venture capital, angel investors, pitch deck, Series A funding, investment strategy"
        canonicalUrl='https://growwthpartners.com/fundraising-services'
        structuredData={structuredData}
      />

      <HeroSection onContactClick={() => setContactModalOpen(true)} />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <FAQSection />
      <CTASection onContactClick={() => setContactModalOpen(true)} />

      <ContactModal 
        open={contactModalOpen} 
        onOpenChange={setContactModalOpen} 
      />
    </Layout>
  );
};

export default Fundraising;
