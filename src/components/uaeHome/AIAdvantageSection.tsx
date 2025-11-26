import { motion } from "framer-motion";
import { Bot, AlertCircle, RefreshCw, BarChart3, Shield } from "lucide-react";

const aiFeatures = [
  {
    icon: Bot,
    title: "AI in Google Sheets",
    description:
      "Ask questions, generate analyses, create reports, and simplify formulas inside Sheets",
  },
  {
    icon: AlertCircle,
    title: "Smart Error Detection",
    description:
      "Spot broken formulas, inconsistent ranges, and suspicious values before they hit reports",
  },
  {
    icon: RefreshCw,
    title: "Reconciliation and GL Agents",
    description: "Faster reconciliations, anomaly flags, cleaner audit trails",
  },
  {
    icon: BarChart3,
    title: "AI Dashboards and Forecasts",
    description:
      'Live KPIs, cash and P&L views, and scenario modelling for "what if" questions',
  },
  {
    icon: Shield,
    title: "Anonymiser",
    description:
      "Privacy-first masking so sensitive data stays protected while using AI",
  },
];

const FeatureCard = ({ feature, index }) => {
  const Icon = feature.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white/60 backdrop-blur-sm p-6 rounded-xl hover:shadow-lg transition-all border shadow-md border-gray-200 hover:border-orange-300"
    >
      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-white" />
      </div>

      <h3 className="text-lg font-semibold mb-3 text-gray-900">
        {feature.title}
      </h3>

      <p className="text-gray-600 text-sm leading-relaxed">
        {feature.description}
      </p>
    </motion.div>
  );
};

export const AIAdvantageSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-4">
            Powered by Ryzup.ai
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Our AI Advantage
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Bring AI into day-to-day finance without changing how your team
            works
          </p>
        </motion.div>

        {/* First row: 3 items */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {aiFeatures.slice(0, 3).map((feature, index) => (
            <div key={feature.title} className="w-full max-w-md mx-auto">
              <FeatureCard feature={feature} index={index} />
            </div>
          ))}
        </div>

        {/* Second row: 2 items centered */}
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-center gap-6">
          {aiFeatures.slice(3).map((feature, index) => (
            <div key={feature.title} className="w-full max-w-md mx-auto">
              <FeatureCard feature={feature} index={index + 3} />
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center max-w-4xl mx-auto"
        >
          <div className="bg-orange-100 backdrop-blur-sm p-8 rounded-xl border shadow-md border-orange-200">
            <p className="text-lg font-semibold text-gray-900">
              Result: fewer manual errors, faster closes, decision-ready
              numbers, and a finance team that moves quicker with confidence.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
