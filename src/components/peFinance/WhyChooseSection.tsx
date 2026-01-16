import { motion } from "framer-motion";
import { 
  Award, 
  MapPin, 
  UserCheck, 
  Cpu, 
  Layers,
  ArrowRight
} from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Deep PE Experience",
    description: "Experience supporting PE funds and PE-backed companies across multiple sectors and deal stages"
  },
  {
    icon: MapPin,
    title: "Singapore Expertise",
    description: "Strong understanding of Singapore's PE and regulatory landscape for seamless compliance"
  },
  {
    icon: UserCheck,
    title: "CFO-Led Governance",
    description: "CFO-led governance—not fragmented advisory. Strategic oversight with operational execution"
  },
  {
    icon: Cpu,
    title: "AI-Enabled Insights",
    description: "AI-enabled dashboards for portfolio visibility with real-time performance tracking"
  },
  {
    icon: Layers,
    title: "Integrated Services",
    description: "Integrated support across CFO, finance teams, bookkeeping, and payroll functions"
  }
];

const WhyChooseSection = () => {
  const firstRow = reasons.slice(0, 3);
  const secondRow = reasons.slice(3);

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900 text-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Why Choose Growwth Partners for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">
                Private Equity Finance?
              </span>
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              We act as an extension of the PE operating team, not just a service provider.
            </p>
          </motion.div>

          {/* Row 1 – 3 cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {firstRow.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 lg:p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-orange-500/50 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <reason.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
                <p className="text-slate-400">{reason.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Row 2 – 2 cards perfectly centered */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 lg:gap-8 mb-12">
            {secondRow.map((reason, index) => (
              <motion.div
                key={`second-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (3 + index) * 0.1 }}
                viewport={{ once: true }}
                className="w-full max-w-md p-6 lg:p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-orange-500/50 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <reason.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
                <p className="text-slate-400">{reason.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="p-8 lg:p-10 bg-gradient-to-r from-orange-600/20 to-orange-700/20 rounded-3xl border border-orange-500/30 text-center"
          >
            <p className="text-xl lg:text-2xl font-medium text-white/90 flex items-center justify-center gap-3 flex-wrap">
              <ArrowRight className="w-6 h-6 text-orange-400" />
              We act as an extension of the PE operating team, not just a service provider.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
    </section>
  );
};

export default WhyChooseSection;
