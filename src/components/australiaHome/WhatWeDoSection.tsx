import { motion } from "framer-motion";
import {
  DollarSign,
  TrendingUp,
  BookOpen,
  Users,
  FileText,
  Building2,
  BarChart3,
} from "lucide-react";

const services = [
  {
    icon: DollarSign,
    title: "Fractional & Part-Time CFO",
    description:
      "Strategic finance without the full-time overhead: cash flow control, profitability levers, planning, board packs, and investor support.",
  },
  {
    icon: TrendingUp,
    title: "Strategic Finance & FP&A",
    description:
      "12–24 month operating models, scenarios, hiring plans, unit economics, and valuation impact analysis.",
  },
  {
    icon: BookOpen,
    title: "Accounting & Bookkeeping",
    description:
      "Clean books, monthly closes, management reports, and entity-level controls tuned for Australian operations.",
  },
  {
    icon: Users,
    title: "Payroll & Compliance",
    description:
      "On-time payroll with reconciliations that tie back to ledgers; consistent workpapers for reviews and audits.",
  },
  {
    icon: FileText,
    title: "Corporate Tax (ATO) & BAS/PAYG",
    description:
      "ATO-compliant lodgements with SME-focused optimisation and end-of-year reporting packs.",
  },
  {
    icon: Building2,
    title: "Company Incorporation & Corporate Secretarial",
    description:
      "Foundations for growth: structure, documentation, and statutory compliance from day one.",
  },
  {
    icon: BarChart3,
    title: "Cash Flow Modelling",
    description:
      "Direct-to-board clarity on runway, burn, buffers, and when to act.",
  },
];

export const WhatWeDoSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 "
        >
          <span className="inline-block px-4 py-1 bg-[#06C0A9] text-white rounded-full text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What We Do
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive finance solutions tailored for Australian businesses
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`
        bg-gradient-to-br from-blue-50 to-[#d5f5ef]/90 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100
        ${index === services.length - 1 ? "lg:col-start-2" : ""}
      `}
            >
              <div className="mb-5 inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-brand-blue to-[#06C0A9] rounded-xl shadow-lg">
                <service.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
