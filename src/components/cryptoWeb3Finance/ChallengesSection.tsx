import { motion } from "framer-motion";
import { AlertTriangle, FileX, Wallet, TrendingDown, Shield, Users, CheckCircle, BarChart3 } from "lucide-react";

const challenges = [
  { icon: FileX, text: "Incorrect or inconsistent token accounting" },
  { icon: Wallet, text: "Poor treasury visibility across wallets and exchanges" },
  { icon: TrendingDown, text: "Exposure to liquidity and volatility risk" },
  { icon: Shield, text: "Weak financial governance and controls" },
  { icon: Users, text: "Difficulty satisfying investor and regulator expectations" },
  { icon: BarChart3, text: "Inconsistent reporting across fiat and digital assets" }
];

const benefits = [
  "Web3-experienced CFO and finance team",
  "Token-aware accounting and reporting",
  "Treasury and liquidity dashboards",
  "Compliance-ready financial documentation",
  "Investor-grade financial transparency",
  "Scalable finance infrastructure as the ecosystem grows"
];

const ChallengesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-red-100 text-red-600 rounded-full text-sm font-medium mb-4">
            Challenges & Solutions
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Key Financial Challenges in Crypto & Web3 Businesses
          </h2>
          <p className="text-lg text-slate-600">
            These challenges directly impact credibility and funding potential
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Challenges Grid */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-red-50 to-purple-50 rounded-3xl p-8 border border-red-100">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-red-500" />
                Common Pain Points
              </h3>
              <div className="grid gap-4">
                {challenges.map((challenge, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3 bg-white rounded-xl p-4 shadow"
                  >
                    <challenge.icon className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span className="text-slate-700">{challenge.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* What You Get */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-purple-500 to-cyan-500 rounded-3xl p-8 text-white h-full">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <CheckCircle className="w-6 h-6" />
                What You Get with Our Crypto & Web3 Finance Services
              </h3>
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3 bg-white/20 rounded-xl p-4 shadow"
                  >
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span>{benefit}</span>
                  </motion.div>
                ))}
              </div>
              <div className="bg-white/20 rounded-xl p-6 text-center">
                <p className="font-semibold">
                  Our focus is to help Web3 businesses look institutional without losing decentralisation benefits.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;
