import { motion } from "framer-motion";
import { Coins, Wallet, TrendingUp, FileText, Shield } from "lucide-react";

const features = [
  {
    icon: Coins,
    title: "Token Accounting",
    description: "Token and digital asset accounting with proper classification"
  },
  {
    icon: Wallet,
    title: "Treasury Management",
    description: "Treasury and liquidity management across wallets"
  },
  {
    icon: TrendingUp,
    title: "Revenue Recognition",
    description: "Revenue recognition for Web3 models"
  },
  {
    icon: FileText,
    title: "Investor Reporting",
    description: "Investor-grade and regulator-ready reporting"
  },
  {
    icon: Shield,
    title: "Risk Controls",
    description: "Financial governance and risk controls"
  }
];

const WhatIsSection = () => {
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
          <span className="inline-block px-4 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium mb-4">
            Definition
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            What Are Crypto & Web3 Finance Services?
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Crypto & Web3 Finance services deliver specialised financial leadership and execution tailored to blockchain-based business models. Unlike conventional finance services, Web3 finance requires deep understanding of token mechanics, valuation volatility, and compliance expectations—not just bookkeeping.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-slate-50 to-purple-50 rounded-2xl p-6 border border-purple-100 hover:shadow-lg hover:border-purple-200 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;
