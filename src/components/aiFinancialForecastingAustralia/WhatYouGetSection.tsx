import { motion } from "framer-motion";
import { Zap, GitBranch, RefreshCw, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Automated Forecasts",
    description: "Connect core data and let Ryzup.ai build forward views for revenue, costs, margins, and cash. No complex formulas to maintain.",
    color: "brand-green",
  },
  {
    icon: GitBranch,
    title: "Scenario Simulations",
    description: "Create best case, base case, and lean plans. Adjust hiring, pricing, and marketing spend and see the impact instantly on burn, runway, and EBITDA.",
    color: "brand-blue",
  },
  {
    icon: RefreshCw,
    title: "Real-Time Refresh",
    description: "Keep one source of truth. Forecasts update as new actuals arrive, so leadership reviews are always based on the latest numbers.",
    color: "brand-orange",
  },
  {
    icon: BarChart3,
    title: "Investor-Ready Outputs",
    description: "Clear charts, tables, and narrative you can share with boards and investors without rebuilding decks every month.",
    color: "brand-green",
  },
];

const getColorClasses = (color: string) => {
  switch (color) {
    case "brand-green":
      return {
        bg: "bg-brand-green/10",
        text: "text-brand-green",
        border: "border-brand-green/20",
      };
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
    default:
      return {
        bg: "bg-brand-green/10",
        text: "text-brand-green",
        border: "border-brand-green/20",
      };
  }
};

export const WhatYouGetSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What You Get With <span className="text-brand-blue">Ryzup</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful AI-driven forecasting tools designed for Australian businesses
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const colors = getColorClasses(feature.color);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-6 rounded-2xl border ${colors.border} bg-gradient-to-br from-background to-muted/30 hover:shadow-lg transition-all duration-300`}
              >
                <div className={`w-14 h-14 ${colors.bg} rounded-xl flex items-center justify-center mb-4`}>
                  <feature.icon className={`w-7 h-7 ${colors.text}`} />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
