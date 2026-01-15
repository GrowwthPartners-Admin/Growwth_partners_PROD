import { motion } from "framer-motion";
import { 
  FileCheck, 
  BarChart3, 
  Wallet, 
  Receipt,
  TrendingUp,
  Users,
  Shield
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Regulatory-Ready Financial Reporting",
    icon: FileCheck,
    items: [
      "Audit-ready financial statements",
      "Documentation aligned with healthcare regulations",
      "Support during audits and inspections",
    ],
  },
  {
    number: "02",
    title: "Cost & Margin Analysis",
    icon: BarChart3,
    items: [
      "Clinical, R&D, and operational cost tracking",
      "Product and service-level margin analysis",
      "Cost optimisation opportunities",
    ],
  },
  {
    number: "03",
    title: "Cash Flow & Funding Planning",
    icon: Wallet,
    items: [
      "Cash flow forecasting for long development cycles",
      "Funding and runway planning",
      "Scenario modelling for regulatory timelines",
    ],
  },
  {
    number: "04",
    title: "Revenue Recognition & Billing Controls",
    icon: Receipt,
    items: [
      "Revenue models aligned to healthcare services and products",
      "Accurate recognition timing and controls",
      "Billing process optimisation",
    ],
  },
  {
    number: "05",
    title: "Financial Planning & Forecasting",
    icon: TrendingUp,
    items: [
      "Healthcare-specific forecasting models",
      "Headcount, infrastructure, and expansion planning",
      "Capital allocation insights",
    ],
  },
  {
    number: "06",
    title: "CFO-Led Strategic & Compliance Support",
    icon: Users,
    items: [
      "Board and investor reporting",
      "Support for licensing, partnerships, and regulatory reviews",
      "Financial governance and risk management",
    ],
  },
];

const HowWeDeliverSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brand-orange font-semibold text-sm uppercase tracking-wider">
            Our Approach
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
            How Growwth Partners Delivers Healthcare Finance Value
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our MedTech & Healthcare Finance services are designed to deliver control, transparency, and regulatory confidence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 shadow-lg">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/20">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-4xl font-bold text-brand-orange/30 group-hover:text-brand-orange/50 transition-colors">
                    {service.number}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-brand-orange transition-colors">
                  {service.title}
                </h3>
                <ul className="space-y-3">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeDeliverSection;
