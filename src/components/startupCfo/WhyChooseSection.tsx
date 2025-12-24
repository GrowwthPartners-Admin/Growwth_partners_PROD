import { motion } from "framer-motion";
import { 
  Rocket, 
  TrendingUp, 
  Globe, 
  Cpu, 
  Layers,
  Target 
} from "lucide-react";

const reasons = [
  {
    icon: Rocket,
    title: "Startup Expertise",
    description: "Extensive experience with startups across SaaS, tech, fintech, ecommerce, and marketplaces"
  },
  {
    icon: TrendingUp,
    title: "Investor Alignment",
    description: "Strong understanding of investor expectations and funding dynamics"
  },
  {
    icon: Globe,
    title: "Singapore Expertise",
    description: "Deep knowledge of Singapore's regulatory and reporting environment"
  },
  {
    icon: Cpu,
    title: "AI-Enabled Insights",
    description: "AI-enabled dashboards for real-time financial insights"
  },
  {
    icon: Layers,
    title: "Integrated Partner",
    description: "One partner for CFO services, finance teams, bookkeeping, and payroll"
  },
  {
    icon: Target,
    title: "Decision-Grade Clarity",
    description: "We focus on decision-grade financial clarity, not just reports"
  }
];

const WhyChooseSection = () => {
  return (
    <section className="py-20 md:py-28 bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium mb-4">
              Why Growwth Partners
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Why Choose Growwth Partners for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">
                Startup CFO Services?
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-orange-500/50 hover:bg-white/10 transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-lg shadow-orange-500/25">
                    <reason.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    {reason.description}
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

export default WhyChooseSection;
