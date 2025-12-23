import { motion } from "framer-motion";
import { Award, Globe, Users, Cpu, Layers, CheckCircle } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "SaaS & Platform Expertise",
    description:
      "Experience across SaaS, platforms, marketplaces, and product-led companies",
  },
  {
    icon: Globe,
    title: "Singapore Ecosystem",
    description:
      "Strong understanding of Singapore's technology ecosystem and regulatory environment",
  },
  {
    icon: Users,
    title: "CFO-Led Approach",
    description: "CFO-led approach focused on growth and capital efficiency",
  },
  {
    icon: Cpu,
    title: "AI-Enabled Dashboards",
    description: "AI-enabled dashboards for real-time insights and decision-making",
  },
  {
    icon: Layers,
    title: "Integrated Services",
    description: "Integrated services across CFO, finance teams, bookkeeping, and payroll",
  },
];

const WhyChooseSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">
            Why Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Why Choose Growwth Partners for Tech Business Finance?
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            We help tech companies move from fast growth to controlled, scalable growth
          </p>
        </motion.div>

        {/* First row: 3 cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-8xl mx-auto mb-10">
          {reasons.slice(0, 3).map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center mb-4">
                <reason.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {reason.title}
              </h3>
              <p className="text-slate-600">{reason.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Second row: 2 cards centered */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 max-w-6xl mx-auto">
          {reasons.slice(3).map((reason, index) => (
            <motion.div
              key={index + 3}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index + 3) * 0.1 }}
              className="w-full max-w-md bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center mb-4">
                <reason.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {reason.title}
              </h3>
              <p className="text-slate-600">{reason.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-3 rounded-full">
            <CheckCircle className="w-5 h-5" />
            <span className="font-semibold">
              We help tech companies move from fast growth to controlled, scalable growth.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
