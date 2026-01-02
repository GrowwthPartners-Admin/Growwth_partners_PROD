import { motion } from "framer-motion";
import { AlertTriangle, BookOpen, Clock, Users, FileWarning, UserX, CheckCircle, TrendingUp, Shield, Zap, BarChart3, Settings } from "lucide-react";

const challenges = [
  {
    icon: BookOpen,
    title: "Incomplete Bookkeeping",
    description: "Records that don't capture the full picture"
  },
  {
    icon: Clock,
    title: "Delayed Month-End Closes",
    description: "Late financial data affecting decisions"
  },
  {
    icon: Users,
    title: "Poor Coordination",
    description: "Disconnect between finance and operations"
  },
  {
    icon: FileWarning,
    title: "Weak Documentation",
    description: "Unpreparedness for audits and reviews"
  },
  {
    icon: UserX,
    title: "Founder Dependency",
    description: "Leaders stuck in routine finance tasks"
  }
];

const benefits = [
  {
    icon: Users,
    text: "Dedicated part-time finance professionals"
  },
  {
    icon: BarChart3,
    text: "Structured monthly execution and reporting"
  },
  {
    icon: CheckCircle,
    text: "Clear ownership of finance tasks"
  },
  {
    icon: TrendingUp,
    text: "Reduced operational burden on founders"
  },
  {
    icon: Shield,
    text: "Improved data accuracy and reliability"
  },
  {
    icon: Settings,
    text: "Flexible engagement that scales with volume"
  }
];

const ChallengesSection = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brand-orange font-semibold text-sm uppercase tracking-wider">The Problem & Solution</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
            Common Finance Execution Challenges
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Without a dedicated finance team, businesses often experience issues that create operational risk and reduce decision-making confidence.
          </p>
        </motion.div>

        {/* Challenges Grid */}
        <div className="relative mb-20">
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {challenges.map((challenge, index) => (
              <motion.div
                key={challenge.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="bg-gradient-to-br from-red-50 to-orange-50 border border-red-100 rounded-2xl p-6 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-200 transition-colors">
                    <challenge.icon className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{challenge.title}</h3>
                  <p className="text-gray-600 text-sm">{challenge.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Decorative arrow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex justify-center my-12"
          >
            <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center shadow-lg shadow-brand-orange/30">
              <Zap className="w-8 h-8 text-white" />
            </div>
          </motion.div>
        </div>

        {/* Solution Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 md:p-12"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              What You Get with Our Part-Time Finance Team Services
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              This model ensures finance execution keeps pace with business growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-4 bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 bg-brand-orange/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-brand-orange" />
                </div>
                <span className="text-white font-medium">{benefit.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ChallengesSection;
