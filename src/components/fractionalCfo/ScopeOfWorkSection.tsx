import { motion } from "framer-motion";
import { Target, TrendingUp, BarChart3, Briefcase, Settings } from "lucide-react";

const ScopeOfWorkSection = () => {
  const scopeItems = [
    {
      number: "01",
      icon: Target,
      title: "Financial Strategy & Planning",
      items: [
        "Annual and rolling forecasts",
        "Scenario and sensitivity modelling",
        "Pricing and margin optimisation"
      ]
    },
    {
      number: "02",
      icon: TrendingUp,
      title: "Cash Flow & Runway Control",
      items: [
        "Burn-rate tracking",
        "Working capital management",
        "Liquidity stress testing"
      ]
    },
    {
      number: "03",
      icon: BarChart3,
      title: "Management & Board Reporting",
      items: [
        "Monthly MIS packs",
        "KPI dashboards",
        "Board-level insights"
      ]
    },
    {
      number: "04",
      icon: Briefcase,
      title: "Fundraising & Investor Readiness",
      items: [
        "Financial models",
        "Pitch deck financials",
        "Due diligence support"
      ]
    },
    {
      number: "05",
      icon: Settings,
      title: "Finance Function Oversight",
      items: [
        "Review of accounting and bookkeeping",
        "Strengthening controls and processes",
        "Finance team leadership"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-orange-900/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-orange-500/20 border border-orange-500/30 text-orange-300 rounded-full text-sm font-semibold mb-4">
            Our Approach
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Our Fractional CFO Scope of Work
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Comprehensive financial leadership tailored to your business needs
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scopeItems.map((scope, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-orange-500/30 transition-all duration-300 ${
                  index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl font-bold text-orange-500/30">
                    {scope.number}
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center">
                    <scope.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">
                  {scope.title}
                </h3>
                
                <ul className="space-y-3">
                  {scope.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScopeOfWorkSection;
