import React from "react";
import { motion } from "framer-motion";
import { Award, Globe, TrendingUp, Cpu, Puzzle, ArrowRight } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Deep Industry Experience",
    description: "Experience across consulting, agency, IT, and advisory firms"
  },
  {
    icon: Globe,
    title: "Singapore Expertise",
    description: "Strong understanding of Singapore's professional services landscape"
  },
  {
    icon: TrendingUp,
    title: "CFO-Led Approach",
    description: "CFO-led approach focused on margins and cash flow"
  },
  {
    icon: Cpu,
    title: "AI-Enabled Insights",
    description: "AI-enabled dashboards for real-time insights"
  },
  {
    icon: Puzzle,
    title: "Integrated Support",
    description: "Integrated support across CFO, finance teams, bookkeeping, and payroll"
  }
];

const WhyChooseSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6">
              Why Choose Growwth Partners for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">
                Professional Services Finance?
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We help services firms move from effort-driven growth to profit-driven growth.
            </p>

            <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-orange-50 to-amber-50 shadow rounded-2xl border border-orange-100">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <ArrowRight className="w-8 h-8 text-white" />
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-900">From Effort to Profit</p>
                <p className="text-gray-600">Transform your financial operations to drive sustainable growth</p>
              </div>
            </div>
          </motion.div>

          {/* Right - Reasons grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="flex items-start gap-4 p-5 bg-gradient-to-r from-slate-50 to-orange-50/50 rounded-xl shadow-md hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center">
                    <reason.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{reason.title}</h3>
                    <p className="text-gray-600 text-sm">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
