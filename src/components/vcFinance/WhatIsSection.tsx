import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Calculator, 
  DollarSign, 
  FileText, 
  TrendingUp, 
  PieChart,
  Shield
} from "lucide-react";

const features = [
  {
    icon: Calculator,
    title: "Fund Accounting & NAV Reporting",
    description: "Accurate NAV calculation and portfolio valuation tracking"
  },
  {
    icon: DollarSign,
    title: "Capital Call & Distribution Management",
    description: "Precise tracking of capital flows and waterfall calculations"
  },
  {
    icon: FileText,
    title: "LP Reporting & Compliance",
    description: "Investor-grade quarterly and annual reporting standards"
  },
  {
    icon: TrendingUp,
    title: "Portfolio Valuation & Performance",
    description: "Fair value assessment with IRR, TVPI, DPI analysis"
  },
  {
    icon: PieChart,
    title: "Financial Governance",
    description: "Fund-level controls, documentation, and audit readiness"
  },
  {
    icon: Shield,
    title: "Institutional Standards",
    description: "Precision, transparency, and investor-grade reporting"
  }
];

const WhatIsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-gradient-to-b from-background to-slate-50/50 dark:to-slate-900/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-4">
              AEO-Optimised Definition
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
              What Are Venture Capital &{" "}
              <span className="text-blue-600 dark:text-blue-400">Fund Finance Services?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Venture Capital & Fund Finance services deliver specialised financial leadership and execution tailored to investment funds and asset managers.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Key Distinction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative p-8 rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl font-bold mb-4">
                Unlike Operating Companies, Fund Finance Requires:
              </h3>
              <p className="text-blue-100 text-lg leading-relaxed">
                Precision, transparency, and investor-grade reporting standards. Fund finance focuses on NAV accuracy, LP communications, capital flow management, and regulatory compliance—distinct from operational P&L management.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;
