
import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";

export const FinanceKeyTakeaways = () => {
  const takeaways = [
    "The collaboration between Client X and Growwth resulted in detailed financial forecasts, automated dashboards, and strategic business valuations, fostering sustainable growth.",
    "By leveraging data-driven insights, Client X continues to thrive post-engagement, equipped with the tools to make informed decisions and achieve long-term objectives.",
    "At Growwth Partners, we don't just consult; we collaborate to transform businesses and pave the way for sustained success."
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
