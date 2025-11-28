
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export const D2CGrowwthRole = () => {
  const roles = [
    "Conducted comprehensive legal and regulatory analysis of Indonesian and Thai markets",
    "Facilitated strategic discussions with leadership team and investors",
    "Collaborated with local partners to identify viable business structures",
    "Developed compliant yet efficient business structure models",
    "Ensured protection of shareholder interests through meticulous documentation",
    "Implemented robust controls for governance and compliance",
    "Oversaw seamless operationalisation of the chosen business model"
  ];

  const additionalPoints = [
    {
      title: "Stakeholder Communication",
      description: "Maintain open communication channels with shareholders and senior leadership, fostering trust and ensuring alignment with business goals."
    },
    {
      title: "Market Adaptation",
      description: "Stay abreast of market trends and consumer behavior in Indonesia and Thailand, enabling the business to adapt swiftly and cater to evolving customer needs."
    },
    {
      title: "Compliance Maintenance",
      description: "Continuously monitor changes in local laws and regulations, ensuring the business remains compliant in the dynamic legal landscape of Indonesia and Thailand."
    },
    {
      title: "Operational Optimisation",
      description: "Focus on optimising operational efficiency and scalability, streamlining processes to support the business's rapid growth."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="heading-md text-brand-dark mb-4">Growwth's Role</h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Growwth played a pivotal role in addressing the client's challenges by conducting comprehensive analysis and facilitating strategic implementation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {roles.map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start gap-4 bg-slate-50 p-6 rounded-xl"
            >
              <span className="text-brand-orange flex-shrink-0 mt-1">
                <CheckCircle2 size={24} />
              </span>
              <p className="text-gray-700">{role}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {additionalPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-brand-orange/10 to-brand-orange/5 p-6 rounded-xl"
            >
              <h4 className="text-xl font-bold text-brand-dark mb-3">{point.title}</h4>
              <p className="text-gray-700">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
