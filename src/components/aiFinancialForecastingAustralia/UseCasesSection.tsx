import { motion } from "framer-motion";
import { Users, TrendingDown, DollarSign, Bot } from "lucide-react";

const useCases = [
  {
    icon: Users,
    title: "Can we afford these hires?",
    description: "Add roles, salaries, and start dates. Ryzup.ai recalculates burn and runway so you decide with confidence.",
    aiResponse: "Based on 3 new hires at $85K avg salary starting Q2, your runway decreases from 18 to 14 months. Recommendation: Phase hires across Q2-Q3 to maintain 16+ months runway.",
    color: "brand-green",
  },
  {
    icon: TrendingDown,
    title: "What if revenue slows for a quarter?",
    description: "Dial down the topline by 10–30 percent and see the levers that protect cash and margin.",
    aiResponse: "A 20% revenue decline in Q3 reduces EBITDA by $45K. To maintain margins: reduce marketing by 15% or delay 1 hire. Cash position remains healthy at $320K.",
    color: "brand-blue",
  },
  {
    icon: DollarSign,
    title: "Should we increase paid spend?",
    description: "Increase budget, apply expected CAC and payback. See how the plan affects cash and when it breaks even.",
    aiResponse: "Increasing paid spend by $20K/month with CAC of $150 breaks even in 4.5 months. Expected 12-month ROI: 2.8x. Cash impact: -$45K in Q1, +$85K by Q4.",
    color: "brand-orange",
  },
];

const getColorClasses = (color: string) => {
  switch (color) {
    case "brand-green":
      return {
        bg: "bg-brand-green/10",
        text: "text-brand-green",
        border: "border-brand-green/20",
        gradient: "from-brand-green/5 to-brand-green/10",
      };
    case "brand-blue":
      return {
        bg: "bg-brand-blue/10",
        text: "text-brand-blue",
        border: "border-brand-blue/20",
        gradient: "from-brand-blue/5 to-brand-blue/10",
      };
    case "brand-orange":
      return {
        bg: "bg-brand-orange/10",
        text: "text-brand-orange",
        border: "border-brand-orange/20",
        gradient: "from-brand-orange/5 to-brand-orange/10",
      };
    default:
      return {
        bg: "bg-brand-green/10",
        text: "text-brand-green",
        border: "border-brand-green/20",
        gradient: "from-brand-green/5 to-brand-green/10",
      };
  }
};

export const UseCasesSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Example <span className="text-brand-orange">Use Cases</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how AI answers real financial scenarios in seconds
          </p>
        </motion.div>

        <div className="space-y-8">
          {useCases.map((useCase, index) => {
            const colors = getColorClasses(useCase.color);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-6 lg:p-8 rounded-2xl border ${colors.border} bg-gradient-to-br ${colors.gradient}`}
              >
                <div className="grid lg:grid-cols-2 gap-6 items-start">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center`}>
                        <useCase.icon className={`w-6 h-6 ${colors.text}`} />
                      </div>
                      <h3 className="text-xl font-bold">{useCase.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{useCase.description}</p>
                  </div>

                  {/* AI Response Mock */}
                  <div className="bg-background rounded-xl border shadow-sm p-4">
                    <div className="flex items-center gap-2 mb-3 pb-3 border-b">
                      <div className={`w-8 h-8 ${colors.bg} rounded-lg flex items-center justify-center`}>
                        <Bot className={`w-4 h-4 ${colors.text}`} />
                      </div>
                      <span className="text-sm font-medium">Ryzup.ai Analysis</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {useCase.aiResponse}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
