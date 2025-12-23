import { motion } from "framer-motion";
import { Building2, AlertTriangle, Lightbulb, TrendingUp, Clock, CheckCircle } from "lucide-react";

const UseCaseSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-orange-50/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold mb-4">
            Real Results
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Practical Use Case
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-6 md:p-8">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Ecommerce Company</h3>
                  <p className="text-orange-100">Singapore-based Online Retailer</p>
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Challenges */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-red-500 mb-4">
                    <AlertTriangle className="w-5 h-5" />
                    <h4 className="font-bold text-lg">Challenges</h4>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-slate-600">
                      <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                      No internal CFO
                    </li>
                    <li className="flex items-start gap-2 text-slate-600">
                      <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                      Fragmented accounting and reporting
                    </li>
                    <li className="flex items-start gap-2 text-slate-600">
                      <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                      Limited cash flow visibility
                    </li>
                  </ul>
                </div>

                {/* Solution */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-orange-500 mb-4">
                    <Lightbulb className="w-5 h-5" />
                    <h4 className="font-bold text-lg">Our Solution</h4>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-slate-600">
                      <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
                      Appointed an Outsourced CFO
                    </li>
                    <li className="flex items-start gap-2 text-slate-600">
                      <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
                      Took ownership of finance strategy and reporting
                    </li>
                    <li className="flex items-start gap-2 text-slate-600">
                      <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
                      Implemented automated dashboards and forecasting
                    </li>
                    <li className="flex items-start gap-2 text-slate-600">
                      <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
                      Coordinated bookkeeping and payroll
                    </li>
                  </ul>
                </div>

                {/* Outcomes */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-green-500 mb-4">
                    <TrendingUp className="w-5 h-5" />
                    <h4 className="font-bold text-lg">Outcomes</h4>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-slate-600">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      Accurate monthly reporting
                    </li>
                    <li className="flex items-start gap-2 text-slate-600">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      Improved cash flow predictability
                    </li>
                    <li className="flex items-start gap-2 text-slate-600">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      Founders freed from finance execution
                    </li>
                  </ul>
                </div>
              </div>

              {/* Key Metric */}
              <div className="mt-8 pt-6 border-t border-slate-100">
                <div className="flex items-center justify-center gap-4">
                  <Clock className="w-8 h-8 text-orange-500" />
                  <div className="text-center">
                    <p className="text-4xl font-bold text-orange-600">25+</p>
                    <p className="text-slate-600">Hours Saved Per Month</p>
                  </div>
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
