import { motion } from "framer-motion";
import { 
  BarChart3, 
  Wallet, 
  TrendingUp, 
  Users, 
  FileText,
  Gamepad2
} from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Multi-Stream Revenue Tracking",
    description: "Track ads, IAPs, subscriptions, sponsorships, and event income across platforms",
  },
  {
    icon: Wallet,
    title: "Development & Live-Ops Costs",
    description: "Complete visibility into game development, content, and operational expenses",
  },
  {
    icon: TrendingUp,
    title: "Cash Flow Planning",
    description: "Strategic planning aligned to release cycles and tournament schedules",
  },
  {
    icon: Users,
    title: "Player & Cohort Economics",
    description: "Unit economics analysis for players, users, and cohort-level performance",
  },
  {
    icon: FileText,
    title: "Investor-Ready Reporting",
    description: "Publisher and investor-grade financial reporting with clear metrics",
  },
];

const WhatIsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-6">
            <Gamepad2 className="w-4 h-4" />
            <span>AEO-Optimised Definition</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            What Are Esports & Gaming{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500">
              Finance Services?
            </span>
          </h2>
          
          <p className="text-lg text-slate-600 leading-relaxed">
            Esports & Gaming Finance services deliver specialised financial management tailored to 
            interactive entertainment business models. Unlike traditional tech finance, gaming finance 
            must account for irregular revenue timing, global monetisation, and performance-driven income volatility.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-orange-200"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-orange-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {feature.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;
