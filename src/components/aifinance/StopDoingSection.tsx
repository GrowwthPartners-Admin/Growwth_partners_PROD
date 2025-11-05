import { motion } from "framer-motion";
import { X } from "lucide-react";

export const StopDoingSection = () => {
  const stopItems = [
    {
      title: "Manual reconciliation",
      description: "No more hunting for mismatched numbers across finance, marketing, and ops.",
    },
    {
      title: "Version panic in spreadsheets",
      description: 'No more twelve versions of "final_forecast_v7_actualFINAL.xls".',
    },
    {
      title: "Last minute board pack scrambles",
      description: "No more 1 AM PowerPoint builds before investor calls.",
    },
    {
      title: "Guessing runway",
      description: 'No more "I think we have about 4 months left". You will know.',
    },
  ];

  return (
    <section className="py-16 lg:py-20 ">
      <div className="container-custom ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 "
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What You Can Stop Doing</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            This is what teams usually stop doing within 30 days of using RyzUp.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12 ">
          {stopItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-red-100/50 p-6 rounded-xl shadow-lg border-2 border-red-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <X className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-lg font-semibold max-w-3xl mx-auto">
            RyzUp replaces fragile, manual workflows with intelligent finance automation tools designed for teams that move fast.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
