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
  Building2, 
  Users, 
  Shield, 
  FileText, 
  CheckCircle2,
  Briefcase,
  MapPin,
  Scale,
  ClipboardCheck,
  Award,
  Lightbulb,
  ArrowRight,
  BadgeCheck,
  UserCheck,
  Globe,
  Landmark,
  Receipt,
  FileCheck
} from "lucide-react";
import SEOhelper from "@/components/SEOhelper";

// Import images
import incorporatingBusinessImage from "@/assets/guides/incorporating-business-singapore.jpeg";
import checklistLegalDocumentsImage from "@/assets/guides/checklist-legal-documents.jpeg";
import incorporateCompanyStepsImage from "@/assets/guides/incorporate-company-steps.jpeg";
import incorporationStructureImage from "@/assets/guides/incorporation-structure.jpeg";

const IncorporatingBusinessGuide = () => {
  
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Guide",
        "@id": "https://growwthpartners.com/guide/incorporating-business-singapore/#guide",
        "name": "The Most Comprehensive Guide to Incorporating a Business in Singapore",
        "description": "Complete guide to incorporating a business in Singapore. Learn about company structures, legal requirements, and step-by-step registration process.",
        "url": "https://growwthpartners.com/guide/incorporating-business-singapore",
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
      icon: BadgeCheck,
      title: "Effective Incorporation",
      description: "Singapore attracts entrepreneurs from around the world with its simplified business incorporation process."
    },
    {
      icon: Building2,
      title: "Flexible Structures",
      description: "A Private Limited Company (PTE LTD) provides ease of investment and legal protection. A variety of other structures are available."
    },
    {
      icon: UserCheck,
      title: "Resident Director Requirement",
      description: "The appointment of a minimum of one resident director who is a Singaporean national, a permanent resident, or the holder of a work permit is required."
    },
    {
      icon: FileText,
      title: "Important Legal Documents",
      description: "The company's incorporation certificate, bylaws, and director and shareholder identification are among the most important documents."
    },
    {
      icon: ClipboardCheck,
      title: "Compliance and Licencing",
      description: "In order to maintain good standing after incorporation, designate a company secretary, obtain the required licences, and submit the required yearly reports."
    }
  ];

  const tableOfContents = [
    { label: "Introduction", id: "introduction" },
    { label: "How to incorporate a company in Singapore", id: "how-to-incorporate" },
    { label: "How to choose an incorporation structure", id: "incorporation-structure" },
    { label: "Steps after incorporating a company in Singapore", id: "steps-after" },
    { label: "Checklist of legal documents", id: "legal-documents" },
    { label: "Summary", id: "summary" }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const incorporationSteps = [
    {
      number: "1",
      icon: Award,
      title: "Select a Suitable Company Name",
      description: "Choose a unique name that is not being used by anyone, not reserved, and not offensive or forbidden."
    },
    {
      number: "2",
      icon: Users,
      title: "Have Shareholders (1-50)",
      description: "Minimum 1 shareholder and 1 paid-up share capital of S$1. Both resident and non-resident persons are allowed."
    },
    {
      number: "3",
      icon: UserCheck,
      title: "Appoint a Director",
      description: "At least one Resident Director (Singapore Citizen, PR, or work visa holder). Directors must be 18+ years old."
    },
    {
      number: "4",
      icon: MapPin,
      title: "Get a Registered Address",
      description: "Must have a local Singapore physical address. Can be residential or commercial, but not a PO Box."
    }
  ];

  return (
    <Layout>
      <SEOhelper
        title="The Most Comprehensive Guide to Incorporating a Business in Singapore | Growwth Partners"
        description="Complete guide to incorporating a business in Singapore. Learn about company structures, legal requirements, and step-by-step registration process."
        keywords="incorporating business Singapore, company incorporation Singapore, Singapore business registration, Pte Ltd Singapore, ACRA registration"
        canonicalUrl="https://growwthpartners.com/guide/incorporating-business-singapore"
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
              The Most Comprehensive Guide to Incorporating a Business in Singapore
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about starting your business journey in Singapore
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
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Introduction</h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Starting a business in Singapore can be an exciting but intimidating experience. Singapore, which is well-known for its strong economy and welcoming business climate, provides a simple company incorporation process that can launch your entrepreneurial career.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Perhaps the first question an entrepreneur in Singapore faces: is how to incorporate their business in Singapore. This extensive guide addresses all the important questions that entrepreneurs have when incorporating a business in Singapore, covering every step, from choosing a distinctive company name and appointing shareholders and directors to managing legal compliance and obtaining required licences.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              If you're keen to take advantage of Singapore's thriving market, this guide offers the necessary information and tips to make sure your business is launched successfully.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How to Incorporate Section */}
      <section id="how-to-incorporate" className="py-12 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-8 text-gray-900">
              How to Incorporate a Company in Singapore?
            </h3>

            {/* Image showing steps */}
            <div className="mb-10">
              <img 
                src={incorporateCompanyStepsImage} 
                alt="Basic Steps to Incorporate a Company in Singapore" 
                className="w-full max-w-4xl mx-auto rounded-xl shadow-lg"
              />
            </div>

            {/* Step Details */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h4 className="text-xl font-semibold mb-4 text-gray-900 flex items-center gap-3">
                  <span className="w-8 h-8 bg-brand-orange text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                  Select a Suitable Company Name
                </h4>
                <p className="text-gray-700 mb-4">Select a name that is:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>Unique, not being used by anyone</li>
                  <li>Is not already reserved by anyone</li>
                  <li>Is not offensive or forbidden</li>
                </ul>
                <p className="text-gray-700">
                  Once you have chosen a company name you have to submit a company name application via Singapore's ACRA (Accounting and Corporate Regulatory Authority) online business registration and filing portal 'Bizfile'.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <h4 className="text-xl font-semibold mb-4 text-gray-900 flex items-center gap-3">
                  <span className="w-8 h-8 bg-brand-orange text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                  Have Shareholders (1-50 shareholders)
                </h4>
                <p className="text-gray-700 mb-4">
                  A minimum of 1 shareholder and 1 paid-up share capital of S$1 are required for every company. Shareholders may be up to 50. These shareholders may or may not be directors. Both resident and non-resident persons or companies are allowed as shareholders. You may even have 100% non-resident shareholding.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <h4 className="text-xl font-semibold mb-4 text-gray-900 flex items-center gap-3">
                  <span className="w-8 h-8 bg-brand-orange text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                  Appoint a Director
                </h4>
                <p className="text-gray-700 mb-4">
                  You must appoint a Director for your company. Directors can be Resident or Non-Resident but there must be at least one Resident Director (Resident here means a Singapore Citizen, Permanent Resident, or holders of Singapore work visas). Directors should be at least 18 years old.
                </p>
                <p className="text-gray-700">
                  Details of the appointment (including details of shares that the directors have acquired or shares that are registered in the directors' name) must be filed at the Accounting and Corporate Regulatory Authority of Singapore (ACRA). The ACRA must consent to the appointment before the individuals can be appointed as directors.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <h4 className="text-xl font-semibold mb-4 text-gray-900 flex items-center gap-3">
                  <span className="w-8 h-8 bg-brand-orange text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                  Get a Registered Address for Your Company
                </h4>
                <p className="text-gray-700">
                  You must have a local Singapore physical address as the registered address of the company. The registered address may be a residential or a commercial address but it cannot be a PO Box address.
                </p>
              </div>
            </div>

            {/* Pro-tip */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl mt-8">
              <div className="flex items-start gap-3">
                <Lightbulb className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900 mb-2">Pro-tip:</p>
                  <p className="text-gray-700">
                    Utilise Nominee Director Services - If you are a non-resident without a local contact, consider using nominee director services to meet the requirement of having at least one resident director.
                  </p>
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
                    Can Non-residents incorporate a company in Singapore?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 bg-gray-50">
                  <p className="text-gray-700">
                    Yes, non-residents can incorporate a company in Singapore.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-left font-medium">
                    How many days will it take to incorporate a company in Singapore?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 bg-gray-50">
                  <p className="text-gray-700">
                    It usually takes 1-3 days to incorporate a company in Singapore.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-left font-medium">
                    How to get a Director for my company?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 bg-gray-50">
                  <p className="text-gray-700">
                    You can appoint a local resident director or use a nominee director service.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-left font-medium">
                    How can I find out if my Singapore company has been registered?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 bg-gray-50">
                  <p className="text-gray-700">
                    You can check the company registration status on the ACRA (Accounting and Corporate Regulatory Authority) website.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-left font-medium">
                    Where will I receive the initial shareholder's funding?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 bg-gray-50">
                  <p className="text-gray-700">
                    The initial shareholder's funding will be deposited into the company's corporate bank account.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-left font-medium">
                    How to open a bank account in Singapore?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 bg-gray-50">
                  <p className="text-gray-700">
                    To open a bank account in Singapore, visit a bank with the required documents such as the company incorporation certificate, the company's constitution, and identification documents of the directors and shareholders.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="border rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-left font-medium">
                    Can I register my company online?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 bg-gray-50">
                  <p className="text-gray-700">
                    Yes, you can register your company online through ACRA's BizFile+ portal.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Incorporation Structure Section */}
      <section id="incorporation-structure" className="py-12 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-8 text-gray-900">
              How to Choose an Incorporation Structure for My Company?
            </h3>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Businesses in Singapore have a variety of company incorporation structures to select from, each suited to their unique requirements. These are the main choices:
            </p>

            {/* Structure Image */}
            <div className="mb-10">
              <img 
                src={incorporationStructureImage} 
                alt="Different Structures of a Company" 
                className="w-full max-w-5xl mx-auto rounded-xl shadow-lg"
              />
            </div>

            {/* Best Structure */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h4 className="text-xl font-semibold mb-4 text-gray-900">
                Which Structure Is Best Suited for Your Business?
              </h4>
              <p className="text-gray-700 mb-4">
                The main advantage of incorporating a Private Limited Company is the legal protection that it provides.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">By separating your personal assets from those of your business through incorporation, you protect your personal assets from debt or legal issues.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Incorporation as a private limited company (PTE LTD) increases your trustworthiness in the eyes of possible partners, investors, and clients.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">It makes capital investment easier and makes ownership transfers easier.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Additionally, it offers an organised method for handling all business matters, including intellectual property (IP) management.</span>
                </li>
              </ul>
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
              <AccordionItem value="item-1" className="border rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-left font-medium">
                    Can I change the structure of my business after incorporation?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 bg-gray-50">
                  <p className="text-gray-700">
                    Yes, you can change the structure of your business after incorporation, but it may involve legal and administrative processes.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-left font-medium">
                    I am not able to decide which structure is best for my business?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 bg-gray-50">
                  <p className="text-gray-700">
                    Consult with a business advisor or legal professional to determine the most suitable business structure for your needs.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-left font-medium">
                    Can a foreign company register as a branch or a representative office?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 bg-gray-50">
                  <p className="text-gray-700">
                    Yes, a foreign company can register as a branch or a representative office in Singapore.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Steps After Incorporating */}
      <section id="steps-after" className="py-12 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-8 text-gray-900">
              Steps after Incorporating a Company in Singapore
            </h3>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-full flex-shrink-0">
                    <Briefcase className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-3 text-gray-900">Appoint a Company Secretary</h4>
                    <p className="text-gray-700">
                      Every company incorporated in Singapore must appoint a qualified resident Company Secretary within 6 months of the company's registration. A director or a shareholder cannot be the Company Secretary. A Company Secretary will make sure that your newly incorporated company is compliant with all regulations and legal requirements.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-100 rounded-full flex-shrink-0">
                    <FileCheck className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-3 text-gray-900">Get a Business Licence</h4>
                    <p className="text-gray-700 mb-3">
                      Getting a Business License is mandatory before you can commence your business operations. Depending upon the type of business you are in, a licence must be obtained from a relevant Singapore government agency. Businesses such as financial services, travel companies, restaurants and educational institutions require a licence.
                    </p>
                    <p className="text-gray-700">
                      It's a good idea to engage a professional company who can help you get a business licence.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-100 rounded-full flex-shrink-0">
                    <Receipt className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-3 text-gray-900">Get a GST Registration</h4>
                    <p className="text-gray-700">
                      If your anticipated revenue is more than S$1 million, you must register for the Goods and Services Tax (GST) with the Singapore Inland Revenue Authority in order to submit these taxes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-100 rounded-full flex-shrink-0">
                    <Scale className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-3 text-gray-900">Compliances Required for a Company</h4>
                    <p className="text-gray-700">
                      Legal compliance, including the filing of yearly tax returns, GST returns, and compliance reports, is the responsibility of the directors.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pro-tip */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl mt-8">
              <div className="flex items-start gap-3">
                <Lightbulb className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900 mb-2">Pro-tip:</p>
                  <p className="text-gray-700">
                    Plan for Future Expansion - When choosing your company structure and initial setup, consider your long-term business goals. Opt for a structure that allows for easy scalability and future investment opportunities.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Legal Documents Checklist */}
      <section id="legal-documents" className="py-12 bg-white scroll-mt-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900">
              Checklist of Legal Documents to Incorporate a Company in Singapore
            </h3>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              The particular legal documents needed to incorporate a company can change based on the jurisdiction and kind of business structure you're starting. On the other hand, the common documents required for company incorporation are generally included in the following list for startups:
            </p>

            {/* Checklist Image */}
            <div className="mb-10">
              <img 
                src={checklistLegalDocumentsImage} 
                alt="Documents to Incorporate a Company in Singapore" 
                className="w-full max-w-4xl mx-auto rounded-xl shadow-lg"
              />
            </div>

            <p className="text-gray-700 mb-6">
              The requirements and paperwork can differ greatly and you may need some professional help with filing these documents, so it's recommended that you engage a company incorporation service in Singapore to help you with these complexities.
            </p>

            {/* Pro-tip */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
              <div className="flex items-start gap-3">
                <Lightbulb className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900 mb-2">Pro-tip:</p>
                  <p className="text-gray-700">
                    Explore Government Grants and Incentives - Singapore offers various grants and incentives for startups and SMEs. Research available options to reduce initial costs and support your business growth.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

   {/* Summary Section */}
<section id="summary" className="py-16 bg-white scroll-mt-20">
  <div className="container mx-auto px-4">
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-5xl mx-auto"
    >

      <div className="rounded-2xl border border-gray-100 bg-gray-50/60 p-8 md:p-10 shadow-sm">
        <div className="flex items-start gap-4 mb-6">
          
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              Summary
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Launch and run your Singapore company without getting buried in paperwork.
            </p>
          </div>
        </div>

        <div className="space-y-4 text-gray-700 text-base md:text-lg leading-relaxed">
          <p>
            As a startup founder, you should be more concerned with expanding your company than getting bogged down in legalese and paperwork. Growwth Partners is aware of the difficulties involved in incorporating a business and maintaining compliance in Singapore. With our completely paperless services, you can launch your business from anywhere in the globe with ease and without worry.
          </p>
          <p>
            We manage the complexities of compliance with our committed corporate secretary services, making sure you adhere to Singaporean laws. Avoid letting non-compliance cause penalties or interfere with your business's operations. Let us handle the specifics so you can focus on growing your business.
          </p>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center md:flex-row">
 
          <Button
            onClick={() =>
              window.open(
                'https://calendly.com/jd-growwthpartners/15min?month=2025-11',
                '_blank'
              )
            }
            className="inline-flex items-center justify-center bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-3 text-base md:text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
          >
            Book a Free Call with Growwth Partners
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </motion.div>
  </div>
</section>


    </Layout>
  );
};

export default IncorporatingBusinessGuide;
