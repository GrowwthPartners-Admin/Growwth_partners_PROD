import { motion } from "framer-motion";
import { Cloud, Globe, Building2, Link, Settings, RefreshCw, BarChart3, FileText } from "lucide-react";

const features = [
  {
    icon: Cloud,
    text: "Works with cloud accounting and Google Sheets",
  },
  {
    icon: Globe,
    text: "Supports multi-entity and multi-currency setups",
  },
  {
    icon: Building2,
    text: "Suits startups, SMEs, and scale-ups that need fast, credible forecasts",
  },
];

const steps = [
  {
    number: "01",
    title: "Connect",
    description: "Sync accounting data and key spreadsheets.",
    icon: Link,
    color: "brand-green",
  },
  {
    number: "02",
    title: "Model",
    description: "Ryzup.ai generates predictive models and a baseline forecast.",
    icon: Settings,
    color: "brand-blue",
  },
  {
    number: "03",
    title: "Simulate",
    description: "Build scenarios, compare outcomes, and choose the plan to execute.",
    icon: RefreshCw,
    color: "brand-orange",
  },
  {
    number: "04",
    title: "Review",
    description: "Share a clean forecast pack for leadership and investor updates.",
    icon: FileText,
    color: "brand-green",
  },
];

const getColorClasses = (color: string) => {
  switch (color) {
    case "brand-green":
      return {
        bg: "bg-brand-green/10",
        text: "text-brand-green",
        border: "border-brand-green",
      };
    case "brand-blue":
      return {
        bg: "bg-brand-blue/10",
        text: "text-brand-blue",
        border: "border-brand-blue",
      };
    case "brand-orange":
      return {
        bg: "bg-brand-orange/10",
        text: "text-brand-orange",
        border: "border-brand-orange",
      };
    default:
      return {
        bg: "bg-brand-green/10",
        text: "text-brand-green",
        border: "border-brand-green",
      };
  }
};

export const BuiltForSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Built for Australia */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Built For <span className="text-brand-green">Australia</span>
            </h2>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-brand-green/5 rounded-xl border border-brand-green/20"
                >
                  <div className="w-10 h-10 bg-brand-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-brand-green" />
                  </div>
                  <p className="text-foreground pt-2">{feature.text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* How It Works */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              How It <span className="text-brand-blue">Works</span>
            </h2>
            <div className="space-y-4">
              {steps.map((step, index) => {
                const colors = getColorClasses(step.color);
                return (
                  <div
                    key={index}
                    className={`flex items-start gap-4 p-4 rounded-xl border ${colors.border}/20 bg-gradient-to-r from-background to-muted/30`}
                  >
                    <div className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <step.icon className={`w-6 h-6 ${colors.text}`} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-sm font-bold ${colors.text}`}>{step.number}</span>
                        <h3 className="font-bold">{step.title}</h3>
                      </div>
                      <p className="text-muted-foreground text-sm">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
