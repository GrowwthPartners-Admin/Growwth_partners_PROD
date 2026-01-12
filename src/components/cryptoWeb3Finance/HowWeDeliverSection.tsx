import { motion } from "framer-motion";
import { Coins, Wallet, TrendingUp, FileText, Users } from "lucide-react";

const services = [
  {
    icon: Coins,
    title: "Token & Digital Asset Accounting",
    items: [
      "Classification of tokens (utility, governance, rewards)",
      "Fair value and cost basis tracking",
      "On-chain and off-chain reconciliation",
      "Accounting treatment aligned with reporting standards"
    ]
  },
  {
    icon: Wallet,
    title: "Treasury & Liquidity Management",
    items: [
      "Multi-wallet and exchange visibility",
      "Fiat and crypto cash flow forecasting",
      "Volatility and liquidity risk monitoring",
      "Treasury allocation frameworks"
    ]
  },
  {
    icon: TrendingUp,
    title: "Revenue Recognition & Web3 Economics",
    items: [
      "Revenue models for Web3 platforms",
      "Subscription, protocol, staking, and transaction revenue",
      "Recognition timing and controls"
    ]
  },
  {
    icon: FileText,
    title: "Financial Reporting & Governance",
    items: [
      "Monthly MIS across fiat and crypto assets",
      "Investor-ready dashboards",
      "Strong audit trails and documentation"
    ]
  },
  {
    icon: Users,
    title: "CFO-Led Strategic & Compliance Support",
    items: [
      "Investor and board reporting",
      "Risk management frameworks",
      "Support during audits, fundraising, and regulatory reviews"
    ]
  }
];

const HowWeDeliverSection = () => {
  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium mb-4">
            Our Approach
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How Growwth Partners Delivers Crypto & Web3 Finance Value
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            Our services are designed to bring structure, transparency, and institutional discipline to decentralised business models
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 3).map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-purple-500/50 transition-all duration-300 group shadow"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <ul className="space-y-3">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom row - 2 cards centered */}
        <div className="flex flex-col md:flex-row justify-center gap-6 mt-6">
          {services.slice(3).map((service, index) => (
            <motion.div
              key={index + 3}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index + 3) * 0.1 }}
              className="w-full md:max-w-md bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-purple-500/50 transition-all duration-300 group shadow"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <ul className="space-y-3">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeDeliverSection;
