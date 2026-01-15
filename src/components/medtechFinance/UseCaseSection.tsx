import { motion } from "framer-motion";
import { 
  Building2, 
  AlertCircle, 
  Wrench, 
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Smartphone
} from "lucide-react";

const challenges = [
  "Regulatory compliance requirements",
  "Long product and approval cycles",
  "Limited cost visibility",
];

const solutions = [
  "Implemented compliance-ready finance systems",
  "Built cash flow and runway forecasts",
  "Delivered investor-ready reporting",
];

const outcomes = [
  "Improved compliance confidence",
  "Better cost control",
  "Stronger financial planning for growth and funding",
];

const UseCaseSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-brand-orange/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Practical Use Case
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-3xl p-8 md:p-12 border border-orange-500/20 shadow-2xl">
            {/* Client Type Header */}
            <div className="flex items-center gap-4 mb-10">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <div>
                <p className="text-orange-400 text-sm font-medium uppercase tracking-wider">Client Type</p>
                <h3 className="text-2xl font-bold text-white">Digital Health Platform (Singapore)</h3>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Challenges */}
              <div className="bg-red-500/5 rounded-2xl p-6 border border-red-500/20">
                <div className="flex items-center gap-3 mb-6">
                  <AlertCircle className="w-6 h-6 text-red-400" />
                  <h4 className="text-lg font-semibold text-red-400">Challenges</h4>
                </div>
                <ul className="space-y-3">
                  {challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-slate-300">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solution */}
              <div className="bg-orange-500/10 rounded-2xl p-6 border border-orange-500/20">
                <div className="flex items-center gap-3 mb-6">
                  <Wrench className="w-6 h-6 text-orange-400" />
                  <h4 className="text-lg font-semibold text-orange-400">Growwth Partners Solution</h4>
                </div>
                <ul className="space-y-3">
                  {solutions.map((solution, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-200">{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outcome */}
              <div className="bg-green-500/10 rounded-2xl p-6 border border-green-500/20">
                <div className="flex items-center gap-3 mb-6">
                  <TrendingUp className="w-6 h-6 text-green-400" />
                  <h4 className="text-lg font-semibold text-green-400">Outcome</h4>
                </div>
                <ul className="space-y-3">
                  {outcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <ArrowRight className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-200">{outcome}</span>
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
