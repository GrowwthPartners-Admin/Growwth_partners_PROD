import React from "react";
import { motion } from "framer-motion";
import { 
  Package, 
  TrendingUp, 
  RefreshCcw, 
  Users, 
  BarChart3, 
  CheckCircle2 
} from "lucide-react";

const focusAreas = [
  {
    icon: Package,
    title: "Inventory & Working Capital Management",
    description: "Optimize stock levels and working capital to improve cash flow",
  },
  {
    icon: TrendingUp,
    title: "Margin & Contribution Analysis",
    description: "Understand profitability at product, customer, and channel level",
  },
  {
    icon: RefreshCcw,
    title: "Cash Conversion Cycle Optimization",
    description: "Accelerate cash collection and optimize payment cycles",
  },
  {
    icon: Users,
    title: "Supplier & Customer Credit Analysis",
    description: "Evaluate credit terms and manage trading relationships",
  },
  {
    icon: BarChart3,
    title: "Financial Forecasting & Reporting",
    description: "Forward-looking insights for better trading decisions",
  },
];

const WhatIsSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold mb-4">
              Definition
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              What Are Trading & Distribution{" "}
              <span className="text-emerald-600">Finance Services?</span>
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Trading & Distribution Finance services provide specialised financial leadership and reporting designed for businesses that buy, hold, and resell goods across domestic and international markets.
            </p>
            <div className="bg-gradient-to-r from-emerald-50 to-cyan-50 rounded-2xl p-6 border border-emerald-100">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                <p className="text-slate-700">
                  Unlike generic accounting, trading finance services are built to handle{" "}
                  <span className="font-semibold text-emerald-700">
                    high transaction volumes, inventory complexity, and tight cash cycles
                  </span>.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right content - Focus areas */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg font-semibold text-slate-900 mb-6">
              These services focus on:
            </p>
            <div className="space-y-4">
              {focusAreas.map((area, index) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="group flex items-start gap-4 p-4 rounded-xl bg-slate-50 hover:bg-emerald-50 shadow border border-slate-100 hover:border-emerald-200 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center group-hover:bg-emerald-100 transition-colors duration-300">
                    <area.icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">{area.title}</h3>
                    <p className="text-sm text-slate-600">{area.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;
