import React from "react";
import { motion } from "framer-motion";
import { 
  Ship, 
  Warehouse, 
  Package, 
  Users, 
  Globe,
  HelpCircle,
  AlertTriangle 
} from "lucide-react";

const idealFor = [
  { icon: Ship, text: "Import-export businesses" },
  { icon: Warehouse, text: "Wholesale and distribution companies" },
  { icon: Package, text: "Trading SMEs with large inventory exposure" },
  { icon: Users, text: "Businesses operating across multiple suppliers and customers" },
  { icon: Globe, text: "Trading companies expanding regionally from Singapore" },
];

const questions = [
  "Which products or customers are profitable?",
  "Why is cash always tight despite strong sales?",
  "Are inventory levels optimised?",
];

const WhoShouldUseSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold mb-4">
            Ideal Clients
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Who Should Use Trading & Distribution{" "}
            <span className="text-emerald-600">Finance Services?</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Ideal for list */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100"
          >
            <h3 className="text-xl font-bold text-slate-900 mb-6">
              Trading & Distribution Finance services are ideal for:
            </h3>
            <div className="space-y-4">
              {idealFor.map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 hover:bg-emerald-50 transition-colors duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-emerald-600" />
                  </div>
                  <span className="text-slate-700 font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Questions indicator */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <div className="bg-gradient-to-br from-emerald-600 to-cyan-600 rounded-3xl p-8 text-white">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="w-8 h-8 text-yellow-300" />
                <h3 className="text-xl font-bold">If your business struggles to answer:</h3>
              </div>
              
              <div className="space-y-4 mb-8">
                {questions.map((question, index) => (
                  <motion.div
                    key={question}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-sm"
                  >
                    <HelpCircle className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">{question}</span>
                  </motion.div>
                ))}
              </div>

              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center">
                <p className="text-lg font-semibold">
                  You need specialised{" "}
                  <span className="text-yellow-300">trading finance support</span>.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoShouldUseSection;
