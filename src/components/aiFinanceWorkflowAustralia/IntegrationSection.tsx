import { motion } from "framer-motion";
import { 
  Bot, 
  RefreshCw, 
  ShieldCheck, 
  Cpu, 
  Lock, 
  BarChart3 
} from "lucide-react";

const integrations = [
  {
    icon: Bot,
    title: "AI Co-Worker Inside Google Sheets",
    description: "RyzUp Sheets works inside Google Sheets as your in-sheet AI assistant: ask questions, generate analysis, build dashboards and use AI-powered formulas instead of fragile logic.",
    color: "teal",
  },
  {
    icon: RefreshCw,
    title: "Automated Data Pulls and Reporting from Xero",
    description: "Refresh accounting data directly into Sheets. Replace export-paste-clean with refresh-and-share. Build live P&L, cash flow and performance views that stay current.",
    color: "cyan",
  },
  {
    icon: ShieldCheck,
    title: "Smart Error Detection for Data Accuracy",
    description: "A smart error detector scans spreadsheets for broken formulas, inconsistent ranges and suspicious values so finance trusts the numbers it shares with leadership and auditors.",
    color: "emerald",
  },
  {
    icon: Cpu,
    title: "AI Agents for GL, Reconciliation and Audit Support",
    description: "Specialised agents accelerate core workflows: GL analysis, reconciliations, bookkeeping review, audit prep and Xero report generation. Manual checks turn into automated guardrails.",
    color: "teal",
  },
  {
    icon: Lock,
    title: "Anonymiser for Privacy-Safe AI",
    description: "Mask client and company identifiers while preserving structure, so teams can run AI analysis responsibly and support compliance expectations in Australia.",
    color: "cyan",
  },
  {
    icon: BarChart3,
    title: "AI CFO Views for Real-Time Insight",
    description: "Get AI-generated dashboards and explanations across cash, margins, multi-currency and forecasts. Move from static monthly packs to living, decision-ready views.",
    color: "emerald",
  },
];

const getColorClasses = (color: string) => {
  const colors: Record<string, { bg: string; iconBg: string; border: string }> = {
    teal: {
      bg: "from-teal-50 to-cyan-50",
      iconBg: "from-teal-500 to-teal-600",
      border: "border-teal-200",
    },
    cyan: {
      bg: "from-cyan-50 to-teal-50",
      iconBg: "from-cyan-500 to-cyan-600",
      border: "border-cyan-200",
    },
    emerald: {
      bg: "from-emerald-50 to-teal-50",
      iconBg: "from-emerald-500 to-emerald-600",
      border: "border-emerald-200",
    },
  };
  return colors[color] || colors.teal;
};

const IntegrationSection = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-background to-slate-50/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-teal-100 to-cyan-100 text-teal-700 rounded-full text-sm font-medium mb-4">
            Integration Features
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            How Ryzup Integrates AI Into{" "}
            <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Your Finance Workflow
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {integrations.map((item, index) => {
            const colorClasses = getColorClasses(item.color);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group p-6 rounded-2xl bg-gradient-to-br ${colorClasses.bg} border ${colorClasses.border} hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${colorClasses.iconBg} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;
