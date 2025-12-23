import { motion } from "framer-motion";
import { UserCheck, Shield, Cpu, Users, Target, CheckCircle } from "lucide-react";

const reasons = [
  {
    icon: UserCheck,
    title: "Dedicated Senior CFO",
    description: "Full ownership of finance leadership"
  },
  {
    icon: Users,
    title: "Integrated Finance Team",
    description: "Complete support structure included"
  },
  {
    icon: Cpu,
    title: "AI-Enabled Dashboards",
    description: "Real-time reporting and insights"
  },
  {
    icon: Shield,
    title: "Clear Accountability",
    description: "Governance and control frameworks"
  },
  {
    icon: Target,
    title: "Scalable Engagement",
    description: "Grows with your business needs"
  },
  {
    icon: CheckCircle,
    title: "Cost-Effective",
    description: "Lower than in-house CFO function"
  }
];

const WhyChooseSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            What You Get with Our Outsourced CFO Services
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Complete CFO leadership delivered at a fraction of in-house costs
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full bg-gradient-to-br from-slate-50 to-orange-50/30 rounded-2xl p-6 border border-slate-100 hover:border-orange-300 hover:shadow-lg hover:shadow-orange-100 transition-all">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <reason.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{reason.title}</h3>
                  <p className="text-slate-600">{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <div className="inline-block bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-[2px]">
              <div className="bg-white rounded-2xl px-8 py-4">
                <p className="text-lg font-semibold text-slate-900">
                  All delivered at a <span className="text-orange-600">significantly lower cost</span> than building an in-house CFO function
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
