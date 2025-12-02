import { motion } from "framer-motion";
import { Users, TrendingDown, Megaphone, ArrowRight } from "lucide-react";

export const UseCasesSection = () => {
  const useCases = [
    {
      icon: Users,
      title: "Can We Afford These Hires?",
      description: "Add your planned roles, salaries, and start dates. RyzUp shows:",
      outcomes: [
        "Impact on monthly burn",
        "New runway length",
        "When you need your next funding round"
      ],
      color: "brand-green"
    },
    {
      icon: TrendingDown,
      title: "What If Revenue Slows For 3 Months?",
      description: "Dial down revenue by 15 to 30 percent in your predictive finance model. See:",
      outcomes: [
        "How long your cash will last",
        "Which cost levers protect your runway",
        "When to switch to a leaner mode"
      ],
      color: "brand-blue"
    },
    {
      icon: Megaphone,
      title: "Should We Increase Marketing Spend?",
      description: "Increase paid spend in your AI-powered forecasting view. Watch:",
      outcomes: [
        "CAC, LTV, and payback period",
        "Revenue forecast under different performance assumptions",
        "Break-even point for the additional spend"
      ],
      color: "brand-orange"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-brand-orange/5 via-background to-brand-green/5">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Example Forecasting{" "}
            <span className="text-brand-orange">Use Cases</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every "what if" becomes a clear "here is what happens".
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 lg:p-8 shadow-lg border border-border hover:shadow-xl transition-all group"
            >
              <div className={`w-14 h-14 bg-${useCase.color}/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <useCase.icon className={`w-7 h-7 text-${useCase.color}`} />
              </div>
              <h3 className="text-lg font-semibold mb-3">{useCase.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{useCase.description}</p>
              <ul className="space-y-2">
                {useCase.outcomes.map((outcome, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <ArrowRight className={`w-4 h-4 text-${useCase.color} mt-0.5 shrink-0`} />
                    <span className="text-muted-foreground">{outcome}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
