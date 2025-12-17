import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import SEOhelper from '@/components/SEOhelper';
import HeroSection from '@/components/ecommerceAccounting/HeroSection';
import WhyChooseSection from '@/components/ecommerceAccounting/WhyChooseSection';
import WhatYouGetSection from '@/components/ecommerceAccounting/WhatYouGetSection';
import PlatformStackSection from '@/components/ecommerceAccounting/PlatformStackSection';
import DeliveryModelSection from '@/components/ecommerceAccounting/DeliveryModelSection';
import WhoWeHelpSection from '@/components/ecommerceAccounting/WhoWeHelpSection';
import AddOnServicesSection from '@/components/ecommerceAccounting/AddOnServicesSection';
import CTASection from '@/components/ecommerceAccounting/CTASection';
import { FaqSection } from '@/components/accounting/FaqSection';

const faqItems = [
  {
    question: 'How does Growwth Partners deliver ecommerce accounting for multi-channel brands?',
    answer: 'Growwth Partners reconciles orders, payouts, fees, and refunds by channel, maps inventory and COGS correctly, and issues monthly packs with SKU and channel-level margins.',
  },
  {
    question: 'Which platforms and gateways does Growwth Partners support?',
    answer: 'Growwth Partners supports Shopify, Amazon, WooCommerce, Etsy, and eBay, with Stripe, PayPal, Razorpay, and other gateways, plus COD workflows.',
  },
  {
    question: 'How does Growwth Partners handle inventory and COGS accuracy?',
    answer: 'Growwth Partners applies SKU-level tracking, landed cost and freight allocation, and bundle or kit rules so COGS and margins reflect reality.',
  },
  {
    question: 'Can Growwth Partners manage sales tax, VAT, or GST?',
    answer: 'Yes. Growwth Partners registers, files, and reconciles tax by region, aligns marketplace reports, and maintains documentation for reviews and audits.',
  },
  {
    question: 'What does an ecommerce month-end close include with Growwth Partners?',
    answer: 'Close calendars, channel reconciliations, inventory checks, variance analysis, and management accounts packaged for founders and boards.',
  },
  {
    question: 'Does Growwth Partners support multi-currency and multi-entity consolidation?',
    answer: 'Yes. Consolidated reporting and intercompany workflows are set up for groups selling across countries and channels.',
  },
];

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Ecommerce Accounting Services',
  provider: {
    '@type': 'Organization',
    name: 'Growwth Partners',
  },
  description: 'Streamline ecommerce accounting and tax compliance with specialist ecommerce bookkeeping services for Shopify, Amazon, and online brands.',
  serviceType: 'Ecommerce Accounting',
  areaServed: ['Singapore', 'UAE', 'Australia'],
};

const EcommerceAccounting: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEOhelper
        title="Ecommerce Accounting Services for Online Businesses"
        description="Streamline ecommerce accounting and tax compliance with specialist ecommerce bookkeeping services for Shopify, Amazon, and online brands. Improve accuracy and scale confidently."
        keywords="ecommerce accounting, online business accounting, Shopify accounting, Amazon accounting, ecommerce bookkeeping, ecommerce tax management, COGS tracking, multi-channel reconciliation"
        canonicalUrl="https://growwthpartners.com/ecommerce-accounting-services"
        structuredData={structuredData}
      />
      <Navbar />
      <main>
        <HeroSection />
        <WhyChooseSection />
        <WhatYouGetSection />
        <PlatformStackSection />
        <DeliveryModelSection />
        <WhoWeHelpSection />
        <AddOnServicesSection />
        <FaqSection
          faqs={faqItems}
          subtitle="Find answers to common questions about ecommerce accounting"
        />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default EcommerceAccounting;
