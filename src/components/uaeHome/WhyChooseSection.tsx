import { motion } from "framer-motion";
import { Users, Zap, Target, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Expert-led, tech-enabled",
    description: "Finance leaders who understand UAE business, supported by AI that lives inside your existing tools"
  },
  {
    icon: Zap,
    title: "Human judgement plus AI automation",
    description: "People for decisions, AI for checks, reconciliations, and clear explanations"
  },
  {
    icon: Target,
    title: "Near-zero-error operations",
    description: "Automated spreadsheet checks and reconciliation agents that reduce mistakes and improve audit readiness"
  },
  {
    icon: TrendingUp,
    title: "Board and investor ready",
    description: "Live KPIs, P&L and cash visibility, scenario plans, and concise narratives for leadership"
  }
];

export const WhyChooseSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Why Choose Growwth Partners (UAE)
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Combining deep UAE market expertise with cutting-edge AI technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-xl shadow hover:shadow-lg transition-shadow border border-orange-100"
              >
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
