import { motion } from "framer-motion";
import { Bot, RefreshCcw, AlertTriangle, FileCheck, Shield, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI Co-worker Inside Google Sheets",
    description: "RyzUp Sheets works inside Google Sheets as your in-sheet AI assistant. Ask questions, generate analysis, build dashboards and use AI-powered formulas instead of fragile logic.",
    color: "amber",
  },
  {
    icon: RefreshCcw,
    title: "Automated Data Pulls and Reporting",
    description: "Refresh accounting data directly into Sheets. Replace export-paste-clean with refresh-and-share. Build live P&L, cash flow and performance views that stay current for leadership and the FTA context.",
    color: "orange",
  },
  {
    icon: AlertTriangle,
    title: "Smart Error Detection for Data Accuracy",
    description: "A smart error detector scans spreadsheets for broken formulas, inconsistent ranges and suspicious values so finance trusts the numbers shared with executives, investors and auditors.",
    color: "amber",
  },
  {
    icon: FileCheck,
    title: "AI Agents for GL, Reconciliation and Audit Support",
    description: "Specialised agents accelerate core workflows. GL analysis, reconciliations, bookkeeping review, audit prep and accounting report generation become automated guardrails, not manual chores.",
    color: "orange",
  },
  {
    icon: Shield,
    title: "Anonymiser for Privacy-Safe AI",
    description: "Mask client and company identifiers while preserving structure. Run AI analysis responsibly and support compliance expectations in the UAE.",
    color: "amber",
  },
  {
    icon: BarChart3,
    title: "AI CFO Views for Real Time Insight",
    description: "Get AI-generated dashboards and explanations across cash, margins, multi-currency and forecasts. Move from static monthly packs to living, decision-ready views.",
    color: "orange",
  },
];

const getColorClasses = (color: string) => {
  if (color === "amber") {
    return {
      bg: "bg-amber-100",
      icon: "text-amber-600",
      border: "border-amber-200",
      gradient: "from-amber-50 to-orange-50/50",
    };
  }
  return {
    bg: "bg-orange-100",
    icon: "text-orange-600",
    border: "border-orange-200",
    gradient: "from-orange-50 to-amber-50/50",
  };
};

const HowRyzupIntegratesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-amber-50/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How Ryzup.ai Integrates AI Into Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
              Finance Workflow
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            This is AI automation in the UAE built directly into the tools finance already uses.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const colors = getColorClasses(feature.color);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-gradient-to-br ${colors.gradient} rounded-2xl p-6 border ${colors.border} hover:shadow-lg transition-shadow duration-300`}
              >
                <div className={`w-14 h-14 ${colors.bg} rounded-xl flex items-center justify-center mb-5`}>
                  <feature.icon className={`w-7 h-7 ${colors.icon}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowRyzupIntegratesSection;
