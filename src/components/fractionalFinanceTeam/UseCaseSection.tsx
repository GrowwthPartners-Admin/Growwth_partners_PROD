import { motion } from "framer-motion";
import { 
  Building2, 
  AlertCircle, 
  Wrench, 
  Trophy,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

const UseCaseSection = () => {
  const challenges = [
    "Accurate bookkeeping but weak forecasting",
    "Limited visibility into ARR and margins",
    "Founder-driven financial analysis"
  ];

  const solutions = [
    "Deployed a Fractional Finance Team",
    "Built rolling forecasts and KPI dashboards",
    "Integrated analysis with CFO-led strategy reviews"
  ];

  const outcomes = [
    "Improved forecasting accuracy",
    "Better investor and board reporting",
    "Increased confidence in growth decisions"
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">
              <Trophy className="w-4 h-4" />
              Success Story
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Practical Use Case
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-to-br from-slate-900 via-slate-800 to-orange-900 rounded-3xl overflow-hidden"
          >
            {/* Header */}
            <div className="px-8 py-6 border-b border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center">
                  <Building2 className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">SaaS Company</h3>
                  <p className="text-slate-400">Singapore</p>
                </div>
              </div>
            </div>

            {/* Content Grid */}
            <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
              {/* Challenges */}
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <AlertCircle className="w-5 h-5 text-red-400" />
                  <h4 className="text-lg font-semibold text-white">Challenges</h4>
                </div>
                <ul className="space-y-3">
                  {challenges.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-slate-300">
                      <span className="w-1.5 h-1.5 mt-2 rounded-full bg-red-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solution */}
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <Wrench className="w-5 h-5 text-blue-400" />
                  <h4 className="text-lg font-semibold text-white">Growwth Partners Solution</h4>
                </div>
                <ul className="space-y-3">
                  {solutions.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-slate-300">
                      <span className="w-1.5 h-1.5 mt-2 rounded-full bg-blue-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outcome */}
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <Trophy className="w-5 h-5 text-green-400" />
                  <h4 className="text-lg font-semibold text-white">Outcome</h4>
                </div>
                <ul className="space-y-3">
                  {outcomes.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-slate-300">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 text-green-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Footer */}
            <div className="px-8 py-6 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-t border-white/10">
              <div className="flex items-center justify-center gap-3 text-green-400">
                <CheckCircle2 className="w-5 h-5" />
                <span className="font-semibold">Finance function transformed without permanent headcount</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UseCaseSection;
