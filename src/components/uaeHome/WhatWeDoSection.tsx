import { motion } from "framer-motion";
import { Briefcase, TrendingUp, Calculator, Users, FileText, Shield, Building, DollarSign } from "lucide-react";

const services = [
  {
    icon: Briefcase,
    title: "Fractional and Part-Time CFO",
    description: "Cash flow control, profitability levers, operating plans, board packs, and investor support tailored to UAE and GCC growth."
  },
  {
    icon: TrendingUp,
    title: "Strategic Finance and FP&A",
    description: "12–24 month models, scenario planning, unit economics, hiring plans, pricing tests, and capital strategy."
  },
  {
    icon: Calculator,
    title: "Accounting and Bookkeeping (UAE)",
    description: "Monthly closes, management reports, and ledgers aligned to FTA expectations. Multi-entity and multi-currency ready."
  },
  {
    icon: Users,
    title: "Payroll and Compliance (UAE)",
    description: "Payroll processing with WPS, reconciliations to ledgers, and clean workpapers for internal reviews and audits."
  },
  {
    icon: FileText,
    title: "Corporate Tax and VAT (UAE)",
    description: "Corporate Tax registration and returns, VAT registrations and returns, FTA correspondence, and compliance calendars."
  },
  {
    icon: Shield,
    title: "ESR, UBO, and Governance",
    description: "Economic Substance notifications and reports, UBO record keeping, documentation and control frameworks."
  },
  {
    icon: Building,
    title: "Company Setup and Corporate Secretarial",
    description: "Mainland and free zone support, structure recommendations, statutory registers, and filings."
  },
  {
    icon: DollarSign,
    title: "Cash Flow Modelling and Forecasts",
    description: "Runway, buffers, and early warning signals across AED cash positions and collections."
  }
];

export const WhatWeDoSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            What We Do
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive finance solutions tailored for UAE businesses
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-white p-6 rounded-xl hover:shadow-lg transition-all border border-gray-200 hover:border-orange-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
