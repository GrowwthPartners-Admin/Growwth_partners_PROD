
import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";

export const FinanceChallenges = () => {
  const challenges = [
    "Creating a comprehensive financial forecast with minimal input fields and automated outputs.",
    "Struggling to utilise raw data effectively for forecasting across multiple geographies and clients.",
    "Understanding business valuation complexities across diverse markets and operational contexts."
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="heading-md text-brand-dark mb-4">Client Challenges</h3>
          </motion.div>

          <div className="space-y-6">
            {challenges.map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-sm flex items-start gap-4"
              >
                <span className="text-brand-orange flex-shrink-0 mt-1">
                  <AlertCircle size={24} />
                </span>
                <p className="text-gray-700 text-lg">{challenge}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
