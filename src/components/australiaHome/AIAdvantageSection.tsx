import { motion } from "framer-motion";
import { Bot, FileSpreadsheet, AlertCircle, GitMerge, BarChart, Shield } from "lucide-react";

const features = [
  {
    icon: FileSpreadsheet,
    title: "AI in Google Sheets",
    description: "In-sheet assistant for analysis, reporting, and formula help."
  },
  {
    icon: AlertCircle,
    title: "Smart Error Detection",
    description: "Identify broken formulas, mismatches, and suspicious values before they hit reports."
  },
  {
    icon: GitMerge,
    title: "Reconciliation & GL Agents",
    description: "Faster reconciliations, anomaly flags, and cleaner audit trails."
  },
  {
    icon: BarChart,
    title: "AI Dashboards & Forecasts",
    description: "Live KPIs, P&L and cash views, and scenario modelling for 'what if' decisions."
  },
  {
    icon: Shield,
    title: "Anonymiser",
    description: "Privacy-first masking so sensitive data stays protected during AI analysis."
  }
];

const FeatureCard = ({ feature, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="bg-white/60 backdrop-blur-sm p-6 rounded-xl border border-gray-200 hover:bg-white/80 transition-all duration-300 shadow-sm"
  >
    <div className="mb-4 inline-flex items-center justify-center w-12 h-12 bg-[#6bdecd] rounded-lg">
      <feature.icon className="h-6 w-6 text-white" />
    </div>

    <h3 className="text-xl font-bold mb-3">
      {feature.title}
    </h3>

    <p className="text-gray-600 leading-relaxed">
      {feature.description}
    </p>
  </motion.div>
);


export const AIAdvantageSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 text-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-blue/10 backdrop-blur-sm rounded-full text-brand-blue text-sm font-semibold mb-6">
            <Bot className="h-4 w-4" />
            Powered by Ryzup.ai
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Our AI Advantage
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-4">
            Bring AI into day-to-day finance — safely and pragmatically.
          </p>
        </motion.div>

       {/* First row: 3 items */}
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
  {features.slice(0, 3).map((feature, index) => (
    <div key={feature.title} className="w-full max-w-sm mx-auto">
      <FeatureCard feature={feature} index={index} />
    </div>
  ))}
</div>

{/* Second row: 2 items centered */}
<div className="flex flex-col sm:flex-row justify-center mb-12">
  {features.slice(3).map((feature, index) => (
    <div key={feature.title} className="w-full max-w-sm mx-auto">
      <FeatureCard feature={feature} index={index + 3} />
    </div>
  ))}
</div>


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-[#aaece2] backdrop-blur-sm border border-gray-200 rounded-2xl p-8 text-center max-w-4xl mx-auto shadow-sm"
        >
          <p className="text-xl font-semibold">
            Result: fewer manual errors, faster closes, decision-ready numbers — with humans in control and AI doing the heavy lifting.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
