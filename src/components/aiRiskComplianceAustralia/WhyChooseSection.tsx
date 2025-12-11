import { motion } from "framer-motion";
import { MapPin, AlertTriangle, Lock, FileCheck } from "lucide-react";

const reasons = [
  {
    icon: MapPin,
    title: "Local Focus on AI Compliance",
    description: "Designed for AI compliance in Australia and audit readiness requirements.",
  },
  {
    icon: AlertTriangle,
    title: "Early AI Risk Detection",
    description: "Surface errors, irregular entries, and outliers before they become problems.",
  },
  {
    icon: Lock,
    title: "Privacy-Safe Analysis",
    description: "Built-in anonymisation protects sensitive data while enabling AI analysis.",
  },
  {
    icon: FileCheck,
    title: "Faster Reconciliations",
    description: "Cleaner reports for leadership and auditors with automated checks.",
  },
];

export const WhyChooseSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-red-50/30 to-orange-50/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Why Australian Businesses Choose{" "}
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Ryzup.ai
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl hover:border-red-200 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <reason.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{reason.title}</h3>
              <p className="text-slate-600 text-sm">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
