import React from "react";
import { motion } from "framer-motion";
import { UserCircle, BarChart3, Calculator, LineChart, Layers } from "lucide-react";

const features = [
  {
    icon: UserCircle,
    title: "Senior CFO",
    description: "Strategic leadership for governance and financial planning",
  },
  {
    icon: BarChart3,
    title: "Finance Analysts",
    description: "Forecasting, insights, and performance analysis",
  },
  {
    icon: Calculator,
    title: "Bookkeeping & Payroll",
    description: "Accurate execution and compliance specialists",
  },
  {
    icon: LineChart,
    title: "AI-Enabled Reporting",
    description: "Real-time dashboards and automated insights",
  },
  {
    icon: Layers,
    title: "Ownership & Scalability",
    description: "Continuity and growth, not just task completion",
  },
];

const WhatIsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-8xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What Are Remote CFO & Finance Team Services?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Remote CFO & Finance Team services provide end-to-end finance leadership and execution through an external, distributed team that operates as your internal finance function.
            </p>
          </motion.div>

          {/* Row 1: 3 cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {features.slice(0, 3).map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 border border-orange-100 hover:shadow-lg hover:shadow-orange-100/50 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm group-hover:shadow-md transition-shadow">
                  <feature.icon className="w-7 h-7 text-brand-orange" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Row 2: 2 cards centered */}
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            {features.slice(3).map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
                className="w-full max-w-md group bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 border border-orange-100 hover:shadow-lg hover:shadow-orange-100/50 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm group-hover:shadow-md transition-shadow">
                  <feature.icon className="w-7 h-7 text-brand-orange" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 bg-gradient-to-r from-brand-orange to-amber-500 rounded-2xl p-8 text-white text-center"
          >
            <p className="text-lg md:text-xl font-medium">
              Unlike traditional outsourcing, this approach delivers ownership,
              continuity, and scalability—not just task completion.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;
