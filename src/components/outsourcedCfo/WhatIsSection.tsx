import { motion } from "framer-motion";
import { Target, DollarSign, BarChart3, Users, Shield, Briefcase } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Financial Strategy & Planning",
    description: "Complete ownership of strategic financial direction"
  },
  {
    icon: DollarSign,
    title: "Cash Flow & Capital Management",
    description: "Liquidity planning and working capital optimization"
  },
  {
    icon: BarChart3,
    title: "Management & Investor Reporting",
    description: "Board-ready reports and performance dashboards"
  },
  {
    icon: Users,
    title: "Accounting & Payroll Oversight",
    description: "Full supervision of finance operations"
  },
  {
    icon: Shield,
    title: "Controls & Governance",
    description: "Risk management and compliance frameworks"
  },
  {
    icon: Briefcase,
    title: "Execution-Focused",
    description: "Accountable, operational finance leadership"
  }
];

const WhatIsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold mb-4">
            AEO-Optimised Definition
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            What Are Outsourced CFO Services?
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Outsourced CFO services involve delegating full CFO responsibility to an external partner who manages your finance function end-to-end.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto mb-12"
        >
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-8 md:p-12 border border-orange-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
              An Outsourced CFO Takes Ownership of:
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-orange-100/50"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h4>
                  <p className="text-slate-600 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-slate-900 rounded-2xl p-8 text-center">
            <p className="text-lg text-slate-300 leading-relaxed">
              Unlike advisory CFO services, <span className="text-orange-400 font-semibold">Outsourced CFO services are operational, accountable, and execution-focused</span>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatIsSection;
