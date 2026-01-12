import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Rocket, TrendingUp, BarChart3, Shield } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-orange-900/20 py-20 pt-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
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
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container-custom relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 text-orange-300 rounded-full text-sm font-medium mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Rocket className="w-4 h-4" />
              Finance Built for Speed, Scale & Fundraising
            </motion.span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Startup Finance Services in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-300">
                Singapore
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 mb-6 font-light">
              Build Financial Clarity, Control & Investor Confidence from Day One
            </p>

            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              Growwth Partners' Startup Finance services in Singapore help founders build reliable financial systems, gain visibility into cash and performance, and present investor-ready numbers—so financial execution supports growth instead of slowing it down.
            </p>

            <Button
              onClick={() =>
                window.open(
                  "https://calendly.com/jd-growwthpartners/15min?month=2025-11",
                  "_blank"
                )
              }
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-orange-500/25 transition-all duration-300 hover:scale-105"
            >
              👉 Speak to a Startup Finance Expert
            </Button>
          </motion.div>

          {/* Right content - Feature card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">
                Why Startup Finance Matters
              </h3>

              <div className="space-y-5">
                {[
                  { icon: Rocket, title: "Growth-Focused", desc: "Forward-looking finance for scaling startups" },
                  { icon: TrendingUp, title: "Investor-Ready", desc: "Numbers that build credibility" },
                  { icon: BarChart3, title: "Cash Visibility", desc: "Know your runway at all times" },
                  { icon: Shield, title: "Risk Control", desc: "Identify financial risks early" },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    className="flex items-start gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-400 rounded-xl flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{item.title}</h4>
                      <p className="text-slate-400 text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
