import { motion } from "framer-motion";
import { 
  AlertTriangle, 
  Eye, 
  Package, 
  Clock, 
  Receipt, 
  BarChart2,
  User,
  CheckCircle,
  Sparkles
} from "lucide-react";

const ChallengesSection = () => {
  const challenges = [
    { icon: Eye, text: "Poor SKU-level margin visibility" },
    { icon: Package, text: "Inventory overstocking or stockouts" },
    { icon: Clock, text: "Cash flow gaps due to delayed platform payouts" },
    { icon: Receipt, text: "Inaccurate revenue recognition across channels" },
    { icon: BarChart2, text: "Limited insight into CAC, ROAS, and contribution margins" },
    { icon: User, text: "Founder-driven decisions based on incomplete data" },
  ];

  const benefits = [
    "Ecommerce-experienced CFO and finance team",
    "SKU-level profitability dashboards",
    "Cash flow and inventory planning models",
    "Marketing ROI and unit economics insights",
    "Accurate, timely ecommerce reporting",
    "Scalable finance infrastructure as volume grows",
  ];

  return (
    <section className="py-20 lg:py-28 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left - Challenges */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-red-500/20 rounded-xl">
                  <AlertTriangle className="w-6 h-6 text-red-400" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  Common Financial Challenges
                </h2>
              </div>

              <p className="text-gray-300 mb-8 leading-relaxed">
                Without ecommerce-specific finance expertise, businesses often face critical 
                challenges that intensify as order volume increases.
              </p>

              <div className="space-y-4">
                {challenges.map((challenge, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-red-500/30 transition-colors"
                  >
                    <div className="p-2 bg-red-500/10 rounded-lg">
                      <challenge.icon className="w-5 h-5 text-red-400" />
                    </div>
                    <span className="text-gray-200">{challenge.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right - What You Get */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 rounded-3xl p-8 border border-emerald-500/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-emerald-500/20 rounded-xl">
                    <Sparkles className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    What You Get With Us
                  </h2>
                </div>

                <p className="text-gray-300 mb-8 leading-relaxed">
                  All designed to support profitable, controlled ecommerce scaling.
                </p>

                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-emerald-500/20 hover:border-emerald-400/40 transition-colors"
                    >
                      <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                      <span className="text-gray-100">{benefit}</span>
                    </motion.div>
                  ))}
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
