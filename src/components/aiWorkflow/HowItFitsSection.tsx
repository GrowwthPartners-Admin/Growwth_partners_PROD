import { motion } from "framer-motion";
import { Link2, Zap, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const HowItFitsSection = () => {
  const steps = [
    {
      icon: Link2,
      step: "01",
      title: "Connect",
      description: "Install RyzUp Sheets in Google Sheets and connect Xero or other data sources."
    },
    {
      icon: Zap,
      step: "02",
      title: "Automate",
      description: "Use the AI assistant, error detector and agents to automate reports, checks and reconciliations."
    },
    {
      icon: TrendingUp,
      step: "03",
      title: "Scale",
      description: "Add more workflows over time such as forecasting, board packs and multi-entity reporting using the same AI finance automation foundation."
    }
  ];

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
            How Ryzup.ai Fits Into Your{" "}
            <span className="text-brand-green">Existing Stack</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple three-step integration with your current tools
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {steps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-card rounded-2xl p-8 border border-border/50 hover:border-brand-green/30 hover:shadow-lg transition-all duration-300 h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-brand-green/10 rounded-2xl flex items-center justify-center">
                    <item.icon className="w-7 h-7 text-brand-green" />
                  </div>
                  <span className="text-4xl font-bold text-brand-green/20">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
              
              {/* Connector arrow (hidden on last item and mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-8 h-8 text-brand-green/30" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link to="/contact-us">
            <Button size="lg" className="bg-brand-orange hover:bg-brand-orange/90 text-white gap-2">
              Get Started Today
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
