import { motion } from "framer-motion";
import { Target, TrendingUp, FileText, DollarSign, Sparkles } from "lucide-react";

const HowWeDeliverSection = () => {
  const deliveryAreas = [
    {
      title: "Strategic Financial Planning & Forecasting",
      icon: Target,
      color: "from-indigo-500 to-purple-500",
      items: [
        "Annual and rolling budgets",
        "12–24 month cash flow forecasts",
        "Scenario and sensitivity modelling",
        "Growth and expansion planning",
      ],
    },
    {
      title: "Cash Flow & Working Capital Management",
      icon: DollarSign,
      color: "from-emerald-500 to-teal-500",
      items: [
        "Burn-rate monitoring",
        "Liquidity optimisation",
        "Accounts receivable & payable strategy",
      ],
    },
    {
      title: "Management & Board Reporting",
      icon: FileText,
      color: "from-purple-500 to-pink-500",
      items: [
        "Monthly MIS (P&L, balance sheet, cash flow)",
        "KPI and performance dashboards",
        "Variance and trend analysis",
      ],
    },
    {
      title: "Fundraising & Investor Support",
      icon: TrendingUp,
      color: "from-orange-500 to-amber-500",
      items: [
        "Financial models aligned to growth strategy",
        "Pitch deck financial narratives",
        "Due diligence preparation and support",
      ],
    },
    {
      title: "AI-Enabled Finance Workflows",
      icon: Sparkles,
      color: "from-cyan-500 to-blue-500",
      items: [
        "Real-time dashboards",
        "Automated reporting",
        "Predictive cash flow and performance insights",
      ],
    },
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            How Growwth Partners Delivers Virtual CFO Value
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Comprehensive financial leadership across all critical areas
          </p>
        </motion.div>

        <div className="max-w-8xl mx-auto">
          {/* 3 + 2 centered */}
          <div className="space-y-6">
            {/* Row 1 */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {deliveryAreas.slice(0, 3).map((area, index) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all group"
                >
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${area.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
                  >
                    <area.icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4">
                    {area.title}
                  </h3>

                  <ul className="space-y-3">
                    {area.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-slate-300"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Row 2 (centered) */}
            <div className="flex flex-col lg:flex-row justify-center gap-6">
              {deliveryAreas.slice(3).map((area, i) => {
                const index = i + 3; // keep animation stagger consistent
                return (
                  <motion.div
                    key={area.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="w-full lg:max-w-[520px]"
                  >
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all group h-full">
                      <div
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${area.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
                      >
                        <area.icon className="w-7 h-7 text-white" />
                      </div>

                      <h3 className="text-xl font-bold text-white mb-4">
                        {area.title}
                      </h3>

                      <ul className="space-y-3">
                        {area.items.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-slate-300"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeDeliverSection;
