import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  AlertTriangle, 
  Clock, 
  Eye, 
  FileWarning, 
  TrendingDown, 
  Users,
  CheckCircle2,
  Shield,
  BarChart3,
  PieChart,
  FileText,
  Zap
} from "lucide-react";

const challenges = [
  { icon: AlertTriangle, text: "Inconsistent NAV calculations" },
  { icon: Clock, text: "Delayed or error-prone LP reporting" },
  { icon: Eye, text: "Weak tracking of capital calls and distributions" },
  { icon: TrendingDown, text: "Limited portfolio performance visibility" },
  { icon: FileWarning, text: "Audit and compliance challenges" },
  { icon: Users, text: "Overreliance on administrators without internal oversight" },
];

const benefits = [
  { icon: Shield, text: "Fund-experienced CFO and finance team" },
  { icon: BarChart3, text: "Accurate NAV and capital tracking" },
  { icon: FileText, text: "LP-ready financial reports" },
  { icon: CheckCircle2, text: "Strong governance and audit readiness" },
  { icon: Zap, text: "Scalable finance infrastructure for fund growth" },
];

const ChallengesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
              Common Financial Challenges in{" "}
              <span className="text-blue-600 dark:text-blue-400">VC & Fund Management</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Without dedicated fund finance expertise, funds often face significant operational and credibility challenges.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Challenges */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 rounded-3xl bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30 border border-red-200 dark:border-red-800/50"
            >
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <AlertTriangle className="w-7 h-7 text-red-500" />
                Without Fund Finance Expertise
              </h3>
              <div className="space-y-4">
                {challenges.map((challenge, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/80 dark:bg-slate-800/80"
                  >
                    <challenge.icon className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span className="text-foreground">{challenge.text}</span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-6 p-4 rounded-xl bg-red-100 dark:bg-red-900/30 border border-red-200 dark:border-red-800">
                <p className="text-red-800 dark:text-red-200 font-medium text-sm">
                  These issues directly impact credibility with LPs and regulators.
                </p>
              </div>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-8 rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border border-blue-200 dark:border-blue-800/50"
            >
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <CheckCircle2 className="w-7 h-7 text-blue-600" />
                What You Get With Our Services
              </h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.08 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/80 dark:bg-slate-800/80"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-foreground font-medium">{benefit.text}</span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-6 p-4 rounded-xl bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800">
                <p className="text-blue-800 dark:text-blue-200 font-medium text-sm">
                  All delivered with institutional precision and confidentiality.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;
