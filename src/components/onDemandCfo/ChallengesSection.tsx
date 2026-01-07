import { motion } from "framer-motion";
import { XCircle, CheckCircle, AlertTriangle, TrendingDown, UserX, FileX, Clock, User, Zap, Lightbulb, Lock, FileCheck } from "lucide-react";

const ChallengesSection = () => {
  const risks = [
    { icon: AlertTriangle, text: "Making irreversible capital allocation mistakes" },
    { icon: TrendingDown, text: "Over- or under-estimating cash runway" },
    { icon: UserX, text: "Losing investor confidence" },
    { icon: FileX, text: "Poorly structured financial narratives" },
    { icon: Clock, text: "Reactive, short-term decision-making" },
  ];

  const benefits = [
    { icon: User, text: "Direct access to a senior CFO" },
    { icon: Zap, text: "Fast turnaround on critical deliverables" },
    { icon: Lightbulb, text: "Clear, actionable financial insights" },
    { icon: Lock, text: "Confidential and outcome-focused engagement" },
    { icon: FileCheck, text: "No long-term contracts or commitments" },
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
          <span className="inline-block px-4 py-1.5 bg-slate-100 text-slate-700 rounded-full text-sm font-semibold mb-4">
            Challenges & Solutions
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            High-Risk Financial Challenges We Address
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-8xl mx-auto">
          {/* Risks Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl shadow p-8 border border-red-100"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-red-500 flex items-center justify-center">
                <XCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                Without Senior CFO Involvement
              </h3>
            </div>
            <p className="text-slate-600 mb-6">
              Without senior CFO involvement during critical moments, businesses risk:
            </p>
            <div className="space-y-4">
              {risks.map((item, index) => (
                <motion.div
                  key={item.text}
                  className="flex items-center gap-4 p-4 bg-white/80 rounded-xl font-bold"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <item.icon className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <span className="text-slate-700">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Benefits Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 shadow border border-emerald-100"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                What You Get With Our Services
              </h3>
            </div>
            <p className="text-slate-600 mb-6">
              All support is structured to deliver maximum impact in minimal time:
            </p>
            <div className="space-y-4">
              {benefits.map((item, index) => (
                <motion.div
                  key={item.text}
                  className="flex items-center gap-4 p-4 bg-white/80 rounded-xl font-bold"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <item.icon className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-slate-700">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-slate-600 max-w-3xl mx-auto bg-slate-50 rounded-2xl p-6 border border-slate-100">
            <span className="font-semibold text-slate-900">On-Demand CFO support reduces risk</span> by ensuring decisions are financially sound, defensible, and data-backed.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ChallengesSection;
