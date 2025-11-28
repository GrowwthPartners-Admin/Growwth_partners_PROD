
import { motion } from "framer-motion";
import { TrendingUp, DollarSign } from "lucide-react";

export const FinanceKeyAchievements = () => {
  const achievements = [
    {
      metric: "Real-Time Dashboard",
      description: "Showcasing key KPIs, enhancing business visibility"
    },
    {
      metric: "Financial Forecasts",
      description: "Created comprehensive cash flow projections for strategic decision-making"
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="heading-md text-brand-dark mb-4">Key Achievements</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="text-3xl font-bold text-brand-orange mb-2">{achievement.metric}</div>
              <p className="text-gray-600">{achievement.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="p-3 bg-brand-orange/10 rounded-lg">
                <TrendingUp className="text-brand-orange" size={28} />
              </span>
              <h4 className="text-xl font-bold text-brand-dark">Streamlined Forecasting</h4>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Developed comprehensive financial forecasts with minimal input fields and automated outputs, utilizing raw data effectively for forecasting across multiple geographies and clients.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="p-3 bg-brand-orange/10 rounded-lg">
                <DollarSign className="text-brand-orange" size={28} />
              </span>
              <h4 className="text-xl font-bold text-brand-dark">Business Valuation Insights</h4>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Provided strategic business valuation insights for planning and understanding business value across multiple geographies, enabling informed decisions for future expansion.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
