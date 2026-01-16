import { motion } from "framer-motion";
import { 
  AlertTriangle, 
  BarChart3, 
  DollarSign, 
  TrendingDown, 
  Users, 
  FileWarning,
  CheckCircle2,
  Trophy,
  Zap,
  Eye,
  LineChart,
  FileText
} from "lucide-react";

const challenges = [
  {
    icon: BarChart3,
    title: "Fragmented Revenue",
    description: "Revenue scattered across ads, IAPs, subscriptions, sponsorships, and events",
  },
  {
    icon: Eye,
    title: "Poor Cost Visibility",
    description: "Limited insight into development and live-ops costs across titles",
  },
  {
    icon: TrendingDown,
    title: "Volatile Cash Flows",
    description: "Unpredictable cash flows linked to releases or tournaments",
  },
  {
    icon: Users,
    title: "Weak Cohort Analysis",
    description: "Poor player-level or cohort-level profitability analysis",
  },
  {
    icon: FileWarning,
    title: "Forecasting Difficulties",
    description: "Difficulty forecasting performance and funding needs accurately",
  },
  {
    icon: AlertTriangle,
    title: "Investor Scepticism",
    description: "Inconsistent reporting leading to investor scepticism",
  },
];

const solutions = [
  { icon: Trophy, text: "Gaming-experienced CFO and finance team" },
  { icon: BarChart3, text: "Title-level and player-level profitability dashboards" },
  { icon: Eye, text: "Clear visibility into monetisation and costs" },
  { icon: DollarSign, text: "Predictable cash flow and funding insights" },
  { icon: FileText, text: "Investor-grade reporting and metrics" },
];

const ChallengesSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Common Financial Challenges in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400">
              Esports & Gaming
            </span>
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Without specialised finance support, gaming businesses often face challenges 
            that intensify as scale and global reach increase.
          </p>
        </motion.div>

        {/* Challenges grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-4 group-hover:bg-red-500/30 transition-colors">
                <challenge.icon className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {challenge.title}
              </h3>
              <p className="text-slate-400">
                {challenge.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Solutions section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-purple-600/20 to-fuchsia-600/20 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-purple-500/30"
        >
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 text-purple-300 text-sm font-medium mb-6">
                <Zap className="w-4 h-4" />
                <span>The Solution</span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                What You Get with Our Gaming Finance Services
              </h3>
              
              <p className="text-slate-300 mb-6">
                Designed to support commercially successful, financially sustainable gaming businesses.
              </p>
            </div>

            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-4 bg-slate-800/50 rounded-xl p-4 border border-slate-700/50"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-fuchsia-500 flex items-center justify-center flex-shrink-0">
                    <solution.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white font-medium">{solution.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ChallengesSection;
