import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, PieChart, Shield, BarChart3 } from "lucide-react";
import { useState } from "react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-brand-orange/20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-600/5 rounded-full blur-3xl" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(249,115,22,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(249,115,22,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        {/* Floating icons */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-32 right-[20%] text-orange-400/20"
        >
          <TrendingUp size={80} />
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-32 left-[15%] text-orange-400/20"
        >
          <PieChart size={100} />
        </motion.div>
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 3, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/2 right-[10%] text-orange-400/15"
        >
          <Shield size={60} />
        </motion.div>
        <motion.div
          animate={{ y: [0, 15, 0], rotate: [0, -3, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute bottom-1/3 right-[30%] text-orange-400/15"
        >
          <BarChart3 size={70} />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
            <span className="text-orange-300 text-sm font-medium">Institutional-Grade Fund Finance</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Venture Capital &{" "}
            <span className="bg-gradient-to-r from-orange-400 via-orange-300 to-orange-500 bg-clip-text text-transparent">
              Fund Finance
            </span>{" "}
            Services in Singapore
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-orange-100/90 font-medium mb-6 max-w-4xl mx-auto"
          >
            Institutional-Grade Financial Governance, Reporting & Control for Investment Funds
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-base sm:text-lg text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Drive fund growth with CFO-led finance and LP-ready reporting. We handle the systems and institutional discipline so you can focus on deals
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <Button
              size="lg"
              onClick={() =>
                  window.open(
                    "https://calendly.com/jd-growwthpartners/15min?month=2025-11",
                    "_blank"
                  )}
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300 group"
            >
              Speak to a Fund Finance Expert
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
