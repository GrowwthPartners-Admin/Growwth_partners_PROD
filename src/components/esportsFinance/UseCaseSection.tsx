import { motion } from "framer-motion";
import { 
  Building2, 
  AlertTriangle, 
  Wrench, 
  CheckCircle2,
  TrendingUp,
  BarChart3,
  LineChart
} from "lucide-react";

const UseCaseSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Practical{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-fuchsia-600">
              Use Case
            </span>
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-slate-900 to-purple-950 rounded-3xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 to-fuchsia-600 p-6 lg:p-8">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Building2 className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Mobile Game Studio</h3>
                  <p className="text-purple-100">Singapore-based gaming company</p>
                </div>
              </div>
            </div>

            <div className="p-6 lg:p-8">
              <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                {/* Challenges */}
                <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                  <div className="flex items-center gap-3 mb-4">
                    <AlertTriangle className="w-6 h-6 text-red-400" />
                    <h4 className="text-lg font-semibold text-white">Challenges</h4>
                  </div>
                  <ul className="space-y-3">
                    {[
                      "Volatile monetisation",
                      "Limited cost visibility across titles",
                      "Weak forecasting",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solution */}
                <div className="bg-slate-800/50 rounded-2xl p-6 border border-purple-500/30">
                  <div className="flex items-center gap-3 mb-4">
                    <Wrench className="w-6 h-6 text-purple-400" />
                    <h4 className="text-lg font-semibold text-white">Our Solution</h4>
                  </div>
                  <ul className="space-y-3">
                    {[
                      "Implemented title-level revenue and cost tracking",
                      "Built cohort-based monetisation dashboards",
                      "Introduced release-cycle cash flow forecasting",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Outcome */}
                <div className="bg-gradient-to-br from-purple-600/20 to-fuchsia-600/20 rounded-2xl p-6 border border-purple-500/30">
                  <div className="flex items-center gap-3 mb-4">
                    <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                    <h4 className="text-lg font-semibold text-white">Outcome</h4>
                  </div>
                  <ul className="space-y-3">
                    {[
                      "Improved monetisation visibility",
                      "Better funding and hiring decisions",
                      "Increased investor confidence",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Result metrics */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-slate-700/50">
                {[
                  { icon: TrendingUp, label: "Monetisation", value: "Clear Visibility" },
                  { icon: BarChart3, label: "Decision Making", value: "Data-Driven" },
                  { icon: LineChart, label: "Investor Confidence", value: "Significantly Increased" },
                ].map((metric, index) => (
                  <div key={index} className="text-center">
                    <metric.icon className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                    <div className="text-white font-semibold">{metric.value}</div>
                    <div className="text-slate-400 text-sm">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UseCaseSection;
