import { motion } from "framer-motion";
import { 
  AlertTriangle, 
  FileX, 
  Clock, 
  GitMerge, 
  Eye, 
  DoorOpen,
  Users,
  CheckCircle2,
  Shield,
  TrendingUp,
  Zap,
  FileCheck
} from "lucide-react";

const challenges = [
  { icon: FileX, text: "Inconsistent reporting across portfolio companies" },
  { icon: Clock, text: "Delayed or incomplete management information" },
  { icon: GitMerge, text: "Weak post-acquisition integration" },
  { icon: Eye, text: "Limited visibility into value creation initiatives" },
  { icon: DoorOpen, text: "Exit delays due to financial readiness gaps" },
  { icon: Users, text: "Overreliance on portfolio management teams" }
];

const benefits = [
  { icon: Users, text: "PE-experienced CFO and finance team" },
  { icon: FileCheck, text: "Consistent, deal-ready financial reporting" },
  { icon: Eye, text: "Clear visibility into portfolio performance" },
  { icon: Zap, text: "Faster value creation and decision-making" },
  { icon: Shield, text: "Reduced risk during exits and transactions" }
];

const ChallengesSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Common Financial Challenges in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                Private Equity
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Without PE-focused finance expertise, firms often face these challenges that directly impact IRR and exit timing.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Left - Challenges */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-orange-500/5 rounded-3xl" />
              <div className="relative p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg">
                    <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Without PE-focused finance expertise:</h3>
                </div>

                <div className="grid gap-4">
                  {challenges.map((challenge, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800/50 rounded-xl border border-red-200 dark:border-red-900/30"
                    >
                      <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg shrink-0">
                        <challenge.icon className="w-5 h-5 text-red-600 dark:text-red-400" />
                      </div>
                      <span className="text-foreground">{challenge.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right - What You Get */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 rounded-3xl" />
              <div className="relative p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">What You Get with Our Services:</h3>
                </div>

                <div className="grid gap-4 mb-8">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800/50 rounded-xl border border-emerald-200 dark:border-emerald-900/30"
                    >
                      <div className="p-2 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg shrink-0">
                        <benefit.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-foreground font-medium">{benefit.text}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="p-6 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-5 h-5" />
                    <span className="font-semibold">Built for Success</span>
                  </div>
                  <p className="text-white/90">
                    Designed to support faster, cleaner, and higher-quality exits.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;
