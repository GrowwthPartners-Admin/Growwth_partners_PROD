import { motion } from "framer-motion";
import { DollarSign, Shield, Zap, TrendingUp } from "lucide-react";

const WhyFractionalSection = () => {
  const advantages = [
    {
      icon: DollarSign,
      title: "60–70% Lower Cost",
      description: "Get CFO-level expertise at a fraction of full-time salary costs",
      stat: "60-70%",
      statLabel: "Cost Savings"
    },
    {
      icon: Shield,
      title: "No Employment Risk",
      description: "No long-term employment commitments or obligations",
      stat: "Zero",
      statLabel: "HR Overhead"
    },
    {
      icon: Zap,
      title: "Immediate Access",
      description: "Start with senior expertise right away, no lengthy hiring process",
      stat: "Instant",
      statLabel: "Availability"
    },
    {
      icon: TrendingUp,
      title: "Scalable Engagement",
      description: "Adjust involvement as your business grows and evolves",
      stat: "Flexible",
      statLabel: "Model"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Why Fractional CFO Over{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
              Full-Time CFO?
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            The smart choice for growing businesses that need strategic financial leadership
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-slate-50 to-orange-50 rounded-2xl p-8 border border-slate-100 hover:border-orange-200 transition-all duration-300 h-full">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/20">
                      <advantage.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-orange-500">
                        {advantage.stat}
                      </div>
                      <div className="text-sm text-slate-500">
                        {advantage.statLabel}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {advantage.title}
                  </h3>
                  <p className="text-slate-600">
                    {advantage.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyFractionalSection;
