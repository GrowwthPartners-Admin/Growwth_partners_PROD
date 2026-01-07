import { motion } from "framer-motion";
import { AlertCircle, HelpCircle, FileCheck, Briefcase, Users } from "lucide-react";

const WhenToUseSection = () => {
  const scenarios = [
    { icon: AlertCircle, text: "Cash runway is shrinking or unclear" },
    { icon: HelpCircle, text: "Investors or board members are asking difficult financial questions" },
    { icon: FileCheck, text: "A financial model needs urgent validation" },
    { icon: Briefcase, text: "Expansion, pricing, or restructuring decisions are pending" },
    { icon: Users, text: "Internal finance teams lack strategic depth" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-orange-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-4">
            When You Need Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            When Do Businesses Need an On-Demand CFO?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Businesses typically engage On-Demand CFO services when:
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid gap-4">
            {scenarios.map((item, index) => (
              <motion.div
                key={item.text}
                className="flex items-center gap-5 p-6 bg-white/80 rounded-2xl shadow border border-slate-100 hover:shadow-md hover:border-orange-200 transition-all duration-300"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ x: 5 }}
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center shadow-lg shadow-orange-500/20">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <p className="text-lg text-slate-700 font-medium">{item.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-xl md:text-2xl font-semibold text-slate-900 bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              These moments demand CFO-level insight, not delayed analysis.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhenToUseSection;
