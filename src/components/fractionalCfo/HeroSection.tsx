import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Shield, BarChart3, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-orange-900/20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 rounded-full px-4 py-2 mb-6"
            >
              <TrendingUp className="w-4 h-4 text-orange-400" />
              <span className="text-orange-300 text-sm font-medium">
                Strategic CFO Expertise, Without the Full-Time Cost
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Fractional CFO Services in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">
                Singapore
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 mb-6 font-light">
              Senior Financial Leadership, Precisely When Your Business Needs It
            </p>

            <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-xl">
              Growwth Partners' Fractional CFO services deliver executive-level financial leadership on a part-time basis—designed for businesses that need strategic control, disciplined forecasting, and investor-ready reporting without full-time overhead.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-8 py-6 text-lg rounded-full shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300"
                onClick={() => window.open("https://calendly.com/growwth-partners/30min", "_blank")}
              >
                Speak to a Fractional CFO
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Feature Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">
                What a Fractional CFO Delivers
              </h3>
              
              <div className="space-y-4">
                {[
                  { icon: TrendingUp, text: "Financial Strategy & Governance", color: "text-orange-400" },
                  { icon: BarChart3, text: "Forecasting & Scenario Planning", color: "text-amber-400" },
                  { icon: Shield, text: "Cash Flow & Capital Allocation", color: "text-emerald-400" },
                  { icon: Users, text: "Board & Investor Communication", color: "text-blue-400" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
                  >
                    <div className={`p-2 rounded-lg bg-white/10 ${item.color}`}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="text-slate-200 font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-400">60-70%</div>
                    <div className="text-slate-400 text-sm">Cost Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-amber-400">Flexible</div>
                    <div className="text-slate-400 text-sm">Engagement</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
