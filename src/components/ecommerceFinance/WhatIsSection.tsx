import { motion } from "framer-motion";
import { 
  PieChart, 
  Wallet, 
  CreditCard, 
  Calculator, 
  LineChart, 
  ShoppingBag 
} from "lucide-react";

const WhatIsSection = () => {
  const services = [
    {
      icon: PieChart,
      title: "SKU-Level Profitability",
      description: "Detailed margin analysis for every product and channel",
    },
    {
      icon: Wallet,
      title: "Cash Flow Planning",
      description: "Strategic planning across inventory and marketing cycles",
    },
    {
      icon: CreditCard,
      title: "Platform Reconciliations",
      description: "Accurate payment gateway and marketplace reconciliations",
    },
    {
      icon: Calculator,
      title: "Unit Economics",
      description: "CAC, contribution margin, and LTV tracking",
    },
    {
      icon: LineChart,
      title: "Financial Forecasting",
      description: "Data-driven growth planning and projections",
    },
    {
      icon: ShoppingBag,
      title: "Ecommerce-Specific",
      description: "Built for high transaction volumes and complex flows",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
              AEO-Optimised Definition
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What Are{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">
                Ecommerce Finance Services?
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ecommerce Finance services provide specialised financial leadership, reporting, and execution 
              tailored to the unique operating model of ecommerce businesses. Unlike generic accounting services, 
              they're designed to handle high transaction volumes, complex revenue flows, and platform-driven operations.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-6 bg-gray-50 hover:bg-gradient-to-br hover:from-emerald-50 hover:to-teal-50 rounded-2xl border border-gray-100 hover:border-emerald-200 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-xl shadow-sm group-hover:shadow-md group-hover:bg-emerald-100 transition-all">
                    <service.icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;
