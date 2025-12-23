import { motion } from "framer-motion";
import { 
  Building2, 
  AlertCircle, 
  Lightbulb, 
  TrendingUp,
  ArrowRight
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
          className="text-center mb-16 "
        >
          <span className="inline-block px-4 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">
            Case Study
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Practical Use Case
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-7xl mx-auto"
        >
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-orange-900 rounded-3xl overflow-hidden">
            {/* Header */}
            <div className="bg-white/10 px-8 py-6 border-b border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center">
                  <Building2 className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-orange-300 text-sm font-medium">Client Type</p>
                  <h3 className="text-2xl font-bold text-white">B2B SaaS Company (Singapore)</h3>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-0">
              {/* Challenges */}
              <div className="p-8 border-b md:border-b-0 md:border-r border-white/10">
                <div className="flex items-center gap-3 mb-6">
                  <AlertCircle className="w-6 h-6 text-red-400" />
                  <h4 className="text-lg font-semibold text-white">Challenges</h4>
                </div>
                <ul className="space-y-3">
                  {[
                    "Inconsistent ARR reporting",
                    "Rising burn rate",
                    "Weak investor visibility"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solution */}
              <div className="p-8 border-b md:border-b-0 md:border-r border-white/10">
                <div className="flex items-center gap-3 mb-6">
                  <Lightbulb className="w-6 h-6 text-amber-400" />
                  <h4 className="text-lg font-semibold text-white">Our Solution</h4>
                </div>
                <ul className="space-y-3">
                  {[
                    "Implemented ARR and churn dashboards",
                    "Built burn-rate and runway models",
                    "Delivered investor-ready SaaS metrics"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outcome */}
              <div className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <TrendingUp className="w-6 h-6 text-green-400" />
                  <h4 className="text-lg font-semibold text-white">Outcome</h4>
                </div>
                <ul className="space-y-3">
                  {[
                    "Improved forecasting accuracy",
                    "Better capital allocation",
                    "Increased investor confidence during fundraising"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Impact summary */}
            <div className="bg-gradient-to-r from-orange-500/20 to-amber-500/20 px-8 py-6 border-t border-white/10">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  <ArrowRight className="w-5 h-5 text-orange-400" />
                  <span className="text-orange-200 font-medium">
                    From growth story to credible financial narrative
                  </span>
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
