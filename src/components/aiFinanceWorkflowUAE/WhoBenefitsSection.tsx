import { motion } from "framer-motion";
import { Users, Rocket, Settings, Building2 } from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "CFOs and Finance Leaders",
    description: "Standardise processes, reduce manual effort and get decision-ready numbers faster.",
    color: "amber",
  },
  {
    icon: Rocket,
    title: "Startups and Scale Ups",
    description: "Know burn, runway and ROI without rebuilding every model.",
    color: "orange",
  },
  {
    icon: Settings,
    title: "Finance and Operations Teams",
    description: "Automate low-value tasks and spend time on analysis and action.",
    color: "amber",
  },
  {
    icon: Building2,
    title: "Accounting and Outsourced Finance Firms",
    description: "Deliver faster reporting and reduced error risk without changing client tools.",
    color: "orange",
  },
];

const WhoBenefitsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-amber-50/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Who{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
              Benefits
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white rounded-2xl p-6 border ${benefit.color === "amber" ? "border-amber-100" : "border-orange-100"} hover:shadow-lg transition-shadow duration-300`}
            >
              <div className={`w-14 h-14 ${benefit.color === "amber" ? "bg-amber-100" : "bg-orange-100"} rounded-xl flex items-center justify-center mb-5`}>
                <benefit.icon className={`w-7 h-7 ${benefit.color === "amber" ? "text-amber-600" : "text-orange-600"}`} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoBenefitsSection;
