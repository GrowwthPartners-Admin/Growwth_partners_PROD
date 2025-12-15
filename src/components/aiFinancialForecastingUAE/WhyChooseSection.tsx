import { motion } from "framer-motion";
import { AlertTriangle, Clock, Eye, Zap, RefreshCw, HelpCircle } from "lucide-react";

const WhyChooseSection = () => {
  const problems = [
    { icon: AlertTriangle, text: "Manual models are fragile and fall out of date quickly" },
    { icon: Eye, text: "Leadership needs forward visibility, not last month's snapshot" },
    { icon: Clock, text: "Scenario planning and risk controls are hard to maintain by hand" },
  ];

  const solutions = [
    { icon: RefreshCw, text: "Living forecasts that refresh with new data" },
    { icon: HelpCircle, text: "Make 'what if' questions easy to answer" },
    { icon: Zap, text: "Practical AI for CFOs, founders and finance teams" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-amber-50/50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why UAE Teams Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
              AI Financial Forecasting
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Problems */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-red-50 rounded-3xl p-8 border border-red-100"
          >
            <h3 className="text-xl font-semibold text-red-800 mb-6 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              Common Challenges
            </h3>
            <div className="space-y-4">
              {problems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 bg-white rounded-xl p-4 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-red-600" />
                  </div>
                  <p className="text-gray-700 pt-2">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-amber-50 rounded-3xl p-8 border border-amber-100"
          >
            <h3 className="text-xl font-semibold text-amber-800 mb-6 flex items-center gap-2">
              <Zap className="w-5 h-5" />
              Ryzup.ai Delivers
            </h3>
            <div className="space-y-4">
              {solutions.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 bg-white rounded-xl p-4 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-amber-600" />
                  </div>
                  <p className="text-gray-700 pt-2">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-lg text-gray-600 mt-12 max-w-3xl mx-auto"
        >
          This is practical <span className="font-semibold text-amber-600">AI financial forecasting in the UAE</span> for 
          CFOs, founders and finance teams.
        </motion.p>
      </div>
    </section>
  );
};

export default WhyChooseSection;
