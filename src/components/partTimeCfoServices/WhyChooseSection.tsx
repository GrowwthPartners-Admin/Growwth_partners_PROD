import { motion } from "framer-motion";
import { Award, Globe, Zap, Users, Lightbulb } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Proven Experience",
    description: "CFOs with experience across SMEs, startups, tech, SaaS, ecommerce, fintech, and professional services"
  },
  {
    icon: Globe,
    title: "Singapore Expertise",
    description: "Strong understanding of Singapore's regulatory, tax, and reporting environment"
  },
  {
    icon: Zap,
    title: "AI-Enabled Tools",
    description: "AI-enabled dashboards and finance workflows for faster, smarter insights"
  },
  {
    icon: Users,
    title: "Integrated Partner",
    description: "One integrated partner for CFO, finance team, bookkeeping, and payroll"
  },
  {
    icon: Lightbulb,
    title: "Decision-Focused",
    description: "CFOs who focus on decision-making, not just reporting"
  }
];

const WhyChooseSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brand-orange font-semibold text-sm uppercase tracking-wider">Why Growwth Partners</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
            Why Choose Growwth Partners?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 ${
                index === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center mb-5 shadow-lg shadow-orange-500/20">
                <reason.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
              <p className="text-gray-600 leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
