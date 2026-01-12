import { motion } from "framer-motion";
import { Rocket, Globe, Users, Cpu, Zap, CheckCircle } from "lucide-react";

const reasons = [
  {
    icon: Rocket,
    title: "Startup Expertise",
    description: "Extensive experience working with early- and growth-stage startups",
  },
  {
    icon: Globe,
    title: "Singapore Ecosystem",
    description: "Strong understanding of Singapore's startup ecosystem and regulations",
  },
  {
    icon: Users,
    title: "Integrated Support",
    description: "Integrated support across CFO services, finance teams, bookkeeping, and payroll",
  },
  {
    icon: Cpu,
    title: "AI-Enabled Insights",
    description: "AI-enabled dashboards for real-time insights",
  },
  {
    icon: Zap,
    title: "Execution-Focused",
    description: "Practical, execution-focused approach",
  },
];

const WhyChooseSection = () => {
  const firstRow = reasons.slice(0, 3);
  const secondRow = reasons.slice(3);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-8xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-orange-500 font-bold text-md uppercase tracking-wider">
              Why Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
              Why Choose Growwth Partners for Startup Finance?
            </h2>
          </motion.div>

          {/* Row 1 – 3 cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {firstRow.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-gradient-to-br from-slate-50 to-teal-50 rounded-2xl p-6 border border-teal-100 hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-400 rounded-xl flex items-center justify-center mb-4">
                  <reason.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Row 2 – 2 cards centered */}
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            {secondRow.map((reason, index) => (
              <motion.div
                key={`second-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (3 + index) * 0.1, duration: 0.5 }}
                className="w-full max-w-md bg-gradient-to-br from-slate-50 to-teal-50 rounded-2xl p-6 border border-teal-100 hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-400 rounded-xl flex items-center justify-center mb-4">
                  <reason.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
