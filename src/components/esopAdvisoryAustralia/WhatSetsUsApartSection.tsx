import { motion } from "framer-motion";
import { Settings, Globe, ShieldCheck, MessageSquare, Target } from "lucide-react";

export const WhatSetsUsApartSection = () => {
  const features = [
    {
      icon: Settings,
      title: "Tailored Solutions",
      description: "Custom strategies that match stage, industry, and growth goals, whether startup, SME, or multi-entity group."
    },
    {
      icon: Globe,
      title: "Global Expertise, Local Insight",
      description: "International know-how with local precision across Australian regulatory expectations for seamless ESOP implementation in Australia."
    },
    {
      icon: ShieldCheck,
      title: "Comprehensive Compliance",
      description: "Hassle-free coordination of payroll, tax, superannuation considerations, labour law alignment, and documentation under Australian frameworks."
    },
    {
      icon: MessageSquare,
      title: "Effective Communication",
      description: "Clear, engaging plans and employee education so participants fully understand value, vesting, and outcomes."
    },
    {
      icon: Target,
      title: "Strategic Alignment",
      description: "Design linked to business objectives, hiring plans, budgets, and long-term performance."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Sets Growwth Partners' <span className="text-teal-600">ESOP Advisory</span> in Australia Apart
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-teal-100/50"
            >
              <div className="w-14 h-14 bg-teal-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
