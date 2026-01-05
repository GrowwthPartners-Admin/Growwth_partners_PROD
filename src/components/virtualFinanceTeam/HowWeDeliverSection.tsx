import { motion } from "framer-motion";
import { Cloud, BookOpen, BarChart3, Wallet, Users, CheckCircle } from "lucide-react";

const services = [
  {
    icon: Cloud,
    number: "01",
    title: "Cloud-Based Accounting & Systems",
    items: [
      "Implementation and management of cloud accounting platforms",
      "Standardised chart of accounts and reporting structures",
      "Secure, real-time access to financial data"
    ]
  },
  {
    icon: BookOpen,
    number: "02",
    title: "Day-to-Day Finance Execution",
    items: [
      "Accurate bookkeeping and reconciliations",
      "Timely month-end closes",
      "Invoicing, collections, and expense management"
    ]
  },
  {
    icon: BarChart3,
    number: "03",
    title: "Management Reporting & Dashboards",
    items: [
      "Monthly financial statements (P&L, balance sheet, cash flow)",
      "KPI dashboards aligned to business goals",
      "Variance and trend analysis"
    ]
  },
  {
    icon: Wallet,
    number: "04",
    title: "Payroll & Compliance Support",
    items: [
      "Payroll coordination and reporting",
      "Statutory compliance support aligned with Singapore requirements",
      "Audit-ready documentation"
    ]
  },
  {
    icon: Users,
    number: "05",
    title: "Integration with CFO & Strategy Teams",
    items: [
      "Alignment with Virtual, Fractional, or Outsourced CFO services",
      "Escalation of insights for strategic decision-making",
      "Continuous process improvement"
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
            How Growwth Partners Delivers Virtual Finance Team Value
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our services are built on technology, governance, and accountability.
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
