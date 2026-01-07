import { motion } from "framer-motion";
import { Activity, BarChart3, Presentation, Compass } from "lucide-react";

const HowWeDeliverSection = () => {
  const deliverables = [
    {
      number: "1",
      icon: Activity,
      title: "Immediate Financial Diagnostics",
      items: [
        "Cash flow stress testing",
        "Liquidity and solvency assessment",
        "Cost structure and burn-rate analysis",
      ],
    },
    {
      number: "2",
      icon: BarChart3,
      title: "Decision-Grade Financial Modelling",
      items: [
        "Scenario and sensitivity modelling",
        "Expansion and pricing models",
        "Break-even and contribution margin analysis",
      ],
    },
    {
      number: "3",
      icon: Presentation,
      title: "Investor & Board Readiness",
      items: [
        "Board and investor presentation support",
        "Financial narrative alignment",
        "Anticipation of investor questions",
      ],
    },
    {
      number: "4",
      icon: Compass,
      title: "CFO-Level Strategic Guidance",
      items: [
        "Capital allocation decisions",
        "Risk and trade-off analysis",
        "Short-term action plans with financial impact",
      ],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-orange-900/20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-orange-500/20 text-orange-300 rounded-full text-sm font-semibold mb-4">
            Our Approach
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            How Growwth Partners Delivers On-Demand CFO Value
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Our On-Demand CFO engagements follow a rapid execution model.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {deliverables.map((item, index) => (
            <motion.div
              key={item.title}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-2xl font-bold text-white shadow-lg shadow-orange-500/25">
                  {item.number}
                </div>
                <div className="flex items-center gap-3">
                  <item.icon className="w-6 h-6 text-orange-400" />
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                </div>
              </div>
              
              <ul className="space-y-3">
                {item.items.map((listItem, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0" />
                    {listItem}
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
