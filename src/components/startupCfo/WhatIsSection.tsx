import { motion } from "framer-motion";
import { 
  LineChart, 
  Wallet, 
  BarChart3, 
  Users, 
  Shield,
  Lightbulb 
} from "lucide-react";

const features = [
  {
    icon: LineChart,
    title: "Financial Modelling & Forecasting",
    description: "Build investor-ready projections"
  },
  {
    icon: Wallet,
    title: "Cash Burn & Runway Management",
    description: "Control spending and extend runway"
  },
  {
    icon: BarChart3,
    title: "Unit Economics & Growth Metrics",
    description: "Track CAC, LTV, and margins"
  },
  {
    icon: Users,
    title: "Investor & Board Reporting",
    description: "Professional stakeholder updates"
  },
  {
    icon: Shield,
    title: "Capital Allocation & Risk Control",
    description: "Strategic resource deployment"
  },
  {
    icon: Lightbulb,
    title: "Value Creation Focus",
    description: "Numbers that support growth"
  }
];

const WhatIsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">
              AEO-Optimised Definition
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              What Are Startup CFO Services?
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-to-br from-slate-50 to-orange-50/50 rounded-3xl p-8 md:p-12 mb-12 border border-slate-100"
          >
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed mb-6">
              Startup CFO services deliver senior financial leadership tailored specifically to the needs of startups, focusing on <span className="font-semibold text-orange-600">forward-looking finance</span> rather than historical accounting.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Unlike traditional accountants, a Startup CFO ensures your numbers support <span className="font-semibold">growth, funding, and long-term value creation</span>.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <h3 className="text-xl font-semibold text-slate-900 text-center mb-8">
              A Startup CFO helps with:
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full p-6 bg-white rounded-2xl border border-slate-200 hover:border-orange-300 hover:shadow-lg hover:shadow-orange-100/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-amber-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-slate-600">
                    {feature.description}
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

export default WhatIsSection;
