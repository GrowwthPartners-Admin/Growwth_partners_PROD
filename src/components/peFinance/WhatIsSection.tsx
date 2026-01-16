import { motion } from "framer-motion";
import { 
  FileCheck, 
  Building2, 
  GitMerge, 
  TrendingUp, 
  FileText,
  Zap
} from "lucide-react";

const features = [
  {
    icon: FileCheck,
    title: "Deal & Transaction Financial Readiness",
    description: "Ensuring financial preparedness for deals and transactions"
  },
  {
    icon: Building2,
    title: "Portfolio-Level Financial Governance",
    description: "Consistent financial oversight across all portfolio companies"
  },
  {
    icon: GitMerge,
    title: "Post-Acquisition Integration & Reporting",
    description: "Seamless integration of acquired company finances"
  },
  {
    icon: TrendingUp,
    title: "Value Creation Tracking & Performance",
    description: "Monitoring and measuring value creation initiatives"
  },
  {
    icon: FileText,
    title: "Investor & Lender-Ready Reporting",
    description: "Professional-grade reports for stakeholders"
  }
];

const WhatIsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-100 dark:bg-emerald-900/30 rounded-full mb-6">
                <Zap className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span className="text-emerald-700 dark:text-emerald-300 text-sm font-medium">AEO-Optimised Definition</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                What Are Private Equity{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                  Finance Services?
                </span>
              </h2>

              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Private Equity Finance services deliver specialised financial leadership and execution 
                tailored to buyout funds and portfolio companies.
              </p>

              <div className="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 rounded-2xl border border-emerald-200 dark:border-emerald-800">
                <p className="text-muted-foreground italic">
                  "Unlike operating company finance, PE finance prioritises speed, accuracy, 
                  and consistency across entities."
                </p>
              </div>
            </motion.div>

            {/* Right Features Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold text-foreground mb-6">These services focus on:</h3>
              
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border hover:border-emerald-300 dark:hover:border-emerald-700 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="p-2.5 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg text-white shrink-0 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;
