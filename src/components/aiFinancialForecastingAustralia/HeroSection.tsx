import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, TrendingUp, Sparkles, PieChart } from "lucide-react";
import { useState } from "react";
import image from "/images/finince-forecasting-Australia.jpg"

export const HeroSection = () => {

  return (
    <section className="relative pb-20 pt-16 lg:py-30  bg-slate-50/50 dark:bg-slate-950 overflow-hidden">
      {/* Refined Background Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] bg-brand-green/20 rounded-full blur-[120px] opacity-40 animate-pulse" />
        <div className="absolute top-[20%] -right-[10%] w-[600px] h-[600px] bg-brand-blue/20 rounded-full blur-[120px] opacity-40 animate-pulse delay-1000" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8 text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white dark:bg-slate-900 border border-brand-green/20 shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-brand-green fill-brand-green/20" />
              <span className="text-sm font-semibold bg-gradient-to-r from-brand-green to-brand-blue bg-clip-text text-transparent">
                Next-Gen Financial Intelligence
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
              Forecast Smarter <br className="hidden lg:block" />
              with <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-brand-green via-teal-500 to-brand-blue bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                  AI Precision
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-3 bg-brand-green/20 -rotate-1 rounded-full blur-sm" />
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Ryzup.ai embeds predictive financial modeling directly into your workflow. 
              Simulate cash flow, profit, and hiring scenarios in seconds—not spreadsheets.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="h-14 px-8 text-lg bg-brand-green hover:bg-brand-green/90 text-white rounded-xl shadow-lg shadow-brand-green/25 hover:shadow-brand-green/40 hover:-translate-y-0.5 transition-all"
                onClick={() =>
                window.open(
                  "https://calendly.com/jd-growwthpartners/15min?month=2025-11",
                  "_blank"
                )}
              >
                Start Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <a href="https://workspace.google.com/u/0/marketplace/app/ryzup_sheets/1047771589087?flow_type=2" target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="h-14 px-8 text-lg border-2 border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-xl hover:-translate-y-0.5 transition-all"
                >
                  <Play className="mr-2 w-5 h-5 text-brand-blue" />
                  View Forecast Demo
                </Button>
              </a>
            </div>
            
            {/* Trust/Social Proof Small Text */}
            <p className="text-sm text-slate-500 font-medium pt-4">
              Trusted by fast-growing finance teams in Australia 🇦🇺
            </p>
          </motion.div>

          {/* Right Visual - Enhanced Image Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative lg:h-[600px] flex items-center justify-center perspective-1000"
          >
            {/* Dashboard Image Container with Glass/3D Effect */}
            <div className="relative w-full max-w-[600px] group">
              
              {/* Glow Effect Behind */}
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-green to-brand-blue rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
              
              {/* Main Image Card */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200/50 dark:border-slate-700/50 bg-white dark:bg-slate-900 transform transition-transform duration-500 hover:scale-[1.01]">
                
                {/* Browser/Window Header Bar */}
                <div className="h-8 bg-slate-50 dark:bg-slate-800 border-b border-slate-100 dark:border-slate-700 flex items-center px-4 space-x-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                </div>

                {/* Actual Dashboard Image - REPLACE src with your image */}
                <img 
                  src={image} 
                  alt="Ryzup.ai Forecasting Dashboard" 
                  className="w-full h-auto object-cover aspect-[4/3] md:aspect-[16/10]"
                />
                
                {/* Overlay Gradient for depth */}
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/5 to-transparent pointer-events-none" />
              </div>

              {/* Floating Element 1 - Growth */}
              <motion.div
                initial={{ opacity: 0, y: 20, x: -20 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-6 -left-4 md:-left-10 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-slate-100 dark:border-slate-700 flex items-center gap-3 animate-float z-20"
              >
                <div className="p-2.5 bg-green-100 dark:bg-green-900/30 rounded-lg text-green-600 dark:text-green-400">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Growth</div>
                  <div className="text-base font-bold text-slate-900 dark:text-white">+142%</div>
                </div>
              </motion.div>

              {/* Floating Element 2 - Accuracy */}
              <motion.div
                initial={{ opacity: 0, y: -20, x: 20 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ delay: 0.9 }}
                className="absolute -top-6 -right-4 md:-right-10 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-slate-100 dark:border-slate-700 flex items-center gap-3 animate-float-delayed z-20"
              >
                 <div className="p-2.5 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                  <PieChart className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Accuracy</div>
                  <div className="text-base font-bold text-slate-900 dark:text-white">99.8%</div>
                </div>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
