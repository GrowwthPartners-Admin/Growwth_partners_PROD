import { motion } from "framer-motion";
import { LineChart, AlertTriangle, Activity, DollarSign, MessageSquare,Shield } from "lucide-react";

export const WhatRyzupDoesSection = () => {
  const features = [
    {
      icon: LineChart,
      title: "Automated Financial Forecasting",
      description: "See cash flow and revenue projections instantly. No manual model building. No fragile spreadsheet logic.",
    },
    {
      icon: AlertTriangle,
      title: "Anomaly Detection",
      description: "RyzUp flags unusual spend, broken P&L lines, and margin leaks before they become a problem.",
    },
    {
      icon: Activity,
      title: "Real-Time Performance Insights",
      description: "Track performance across revenue, cost, marketing efficiency, burn rate, and runway without waiting for end-of-month reports.",
    },
    {
      icon: DollarSign,
      title: "Spend and Budget Control",
      description: "Understand what each team is spending, what it is doing to your margins, and what needs to change.",
    },
    {
      icon: MessageSquare,
      title: "Finance Co-Pilot",
      description: "Ask questions in plain English and get answers. What changed in payroll cost this month? Which campaign is wasting money? How long will our current cash last?",
    },
    {
      icon: Shield, 
      title: "Data Anonymization & Security",
      description: "Your sensitive data is safe and secure. We use industry-leading anonymization techniques to protect proprietary information while delivering accurate insights.",
    },
  ];

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What RyzUp Actually Does</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Think of RyzUp as your intelligent finance layer. It plugs into your existing data and turns it into visibility, control, and action.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-blue-50/50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200 w-full"
            >
              <div className="w-12 h-12 bg-brand-orange/10 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-brand-orange" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-700 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-lg font-semibold text-brand-orange">
            This is where AI in finance stops being theory and becomes an operational advantage.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
