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
import { Separator } from "@/components/ui/separator";
import { 
  ChevronRight, 
  DollarSign, 
  Users, 
  TrendingUp, 
  BarChart3, 
  PieChart, 
  Target,
  CheckCircle2,
  Building2,
  Briefcase,
  LineChart,
  FileText,
  Lightbulb,
  ArrowRight,
  Clock,
  Shield
} from "lucide-react";
import SEOhelper from "@/components/SEOhelper";

const PartTimeCFOGuide = () => {
  const navigate = useNavigate();
  
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Guide",
        "@id": "https://growwthpartners.com/guide/part-time-cfo-services-guide/#guide",
        "name": "A Comprehensive Guide to Part-Time CFO Services in 2024",
        "description": "Explore the benefits of hiring a Part-Time CFO in 2024. Understand their roles, cost savings, and implementation for strategic financial leadership in your business.",
        "url": "https://growwthpartners.com/guide/part-time-cfo-services-guide",
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

  const handleContactClick = () => {
    navigate("/contact-us");
    setTimeout(() => {
      const consultationForm = document.getElementById("consultation-form");
      if (consultationForm) {
        consultationForm.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const keyTakeaways = [
    {
      icon: DollarSign,
      title: "Cost Savings",
      description: "Hiring a part-time CFO saves businesses 50-70% compared to a full-time CFO, freeing up resources for other needs."
    },
    {
      icon: Users,
      title: "Flexible Expertise",
      description: "Part-time CFOs offer high-level financial guidance on a flexible, part-time basis tailored to small and growing businesses."
    },
    {
      icon: BarChart3,
      title: "Comprehensive Services",
      description: "They handle financial analysis, cash flow projections, hiring plans, marketing expense management, and ad hoc financial requests."
    },
    {
      icon: Target,
      title: "Indicators for Need",
      description: "Businesses struggling with financial management, growth projections, investor reporting, or rapid expansion should consider part-time CFO services."
    },
    {
      icon: TrendingUp,
      title: "Implementation and Success",
      description: "Effective onboarding involves an initial assessment, goal setting, and regular updates, with success measured by improved profitability and business stability."
    }
  ];

  const tableOfContents = [
    "Introduction",
    "Understanding Part-Time CFO services",
    "Roles and responsibilities of a Part-time CFO",
    "Cost benefits of hiring a Part-time CFO",
    "Indicators for needing a Part-time CFO",
    "Business size and stage",
    "Skills and qualifications of CFOs at Growwth Partners",
    "Case studies",
    "Implementing Part-time CFO services",
    "Summary"
  ];

  return (
    <Layout>
      <SEOhelper
        title="A Comprehensive Guide to Part-Time CFO Services in 2024 | Growwth Partners"
        description="Explore the benefits of hiring a Part-Time CFO in 2024. Understand their roles, cost savings, and implementation for strategic financial leadership in your business."
        keywords="part-time CFO services, fractional CFO, financial leadership, CFO for small business, part-time CFO Singapore"
        canonicalUrl="https://growwthpartners.com/guide/part-time-cfo-services-guide"
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
              A Comprehensive Guide to Part-Time CFO Services in 2024
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic financial leadership for growing businesses without the full-time commitment
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {keyTakeaways.slice(0, 3).map((takeaway, index) => (
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
                  <h3 className="text-xl font-semibold mb-3 text-center">
                    {takeaway.title}
                  </h3>
                  <p className="text-gray-700 text-center">
                    {takeaway.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-3xl mx-auto">
              {keyTakeaways.slice(3).map((takeaway, index) => (
                <motion.div
                  key={index + 3}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-blue-100 rounded-full">
                      <takeaway.icon className="h-10 w-10 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center">
                    {takeaway.title}
                  </h3>
                  <p className="text-gray-700 text-center">
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
                  <li key={index} className="flex items-center gap-2 text-gray-700 hover:text-blue-600 cursor-pointer transition-colors">
                    <ChevronRight className="h-4 w-4" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Introduction</h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              In today's competitive business landscape, financial expertise isn't just a luxury for large corporations—it's a necessity for small businesses striving to grow and thrive. Navigating complex financial decisions and strategic planning can be overwhelming without the right financial leadership.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Yet, hiring a full-time CFO may not be feasible for many small to medium-sized enterprises (SMEs). This is where Part-Time CFO services come in, offering a strategic solution that balances cost with expertise.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Part-Time CFO services provide small businesses with access to high-level financial guidance and leadership on a flexible, part-time basis. This guide explores the role of a Part-Time CFO, the benefits they bring, how to identify when your business needs one, the services they offer, how to choose the right CFO, the implementation process, and real-world success stories.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Understanding Part-Time CFO Services */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900">
              Understanding Part-Time CFO Services
            </h3>

            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="lg:w-2/3">
                <h4 className="text-xl font-semibold mb-4 text-gray-900">
                  What is a Part-Time CFO?
                </h4>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  A Part-Time CFO is a seasoned financial expert who provides strategic financial leadership and guidance to businesses on a part-time or fractional basis. Unlike traditional CFOs who work full-time within one organisation, Part-Time CFOs offer flexible support tailored to the specific needs and budget of small and growing businesses.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  They bring a wealth of experience from various industries and apply this knowledge to help businesses navigate their financial challenges and opportunities.
                </p>
              </div>

              <div className="lg:w-1/3">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="flex items-center gap-3 mb-4">
                    <Briefcase className="h-8 w-8 text-blue-600" />
                    <h5 className="text-lg font-semibold">Key Benefits</h5>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                      <span className="text-gray-700">Flexible engagement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                      <span className="text-gray-700">Cost-effective expertise</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                      <span className="text-gray-700">Multi-industry experience</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                      <span className="text-gray-700">Strategic focus</span>
                    </li>
                  </ul>
                </div>
              </div>
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
                    What distinguishes a full-time CFO from a part-time CFO?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 bg-gray-50">
                  <p className="text-gray-700">
                    Part-time CFOs work with several clients on a fractional basis, offering the same level of expertise but without the full-time commitment and expense of full-time CFOs, who are employed full-time within a single organisation.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-left font-medium">
                    What qualifications should I look for in a part-time CFO?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 bg-gray-50">
                  <p className="text-gray-700">
                    Look for extensive experience in financial management, industry-specific knowledge, strong analytical skills, and professional certifications such as CPA or CFA. Additionally, a good track record of working with businesses of similar size and stage is beneficial.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-left font-medium">
                    How can my company profit from hiring a part-time CFO?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 bg-gray-50">
                  <p className="text-gray-700">
                    Compared to hiring a full-time employee, a part-time CFO can be more affordable and still help with budgeting and forecasting, strategic financial insights, cash flow management, and growth initiatives.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Roles and Responsibilities */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-8 text-gray-900">
              Roles and Responsibilities of a Part-time CFO
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <PieChart className="h-8 w-8 text-blue-600" />
                  <h4 className="text-xl font-semibold">Financial Analysis and Strategy</h4>
                </div>
                <p className="text-gray-700">
                  A part-time CFO plays a pivotal role in analysing a company's profit and loss (P&L) accounts. They assess the profitability of the business and provide insights into the overall business strategy. Their expertise helps you manage costs and optimise revenue, ensuring your business remains on a sustainable growth path.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <LineChart className="h-8 w-8 text-green-600" />
                  <h4 className="text-xl font-semibold">Cash Flow Projections</h4>
                </div>
                <p className="text-gray-700">
                  Managing cash flow is critical for any business. A part-time CFO builds detailed cash flow projections that help you understand your financial outlook. This includes forecasting future cash inflows and outflows, so you can anticipate financial needs and avoid any liquidity crunches.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="h-8 w-8 text-purple-600" />
                  <h4 className="text-xl font-semibold">Hiring Plans</h4>
                </div>
                <p className="text-gray-700">
                  Hiring is a significant expense for any business. A part-time CFO assists you in creating hiring plans, determining the optimal budget for HR based on your business needs. They provide guidance on how to optimise hiring expenses without compromising financial stability.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="h-8 w-8 text-orange-600" />
                  <h4 className="text-xl font-semibold">Marketing Expenses</h4>
                </div>
                <p className="text-gray-700">
                  For businesses involved in online learning or other digital services, marketing is a crucial investment. A part-time CFO helps you plan and manage marketing expenses effectively, creating modules to estimate the ROI from different ad spending platforms.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md md:col-span-2 max-w-xl mx-auto">
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="h-8 w-8 text-indigo-600" />
                  <h4 className="text-xl font-semibold">Ad Hoc Requests</h4>
                </div>
                <p className="text-gray-700">
                  A part-time CFO is also there to handle various ad hoc requests from clients. These requests could range from specific financial analyses to strategy sessions tailored to unique business challenges. Their flexibility and expertise allow them to provide valuable insights and solutions.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl shadow-sm mt-8">
              <div className="flex items-start gap-3">
                <Lightbulb className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h5 className="text-lg font-semibold mb-2 text-gray-900">Pro-tip:</h5>
                  <p className="text-gray-700">
                    Together with your Part-time CFO, set measurable, precise financial objectives. Your Part-time CFO's efforts will be guided and progress monitored with the aid of specific targets, whether the goal is to increase revenue, decrease expenses, or improve cash flow.
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
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-4" className="border rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-left font-medium">
                    What are a part-time CFO's main responsibilities?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 bg-gray-50">
                  <p className="text-gray-700">
                    The main responsibilities of a part-time CFO are financial reporting, budgeting, cash flow management, strategic planning, financial analysis, and financial decision-making advice to promote stability and growth in the company.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-left font-medium">
                    What support does a part-time CFO provide for cash flow management?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 bg-gray-50">
                  <p className="text-gray-700">
                    A part-time CFO develops comprehensive cash flow projections, keeps tabs on financial inflows and outflows, and puts strategies into place to maximise cash flow, guaranteeing the company has enough cash on hand to pay its debts.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-left font-medium">
                    Can a part-time CFO assist with recruiting strategy?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 bg-gray-50">
                  <p className="text-gray-700">
                    A part-time CFO can assist in hiring plans development by figuring out the best HR budget, offering advice on resource allocation that is both efficient and effective, and making sure that hiring costs are in line with the company's growth and financial objectives.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Cost Benefits Section */}
      <section className="py-12 bg-gradient-to-r from-green-50/50 via-blue-50/50 to-green-50/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-8 text-gray-900">
              Cost Benefits of Hiring a Part-time CFO
            </h3>

            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="lg:w-1/2">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  One of the most significant advantages of hiring a part-time CFO is the cost savings. Compared to a full-time CFO, a part-time CFO can save your business <strong>50-70% in costs</strong>. For startups, these savings are particularly substantial.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  While a full-time CFO's minimum salary is around <strong>$8,000-$10,000 per month</strong>, a part-time CFO typically costs about <strong>$2,500-$3,500</strong>. These savings allow you to allocate funds to other critical areas of your business, driving growth and innovation.
                </p>
              </div>

              <div className="lg:w-1/2">
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h4 className="text-xl font-bold mb-6 text-center text-gray-900">Cost Comparison</h4>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-gray-700">Full-time CFO</span>
                        <span className="font-bold text-gray-900">$8,000-$10,000/mo</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-4">
                        <div className="bg-red-400 h-4 rounded-full" style={{ width: '100%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-gray-700">Part-time CFO</span>
                        <span className="font-bold text-green-600">$2,500-$3,500/mo</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-4">
                        <div className="bg-green-500 h-4 rounded-full" style={{ width: '35%' }}></div>
                      </div>
                    </div>
                    <div className="text-center pt-4 border-t">
                      <span className="text-2xl font-bold text-green-600">50-70% Savings</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Indicators for Needing a Part-time CFO */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-8 text-gray-900">
              Indicators for Needing a Part-time CFO
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border-l-4 border-blue-500">
                <h4 className="text-lg font-semibold mb-3 text-gray-900">Financial Management Issues</h4>
                <p className="text-gray-700">
                  Startups often struggle with financial management, especially if they lack expertise in preparing and analysing financial statements. If you find it challenging to understand your inflows, outflows, and potential cost savings, it's a clear sign you could benefit from a part-time CFO.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border-l-4 border-green-500">
                <h4 className="text-lg font-semibold mb-3 text-gray-900">Growth and Forecasting</h4>
                <p className="text-gray-700">
                  If your business needs help with growth projections and achieving financial targets, a part-time CFO can provide the necessary guidance. They help you forecast revenue, assess whether you're on track, and identify areas for improvement.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-xl border-l-4 border-purple-500">
                <h4 className="text-lg font-semibold mb-3 text-gray-900">Investor Reporting</h4>
                <p className="text-gray-700">
                  For startups with investor funding, presenting financial reports effectively is crucial. A part-time CFO assists with preparing investor reports, ensuring that your financials are clear, accurate, and compelling.
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-xl border-l-4 border-orange-500">
                <h4 className="text-lg font-semibold mb-3 text-gray-900">Grants and Tax Benefits</h4>
                <p className="text-gray-700">
                  Navigating grants and tax benefits can be complex. A part-time CFO helps you obtain grants and take advantage of tax benefits, such as Singapore's MRA grant, enhancing your financial position.
                </p>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-rose-50 p-6 rounded-xl border-l-4 border-red-500 md:col-span-2 max-w-xl mx-auto">
                <h4 className="text-lg font-semibold mb-3 text-gray-900">Rapid Growth</h4>
                <p className="text-gray-700">
                  Your business is expanding quickly, and you need help managing the financial complexities that come with growth.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl shadow-sm mt-8">
              <div className="flex items-start gap-3">
                <Lightbulb className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h5 className="text-lg font-semibold mb-2 text-gray-900">Pro-tip:</h5>
                  <p className="text-gray-700">
                    Collaborate with your part-time CFO to set clear, quantifiable financial goals. Your CFO's efforts will be guided and progress monitored with the aid of specific targets, whether the goal is to increase revenue, decrease expenses, or improve cash flow.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Business Size and Stage */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-8 text-gray-900">
              Business Size and Stage
            </h3>
            <p className="text-lg text-gray-700 mb-8">
              The need for a Part-Time CFO can vary based on the size and stage of your business:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <Target className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-semibold">Startups</h4>
                </div>
                <p className="text-gray-700">
                  Early-stage companies often need strategic financial guidance to secure funding, manage cash flow, and set up financial systems.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-green-100 rounded-full">
                    <Building2 className="h-6 w-6 text-green-600" />
                  </div>
                  <h4 className="text-xl font-semibold">SMEs</h4>
                </div>
                <p className="text-gray-700">
                  Small to medium-sized enterprises experiencing growth may need help with scaling operations, managing increased financial complexity, and ensuring regulatory compliance.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-purple-100 rounded-full">
                    <Briefcase className="h-6 w-6 text-purple-600" />
                  </div>
                  <h4 className="text-xl font-semibold">Established Firms</h4>
                </div>
                <p className="text-gray-700">
                  More mature businesses may require specialised financial expertise for specific projects, risk management, or to overcome financial challenges.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section 3 */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-7" className="border rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-left font-medium">
                    Is a part-time CFO a good fit for startups?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 bg-gray-50">
                  <p className="text-gray-700">
                    Absolutely, startups that require strategic financial guidance to manage cash flow, secure funding, and build strong financial systems without the expense of a full-time CFO will find that part-time CFOs are especially helpful.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="border rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-left font-medium">
                    What assistance can a part-time CFO provide to SMEs?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 bg-gray-50">
                  <p className="text-gray-700">
                    A part-time CFO can help SMEs with strategic planning and growth initiatives, regulatory compliance, operations scaling, and managing increased financial complexity.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9" className="border rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-left font-medium">
                    Is it needed for a well-established business to hire a part-time CFO?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 bg-gray-50">
                  <p className="text-gray-700">
                    For certain projects requiring specialised financial knowledge, like mergers and acquisitions, risk management, financial restructuring, or overcoming financial obstacles, established businesses may require a part-time CFO.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10" className="border rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-left font-medium">
                    How to manage company expansions effectively?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 bg-gray-50">
                  <p className="text-gray-700">
                    A part-time CFO can assist in managing the financial complexities that accompany rapid business expansion, ensuring that you preserve financial stability and take advantage of emerging opportunities.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Skills and Qualifications */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900">
              Skills and Qualifications of CFOs at Growwth Partners
            </h3>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                The CFOs at Growwth Partners are highly qualified professionals, most of whom are <strong>Chartered Accountants (CAs) with over 10 years of experience</strong>.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                The primary concern for clients is the CFO's ability to help grow their business and save time for founders and directors. These seasoned professionals bring a wealth of knowledge and expertise to the table, ensuring your business's financial health is in good hands.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600">10+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600">CA</div>
                  <div className="text-sm text-gray-600">Certified</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-3xl font-bold text-purple-600">50+</div>
                  <div className="text-sm text-gray-600">Clients Served</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-3xl font-bold text-orange-600">100%</div>
                  <div className="text-sm text-gray-600">Commitment</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-8 text-gray-900">Case Studies</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-xl shadow-md">
                <h4 className="text-xl font-bold mb-4 text-gray-900">Nauser</h4>
                <p className="text-gray-700 mb-4">
                  We worked with Nauser for 7-8 months and significantly improved their financials, particularly in revenue projection.
                </p>
                <div className="bg-white/60 p-4 rounded-lg">
                  <p className="text-gray-800 font-medium">
                    Our part-time CFO helped them reach near break-even, demonstrating the impact of expert financial management and strategic planning.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-xl shadow-md">
                <h4 className="text-xl font-bold mb-4 text-gray-900">Hiley</h4>
                <p className="text-gray-700 mb-4">
                  Hiley had no finance person in their team and only prepared financials once a year. After partnering with Growwth Partners, we started preparing their financials regularly.
                </p>
                <div className="bg-white/60 p-4 rounded-lg">
                  <p className="text-gray-800 font-medium">
                    Our part-time CFO assisted with hiring plans, cash flow management, debt management, and working capital optimisation, transforming their financial processes and stability.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Implementing Part-Time CFO Services */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-8 text-gray-900">
              Implementing Part-Time CFO Services
            </h3>

            <div className="space-y-8">
              <div>
                <h4 className="text-xl font-semibold mb-4 text-gray-900 flex items-center gap-2">
                  <Clock className="h-6 w-6 text-blue-600" />
                  Onboarding Process
                </h4>
                <p className="text-lg text-gray-700 mb-4">
                  Integrating a Part-Time CFO into your team involves several steps:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                    <div className="p-2 bg-blue-100 rounded-full">
                      <span className="text-blue-600 font-bold">1</span>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900">Initial Assessment</h5>
                      <p className="text-gray-600 text-sm">The CFO will conduct a thorough assessment of your business's financial health, identifying key areas of improvement.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                    <div className="p-2 bg-blue-100 rounded-full">
                      <span className="text-blue-600 font-bold">2</span>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900">Goal Setting and Planning</h5>
                      <p className="text-gray-600 text-sm">Together, you will set clear financial goals and develop a detailed action plan to achieve them.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-4 text-gray-900 flex items-center gap-2">
                  <Users className="h-6 w-6 text-green-600" />
                  Collaboration and Communication
                </h4>
                <p className="text-lg text-gray-700 mb-4">
                  Effective collaboration and communication are key to a successful partnership:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-1" />
                    <div>
                      <h5 className="font-semibold text-gray-900">Stakeholder Engagement</h5>
                      <p className="text-gray-600 text-sm">Ensure that all relevant stakeholders are involved in the process, fostering a sense of ownership and commitment.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-1" />
                    <div>
                      <h5 className="font-semibold text-gray-900">Regular Updates and Reporting</h5>
                      <p className="text-gray-600 text-sm">Establish a routine for regular updates and financial reports, keeping everyone informed and aligned.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-4 text-gray-900 flex items-center gap-2">
                  <BarChart3 className="h-6 w-6 text-purple-600" />
                  Measuring Success
                </h4>
                <p className="text-lg text-gray-700 mb-4">
                  Evaluating the impact of Part-Time CFO services on your business is essential:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                    <TrendingUp className="h-5 w-5 text-purple-500 mt-1" />
                    <div>
                      <h5 className="font-semibold text-gray-900">Financial Performance</h5>
                      <p className="text-gray-600 text-sm">Track improvements in financial performance, such as increased profitability, improved cash flow, and reduced costs.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                    <Shield className="h-5 w-5 text-purple-500 mt-1" />
                    <div>
                      <h5 className="font-semibold text-gray-900">Business Growth and Stability</h5>
                      <p className="text-gray-600 text-sm">Assess the overall growth and stability of your business, looking at metrics like revenue growth, market share, and operational efficiency.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl shadow-sm mt-8">
              <div className="flex items-start gap-3">
                <Lightbulb className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h5 className="text-lg font-semibold mb-2 text-gray-900">Pro-tip:</h5>
                  <p className="text-gray-700">
                    Encourage open communication between your team members and your part-time CFO. Through this collaboration, the company's financial objectives are met by all parties and financial strategies are well-integrated across departments.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Summary */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Summary</h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Hiring a Part-Time CFO offers numerous advantages for small businesses, including access to strategic financial guidance, cost-effective expertise, and enhanced decision-making capabilities. Whether you're a startup, SME, or an established firm, a Part-Time CFO can help you navigate financial challenges, capitalise on growth opportunities, and achieve long-term success.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              If you're considering the impact a Part-Time CFO could have on your business, now is the time to explore this strategic solution. Assess your financial needs, understand the potential benefits, and take the first step towards securing your business's financial future.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              With the right Part-Time CFO, you can unlock new levels of growth, stability, and profitability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white mb-12 mx-4 lg:mx-auto max-w-6xl rounded-lg">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h3 className="text-3xl font-bold mb-6">
              Book a free call with Growwth Partners today to learn more
            </h3>
            <p className="text-xl mb-8">
              Let us help you secure your business's financial future with expert Part-Time CFO services.
            </p>
            <Button
              onClick={handleContactClick}
              size="lg"
              className="bg-white text-blue-700 hover:bg-gray-100 font-semibold text-lg px-8 py-6 rounded-lg shadow-lg transform transition-transform hover:scale-105"
            >
              Book a Free Call
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default PartTimeCFOGuide;
