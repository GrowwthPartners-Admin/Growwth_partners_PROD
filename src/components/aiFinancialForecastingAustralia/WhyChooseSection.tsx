import { motion } from "framer-motion";
import { AlertCircle, Clock, LineChart, CheckCircle } from "lucide-react";

const problems = [
  {
    icon: Clock,
    text: "Manual models are slow and fragile",
  },
  {
    icon: AlertCircle,
    text: "Assumptions change faster than spreadsheets can keep up",
  },
  {
    icon: LineChart,
    text: "Boards and investors expect forward visibility, not month-old snapshots",
  },
];

const solutions = [
  "Living forecasts that stay current",
  "Explainable models for leadership",
  "Decision-ready numbers always",
  "Practical AI for CFOs and founders",
];

export const WhyChooseSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Australian Teams Choose{" "}
            <span className="text-brand-green">AI Financial Forecasting</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Problems */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold text-muted-foreground mb-6">Common Challenges</h3>
            {problems.map((problem, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 bg-red-50 dark:bg-red-950/20 rounded-xl border border-red-200 dark:border-red-900/30"
              >
                <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                  <problem.icon className="w-5 h-5 text-red-600 dark:text-red-400" />
                </div>
                <p className="text-foreground pt-2">{problem.text}</p>
              </div>
            ))}
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold text-brand-green mb-6">Ryzup.ai Transforms This</h3>
            <p className="text-muted-foreground mb-6">
              Ryzup.ai turns static files into living forecasts so your numbers stay current, explainable, and decision ready. This is practical AI financial forecasting in Australia for CFOs, founders, and finance teams.
            </p>
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 bg-brand-green/5 rounded-xl border border-brand-green/20"
              >
                <div className="w-10 h-10 bg-brand-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-brand-green" />
                </div>
                <p className="text-foreground font-medium">{solution}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
