
import { motion } from "framer-motion";

export const TechBusinessKeyAchievements = () => {
  const achievements = [
    {
      metric: "150%",
      description: "Investor Trust Surge: Timely reporting boosts confidence and drives investments."
    },
    {
      metric: "200%",
      description: "Faster Reporting: Achieved unparalleled efficiency and accuracy."
    },
    {
      metric: "20+ Teams",
      description: "Trained in 1 Month: Rapid onboarding ensures swift integration."
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
          className="text-center mb-16"
        >
          <h3 className="heading-md text-brand-dark mb-4">Key Achievements</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-sm text-center"
            >
              <h4 className="text-3xl font-bold text-brand-orange mb-4">{achievement.metric}</h4>
              <p className="text-gray-600">{achievement.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h4 className="text-2xl font-bold text-brand-dark mb-4">Efficient Reporting</h4>
            <p className="text-gray-600">
              Achieved a significant milestone by reporting financial statements of 100+ legal entities within T+10 days from month-end, marking a 200% improvement.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h4 className="text-2xl font-bold text-brand-dark mb-4">Enhanced Decision-Making</h4>
            <p className="text-gray-600">
              Regular availability of accurate data empowered senior management to make informed decisions promptly, capitalising on future opportunities.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
