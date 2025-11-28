
import { motion } from "framer-motion";
import { Target } from "lucide-react";

export const D2CGoals = () => {
  const goals = [
    {
      title: "Structural Development",
      description: "Develop 2-3 potential structures that adhere to legal compliance while ensuring unhindered business performance."
    },
    {
      title: "Implementation and Protection",
      description: "Collaborate with senior management and investors to finalise a viable structure, ensuring the protection of shareholder interests. Implement the chosen structure and operationalise it for the launch and subsequent expansion."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="heading-md text-brand-dark mb-4">Primary Goals and Objectives</h3>
          </motion.div>

          <div className="space-y-6">
            {goals.map((goal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-50 p-8 rounded-xl"
              >
                <div className="flex items-start gap-4">
                  <span className="mt-1 text-brand-orange flex-shrink-0">
                    <Target size={24} />
                  </span>
                  <div>
                    <h4 className="text-xl font-bold text-brand-dark mb-2">{goal.title}</h4>
                    <p className="text-lg text-gray-700">{goal.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
