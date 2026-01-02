import { motion } from "framer-motion";
import { Building2, AlertCircle, Wrench, TrendingUp, CheckCircle } from "lucide-react";

const UseCaseSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brand-orange font-semibold text-sm uppercase tracking-wider">Real Results</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
            Practical Use Case
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto font-semibold"
        >
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-6 md:p-8">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-brand-orange/20 rounded-xl flex items-center justify-center">
                  <Building2 className="w-7 h-7 text-brand-orange" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Marketplace Business</h3>
                  <p className="text-gray-400">Singapore</p>
                </div>
              </div>
            </div>

            {/* Content Grid */}
            <div className="grid md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-100">
              {/* Challenges */}
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                    <AlertCircle className="w-5 h-5 text-red-600" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">Challenges</h4>
                </div>
                <ul className="space-y-3">
                  {[
                    "Multiple sales channels and payment gateways",
                    "Manual reconciliations and delayed reporting",
                    "Limited visibility into cash flow"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-600">
                      <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solution */}
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-brand-orange/10 rounded-lg flex items-center justify-center">
                    <Wrench className="w-5 h-5 text-brand-orange" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">Our Solution</h4>
                </div>
                <ul className="space-y-3">
                  {[
                    "Deployed a Virtual Finance Team",
                    "Implemented cloud accounting and dashboards",
                    "Standardised reconciliations and reporting"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-600">
                      <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outcome */}
              <div className="p-6 md:p-8 bg-gradient-to-br from-green-50 to-emerald-50">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">Outcome</h4>
                </div>
                <ul className="space-y-3 font-semibold">
                  {[
                    "Faster month-end closes",
                    "Improved cash flow visibility",
                    "Reduced finance-related operational workload",
                    "Greater confidence in scaling decisions"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UseCaseSection;
