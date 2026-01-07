import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle, XCircle, TrendingDown, BarChart3, FileX, Users, UserX, DollarSign, Clock, Lightbulb, FileText, Settings, ArrowUpRight } from "lucide-react";

const challenges = [
  { icon: TrendingDown, text: "Unpredictable cash flow" },
  { icon: BarChart3, text: "Weak or outdated financial forecasts" },
  { icon: FileX, text: "Poor cost and margin visibility" },
  { icon: XCircle, text: "Inconsistent financial reporting" },
  { icon: Users, text: "Lack of accountability across departments" },
  { icon: UserX, text: "Founder dependency for financial decisions" }
];

const benefits = [
  { icon: Users, text: "Dedicated senior Part-Time CFO" },
  { icon: Clock, text: "Structured monthly or quarterly CFO involvement" },
  { icon: Lightbulb, text: "Clear financial action plans" },
  { icon: FileText, text: "Management-level and board-ready reporting" },
  { icon: Settings, text: "Integration with bookkeeping and payroll teams" },
  { icon: ArrowUpRight, text: "Scalable engagement as your business grows" }
];

const ChallengesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brand-orange font-semibold text-sm uppercase tracking-wider">Challenges & Solutions</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
            Understanding The Financial Gap
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {/* Challenges Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 border border-red-100"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Common Financial Challenges Without a CFO</h3>
            </div>
            
            <p className="text-gray-600 mb-6">
              Businesses without CFO oversight typically face:
            </p>

            <div className="space-y-3">
              {challenges.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm"
                >
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-red-500" />
                  </div>
                  <p className="text-gray-700">{item.text}</p>
                </motion.div>
              ))}
            </div>

            <p className="mt-6 text-gray-600 text-sm italic">
              These issues limit growth and increase operational and financial risk.
            </p>
          </motion.div>

          {/* Benefits Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-100"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">What You Get with Our Part-Time CFO Services</h3>
            </div>

            <div className="space-y-3">
              {benefits.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm"
                >
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-green-500" />
                  </div>
                  <p className="text-gray-700">{item.text}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl p-4 text-center">
              <p className="text-white font-medium flex items-center justify-center gap-2">
                <DollarSign className="w-5 h-5" />
                All delivered at a significantly lower cost than a full-time CFO
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;
