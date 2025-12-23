import { motion } from "framer-motion";
import { 
  Users, 
  BarChart3, 
  TrendingUp, 
  FileCheck, 
  Zap,
  ArrowUpRight,
  CheckCircle
} from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Dedicated CFO with AI-enabled workflows",
    description: "Expert financial leadership powered by cutting-edge AI tools"
  },
  {
    icon: BarChart3,
    title: "Real-time financial dashboards",
    description: "Live visibility into all key financial metrics"
  },
  {
    icon: TrendingUp,
    title: "Predictive cash flow and forecasting models",
    description: "AI-powered predictions for better planning"
  },
  {
    icon: FileCheck,
    title: "Automated reporting and performance tracking",
    description: "Eliminate manual reporting processes"
  },
  {
    icon: Zap,
    title: "Faster, data-backed decision-making",
    description: "Make confident decisions with real-time insights"
  },
  {
    icon: ArrowUpRight,
    title: "Scalable solution as complexity increases",
    description: "Finance systems that grow with your business"
  }
];

const WhatYouGetSection = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">
            Deliverables
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            What You Get with Our AI CFO Services
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            This is not just automation—it is augmented financial leadership
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600 text-sm">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-orange-500/20 rounded-xl flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-orange-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">
                  Augmented Financial Leadership
                </h3>
                <p className="text-slate-400">
                  AI + Human expertise = Superior outcomes
                </p>
              </div>
            </div>
            <div className="flex gap-4 text-center">
              <div className="px-6 py-3 bg-slate-800 rounded-xl">
                <p className="text-2xl font-bold text-orange-400">95%</p>
                <p className="text-xs text-slate-400">Faster Reporting</p>
              </div>
              <div className="px-6 py-3 bg-slate-800 rounded-xl">
                <p className="text-2xl font-bold text-orange-400">3x</p>
                <p className="text-xs text-slate-400">Better Accuracy</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatYouGetSection;
