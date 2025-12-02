import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, TrendingUp, Clock, LineChart, Calendar } from "lucide-react";

export const StopGuessingSection = () => {
  const problems = [
    "Manual spreadsheets and static budgets",
    "Forecasts outdated by the time they're shared",
    "Hours spent rebuilding models for every meeting"
  ];

  const solutions = [
    { icon: Clock, text: "See your cash runway in real time, not once a quarter" },
    { icon: TrendingUp, text: "Understand how each decision changes your next 6 to 18 months" },
    { icon: LineChart, text: "Replace one-off Excel files with living, breathing forecasts" }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stop Guessing Your Future.{" "}
            <span className="text-brand-green">Start Modelling It.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            With RyzUp, AI forecasting for Singapore businesses turns into a daily, real-time view of your cash, revenue, and runway.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Problems */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-red-50 dark:bg-red-950/20 rounded-2xl p-8"
          >
            <h3 className="text-xl font-semibold mb-6 text-red-700 dark:text-red-400">
              Most teams still rely on...
            </h3>
            <div className="space-y-4">
              {problems.map((problem, index) => (
                <div key={index} className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">{problem}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-brand-green/5 rounded-2xl p-8"
          >
            <h3 className="text-xl font-semibold mb-6 text-brand-green">
              With RyzUp, you can...
            </h3>
            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <div key={index} className="flex items-start gap-3">
                  <solution.icon className="w-5 h-5 text-brand-green mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">{solution.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-12"
        >
          <a href="https://calendly.com/jd-growwthpartners/15min?month=2025-11" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-brand-green hover:bg-brand-green/90 text-white">
              <Calendar className="w-4 h-4 mr-2" />
              Book a Free Demo
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
