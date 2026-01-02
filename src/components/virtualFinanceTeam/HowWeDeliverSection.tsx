import { motion } from "framer-motion";
import { 
  Cloud, BookOpen, BarChart3, Wallet, Users,
  Database, Lock, FileText, TrendingUp, Settings
} from "lucide-react";

const deliveryAreas = [
  {
    number: "01",
    title: "Cloud-Based Accounting & Systems",
    icon: Cloud,
    items: [
      "Implementation and management of cloud accounting platforms",
      "Standardised chart of accounts and reporting structures",
      "Secure, real-time access to financial data"
    ]
  },
  {
    number: "02",
    title: "Day-to-Day Finance Execution",
    icon: BookOpen,
    items: [
      "Accurate bookkeeping and reconciliations",
      "Timely month-end closes",
      "Invoicing, collections, and expense management"
    ]
  },
  {
    number: "03",
    title: "Management Reporting & Dashboards",
    icon: BarChart3,
    items: [
      "Monthly financial statements (P&L, balance sheet, cash flow)",
      "KPI dashboards aligned to business goals",
      "Variance and trend analysis"
    ]
  },
  {
    number: "04",
    title: "Payroll & Compliance Support",
    icon: Wallet,
    items: [
      "Payroll coordination and reporting",
      "Statutory compliance support aligned with Singapore requirements",
      "Audit-ready documentation"
    ]
  },
  {
    number: "05",
    title: "Integration with CFO & Strategy Teams",
    icon: Users,
    items: [
      "Alignment with Virtual, Fractional, or Outsourced CFO services",
      "Escalation of insights for strategic decision-making",
      "Continuous process improvement"
    ]
  }
];

const HowWeDeliverSection = () => {
  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Our Approach
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            How Growwth Partners Delivers Value
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our Virtual Finance Team services are built on technology, governance, and accountability.
          </p>
        </motion.div>

        <div className="space-y-6">
          {deliveryAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-background rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  {/* Number and Icon */}
                  <div className="flex md:flex-col items-center justify-center gap-4 p-6 md:p-8 bg-gradient-to-br from-primary/10 to-accent/10 md:min-w-[180px]">
                    <span className="text-4xl md:text-5xl font-bold text-primary/30">{area.number}</span>
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                      <area.icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6 md:p-8">
                    <h3 className="text-xl md:text-2xl font-bold mb-4 text-foreground">{area.title}</h3>
                    <ul className="space-y-3">
                      {area.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
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
