import React from "react";
import { motion } from "framer-motion";
import { Building2, Megaphone, Monitor, Scale, Globe, HelpCircle } from "lucide-react";

const idealFor = [
  { icon: Building2, text: "Consulting and advisory firms" },
  { icon: Megaphone, text: "Marketing, digital, and creative agencies" },
  { icon: Monitor, text: "IT services and software services companies" },
  { icon: Scale, text: "Legal, accounting, and compliance firms" },
  { icon: Globe, text: "Professional services firms scaling teams or geographies" }
];

const questions = [
  "Which clients or projects are profitable?",
  "Are we billing all billable hours?",
  "Why is cash flow lagging revenue?"
];

const WhoShouldUseSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-50 via-orange-50/30 to-amber-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">
            Is This Right For You?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Who Should Use Professional Services Finance?
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Ideal for */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Ideal for:
            </h3>
            <div className="space-y-4">
              {idealFor.map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="flex items-center gap-4 p-4 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gray-800 font-medium">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Struggling questions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-slate-50 to-orange-100 rounded-3xl p-8 text-white"
          >
            <div className="flex items-center gap-3 mb-6">
              <HelpCircle className="w-8 h-8 text-orange-400" />
              <h3 className="text-2xl font-bold text-black">
                If your firm struggles to answer:
              </h3>
            </div>
            <div className="space-y-4 mb-8">
              {questions.map((question, index) => (
                <motion.div
                  key={question}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + 0.1 * index }}
                  className="flex items-start gap-3 p-4 bg-white/10 backdrop-blur shadow rounded-xl border border-gray-300"
                >
                  <span className="text-orange-500 font-bold text-lg">?</span>
                  <p className="text-gray-700 font-bold">{question}</p>
                </motion.div>
              ))}
            </div>
            <div className="bg-white/20 backdrop-blur rounded-xl p-6 text-center">
              <p className="text-xl font-semibold text-gray-700">
                You need specialised professional services finance support.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoShouldUseSection;
