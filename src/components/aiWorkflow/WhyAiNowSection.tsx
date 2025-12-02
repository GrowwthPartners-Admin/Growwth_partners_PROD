import { motion } from "framer-motion";
import { AlertCircle, Clock, FileSpreadsheet, TrendingDown, CheckCircle, Zap, BarChart3, HelpCircle } from "lucide-react";

export const WhyAiNowSection = () => {
  const problems = [
    { icon: FileSpreadsheet, text: "Manual spreadsheet updates" },
    { icon: Clock, text: "Late-night reporting crunches" },
    { icon: AlertCircle, text: "Reconciliations that drag on" },
    { icon: TrendingDown, text: "Forecasts that break whenever something changes" },
  ];

  const solutions = [
    { icon: Zap, text: "Automate recurring finance tasks" },
    { icon: CheckCircle, text: "Catch errors before they hit your reports" },
    { icon: BarChart3, text: "Get real-time views of cash, P&L and runway" },
    { icon: HelpCircle, text: "Answer \"what if\" questions in minutes, not days" },
  ];

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Your Finance Workflow Needs{" "}
            <span className="text-brand-orange">AI Now</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your team is doing great work with imperfect tools
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Problems Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-red-50 dark:bg-red-950/20 p-8 rounded-2xl border border-red-200 dark:border-red-900/30"
          >
            <h3 className="text-xl font-bold mb-6 text-red-600 dark:text-red-400 flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              Current Challenges
            </h3>
            <ul className="space-y-4">
              {problems.map((problem, index) => (
                <li key={index} className="flex items-start gap-3">
                  <problem.icon className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">{problem.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Solutions Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-green-50 dark:bg-green-950/20 p-8 rounded-2xl border border-green-200 dark:border-green-900/30"
          >
            <h3 className="text-xl font-bold mb-6 text-brand-green flex items-center gap-2">
              <Zap className="w-5 h-5" />
              With Ryzup.ai You Can
            </h3>
            <ul className="space-y-4">
              {solutions.map((solution, index) => (
                <li key={index} className="flex items-start gap-3">
                  <solution.icon className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">{solution.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-10 text-lg text-muted-foreground max-w-3xl mx-auto"
        >
          Instead of rebuilding every model and report by hand, you plug AI into your finance workflow and let it handle the heavy lifting.
        </motion.p>
      </div>
    </section>
  );
};
