import React, { useState } from "react";
import { Layout } from "@/components/Layout";
import SEOhelper from "@/components/SEOhelper";
import HelpHeroSection from "@/components/helpSupport/HeroSection";
import HelpVideoSection from "@/components/helpSupport/VideoSection";
import HelpFaqSection from "@/components/helpSupport/FaqSection";
import HelpSupportCTASection from "@/components/helpSupport/CTASection";
import { HELP_SUPPORT_STRUCTURED_DATA } from "@/components/helpSupport/StructuredData";

const HelpSupport = () => {
  const [helpQuery, setHelpQuery] = useState("");

  return (
    <Layout>
      <SEOhelper
        title="Help & Support | CFO Services | Growwth Partners"
        description="Search help articles, watch a walkthrough video, and explore category-wise FAQs for our CFO services."
        keywords="help center, CFO services support, financial reporting help, forecasting support, cash flow help"
        canonicalUrl="https://growwthpartners.com/help-support"
        structuredData={HELP_SUPPORT_STRUCTURED_DATA}
      />

      <HelpHeroSection
        query={helpQuery}
        onQueryChange={setHelpQuery}
        onSubmit={() => {
          document
            .getElementById("faqs")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      />
      <HelpVideoSection youtubeId="uL0Uz8ud-4Y" />
      <HelpFaqSection query={helpQuery} onQueryChange={setHelpQuery} />
      <HelpSupportCTASection />
    </Layout>
  );
};

export default HelpSupport;
