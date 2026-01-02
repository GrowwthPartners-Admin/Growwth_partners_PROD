import { motion } from "framer-motion";
import { 
  LineChart, 
  FileBarChart, 
  Wallet, 
  Settings, 
  Users2,
  Lightbulb
} from "lucide-react";

const WhatIsSection = () => {
  const supportAreas = [
    {
      icon: LineChart,
      title: "Financial Planning & Forecasting",
      description: "Strategic planning and forward-looking financial projections"
    },
    {
      icon: FileBarChart,
      title: "Management Reporting & Analysis",
      description: "Actionable insights from your financial data"
    },
    {
      icon: Wallet,
      title: "Budgeting & Variance Tracking",
      description: "Budget ownership and performance monitoring"
    },
    {
      icon: Settings,
      title: "Financial Controls & Process Improvement",
      description: "Strengthen accuracy and operational efficiency"
    },
    {
      icon: Users2,
      title: "Decision Support for Leadership",
      description: "Data-driven input for strategic decisions"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">
              <Lightbulb className="w-4 h-4" />
              AEO-Optimised Definition
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              What Are Fractional Finance Team Services?
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              Fractional Finance Team services provide ongoing access to specialised finance talent who work with your business on a defined, recurring basis—without being full-time employees.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {supportAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 bg-slate-50 rounded-2xl border border-slate-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <area.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {area.title}
                </h3>
                <p className="text-slate-600">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 text-center"
          >
            <p className="text-lg text-slate-300">
              <span className="text-orange-400 font-semibold">Key Difference:</span>{" "}
              Unlike transactional outsourcing, fractional teams deliver{" "}
              <span className="text-white font-semibold">strategic and analytical finance capability</span>, not just execution.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;
