import { motion } from "framer-motion";
import { MapPin, Eye, Lock, FileCheck, Check } from "lucide-react";

const WhyChooseSection = () => {
  const reasons = [
    {
      icon: MapPin,
      text: "Local focus on AI compliance in the UAE and audit readiness",
    },
    {
      icon: Eye,
      text: "Early AI risk monitoring to surface anomalies and control breaks",
    },
    {
      icon: Lock,
      text: "Privacy-first analysis with data masking",
    },
    {
      icon: FileCheck,
      text: "Faster reconciliations and cleaner reports for leadership and auditors",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-orange-50/30 to-amber-50/40">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold mb-6">
            <Check className="w-4 h-4" />
            Why UAE Businesses Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why UAE Businesses Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
              Ryzup.ai
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-amber-200"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <reason.icon className="w-7 h-7 text-white" />
                </div>
                <p className="text-lg text-gray-700 leading-relaxed font-medium pt-3">
                  {reason.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
