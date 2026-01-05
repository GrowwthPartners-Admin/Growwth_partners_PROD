import { motion } from "framer-motion";
import { FileText, RefreshCw, Calendar, Receipt, Shield, CheckCircle } from "lucide-react";

const services = [
  {
    icon: FileText,
    number: "01",
    title: "Daily & Monthly Transaction Management",
    items: [
      "Accurate recording of all transactions",
      "Standardised chart of accounts",
      "Consistent categorisation aligned with reporting needs"
    ]
  },
  {
    icon: RefreshCw,
    number: "02",
    title: "Reconciliations & Controls",
    items: [
      "Bank and credit card reconciliations",
      "Balance sheet reconciliations",
      "Exception identification and resolution"
    ]
  },
  {
    icon: Calendar,
    number: "03",
    title: "Month-End Close Support",
    items: [
      "Timely month-end closes",
      "Preparation of financial statements",
      "Alignment with CFO and finance team timelines"
    ]
  },
  {
    icon: Receipt,
    number: "04",
    title: "AR, AP & Expense Management",
    items: [
      "Invoice tracking and ageing reports",
      "Vendor payment tracking",
      "Expense documentation and policy alignment"
    ]
  },
  {
    icon: Shield,
    number: "05",
    title: "Audit & Compliance Readiness",
    items: [
      "Clean, well-documented records",
      "Support during audits and reviews",
      "Compliance-ready financial data aligned with Singapore standards"
    ]
  }
];

const HowWeDeliverSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brand-orange font-semibold text-sm uppercase tracking-wider">Our Approach</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
            How Growwth Partners Delivers Outsourced Bookkeeping Value
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our services are built on process discipline, accuracy, and integration with finance leadership.
          </p>
        </motion.div>

        <div className="space-y-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl border p-6 md:p-8 hover:shadow-xl transition-all duration-300 border-brand-orange/30 shadow">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Number and Icon */}
                  <div className="flex items-center gap-4">
                    <span className="text-5xl font-bold text-gray-100 group-hover:text-brand-orange/20 transition-colors">
                      {service.number}
                    </span>
                    <div className="w-14 h-14 bg-brand-orange/10 rounded-xl flex items-center justify-center group-hover:bg-brand-orange/20 transition-colors">
                      <service.icon className="w-7 h-7 text-brand-orange" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-brand-orange transition-colors">
                      {service.title}
                    </h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {service.items.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 text-gray-600"
                        >
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeDeliverSection;
