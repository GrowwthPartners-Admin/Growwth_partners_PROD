import { motion } from "framer-motion";
import { 
  TrendingUp, 
  FileText, 
  Calculator, 
  Wallet, 
  PieChart 
} from "lucide-react";

const features = [
  {
    icon: TrendingUp,
    title: "Recurring Revenue Tracking",
    description: "Accurate MRR and ARR tracking and forecasting for predictable growth",
  },
  {
    icon: FileText,
    title: "Deferred Revenue Accounting",
    description: "Contract accounting and proper revenue recognition standards",
  },
  {
    icon: Calculator,
    title: "Unit Economics",
    description: "CAC, LTV, churn, and payback period analysis for optimization",
  },
  {
    icon: Wallet,
    title: "Burn Rate Management",
    description: "Burn rate and runway management for capital efficiency",
  },
  {
    icon: PieChart,
    title: "SaaS Reporting",
    description: "Investor and board-level SaaS-specific reporting",
  },
];

const WhatIsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">
            Definition
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            What Are SaaS Finance Services?
          </h2>
          <p className="text-lg text-slate-600 max-w-6xl mx-auto">
            SaaS Finance services deliver specialised financial management tailored to subscription-based and recurring revenue business models. Unlike traditional finance, SaaS finance is metrics-driven, forward-looking, and valuation-focused.
          </p>
        </motion.div>

        {/* Row 1 – 3 cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {features.slice(0, 3).map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6  rounded-2xl bg-gradient-to-br from-orange-50 to-amber-50 transition-all duration-300 shadow border border-transparent hover:border-orange-200"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Row 2 – 2 cards centered */}
        <div className="flex flex-col sm:flex-row justify-center gap-8">
          {features.slice(3).map((feature, index) => (
            <motion.div
              key={index + 3}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
              className="w-full max-w-md group p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-amber-50 transition-all duration-300 shadow border border-transparent hover:border-orange-200"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;
