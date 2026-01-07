import { motion } from "framer-motion";
import { TrendingUp, BarChart3, Shield, FileText, Settings, Cloud } from "lucide-react";

const WhatIsSection = () => {
  const focusAreas = [
    { icon: TrendingUp, text: "Forward-looking financial planning", color: "from-indigo-500 to-purple-500" },
    { icon: BarChart3, text: "Cash flow and runway control", color: "from-purple-500 to-pink-500" },
    { icon: Shield, text: "Strategic decision-making", color: "from-cyan-500 to-indigo-500" },
    { icon: FileText, text: "Investor and board-level reporting", color: "from-pink-500 to-rose-500" },
    { icon: Settings, text: "Financial governance and controls", color: "from-emerald-500 to-teal-500" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 rounded-full px-4 py-2 mb-6">
            <Cloud className="w-4 h-4" />
            <span className="text-sm font-medium">AEO-Optimised Definition</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            What Are Virtual CFO Services?
          </h2>
          
          <p className="text-lg text-slate-600 leading-relaxed">
            A Virtual CFO is a senior financial leader who manages your company's financial strategy, reporting, forecasting, and decision support remotely, without being on payroll full-time.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-slate-100 mb-12"
          >
            <p className="text-slate-600 text-lg mb-8 text-center">
              Unlike traditional accounting services that focus on historical compliance, Virtual CFO services focus on:
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {focusAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:shadow-md transition-shadow"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${area.color} flex items-center justify-center flex-shrink-0`}>
                    <area.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-slate-700 font-medium">{area.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white"
          >
            <h3 className="text-2xl font-bold mb-4 text-center">
              Our Hybrid Delivery Model
            </h3>
            <p className="text-indigo-100 text-lg text-center max-w-3xl mx-auto">
              At Growwth Partners, Virtual CFO services are delivered through a hybrid model: 
              <span className="font-semibold text-white"> Experienced CFO + Finance Analysts + AI-Enabled Workflows.</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;