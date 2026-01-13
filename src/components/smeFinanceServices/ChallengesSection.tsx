import { motion } from "framer-motion";
import { 
  TrendingDown, 
  Calculator, 
  Eye, 
  FileWarning, 
  User, 
  AlertTriangle,
  Users,
  Settings,
  BarChart3,
  TrendingUp,
  Shield,
  Zap
} from "lucide-react";

const challenges = [
  {
    icon: TrendingDown,
    title: "Unpredictable Cash Flow",
    description: "Difficulty forecasting cash needs"
  },
  {
    icon: Calculator,
    title: "Weak Budgeting",
    description: "No structured forecasting process"
  },
  {
    icon: Eye,
    title: "Limited Visibility",
    description: "Poor insight into costs and margins"
  },
  {
    icon: FileWarning,
    title: "Inconsistent Reporting",
    description: "Unreliable financial information"
  },
  {
    icon: User,
    title: "Founder Dependency",
    description: "Leaders stuck in finance decisions"
  },
  {
    icon: AlertTriangle,
    title: "Growth Planning Issues",
    description: "Difficulty planning for scale"
  }
];

const benefits = [
  {
    icon: Users,
    text: "Dedicated SME finance specialists"
  },
  {
    icon: Settings,
    text: "Structured finance processes and controls"
  },
  {
    icon: BarChart3,
    text: "Improved cash flow visibility"
  },
  {
    icon: TrendingUp,
    text: "Reliable financial reporting and insights"
  },
  {
    icon: Shield,
    text: "Reduced founder dependency"
  },
  {
    icon: Zap,
    text: "Scalable finance support as you grow"
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
            Common Financial Challenges Faced by SMEs
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Without disciplined finance systems, SMEs often face challenges that restrict scalability and increase financial risk.
          </p>
        </motion.div>

        {/* Challenges Grid */}
        <div className="relative mb-20">
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {challenges.map((challenge, index) => (
              <motion.div
                key={challenge.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="bg-gradient-to-br from-red-50 to-orange-50 border border-red-100 shadow rounded-2xl p-5 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-200 transition-colors mx-auto">
                    <challenge.icon className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 mb-2">{challenge.title}</h3>
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
              What You Get with Our SME Finance Services
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our services are designed to support growth without increasing complexity
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
