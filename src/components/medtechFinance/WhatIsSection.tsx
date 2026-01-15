import { motion } from "framer-motion";
import { 
  FileCheck, 
  BarChart3, 
  Wallet, 
  Receipt, 
  Shield,
  CheckCircle2
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
    <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            What Are MedTech & Healthcare Finance Services?
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            MedTech & Healthcare Finance services deliver specialised financial management tailored to healthcare providers, medical technology companies, and life sciences businesses.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-orange-500/20">
            <h3 className="text-xl font-semibold text-orange-400 mb-8 text-center">
              These services focus on:
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-orange-500/30 transition-colors"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-xl flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-orange-400" />
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0" />
                    <p className="text-slate-200">{feature.title}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 p-6 bg-gradient-to-r from-orange-500/10 to-orange-600/10 rounded-2xl border border-orange-500/20"
            >
              <p className="text-slate-300 text-center text-lg">
                Unlike general finance services, healthcare finance requires tight integration between finance, compliance, and operational risk management.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatIsSection;
