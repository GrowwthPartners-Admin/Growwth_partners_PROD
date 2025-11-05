import { motion } from "framer-motion";
import { Users, TrendingUp, Building2, Target, CheckCircle } from "lucide-react";

export const FinanceAutomationSection = () => {
  const targetUsers = [
    { icon: Users, text: "CFOs who want to scale finance without scaling headcount" },
    { icon: TrendingUp, text: "Founders who want to know burn, runway, and risk instantly" },
    { icon: Building2, text: "Finance teams who are tired of cleaning and reconciling data by hand" },
    { icon: Target, text: "Marketing and growth teams who need to prove ROI with real numbers" },
  ];

  const benefits = [
    "Automated reporting packs you can send to leadership, investors, or the board",
    "Cash flow and profitability views that update in real time",
    "Alerting when something drifts, breaks, or overspends",
    "Forecast models that adjust as your inputs change",
  ];

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-[#F1F0FB] to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Finance Automation Tools Built For Real Operators
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Most finance automation tools promise visibility. RyzUp gives you visibility and decision support.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">RyzUp is built for</h3>
            <div className="space-y-4">
              {targetUsers.map((user, index) => (
                <div key={index} className="flex items-start gap-4 bg-white p-4 rounded-lg shadow">
                  <div className="w-10 h-10 bg-brand-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <user.icon className="w-5 h-5 text-brand-orange" />
                  </div>
                  <p className="text-gray-700 pt-2">{user.text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">What you get</h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow">
                  <CheckCircle className="w-6 h-6 text-brand-orange flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
            <p className="text-lg font-semibold mt-8 text-brand-orange">
              This is the next generation of finance automation tools. Less time preparing. More time deciding.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
