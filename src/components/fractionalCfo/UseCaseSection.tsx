import { motion } from "framer-motion";
import { Building2, DollarSign, TrendingUp, CheckCircle } from "lucide-react";

const UseCaseSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-orange-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold mb-4">
            Success Story
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Practical Use Case
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
            {/* Header */}
            <div className="bg-gradient-to-r from-slate-800 to-slate-900 p-6 md:p-8">
              <div className="flex flex-wrap items-center gap-6">
                <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="text-orange-400 text-sm font-medium mb-1">Client Type</div>
                  <h3 className="text-2xl font-bold text-white">Ecommerce Brand (Singapore)</h3>
                </div>
                <div className="ml-auto bg-white/10 rounded-xl px-4 py-2">
                  <div className="text-slate-400 text-xs">Revenue</div>
                  <div className="text-white font-bold">SGD 4M</div>
                </div>
              </div>
            </div>

            {/* Outcome Cards */}
            <div className="p-6 md:p-8">
              <h4 className="text-xl font-bold text-slate-900 mb-6 text-center">
                Key Outcomes Achieved
              </h4>
              
              <div className="grid md:grid-cols-3 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-100"
                >
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h5 className="font-bold text-slate-900 mb-2">SKU-Level Profitability</h5>
                  <p className="text-slate-600 text-sm">Implemented detailed product-level margin analysis</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <DollarSign className="w-6 h-6 text-blue-600" />
                  </div>
                  <h5 className="font-bold text-slate-900 mb-2">Cash Flow Stabilised</h5>
                  <p className="text-slate-600 text-sm">Predictable cash flow with proper working capital management</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 border border-orange-100"
                >
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                    <CheckCircle className="w-6 h-6 text-orange-600" />
                  </div>
                  <h5 className="font-bold text-slate-900 mb-2">Raised SGD 3M Series A</h5>
                  <p className="text-slate-600 text-sm">Investor-ready financials enabled successful fundraising</p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UseCaseSection;
