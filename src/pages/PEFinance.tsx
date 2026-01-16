import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import SEOhelper from "@/components/SEOhelper";
import HeroSection from "@/components/peFinance/HeroSection";
import WhatIsSection from "@/components/peFinance/WhatIsSection";
import WhoShouldUseSection from "@/components/peFinance/WhoShouldUseSection";
import ChallengesSection from "@/components/peFinance/ChallengesSection";
import HowWeDeliverSection from "@/components/peFinance/HowWeDeliverSection";
import WhyChooseSection from "@/components/peFinance/WhyChooseSection";
import UseCaseSection from "@/components/peFinance/UseCaseSection";
import { FaqSection } from "@/components/accounting/FaqSection";
import CTASection from "@/components/peFinance/CTASection";


const faqs = [
  {
    question: "How are PE finance services different from fund finance services?",
    answer: "PE finance focuses on portfolio company performance, integration, and exits, while fund finance focuses on LP reporting and capital flows. PE finance prioritises operational value creation and deal readiness across portfolio companies."
  },
  {
    question: "Can these services support exit preparation?",
    answer: "Yes. Exit readiness and vendor diligence support are core components of our PE finance services. We help prepare exit-quality financial statements, coordinate vendor due diligence, and ensure data room and buyer readiness."
  },
  {
    question: "Are these services suitable for growth equity funds?",
    answer: "Yes. Services scale across buyout, growth equity, and minority investments. We adapt our approach based on the investment type, providing appropriate financial governance and reporting frameworks for each."
  }
];
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Private Equity Finance Services",
  "provider": {
    "@type": "Organization",
    "name": "Growwth Partners"
  },
  "description": "Finance support for PE-backed companies including reporting, dashboards, and control implementation.",
  "areaServed": "Singapore",
  "serviceType": "Private Equity Finance"
};

const PEFinance = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOhelper
        title="Private Equity Finance Services | Portfolio Reporting & Controls"
        description="Finance support for PE-backed companies including reporting, dashboards, and control implementation."
        keywords="private equity finance, portfolio CFO, PE reporting, PE finance Singapore, portfolio reporting, value creation"
        ogType="website"
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
                  subtitle="Find answers to common questions about Trading & Distribution Finance"
                />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default PEFinance;
