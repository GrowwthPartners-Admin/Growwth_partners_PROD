import { motion } from "framer-motion";
import { 
  FileSearch, 
  GitMerge, 
  BarChart3, 
  TrendingUp, 
  DoorOpen,
  UserCheck
} from "lucide-react";

const services = [
  {
    icon: FileSearch,
    number: "01",
    title: "Deal Readiness & Transaction Support",
    items: [
      "Pre-deal financial assessments",
      "Quality of earnings (QoE) support",
      "Financial due diligence readiness"
    ]
  },
  {
    icon: GitMerge,
    number: "02",
    title: "Post-Acquisition Integration (PAI)",
    items: [
      "Rapid finance function stabilisation",
      "Standardised reporting frameworks",
      "Alignment of accounting policies and controls"
    ]
  },
  {
    icon: BarChart3,
    number: "03",
    title: "Portfolio-Level Reporting & Governance",
    items: [
      "Consistent MIS across portfolio companies",
      "Portfolio dashboards and performance metrics",
      "Board and lender-ready reporting"
    ]
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Value Creation & Performance Tracking",
    items: [
      "Margin improvement and cost optimisation tracking",
      "Working capital and cash flow initiatives",
      "KPI-driven value creation plans"
    ]
  },
  {
    icon: DoorOpen,
    number: "05",
    title: "Exit Readiness & Reporting",
    items: [
      "Exit-quality financial statements",
      "Vendor due diligence preparation",
      "Data room and buyer readiness support"
    ]
  },
  {
    icon: UserCheck,
    number: "06",
    title: "CFO-Led Strategic Oversight",
    items: [
      "Trusted finance partner to operating partners",
      "Support for restructuring and transformation",
      "Financial leadership across the investment lifecycle"
    ]
  }
];

const HowWeDeliverSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900/50 dark:to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-8xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              How Growwth Partners Delivers{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500">
                Private Equity Finance Value
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our Private Equity Finance services are designed to deliver control, speed, and measurable value creation.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute inset-0 shadow bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
                <div className="relative h-full p-6 lg:p-8 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-700 transition-all duration-300 shadow-sm hover:shadow-xl">
                  {/* Number Badge */}
                  <div className="absolute top-4 right-4 text-4xl font-bold text-orange-100 dark:text-orange-900/50">
                    {service.number}
                  </div>

                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-7 h-7" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-4 pr-12">
                    {service.title}
                  </h3>

                  {/* Items */}
                  <ul className="space-y-3">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 shrink-0" />
                        <span className="text-muted-foreground text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeDeliverSection;
