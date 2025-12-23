import { motion } from "framer-motion";
import { BarChart3, Wallet, PieChart, FileText, Users, Lightbulb } from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "Financial Planning & Forecasting",
    items: [
      "Annual and rolling forecasts",
      "Scenario and sensitivity analysis",
      "Growth and hiring impact modelling"
    ]
  },
  {
    icon: Wallet,
    title: "Cash Flow & Runway Management",
    items: [
      "Monthly burn-rate tracking",
      "Rolling cash flow forecasts",
      "Liquidity and funding requirement analysis"
    ]
  },
  {
    icon: PieChart,
    title: "Cost & Margin Visibility",
    items: [
      "Cloud infrastructure and tooling cost analysis",
      "R&D and product development cost tracking",
      "Unit economics and contribution margin analysis"
    ]
  },
  {
    icon: FileText,
    title: "Revenue Recognition & Reporting",
    items: [
      "Subscription and usage-based revenue tracking",
      "Deferred revenue and contract accounting",
      "Accurate monthly reporting aligned to standards"
    ]
  },
  {
    icon: Users,
    title: "Management, Board & Investor Reporting",
    items: [
      "Tech-focused MIS and KPI dashboards",
      "Investor-ready financial reporting",
      "Data-backed performance narratives"
    ]
  },
  {
    icon: Lightbulb,
    title: "CFO-Led Strategic Decision Support",
    items: [
      "Pricing and packaging decisions",
      "Expansion and market entry planning",
      "Capital allocation and funding strategy"
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
          <span className="inline-block px-4 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium mb-4">
            Our Approach
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How Growwth Partners Delivers Tech Business Finance Value
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            Our services are designed to bring discipline, clarity, and scalability to technology companies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-orange-500/50 transition-all duration-300 group shadow"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <ul className="space-y-3">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
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
