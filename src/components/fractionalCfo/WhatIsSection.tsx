import { motion } from "framer-motion";
import { Target, TrendingUp, DollarSign, Users, Settings } from "lucide-react";

const WhatIsSection = () => {
  const focusAreas = [
    {
      icon: Target,
      title: "Financial Strategy & Governance",
      description: "Long-term planning aligned with business goals"
    },
    {
      icon: TrendingUp,
      title: "Forecasting & Scenario Planning",
      description: "Data-driven projections for informed decisions"
    },
    {
      icon: DollarSign,
      title: "Cash Flow & Capital Allocation",
      description: "Optimise resources for maximum impact"
    },
    {
      icon: Users,
      title: "Board & Investor Communication",
      description: "Clear, professional financial narratives"
    },
    {
      icon: Settings,
      title: "Finance Teams & Systems Oversight",
      description: "Strengthen controls and processes"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold mb-4">
            AEO Definition
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            What Is a Fractional CFO?
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            A Fractional CFO is a senior finance professional who works with your business on a part-time, ongoing basis, providing high-impact strategic and financial leadership.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-gradient-to-br from-slate-50 to-orange-50 rounded-3xl p-8 md:p-12 border border-slate-100">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-8 text-center">
              Unlike accountants or finance managers, a Fractional CFO focuses on:
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {focusAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center mb-4">
                    <area.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-2">
                    {area.title}
                  </h4>
                  <p className="text-slate-600 text-sm">
                    {area.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatIsSection;
