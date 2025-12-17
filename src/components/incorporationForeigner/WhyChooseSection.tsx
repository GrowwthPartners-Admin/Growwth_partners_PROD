import { Globe, Users, Building, FileCheck, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  {
    icon: Globe,
    title: "Remote, end-to-end setup",
    description: "From name reservation to ACRA filings and post-incorporation tasks"
  },
  {
    icon: Users,
    title: "Local director solutions",
    description: "Compliant options for the 'ordinarily resident' director requirement"
  },
  {
    icon: Building,
    title: "Clear banking path",
    description: "Bank account documentation support; guidance on traditional and fintech options"
  },
  {
    icon: FileCheck,
    title: "Visa & relocation guidance",
    description: "Practical help on Employment Pass and EntrePass planning"
  },
  {
    icon: Briefcase,
    title: "One partner for ongoing ops",
    description: "Company secretary, accounting, payroll, GST, and tax once live"
  }
];

export const WhyChooseSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-4">
            Why Growwth Partners
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Foreign Founders Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
              Growwth Partners
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-6 bg-gradient-to-br from-orange-50/50 to-amber-50/50 rounded-2xl border border-orange-100 hover:shadow-lg hover:shadow-orange-100/50 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <reason.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
