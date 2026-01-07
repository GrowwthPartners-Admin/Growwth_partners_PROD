import { motion } from "framer-motion";
import { AlertTriangle, TrendingDown, FileX, HelpCircle, UserX, CheckCircle, Users, Cloud, BarChart3, Shield, Zap, Rocket } from "lucide-react";

const ChallengesSection = () => {
  const problems = [
    { icon: TrendingDown, text: "Unclear cash runway and liquidity risk" },
    { icon: FileX, text: "Inconsistent or delayed financial reporting" },
    { icon: AlertTriangle, text: "No reliable forecasting or scenario planning" },
    { icon: HelpCircle, text: "Difficulty answering investor or board questions" },
    { icon: UserX, text: "Founder-led finance decisions without data" },
  ];

  const benefits = [
    { icon: Users, text: "Dedicated senior Virtual CFO" },
    { icon: BarChart3, text: "Finance analyst support" },
    { icon: Cloud, text: "Cloud-based accounting and dashboards" },
    { icon: Shield, text: "Monthly strategy and review calls" },
    { icon: Zap, text: "Investor- and board-ready financials" },
    { icon: Rocket, text: "Scalable engagement model" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Key Financial Problems We Solve
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Most businesses approach us when they experience these issues that don't scale—and become expensive quickly
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Problems Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 border border-red-100"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Common Challenges
                </h3>
              </div>

              <div className="space-y-4">
                {problems.map((problem, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-white/80 rounded-xl"
                  >
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <problem.icon className="w-5 h-5 text-red-600" />
                    </div>
                    <span className="text-slate-700 font-medium">{problem.text}</span>
                  </motion.div>
                ))}
              </div>

              <p className="mt-6 text-slate-600 text-sm italic">
                These issues don't scale—and they become expensive quickly.
              </p>
            </motion.div>

            {/* Benefits Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 border border-emerald-100"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  What You Get With Us
                </h3>
              </div>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-white/80 rounded-xl"
                  >
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-5 h-5 text-emerald-600" />
                    </div>
                    <span className="text-slate-700 font-medium">{benefit.text}</span>
                  </motion.div>
                ))}
              </div>

              <p className="mt-6 text-slate-600 text-sm font-medium">
                All designed to deliver decision-grade financial intelligence, not just reports.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;