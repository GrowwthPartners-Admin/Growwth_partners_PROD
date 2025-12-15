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
    description:
      "Use the AI assistant, error detector and agents to automate reports, checks and reconciliations.",
    icon: Zap,
    color: "orange",
  },
  {
    step: "03",
    title: "Scale",
    description:
      "Extend into forecasting, board packs and multi-entity reporting using the same AI automation in the UAE foundation.",
    icon: BarChart3,
    color: "amber",
  },
];

const BuiltForUAESection = () => {
  return (
    <section className="py-20 bg-slate-50/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Built for UAE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16 relative"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-100 text-amber-700 text-[11px] font-bold uppercase tracking-wider mb-5 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              Regional Focus
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              Built for the{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
                  UAE
                </span>
                {/* Underline decoration */}
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-amber-200 z-0 opacity-60"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 5 Q 50 10 100 5"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                  />
                </svg>
              </span>
            </h2>
            <p className="mt-4 text-gray-500 max-w-lg mx-auto text-lg">
              Compliance, currency, and tax handling designed specifically for
              Gulf businesses.
            </p>
          </motion.div>

          {/* Enhanced Feature Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto mb-24"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative p-6 px-8 bg-white rounded-2xl border shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_24px_rgba(245,158,11,0.1)] hover:border-amber-200 border-amber-100 transition-all duration-300 overflow-hidden"
              >
                {/* Subtle background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-amber-100 transition-all duration-300">
                    <Check className="w-5 h-5 text-amber-600" />
                  </div>
                  <p className="text-gray-700 font-medium text-lg leading-relaxed pt-1">
                    {feature}
                  </p>
                </div>
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
                  <div
                    className={`bg-white rounded-2xl p-8 border-2 ${
                      step.color === "amber"
                        ? "border-amber-200"
                        : "border-orange-200"
                    } shadow-lg hover:shadow-xl transition-shadow duration-300`}
                  >
                    <div
                      className={`w-16 h-16 ${
                        step.color === "amber"
                          ? "bg-gradient-to-br from-amber-500 to-amber-600"
                          : "bg-gradient-to-br from-orange-500 to-orange-600"
                      } rounded-2xl flex items-center justify-center mb-6 mx-auto`}
                    >
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-center">
                      <span
                        className={`text-sm font-bold ${
                          step.color === "amber"
                            ? "text-amber-600"
                            : "text-orange-600"
                        }`}
                      >
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
