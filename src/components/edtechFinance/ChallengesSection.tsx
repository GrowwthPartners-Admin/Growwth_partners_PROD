import { motion } from "framer-motion";
import { 
  AlertTriangle, 
  Eye, 
  DollarSign, 
  Clock, 
  BarChart2,
  Target,
  CheckCircle2,
  Users,
  BarChart3,
  TrendingUp,
  Award,
  Wallet
} from "lucide-react";

const challenges = [
  { icon: Eye, title: "Poor cohort-level profitability visibility" },
  { icon: DollarSign, title: "High upfront content and platform costs" },
  { icon: Clock, title: "Long sales cycles and delayed cash inflows" },
  { icon: BarChart2, title: "Weak forecasting tied to enrolment variability" },
  { icon: Target, title: "Inaccurate revenue recognition for courses and subscriptions" },
  { icon: AlertTriangle, title: "Difficulty demonstrating unit economics to investors" },
];

const solutions = [
  { icon: Users, title: "EdTech-experienced CFO and finance team" },
  { icon: BarChart3, title: "Cohort-level and course-level profitability dashboards" },
  { icon: TrendingUp, title: "Clear visibility into learner economics" },
  { icon: Wallet, title: "Predictable cash flow and runway insights" },
  { icon: Award, title: "Investor-grade financial reporting and metrics" },
];

const ChallengesSection = () => {
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
          <span className="text-brand-orange font-semibold text-sm uppercase tracking-wider">Challenges & Solutions</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
            Common Financial Challenges in EdTech Businesses
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-8xl mx-auto mb-12">
          {/* Challenges Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 border border-red-100"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Without EdTech-focused finance expertise</h3>
            </div>
            
            <p className="text-gray-600 mb-6">
              Companies often face:
            </p>

            <div className="space-y-3">
              {challenges.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 bg-white p-4 rounded-xl shadow"
                >
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-red-500" />
                  </div>
                  <p className="text-gray-700">{item.title}</p>
                </motion.div>
              ))}
            </div>

            <p className="mt-6 text-gray-600 text-sm italic">
              These challenges directly impact valuation and funding outcomes.
            </p>
          </motion.div>

          {/* Benefits Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-100"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">What You Get with Our Services</h3>
            </div>

            <div className="space-y-3">
              {solutions.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 bg-white p-4 rounded-xl shadow"
                >
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-green-500" />
                  </div>
                  <p className="text-gray-700">{item.title}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl p-4 text-center">
              <p className="text-white font-medium flex items-center justify-center gap-2">
                Designed to support capital-efficient, scalable EdTech growth
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;
