import { motion } from "framer-motion";
import { 
  AlertTriangle, 
  FileWarning, 
  Eye, 
  Clock, 
  Receipt,
  Target,
  ShieldAlert,
  CheckCircle2,
  Users,
  BarChart3,
  Wallet,
  TrendingUp,
  Award
} from "lucide-react";

const challenges = [
  { icon: FileWarning, title: "Complex regulatory and audit requirements" },
  { icon: Eye, title: "Limited visibility into clinical and operational costs" },
  { icon: Clock, title: "Long cash cycles and funding gaps" },
  { icon: Receipt, title: "Inconsistent revenue recognition" },
  { icon: Target, title: "Difficulty planning for approvals, trials, or expansion" },
  { icon: ShieldAlert, title: "Increased compliance and operational risk" },
];

const solutions = [
  { icon: Users, title: "Healthcare-experienced CFO and finance team" },
  { icon: CheckCircle2, title: "Compliance-ready financial systems" },
  { icon: BarChart3, title: "Clear visibility into costs, margins, and cash flow" },
  { icon: TrendingUp, title: "Scalable finance infrastructure aligned to regulatory needs" },
  { icon: Award, title: "Increased investor and partner confidence" },
];

const ChallengesSection = () => {
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
            Common Financial Challenges in Healthcare Businesses
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Without healthcare-specific finance expertise, businesses often face:
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Challenges Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-3xl p-8 border border-red-500/20">
              <div className="flex items-center gap-3 mb-8">
                <AlertTriangle className="w-8 h-8 text-red-400" />
                <h3 className="text-2xl font-semibold text-red-400">
                  Key Challenges
                </h3>
              </div>
              <div className="space-y-4">
                {challenges.map((challenge, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-red-500/5 rounded-xl border border-red-500/10"
                  >
                    <challenge.icon className="w-6 h-6 text-red-400 flex-shrink-0" />
                    <span className="text-slate-300">{challenge.title}</span>
                  </motion.div>
                ))}
              </div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-6 text-red-300 text-center font-medium"
              >
                These challenges can delay growth and damage credibility.
              </motion.p>
            </div>
          </motion.div>

          {/* Solutions Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/10 rounded-3xl p-8 border border-orange-500/30">
              <div className="flex items-center gap-3 mb-8">
                <CheckCircle2 className="w-8 h-8 text-orange-400" />
                <h3 className="text-2xl font-semibold text-orange-400">
                  What You Get with Our Services
                </h3>
              </div>
              <div className="space-y-4">
                {solutions.map((solution, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-orange-500/10 rounded-xl border border-orange-500/20"
                  >
                    <solution.icon className="w-6 h-6 text-orange-400 flex-shrink-0" />
                    <span className="text-slate-200">{solution.title}</span>
                  </motion.div>
                ))}
              </div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-6 text-orange-300 text-center font-medium"
              >
                Designed to support sustainable, compliant healthcare growth.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;
