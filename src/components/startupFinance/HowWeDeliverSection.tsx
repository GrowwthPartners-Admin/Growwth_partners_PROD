import { motion } from "framer-motion";
import { Settings, Target, Wallet, BarChart3, FileText } from "lucide-react";

const deliverySteps = [
  {
    icon: Settings,
    title: "Financial Setup & Structuring",
    items: [
      "Chart of accounts design aligned to business model",
      "Cloud accounting system implementation",
      "Basic financial controls and processes",
    ],
  },
  {
    icon: Target,
    title: "Budgeting & Forecasting",
    items: [
      "Annual and rolling budgets",
      "12–36 month financial forecasts",
      "Scenario and sensitivity analysis",
    ],
  },
  {
    icon: Wallet,
    title: "Cash Flow & Runway Management",
    items: [
      "Monthly burn-rate tracking",
      "Runway forecasting",
      "Liquidity risk identification",
    ],
  },
  {
    icon: BarChart3,
    title: "Unit Economics & Performance Metrics",
    items: [
      "CAC, LTV, contribution margin analysis",
      "Cost structure and pricing insights",
      "KPI dashboards aligned to growth goals",
    ],
  },
  {
    icon: FileText,
    title: "Investor & Board Reporting",
    items: [
      "Investor-ready financial statements",
      "Performance dashboards",
      "Financial narratives aligned to pitch decks",
    ],
  },
];

const HowWeDeliverSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-teal-400 font-semibold text-sm uppercase tracking-wider">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-6">
            How Growwth Partners Delivers Startup Finance Value
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Our Startup Finance services are built to create clarity, discipline,
            and scalability from the earliest stages.
          </p>
        </motion.div>

        {/* ✅ Center last row (2 cards) by using 6-column grid on lg */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 max-w-8xl mx-auto">
          {deliverySteps.map((step, index) => {
            const isLastRow = index >= 3; // last 2 cards for 5-item list

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`
                  bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6
                  hover:bg-white/10 transition-all duration-300 group
                  lg:${isLastRow ? "col-span-3" : "col-span-2"}
                `}
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-400 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <span className="text-orange-400 text-sm font-semibold">
                      Step {index + 1}
                    </span>
                    <h3 className="text-lg font-bold text-white">{step.title}</h3>
                  </div>
                </div>

                <ul className="space-y-3">
                  {step.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-slate-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowWeDeliverSection;
