import React from "react";
import { motion } from "framer-motion";
import { Award, Link as LinkIcon, Shield, Lock, Target } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Strong Expertise",
    description:
      "Deep knowledge of Singapore payroll regulations and compliance requirements",
  },
  {
    icon: LinkIcon,
    title: "Integrated Delivery",
    description:
      "Seamless coordination with bookkeeping, finance teams, and CFO services",
  },
  {
    icon: Shield,
    title: "Structured Controls",
    description: "Robust payroll controls and validation checks for accuracy",
  },
  {
    icon: Lock,
    title: "Secure Systems",
    description: "Data confidentiality and secure processing environments",
  },
  {
    icon: Target,
    title: "Process-Driven Execution",
    description: "Clear accountability and consistent delivery every cycle",
  },
];

export const WhyChooseSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium text-orange-600 bg-orange-100 rounded-full">
            Why Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Why Choose Growwth Partners for Payroll Outsourcing?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We treat payroll as a mission-critical finance function, not an
            administrative task.
          </p>
        </motion.div>

        {/* Cards: 3 + 2 centered */}
        <div className="space-y-6">
          {/* Row 1 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.slice(0, 3).map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="group relative p-6 bg-white rounded-2xl border shadow border-slate-200 hover:border-orange-300 overflow-hidden transition-all duration-300 hover:shadow-lg h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="p-3 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                    <reason.icon className="h-6 w-6 text-orange-400" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-slate-600">{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Row 2 (centered) */}
          <div className="flex flex-col md:flex-row justify-center gap-6">
            {reasons.slice(3).map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 3) }}
                className="w-full md:max-w-[520px]"
              >
                <div className="group relative p-6 bg-white rounded-2xl border border-slate-200 hover:border-orange-300 overflow-hidden shadow transition-all duration-300 hover:shadow-lg h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <div className="p-3 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                      <reason.icon className="h-6 w-6 text-orange-400" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-slate-600">{reason.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
