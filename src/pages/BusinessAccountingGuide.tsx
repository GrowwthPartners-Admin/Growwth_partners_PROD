import { useNavigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { 
  ChevronRight, 
  BookOpen,
  Calculator,
  TrendingUp, 
  BarChart3, 
  PieChart, 
  Clock,
  CheckCircle2,
  FileText,
  Lightbulb,
  ArrowRight,
  Shield,
  DollarSign,
  Target,
  RefreshCcw,
  Layers,
  Settings,
  Users,
  Wallet,
  CircleDollarSign,
  Scale
} from "lucide-react";
import SEOhelper from "@/components/SEOhelper";

const BusinessAccountingGuide = () => {
  const navigate = useNavigate();
  
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Guide",
        "@id": "https://growwthpartners.com/guide/business-accounting-guide/#guide",
        "name": "A Comprehensive Guide on Accounting for Businesses",
        "description": "Master business accounting fundamentals. Learn about financial statements, accounting methods, the accounting cycle, financial ratios, budgeting, forecasting, and leveraging accounting software.",
        "url": "https://growwthpartners.com/guide/business-accounting-guide",
        "publisher": {
          "@id": "https://growwthpartners.com/#organization"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://growwthpartners.com/#organization",
        "name": "Growwth Partners",
        "url": "https://growwthpartners.com",
        "areaServed": ["Singapore", "United Arab Emirates", "Australia"],
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "email": "jd@growwthpartners.com",
            "telephone": "+65 9861 5600",
            "contactType": "business",
            "areaServed": "SG"
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

  const keyTakeaways = [
    {
      icon: BookOpen,
      title: "Understanding Basic Accounting Principles",
      description: "Success in business depends on having a solid understanding of basic accounting principles."
    },
    {
      icon: BarChart3,
      title: "Informed Business Decisions",
      description: "An accurate analysis and financial statements support well-informed business decisions."
    },
    {
      icon: Clock,
      title: "Importance of Timely Accounting",
      description: "Timely and accurate accounting is necessary for both financial stability and compliance."
    },
    {
      icon: Settings,
      title: "Leveraging Technology for Efficiency",
      description: "Accounting efficiency can be greatly increased by utilising technology."
    }
  ];

  const tableOfContents = [
    { label: "Introduction to business accounting", id: "introduction" },
    { label: "The Basics of financial statements", id: "financial-statements" },
    { label: "Accounting methods", id: "accounting-methods" },
    { label: "The accounting cycle", id: "accounting-cycle" },
    { label: "Financial ratios and analysis", id: "financial-ratios" },
    { label: "Budgeting and forecasting", id: "budgeting-forecasting" },
    { label: "Leveraging accounting software", id: "accounting-software" },
    { label: "Tips for effective business accounting", id: "accounting-tips" },
    { label: "Summary", id: "summary" }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const financialStatements = [
    {
      icon: FileText,
      title: "Balance Sheet",
      description: "It provides a snapshot of what a company owns and owes at any given time. It outlines all the resources that belong to an organisation, its liabilities, along with shareholders' equity."
    },
    {
      icon: TrendingUp,
      title: "Income Statement",
      description: "This shows a business's revenue minus expenses over a fixed period (usually annually), revealing profits or losses. It also helps gauge departmental efficiency, aiding profitability analysis."
    },
    {
      icon: CircleDollarSign,
      title: "Cash Flow Statement",
      description: "The cash flow statement shows the money made and spent by a company over a certain period. It's also known as a profit and loss statement or statement of earnings."
    }
  ];

  const accountingCycleSteps = [
    {
      step: 1,
      title: "Recording Transactions",
      description: "Recording transactions comes as the first step of an accounting cycle. Every financial transaction must be documented in a journal with a double-entry bookkeeping system whereby each transaction impacts at least two accounts."
    },
    {
      step: 2,
      title: "Adjusting Entries",
      description: "At the end of an accounting period, adjustments are made to reflect revenues earned and expenses incurred but not yet recorded. Adjusting entries are necessary so that they show what's really happening financially in a business through its financial statement."
    },
    {
      step: 3,
      title: "Closing the Books",
      description: "Closing the books refers to transferring balances from temporary accounts (such as revenues and expenses) into permanent ones (like retained earnings) which resets income statement accounts for new periods."
    }
  ];

  const financialRatios = [
    {
      icon: Wallet,
      title: "Liquidity Ratios",
      description: "A company's ability to meet short-term obligations is measured using liquidity ratios.",
      formulas: ["Current Ratio = Current Assets / Current Liabilities", "Quick Ratio = (Current Assets - Inventory) / Current Liabilities"]
    },
    {
      icon: TrendingUp,
      title: "Profitability Ratios",
      description: "These ratios measure how well profit can be generated by a company.",
      formulas: ["Net Profit Margin = Net Income / Revenue", "Return on Assets = Net Income / Total Assets"]
    },
    {
      icon: Scale,
      title: "Solvency Ratios",
      description: "Long term financial stability evaluation for companies is done through solvency ratios.",
      formulas: ["Debt to Equity Ratio = Total Liabilities / Shareholders' Equity", "Interest Coverage Ratio = EBIT / Interest Expense"]
    }
  ];

  const budgetingSteps = [
    {
      step: "01",
      icon: Target,
      title: "Define Objectives",
      description: "Plan and state clearly what your business needs to achieve financially."
    },
    {
      step: "02",
      icon: TrendingUp,
      title: "Estimate Revenues",
      description: "Predict income expected based on past trends and current market situation."
    },
    {
      step: "03",
      icon: Calculator,
      title: "Project Expenses",
      description: "Enumerate all anticipated expenditures including fixed versus variable costs."
    },
    {
      step: "04",
      icon: RefreshCcw,
      title: "Review and Adjust",
      description: "Regularly compare actual results with budgeted figures, then correct if necessary."
    }
  ];

  const accountingTips = [
    {
      icon: Layers,
      title: "Stay Organised",
      description: "To ensure accurate reporting & accounting, keep financial records and documents well-organised."
    },
    {
      icon: RefreshCcw,
      title: "Reconcile Often",
      description: "To ensure accuracy and identify inconsistencies early, reconcile bank statements and accounts on a monthly basis."
    },
    {
      icon: Users,
      title: "Separate A/C",
      description: "To guarantee proper business accounting and prevent misunderstandings, keep personal and business transactions in separate accounts."
    },
    {
      icon: CircleDollarSign,
      title: "Check Cash Flow",
      description: "Keep an eye on your cash flow statements to make sure you have enough cash on hand to cover operational expenses and prevent cash shortages."
    },
    {
      icon: Shield,
      title: "Employ Experts",
      description: "If you have complicated tasks or your company is expanding, think about employing an accountant or using professional accounting services."
    }
  ];

  return (
    <Layout>
      <SEOhelper
        title="A Comprehensive Guide on Accounting for Businesses | Growwth Partners"
        description="Master business accounting fundamentals. Learn about financial statements, accounting methods, the accounting cycle, financial ratios, budgeting, forecasting, and leveraging accounting software."
        keywords="business accounting, financial statements, accounting methods, accounting cycle, financial ratios, budgeting, forecasting, accounting software, Singapore"
        canonicalUrl="https://growwthpartners.com/guide/business-accounting-guide"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-b from-blue-100 to-white">
        <div className="container mx-auto px-4 w-[90%]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              A Comprehensive Guide on Accounting for Businesses
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Master the fundamentals of business accounting to make informed decisions and drive growth
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Takeaways Section */}
      <section className="py-12 bg-gradient-to-r from-blue-50/30 via-purple-50/30 to-blue-50/30">
        <div className="container mx-auto px-4 w-[90%]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-gray-900">
              Key Takeaways
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {keyTakeaways.map((takeaway, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-blue-100 rounded-full">
                      <takeaway.icon className="h-10 w-10 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-center">
                    {takeaway.title}
                  </h3>
                  <p className="text-gray-700 text-center text-sm">
                    {takeaway.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Table of Contents</h3>
            <div className="bg-gray-50 p-6 rounded-xl">
              <ul className="space-y-2">
                {tableOfContents.map((item, index) => (
                  <li 
                    key={index} 
                    onClick={() => scrollToSection(item.id)}
                    className="flex items-center gap-2 text-gray-700 hover:text-blue-600 cursor-pointer transition-colors"
                  >
                    <ChevronRight className="h-4 w-4" />
                    <span>{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section id="introduction" className="py-12 bg-white scroll-mt-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Overview of Business Accounting</h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Accounting is the language of business; it's more than just numbers. It follows a systematic approach to recording, analysing and finally reporting on all finance exchanges. Businesses can ensure legal compliance, obtain insight into their financial performance, and make well-informed strategic decisions by keeping accurate records.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Good accounting procedures help companies monitor income, control costs, and assess profitability. In addition, this helps in judging how it is doing financially, planning for more growth ahead and communicating its state to financiers.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              This study guide will take you through an understanding of business accounting that will help you manage your company's finances better.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Financial Statements Section */}
      <section id="financial-statements" className="py-12 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900">
              The Basics of Financial Statements
            </h3>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              They are a bird's eye view into the financial status of a company and can be used as an important tool in evaluating the health of the business. They help in assessing the performance of the business and making informed decisions based on such data.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {financialStatements.map((statement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-md"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-amber-100 rounded-full">
                      <statement.icon className="h-6 w-6 text-amber-600" />
                    </div>
                    <h4 className="text-lg font-semibold">{statement.title}</h4>
                  </div>
                  <p className="text-gray-700 text-sm">{statement.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
              <div className="flex items-start gap-3">
                <Lightbulb className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-blue-900 mb-2">Pro Tip:</p>
                  <p className="text-gray-700">
                    Monitor your profit trends through a regular review of income statements to control unnecessary spends. If analysed monthly, for example, you can realise seasonal changes in revenues and take advantage when deciding on next year's budget plan accordingly.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-200">
              <p className="text-lg font-semibold text-gray-900 mb-2">The Balance Sheet Equation:</p>
              <p className="text-2xl font-bold text-amber-700 text-center py-4">
                Assets = Liabilities + Equity
              </p>
              <p className="text-gray-700 text-sm">
                Assets refer to things that a business has which have value, such as money, inventory, property, and equipment. Liabilities are loans or anything else owed to others. Equity represents the owner's claim after all liabilities have been settled.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section 1 */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-8 text-gray-900">
              Frequently Asked Questions
            </h3>

            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-left font-medium">
                    Why is the balance sheet important for investors?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 bg-gray-50">
                  <p className="text-gray-700">
                    When deciding whether or not to invest in a company, potential shareholders need insight into its financial status which can be obtained through studying its balance sheet.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-left font-medium">
                    Can you have positive net income but still go bankrupt?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 bg-gray-50">
                  <p className="text-gray-700">
                    Yes! A company may show positive net income for several periods consecutively but still fail due to lack of liquidity, that is, inability to convert current assets into cash fast enough to cover short-term obligations.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-left font-medium">
                    How to use financial statements when making decisions?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 bg-gray-50">
                  <p className="text-gray-700">
                    Financial statements include data such as revenue trends, cost structures, profitability ratios, etc., all of which can help management make informed decisions on expansion, expenses or investments.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Accounting Methods Section */}
      <section id="accounting-methods" className="py-12 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900">
              Accounting Methods
            </h3>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              In order to maintain consistency and accuracy in financial reporting, every business transaction must be meticulously documented and reported. But the accounting method in which this needs to be done and would best fit your company's needs requires an understanding of the various approaches.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500"
              >
                <h4 className="text-xl font-semibold mb-4 text-gray-900 flex items-center gap-2">
                  <DollarSign className="h-6 w-6 text-blue-600" />
                  Cash Basis Accounting
                </h4>
                <p className="text-gray-700">
                  Transactions are only recorded in cash basis accounting when actual cash is exchanged. Expenses are recorded when they are paid, and revenues are recognised when they are received. This approach is easy to use and appropriate for small companies that deal with simple financial transactions.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500"
              >
                <h4 className="text-xl font-semibold mb-4 text-gray-900 flex items-center gap-2">
                  <BarChart3 className="h-6 w-6 text-green-600" />
                  Accrual Basis Accounting
                </h4>
                <p className="text-gray-700">
                  Regardless of cash flow, accrual accounting records income and costs as they are received or incurred. In accordance with generally accepted accounting principles, larger businesses are required to use this method, which gives a more accurate picture of their financial position.
                </p>
              </motion.div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <div className="flex items-start gap-3">
                <Lightbulb className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-blue-900 mb-2">Pro Tip:</p>
                  <p className="text-gray-700">
                    As your business expands, you should think about adopting accrual basis accounting which matches revenues with expenses closer in time, thereby giving a more accurate indication of profitability. Especially, if you frequently make credit sales or allow customers longer periods within which they must settle their accounts payable, then the accrual system will be better.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section 2 */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-8 text-gray-900">
              Frequently Asked Questions
            </h3>

            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-left font-medium">
                    Is accrual basis accounting more beneficial than cash basis accounting?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 bg-gray-50">
                  <p className="text-gray-700">
                    Accrual accounting matches revenues with the costs incurred to produce them, providing a more complete picture of financial health. Better information is available for long-term financial planning and performance assessment with this approach.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-left font-medium">
                    Which accounting method is better for a growing business?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 bg-gray-50">
                  <p className="text-gray-700">
                    Accrual accounting is often advantageous to expanding companies because it offers a more realistic picture of financial performance and facilitates the efficient handling of intricate transactions and financial planning.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-left font-medium">
                    Is it possible for a business to change from cash accounting to accrual accounting?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 bg-gray-50">
                  <p className="text-gray-700">
                    Certainly, a business can change from cash accounting to accrual accounting. But, this may involve revising historical financial statements and seeking professional advice to effectuate a seamless transition.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Accounting Cycle Section */}
      <section id="accounting-cycle" className="py-12 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900">
              The Accounting Cycle
            </h3>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              To make sure that financial reporting is accurate and consistent throughout the year, a series of steps is followed called the accounting cycle. These steps help businesses to ensure that their earlier financial statements are accurate and reliable, which in turn supports better decision-making for financial analysis.
            </p>

            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {accountingCycleSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="bg-white p-6 rounded-xl shadow-md relative"
                  >
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {step.step}
                    </div>
                    <h4 className="text-lg font-semibold mt-6 mb-3 text-center text-gray-900">
                      {step.title}
                    </h4>
                    <p className="text-gray-700 text-sm text-center">
                      {step.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mt-8">
              <div className="flex items-start gap-3">
                <Lightbulb className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-blue-900 mb-2">Pro Tip:</p>
                  <p className="text-gray-700">
                    Reconcile and review accounts frequently during the accounting cycle to catch errors early. Monthly reconciliations aid in detecting discrepancies and maintaining accurate records, which may prevent issues during the annual closing period.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Financial Ratios Section */}
      <section id="financial-ratios" className="py-12 bg-white scroll-mt-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900">
              Financial Ratios and Analysis
            </h3>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Financial ratios are tools used for analysing the performance or health of companies financially. They provide insights necessary for informed decision-making in business.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {financialRatios.map((ratio, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl shadow-md"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-blue-100 rounded-full">
                      <ratio.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h4 className="text-lg font-semibold">{ratio.title}</h4>
                  </div>
                  <p className="text-gray-700 text-sm mb-4">{ratio.description}</p>
                  <div className="space-y-2">
                    {ratio.formulas.map((formula, i) => (
                      <p key={i} className="text-xs bg-white/70 p-2 rounded font-mono text-gray-600">
                        {formula}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <div className="flex items-start gap-3">
                <Lightbulb className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-blue-900 mb-2">Pro Tip:</p>
                  <p className="text-gray-700">
                    Using a mix of financial ratios will provide you with a complete picture of your company's financial situation. For example, while liquidity ratios indicate your short-term stability, profitability and solvency ratios indicate the long-term viability and operational efficiency.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section 3 */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg overflow-hidden bg-white">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-left font-medium">
                    How can financial ratios help make smarter business decisions?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 bg-gray-50">
                  <p className="text-gray-700">
                    By reflecting different areas of performance such as liquidity, profitability, and solvency, financial ratios provide useful insights. They can be used to compare over time or against industry benchmarks, thus guiding strategic decisions.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border rounded-lg overflow-hidden bg-white">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-left font-medium">
                    Can liquidity ratios identify potential financial trouble?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 bg-gray-50">
                  <p className="text-gray-700">
                    Yes, if a company shows that it doesn't have enough current assets to cover its short-term liabilities, it means there is high risk for lack of cash flow. This may indicate possible financial difficulty.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border rounded-lg overflow-hidden bg-white">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-left font-medium">
                    How do solvency ratios affect a company's borrowing capacity?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 bg-gray-50">
                  <p className="text-gray-700">
                    Assessment of a company's ability to meet long term obligations is done through solvency ratios. When this solvency ratio is low, it signals high risks financially, hence lenders become reluctant in extending credit. Thus, solvency ratios greatly affect the borrowing power of a company.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Budgeting and Forecasting Section */}
      <section id="budgeting-forecasting" className="py-12 bg-white scroll-mt-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900">
              Budgeting and Forecasting
            </h3>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              A budget is a financial blueprint that estimates incoming receipts and outgoing disbursements over a specified period. It enables organisations to manage assets, anticipate future needs and control costs. Financial planning and control require effective budgeting and forecasting which allows businesses to set targets and predict future financial performances.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              {budgetingSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center text-white font-bold text-xl ${index % 2 === 0 ? 'bg-amber-500' : 'bg-amber-400'}`}>
                      {step.step}
                    </div>
                    {index < budgetingSteps.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 border-t-2 border-dashed border-gray-300" />
                    )}
                  </div>
                  <div className="p-3 bg-amber-100 rounded-full mx-auto w-14 h-14 flex items-center justify-center mb-4">
                    <step.icon className="h-7 w-7 text-amber-600" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{step.title}</h4>
                  <p className="text-gray-700 text-sm">{step.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-8 rounded-xl mb-8">
              <h4 className="text-xl font-semibold mb-4 text-gray-900">Financial Forecasting</h4>
              <p className="text-gray-700">
                Forecasting involves making projections about future financial outcomes by using historical data and market trends. This is essential for planning growth strategies, effectively managing cash flow and making informed business decisions.
              </p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <div className="flex items-start gap-3">
                <Lightbulb className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-blue-900 mb-2">Pro Tip:</p>
                  <p className="text-gray-700">
                    Consider both short-term and long-range growth forecasts to prepare your business for both present and future. Make monthly forecasts to oversee daily operations and annual forecasts for long-term strategy.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section 4 */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg overflow-hidden bg-white">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-left font-medium">
                    How is a forecast different from a budget?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 bg-gray-50">
                  <p className="text-gray-700">
                    Budget sets financial goals for a given period while a forecast predicts possible results to enable businesses to adapt to changes and prepare for the future challenges.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border rounded-lg overflow-hidden bg-white">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-left font-medium">
                    Why should budgets be reviewed regularly?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 bg-gray-50">
                  <p className="text-gray-700">
                    Frequent budget review allows comparison between actual performance and projections made, thereby identifying variances that may need adjustments towards attaining goals within timelines.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border rounded-lg overflow-hidden bg-white">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-left font-medium">
                    What are common difficulties when creating budgets?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 bg-gray-50">
                  <p className="text-gray-700">
                    Common problems when creating budgets include estimating revenues too high or low, accommodating unforeseen expenses within limited resources available, aligning budget with the organisation's goals.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Accounting Software Section */}
      <section id="accounting-software" className="py-12 bg-white scroll-mt-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900">
              What are the Benefits of Using Accounting Tools?
            </h3>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Using accounting software can greatly simplify financial processes, increase accuracy, and improve overall business efficiency. Technology supports various accounting functions from the preparation of financial statements to ensuring compliance.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl shadow-md"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-green-100 rounded-full">
                    <Clock className="h-6 w-6 text-green-600" />
                  </div>
                  <h4 className="text-lg font-semibold">Efficiency</h4>
                </div>
                <p className="text-gray-700 text-sm">
                  Accounting softwares automate repetitive tasks like data entry and reporting which saves time and minimises mistakes.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl shadow-md"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <Target className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-semibold">Precision</h4>
                </div>
                <p className="text-gray-700 text-sm">
                  By eliminating human error in financial records, these tools guarantee more accurate financial data and reports.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl shadow-md"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-purple-100 rounded-full">
                    <BarChart3 className="h-6 w-6 text-purple-600" />
                  </div>
                  <h4 className="text-lg font-semibold">Accessibility</h4>
                </div>
                <p className="text-gray-700 text-sm">
                  It allows for instant access to financial data and reports, thereby enabling timely decision-making and financial control.
                </p>
              </motion.div>
            </div>

            <div className="bg-gradient-to-r from-amber-100 to-orange-100 p-6 rounded-xl border border-amber-200 mb-8">
              <p className="text-lg font-semibold text-gray-900 text-center">
                Improve all aspects of your business with instant financial insights from AI-powered RyzUp!
              </p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <div className="flex items-start gap-3">
                <Lightbulb className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-blue-900 mb-2">Pro Tip:</p>
                  <p className="text-gray-700">
                    Before making a decision on which accounting tool to use for your business, test various ones via demos or free trial versions to see whether they meet your needs.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section 5 */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg overflow-hidden bg-white">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-left font-medium">
                    How to choose the right accounting software for my business?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 bg-gray-50">
                  <p className="text-gray-700">
                    In selecting the software, consider the size, complexity, and any other specific need of your company such as invoicing, expense tracking, or integration.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border rounded-lg overflow-hidden bg-white">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-left font-medium">
                    Can accounting software help with tax compliance?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 bg-gray-50">
                  <p className="text-gray-700">
                    Yes, accounting tools have features designed to help businesses meet tax obligations by automatically calculating taxes, generating reports, integrating these services into filing systems, and more.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border rounded-lg overflow-hidden bg-white">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-left font-medium">
                    How can accounting software increase the productivity of a business?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 bg-gray-50">
                  <p className="text-gray-700">
                    By automating repetitive processes, cutting down on the amount of time spent on human data entry, and offering real-time financial insights that facilitate better decision-making, accounting software increases productivity.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Tips Section */}
      <section id="accounting-tips" className="py-12 bg-white scroll-mt-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-8 text-center text-gray-900">
              Tips for Effective Business Accounting
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {accountingTips.slice(0, 3).map((tip, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl shadow-md border border-amber-100"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-amber-100 rounded-full">
                      <tip.icon className="h-6 w-6 text-amber-600" />
                    </div>
                    <h4 className="text-lg font-semibold">{tip.title}</h4>
                  </div>
                  <p className="text-gray-700 text-sm">{tip.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {accountingTips.slice(3).map((tip, index) => (
                <motion.div
                  key={index + 3}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl shadow-md border border-amber-100"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-amber-100 rounded-full">
                      <tip.icon className="h-6 w-6 text-amber-600" />
                    </div>
                    <h4 className="text-lg font-semibold">{tip.title}</h4>
                  </div>
                  <p className="text-gray-700 text-sm">{tip.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Summary Section */}
      <section id="summary" className="py-12 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Summary</h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Good accounting practices will ensure that there is accurate reporting of finances. Hence, decisions are made based on facts, ensuring continued growth. Thus, we can say that the business success is reliant on its accounting.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Understanding financial statements, selecting the best accounting method, and using effective accounting tools can greatly contribute towards continued business success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h3 className="text-3xl font-bold mb-6">
              Want to improve your accounting practices?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Our experts provide a variety of financial services designed around what works best for your company. Whether small or big enterprises, start-ups or established organisations, we have got all your financial management needs covered.
            </p>
            <Button
              onClick={() => navigate("/contact-us")}
              size="lg"
              className="bg-white text-blue-700 hover:bg-gray-100 font-semibold text-lg px-8 py-6 rounded-lg shadow-lg transform transition-transform hover:scale-105"
            >
              Call Growwth Partners Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default BusinessAccountingGuide;
