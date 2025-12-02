import { motion } from "framer-motion";
import { Link2, Zap, TrendingUp, CheckCircle2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HowItFitsSection = () => {
  const steps = [
    {
      icon: Link2,
      step: "01",
      title: "Connect",
      description: "Install RyzUp Sheets in Google Sheets and connect Xero or other data sources.",
      features: ["Google Sheets Extension", "Xero Integration", "Multi-source Data"]
    },
    {
      icon: Zap,
      step: "02",
      title: "Automate",
      description: "Use the AI assistant, error detector and agents to automate reports, checks and reconciliations.",
      features: ["AI-Powered Reports", "Error Detection", "Auto Reconciliation"]
    },
    {
      icon: TrendingUp,
      step: "03",
      title: "Scale",
      description: "Add more workflows over time such as forecasting, board packs and multi-entity reporting.",
      features: ["Forecasting Tools", "Board Packs", "Multi-Entity Support"]
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-brand-blue/5 via-background to-brand-green/5 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-brand-green/10 rounded-full text-sm font-medium text-brand-green mb-4">
            <Zap className="w-4 h-4" />
            Simple Integration
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            How Ryzup.ai Fits Into Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-green">
              Existing Stack
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to transform your finance workflow with AI-powered automation
          </p>
        </motion.div>

        {/* Steps with timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-brand-blue via-brand-green to-brand-orange transform -translate-y-1/2 z-0 rounded-full" />

          <div className="grid lg:grid-cols-3 gap-8 relative z-10">
            {steps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="bg-card rounded-3xl p-8 border border-border/50 hover:border-brand-green/50 hover:shadow-2xl hover:shadow-brand-green/10 transition-all duration-500 h-full flex flex-col">
                  {/* Step number badge */}
                  <div className="absolute -top-4 left-8">
                    <div className="w-10 h-10 bg-gradient-to-br from-brand-blue to-brand-green rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                      {item.step}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-green/20 to-brand-blue/20 rounded-2xl flex items-center justify-center mb-6 mt-4 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-8 h-8 text-brand-green" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground mb-6 flex-grow">{item.description}</p>

                  {/* Features list */}
                  <div className="space-y-2">
                    {item.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-brand-green flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-brand-blue/10 via-brand-green/10 to-brand-orange/10 rounded-3xl p-8 md:p-12 max-w-3xl mx-auto border border-border/50">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Finance Workflow?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Install RyzUp Sheets today and experience AI-powered finance automation in minutes.
            </p>
            <a 
              href="https://workspace.google.com/u/0/marketplace/app/ryzup_sheets/1047771589087?flow_type=2" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-brand-orange hover:bg-brand-orange/90 text-white gap-2">
                Get Started Today
                <ExternalLink className="w-4 h-4" />
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
