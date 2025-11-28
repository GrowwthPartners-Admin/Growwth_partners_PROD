
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export const TechBusinessGrowwthRole = () => {
  const roles = [
    "Implemented robust policies and systems to transform the financial reporting landscape",
    "Collaborated with investors to define meaningful KPIs aligned with business objectives",
    "Conducted extensive training to enhance capabilities of finance and leadership teams",
    "Provided consistent engagement and strategic guidance throughout implementation",
    "Organised periodic training sessions to keep teams updated with latest industry practices",
    "Maintained active stakeholder engagement to align strategies with investor expectations"
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
            Growwth played a pivotal role in transforming the client's financial reporting landscape through strategic implementation and continuous support.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-r from-brand-orange/10 to-brand-orange/5 p-8 rounded-xl max-w-4xl mx-auto"
        >
          <h4 className="text-xl font-bold text-brand-dark mb-4">Technology Integration</h4>
          <p className="text-gray-700">
            Explored cutting-edge technologies to further automate reporting processes, reducing manual intervention and enhancing accuracy across all operations.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
