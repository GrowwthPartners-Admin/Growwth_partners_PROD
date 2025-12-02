import { motion } from "framer-motion";
import { XCircle, CheckCircle } from "lucide-react";

export const WhyRyzupSection = () => {
  const comparison = [
    {
      spreadsheet: "Manual updates",
      ryzup: "Automated data pulls and model updates"
    },
    {
      spreadsheet: "One person 'owns' the logic",
      ryzup: "Transparent predictive finance models anyone can read"
    },
    {
      spreadsheet: "Easy to break, hard to audit",
      ryzup: "Scenario modelling that is fast and safe"
    },
    {
      spreadsheet: "Static numbers that go out of date fast",
      ryzup: "Always current forecasts, ready for leadership and investors"
    }
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
            Why RyzUp,{" "}
            <span className="text-brand-green">Not Just Another Spreadsheet</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* Spreadsheets Column */}
            <div className="bg-red-50 dark:bg-red-950/20 rounded-2xl p-6 lg:p-8">
              <h3 className="text-lg font-semibold mb-6 text-red-700 dark:text-red-400 flex items-center gap-2">
                <XCircle className="w-5 h-5" />
                Spreadsheets Alone
              </h3>
              <div className="space-y-4">
                {comparison.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <XCircle className="w-4 h-4 text-red-400 mt-1 shrink-0" />
                    <span className="text-muted-foreground text-sm">{item.spreadsheet}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* RyzUp Column */}
            <div className="bg-brand-green/5 rounded-2xl p-6 lg:p-8">
              <h3 className="text-lg font-semibold mb-6 text-brand-green flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                RyzUp AI Forecasting
              </h3>
              <div className="space-y-4">
                {comparison.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-brand-green mt-1 shrink-0" />
                    <span className="text-muted-foreground text-sm">{item.ryzup}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-8 text-lg font-medium text-muted-foreground"
          >
            Keep spreadsheets for analysis.{" "}
            <span className="text-brand-green font-semibold">Use RyzUp to run the future.</span>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
