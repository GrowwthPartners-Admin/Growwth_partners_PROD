
import { motion } from "framer-motion";
import { CheckCircle2, Calendar } from "lucide-react";

export const FinanceGrowwthRole = () => {
  const roles = [
    "Conducting thorough consultations to understand client requirements and pain points.",
    "Developing modular financial forecasts with automated dashboards for real-time insights.",
    "Providing comprehensive business valuation insights for strategic planning and expansion.",
    "Implementing unique financial modeling strategies to simplify data analysis across multiple geographies."
  ];

  const timeline = [
    {
      period: "Weeks 1 to 4",
      description: "Requirement analysis and initial draft presentation."
    },
    {
      period: "Weeks 5 to 8",
      description: "Development of financial forecasts and dashboard presentation."
    },
    {
      period: "Weeks 9 to 12",
      description: "Business valuation and final adjustments based on client feedback."
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
            Growwth partnered with Client X to develop tailored financial forecasts and automated dashboards, addressing the complexity of multiple geographies and clients. By understanding the client's pain points, Growwth implemented unique financial modeling strategies to simplify data analysis and enhance decision-making capabilities.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6 mb-16">
          {roles.map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start gap-4 bg-slate-50 p-6 rounded-xl"
            >
              <span className="text-brand-orange flex-shrink-0 mt-1">
                <CheckCircle2 size={24} />
              </span>
              <p className="text-gray-700 text-lg">{role}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-slate-50 p-8 rounded-xl max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="p-3 bg-brand-orange/10 rounded-lg">
              <Calendar className="text-brand-orange" size={28} />
            </span>
            <h4 className="text-2xl font-bold text-brand-dark">Data-Driven Timelines</h4>
          </div>
          <div className="space-y-4">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-32 text-brand-orange font-semibold">
                  {item.period}
                </div>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
