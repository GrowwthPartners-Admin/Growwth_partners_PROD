import { motion } from "framer-motion";
import { Coins, Wallet, TrendingUp, FileText, Users } from "lucide-react";

const services = [
  {
    icon: Coins,
    number: "01",
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
    number: "02",
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
    number: "03",
    title: "Revenue Recognition & Web3 Economics",
    items: [
      "Revenue models for Web3 platforms",
      "Subscription, protocol, staking, and transaction revenue",
      "Recognition timing and controls"
    ]
  },
  {
    icon: FileText,
    number: "04",
    title: "Financial Reporting & Governance",
    items: [
      "Monthly MIS across fiat and crypto assets",
      "Investor-ready dashboards",
      "Strong audit trails and documentation"
    ]
  },
  {
    icon: Users,
    number: "05",
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
    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium text-orange-600 bg-orange-100 rounded-full">
            Our Approach
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            How Growwth Partners Delivers Crypto & Web3 Finance Value
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our Crypto & Web3 Finance services are designed to bring structure, transparency, and institutional discipline to decentralised business models.
          </p>
        </motion.div>

        {/* Cards: 3 + 2 centered */}
        <div className="space-y-8">
          {/* Row 1 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service, index) => (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="group relative p-6 bg-gradient-to-br from-slate-50 to-white rounded-2xl border shadow border-orange-300 hover:shadow-xl transition-all duration-300 h-full"
              >
                <div className="absolute top-4 right-4 text-5xl font-bold text-slate-100 group-hover:text-orange-100 transition-colors">
                  {service.number}
                </div>

                <div className="relative">
                  <div className="p-3 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl w-fit mb-4 shadow-lg shadow-orange-200">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-4 pr-12">
                    {service.title}
                  </h3>

                  <ul className="space-y-3">
                    {service.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-slate-600"
                      >
                        <span className="h-1.5 w-1.5 bg-orange-500 rounded-full mt-2 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Row 2 (centered) */}
          <div className="flex flex-col md:flex-row justify-center gap-8">
            {services.slice(3).map((service, index) => (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 3) }}
                className="w-full md:max-w-[520px]"
              >
                <div className="group relative p-6 bg-gradient-to-br from-slate-50 to-white rounded-2xl border shadow border-orange-300 hover:shadow-xl transition-all duration-300 h-full">
                  <div className="absolute top-4 right-4 text-5xl font-bold text-slate-100 group-hover:text-orange-100 transition-colors">
                    {service.number}
                  </div>

                  <div className="relative">
                    <div className="p-3 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl w-fit mb-4 shadow-lg shadow-orange-200">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-4 pr-12">
                      {service.title}
                    </h3>

                    <ul className="space-y-3">
                      {service.items.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-slate-600"
                        >
                          <span className="h-1.5 w-1.5 bg-orange-500 rounded-full mt-2 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeDeliverSection;
