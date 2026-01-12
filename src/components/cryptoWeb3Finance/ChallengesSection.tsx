import { motion } from "framer-motion";
import { AlertTriangle, FileX, Wallet, TrendingDown, Shield, Users, CheckCircle, BarChart3, Scale } from "lucide-react";

const challenges = [
  { icon: FileX, text: "Incorrect or inconsistent token accounting" },
  { icon: Wallet, text: "Poor treasury visibility across wallets and exchanges" },
  { icon: TrendingDown, text: "Exposure to liquidity and volatility risk" },
  { icon: Shield, text: "Weak financial governance and controls" },
  { icon: Users, text: "Difficulty satisfying investor and regulator expectations" },
  { icon: BarChart3, text: "Inconsistent reporting across fiat and digital assets" }
];

const benefits = [
  { icon: Users, text: "Web3-experienced CFO and finance team" },
  { icon: CheckCircle, text: "Token-aware accounting and reporting" },
  { icon: BarChart3, text: "Treasury and liquidity dashboards" },
  { icon: Shield, text: "Compliance-ready financial documentation" },
  { icon: TrendingDown, text: "Investor-grade financial transparency" },
  { icon: Scale, text: "Scalable finance infrastructure as the ecosystem grows" }
];

const ChallengesSection = () => {
  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.1),transparent_70%)]" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Risks Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-8 bg-gradient-to-br from-red-500/10 to-transparent rounded-2xl border border-red-500/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-red-500/20 rounded-lg">
                  <AlertTriangle className="h-6 w-6 text-red-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Key Financial Challenges
                </h3>
              </div>
              <p className="text-slate-400 mb-8">
                Without Web3-specific finance expertise, companies often face:
              </p>
              <div className="space-y-4">
                {challenges.map((challenge, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700"
                  >
                    <challenge.icon className="h-5 w-5 text-red-400 shrink-0" />
                    <span className="text-slate-300">{challenge.text}</span>
                  </motion.div>
                ))}
              </div>
              <p className="mt-6 text-orange-400 font-medium">
                These challenges directly impact credibility and funding potential.
              </p>
            </div>
          </motion.div>

          {/* Benefits Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="p-8 bg-gradient-to-br from-orange-500/10 to-transparent rounded-2xl border border-orange-500/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-orange-500/20 rounded-lg">
                  <Scale className="h-6 w-6 text-orange-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  What You Get with Our Services
                </h3>
              </div>
              <p className="text-slate-400 mb-8">
                Our focus is to help Web3 businesses look institutional without losing decentralisation benefits.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700"
                  >
                    <benefit.icon className="h-5 w-5 text-orange-400 shrink-0" />
                    <span className="text-slate-300">{benefit.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;
