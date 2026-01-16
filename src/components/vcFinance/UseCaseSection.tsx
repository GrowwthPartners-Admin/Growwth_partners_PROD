import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Building2, 
  AlertCircle, 
  Lightbulb, 
  Trophy,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

const UseCaseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-8xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-4">
              Case Study
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
              Practical Use Case
            </h2>
          </motion.div>

          {/* Use Case Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl blur-xl opacity-20" />
            <div className="relative bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-2xl">
              {/* Header */}
              <div className="p-6 md:p-8 bg-gradient-to-r from-orange-600 to-orange-700 text-white">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Early-Stage VC Fund</h3>
                    <p className="text-blue-100">Singapore</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Challenges */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <AlertCircle className="w-5 h-5 text-red-500" />
                      <h4 className="font-bold text-foreground">Challenges</h4>
                    </div>
                    <ul className="space-y-3">
                      {[
                        "First-time fund operations",
                        "LP reporting and NAV consistency",
                        "Audit readiness"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-muted-foreground text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Solution */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Lightbulb className="w-5 h-5 text-blue-600" />
                      <h4 className="font-bold text-foreground">Our Solution</h4>
                    </div>
                    <ul className="space-y-3">
                      {[
                        "Implemented fund accounting and reporting framework",
                        "Built LP reporting templates and dashboards",
                        "Supported audit and compliance processes"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-muted-foreground text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Outcome */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Trophy className="w-5 h-5 text-green-600" />
                      <h4 className="font-bold text-foreground">Outcome</h4>
                    </div>
                    <ul className="space-y-3">
                      {[
                        "Timely, accurate LP reporting",
                        "Improved investor confidence",
                        "Smooth audit and fund operations"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-foreground font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Flow Arrow */}
                <div className="hidden md:flex justify-center items-center gap-4 mt-8 pt-8 border-t border-slate-200 dark:border-slate-700">
                  <span className="px-4 py-2 rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 text-sm font-medium">
                    Challenges
                  </span>
                  <ArrowRight className="w-5 h-5 text-muted-foreground" />
                  <span className="px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium">
                    Solution
                  </span>
                  <ArrowRight className="w-5 h-5 text-muted-foreground" />
                  <span className="px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-medium">
                    Success
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UseCaseSection;
