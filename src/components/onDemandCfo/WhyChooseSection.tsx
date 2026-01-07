import React from "react";
import { motion } from "framer-motion";
import { Users, Globe, Shield, Cpu, Target } from "lucide-react";

const WhyChooseSection = () => {
  const reasons = [
    {
      icon: Users,
      title: "Diverse Industry Experience",
      description:
        "CFOs with experience across startups, SMEs, SaaS, ecommerce, fintech, and tech businesses",
    },
    {
      icon: Globe,
      title: "Singapore Market Expertise",
      description:
        "Strong understanding of Singapore's financial, tax, and regulatory environment",
    },
    {
      icon: Shield,
      title: "High-Pressure Situations",
      description:
        "Proven ability to support high-pressure investor and board situations",
    },
    {
      icon: Cpu,
      title: "AI-Enabled Analysis",
      description: "AI-enabled tools for rapid analysis and modelling",
    },
    {
      icon: Target,
      title: "One Partner Solution",
      description: "One partner for CFO expertise, modelling, and execution",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-slate-50 to-orange-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold mb-4">
            Why Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Why Choose Growwth Partners?
          </h2>
        </motion.div>

        {/* Cards: 3 + 2 centered */}
        <div className="max-w-8xl mx-auto space-y-6">
          {/* Row 1 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.slice(0, 3).map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-white rounded-3xl p-8 shadow border border-slate-100 hover:shadow-xl hover:border-orange-200 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center shadow-lg shadow-orange-500/20">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Row 2 (centered) */}
          <div className="flex flex-col md:flex-row justify-center gap-6">
            {reasons.slice(3).map((item, index) => (
              <motion.div
                key={item.title}
                className="w-full md:max-w-[520px]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (index + 3) }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-white rounded-3xl p-8 shadow border border-slate-100 hover:shadow-xl hover:border-orange-200 transition-all duration-300 h-full">
                  <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center shadow-lg shadow-orange-500/20">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {item.description}
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
