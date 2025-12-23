import { motion } from "framer-motion";
import { 
  Brain, 
  Globe, 
  Target, 
  Cpu, 
  Layers,
  Shield,
  CheckCircle
} from "lucide-react";

const reasons = [
  {
    icon: Brain,
    title: "CFOs experienced in data-driven finance transformation",
    description: "Leaders who understand both finance and technology"
  },
  {
    icon: Globe,
    title: "Deep understanding of Singapore's regulatory environment",
    description: "Local expertise for compliance and governance"
  },
  {
    icon: Target,
    title: "Proven AI finance workflows",
    description: "Aligned to real business outcomes, not just technology"
  },
  {
    icon: Layers,
    title: "Integrated support across services",
    description: "CFO services, finance teams, bookkeeping, and payroll"
  },
  {
    icon: Shield,
    title: "Focus on insight and governance",
    description: "Not just tools—actionable intelligence and execution"
  }
];

const WhyChooseSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium mb-4">
            Why Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Choose Growwth Partners for AI CFO Services?
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            We ensure AI enhances decision-making rather than creating noise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-orange-500/50 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:from-orange-500 group-hover:to-amber-500 transition-all">
                <reason.icon className="w-7 h-7 text-orange-400 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors">
                {reason.title}
              </h3>
              <p className="text-slate-400 text-sm">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: "50+", label: "AI-Enabled Clients" },
            { value: "95%", label: "Reporting Accuracy" },
            { value: "10x", label: "Faster Insights" },
            { value: "SGD 2M+", label: "Savings Delivered" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-slate-800/30 rounded-xl border border-slate-700/30">
              <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400 mb-1">
                {stat.value}
              </p>
              <p className="text-slate-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
