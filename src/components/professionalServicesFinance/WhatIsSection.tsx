import React from "react";
import { motion } from "framer-motion";
import { Receipt, Briefcase, Clock, TrendingUp, BarChart3 } from "lucide-react";

const focusAreas = [
  {
    icon: Receipt,
    title: "Revenue Recognition & Billing Accuracy",
    description: "Ensure accurate billing aligned to contracts and milestones"
  },
  {
    icon: Briefcase,
    title: "Project & Client-Level Profitability",
    description: "Track margins at the project and client level"
  },
  {
    icon: Clock,
    title: "Utilisation & Capacity Analysis",
    description: "Optimize billable hours and team capacity"
  },
  {
    icon: TrendingUp,
    title: "Cash Flow & Collections Management",
    description: "Improve invoicing and receivables processes"
  },
  {
    icon: BarChart3,
    title: "Financial Forecasting & Performance Reporting",
    description: "Headcount-driven forecasting and KPI tracking"
  }
];

const WhatIsSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">
              What Are Professional Services Finance Services?
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6">
              Specialised Financial Leadership for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">
                Project-Driven Businesses
              </span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Professional Services Finance services provide specialised financial leadership and reporting tailored to time-based, project-driven business models.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Unlike product businesses, professional services finance requires tight integration between operations, billing, and finance.
            </p>
          </motion.div>

          {/* Right - Focus areas */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-slate-50 to-orange-50 rounded-3xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">These services focus on:</h3>
              <div className="space-y-4">
                {focusAreas.map((area, index) => (
                  <motion.div
                    key={area.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center">
                      <area.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{area.title}</h4>
                      <p className="text-sm text-gray-600">{area.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;
