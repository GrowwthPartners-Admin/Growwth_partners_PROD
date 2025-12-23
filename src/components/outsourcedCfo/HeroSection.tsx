import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, TrendingUp, Shield } from "lucide-react";
import { ContactModal } from "@/components/ui/contact-modal";

const HeroSection = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-orange-900/20">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-orange-500/5 to-transparent rounded-full" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full">
              <Building2 className="w-4 h-4 text-orange-400" />
              <span className="text-orange-300 text-sm font-medium">Complete CFO Support Without Hiring Internally</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Outsourced CFO Services in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">
                Singapore
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-orange-200/90 font-light">
              End-to-End CFO Leadership Without Internal Hiring or Overhead
            </p>

            <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
              As businesses scale, finance becomes too critical to manage piecemeal. Strategy, forecasting, reporting, compliance, and cash flow must work together under strong leadership. Yet hiring a full-time CFO and building an internal finance team is costly, time-consuming, and often unnecessary.
            </p>

            <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
              Growwth Partners' Outsourced CFO services in Singapore provide complete CFO ownership—strategy, execution, governance, and oversight—delivered by experienced CFOs and supported by a dedicated finance team and AI-enabled workflows.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <Button 
                size="lg" 
                onClick={() => setIsContactModalOpen(true)}
                className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-8 py-6 text-lg rounded-full shadow-lg shadow-orange-500/25 group"
              >
                Discuss Outsourced CFO Support
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Main visual card */}
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center">
                      <Building2 className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Full CFO Ownership</h3>
                      <p className="text-slate-400">Strategy to Execution</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/30">
                      <TrendingUp className="w-8 h-8 text-orange-400 mb-2" />
                      <p className="text-2xl font-bold text-white">25+</p>
                      <p className="text-sm text-slate-400">Hours Saved/Month</p>
                    </div>
                    <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/30">
                      <Shield className="w-8 h-8 text-amber-400 mb-2" />
                      <p className="text-2xl font-bold text-white">100%</p>
                      <p className="text-sm text-slate-400">Compliance</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {["Financial Strategy & Planning", "Cash Flow Management", "Board & Investor Reporting"].map((item, index) => (
                      <div key={index} className="flex items-center gap-3 text-slate-300">
                        <div className="w-2 h-2 bg-orange-400 rounded-full" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl p-4 shadow-xl"
              >
                <p className="text-white font-bold text-lg">End-to-End</p>
                <p className="text-orange-100 text-sm">Finance Leadership</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <ContactModal 
        open={isContactModalOpen} 
        onOpenChange={setIsContactModalOpen} 
      />
    </section>
  );
};

export default HeroSection;
