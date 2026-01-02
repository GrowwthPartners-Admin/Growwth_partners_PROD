import { motion } from "framer-motion";
import { 
  AlertTriangle, 
  XCircle, 
  CheckCircle2, 
  TrendingDown,
  Eye,
  Clock,
  UserX,
  Users,
  BarChart3,
  Zap,
  Layers,
  Link2
} from "lucide-react";

const ChallengesSection = () => {
  const gaps = [
    { icon: TrendingDown, text: "Limited forecasting accuracy" },
    { icon: Eye, text: "Weak budget ownership and accountability" },
    { icon: BarChart3, text: "Poor visibility into drivers of profitability" },
    { icon: Clock, text: "Delayed or inconsistent performance analysis" },
    { icon: UserX, text: "Overreliance on founders or senior leadership for analysis" }
  ];

  const benefits = [
    { icon: Users, text: "Experienced finance analysts and controllers" },
    { icon: BarChart3, text: "Structured monthly finance support" },
    { icon: TrendingDown, text: "Improved forecasting and reporting quality" },
    { icon: Zap, text: "Reduced dependency on founders for analysis" },
    { icon: Layers, text: "Flexible engagement that scales with complexity" },
    { icon: Link2, text: "Integration with CFO services for strategic oversight" }
  ];

  return (
    <section className="py-20 md:py-28">
      {/* Challenges Part */}
      <div className="bg-gradient-to-br from-red-50 to-orange-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-100 text-red-600 rounded-full text-sm font-medium mb-4">
                <AlertTriangle className="w-4 h-4" />
                Common Challenges
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                Common Gaps Without a Scalable Finance Team
              </h2>
              <p className="text-lg text-slate-600">
                Businesses without adequate finance capacity often face:
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {gaps.map((gap, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-red-100"
                >
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <XCircle className="w-5 h-5 text-red-500" />
                  </div>
                  <p className="text-slate-700 font-medium">{gap.text}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl p-6 text-center"
            >
              <div className="flex items-center justify-center gap-3">
                <AlertTriangle className="w-6 h-6 text-white" />
                <p className="text-white font-semibold text-lg">
                  These gaps restrict growth and increase decision risk.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* What You Get Part */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-500/20 text-green-400 rounded-full text-sm font-medium mb-4">
                <CheckCircle2 className="w-4 h-4" />
                The Solution
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                What You Get with Our Fractional Finance Team Services
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-green-500/30 transition-colors"
                >
                  <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                  </div>
                  <p className="text-white font-medium">{benefit.text}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl p-6 text-center border border-green-500/30"
            >
              <p className="text-slate-300 text-lg">
                This model delivers <span className="text-green-400 font-semibold">strong analytical capability</span> without fixed overhead.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;
