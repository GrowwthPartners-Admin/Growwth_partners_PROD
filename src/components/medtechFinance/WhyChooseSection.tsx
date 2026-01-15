import { motion } from "framer-motion";
import { 
  Stethoscope, 
  MapPin, 
  Users, 
  Cpu, 
  Layers,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

const reasons = [
  {
    icon: Stethoscope,
    title: "Experience across MedTech, health-tech, and healthcare services",
  },
  {
    icon: MapPin,
    title: "Strong understanding of Singapore's healthcare and regulatory environment",
  },
  {
    icon: Users,
    title: "CFO-led governance and compliance discipline",
  },
  {
    icon: Cpu,
    title: "AI-enabled dashboards for real-time insights",
  },
  {
    icon: Layers,
    title: "Integrated services across CFO, finance teams, bookkeeping, and payroll",
  },
];

const WhyChooseSection = () => {
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
            Why Choose Growwth Partners for Healthcare Finance?
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl border border-slate-700/50 hover:border-orange-500/30 transition-all duration-300 h-full">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-2xl flex items-center justify-center group-hover:from-orange-500/30 group-hover:to-orange-600/30 transition-all">
                    <reason.icon className="w-7 h-7 text-orange-400" />
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0" />
                    <p className="text-slate-200 font-medium">{reason.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 text-center"
          >
            <div className="inline-block p-8 bg-gradient-to-r from-orange-500/10 to-orange-600/10 rounded-3xl border border-orange-500/30">
              <p className="text-xl text-white font-semibold flex items-center gap-3 justify-center">
                <ArrowRight className="w-6 h-6 text-orange-400" />
                We help healthcare businesses balance innovation with financial discipline.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
