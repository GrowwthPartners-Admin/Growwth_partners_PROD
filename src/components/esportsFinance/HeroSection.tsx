import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Gamepad2, ArrowRight, Zap, Trophy, TrendingUp } from "lucide-react";
import { useState } from "react";


const HeroSection = () => {


  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-800 via-slate-600 to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-400/15 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/10 rounded-full blur-3xl" />
        
        {/* Gaming grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(249,115,22,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(249,115,22,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-300 text-sm font-medium mb-6"
            >
              <Gamepad2 className="w-4 h-4" />
              <span>Gaming Finance Specialists</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Esports & Gaming{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-amber-400">
                Finance Services
              </span>{" "}
              in Singapore
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Financial Control, Monetisation Visibility & Scalable Growth for Gaming Businesses. CFO-led financial leadership helping gaming companies optimise monetisation, manage costs, and build investor-grade financial clarity.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                onClick={() => window.open('https://calendly.com/jd-growwthpartners/15min?month=2025-11', '_blank')}
                className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white px-8 py-6 text-lg rounded-xl shadow-lg transition-all hover:scale-105 shadow-orange-500/25 group"
              >
                Speak to a Gaming Finance Expert
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/10"
            >
              {[
                { icon: Zap, label: "Multi-Stream Revenue", value: "Tracking" },
                { icon: Trophy, label: "Esports & Gaming", value: "Expertise" },
                { icon: TrendingUp, label: "Investor-Ready", value: "Reports" },
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <stat.icon className="w-6 h-6 text-orange-400 mx-auto lg:mx-0 mb-2" />
                  <div className="text-white font-semibold">{stat.value}</div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main card */}
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-3xl p-8 border border-orange-500/20 shadow-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-400 flex items-center justify-center">
                    <Gamepad2 className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">Gaming Finance Dashboard</h3>
                    <p className="text-slate-400 text-sm">Real-time monetisation insights</p>
                  </div>
                </div>

                {/* Metrics grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { label: "ARPU", value: "$4.82", change: "+18%" },
                    { label: "LTV", value: "$127", change: "+24%" },
                    { label: "PAC", value: "$2.15", change: "-12%" },
                    { label: "Retention", value: "42%", change: "+8%" },
                  ].map((metric, index) => (
                    <div key={index} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
                      <div className="text-slate-400 text-xs mb-1">{metric.label}</div>
                      <div className="text-white font-bold text-xl">{metric.value}</div>
                      <div className="text-emerald-400 text-xs">{metric.change}</div>
                    </div>
                  ))}
                </div>

                {/* Chart placeholder */}
                <div className="h-32 bg-slate-800/30 rounded-xl border border-slate-700/50 flex items-end justify-around p-4">
                  {[65, 45, 80, 55, 90, 70, 85].map((height, index) => (
                    <div
                      key={index}
                      className="w-6 bg-gradient-to-t from-orange-600 to-orange-500 rounded-t-md"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 bg-gradient-to-br from-orange-500 to-orange-400 rounded-2xl p-4 shadow-xl"
              >
                <Trophy className="w-8 h-8 text-white" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-4 -left-4 bg-gradient-to-br from-orange-500 to-orange-400 rounded-2xl p-4 shadow-xl"
              >
                <Zap className="w-8 h-8 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
