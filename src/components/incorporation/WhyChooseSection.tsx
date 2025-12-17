import React from "react";
import { motion } from "framer-motion";
import { Users, ListChecks, ShieldCheck, TrendingUp } from "lucide-react";

export const WhyChooseSection = () => {
  const reasons = [
    {
      icon: Users,
      title: "Local expertise, founder friendly",
      description: "Practical advice on the right entity type, shareholding, and governance."
    },
    {
      icon: ListChecks,
      title: "Clear, fixed steps",
      description: "From name reservation to bank account support and compliance calendars."
    },
    {
      icon: ShieldCheck,
      title: "Compliance first",
      description: "ACRA filings, company constitution, registers, and statutory records in order."
    },
    {
      icon: TrendingUp,
      title: "Post-incorporation support",
      description: "Accounting, payroll, tax, and secretarial so you scale with confidence."
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
          <span className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-4">
            Why Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Growwth Partners
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Expert guidance for a smooth incorporation journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="h-full bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-2xl p-6 hover:shadow-xl hover:border-orange-200 transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <reason.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;