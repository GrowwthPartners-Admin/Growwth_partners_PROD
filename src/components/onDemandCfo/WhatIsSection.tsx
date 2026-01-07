import { motion } from "framer-motion";
import { Target, Clock, Crosshair, TrendingUp, Users, FileText, BarChart3, RefreshCw } from "lucide-react";

const WhatIsSection = () => {
  const characteristics = [
    { icon: Target, title: "Outcome-driven", color: "from-orange-500 to-amber-500" },
    { icon: Clock, title: "Time-bound", color: "from-blue-500 to-cyan-500" },
    { icon: Crosshair, title: "Decision-critical focus", color: "from-emerald-500 to-teal-500" },
  ];

  const engagements = [
    { icon: TrendingUp, title: "Cash flow crisis management" },
    { icon: Users, title: "Investor or board meeting preparation" },
    { icon: BarChart3, title: "Financial modelling and scenario analysis" },
    { icon: RefreshCw, title: "Strategic reviews for expansion or restructuring" },
  ];

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
          <span className="inline-block px-4 py-1.5 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold mb-4">
            Understanding On-Demand CFO
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            What Are On-Demand CFO Services?
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            On-Demand CFO services provide short-term, high-impact access to a senior CFO for specific financial challenges or time-sensitive situations, without long-term commitments.
          </p>
        </motion.div>

        {/* Characteristics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-center text-slate-700 font-bold text-lg mb-8">
            Unlike recurring CFO engagements, On-Demand CFO support is:
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {characteristics.map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-slate-50 rounded-2xl p-6 text-center shadow hover:shadow-lg transition-all duration-300 border border-slate-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Typical engagements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">
            Typical Engagements Include:
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {engagements.map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-gradient-to-br from-slate-50 to-orange-50 rounded-2xl p-6 border border-orange-200 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="w-12 h-12 mb-4 rounded-xl bg-white shadow-md flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-orange-500" />
                </div>
                <h4 className="text-lg font-semibold text-slate-900">{item.title}</h4>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatIsSection;
