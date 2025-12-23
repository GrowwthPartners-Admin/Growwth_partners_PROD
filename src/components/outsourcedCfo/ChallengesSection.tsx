import { motion } from "framer-motion";
import { AlertTriangle, Users, FileX, Eye, Brain, CheckCircle, UserCheck, BarChart3, Cpu, Shield, TrendingUp } from "lucide-react";

const challenges = [
  { icon: AlertTriangle, text: "Fragmented financial responsibilities", color: "text-red-500" },
  { icon: Users, text: "Poor coordination between accounting, payroll, and reporting", color: "text-red-500" },
  { icon: FileX, text: "Weak financial controls and governance", color: "text-red-500" },
  { icon: Eye, text: "Inconsistent cash flow visibility", color: "text-red-500" },
  { icon: Brain, text: "Founder-dependent decision-making", color: "text-red-500" }
];

const benefits = [
  { icon: UserCheck, text: "Dedicated senior Outsourced CFO" },
  { icon: Shield, text: "Full ownership of finance leadership" },
  { icon: Users, text: "Integrated finance team support" },
  { icon: Cpu, text: "AI-enabled dashboards and reporting" },
  { icon: BarChart3, text: "Clear accountability and governance" },
  { icon: TrendingUp, text: "Scalable engagement as the business grows" }
];

const ChallengesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Financial Challenges We Solve
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Without full CFO ownership, businesses often experience critical gaps
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Challenges */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 border border-red-100">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-red-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Common Challenges</h3>
                </div>
                
                <div className="space-y-4">
                  {challenges.map((challenge, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm"
                    >
                      <challenge.icon className={`w-5 h-5 ${challenge.color} flex-shrink-0 mt-0.5`} />
                      <span className="text-slate-700">{challenge.text}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-red-100/50 rounded-xl border border-red-200">
                  <p className="text-red-700 font-medium text-center">
                    Outsourced CFO services eliminate these gaps by creating one clear owner for financial leadership.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-100">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">What You Get</h3>
                </div>
                
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm"
                    >
                      <benefit.icon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{benefit.text}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-green-100/50 rounded-xl border border-green-200">
                  <p className="text-green-700 font-medium text-center">
                    All delivered at a significantly lower cost than building an in-house CFO function.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;
