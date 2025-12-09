import { motion } from "framer-motion";
import { CheckCircle, Shield, MessageSquare, Layers } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "ATO-Ready Filings",
    description: "Accurate and on-time lodgements that meet all ATO requirements"
  },
  {
    icon: CheckCircle,
    title: "Tax Optimisation for SMEs",
    description: "Reduce legal liability through proactive tax planning and concessions"
  },
  {
    icon: MessageSquare,
    title: "Clear Communication",
    description: "Practical advice without jargon — we explain what matters for your business"
  },
  {
    icon: Layers,
    title: "End-to-End Support",
    description: "From bookkeeping alignment to year-end reports, we handle it all"
  }
];

export const WhyChooseSection = () => {
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
          <span className="inline-block px-4 py-1 bg-[#06C0A9]/10 text-[#06C0A9] rounded-full text-sm font-semibold mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Australian Businesses Choose Growwth Partners
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay confident about corporate tax filing Australia requirements while gaining visibility on what you can legally save.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gradient-to-br from-teal-50 to-emerald-50/50 rounded-xl p-6 h-full border border-[#06C0A9]/10 hover:border-[#06C0A9]/30 hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 bg-[#06C0A9]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#06C0A9]/20 transition-colors">
                  <reason.icon className="w-7 h-7 text-[#06C0A9]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
