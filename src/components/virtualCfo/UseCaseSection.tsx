import { motion } from "framer-motion";
import { Building2, Target, CheckCircle, TrendingUp, Clock, DollarSign } from "lucide-react";

const UseCaseSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Use Case
          </h2>
          <p className="text-lg text-slate-600">
            Real results from real clients
          </p>
        </motion.div>

        <div className="max-w-8xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 font-bold"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-8 text-white">
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <div className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2">
                  <Building2 className="w-5 h-5" />
                  <span className="font-medium">SaaS Startup (Singapore)</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2">
                  <Target className="w-5 h-5" />
                  <span className="font-medium">Pre-Series A</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Challenge */}
                <div className="md:col-span-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                      <Target className="w-4 h-4 text-red-600" />
                    </span>
                    Challenge
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "No structured financial model",
                      "Limited cash runway visibility",
                      "Investor meetings stalled",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-slate-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solution */}
                <div className="md:col-span-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-indigo-600" />
                    </span>
                    Solution
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Built a full 3-year financial model",
                      "Implemented real-time cash flow dashboards",
                      "Provided CFO-led investor reporting",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-slate-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Outcome */}
                <div className="md:col-span-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-emerald-600" />
                    </span>
                    Outcome
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Improved cash planning within 30 days",
                      "Raised SGD 1.2M in funding",
                      "Saved founders 20+ hours per month",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-slate-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Stats */}
              <div className="mt-10 pt-8 border-t border-slate-100 grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Clock className="w-5 h-5 text-indigo-500" />
                    <span className="text-3xl font-bold text-slate-900">30</span>
                  </div>
                  <span className="text-slate-600 text-sm">Days to Impact</span>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <DollarSign className="w-5 h-5 text-emerald-500" />
                    <span className="text-3xl font-bold text-slate-900">1.2M</span>
                  </div>
                  <span className="text-slate-600 text-sm">SGD Raised</span>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-purple-500" />
                    <span className="text-3xl font-bold text-slate-900">20+</span>
                  </div>
                  <span className="text-slate-600 text-sm">Hours Saved/Month</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UseCaseSection;