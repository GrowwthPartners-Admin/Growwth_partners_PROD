import { motion } from "framer-motion";
import { Building2, AlertCircle, Wrench, TrendingUp, CheckCircle } from "lucide-react";

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
          <span className="inline-block px-4 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium mb-4">
            Case Study
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Practical Use Case
          </h2>
        </motion.div>

        <div className="max-w-8xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-3xl overflow-hidden"
          >
            <div className="p-8 md:p-12">
              {/* Client Type */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <p className="text-purple-400 text-sm font-medium">Client Type</p>
                  <h3 className="text-white text-xl font-bold">Web3 Infrastructure Startup (Singapore)</h3>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {/* Challenges */}
                <div className="bg-white/10 rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <AlertCircle className="w-5 h-5 text-red-400" />
                    <h4 className="text-white font-semibold">Challenges</h4>
                  </div>
                  <ul className="space-y-3">
                    {[
                      "Token treasury spread across wallets",
                      "No consolidated financial view",
                      "Investor concerns around transparency"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-slate-300 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solution */}
                <div className="bg-white/10 rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Wrench className="w-5 h-5 text-purple-400" />
                    <h4 className="text-white font-semibold">Growwth Partners Solution</h4>
                  </div>
                  <ul className="space-y-3">
                    {[
                      "Implemented token accounting framework",
                      "Built treasury and cash flow dashboards",
                      "Delivered investor-ready financial reports"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-slate-300 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Outcome */}
                <div className="bg-gradient-to-br from-purple-500/30 to-cyan-500/30 rounded-2xl p-6 border border-purple-500/30">
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="w-5 h-5 text-green-400" />
                    <h4 className="text-white font-semibold">Outcome</h4>
                  </div>
                  <ul className="space-y-3">
                    {[
                      "Improved treasury visibility",
                      "Reduced liquidity risk",
                      "Increased investor confidence",
                      "Stronger governance during funding discussions"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-white text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
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
