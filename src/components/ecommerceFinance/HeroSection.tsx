import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, DollarSign, BarChart3, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ContactModal } from "@/components/ui/contact-modal";

const HeroSection = () => {

  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-orange-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-orange-600/10 to-amber-600/10 rounded-full blur-3xl" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>




      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 border border-orange-400/30 rounded-full mb-6"
            >
              <TrendingUp className="w-4 h-4 text-orange-400" />
              <span className="text-orange-300 text-sm font-medium">Ecommerce Finance Experts</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Ecommerce Finance Services in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">
                Singapore
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              End-to-End Financial Control for Scalable, Profitable Ecommerce Growth. Real-time profitability visibility, disciplined cash flow management, and CFO-level financial strategy to scale sustainably.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={() => window.open('https://calendly.com/jd-growwthpartners/15min?month=2025-11', '_blank')}
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-8 py-6 text-lg font-bold rounded-3xl transition-all hover:scale-105 shadow-lg shadow-orange-500/25"
              >
                Speak to an Ecommerce Finance Expert
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Main Card */}
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-orange-500/20 rounded-xl">
                    <DollarSign className="w-8 h-8 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">Growwth Partners Profitability Dashboard</h3>
                    <p className="text-gray-300 text-sm">Real-time margin tracking</p>
                  </div>
                </div>

                {/* Mock Chart Bars */}
                <div className="space-y-4">
                  {[
                    { name: "Product A", margin: 85, color: "bg-orange-400" },
                    { name: "Product B", margin: 72, color: "bg-amber-400" },
                    { name: "Product C", margin: 58, color: "bg-yellow-400" },
                    { name: "Product D", margin: 45, color: "bg-orange-300" },
                  ].map((item, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-300">{item.name}</span>
                        <span className="text-white font-medium">{item.margin}%</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${item.margin}%` }}
                          transition={{ duration: 1, delay: 0.5 + idx * 0.1 }}
                          className={`h-full ${item.color} rounded-full`}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom Stats */}
                <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-white/10">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-400">$2.4M</div>
                    <div className="text-xs text-gray-400">Monthly Revenue</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-amber-400">32%</div>
                    <div className="text-xs text-gray-400">Avg. Margin</div>
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
