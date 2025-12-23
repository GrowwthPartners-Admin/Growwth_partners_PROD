import { motion } from "framer-motion";
import { Target, DollarSign, BarChart3, Users, Shield } from "lucide-react";

const deliverables = [
  {
    number: "01",
    icon: Target,
    title: "Financial Strategy & Planning",
    items: [
      "Annual and multi-year financial planning",
      "Budget ownership and forecasting discipline",
      "Scenario and sensitivity analysis"
    ]
  },
  {
    number: "02",
    icon: DollarSign,
    title: "Cash Flow & Capital Management",
    items: [
      "Rolling cash flow forecasts",
      "Working capital optimisation",
      "Capital allocation and liquidity planning"
    ]
  },
  {
    number: "03",
    icon: BarChart3,
    title: "Management, Board & Investor Reporting",
    items: [
      "Monthly MIS (P&L, balance sheet, cash flow)",
      "KPI dashboards and performance insights",
      "Board and investor-ready reporting"
    ]
  },
  {
    number: "04",
    icon: Users,
    title: "Finance Team Oversight",
    items: [
      "Management of bookkeeping and accounting teams",
      "Payroll oversight and compliance coordination",
      "Process improvement and automation"
    ]
  },
  {
    number: "05",
    icon: Shield,
    title: "Financial Controls & Governance",
    items: [
      "Policy implementation",
      "Approval and control frameworks",
      "Risk and compliance oversight"
    ]
  }
];

const HowWeDeliverSection = () => {
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
          <span className="inline-block px-4 py-2 bg-orange-500/20 text-orange-300 rounded-full text-sm font-semibold mb-4">
            Our Methodology
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How Growwth Partners Delivers Outsourced CFO Value
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Our Outsourced CFO services follow a structured, end-to-end execution model
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverables.map((deliverable, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-orange-500/50 transition-all group ${index === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-4xl font-bold text-orange-500/30 group-hover:text-orange-500/50 transition-colors">
                    {deliverable.number}
                  </span>
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <deliverable.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">{deliverable.title}</h3>
                
                <ul className="space-y-2">
                  {deliverable.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2 text-slate-300">
                      <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
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

export default HowWeDeliverSection;
