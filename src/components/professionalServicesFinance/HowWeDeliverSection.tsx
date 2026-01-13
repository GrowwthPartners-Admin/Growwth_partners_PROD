import React from "react";
import { motion } from "framer-motion";
import { Receipt, Briefcase, Clock, TrendingUp, BarChart3, Users } from "lucide-react";

const services = [
  {
    icon: Receipt,
    number: "01",
    title: "Revenue Recognition & Billing Controls",
    items: [
      "Review and optimisation of billing processes",
      "Revenue recognition aligned to contracts and milestones",
      "Identification and reduction of revenue leakage"
    ]
  },
  {
    icon: Briefcase,
    number: "02",
    title: "Project & Client-Level Profitability",
    items: [
      "Project margin analysis",
      "Client profitability tracking",
      "Cost allocation across teams and resources"
    ]
  },
  {
    icon: Clock,
    number: "03",
    title: "Utilisation & Capacity Analysis",
    items: [
      "Billable vs non-billable time tracking",
      "Utilisation and recovery rate analysis",
      "Capacity planning aligned to growth goals"
    ]
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Cash Flow & Collections Management",
    items: [
      "Invoicing and receivables analysis",
      "Cash flow forecasting",
      "Credit and collection strategy optimisation"
    ]
  },
  {
    icon: BarChart3,
    number: "05",
    title: "Financial Planning & Forecasting",
    items: [
      "Headcount-driven forecasting models",
      "Scenario analysis for hiring and expansion",
      "Budget ownership and performance tracking"
    ]
  },
  {
    icon: Users,
    number: "06",
    title: "CFO-Led Strategic Support",
    items: [
      "Pricing and engagement structuring",
      "Expansion and scaling decisions",
      "Partner and leadership reporting"
    ]
  }
];

const HowWeDeliverSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-orange-900/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-orange-400 font-semibold text-sm uppercase tracking-wider">
            Our Approach
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
            How Growwth Partners Delivers{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">
              Professional Services Finance Value
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Our services are designed to bring clarity, accountability, and predictability to services-based businesses.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 bg-white text-orange-600 text-xs font-bold rounded-full flex items-center justify-center">
                    {service.number}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-orange-300 transition-colors">
                  {service.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
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
