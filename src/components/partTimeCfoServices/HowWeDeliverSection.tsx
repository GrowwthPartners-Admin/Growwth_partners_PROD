import { motion } from "framer-motion";
import { Eye, Calculator, BarChart3, LineChart, Target, CheckCircle } from "lucide-react";

const services = [
  {
    icon: Eye,
    number: "01",
    title: "Financial Oversight & Governance",
    items: [
      "Review and interpretation of financial statements",
      "Identification of financial risks and inefficiencies",
      "Strengthening internal financial controls"
    ]
  },
  {
    icon: Calculator,
    number: "02",
    title: "Budgeting & Forecasting",
    items: [
      "Annual and rolling budgets",
      "Short- and mid-term forecasts",
      "Scenario and sensitivity analysis"
    ]
  },
  {
    icon: BarChart3,
    number: "03",
    title: "Cash Flow & Working Capital Management",
    items: [
      "Monthly cash flow projections",
      "Liquidity and runway analysis",
      "Receivables and payables optimisation"
    ]
  },
  {
    icon: LineChart,
    number: "04",
    title: "Performance & Management Reporting",
    items: [
      "Monthly MIS reports",
      "KPI dashboards aligned to business goals",
      "Variance and trend analysis"
    ]
  },
  {
    icon: Target,
    number: "05",
    title: "Strategic Decision Support",
    items: [
      "Pricing and margin analysis",
      "Expansion and investment decisions",
      "Cost optimisation initiatives"
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
          <span className="text-orange-400 font-semibold text-sm uppercase tracking-wider">Our Approach</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4">
            How Growwth Partners Delivers Part-Time CFO Value
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Our Part-Time CFO services are structured to bring clarity, control, and confidence to your financial function.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="text-4xl font-bold text-orange-500/30">{service.number}</div>
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              
              <ul className="space-y-3">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">{item}</span>
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
