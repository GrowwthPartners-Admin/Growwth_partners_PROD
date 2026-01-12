import { motion } from "framer-motion";
import { Building2, AlertCircle, Lightbulb, CheckCircle, TrendingUp } from "lucide-react";

const UseCaseSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
            Practical Use Case
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
            Real Results for Real Startups
          </h2>
        </motion.div>

        <div className="max-w-8xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100"
          >
            {/* Header */}
            <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Fintech Startup</h3>
                  <p className="text-teal-100">Singapore | Pre-Series A</p>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Challenges */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <AlertCircle className="w-5 h-5 text-red-500" />
                    <h4 className="font-bold text-gray-900">Challenges</h4>
                  </div>
                  <ul className="space-y-3">
                    {[
                      "No structured financial systems",
                      "Unclear cash runway",
                      "Weak investor reporting",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-600">
                        <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solution */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Lightbulb className="w-5 h-5 text-yellow-600" />
                    <h4 className="font-bold text-gray-900">Our Solution</h4>
                  </div>
                  <ul className="space-y-3">
                    {[
                      "Set up cloud accounting and controls",
                      "Built rolling cash flow and forecast models",
                      "Delivered investor-ready financial dashboards",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-600">
                        <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Outcome */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <h4 className="font-bold text-gray-900">Outcome</h4>
                  </div>
                  <ul className="space-y-3">
                    {[
                      "Improved cash flow visibility",
                      "Stronger investor confidence",
                      "Successful funding discussions",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-600">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Impact Banner */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="mt-8 bg-gradient-to-r from-teal-50 to-emerald-50 rounded-2xl p-6 border border-teal-200"
              >
                <div className="flex items-center justify-center gap-3">
                  <TrendingUp className="w-6 h-6 text-teal-600" />
                  <p className="text-teal-800 font-semibold text-lg">
                    From financial uncertainty to investor-ready in weeks
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UseCaseSection;
