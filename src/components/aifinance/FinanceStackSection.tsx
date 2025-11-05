import { motion } from "framer-motion";
import { Database, Brain, LineChart, FileText } from "lucide-react";

export const FinanceStackSection = () => {
  const currentTools = [
    "Accounting software",
    "Google Sheets or Excel",
    "BI dashboards",
    "Manual forecasting models",
    "Ad platform screenshots",
    'Data security',
  ];

  const aiFeatures = [
    {
      icon: Database,
      title: "Data consolidation",
      description: "RyzUp pulls financial and performance data from your existing systems into one view you can trust.",
    },
    {
      icon: Brain,
      title: "Smart interpretation",
      description: "Instead of dumping raw numbers, RyzUp interprets them. You see what changed, why it changed, and what it means for cash.",
    },
    {
      icon: LineChart,
      title: "Predictive modelling",
      description: 'The system simulates forward paths so you can answer questions like "Can we afford this hire" or "Can we increase spend here without shortening runway".',
    },
    {
      icon: FileText,
      title: "Executive narrative",
      description: "RyzUp automatically produces clean, investor grade explanations that you can share with stakeholders without rewriting.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Where AI Fits In Your Finance Stack
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Most teams today are juggling multiple tools. RyzUp sits on top of that mess and gives you one source of financial truth.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-lg border border-gray-200"
          >
            <h3 className="text-xl font-bold mb-6 text-center text-gray-900">Most teams today juggle:</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {currentTools.map((tool, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-700">
                  <div className="w-2 h-2 bg-brand-orange rounded-full"></div>
                  <span>{tool}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-bold mb-2">Here is how AI in finance powers that:</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {aiFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-blue-50/50 p-6 rounded-xl shadow-lg border border-gray-200"
            >
              <div className="w-12 h-12 bg-brand-orange/10 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-brand-orange" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-700 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-lg font-semibold text-brand-orange">
            You do not get spreadsheets. You get clarity.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
