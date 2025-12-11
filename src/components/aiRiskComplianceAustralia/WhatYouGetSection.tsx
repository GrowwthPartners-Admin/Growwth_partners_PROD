import { motion } from "framer-motion";
import { Search, BarChart3, EyeOff, Bell, FileText } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Smart Error Detection",
    description:
      "Automatically scan Google Sheets for broken formulas, inconsistent ranges, duplicate logic, and suspicious values. Reduce silent errors that can hide fraud signals and create compliance gaps.",
    gradient: "from-teal-400 to-cyan-400",
  },
  {
    icon: BarChart3,
    title: "GL, Reconciliation, and Audit Agents",
    description:
      "Use specialised agents for ledger checks, reconciliations, bookkeeping review, and audit preparation. Flag out-of-pattern postings, compare data across sources, and generate audit-ready schedules.",
    gradient: "from-teal-400 to-cyan-400",
  },
  {
    icon: EyeOff,
    title: "Anonymiser for Privacy-Safe AI",
    description:
      "Mask client names, supplier identifiers, and other sensitive fields while preserving data structure. Run AI analysis responsibly and support AI compliance in Australia without exposing personal or confidential information.",
    gradient: "from-teal-400 to-cyan-300",
  },
  {
    icon: Bell,
    title: "Always-On Monitoring and Alerts",
    description:
      "Turn recurring checks into automated guardrails. Get notified when numbers drift, rules break, or transactions fall outside expected patterns.",
    gradient: "from-teal-500 to-cyan-500",
  },
  {
    icon: FileText,
    title: "Decision-Ready Reporting",
    description:
      "Convert findings into clear summaries and dashboards that help finance, risk, and leadership act quickly.",
    gradient: "from-teal-500 to-cyan-500",
  },
];

const FeatureCard = ({
  feature,
  index,
}: {
  feature: (typeof features)[number];
  index: number;
}) => {
  const Icon = feature.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="h-full"
    >
      <div className="group relative h-full bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300 shadow flex flex-col">
        <div
          className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
        >
          <Icon className="w-7 h-7 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-3">
          {feature.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed flex-1">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
};

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
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Get
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Comprehensive AI-powered tools for risk detection, compliance
            monitoring, and fraud prevention
          </p>
        </motion.div>

        {/* First row: 3 cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {features.slice(0, 3).map((feature, idx) => (
            <div key={feature.title} className="w-full max-w-md mx-auto">
              <FeatureCard feature={feature} index={idx} />
            </div>
          ))}
        </div>

        {/* Second row: 2 cards centered */}
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-center gap-6">
          {features.slice(3).map((feature, idx) => (
            <div key={feature.title} className="w-full max-w-md mx-auto">
              <FeatureCard feature={feature} index={idx + 3} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
