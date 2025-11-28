
import { motion } from "framer-motion";

export const D2CKeyAchievements = () => {
  const achievements = [
    {
      metric: "25%",
      description: "Rapid Valuation Growth in 12 months"
    },
    {
      metric: "50%",
      description: "Successful Customer Acquisition"
    },
    {
      metric: "35%",
      description: "Sales Revenue Soars"
    },
    {
      metric: "40%",
      description: "Dominating Market Share"
    }
  ];

  const keyPoints = [
    {
      title: "Strategic Partnership",
      description: "Collaborated with local partners to analyse legal complexities, enabling the identification of viable business structures compliant with local laws."
    },
    {
      title: "Optimised Legal and Operational Structure",
      description: "Devised an efficient and straightforward legal and operational framework, laying the foundation for rapid business scaling while complying with local regulations."
    },
    {
      title: "Shareholder Protection",
      description: "Ensured the protection of shareholder and senior leadership interests through meticulous documentation and implementation of robust controls."
    },
    {
      title: "Legal and Regulatory Analysis",
      description: "Conducted an in-depth study of Indonesian and Thai laws, collaborating with local partners to identify challenges and regulatory roadblocks."
    },
    {
      title: "Operational Excellence",
      description: "Successfully operationalised the chosen structure, preparing the business for a seamless launch and subsequent expansion."
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {keyPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-sm"
            >
              <h4 className="text-2xl font-bold text-brand-dark mb-4">{point.title}</h4>
              <p className="text-gray-600">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
