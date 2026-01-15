import { motion } from "framer-motion";
import { 
  Stethoscope, 
  MapPin, 
  Users, 
  Cpu, 
  Layers
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
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brand-orange font-semibold text-sm uppercase tracking-wider">
            Why Growwth Partners
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
            Why Choose Growwth Partners for Healthcare Finance?
          </h2>
        </motion.div>

        {/* 3 + 2 centered */}
        <div className="max-w-8xl mx-auto space-y-6">
          {/* Row 1 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.slice(0, 3).map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-100 p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center mb-5 shadow-lg shadow-orange-500/20">
                  <reason.icon className="w-7 h-7 text-white" />
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {reason.title}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Row 2 (centered) */}
          <div className="flex flex-col md:flex-row justify-center gap-6">
            {reasons.slice(3).map((reason, i) => {
              const index = i + 3;
              return (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="w-full md:max-w-[520px]"
                >
                  <div className="bg-gray-100 p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 h-full">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center mb-5 shadow-lg shadow-orange-500/20">
                      <reason.icon className="w-7 h-7 text-white" />
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {reason.title}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center max-w-3xl mx-auto"
        >
          <div className="inline-block p-8 bg-gradient-to-r from-brand-orange/10 to-amber-500/10 rounded-3xl border border-brand-orange/20">
            <p className="text-xl text-gray-900 font-semibold">
              We help healthcare businesses balance innovation with financial discipline.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
