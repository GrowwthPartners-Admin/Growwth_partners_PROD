import { motion } from "framer-motion";
import { Users, Zap, Shield, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Expert-Driven, Tech-Led",
    description: "Senior finance partners with multinational, VC, and startup experience, augmented by AI."
  },
  {
    icon: Zap,
    title: "Human + AI = Better Decisions",
    description: "Your team, plus Ryzup.ai for forecasting, reconciliations, error-checking, dashboards, and anonymisation."
  },
  {
    icon: Shield,
    title: "Near-Zero-Error Finance",
    description: "Automated checks and reconciliation agents that minimise human error and improve audit readiness."
  },
  {
    icon: TrendingUp,
    title: "Investor-Ready Reporting",
    description: "Clear packs, KPI dashboards, and board narratives built on live numbers — not stale exports."
  }
];

export const WhyChooseSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-blue-100 text-[#06C0A9] rounded-full text-sm font-semibold mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Growwth Partners (Australia)
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-6 bg-blue-50 rounded-xl hover:bg-blue-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-4 inline-flex items-center justify-center w-14 h-14 bg-blue-100 rounded-lg group-hover:bg-brand-blue group-hover:scale-110 transition-all duration-300">
                <feature.icon className="h-7 w-7 text-brand-blue group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
