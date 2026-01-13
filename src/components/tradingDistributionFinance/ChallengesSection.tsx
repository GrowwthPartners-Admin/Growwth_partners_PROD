import React from "react";
import { motion } from "framer-motion";
import {
  AlertCircle,
  TrendingDown,
  Eye,
  FileX,
  User,
  Scale,
  CheckCircle2,
  Users,
  Package,
  BarChart3,
  DollarSign,
  Layers,
  Zap,
} from "lucide-react";

const challenges = [
  { icon: AlertCircle, text: "Poor inventory turnover visibility" },
  { icon: TrendingDown, text: "Margin erosion due to pricing or cost leakage" },
  { icon: DollarSign, text: "Cash flow pressure from long receivable cycles" },
  { icon: FileX, text: "Weak forecasting and demand planning" },
  { icon: Scale, text: "Overdependence on supplier credit" },
  { icon: User, text: "Reactive inventory and purchasing decisions" },
];

const benefits = [
  { icon: Users, text: "Trading-experienced CFO and finance team" },
  { icon: Package, text: "Inventory and margin dashboards" },
  { icon: BarChart3, text: "Cash flow and working capital forecasts" },
  { icon: Eye, text: "Improved profitability and liquidity visibility" },
  { icon: Layers, text: "Scalable finance infrastructure as volume grows" },
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
          <span className="inline-block px-4 py-2 rounded-full bg-red-100 text-red-700 text-sm font-semibold mb-4">
            Challenges & Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Common Financial Challenges{" "}
            <span className="text-emerald-600">in Trading Businesses</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Challenges Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 border border-red-100 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Without trading-specific finance expertise, businesses often face:
                </h3>
              </div>

              <div className="space-y-3">
                {challenges.map((challenge, index) => (
                  <motion.div
                    key={challenge.text}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/70 border border-red-100"
                  >
                    <challenge.icon className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span className="text-slate-700">{challenge.text}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 p-4 rounded-xl bg-red-100/50 border border-red-200">
                <p className="text-red-700 font-medium text-center">
                  These challenges intensify as scale increases.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Solutions Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-emerald-50 to-cyan-50 rounded-3xl p-8 border border-emerald-100 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  What You Get with Our Trading & Distribution Finance Services
                </h3>
              </div>

              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.text}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/70 border border-emerald-100"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-slate-700">{benefit.text}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 p-4 rounded-xl bg-emerald-100/50 border border-emerald-200">
                <p className="text-emerald-700 font-medium text-center">
                  All designed to support profitable, cash-efficient trading operations.
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
