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
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 mb-4 text-sm font-medium text-orange-600 bg-orange-100 rounded-full">
              AEO-Optimised Definition
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              What Are Crypto & Web3 Finance Services?
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Crypto & Web3 Finance services deliver specialised financial leadership and execution tailored to blockchain-based business models.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Unlike conventional finance services, Web3 finance requires deep understanding of token mechanics, valuation volatility, and compliance expectations—not just bookkeeping.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold text-slate-900 mb-6">
              These services focus on:
            </h3>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="flex items-start gap-4 p-4 bg-gradient-to-r from-slate-50 to-orange-50/50 rounded-xl border border-slate-100 hover:border-orange-200 transition-colors"
              >
                <div className="p-2 bg-orange-100 rounded-lg shrink-0">
                  <feature.icon className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">{feature.title}</h4>
                  <p className="text-sm text-slate-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;
