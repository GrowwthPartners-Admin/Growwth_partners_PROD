
import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";

export const D2CKeyTakeaways = () => {
  const takeaways = [
    "Through strategic planning, meticulous legal analysis, and collaborative partnerships, the client successfully overcame the challenges of expanding into Indonesia and Thailand.",
    "The implemented business structure not only ensured compliance with local laws but also facilitated rapid and sustainable growth.",
    "The collaborative approach between Growwth, the client's leadership team, and local partners proved instrumental in navigating complex regulatory landscapes.",
    "Continuous monitoring and adaptation to local market trends and regulatory changes remain key to sustaining long-term success in these dynamic markets."
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
