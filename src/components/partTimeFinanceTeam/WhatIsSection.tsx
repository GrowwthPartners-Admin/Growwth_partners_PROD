import { motion } from "framer-motion";
import { Calculator, FileText, Settings, Shield, Users } from "lucide-react";

const features = [
  {
    icon: Calculator,
    title: "Day-to-day Finance Execution",
    description: "Reliable handling of routine finance operations"
  },
  {
    icon: FileText,
    title: "Accurate & Timely Reporting",
    description: "Consistent, deadline-driven financial reports"
  },
  {
    icon: Settings,
    title: "Operational Finance Support",
    description: "Seamless coordination with your operations"
  },
  {
    icon: Shield,
    title: "Compliance-Ready Records",
    description: "Documentation that meets regulatory standards"
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
          <span className="text-brand-orange font-semibold text-sm uppercase tracking-wider">Understanding the Service</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
            What Are Part-Time Finance Team Services?
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Part-Time Finance Team services provide access to skilled finance professionals—such as accountants, analysts, and controllers—who support your business for a defined number of hours or days each month.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 group shadow"
            >
              <div className="w-14 h-14 bg-brand-orange/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-orange/20 transition-colors">
                <feature.icon className="w-7 h-7 text-brand-orange" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 text-center"
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-brand-orange/20 rounded-full flex items-center justify-center">
              <Users className="w-8 h-8 text-brand-orange" />
            </div>
          </div>
          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
            Unlike ad-hoc outsourcing, Part-Time Finance Team services operate as an{" "}
            <span className="text-brand-orange font-semibold">extension of your internal team</span>, with structured processes and accountability.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatIsSection;
