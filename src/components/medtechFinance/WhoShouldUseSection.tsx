import { motion } from "framer-motion";
import { 
  Stethoscope, 
  HeartPulse, 
  Microscope, 
  Pill,
  Globe,
  HelpCircle,
  CheckCircle2
} from "lucide-react";

const idealFor = [
  { icon: Stethoscope, title: "MedTech startups and scale-ups" },
  { icon: HeartPulse, title: "Healthcare service providers and clinics" },
  { icon: Microscope, title: "Diagnostic, digital health, and health-tech companies" },
  { icon: Pill, title: "Life sciences and medical device companies" },
  { icon: Globe, title: "Healthcare businesses expanding into Singapore" },
];

const questions = [
  "Are our financial systems compliant and audit-ready?",
  "Do we clearly understand cost drivers and margins?",
  "Can we sustain long R&D or approval cycles financially?",
];

const WhoShouldUseSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Who Should Use MedTech & Healthcare Finance Services?
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Ideal For Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-3xl p-8 border border-orange-500/20"
          >
            <h3 className="text-2xl font-semibold text-orange-400 mb-8">
              These services are ideal for:
            </h3>
            <div className="space-y-4">
              {idealFor.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-slate-800/60 rounded-xl border border-slate-700/50 hover:border-orange-500/30 transition-all group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-xl flex items-center justify-center group-hover:from-orange-500/30 group-hover:to-orange-600/30 transition-all">
                    <item.icon className="w-6 h-6 text-orange-400" />
                  </div>
                  <span className="text-slate-200 font-medium">{item.title}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Questions Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-orange-500/10 to-orange-600/10 rounded-3xl p-8 border border-orange-500/30"
          >
            <div className="flex items-center gap-3 mb-8">
              <HelpCircle className="w-8 h-8 text-orange-400" />
              <h3 className="text-2xl font-semibold text-white">
                If your business struggles to answer:
              </h3>
            </div>
            <div className="space-y-4 mb-8">
              {questions.map((question, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3 p-4 bg-slate-800/60 rounded-xl"
                >
                  <CheckCircle2 className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-200 italic">{question}</p>
                </motion.div>
              ))}
            </div>
            <div className="p-6 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-2xl border border-orange-500/30">
              <p className="text-white text-lg font-semibold text-center">
                You need specialised healthcare finance leadership.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoShouldUseSection;
