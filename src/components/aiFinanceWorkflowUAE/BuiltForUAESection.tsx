import { motion } from "framer-motion";
import { Check, Plug, Zap, BarChart3 } from "lucide-react";

const features = [
  "Works with cloud accounting and Google Sheets",
  "Supports VAT, Corporate Tax and FTA-aligned documentation",
  "Handles multi-entity and multi-currency groups operating across GCC",
  "Suits startups, SMEs and scale ups that need fast, credible numbers",
];

const steps = [
  {
    step: "01",
    title: "Connect",
    description: "Install RyzUp Sheets and connect accounting sources.",
    icon: Plug,
    color: "amber",
  },
  {
    step: "02",
    title: "Automate",
    description: "Use the AI assistant, error detector and agents to automate reports, checks and reconciliations.",
    icon: Zap,
    color: "orange",
  },
  {
    step: "03",
    title: "Scale",
    description: "Extend into forecasting, board packs and multi-entity reporting using the same AI automation in the UAE foundation.",
    icon: BarChart3,
    color: "amber",
  },
];

const BuiltForUAESection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Built for UAE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Built for the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
                UAE
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto mb-20"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-start gap-3 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-4 border border-amber-100"
              >
                <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-gray-700">{feature}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Implementation Path */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Implementation{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
                Path
              </span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Connection line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-amber-200 via-orange-300 to-amber-200 hidden lg:block transform -translate-y-1/2 z-0" />

            <div className="grid lg:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative z-10"
                >
                  <div className={`bg-white rounded-2xl p-8 border-2 ${step.color === "amber" ? "border-amber-200" : "border-orange-200"} shadow-lg hover:shadow-xl transition-shadow duration-300`}>
                    <div className={`w-16 h-16 ${step.color === "amber" ? "bg-gradient-to-br from-amber-500 to-amber-600" : "bg-gradient-to-br from-orange-500 to-orange-600"} rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-center">
                      <span className={`text-sm font-bold ${step.color === "amber" ? "text-amber-600" : "text-orange-600"}`}>
                        STEP {step.step}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-4">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuiltForUAESection;
