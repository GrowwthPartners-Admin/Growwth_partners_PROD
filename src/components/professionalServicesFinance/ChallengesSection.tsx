import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle, Clock, TrendingUp, BarChart3, Users, Target } from "lucide-react";

const challenges = [
  { icon: AlertTriangle, text: "Revenue leakage from unbilled or under-billed work" },
  { icon: AlertTriangle, text: "Poor visibility into project-level profitability" },
  { icon: AlertTriangle, text: "Low or inconsistent utilisation rates" },
  { icon: AlertTriangle, text: "Delayed collections and weak cash flow" },
  { icon: AlertTriangle, text: "Inaccurate forecasting tied to headcount growth" },
  { icon: AlertTriangle, text: "Founder or partner dependency for financial decisions" }
];

const benefits = [
  { icon: Users, text: "Services-experienced CFO and finance team" },
  { icon: BarChart3, text: "Project and client-level profitability dashboards" },
  { icon: Clock, text: "Improved utilisation and billing discipline" },
  { icon: TrendingUp, text: "Predictable cash flow visibility" },
  { icon: Target, text: "Scalable finance infrastructure aligned to growth" }
];

const ChallengesSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">
            Challenges & Solutions
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
            Common Financial Challenges in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">
              Professional Services Firms
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Challenges */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 border border-red-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <AlertTriangle className="w-7 h-7 text-red-500" />
                Without expertise, firms often face:
              </h3>
              <div className="space-y-4">
                {challenges.map((item, index) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm"
                  >
                    <item.icon className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">{item.text}</p>
                  </motion.div>
                ))}
              </div>
              <p className="mt-6 text-gray-600 font-medium text-center bg-white/60 p-4 rounded-xl">
                These challenges limit scalability and reduce margins.
              </p>
            </div>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-orange-600 to-amber-600 rounded-3xl p-8 text-white h-full">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <CheckCircle className="w-7 h-7 text-orange-200" />
                What You Get with Our Services
              </h3>
              <div className="space-y-4">
                {benefits.map((item, index) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + 0.1 * index }}
                    className="flex items-start gap-3 p-4 bg-white/10 backdrop-blur rounded-xl border border-white/20"
                  >
                    <item.icon className="w-5 h-5 text-orange-200 flex-shrink-0 mt-0.5" />
                    <p className="text-white/90">{item.text}</p>
                  </motion.div>
                ))}
              </div>
              <div className="mt-6 bg-white/20 backdrop-blur rounded-xl p-4 text-center">
                <p className="font-semibold">
                  Designed to support profitable, sustainable professional services growth.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;
