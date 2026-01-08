import { motion } from "framer-motion";
import {
  Award,
  Building2,
  Sparkles,
  Users,
  Target,
  CheckCircle,
} from "lucide-react";

const WhyChooseSection = () => {
  const reasons = [
    {
      icon: Award,
      title: "Proven Experience",
      description:
        "CFOs with experience across startups, SMEs, SaaS, ecommerce, fintech, and tech",
    },
    {
      icon: Building2,
      title: "Local Expertise",
      description:
        "Deep understanding of Singapore financial, tax, and compliance requirements",
    },
    {
      icon: Sparkles,
      title: "AI-Driven Workflows",
      description: "AI-driven finance workflows for speed and accuracy",
    },
    {
      icon: Users,
      title: "One Partner Solution",
      description: "One partner for CFO, finance team, bookkeeping, and payroll",
    },
    {
      icon: Target,
      title: "Decision-Focused",
      description: "CFOs who focus on decision-making, not just reporting",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Why Growwth Partners?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            The right partner makes all the difference in your financial journey
          </p>
        </motion.div>

        <div className="max-w-8xl mx-auto">
          {/* 3 + 2 centered */}
          <div className="space-y-6">
            {/* Row 1 */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reasons.slice(0, 3).map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="group relative bg-gradient-to-br from-slate-50 to-indigo-50 rounded-2xl p-8 border shadow border-slate-100 hover:shadow-xl transition-all"
                >
                  <div className="absolute top-4 right-4">
                    <CheckCircle className="w-5 h-5 text-indigo-400" />
                  </div>

                  <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <reason.icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {reason.title}
                  </h3>

                  <p className="text-slate-600">{reason.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Row 2 (centered) */}
            <div className="flex flex-col lg:flex-row justify-center gap-6">
              {reasons.slice(3).map((reason, i) => {
                const index = i + 3; // keep stagger continuous
                return (
                  <motion.div
                    key={reason.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="w-full lg:max-w-[520px]"
                  >
                    <div className="group relative bg-gradient-to-br from-slate-50 to-indigo-50 rounded-2xl p-8 border shadow border-slate-100 hover:shadow-xl transition-all h-full">
                      <div className="absolute top-4 right-4">
                        <CheckCircle className="w-5 h-5 text-indigo-400" />
                      </div>

                      <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                        <reason.icon className="w-7 h-7 text-white" />
                      </div>

                      <h3 className="text-xl font-bold text-slate-900 mb-3">
                        {reason.title}
                      </h3>

                      <p className="text-slate-600">{reason.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
