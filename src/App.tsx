import React from "react";
import { ClientOnly } from "vite-react-ssg";
import type { RouteRecord } from "vite-react-ssg";
import { Navigate } from "react-router-dom";
import Layout from "./Layout";
// import { supabase } from "@/integrations/supabase/client";
import { CountryProvider } from "./contexts/CountryContext";

// We need to lazy-load the BlogAdminPage component to ensure it's not eagerly imported on the server
const BlogAdminPage = React.lazy(() => import("./pages/admin/BlogAdmin"));

// async function getBlogSlugs() {
//   try {
//     const { data: posts, error } = await supabase.from("blog_post").select("slug").not("slug", "is", null);

//     if (error) {
//       console.error("SSG slug fetch error", error);
//       return [];
//     }

//     return posts.map((post) => `/blog/${post.slug}`);
//   } catch (error) {
//     console.error("Error fetching blog slugs:", error);
//     return [];
//   }
// }

// --- Static imports for non-lazy routes ---
import NotFound from "./pages/NotFound";
import BlogPost from "./pages/BlogPost";
import Index from "./pages/Index";

export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "index",
        element: <Index />,
      },
      {
        path: "services",
        async lazy() {
          const { default: Component } = await import("./pages/Services");
          return { Component };
        },
      },
      {
        path: "uae/services",
        async lazy() {
          const { default: Component } = await import("./pages/Services");
          return { Component };
        },
      },
      {
        path: "au/services",
        async lazy() {
          const { default: Component } = await import("./pages/Services");
          return { Component };
        },
      },
      {
        path: "about",
        async lazy() {
          const { default: Component } = await import("./pages/About");
          return { Component };
        },
      },
      {
        path: "contact-us",
        async lazy() {
          const { default: Component } = await import("./pages/Contact");
          return { Component };
        },
      },
      {
        path: "blog",
        async lazy() {
          const { default: Component } = await import("./pages/Blog");
          return { Component };
        },
      },
      {
        path: "accounting-services-in-singapore",
        async lazy() {
          const { default: Component } = await import("./pages/Accounting");
          return { Component };
        },
      },
      {
        path: "bookkeeping-services-in-singapore",
        async lazy() {
          const { default: Component } = await import("./pages/Bookkeeping");
          return { Component };
        },
      },
      {
        path: "payroll-services-in-singapore",
        async lazy() {
          const { default: Component } = await import("./pages/Payroll");
          return { Component };
        },
      },
      {
        path: "cash-flow-services-in-singapore",
        async lazy() {
          const { default: Component } = await import("./pages/CashFlow");
          return { Component };
        },
      },
      {
        path: "company-incorporation-services-in-singapore",
        async lazy() {
          const { default: Component } = await import(
            "./pages/CompanyIncorporation"
          );
          return { Component };
        },
      },
      {
        path: "corporate-secretary-services-in-singapore",
        async lazy() {
          const { default: Component } = await import(
            "./pages/CorporateSecretary"
          );
          return { Component };
        },
      },
      {
        path: "part-time-cfo",
        async lazy() {
          const { default: Component } = await import("./pages/FractionalCFO");
          return { Component };
        },
      },
      {
        path: "corporate-tax-filing-singapore",
        async lazy() {
          const { default: Component } = await import(
            "./pages/CorporateTaxFiling"
          );
          return { Component };
        },
      },
      {
        path: "valuation-services-singapore",
        async lazy() {
          const { default: Component } = await import(
            "./pages/BusinessValuation"
          );
          return { Component };
        },
      },
      {
        path: "esop-advisory-singapore",
        async lazy() {
          const { default: Component } = await import(
            "./pages/EsopAdvisorySingapore"
          );
          return { Component };
        },
      },
      {
        path: "esop-valuation-singapore",
        async lazy() {
          const { default: Component } = await import(
            "./pages/EsopValuationSingapore"
          );
          return { Component };
        },
      },
      {
        path: "ai-finance-workflow-singapore",
        async lazy() {
          const { default: Component } = await import(
            "./pages/AiFinanceWorkflow"
          );
          return { Component };
        },
      },
      {
        path: "ai-financial-forecasting-singapore",
        async lazy() {
          const { default: Component } = await import(
            "./pages/AiFinancialForecasting"
          );
          return { Component };
        },
      },
      {
        path: "ai-risk-compliance-singapore",
        async lazy() {
          const { default: Component } = await import(
            "./pages/AiRiskCompliance"
          );
          return { Component };
        },
      },
      {
        path: "ai-decision-intelligence-singapore",
        async lazy() {
          const { default: Component } = await import(
            "./pages/AiDecisionIntelligence"
          );
          return { Component };
        },
      },
      {
        path: "ai-advisory-finance-transformation-singapore",
        async lazy() {
          const { default: Component } = await import(
            "./pages/AiAdvisoryFinanceTransformation"
          );
          return { Component };
        },
      },
      {
        path: "simplified-banking-solutions",
        async lazy() {
          const { default: Component } = await import(
            "./pages/SimplifiedBankingSolutions"
          );
          return { Component };
        },
      },
      {
        path: "accounting-for-tech-start-ups-companies",
        async lazy() {
          const { default: Component } = await import(
            "./pages/TechStartupAccounting"
          );
          return { Component };
        },
      },
      {
        path: "ecommerce-accounting-services",
        async lazy() {
          const { default: Component } = await import(
            "./pages/EcommerceAccounting"
          );
          return { Component };
        },
      },
      {
        path: "incorporation",
        async lazy() {
          const { default: Component } = await import("./pages/Incorporation");
          return { Component };
        },
      },
      {
        path: "incorporation/foreigner",
        async lazy() {
          const { default: Component } = await import(
            "./pages/IncorporationForeigner"
          );
          return { Component };
        },
      },
      {
        path: "uae/incorporation/foreigner",
        async lazy() {
          const { default: Component } = await import(
            "./pages/IncorporationForeigner"
          );
          return { Component };
        },
      },
      {
        path: "au/incorporation/foreigner",
        async lazy() {
          const { default: Component } = await import(
            "./pages/IncorporationForeigner"
          );
          return { Component };
        },
      },
      {
        path: "fintech-finance",
        async lazy() {
          const { default: Component } = await import("./pages/FintechFinance");
          return { Component };
        },
      },
      {
        path: "uae/fintech-finance",
        async lazy() {
          const { default: Component } = await import("./pages/FintechFinance");
          return { Component };
        },
      },
      {
        path: "au/fintech-finance",
        async lazy() {
          const { default: Component } = await import("./pages/FintechFinance");
          return { Component };
        },
      },
      {
        path: "tech-business-finance",
        async lazy() {
          const { default: Component } = await import(
            "./pages/TechBusinessFinance"
          );
          return { Component };
        },
      },
      {
        path: "uae/tech-business-finance",
        async lazy() {
          const { default: Component } = await import(
            "./pages/TechBusinessFinance"
          );
          return { Component };
        },
      },
      {
        path: "au/tech-business-finance",
        async lazy() {
          const { default: Component } = await import(
            "./pages/TechBusinessFinance"
          );
          return { Component };
        },
      },
      {
        path: "saas-finance",
        async lazy() {
          const { default: Component } = await import("./pages/SaasFinance");
          return { Component };
        },
      },
      {
        path: "uae/saas-finance",
        async lazy() {
          const { default: Component } = await import("./pages/SaasFinance");
          return { Component };
        },
      },
      {
        path: "ai-cfo-services",
        async lazy() {
          const { default: Component } = await import("./pages/AiCfoServices");
          return { Component };
        },
      },
      {
        path: "uae/ai-cfo-services",
        async lazy() {
          const { default: Component } = await import("./pages/AiCfoServices");
          return { Component };
        },
      },
      {
        path: "au/ai-cfo-services",
        async lazy() {
          const { default: Component } = await import("./pages/AiCfoServices");
          return { Component };
        },
      },
      {
        path: "crypto-web3-finance",
        async lazy() {
          const { default: Component } = await import("./pages/CryptoWeb3Finance");
          return { Component };
        },
      },
      {
        path: "uae/crypto-web3-finance",
        async lazy() {
          const { default: Component } = await import("./pages/CryptoWeb3Finance");
          return { Component };
        },
      },
      {
        path: "au/crypto-web3-finance",
        async lazy() {
          const { default: Component } = await import("./pages/CryptoWeb3Finance");
          return { Component };
        },
      },
      {
        path: "startup-finance-services",
        async lazy() {
          const { default: Component } = await import("./pages/StartupFinanceServices");
          return { Component };
        },
      },
      {
        path: "uae/startup-finance-services",
        async lazy() {
          const { default: Component } = await import("./pages/StartupFinanceServices");
          return { Component };
        },
      },
      {
        path: "au/startup-finance-services",
        async lazy() {
          const { default: Component } = await import("./pages/StartupFinanceServices");
          return { Component };
        },
      },
      {
        path: "au/saas-finance",
        async lazy() {
          const { default: Component } = await import("./pages/SaasFinance");
          return { Component };
        },
      },
      {
        path: "on-demand-cfo-services",
        async lazy() {
          const { default: Component } = await import(
            "./pages/OnDemandCfoServices"
          );
          return { Component };
        },
      },
      {
        path: "uae/on-demand-cfo-services",
        async lazy() {
          const { default: Component } = await import(
            "./pages/OnDemandCfoServices"
          );
          return { Component };
        },
      },
      {
        path: "au/on-demand-cfo-services",
        async lazy() {
          const { default: Component } = await import(
            "./pages/OnDemandCfoServices"
          );
          return { Component };
        },
      },
      {
        path: "outsourced-cfo-services",
        async lazy() {
          const { default: Component } = await import(
            "./pages/OutsourcedCfoServices"
          );
          return { Component };
        },
      },
      {
        path: "uae/outsourced-cfo-services",
        async lazy() {
          const { default: Component } = await import(
            "./pages/OutsourcedCfoServices"
          );
          return { Component };
        },
      },
      {
        path: "au/outsourced-cfo-services",
        async lazy() {
          const { default: Component } = await import(
            "./pages/OutsourcedCfoServices"
          );
          return { Component };
        },
      },
      {
        path: "startup-cfo-services",
        async lazy() {
          const { default: Component } = await import(
            "./pages/StartupCfoServices"
          );
          return { Component };
        },
      },
      {
        path: "uae/startup-cfo-services",
        async lazy() {
          const { default: Component } = await import(
            "./pages/StartupCfoServices"
          );
          return { Component };
        },
      },
      {
        path: "au/startup-cfo-services",
        async lazy() {
          const { default: Component } = await import(
            "./pages/StartupCfoServices"
          );
          return { Component };
        },
      },
      {
        path: "sme-cfo-services",
        async lazy() {
          const { default: Component } = await import("./pages/SmeCfoServices");
          return { Component };
        },
      },
      {
        path: "uae/sme-cfo-services",
        async lazy() {
          const { default: Component } = await import("./pages/SmeCfoServices");
          return { Component };
        },
      },
      {
        path: "au/sme-cfo-services",
        async lazy() {
          const { default: Component } = await import("./pages/SmeCfoServices");
          return { Component };
        },
      },
      {
        path: "trading-distribution-finance",
        async lazy() {
          const { default: Component } = await import("./pages/TradingDistributionFinance");
          return { Component };
        },
      },
      {
        path: "uae/trading-distribution-finance",
        async lazy() {
          const { default: Component } = await import("./pages/TradingDistributionFinance");
          return { Component };
        },
      },
      {
        path: "au/trading-distribution-finance",
        async lazy() {
          const { default: Component } = await import("./pages/TradingDistributionFinance");
          return { Component };
        },
      },
      {
        path: "professional-services-finance",
        async lazy() {
          const { default: Component } = await import("./pages/ProfessionalServicesFinance");
          return { Component };
        },
      },
      {
        path: "uae/professional-services-finance",
        async lazy() {
          const { default: Component } = await import("./pages/ProfessionalServicesFinance");
          return { Component };
        },
      },
      {
        path: "au/professional-services-finance",
        async lazy() {
          const { default: Component } = await import("./pages/ProfessionalServicesFinance");
          return { Component };
        },
      },


            {
        path: "family-office-finance-services",
        async lazy() {
          const { default: Component } = await import("./pages/FamilyOfficeFinanceServices");
          return { Component };
        },
      },
      {
        path: "uae/family-office-finance-services",
        async lazy() {
          const { default: Component } = await import("./pages/FamilyOfficeFinanceServices");
          return { Component };
        },
      },
      {
        path: "au/family-office-finance-services",
        async lazy() {
          const { default: Component } = await import("./pages/FamilyOfficeFinanceServices");
          return { Component };
        },
      },


      {
        path: "sme-finance-services",
        async lazy() {
          const { default: Component } = await import("./pages/SmeFinanceServices");
          return { Component };
        },
      },
      {
        path: "uae/sme-finance-services",
        async lazy() {
          const { default: Component } = await import("./pages/SmeFinanceServices");
          return { Component };
        },
      },
      {
        path: "au/sme-finance-services",
        async lazy() {
          const { default: Component } = await import("./pages/SmeFinanceServices");
          return { Component };
        },
      },
      {
        path: "remote-cfo-finance-team",
        async lazy() {
          const { default: Component } = await import(
            "./pages/RemoteCfoServices"
          );
          return { Component };
        },
      },
      {
        path: "uae/remote-cfo-finance-team",
        async lazy() {
          const { default: Component } = await import(
            "./pages/RemoteCfoServices"
          );
          return { Component };
        },
      },
      {
        path: "au/remote-cfo-finance-team",
        async lazy() {
          const { default: Component } = await import(
            "./pages/RemoteCfoServices"
          );
          return { Component };
        },
      },
      {
        path: "fractional-finance-team",
        async lazy() {
          const { default: Component } = await import("./pages/FractionalFinanceTeam");
          return { Component };
        },
      },
      {
        path: "uae/fractional-finance-team",
        async lazy() {
          const { default: Component } = await import("./pages/FractionalFinanceTeam");
          return { Component };
        },
      },
      {
        path: "au/fractional-finance-team",
        async lazy() {
          const { default: Component } = await import("./pages/FractionalFinanceTeam");
          return { Component };
        },
      },
      {
        path: "part-time-cfo-services",
        async lazy() {
          const { default: Component } = await import("./pages/PartTimeCfoServices");
          return { Component };
        },
      },
      {
        path: "uae/part-time-cfo-services",
        async lazy() {
          const { default: Component } = await import("./pages/PartTimeCfoServices");
          return { Component };
        },
      },
      {
        path: "au/part-time-cfo-services",
        async lazy() {
          const { default: Component } = await import("./pages/PartTimeCfoServices");
          return { Component };
        },
      },
      {
        path: "fractional-cfo-services",
        async lazy() {
          const { default: Component } = await import("./pages/FractionalCfoServices");
          return { Component };
        },
      },
      {
        path: "uae/fractional-cfo-services",
        async lazy() {
          const { default: Component } = await import("./pages/FractionalCfoServices");
          return { Component };
        },
      },
      {
        path: "au/fractional-cfo-services",
        async lazy() {
          const { default: Component } = await import("./pages/FractionalCfoServices");
          return { Component };
        },
      },
      {
        path: "part-time-finance-team",
        async lazy() {
          const { default: Component } = await import("./pages/PartTimeFinanceTeam");
          return { Component };
        },
      },
      {
        path: "uae/part-time-finance-team",
        async lazy() {
          const { default: Component } = await import("./pages/PartTimeFinanceTeam");
          return { Component };
        },
      },
      {
        path: "au/part-time-finance-team",
        async lazy() {
          const { default: Component } = await import("./pages/PartTimeFinanceTeam");
          return { Component };
        },
      },
      {
        path: "virtual-finance-team",
        async lazy() {
          const { default: Component } = await import("./pages/VirtualFinanceTeam");
          return { Component };
        },
      },
      {
        path: "uae/virtual-finance-team",
        async lazy() {
          const { default: Component } = await import("./pages/VirtualFinanceTeam");
          return { Component };
        },
      },
      {
        path: "au/virtual-finance-team",
        async lazy() {
          const { default: Component } = await import("./pages/VirtualFinanceTeam");
          return { Component };
        },
      },
      {
        path: "outsourced-bookkeeping",
        async lazy() {
          const { default: Component } = await import("./pages/OutsourcedBookkeeping");
          return { Component };
        },
      },
      {
        path: "uae/outsourced-bookkeeping",
        async lazy() {
          const { default: Component } = await import("./pages/OutsourcedBookkeeping");
          return { Component };
        },
      },
      {
        path: "au/outsourced-bookkeeping",
        async lazy() {
          const { default: Component } = await import("./pages/OutsourcedBookkeeping");
          return { Component };
        },
      },
      {
        path: "outsourced-payroll",
        async lazy() {
          const { default: Component } = await import("./pages/OutsourcedPayroll");
          return { Component };
        },
      },
      {
        path: "uae/outsourced-payroll",
        async lazy() {
          const { default: Component } = await import("./pages/OutsourcedPayroll");
          return { Component };
        },
      },
      {
        path: "au/outsourced-payroll",
        async lazy() {
          const { default: Component } = await import("./pages/OutsourcedPayroll");
          return { Component };
        },
      },
      {
        path: "virtual-cfo-services",
        async lazy() {
          const { default: Component } = await import("./pages/VirtualCfoServices");
          return { Component };
        },
      },
      {
        path: "uae/virtual-cfo-services",
        async lazy() {
          const { default: Component } = await import("./pages/VirtualCfoServices");
          return { Component };
        },
      },
      {
        path: "au/virtual-cfo-services",
        async lazy() {
          const { default: Component } = await import("./pages/VirtualCfoServices");
          return { Component };
        },
      },
      {
        path: "interim-cfo-services",
        async lazy() {
          const { default: Component } = await import("./pages/InterimCfoServices");
          return { Component };
        },
      },
      {
        path: "uae/interim-cfo-services",
        async lazy() {
          const { default: Component } = await import("./pages/InterimCfoServices");
          return { Component };
        },
      },
      {
        path: "au/interim-cfo-services",
        async lazy() {
          const { default: Component } = await import("./pages/InterimCfoServices");
          return { Component };
        },
      },
      {
        path: "ecommerce-finance-services",
        async lazy() {
          const { default: Component } = await import("./pages/EcommerceFinanceServices");
          return { Component };
        },
      },
      {
        path: "uae/ecommerce-finance-services",
        async lazy() {
          const { default: Component } = await import("./pages/EcommerceFinanceServices");
          return { Component };
        },
      },
      {
        path: "au/ecommerce-finance-services",
        async lazy() {
          const { default: Component } = await import("./pages/EcommerceFinanceServices");
          return { Component };
        },
      },
      {
        path: "privacy-policy",
        async lazy() {
          const { default: Component } = await import("./pages/PrivacyPolicy");
          return { Component };
        },
      },
      {
        path: "terms",
        async lazy() {
          const { default: Component } = await import("./pages/Terms");
          return { Component };
        },
      },
      {
        path: "success-stories",
        async lazy() {
          const { default: Component } = await import("./pages/SuccessStories");
          return { Component };
        },
      },
      {
        path: "taxation",
        async lazy() {
          const { default: Component } = await import("./pages/Taxation");
          return { Component };
        },
      },
      {
        path: "achievements",
        async lazy() {
          const { default: Component } = await import("./pages/Achievements");
          return { Component };
        },
      },
      {
        path: "guide",
        async lazy() {
          const { default: Component } = await import("./pages/Guide");
          return { Component };
        },
      },
      {
        path: "guide/:slug",
        async lazy() {
          const { default: Component } = await import("./pages/GuideSingle");
          return { Component };
        },
      },
      {
        path: "guide/financial-reporting-standards-singapore",
        async lazy() {
          const { default: Component } = await import(
            "./pages/FinancialReportingGuide"
          );
          return { Component };
        },
      },
      {
        path: "guide/incorporating-business-singapore",
        async lazy() {
          const { default: Component } = await import(
            "./pages/IncorporatingBusinessGuide"
          );
          return { Component };
        },
      },
      {
        path: "guide/part-time-cfo-services-guide",
        async lazy() {
          const { default: Component } = await import(
            "./pages/PartTimeCFOGuide"
          );
          return { Component };
        },
      },
      {
        path: "guide/business-accounting-guide",
        async lazy() {
          const { default: Component } = await import(
            "./pages/BusinessAccountingGuide"
          );
          return { Component };
        },
      },
      {
        path: "guide/pitching-to-investors-guide",
        async lazy() {
          const { default: Component } = await import(
            "./pages/PitchingToInvestorsGuide"
          );
          return { Component };
        },
      },
      {
        path: "news",
        async lazy() {
          const { default: Component } = await import("./pages/News");
          return { Component };
        },
      },
      {
        path: "use-of-ai-in-finance",
        async lazy() {
          const { default: Component } = await import("./pages/AiInFinance");
          return { Component };
        },
      },
      {
        path: "strategic-finance-singapore",
        async lazy() {
          const { default: Component } = await import("./pages/StrategicCFO");
          return { Component };
        },
      },
      {
        path: "resources",
        element: <Navigate to="/achievements/" replace />,
      },
      // UAE Routes
      {
        path: "uae",
        async lazy() {
          const { default: Component } = await import("./pages/HomeUAE");
          return { Component };
        },
      },
      {
        path: "uae/about",
        async lazy() {
          const { default: Component } = await import("./pages/About");
          return { Component };
        },
      },
      {
        path: "uae/blog",
        async lazy() {
          const { default: Component } = await import("./pages/Blog");
          return { Component };
        },
      },
      {
        path: "uae/blog/:slug",
        async lazy() {
          const { default: Component } = await import("./pages/BlogPost");
          return { Component };
        },
      },
      {
        path: "uae/contact-us",
        async lazy() {
          const { default: Component } = await import("./pages/Contact");
          return { Component };
        },
      },
      {
        path: "uae/success-stories",
        async lazy() {
          const { default: Component } = await import("./pages/SuccessStories");
          return { Component };
        },
      },
      {
        path: "uae/guide",
        async lazy() {
          const { default: Component } = await import("./pages/Guide");
          return { Component };
        },
      },
      {
        path: "uae/guide/part-time-cfo-services-guide",
        async lazy() {
          const { default: Component } = await import(
            "./pages/PartTimeCFOGuide"
          );
          return { Component };
        },
      },
      {
        path: "uae/guide/business-accounting-guide",
        async lazy() {
          const { default: Component } = await import(
            "./pages/BusinessAccountingGuide"
          );
          return { Component };
        },
      },
      {
        path: "uae/guide/pitching-to-investors-guide",
        async lazy() {
          const { default: Component } = await import(
            "./pages/PitchingToInvestorsGuide"
          );
          return { Component };
        },
      },

      {
        path: "uae/guide/bookkeeping-practices-guide",
        async lazy() {
          const { default: Component } = await import(
            "./pages/PitchingToInvestorsGuide"
          );
          return { Component };
        },
      },

      {
        path: "uae/guide/incorporating-business-singapore",
        async lazy() {
          const { default: Component } = await import(
            "./pages/PitchingToInvestorsGuide"
          );
          return { Component };
        },
      },

      {
        path: "uae/guide/financial-reporting-standards-singapore",
        async lazy() {
          const { default: Component } = await import(
            "./pages/PitchingToInvestorsGuide"
          );
          return { Component };
        },
      },

      {
        path: "uae/guide/mra-grant-singapore",
        async lazy() {
          const { default: Component } = await import(
            "./pages/PitchingToInvestorsGuide"
          );
          return { Component };
        },
      },

      {
        path: "uae/guide/:slug",
        async lazy() {
          const { default: Component } = await import("./pages/GuideSingle");
          return { Component };
        },
      },
      {
        path: "uae/news",
        async lazy() {
          const { default: Component } = await import("./pages/News");
          return { Component };
        },
      },
      {
        path: "uae/achievements",
        async lazy() {
          const { default: Component } = await import("./pages/Achievements");
          return { Component };
        },
      },
      // UAE service redirects to Singapore canonical URLs
      {
        path: "accounting-services-in-uae",
        element: <Navigate to="/accounting-services-in-singapore" replace />,
      },
      {
        path: "bookkeeping-services-in-uae",
        element: <Navigate to="/bookkeeping-services-in-singapore" replace />,
      },
      {
        path: "payroll-services-in-uae",
        element: <Navigate to="/payroll-services-in-singapore" replace />,
      },
      {
        path: "taxation-Services-in-uae",
        element: <Navigate to="/taxation" replace />,
      },
      {
        path: "cash-flow-services-in-uae",
        element: <Navigate to="/cash-flow-services-in-singapore" replace />,
      },
      {
        path: "company-incorporation-services-in-uae",
        async lazy() {
          const { default: Component } = await import(
            "./pages/CompanyIncorporation"
          );
          return { Component };
        },
      },
      {
        path: "corporate-secretary-services-in-uae",
        async lazy() {
          const { default: Component } = await import(
            "./pages/CorporateSecretary"
          );
          return { Component };
        },
      },
      {
        path: "part-time-cfo-uae",
        async lazy() {
          const { default: Component } = await import("./pages/FractionalCFO");
          return { Component };
        },
      },
      {
        path: "uae/virtual-cfo-services-uae",
        async lazy() {
          const { default: Component } = await import(
            "./pages/FractionalCFOUAE"
          );
          return { Component };
        },
      },
      {
        path: "uae/corporate-tax-filing-uae",
        async lazy() {
          const { default: Component } = await import(
            "./pages/CorporateTaxFilingUAE"
          );
          return { Component };
        },
      },
      {
        path: "uae/esop-advisory-uae",
        async lazy() {
          const { default: Component } = await import(
            "./pages/EsopAdvisoryUAE"
          );
          return { Component };
        },
      },
      {
        path: "uae/ai-finance-workflow-uae",
        async lazy() {
          const { default: Component } = await import(
            "./pages/AiFinanceWorkflowUAE"
          );
          return { Component };
        },
      },
      {
        path: "uae/ai-financial-forecasting-uae",
        async lazy() {
          const { default: Component } = await import(
            "./pages/AiFinancialForecastingUAE"
          );
          return { Component };
        },
      },
      {
        path: "uae/ai-risk-compliance-fraud-uae",
        async lazy() {
          const { default: Component } = await import(
            "./pages/AiRiskComplianceUAE"
          );
          return { Component };
        },
      },
      {
        path: "uae/simplified-banking-solutions",
        async lazy() {
          const { default: Component } = await import(
            "./pages/SimplifiedBankingSolutions"
          );
          return { Component };
        },
      },
      {
        path: "uae/accounting-for-tech-start-ups-companies",
        async lazy() {
          const { default: Component } = await import(
            "./pages/TechStartupAccounting"
          );
          return { Component };
        },
      },
      {
        path: "uae/ecommerce-accounting-services",
        async lazy() {
          const { default: Component } = await import(
            "./pages/EcommerceAccounting"
          );
          return { Component };
        },
      },
      {
        path: "uae/incorporation",
        async lazy() {
          const { default: Component } = await import("./pages/Incorporation");
          return { Component };
        },
      },
      // Australia Routes
      {
        path: "au",
        async lazy() {
          const { default: Component } = await import("./pages/HomeAustralia");
          return { Component };
        },
      },
      {
        path: "au/virtual-cfo-services-australia",
        async lazy() {
          const { default: Component } = await import(
            "./pages/VirtualCFOAustralia"
          );
          return { Component };
        },
      },
      {
        path: "au/about",
        async lazy() {
          const { default: Component } = await import("./pages/About");
          return { Component };
        },
      },
      {
        path: "au/blog",
        async lazy() {
          const { default: Component } = await import("./pages/Blog");
          return { Component };
        },
      },
      {
        path: "au/blog/:slug",
        async lazy() {
          const { default: Component } = await import("./pages/BlogPost");
          return { Component };
        },
      },
      {
        path: "au/contact-us",
        async lazy() {
          const { default: Component } = await import("./pages/Contact");
          return { Component };
        },
      },
      {
        path: "au/success-stories",
        async lazy() {
          const { default: Component } = await import("./pages/SuccessStories");
          return { Component };
        },
      },
      {
        path: "au/guide",
        async lazy() {
          const { default: Component } = await import("./pages/Guide");
          return { Component };
        },
      },
      {
        path: "au/guide/part-time-cfo-services-guide",
        async lazy() {
          const { default: Component } = await import(
            "./pages/PartTimeCFOGuide"
          );
          return { Component };
        },
      },
      {
        path: "au/guide/business-accounting-guide",
        async lazy() {
          const { default: Component } = await import(
            "./pages/BusinessAccountingGuide"
          );
          return { Component };
        },
      },
      {
        path: "au/guide/pitching-to-investors-guide",
        async lazy() {
          const { default: Component } = await import(
            "./pages/PitchingToInvestorsGuide"
          );
          return { Component };
        },
      },

      {
        path: "au/guide/bookkeeping-practices-guide",
        async lazy() {
          const { default: Component } = await import(
            "./pages/PitchingToInvestorsGuide"
          );
          return { Component };
        },
      },

      {
        path: "au/guide/incorporating-business-singapore",
        async lazy() {
          const { default: Component } = await import(
            "./pages/PitchingToInvestorsGuide"
          );
          return { Component };
        },
      },

      {
        path: "au/guide/financial-reporting-standards-singapore",
        async lazy() {
          const { default: Component } = await import(
            "./pages/PitchingToInvestorsGuide"
          );
          return { Component };
        },
      },

      {
        path: "au/guide/mra-grant-singapore",
        async lazy() {
          const { default: Component } = await import(
            "./pages/PitchingToInvestorsGuide"
          );
          return { Component };
        },
      },

      {
        path: "au/guide/:slug",
        async lazy() {
          const { default: Component } = await import("./pages/GuideSingle");
          return { Component };
        },
      },
      {
        path: "au/corporate-tax-filing-australia",
        async lazy() {
          const { default: Component } = await import(
            "./pages/CorporateTaxFilingAustralia"
          );
          return { Component };
        },
      },
      {
        path: "au/ai-finance-workflow-australia",
        async lazy() {
          const { default: Component } = await import(
            "./pages/AIFinanceWorkflowAustralia"
          );
          return { Component };
        },
      },
      {
        path: "au/ai-financial-forecasting-australia",
        async lazy() {
          const { default: Component } = await import(
            "./pages/AIFinancialForecastingAustralia"
          );
          return { Component };
        },
      },
      {
        path: "au/ai-risk-compliance-australia",
        async lazy() {
          const { default: Component } = await import(
            "./pages/AIRiskComplianceAustralia"
          );
          return { Component };
        },
      },
      {
        path: "au/ai-decision-intelligence-australia",
        async lazy() {
          const { default: Component } = await import(
            "./pages/AIDecisionIntelligenceAustralia"
          );
          return { Component };
        },
      },
      {
        path: "au/esop-advisory-australia",
        async lazy() {
          const { default: Component } = await import(
            "./pages/EsopAdvisoryAustralia"
          );
          return { Component };
        },
      },
      {
        path: "au/ecommerce-accounting-services",
        async lazy() {
          const { default: Component } = await import(
            "./pages/EcommerceAccounting"
          );
          return { Component };
        },
      },
      {
        path: "au/incorporation",
        async lazy() {
          const { default: Component } = await import("./pages/Incorporation");
          return { Component };
        },
      },
      {
        path: "au/simplified-banking-solutions",
        async lazy() {
          const { default: Component } = await import(
            "./pages/SimplifiedBankingSolutions"
          );
          return { Component };
        },
      },
      {
        path: "au/accounting-for-tech-start-ups-companies",
        async lazy() {
          const { default: Component } = await import(
            "./pages/TechStartupAccounting"
          );
          return { Component };
        },
      },
      {
        path: "au/news",
        async lazy() {
          const { default: Component } = await import("./pages/News");
          return { Component };
        },
      },
      {
        path: "au/achievements",
        async lazy() {
          const { default: Component } = await import("./pages/Achievements");
          return { Component };
        },
      },
      // Australia service redirects to Singapore canonical URLs
      {
        path: "accounting-services-in-australia",
        element: <Navigate to="/accounting-services-in-singapore" replace />,
      },
      {
        path: "bookkeeping-services-in-australia",
        element: <Navigate to="/bookkeeping-services-in-singapore" replace />,
      },
      {
        path: "payroll-services-in-australia",
        element: <Navigate to="/payroll-services-in-singapore" replace />,
      },
      {
        path: "taxation-Services-in-australia",
        element: <Navigate to="/taxation" replace />,
      },
      {
        path: "cash-flow-services-in-australia",
        element: <Navigate to="/cash-flow-services-in-singapore" replace />,
      },
      {
        path: "company-incorporation-services-in-australia",
        async lazy() {
          const { default: Component } = await import(
            "./pages/CompanyIncorporation"
          );
          return { Component };
        },
      },
      {
        path: "corporate-secretary-services-in-australia",
        async lazy() {
          const { default: Component } = await import(
            "./pages/CorporateSecretary"
          );
          return { Component };
        },
      },
      {
        path: "part-time-cfo-australia",
        async lazy() {
          const { default: Component } = await import("./pages/FractionalCFO");
          return { Component };
        },
      },
      // Case Studies
      {
        path: "case-studies/healthcare",
        async lazy() {
          const { default: Component } = await import(
            "./pages/case-studies/HealthcareCaseStudy"
          );
          return { Component };
        },
      },
      {
        path: "case-studies/ecommerce",
        async lazy() {
          const { default: Component } = await import(
            "./pages/case-studies/EcommerceCaseStudy"
          );
          return { Component };
        },
      },
      {
        path: "case-studies/food-tech",
        async lazy() {
          const { default: Component } = await import(
            "./pages/case-studies/FoodTechCaseStudy"
          );
          return { Component };
        },
      },
      {
        path: "case-studies/online-consumer-goods",
        async lazy() {
          const { default: Component } = await import(
            "./pages/case-studies/OnlineConsumerGoodsCaseStudy"
          );
          return { Component };
        },
      },
      {
        path: "case-studies/data-driven-success",
        async lazy() {
          const { default: Component } = await import(
            "./pages/case-studies/DataDrivenSuccessCaseStudy"
          );
          return { Component };
        },
      },
      {
        path: "case-studies/gaming-industry",
        async lazy() {
          const { default: Component } = await import(
            "./pages/case-studies/GamingIndustryCaseStudy"
          );
          return { Component };
        },
      },
      {
        path: "case-studies/tech-business",
        async lazy() {
          const { default: Component } = await import(
            "./pages/case-studies/TechBusinessCaseStudy"
          );
          return { Component };
        },
      },
      {
        path: "case-studies/d2c-expansion",
        async lazy() {
          const { default: Component } = await import(
            "./pages/case-studies/D2CCaseStudy"
          );
          return { Component };
        },
      },
      {
        path: "case-studies/finance-forecasting",
        async lazy() {
          const { default: Component } = await import(
            "./pages/case-studies/FinanceCaseStudy"
          );
          return { Component };
        },
      },
      // UAE Case Studies
      {
        path: "uae/case-studies/healthcare",
        async lazy() {
          const { default: Component } = await import(
            "./pages/case-studies/HealthcareCaseStudy"
          );
          return { Component };
        },
      },
      {
        path: "uae/case-studies/ecommerce",
        async lazy() {
          const { default: Component } = await import(
            "./pages/case-studies/EcommerceCaseStudy"
          );
          return { Component };
        },
      },
      {
        path: "uae/case-studies/food-tech",
        async lazy() {
          const { default: Component } = await import(
            "./pages/case-studies/FoodTechCaseStudy"
          );
          return { Component };
        },
      },
      {
        path: "uae/case-studies/online-consumer-goods",
        async lazy() {
          const { default: Component } = await import(
            "./pages/case-studies/OnlineConsumerGoodsCaseStudy"
          );
          return { Component };
        },
      },
      {
        path: "uae/case-studies/data-driven-success",
        async lazy() {
          const { default: Component } = await import(
            "./pages/case-studies/DataDrivenSuccessCaseStudy"
          );
          return { Component };
        },
      },
      {
        path: "uae/case-studies/gaming-industry",
        async lazy() {
          const { default: Component } = await import(
            "./pages/case-studies/GamingIndustryCaseStudy"
          );
          return { Component };
        },
      },
      {
        path: "uae/case-studies/tech-business",
        async lazy() {
          const { default: Component } = await import(
            "./pages/case-studies/TechBusinessCaseStudy"
          );
          return { Component };
        },
      },
      {
        path: "uae/case-studies/d2c-expansion",
        async lazy() {
          const { default: Component } = await import(
            "./pages/case-studies/D2CCaseStudy"
          );
          return { Component };
        },
      },
      {
        path: "uae/case-studies/finance-forecasting",
        async lazy() {
          const { default: Component } = await import(
            "./pages/case-studies/FinanceCaseStudy"
          );
          return { Component };
        },
      },
      // Australia Case Studies
      {
        path: "au/case-studies/healthcare",
        async lazy() {
          const { default: Component } = await import(
            "./pages/case-studies/HealthcareCaseStudy"
          );
          return { Component };
        },
      },
      {
        path: "au/case-studies/ecommerce",
        async lazy() {
          const { default: Component } = await import(
            "./pages/case-studies/EcommerceCaseStudy"
          );
          return { Component };
        },
      },
      {
        path: "au/case-studies/food-tech",
        async lazy() {
          const { default: Component } = await import(
            "./pages/case-studies/FoodTechCaseStudy"
          );
          return { Component };
        },
      },
      {
        path: "au/case-studies/online-consumer-goods",
        async lazy() {
          const { default: Component } = await import(
            "./pages/case-studies/OnlineConsumerGoodsCaseStudy"
          );
          return { Component };
        },
      },
      {
        path: "au/case-studies/data-driven-success",
        async lazy() {
          const { default: Component } = await import(
            "./pages/case-studies/DataDrivenSuccessCaseStudy"
          );
          return { Component };
        },
      },
      {
        path: "au/case-studies/gaming-industry",
        async lazy() {
          const { default: Component } = await import(
            "./pages/case-studies/GamingIndustryCaseStudy"
          );
          return { Component };
        },
      },
      {
        path: "au/case-studies/tech-business",
        async lazy() {
          const { default: Component } = await import(
            "./pages/case-studies/TechBusinessCaseStudy"
          );
          return { Component };
        },
      },
      {
        path: "au/case-studies/d2c-expansion",
        async lazy() {
          const { default: Component } = await import(
            "./pages/case-studies/D2CCaseStudy"
          );
          return { Component };
        },
      },
      {
        path: "au/case-studies/finance-forecasting",
        async lazy() {
          const { default: Component } = await import(
            "./pages/case-studies/FinanceCaseStudy"
          );
          return { Component };
        },
      },
      // Admin Routes
      {
        path: "admin/blog",
        element: (
          <ClientOnly>
            {() => (
              <React.Suspense fallback={<div>Loading editor...</div>}>
                <BlogAdminPage />
              </React.Suspense>
            )}
          </ClientOnly>
        ),
        getStaticPaths: () => [],
      },
      {
        path: "admin/login",
        async lazy() {
          const { default: Component } = await import(
            "./pages/admin/BlogAdminLogin"
          );
          return { Component };
        },
        getStaticPaths: () => [],
      },
      // Legacy redirects
      {
        path: "uae/accounting-services-in-singapore",
        element: <Navigate to="/accounting-services-in-uae/" replace />,
      },
      {
        path: "uae/bookkeeping-services-in-singapore",
        element: <Navigate to="/bookkeeping-services-in-uae/" replace />,
      },
      {
        path: "uae/payroll-services-in-singapore",
        element: <Navigate to="/payroll-services-in-uae/" replace />,
      },
      {
        path: "uae/cash-flow-services-in-singapore",
        element: <Navigate to="/cash-flow-services-in-uae/" replace />,
      },
      {
        path: "uae/company-incorporation-services-in-singapore",
        element: (
          <Navigate to="/company-incorporation-services-in-uae/" replace />
        ),
      },
      {
        path: "uae/corporate-secretary-services-in-singapore",
        element: (
          <Navigate to="/corporate-secretary-services-in-uae/" replace />
        ),
      },
      {
        path: "uae/part-time-cfo",
        element: <Navigate to="/uae/virtual-cfo-services-uae/" replace />,
      },
      {
        path: "part-time-cfo-uae",
        element: <Navigate to="/uae/virtual-cfo-services-uae/" replace />,
      },
      // Legacy Australia redirects
      {
        path: "australia",
        element: <Navigate to="/au" replace />,
      },
      {
        path: "australia/about",
        element: <Navigate to="/au/about/" replace />,
      },
      {
        path: "australia/blog",
        element: <Navigate to="/au/blog/" replace />,
      },
      {
        path: "australia/contact-us",
        element: <Navigate to="/au/contact-us/" replace />,
      },
      {
        path: "australia/accounting-services-in-singapore",
        element: <Navigate to="/accounting-services-in-australia/" replace />,
      },
      {
        path: "australia/bookkeeping-services-in-singapore",
        element: <Navigate to="/bookkeeping-services-in-australia/" replace />,
      },
      {
        path: "australia/payroll-services-in-singapore",
        element: <Navigate to="/payroll-services-in-australia/" replace />,
      },
      {
        path: "australia/cash-flow-services-in-singapore",
        element: <Navigate to="/cash-flow-services-in-australia/" replace />,
      },
      {
        path: "australia/company-incorporation-services-in-singapore",
        element: (
          <Navigate
            to="/company-incorporation-services-in-australia/"
            replace
          />
        ),
      },
      {
        path: "australia/corporate-secretary-services-in-singapore",
        element: (
          <Navigate to="/corporate-secretary-services-in-australia/" replace />
        ),
      },
      {
        path: "australia/part-time-cfo",
        element: <Navigate to="/au/virtual-cfo-services-australia/" replace />,
      },
      {
        path: "part-time-cfo-australia",
        element: <Navigate to="/au/virtual-cfo-services-australia/" replace />,
      },

      //  {
      //   path: 'blog/:slug',
      //   element: <BlogPost />,
      //   getStaticPaths: getBlogSlugs,
      // },

      // Dynamic blog post route
      {
        path: "blog/:slug",
        lazy: async () => {
          const { default: Component } = await import("./pages/BlogPost");
          return { Component };
        },
        entry: "src/pages/BlogPost.tsx",
        // getStaticPaths: async () => {
        //   const { data: posts, error } = await supabase
        //     .from("blog_post")
        //     .select("slug");

        //   if (error) {
        //     console.error("SSG slug fetch error", error);
        //     return [];
        //   }

        //   return posts!.map((p) => `blog/${p.slug}`);
        // },
        getStaticPaths: async () => {
          try {
            const BASE_API_URL =
             import.meta.env.VITE_CONTACTAPI_DEVURL || import.meta.env.VITE_CONTACTAPI_PRODURL;

            const res = await fetch(
              `${BASE_API_URL}/api/website/blog/public/slugs`,
              {
                method: "GET",
                headers: { "Content-Type": "application/json" },
              }
            );

            const text = await res.text();
            if (!res.ok) {
              console.error("SSG slug fetch error:", res.status, text);
              return [];
            }

            let slugs: string[] = [];
            try {
              const json = JSON.parse(text);
              slugs = (json?.data ?? json) as string[];
            } catch {
              slugs = [];
            }

            if (!Array.isArray(slugs)) return [];

            return slugs.filter(Boolean).map((slug) => `blog/${slug}`);
          } catch (err) {
            console.error("SSG slug fetch error:", err);
            return [];
          }
        },
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];
