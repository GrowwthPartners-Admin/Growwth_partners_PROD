import { motion } from "framer-motion";
import { Users, Building2, Briefcase, Search, Link, BarChart3, Shield, FileText } from "lucide-react";

const audiences = [
  {
    icon: Users,
    title: "CFOs and Finance Leaders",
    description: "Seeking stronger controls without slowing the team.",
  },
  {
    icon: Building2,
    title: "SMEs and Scale-ups",
    description: "In Australia needing practical AI compliance and risk monitoring.",
  },
  {
    icon: Briefcase,
    title: "Accounting and Outsourced Finance Firms",
    description: "Standardising quality across multiple clients.",
  },
  {
    icon: Search,
    title: "Internal Audit and Risk Teams",
    description: "Building continuous oversight into daily workflows.",
  },
];

const steps = [
  {
    icon: Link,
    title: "Connect",
    description: "Enable Ryzup.ai in Google Sheets and connect your accounting source.",
  },
  {
    icon: BarChart3,
    title: "Monitor",
    description: "Run error detection, GL and reconciliation agents, and set up alert rules.",
  },
  {
    icon: Shield,
    title: "Protect",
    description: "Activate the Anonymiser to keep sensitive data private while using AI.",
  },
  {
    icon: FileText,
    title: "Report",
    description: "Share decision-ready summaries with finance, leadership, and auditors.",
  },
];

export const WhoItsForSection = () => {
  return (
    <section className="py-24 bg-slate-900">
      <div className="container mx-auto px-4">
        {/* Who It's For */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Who It's{" "}
            <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              For
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {audiences.map((audience, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-red-500/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center mb-4">
                <audience.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{audience.title}</h3>
              <p className="text-slate-400 text-sm">{audience.description}</p>
            </motion.div>
          ))}
        </div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How It{" "}
            <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              Works
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative"
            >
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-orange-500/30 transition-all duration-300 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-white font-bold">
                    {idx + 1}
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-slate-700/50 flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-orange-400" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-slate-400 text-sm">{step.description}</p>
              </div>
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-red-500 to-orange-500" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
