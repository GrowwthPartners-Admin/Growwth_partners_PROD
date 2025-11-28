
import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";

export const TechBusinessKeyTakeaways = () => {
  const takeaways = [
    "The collaborative efforts of the client and Growwth resulted in a transformative journey from legacy systems to efficient, data-driven decision-making.",
    "By achieving accurate, on-time reporting and fostering a culture of continuous improvement, the client is now poised for sustainable growth.",
    "The optimised processes and empowered teams position them strategically to navigate future challenges, ensuring a prosperous and resilient business future."
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
          <h3 className="heading-md text-brand-dark mb-4">Key Takeaways</h3>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {takeaways.map((takeaway, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-sm flex items-start gap-4"
            >
              <span className="text-brand-orange flex-shrink-0 mt-1">
                <Lightbulb size={28} />
              </span>
              <p className="text-lg text-gray-700 leading-relaxed">{takeaway}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
