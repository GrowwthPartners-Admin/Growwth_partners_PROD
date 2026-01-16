import { motion } from "framer-motion";
import { 
  Building2, 
  AlertCircle, 
  Lightbulb, 
  TrendingUp,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

const challenges = [
  "Inconsistent portfolio reporting",
  "Limited visibility into value creation",
  "Exit readiness concerns"
];

const solutions = [
  "Implemented standardised portfolio reporting",
  "Built value creation and cash flow dashboards",
  "Supported exit preparation and buyer diligence"
];

const outcomes = [
  "Faster decision-making",
  "Improved IRR visibility",
  "Smooth exit process with minimal delays"
];

const UseCaseSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
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
              Practical{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                Use Case
              </span>
            </h2>
          </motion.div>

          {/* Use Case Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-50 to-emerald-50/50 dark:from-slate-900 dark:to-emerald-950/30 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden"
          >
            {/* Client Header */}
            <div className="p-6 lg:p-8 bg-gradient-to-r from-orange-600 to-orange-600 text-white">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/20 rounded-xl">
                  <Building2 className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-emerald-100 text-sm font-medium">Client Type</p>
                  <h3 className="text-2xl font-bold">Mid-Market PE Fund (Singapore)</h3>
                </div>
              </div>
            </div>

            {/* Content Grid */}
            <div className="grid md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-slate-700">
              {/* Challenges */}
              <div className="p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg">
                    <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                  </div>
                  <h4 className="text-lg font-bold text-foreground">Challenges</h4>
                </div>
                <ul className="space-y-3">
                  {challenges.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solutions */}
              <div className="p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-amber-100 dark:bg-amber-900/30 rounded-lg">
                    <Lightbulb className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                  </div>
                  <h4 className="text-lg font-bold text-foreground">Our Solution</h4>
                </div>
                <ul className="space-y-3">
                  {solutions.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outcomes */}
              <div className="p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                    <TrendingUp className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h4 className="text-lg font-bold text-foreground">Outcome</h4>
                </div>
                <ul className="space-y-3">
                  {outcomes.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                      <span className="text-foreground font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Result Banner */}
            <div className="p-6 lg:p-8 bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 border-t border-slate-200 dark:border-slate-700">
              <div className="flex items-center justify-center gap-4 text-center">
                <ArrowRight className="w-6 h-6 text-emerald-600 dark:text-emerald-400 hidden sm:block" />
                <p className="text-lg font-semibold text-emerald-800 dark:text-emerald-200">
                  Smooth exit process with minimal delays and improved IRR visibility
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UseCaseSection;
