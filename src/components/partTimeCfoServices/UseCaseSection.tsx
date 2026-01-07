import { motion } from "framer-motion";
import { Building2, MapPin, AlertTriangle, Lightbulb, CheckCircle, TrendingUp, DollarSign, UserMinus } from "lucide-react";

const UseCaseSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-orange-50/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-brand-orange font-semibold text-sm uppercase tracking-wider">Success Story</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
            Practical Use Case
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            {/* Header */}
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-6 md:p-8">
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-orange-400 text-sm font-medium">Client Type</p>
                    <p className="text-white font-bold text-lg">Retail SME</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <MapPin className="w-4 h-4 text-orange-400" />
                  <span className="text-white text-sm">Singapore</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
              <div className="grid md:grid-cols-3 gap-6">
                {/* Challenge */}
                <div className="bg-red-50 rounded-2xl p-6 border border-red-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                      <AlertTriangle className="w-5 h-5 text-red-500" />
                    </div>
                    <h3 className="font-bold text-gray-900">Challenge</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-gray-700 text-sm">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                      Inconsistent profitability
                    </li>
                    <li className="flex items-start gap-2 text-gray-700 text-sm">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                      No structured budgeting
                    </li>
                    <li className="flex items-start gap-2 text-gray-700 text-sm">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                      Cash flow surprises during peak seasons
                    </li>
                  </ul>
                </div>

                {/* Solution */}
                <div className="bg-orange-50 rounded-2xl p-6 border border-orange-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Lightbulb className="w-5 h-5 text-brand-orange" />
                    </div>
                    <h3 className="font-bold text-gray-900">Growwth Partners Solution</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-gray-700 text-sm">
                      <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                      Implemented monthly CFO reviews
                    </li>
                    <li className="flex items-start gap-2 text-gray-700 text-sm">
                      <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                      Introduced rolling cash flow forecasts
                    </li>
                    <li className="flex items-start gap-2 text-gray-700 text-sm">
                      <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                      Built department-level margin analysis
                    </li>
                  </ul>
                </div>

                {/* Outcome */}
                <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    </div>
                    <h3 className="font-bold text-gray-900">Outcome</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-gray-700 text-sm">
                      <TrendingUp className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      Improved cash flow predictability
                    </li>
                    <li className="flex items-start gap-2 text-gray-700 text-sm">
                      <DollarSign className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      Better pricing and cost control
                    </li>
                    <li className="flex items-start gap-2 text-gray-700 text-sm">
                      <UserMinus className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      Reduced founder dependency on financial decisions
                    </li>
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
