import { motion } from "framer-motion";
import { AlertCircle, FileX, TrendingDown, Clock } from "lucide-react";

export const WhyAiMattersSection = () => {
  const problems = [
    { icon: FileX, text: "Spreadsheets break" },
    { icon: AlertCircle, text: "Data is scattered in tools, accounts, and files" },
    { icon: Clock, text: "Your team wastes hours building reports instead of making decisions" },
    { icon: TrendingDown, text: "Forecasting is more guesswork than science" },
  ];

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why AI in Finance Actually Matters Now
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
            Finance is no longer just reporting what happened last month. You are expected to explain what is happening right now and what will happen next.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-red-100 p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-6 text-red-600">The Problem</h3>
            <ul className="space-y-4">
              {problems.map((problem, index) => (
                <li key={index} className="flex items-start gap-3">
                  <problem.icon className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{problem.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-[#F2FCE2] p-8 rounded-xl shadow-lg border-2 border-brand-orange/20"
          >
            <h3 className="text-2xl font-bold mb-6 text-brand-orange">The Shift</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              AI in finance lets you move from reactive to predictive. RyzUp uses machine intelligence to read your financial data, find risks, surface trends, and generate insights automatically.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              You get answers in minutes instead of spending days building dashboards.
            </p>
            <p className="font-semibold text-lg text-gray-900">
              This is not another dashboard tool. This is finance that runs itself.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
