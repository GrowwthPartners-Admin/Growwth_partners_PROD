import React from "react";
import { motion } from "framer-motion";
import { FileSignature, PieChart, GitBranch, BarChart3 } from "lucide-react";

export const AddOnsSection = () => {
  const addOns = [
    {
      icon: FileSignature,
      title: "Shareholders' agreement coordination"
    },
    {
      icon: PieChart,
      title: "ESOP framework and cap table setup"
    },
    {
      icon: GitBranch,
      title: "Multi-entity group structure and intercompany policy"
    },
    {
      icon: BarChart3,
      title: "Accounting system and chart of accounts setup"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-4">
            Extras
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Optional Add-ons
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Additional services to support your growth
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {addOns.map((addon, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg hover:border-orange-200 transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 mx-auto bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center mb-4">
                <addon.icon className="w-7 h-7 text-white" />
              </div>
              <p className="text-gray-800 font-medium">{addon.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AddOnsSection;