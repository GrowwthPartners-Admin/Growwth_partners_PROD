import { motion } from "framer-motion";
import { AlertTriangle, TrendingDown, Cloud, BarChart3, DollarSign, Users, CheckCircle } from "lucide-react";

const challenges = [
  { icon: TrendingDown, text: "Poor visibility into burn rate and runway" },
  { icon: Cloud, text: "Uncontrolled infrastructure and cloud costs" },
  { icon: BarChart3, text: "Weak forecasting during rapid scaling" },
  { icon: DollarSign, text: "Inconsistent revenue recognition" },
  { icon: AlertTriangle, text: "Limited insight into unit economics and margins" },
  { icon: Users, text: "Founder-led decision-making without financial validation" }
];

const benefits = [
  "Tech-experienced CFO and finance team",
  "Real-time financial dashboards",
  "Clear visibility into burn, runway, and margins",
  "Scalable finance systems aligned to growth",
  "Improved investor confidence and reporting discipline"
];

const ChallengesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-red-100 text-red-600 rounded-full text-sm font-medium mb-4">
            Challenges
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Common Financial Challenges in Tech Businesses
          </h2>
          <p className="text-lg text-slate-600">
            Without tech-specific finance expertise, companies often face these issues
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Challenges Grid */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 border border-red-100">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-red-500" />
                Common Pain Points
              </h3>
              <div className="grid gap-4">
                {challenges.map((challenge, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3 bg-white rounded-xl p-4 shadow"
                  >
                    <challenge.icon className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span className="text-slate-700">{challenge.text}</span>
                  </motion.div>
                ))}
              </div>
              <p className="mt-6 text-slate-600 text-center font-medium">
                These issues reduce scalability and investor confidence.
              </p>
            </div>
          </motion.div>

          {/* What You Get */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-orange-500 to-amber-500 rounded-3xl p-8 text-white h-full">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <CheckCircle className="w-6 h-6" />
                What You Get with Our Tech Business Finance Services
              </h3>
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3 bg-white/20 rounded-xl p-4 shadow"
                  >
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span>{benefit}</span>
                  </motion.div>
                ))}
              </div>
              <div className="bg-white/20 rounded-xl p-6 text-center">
                <p className="font-semibold">
                  All designed to support sustainable, capital-efficient tech growth.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;
