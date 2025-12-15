import { motion } from "framer-motion";
import {
  Calculator,
  FileText,
  TrendingUp,
  Receipt,
  BarChart3,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    icon: Calculator,
    title: "Year-End Tax Computation",
    color: "from-brand-orange to-amber-500",
    items: [
      "Translate management accounts into taxable income",
      "Identify deductions, offsets and reliefs for SMEs",
      "Review non-deductible items and tax adjustments",
    ],
  },
  {
    icon: FileText,
    title: "FTA Lodgement and Compliance",
    color: "from-amber-500 to-yellow-500",
    items: [
      "Prepare and lodge company tax returns with the FTA",
      "Manage deadlines, extensions and correspondence",
      "Monitor notices and respond to FTA queries",
    ],
  },
  {
    icon: TrendingUp,
    title: "Tax Planning and Optimisation",
    color: "from-yellow-500 to-orange-400",
    items: [
      "Assess eligibility for small business relief and relevant concessions",
      "Advise on timing of revenue and expenses",
      "Provide structure guidance to improve long-term outcomes",
    ],
  },
  {
    icon: Receipt,
    title: "VAT, ESR and Cross-Checks",
    color: "from-orange-400 to-red-400",
    items: [
      "Align VAT records with year-end positions",
      "Support Economic Substance notifications and reports",
      "Keep documentation consistent across compliance touchpoints",
    ],
  },
  {
    icon: BarChart3,
    title: "Leadership Ready Reporting",
    color: "from-red-400 to-brand-orange",
    items: [
      "Plain English summaries of tax position and effective tax rate",
      "Schedules and workpapers for audit readiness",
      "Recommendations to strengthen UAE tax services throughout the year",
    ],
  },
];

const ServiceCard = ({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) => {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <div className="group relative h-full bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
        {/* Top gradient bar */}
        <div className={`h-2 bg-gradient-to-r ${service.color}`} />

        <div className="p-6 flex flex-col flex-1">
          <div
            className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
          >
            <Icon className="w-7 h-7 text-white" />
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-4">
            {service.title}
          </h3>

          {/* flex-1 ensures equal height across cards */}
          <ul className="space-y-3 flex-1">
            {service.items.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-orange/10 flex items-center justify-center mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-brand-orange" />
                </div>
                <span className="text-gray-600 text-sm leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

const WhatIncludesSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-brand-orange/10 text-brand-orange rounded-full text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Corporate Tax Filing{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-600">
              Includes
            </span>
          </h2>
        </motion.div>

        {/* First row: 3 cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {services.slice(0, 3).map((service, index) => (
            <div key={service.title} className="w-full max-w-md mx-auto">
              <ServiceCard service={service} index={index} />
            </div>
          ))}
        </div>

        {/* Second row: 2 cards centered */}
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-center gap-16 mb-12">
          {services.slice(3).map((service, index) => (
            <div key={service.title} className="w-full max-w-md mx-auto">
              <ServiceCard service={service} index={index + 3} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIncludesSection;
