import { motion } from "framer-motion";
import { Link2, Brain, SlidersHorizontal, Users, DollarSign, BarChart3 } from "lucide-react";

export const InteractiveDesignSection = () => {
  const steps = [
    {
      step: "01",
      icon: Link2,
      title: "Connect Your Data",
      description: "Connect your accounting system and key spreadsheets. RyzUp ingests your historical data and cleans it, ready for AI financial forecasting in Singapore within a single workspace.",
      color: "brand-green"
    },
    {
      step: "02",
      icon: Brain,
      title: "Generate Predictive Finance Models",
      description: "RyzUp automatically builds predictive finance models for revenue, costs, and cash flow. No formulas to maintain. No fragile Excel logic.",
      color: "brand-blue"
    },
    {
      step: "03",
      icon: SlidersHorizontal,
      title: "Drag, Drop, and Stress Test",
      description: "Adjust hiring, spend, and pricing with simple controls. Watch your runway, cash, and profitability adjust in real time.",
      color: "brand-orange"
    }
  ];

  const adjustments = [
    { icon: Users, text: "Add 5 new hires in Q3" },
    { icon: DollarSign, text: "Increase ad spend by 20 percent" },
    { icon: BarChart3, text: "Change your discounting strategy" }
  ];

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
            Interactive By Design,{" "}
            <span className="text-brand-green">Not Just Another Static Report</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-green via-brand-blue to-brand-orange transform -translate-x-1/2" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`lg:grid lg:grid-cols-2 lg:gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={`${index % 2 === 1 ? 'lg:order-2 lg:pl-12' : 'lg:pr-12'}`}>
                  <div className="bg-card rounded-2xl p-8 shadow-lg border border-border relative">
                    <div className={`absolute -top-4 ${index % 2 === 1 ? 'lg:-left-4' : 'lg:-right-4'} w-10 h-10 bg-${step.color} rounded-full flex items-center justify-center text-white font-bold text-sm hidden lg:flex`}>
                      {step.step}
                    </div>
                    <div className={`w-14 h-14 bg-${step.color}/10 rounded-xl flex items-center justify-center mb-4`}>
                      <step.icon className={`w-7 h-7 text-${step.color}`} />
                    </div>
                    <div className="inline-block px-3 py-1 bg-muted rounded-full text-sm font-medium mb-3 lg:hidden">
                      Step {step.step}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>

                    {index === 2 && (
                      <div className="mt-6 space-y-3">
                        {adjustments.map((adj, i) => (
                          <div key={i} className="flex items-center gap-3 text-sm">
                            <div className="w-8 h-8 bg-brand-orange/10 rounded-lg flex items-center justify-center">
                              <adj.icon className="w-4 h-4 text-brand-orange" />
                            </div>
                            <span className="text-muted-foreground">{adj.text}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className={`hidden lg:block ${index % 2 === 1 ? 'lg:order-1' : ''}`} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
