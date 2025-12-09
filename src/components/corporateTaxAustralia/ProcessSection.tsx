import { motion } from "framer-motion";
import { Search, Calculator, FileCheck, BarChart3, RefreshCw } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Search,
    title: "Initial Review",
    description: "We assess prior lodgements, your financials and current structure."
  },
  {
    step: "02",
    icon: Calculator,
    title: "Compute and Plan",
    description: "We prepare your tax computation, apply concessions, and map legal savings."
  },
  {
    step: "03",
    icon: FileCheck,
    title: "ATO Lodgement",
    description: "We finalise and lodge your return, managing timelines and any ATO clarifications."
  },
  {
    step: "04",
    icon: BarChart3,
    title: "Year-End Reporting",
    description: "You receive a clear tax summary, supporting schedules and recommendations."
  },
  {
    step: "05",
    icon: RefreshCw,
    title: "Ongoing Compliance",
    description: "Quarterly check-ins keep BAS, PAYG and record-keeping aligned with your business tax compliance needs."
  }
];

export const ProcessSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-[#06C0A9]/20 text-[#06C0A9] rounded-full text-sm font-semibold mb-4">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How We Work
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A structured five-step approach to corporate tax filing in Australia
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#06C0A9]/20 via-[#06C0A9]/50 to-[#06C0A9]/20 transform -translate-y-1/2"></div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-[#06C0A9]/50 transition-all duration-300 h-full">
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-4xl font-bold text-[#06C0A9]/30">{step.step}</span>
                      <div className="w-12 h-12 bg-[#06C0A9]/10 rounded-lg flex items-center justify-center">
                        <step.icon className="w-6 h-6 text-[#06C0A9]" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                    <p className="text-gray-400 text-sm">{step.description}</p>
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
