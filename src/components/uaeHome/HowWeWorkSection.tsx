import { motion } from "framer-motion";
import { Search, Settings, Zap, TrendingUp, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Assess",
    description: "Map your finance stack, entities, reporting cadence, VAT and Corporate Tax posture, and objectives. Define a 90-day plan."
  },
  {
    icon: Settings,
    title: "Stabilise and Standardise",
    description: "Tighten books, payroll, VAT, and Corporate Tax processes. Align management reports and compliance calendars."
  },
  {
    icon: Zap,
    title: "Automate and Instrument",
    description: "Activate Ryzup.ai inside Sheets and your accounting platform for refreshes, checks, reconciliations, dashboards."
  },
  {
    icon: TrendingUp,
    title: "Forecast and Decide",
    description: "Build scenarios for hiring, pricing, ad spend, collection cycles, and expansion. Prepare investor-ready narratives."
  },
  {
    icon: Rocket,
    title: "Scale Confidently",
    description: "Add entities, metrics, and automations as you grow across UAE and GCC, with stronger controls and visibility."
  }
];

export const HowWeWorkSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            How We Work (UAE)
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A proven process to transform your finance operations
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 md:p-8 rounded-xl shadow-sm hover:shadow-lg transition-all border border-gray-200 hover:border-orange-300"
              >
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-2xl font-semibold text-gray-900">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
