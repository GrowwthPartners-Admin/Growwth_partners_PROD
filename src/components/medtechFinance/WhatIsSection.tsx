import { motion } from "framer-motion";
import { 
  FileCheck, 
  BarChart3, 
  Wallet, 
  Receipt, 
  Shield,
  Users
} from "lucide-react";

const features = [
  {
    icon: FileCheck,
    title: "Regulatory and compliance-ready financial reporting",
  },
  {
    icon: BarChart3,
    title: "Cost and margin visibility across clinical and product operations",
  },
  {
    icon: Wallet,
    title: "Cash flow planning for long development and approval cycles",
  },
  {
    icon: Receipt,
    title: "Revenue recognition aligned to healthcare models",
  },
  {
    icon: Shield,
    title: "Investor and audit-ready financial governance",
  },
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
          <span className="text-brand-orange font-semibold text-sm uppercase tracking-wider">
            Understanding the Service
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
            What Are MedTech & Healthcare Finance Services?
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            MedTech & Healthcare Finance services deliver specialised financial management tailored to healthcare providers, medical technology companies, and life sciences businesses.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto mb-12"
        >
          <p className="text-center text-gray-700 text-lg font-bold">
            These services focus on:
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="max-w-7xl mx-auto mb-16 space-y-6">
          {/* Row 1 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.slice(0, 3).map((feature, index) => (
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
                <p className="text-gray-700">{feature.title}</p>
              </motion.div>
            ))}
          </div>

          {/* Row 2 (centered) */}
          <div className="flex flex-col md:flex-row justify-center gap-6">
            {features.slice(3).map((feature, i) => {
              const index = i + 3;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="w-full md:max-w-[520px]"
                >
                  <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 group shadow h-full">
                    <div className="w-14 h-14 bg-brand-orange/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-orange/20 transition-colors">
                      <feature.icon className="w-7 h-7 text-brand-orange" />
                    </div>
                    <p className="text-gray-700">{feature.title}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-slate-900 to-slate-800 shadow rounded-3xl p-8 md:p-12 text-center"
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-brand-orange/20 rounded-full flex items-center justify-center">
              <Users className="w-8 h-8 text-brand-orange" />
            </div>
          </div>
          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
            Unlike general finance services, healthcare finance requires tight integration between{" "}
            <span className="text-brand-orange font-semibold">finance, compliance, and operational risk management</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatIsSection;
