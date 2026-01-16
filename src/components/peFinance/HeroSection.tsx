
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, PieChart, Target, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {

  return (
    <section className="relative min-h-[90vh] py-20 flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-gray-950 to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-600/5 rounded-full blur-3xl" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(251,146,60,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(251,146,60,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Floating Icons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.6, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-32 right-[15%] hidden lg:block"
      >
        <div className="p-4 bg-orange-500/10 backdrop-blur-sm rounded-2xl border border-orange-500/20">
          <TrendingUp className="w-10 h-10 text-orange-400" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 0.6, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="absolute bottom-40 left-[10%] hidden lg:block"
      >
        <div className="p-4 bg-orange-500/10 backdrop-blur-sm rounded-2xl border border-orange-500/20">
          <PieChart className="w-10 h-10 text-orange-400" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 0.6, x: 0 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="absolute top-1/2 right-[8%] hidden xl:block"
      >
        <div className="p-4 bg-orange-500/10 backdrop-blur-sm rounded-2xl border border-orange-500/20">
          <Target className="w-10 h-10 text-orange-400" />
        </div>
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 backdrop-blur-sm border border-orange-500/20 rounded-full mb-8"
          >
            <Briefcase className="w-4 h-4 text-orange-400" />
            <span className="text-orange-300 text-sm font-medium">Financial Control for High-Performance Portfolios</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Private Equity Finance{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">
              Services in Singapore
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl text-orange-200/90 font-medium mb-6"
          >
            Deal-Ready Financial Control, Portfolio Visibility & Value Creation Discipline
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-slate-300/80 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Growwth Partners' Private Equity Finance services in Singapore provide CFO-led financial governance, 
            deal-ready reporting, and portfolio-level insight—helping PE firms improve diligence outcomes, 
            accelerate value creation, and exit with confidence.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button
              size="lg"
              onClick={() => window.open('https://calendly.com/jd-growwthpartners/15min?month=2025-11', '_blank')}
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-6 text-lg rounded-full shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300 group"
            >
              Speak to a Private Equity Finance Expert
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>

    </section>
  );
};

export default HeroSection;
