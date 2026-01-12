import { motion } from "framer-motion";
import { Settings, LineChart, Wallet, BarChart3, FileText } from "lucide-react";

const features = [
  { icon: Settings, text: "Financial setup and structuring" },
  { icon: LineChart, text: "Budgeting and forecasting" },
  { icon: Wallet, text: "Cash flow and runway management" },
  { icon: BarChart3, text: "Unit economics and growth metrics" },
  { icon: FileText, text: "Investor and board-ready reporting" },
];

const WhatIsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">
              Definition
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
              What Are Startup Finance Services?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Startup Finance services provide end-to-end financial support designed specifically for early-stage and growth-stage startups.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                These services focus on:
              </h3>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-400 rounded-xl flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-gray-700 font-medium">{feature.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-orange-400 to-orange-500 rounded-3xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-4">
                Forward-Looking & Growth-Focused
              </h3>
              <p className="text-orange-100 text-lg leading-relaxed">
                Unlike traditional accounting, Startup Finance services are forward-looking and growth-focused, helping founders make informed decisions under uncertainty.
              </p>
              <div className="mt-6 pt-6 border-t border-white/20">
                <p className="text-white/90 italic">
                  "We help startups build financial clarity from day one—so you can focus on building your product and growing your business."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;
