import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import HeroSection from "@/components/bankingSolutions/HeroSection";
import WhyChooseSection from "@/components/bankingSolutions/WhyChooseSection";
import WhatYouGetSection from "@/components/bankingSolutions/WhatYouGetSection";
import BuiltForSection from "@/components/bankingSolutions/BuiltForSection";
import DeliveryModelSection from "@/components/bankingSolutions/DeliveryModelSection";
import WhoWeHelpSection from "@/components/bankingSolutions/WhoWeHelpSection";
import { FaqSection } from "@/components/accounting/FaqSection";
import CTASection from "@/components/bankingSolutions/CTASection";

const bankingFaqs = [
  {
    question: "How does Growwth Partners handle SME banking setup?",
    answer: "Growwth Partners shortlists banks that fit your model, prepares KYC and resolutions, supports account opening, and configures payment rails and cards."
  },
  {
    question: "Can Growwth Partners help with digital banking solutions?",
    answer: "Yes. Growwth Partners connects banking feeds to your accounting system, automates reconciliation, and sets up spend controls and alerts."
  },
  {
    question: "What does banking for new businesses typically include?",
    answer: "Core accounts, multi-currency options where needed, cards, payment gateways, and reconciliations mapped to the chart of accounts."
  },
  {
    question: "How quickly can a startup go live?",
    answer: "Most teams open accounts and connect feeds within days once KYC is ready. Gateways and reconciliation rules are added soon after."
  },
  {
    question: "Will reconciliation still need manual work?",
    answer: "Some exceptions will, but Growwth Partners designs rules for fees, refunds, and chargebacks so most items clear automatically."
  },
  {
    question: "Does Growwth Partners support multi-entity groups?",
    answer: "Yes. Consolidated banking views, intercompany workflows, and multi-currency reporting are available."
  }
];

const SimplifiedBankingSolutions = () => {
  return (
    <>
      <Helmet>
        <title>Simplified Banking Solutions for New Businesses | Growwth Partners</title>
        <meta 
          name="description" 
          content="Discover business banking solutions for startups and SMEs. Streamline payments, automate reconciliation, and manage cash with practical digital banking solutions and SME banking setup." 
        />
        <link rel="canonical" href="https://growwthpartners.com/simplified-banking-solutions" />
      </Helmet>

      <Navbar />

      <main>
        <HeroSection />
        <WhyChooseSection />
        <WhatYouGetSection />
        <BuiltForSection />
        <DeliveryModelSection />
        <WhoWeHelpSection />
        <FaqSection 
          faqs={bankingFaqs}
          subtitle="Find answers to common questions about our banking solutions"
        />
        <CTASection />
      </main>

      <Footer />
    </>
  );
};

export default SimplifiedBankingSolutions;
