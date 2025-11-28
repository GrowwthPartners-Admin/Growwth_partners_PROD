
import { motion } from "framer-motion";
import { Target } from "lucide-react";

export const TechBusinessGoals = () => {
  const goals = [
    "Implement accurate and timely financial reporting systems to meet regulatory obligations and investor expectations.",
    "Develop efficient KPI tracking mechanisms to monitor business performance across diverse tech ventures."
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="heading-md text-brand-dark mb-4">Primary Goals and Objectives</h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-slate-50 p-8 rounded-xl"
          >
            <div className="space-y-6">
              {goals.map((goal, index) => (
                <div key={index} className="flex items-start gap-4">
                  <span className="mt-1 text-brand-orange flex-shrink-0">
                    <Target size={24} />
                  </span>
                  <p className="text-lg text-gray-700">{goal}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
