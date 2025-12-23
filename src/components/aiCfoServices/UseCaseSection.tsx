import { motion } from "framer-motion";
import { 
  Building2, 
  AlertCircle, 
  CheckCircle, 
  TrendingUp,
  DollarSign,
  Package,
  BarChart3
} from "lucide-react";

const UseCaseSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">
            Case Study
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Practical Use Case
          </h2>
          <p className="text-lg text-slate-600">
            Real results from AI CFO implementation
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Client Info & Challenge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Client Type */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center">
                    <Building2 className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Client Type</h3>
                    <p className="text-slate-600">Retail Chain (Singapore)</p>
                  </div>
                </div>
              </div>

              {/* Challenges */}
              <div className="bg-red-50 rounded-2xl p-6 border border-red-100">
                <div className="flex items-center gap-3 mb-4">
                  <AlertCircle className="w-6 h-6 text-red-500" />
                  <h3 className="font-bold text-slate-900 text-lg">Challenges</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2" />
                    <span className="text-slate-700">Delayed reporting impacting decisions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2" />
                    <span className="text-slate-700">Poor inventory and cash flow visibility</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2" />
                    <span className="text-slate-700">Manual processes causing errors</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Solution & Outcome */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Solution */}
              <div className="bg-orange-50 rounded-2xl p-6 border border-orange-100">
                <div className="flex items-center gap-3 mb-4">
                  <BarChart3 className="w-6 h-6 text-orange-500" />
                  <h3 className="font-bold text-slate-900 text-lg">Growwth Partners Solution</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5" />
                    <span className="text-slate-700">Implemented AI-powered dashboards</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5" />
                    <span className="text-slate-700">Introduced predictive cash flow forecasting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5" />
                    <span className="text-slate-700">CFO-led interpretation and recommendations</span>
                  </li>
                </ul>
              </div>

              {/* Outcome */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                  <h3 className="font-bold text-slate-900 text-lg">Outcome</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Package className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-slate-700">Identified inventory leakage saving stock costs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <DollarSign className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-slate-700">Reduced cash flow risk with predictive insights</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-slate-700 font-semibold">Achieved SGD 110K annual savings</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Impact Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-8 text-white"
          >
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-4xl font-bold mb-2">SGD 110K</p>
                <p className="text-orange-100">Annual Savings</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-2">90%</p>
                <p className="text-orange-100">Faster Reporting</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-2">100%</p>
                <p className="text-orange-100">Cash Flow Visibility</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UseCaseSection;
