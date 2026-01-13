import React from "react";
import { motion } from "framer-motion";
import {
  Package,
  TrendingUp,
  RefreshCcw,
  Users,
  BarChart3,
  Lightbulb,
  ChevronRight,
} from "lucide-react";

const services = [
  {
    icon: Package,
    number: "01",
    title: "Inventory & Working Capital Management",
    items: [
      "Inventory ageing and turnover analysis",
      "Safety stock and reorder point optimisation",
      "Working capital forecasting and planning",
    ],
  },
  {
    icon: TrendingUp,
    number: "02",
    title: "Margin & Contribution Analysis",
    items: [
      "Product-level and customer-level margin analysis",
      "Cost allocation across logistics, duties, and overheads",
      "Identification of loss-making lines or customers",
    ],
  },
  {
    icon: RefreshCcw,
    number: "03",
    title: "Cash Conversion Cycle Optimisation",
    items: [
      "Receivables, payables, and inventory cycle analysis",
      "Credit policy review and optimisation",
      "Liquidity and cash flow forecasting",
    ],
  },
  {
    icon: Users,
    number: "04",
    title: "Supplier & Customer Credit Analysis",
    items: [
      "Supplier term evaluation",
      "Customer credit risk assessment",
      "Impact analysis on cash flow and margins",
    ],
  },
  {
    icon: BarChart3,
    number: "05",
    title: "Management & Investor Reporting",
    items: [
      "Monthly MIS and KPI dashboards",
      "Trading-specific performance metrics",
      "Board and lender-ready reporting",
    ],
  },
  {
    icon: Lightbulb,
    number: "06",
    title: "CFO-Led Strategic Support",
    items: [
      "Pricing and discount strategies",
      "Expansion into new markets or product lines",
      "Capital allocation and funding decisions",
    ],
  },
];

const HowWeDeliverSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-sm font-semibold mb-4">
            Our Approach
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            How Growwth Partners Delivers{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              Trading Finance Value
            </span>
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Our Trading & Distribution Finance services are designed to bring clarity, control, and predictability to trading operations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 flex items-center justify-center group-hover:from-emerald-500/30 group-hover:to-cyan-500/30 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-emerald-400" />
                </div>
                <span className="text-3xl font-bold text-white/10 group-hover:text-emerald-500/20 transition-colors duration-300">
                  {service.number}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-emerald-300 transition-colors duration-300">
                {service.title}
              </h3>

              <ul className="space-y-2">
                {service.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-start gap-2 text-slate-300 text-sm"
                  >
                    <ChevronRight className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeDeliverSection;
