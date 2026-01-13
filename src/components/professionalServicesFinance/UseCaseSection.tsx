import React from "react";
import { motion } from "framer-motion";
import { Building2, AlertTriangle, Wrench, CheckCircle } from "lucide-react";

const challenges = [
  "Poor project margin visibility",
  "Revenue leakage from unbilled work",
  "Delayed collections"
];

const solutions = [
  "Implemented project-level margin tracking",
  "Optimised billing and invoicing processes",
  "Introduced utilisation and cash flow dashboards"
];

const outcomes = [
  "Reduced revenue leakage",
  "Improved margins",
  "Faster collections",
  "Increased confidence in hiring decisions"
];

const UseCaseSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-50 via-orange-50/30 to-amber-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">
            Success Story
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
            Practical Use Case
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-8xl mx-auto"
        >
          {/* Client type header */}
          <div className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-t-3xl p-6 flex items-center gap-4">
            <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center">
              <Building2 className="w-7 h-7 text-white" />
            </div>
            <div>
              <p className="text-orange-200 text-sm font-medium">Client Type</p>
              <h3 className="text-2xl font-bold text-white">Digital Marketing Agency (Singapore)</h3>
            </div>
          </div>

          {/* Content */}
          <div className="bg-white rounded-b-3xl shadow-xl">
            <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
              {/* Challenges */}
              <div className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5 text-red-500" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">Challenges</h4>
                </div>
                <ul className="space-y-3">
                  {challenges.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solution */}
              <div className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Wrench className="w-5 h-5 text-orange-500" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">Solution</h4>
                </div>
                <ul className="space-y-3">
                  {solutions.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outcome */}
              <div className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">Outcome</h4>
                </div>
                <ul className="space-y-3">
                  {outcomes.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UseCaseSection;
