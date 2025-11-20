import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ContactModal } from "@/components/ui/contact-modal";
import { 
  Building2, 
  FileText, 
  GitMerge, 
  Lightbulb, 
  TrendingUp, 
  Receipt, 
  LineChart, 
  Search, 
  Briefcase, 
  Award, 
  Scale, 
  RefreshCw 
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Business Valuation",
    description: "Determine the company's worth based on financials, assets, market conditions, and growth prospects; ideal for valuation or fundraising"
  },
  {
    icon: FileText,
    title: "Financial Reporting Valuation",
    description: "Comply with accounting standards by obtaining fair value assessments for assets, liabilities, and other financial instruments."
  },
  {
    icon: GitMerge,
    title: "Mergers and Acquisitions (M&A) Valuation",
    description: "Evaluate target value, synergies, and risks for smooth transactions. A key part of our M&A valuation offerings."
  },
  {
    icon: Lightbulb,
    title: "Intangible Asset Valuation",
    description: "Assess the value of patents, trademarks, copyrights, brand recognition, and other intangible assets."
  },
  {
    icon: TrendingUp,
    title: "Equity Valuation",
    description: "Accurate assessment of equity shares to support investors, shareholders, cap table, and equity analysis"
  },
  {
    icon: Receipt,
    title: "Tax Valuation",
    description: "Determine fair market value for tax planning, estate planning, gift tax, and corporate structuring."
  },
  {
    icon: LineChart,
    title: "Financial Modeling",
    description: "Build financial models to analyze past performance, forecast growth, and valuation across scenarios"
  },
  {
    icon: Search,
    title: "Due Diligence",
    description: "Conduct deep financial health checks to evaluate risks, liabilities, and investment potential."
  },
  {
    icon: Briefcase,
    title: "Portfolio Valuation",
    description: "Evaluate portfolios consisting of stocks, bonds, and other financial instruments."
  },
  {
    icon: Award,
    title: "ESOP Valuation",
    description: "Assess the value of employee-held shares in ESOPs to ensure transparent and compliant reporting."
  },
  {
    icon: Scale,
    title: "Litigation Support",
    description: "Provide valuation services for disputes, shareholder conflicts, divorces, and legal matters."
  },
  {
    icon: RefreshCw,
    title: "Financial Restructuring Valuation",
    description: "Determine asset and liability value during restructuring, bankruptcy, or insolvency."
  }
];

export const ServicesSection = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Holistic Valuation Services for Strategic Growth
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our suite of company valuation services helps founders, SMEs, and investors gain clarity across every financial milestone.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-blue-100/30 rounded-xl p-6 border border-gray-200 hover:border-brand-blue/80 transition-all hover:shadow-lg group"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                <service.icon className="w-7 h-7 text-brand-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-700 mb-6">
            These services collectively strengthen strategic planning for corporate valuation consulting, pre-seed and seed valuation Singapore, and long-term growth.
          </p>
          <Button
            onClick={() => setContactModalOpen(true)}
            size="lg"
            className="bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold px-8"
          >
            Get Free Quote
          </Button>
        </motion.div>
      </div>

      <ContactModal 
        open={contactModalOpen} 
        onOpenChange={setContactModalOpen} 
      />
    </section>
  );
};
