import { motion } from "framer-motion";
import { FileText, CreditCard, Receipt, Calendar, CheckSquare, BookOpen } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Transaction Recording",
    description: "Accurate classification of all business transactions"
  },
  {
    icon: CreditCard,
    title: "Bank Reconciliations",
    description: "Monthly bank and balance sheet reconciliations"
  },
  {
    icon: Receipt,
    title: "AR/AP Tracking",
    description: "Accounts receivable and payable management"
  },
  {
    icon: Calendar,
    title: "Month-End Close",
    description: "Timely and reliable month-end close support"
  }
];

const WhatIsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <span className="text-brand-orange font-semibold text-sm uppercase tracking-wider">Understanding the Service</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
            What Are Outsourced Bookkeeping Services?
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Outsourced Bookkeeping services involve delegating day-to-day accounting and record-keeping to a specialised external team that ensures transactions are accurately recorded, reconciled, and reported.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 group shadow"
            >
              <div className="w-14 h-14 bg-brand-orange/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-orange/20 transition-colors">
                <feature.icon className="w-7 h-7 text-brand-orange" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 text-center"
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-brand-orange/20 rounded-full flex items-center justify-center">
              <BookOpen className="w-8 h-8 text-brand-orange" />
            </div>
          </div>
          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
            Unlike basic bookkeeping vendors, Growwth Partners delivers bookkeeping as part of a{" "}
            <span className="text-brand-orange font-semibold">structured finance ecosystem</span>, aligned with CFO and reporting requirements.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatIsSection;
