import React from "react";
import { motion } from "framer-motion";
import {
  Award,
  Globe,
  TrendingUp,
  Cpu,
  Layers,
  ArrowRight,
} from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Trading Expertise",
    description: "Experience across trading, wholesale, and distribution businesses",
  },
  {
    icon: Globe,
    title: "Singapore Ecosystem",
    description: "Strong understanding of Singapore's trading and logistics ecosystem",
  },
  {
    icon: TrendingUp,
    title: "CFO-Led Approach",
    description: "CFO-led approach focused on cash and margins",
  },
  {
    icon: Cpu,
    title: "AI-Enabled Insights",
    description: "AI-enabled dashboards for real-time insights",
  },
  {
    icon: Layers,
    title: "Integrated Services",
    description: "Integrated services across CFO, finance teams, bookkeeping, and payroll",
  },
];

const WhyChooseSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Why Choose Growwth Partners for{" "}
              <span className="text-emerald-600">Trading Finance?</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We help trading businesses move from volume-driven growth to value-driven growth.
            </p>

            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-start gap-4 p-4 rounded-xl shadow bg-slate-50 hover:bg-emerald-50 border border-slate-100 hover:border-emerald-200 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center group-hover:bg-emerald-100 transition-colors duration-300">
                    <reason.icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-slate-600">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-emerald-600 to-cyan-600 rounded-3xl p-8 lg:p-10">
              <div className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Our Trading Finance Promise
                </h3>
                
                <div className="space-y-4">
                  {[
                    "Deep understanding of trading dynamics",
                    "Real-time visibility into margins and cash",
                    "Proactive financial guidance",
                    "Scalable support as you grow",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 text-white/90"
                    >
                      <ArrowRight className="w-5 h-5 text-yellow-300 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/20">
                  <p className="text-white/80 text-sm italic">
                    "We act as your trusted financial backbone, ensuring every trade decision is backed by solid financial analysis."
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-200 rounded-full blur-2xl opacity-60" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-cyan-200 rounded-full blur-2xl opacity-60" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
