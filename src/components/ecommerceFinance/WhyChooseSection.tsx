import { motion } from "framer-motion";
import { 
  Award, 
  Globe, 
  Users, 
  Cpu, 
  Briefcase,
  TrendingUp
} from "lucide-react";

const WhyChooseSection = () => {
  const reasons = [
    {
      icon: Award,
      title: "Deep Ecommerce Expertise",
      description: "Experience across D2C, ecommerce, and marketplace businesses",
    },
    {
      icon: Globe,
      title: "Singapore & Cross-Border",
      description: "Strong understanding of Singapore-based and cross-border ecommerce operations",
    },
    {
      icon: Users,
      title: "CFO-Led Strategy",
      description: "CFO-led finance strategy combined with hands-on execution support",
    },
    {
      icon: Cpu,
      title: "AI-Enabled Dashboards",
      description: "Real-time visibility through AI-powered financial dashboards",
    },
    {
      icon: Briefcase,
      title: "Integrated Services",
      description: "End-to-end support across CFO, finance teams, bookkeeping, and payroll",
    },
    {
      icon: TrendingUp,
      title: "Profitable Growth Focus",
      description: "We help ecommerce founders move from revenue growth to profitable growth",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-orange-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-orange-500/20 border border-orange-400/30 text-orange-300 rounded-full text-sm font-semibold mb-4">
              Why Growwth Partners
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Why Choose Growwth Partners for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">
                Ecommerce Finance?
              </span>
            </h2>
          </motion.div>

          {/* Reasons Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-6 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 hover:border-orange-400/30 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="p-3 bg-orange-500/20 rounded-xl inline-block mb-4 group-hover:bg-orange-500/30 transition-colors">
                  <reason.icon className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="font-bold text-white mb-2 group-hover:text-orange-300 transition-colors">
                  {reason.title}
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
