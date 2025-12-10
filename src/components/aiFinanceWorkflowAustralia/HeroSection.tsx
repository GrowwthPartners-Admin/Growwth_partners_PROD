import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles, TrendingUp, Shield } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-950 via-teal-950 to-slate-900">
      {/* Enhanced animated background elements - z-0 by default */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-[10%] w-[500px] h-[500px] bg-teal-500/20 rounded-full blur-[120px] animate-pulse" />
        <div
          className="absolute bottom-1/4 right-[5%] w-[600px] h-[600px] bg-cyan-400/15 rounded-full blur-[140px] animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-400/10 rounded-full blur-[150px]" />

        {/* Refined grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,black,transparent)]" />
      </div>

      {/* Floating decorative icons - z-10 to stay above bg but below content */}
      <motion.div
        className="absolute top-[15%] right-[8%] hidden xl:block z-10"
        animate={{
          y: [0, -25, 0],
          rotate: [0, 8, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-400/20 to-cyan-500/20 backdrop-blur-xl border border-white/10 flex items-center justify-center shadow-2xl">
          <Sparkles className="w-8 h-8 text-teal-300" />
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-[20%] left-[6%] hidden xl:block z-10"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -6, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      >
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400/20 to-teal-500/20 backdrop-blur-xl border border-white/10 flex items-center justify-center shadow-2xl">
          <TrendingUp className="w-8 h-8 text-emerald-300" />
        </div>
      </motion.div>

      {/* Main Content Container - z-30 to sit above everything */}
      <div className="container mx-auto px-4 sm:px-6 relative z-30 py-16 md:py-20">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-6"
          >
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-teal-500/10 to-cyan-500/10 backdrop-blur-md border border-teal-400/30 shadow-[0_0_30px_rgba(20,184,166,0.15)]">
              <Shield className="w-4 h-4 text-teal-300" />
              <span className="text-sm font-medium text-teal-100 tracking-wide">
                Powered by Ryzup.ai
              </span>
              <span className="px-2 py-0.5 rounded-full bg-teal-400/20 text-[11px] font-semibold text-teal-200 uppercase tracking-wider">
                New
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-wider leading-3 text-center"
          >
            Automate, Accelerate,{" "}
            <span className="inline-block bg-gradient-to-r from-teal-300 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
              Achieve
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-teal-100/80 mb-10 max-w-3xl mx-auto leading-relaxed text-center px-4"
          >
            Ryzup.ai turns Google Sheets and Xero into an AI-powered finance
            hub. Automate reporting, error checks, reconciliations and
            forecasting so teams move faster with fewer mistakes. AI automation
            for finance in Australia, built directly into the tools you already
            use.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button
              size="lg"
              onClick={() =>
                window.open(
                  "https://calendly.com/jd-growwthpartners/15min?month=2025-11",
                  "_blank"
                )
              }
              className="group relative bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-500 bg-[length:200%_100%] hover:bg-right text-white px-10 py-7 text-base md:text-lg font-semibold rounded-2xl shadow-[0_10px_40px_rgba(20,184,166,0.4)] hover:shadow-[0_15px_50px_rgba(20,184,166,0.5)] transition-all duration-500 hover:-translate-y-1 border-0"
            >
              <span className="relative z-10 flex items-center gap-2">
                Start with a Free Strategy Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="group border-2 border-white/20 bg-white/5 hover:border-white/30 text-white px-10 py-7 text-base md:text-lg font-semibold rounded-2xl backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5"
              onClick={() => window.open("https://ryzup.ai/", "_blank")}
            >
              <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              See Ryzup.ai in Action
            </Button>
          </motion.div>

          {/* Trust indicators - Completely safe from overlap now */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-teal-200/60 text-sm"
          >
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-teal-400" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>Built for Australian finance teams</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Setup in minutes</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Reduced height and removed the opaque middle stop */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-20 pointer-events-none" />
    </section>
  );
};

export default HeroSection;
