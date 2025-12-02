import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Bot, LineChart, GitBranch, RefreshCw, ArrowRight } from "lucide-react";

export const WhatRyzupDoesSection = () => {
  const features = [
    {
      icon: Bot,
      title: "Automated AI Forecasting for Singapore Businesses",
      description: "Uses your historical revenue, cost, and cash data. Learns seasonality and spending behaviour. Produces forward-looking projections in minutes.",
      color: "brand-green"
    },
    {
      icon: LineChart,
      title: "Predictive Finance Models You Can Trust",
      description: "Build predictive finance models for revenue, margins, and cash. Layer in hiring plans, pricing changes, new markets, or ad spend. See the financial impact instantly.",
      color: "brand-blue"
    },
    {
      icon: GitBranch,
      title: "Scenario Modelling Without Spreadsheet Chaos",
      description: "Create scenarios like 'Aggressive Growth', 'Base Case', 'Lean Mode'. Compare side by side: revenue, burn, runway, EBITDA. Export ready-to-share views.",
      color: "brand-orange"
    },
    {
      icon: RefreshCw,
      title: "Live Sync With Your Existing Tools",
      description: "Pulls from accounting and performance tools you already use. Updates forecasts as new data comes in. Keeps one source of truth for all your numbers.",
      color: "brand-green"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-brand-green/5 via-background to-brand-blue/5">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What RyzUp's AI Forecasting{" "}
            <span className="text-brand-green">Actually Does</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Think of RyzUp as your forecasting autopilot. You decide the direction. AI handles the heavy lifting.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 lg:p-8 shadow-lg border border-border hover:shadow-xl transition-shadow"
            >
              <div className={`w-14 h-14 bg-${feature.color}/10 rounded-xl flex items-center justify-center mb-4`}>
                <feature.icon className={`w-7 h-7 text-${feature.color}`} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a href="https://ryzup.ai" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-brand-blue hover:bg-brand-blue/90 text-white">
              Try AI Forecasting On Your Data
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
