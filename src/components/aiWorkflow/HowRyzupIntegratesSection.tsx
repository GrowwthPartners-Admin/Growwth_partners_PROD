import { motion } from "framer-motion";
import {
  Table2,
  RefreshCw,
  ShieldAlert,
  Bot,
  Lock,
  BarChart3,
  CheckCircle,
} from "lucide-react";

export const HowRyzupIntegratesSection = () => {
  const features = [
    {
      icon: Table2,
      title: "AI Co-Worker Inside Google Sheets",
      description:
        "RyzUp Sheets installs as an extension and becomes your in-sheet AI co-worker.",
      benefits: [
        "Ask questions about your data",
        "Generate analysis and summaries",
        "Build reports and dashboards faster",
        "Use AI-powered formulas instead of complex manual logic",
      ],
      color: "brand-blue",
    },
    {
      icon: RefreshCw,
      title: "Automate Data Pulls From Xero",
      description:
        "Ryzup.ai connects to Xero so you can refresh accounting data directly into Sheets.",
      benefits: [
        "Download reports into live models",
        "Refresh data with a click instead of exports",
        "Build automated P&L, cash flow and performance dashboards",
      ],
      color: "brand-orange",
    },
    {
      icon: ShieldAlert,
      title: "Smart Error Detection",
      description:
        "The Smart Error Detection Agent scans your spreadsheets for broken formulas and suspicious values.",
      benefits: [
        "Fewer silent errors in your models",
        "Less time hunting for why a number looks wrong",
        "Stronger trust in reports you send to leadership",
      ],
      color: "brand-green",
    },
    {
      icon: Bot,
      title: "AI Agents For GL & Reconciliation",
      description:
        "Specialised agents for core finance workflows: GL analyser, Reconciliation, Bookkeeping, Auditor, and Xero agents.",
      benefits: [
        "Speed up reconciliations",
        "Compare data across systems",
        "Highlight unusual patterns or mis-posted entries",
        "Prepare cleaner, audit-ready schedules",
      ],
      color: "brand-blue",
    },
    {
      icon: Lock,
      title: "Anonymiser For Safe Data",
      description:
        "The Anonymiser feature protects sensitive information while you use AI.",
      benefits: [
        "Mask client and company identifiers",
        "Preserve structure and relationships in data",
        "Run AI analysis without exposing real identities",
      ],
      color: "brand-orange",
    },
    {
      icon: BarChart3,
      title: "AI CFO Views For Real-Time Insights",
      description:
        "AI CFO-style dashboards and insights for decision-ready visibility.",
      benefits: [
        "Cash flow summaries",
        "P&L forecasts",
        "Multi-currency views",
        "Auto-generated reports and dashboards",
      ],
      color: "brand-green",
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "brand-blue":
        return {
          bg: "bg-brand-blue/10",
          text: "text-brand-blue",
          border: "border-brand-blue/20",
        };
      case "brand-orange":
        return {
          bg: "bg-brand-orange/10",
          text: "text-brand-orange",
          border: "border-brand-orange/20",
        };
      case "brand-green":
        return {
          bg: "bg-brand-green/10",
          text: "text-brand-green",
          border: "border-brand-green/20",
        };
      default:
        return {
          bg: "bg-primary/10",
          text: "text-primary",
          border: "border-primary/20",
        };
    }
  };

  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How Ryzup.ai Integrates AI Into Your{" "}
            <span className="text-brand-orange">Finance Workflow</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Six powerful ways AI transforms your finance operations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const colors = getColorClasses(feature.color);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${colors.bg} rounded-2xl p-6 border ${colors.border} hover:shadow-lg transition-all duration-300`}
              >
                <div
                  className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center mb-4`}
                >
                  <feature.icon className={`w-6 h-6 ${colors.text}`} />
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle
                        className={`w-4 h-4 ${colors.text} flex-shrink-0 mt-0.5`}
                      />
                      <span className="text-foreground/80">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
