import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Package, DollarSign, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection: React.FC = () => {

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-600/5 rounded-full blur-3xl" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/30 mb-6"
            >
              <Package className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-300 text-sm font-medium">Trading & Distribution Finance</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Trading & Distribution{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                Finance Services
              </span>{" "}
              in Singapore
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl sm:text-2xl text-emerald-100 font-medium mb-4"
            >
              Stronger Margins, Faster Cash Cycles & Financial Control for Trading Businesses
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg text-slate-300 mb-8 leading-relaxed max-w-xl"
            >
CFO-led finance for trading & distribution: margin clarity, better cash flow, and sustainable scale.            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <Button
                size="lg"
                onClick={() => window.open('https://calendly.com/jd-growwthpartners/15min?month=2025-11', '_blank')}
                className="group bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300"
              >
                Speak to a Trading Finance Expert
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Main card */}
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { icon: TrendingUp, label: "Margin Analysis", value: "Product-level" },
                    { icon: Package, label: "Inventory Control", value: "Real-time" },
                    { icon: DollarSign, label: "Cash Cycle", value: "Optimized" },
                    { icon: BarChart3, label: "Working Capital", value: "Managed" },
                  ].map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                      className="bg-white/5 rounded-2xl p-5 border border-white/10 hover:bg-white/10 transition-colors duration-300"
                    >
                      <item.icon className="w-8 h-8 text-emerald-400 mb-3" />
                      <p className="text-white font-semibold text-lg">{item.value}</p>
                      <p className="text-slate-400 text-sm">{item.label}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Stats bar */}
                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="flex items-center justify-between">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-emerald-400">30%</p>
                      <p className="text-xs text-slate-400">Avg. Cash Improvement</p>
                    </div>
                    <div className="w-px h-10 bg-white/20" />
                    <div className="text-center">
                      <p className="text-2xl font-bold text-cyan-400">50+</p>
                      <p className="text-xs text-slate-400">Trading Clients</p>
                    </div>
                    <div className="w-px h-10 bg-white/20" />
                    <div className="text-center">
                      <p className="text-2xl font-bold text-emerald-400">15+</p>
                      <p className="text-xs text-slate-400">Years Experience</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl p-4 shadow-xl"
              >
                <Package className="w-8 h-8 text-white" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute -top-4 -right-4 bg-white/10 backdrop-blur rounded-xl px-4 py-2 border border-white/20"
              >
                <span className="text-emerald-300 font-semibold">Trading Specialists</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
