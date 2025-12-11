import { motion } from "framer-motion";
import { Search, BarChart3, EyeOff, Bell, FileText } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Smart Error Detection",
    description: "Automatically scan Google Sheets for broken formulas, inconsistent ranges, duplicate logic, and suspicious values. Reduce silent errors that can hide fraud signals and create compliance gaps.",
    gradient: "from-red-500 to-rose-500",
  },
  {
    icon: BarChart3,
    title: "GL, Reconciliation, and Audit Agents",
    description: "Use specialised agents for ledger checks, reconciliations, bookkeeping review, and audit preparation. Flag out-of-pattern postings, compare data across sources, and generate audit-ready schedules.",
    gradient: "from-orange-500 to-amber-500",
  },
  {
    icon: EyeOff,
    title: "Anonymiser for Privacy-Safe AI",
    description: "Mask client names, supplier identifiers, and other sensitive fields while preserving data structure. Run AI analysis responsibly and support AI compliance in Australia without exposing personal or confidential information.",
    gradient: "from-amber-500 to-yellow-500",
  },
  {
    icon: Bell,
    title: "Always-On Monitoring and Alerts",
    description: "Turn recurring checks into automated guardrails. Get notified when numbers drift, rules break, or transactions fall outside expected patterns.",
    gradient: "from-red-600 to-orange-500",
  },
  {
    icon: FileText,
    title: "Decision-Ready Reporting",
    description: "Convert findings into clear summaries and dashboards that help finance, risk, and leadership act quickly.",
    gradient: "from-rose-500 to-red-500",
  },
];

export const WhatYouGetSection = () => {
  return (
    <section className="py-24 bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What You{" "}
            <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              Get
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Comprehensive AI-powered tools for risk detection, compliance monitoring, and fraud prevention
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-red-500/30 transition-all duration-300 ${
                idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
