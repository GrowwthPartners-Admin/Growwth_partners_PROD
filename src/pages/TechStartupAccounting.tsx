import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/techStartupAccounting/HeroSection";
import { WhyChooseSection } from "@/components/techStartupAccounting/WhyChooseSection";
import { WhatYouGetSection } from "@/components/techStartupAccounting/WhatYouGetSection";
import { PlatformSetupSection } from "@/components/techStartupAccounting/PlatformSetupSection";
import { DeliveryModelSection } from "@/components/techStartupAccounting/DeliveryModelSection";
import { AddOnServicesSection } from "@/components/techStartupAccounting/AddOnServicesSection";
import { FaqSection } from "@/components/accounting/FaqSection";
import { CTASection } from "@/components/techStartupAccounting/CTASection";

const faqs = [
  {
    question: "How does Growwth Partners differ from a traditional accounting firm?",
    answer: "Growwth Partners is founder-led with a fintech and SaaS background. The team designs accounting that supports growth, fundraising, and product cycles, then uses Ryzup.ai to automate checks and speed up reporting."
  },
  {
    question: "What revenue models can Growwth Partners support?",
    answer: "Subscriptions, usage-based pricing, tiered enterprise plans, and milestone or hybrid models. Policies and workflows ensure correct deferrals and recognition."
  },
  {
    question: "How are metrics like MRR, ARR, churn, and NRR reported?",
    answer: "Metrics are defined upfront, tracked monthly, and included in management packs with cohort and plan-level views that investors recognise."
  },
  {
    question: "Does Growwth Partners replace spreadsheets?",
    answer: "No. Teams keep familiar tools. Ryzup.ai runs inside your environment to automate error detection, reconciliations, and report generation."
  },
  {
    question: "How quickly can a startup get set up?",
    answer: "Most teams complete assessment and design in the first weeks, then transition to a steady monthly close with clear KPIs and commentary."
  },
  {
    question: "Can Growwth Partners handle multi-entity and multi-currency?",
    answer: "Yes. The team maintains group structures, intercompany workflows, and consolidated reporting across currencies and regions."
  }
];

const TechStartupAccounting = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Accounting for Tech Startups and Companies | Growwth Partners</title>
        <meta 
          name="description" 
          content="Expert accounting for tech startups and SaaS companies led by a fintech founder. Simplify compliance, improve financial clarity, and scale with investor-ready reporting." 
        />
        <link rel="canonical" href="https://growwthpartners.com/accounting-for-tech-start-ups-companies" />
      </Helmet>
      
      <Navbar />
      
      <main>
        <HeroSection />
        <WhyChooseSection />
        <WhatYouGetSection />
        <PlatformSetupSection />
        <DeliveryModelSection />
        <AddOnServicesSection />
        <FaqSection 
          faqs={faqs}
          subtitle="Find answers to common questions about our tech startup accounting services"
        />
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
};

export default TechStartupAccounting;
