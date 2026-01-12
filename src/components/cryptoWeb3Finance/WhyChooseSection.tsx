import { motion } from "framer-motion";
import { Award, Globe, Users, Cpu, Layers, CheckCircle } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Web3 & Crypto Expertise",
    description: "Proven experience supporting Web3, blockchain, and crypto businesses"
  },
  {
    icon: Globe,
    title: "Singapore Regulatory Knowledge",
    description: "Strong understanding of Singapore's regulatory and financial environment"
  },
  {
    icon: Users,
    title: "CFO-Led Governance",
    description: "CFO-led governance—not just accounting"
  },
  {
    icon: Cpu,
    title: "AI-Enabled Dashboards",
    description: "AI-enabled dashboards for real-time asset visibility"
  },
  {
    icon: Layers,
    title: "Integrated Support",
    description: "Integrated support across CFO, finance teams, bookkeeping, and reporting"
  }
];

const WhyChooseSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-cyan-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium mb-4">
            Why Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Why Choose Growwth Partners for Crypto & Web3 Finance?
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            We help Web3 companies earn trust, credibility, and long-term sustainability
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
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center mb-4">
                <reason.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{reason.title}</h3>
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
              className="w-full max-w-md bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center mb-4">
                <reason.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{reason.title}</h3>
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
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-6 py-3 rounded-full">
            <CheckCircle className="w-5 h-5" />
            <span className="font-semibold">
              We help Web3 companies earn trust, credibility, and long-term sustainability.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
