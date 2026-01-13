import React from "react";
import { motion } from "framer-motion";
import {
  Building2,
  AlertTriangle,
  Wrench,
  CheckCircle2,
  Package,
  TrendingUp,
  DollarSign,
  Users,
} from "lucide-react";

const challenges = [
  "Inventory overstocking",
  "Margin inconsistency",
  "Cash flow pressure",
];

const solutions = [
  "Implemented inventory turnover analysis",
  "Built working capital and cash flow models",
  "Introduced customer-level margin reporting",
];

const outcomes = [
  { icon: Package, text: "Reduced inventory holding costs" },
  { icon: TrendingUp, text: "Improved margins" },
  { icon: DollarSign, text: "Stabilised cash flow" },
  { icon: Users, text: "Better supplier and customer negotiations" },
];

const UseCaseSection: React.FC = () => {
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
            Case Study
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Practical{" "}
            <span className="text-emerald-600">Use Case</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-8xl mx-auto"
        >
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
            {/* Header */}
            <div className="bg-gradient-to-r from-emerald-600 to-cyan-600 px-8 py-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center">
                  <Building2 className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-emerald-100 text-sm font-medium">Client Type</p>
                  <h3 className="text-2xl font-bold text-white">
                    Import-Export Trading Company (Singapore)
                  </h3>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="grid md:grid-cols-3 gap-6">
                {/* Challenges */}
                <div className="bg-red-50 rounded-2xl p-6 border border-red-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
                      <AlertTriangle className="w-5 h-5 text-red-600" />
                    </div>
                    <h4 className="font-bold text-slate-900">Challenges</h4>
                  </div>
                  <ul className="space-y-3">
                    {challenges.map((challenge, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-slate-700 text-sm"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solutions */}
                <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
                      <Wrench className="w-5 h-5 text-emerald-600" />
                    </div>
                    <h4 className="font-bold text-slate-900">Our Solution</h4>
                  </div>
                  <ul className="space-y-3">
                    {solutions.map((solution, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-slate-700 text-sm"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                        {solution}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Outcomes */}
                <div className="bg-cyan-50 rounded-2xl p-6 border border-cyan-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-cyan-100 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-cyan-600" />
                    </div>
                    <h4 className="font-bold text-slate-900">Outcome</h4>
                  </div>
                  <ul className="space-y-3">
                    {outcomes.map((outcome, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-slate-700 text-sm"
                      >
                        <outcome.icon className="w-4 h-4 text-cyan-600 flex-shrink-0" />
                        {outcome.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UseCaseSection;
