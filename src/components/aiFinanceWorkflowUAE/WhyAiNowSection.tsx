import { motion } from "framer-motion";
import { AlertCircle, Clock, FileX, TrendingDown, CheckCircle, Zap, LineChart, HelpCircle } from "lucide-react";

const challenges = [
  {
    icon: Clock,
    text: "Manual spreadsheet updates slow month end",
  },
  {
    icon: FileX,
    text: "Reconciliations and checks consume valuable hours",
  },
  {
    icon: AlertCircle,
    text: "Reports go out of date as soon as numbers change",
  },
  {
    icon: TrendingDown,
    text: "Forecasts break when assumptions shift",
  },
];

const solutions = [
  {
    icon: Zap,
    text: "Automate recurring workflows",
  },
  {
    icon: CheckCircle,
    text: "Catch issues before they reach reports",
  },
  {
    icon: LineChart,
    text: "Get real time views of cash, P&L and runway",
  },
  {
    icon: HelpCircle,
    text: 'Turn "what if" questions into answers in minutes',
  },
];

const WhyAiNowSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why UAE Finance Teams Need{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
              AI Now
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Challenges */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border border-red-100"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
              <AlertCircle className="w-6 h-6 text-red-500" />
              Current Challenges
            </h3>
            <div className="space-y-4">
              {challenges.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start gap-4 bg-white/60 rounded-xl p-4"
                >
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-red-600" />
                  </div>
                  <p className="text-gray-700 pt-2">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-100"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
              <Zap className="w-6 h-6 text-amber-600" />
              With Ryzup.ai
            </h3>
            <div className="space-y-4">
              {solutions.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start gap-4 bg-white/60 rounded-xl p-4"
                >
                  <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-amber-600" />
                  </div>
                  <p className="text-gray-700 pt-2">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyAiNowSection;
