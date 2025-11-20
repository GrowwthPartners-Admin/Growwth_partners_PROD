import { motion } from "framer-motion";
import { TrendingUp, GitMerge, Users, LineChart, FileCheck } from "lucide-react";

const reasons = [
  {
    icon: TrendingUp,
    title: "Fundraising Support",
    description: "Know your worth before speaking to investors."
  },
  {
    icon: GitMerge,
    title: "M&A Transactions",
    description: "Accurate valuations help during mergers, acquisitions, or exits."
  },
  {
    icon: Users,
    title: "Employee Stock Options (ESOPs)",
    description: "Essential to determine share allocation and FMV."
  },
  {
    icon: LineChart,
    title: "Strategic Financial Planning",
    description: "Helps founders plan long-term growth decisions."
  },
  {
    icon: FileCheck,
    title: "Compliance & Reporting",
    description: "Valuation documents required for audits, grants, and regulations."
  }
];

export const WhyMattersSection = () => {
  return (
    <section className="py-20 bg-brand-blue/10">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Why Business Valuation Matters
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-brand-blue/50 transition-all hover:shadow-lg text-center group"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-blue-200 transition-colors">
                <reason.icon className="w-7 h-7 text-brand-blue" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">{reason.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
