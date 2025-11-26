import { motion } from "framer-motion";
import { Search, Target, Cpu, LineChart, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Assess",
    description: "Map the finance stack, reporting cadence, compliance needs, and growth goals; define a 90-day plan."
  },
  {
    icon: Target,
    title: "Stabilise & Standardise",
    description: "Tighten books, payroll, and tax processes; align BAS/PAYG and management reports."
  },
  {
    icon: Cpu,
    title: "Automate & Instrument",
    description: "Activate Ryzup.ai agents in Sheets and accounting for refreshes, checks, reconciliations, and dashboards."
  },
  {
    icon: LineChart,
    title: "Forecast & Decide",
    description: "Build scenarios around hiring, pricing, ad spend, and expansion; present investor-ready narratives."
  },
  {
    icon: Rocket,
    title: "Scale Confidently",
    description: "Add entities, metrics, and workflow automations as you grow — same process, stronger controls."
  }
];

export const HowWeWorkSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#e9faf7] text-[#06C0A9] rounded-full text-sm font-semibold mb-4">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            How We Work (Australia)
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative mb-8 last:mb-0 "
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-[#6bdecd] rounded-full flex items-center justify-center shadow-lg">
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                    {index < steps.length - 1 && (
                      <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-gradient-to-b from-brand-blue/50 to-transparent"></div>
                    )}
                  </div>
                </div>
                
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {index + 1}. {step.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
