import { motion } from "framer-motion";
import { 
  AlertCircle, 
  Wrench, 
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Monitor
} from "lucide-react";

const challenges = [
  "High content creation costs",
  "Unclear cohort profitability",
  "Cash flow pressure during growth",
];

const solutions = [
  "Implemented cohort-level revenue and margin tracking",
  "Built enrolment-based forecasting models",
  "Delivered investor-ready dashboards",
];

const outcomes = [
  "Identified profitable and loss-making courses",
  "Improved pricing and content investment decisions",
  "Increased investor confidence during fundraising",
];

const UseCaseSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brand-orange font-semibold text-sm uppercase tracking-wider">
            Success Story
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
            Practical Use Case
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-8xl mx-auto"
        >
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 border border-gray-200 shadow-xl">
            {/* Client Type Header */}
            <div className="flex items-center gap-4 mb-10">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center shadow-lg">
                <Monitor className="w-8 h-8 text-white" />
              </div>
              <div>
                <p className="text-brand-orange text-sm font-medium uppercase tracking-wider">Client Type</p>
                <h3 className="text-2xl font-bold text-gray-900">Online Learning Platform (Singapore)</h3>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Challenges */}
              <div className="bg-red-50 rounded-2xl p-6 border border-red-100">
                <div className="flex items-center gap-3 mb-6">
                  <AlertCircle className="w-6 h-6 text-red-500" />
                  <h4 className="text-lg font-semibold text-red-600">Challenges</h4>
                </div>
                <ul className="space-y-3">
                  {challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-700">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solution */}
              <div className="bg-brand-orange/5 rounded-2xl p-6 border border-brand-orange/20">
                <div className="flex items-center gap-3 mb-6">
                  <Wrench className="w-6 h-6 text-brand-orange" />
                  <h4 className="text-lg font-semibold text-brand-orange">Growwth Partners Solution</h4>
                </div>
                <ul className="space-y-3">
                  {solutions.map((solution, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outcome */}
              <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
                <div className="flex items-center gap-3 mb-6">
                  <TrendingUp className="w-6 h-6 text-green-500" />
                  <h4 className="text-lg font-semibold text-green-600">Outcome</h4>
                </div>
                <ul className="space-y-3">
                  {outcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <ArrowRight className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{outcome}</span>
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
