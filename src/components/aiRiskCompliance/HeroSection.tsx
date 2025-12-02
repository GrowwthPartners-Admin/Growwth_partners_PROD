import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Shield, AlertTriangle, Eye } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-red-950">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(239,68,68,0.15),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_rgba(251,146,60,0.1),_transparent_50%)]" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="container-custom relative z-10 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 mb-6">
              <Shield className="w-4 h-4 text-red-400" />
              <span className="text-sm font-medium text-red-200">AI-Powered Risk & Compliance</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Detect Risks{" "}
              <span className="bg-gradient-to-r from-red-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">
                Before They Occur
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed max-w-xl">
              Ryzup helps finance teams move from after-the-fact clean-up to real-time control. Combine AI-powered spreadsheet checks, anomaly detection and privacy-safe workflows to reduce errors, spot suspicious activity faster, and stay compliant.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-semibold px-8 py-6 text-lg shadow-lg shadow-red-500/25"
                onClick={() => window.open("https://calendly.com/jd-growwthpartners/15min?month=2025-11", "_blank")}
              >
                Book a Demo
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-500 text-slate-200 hover:bg-slate-800/50 px-8 py-6 text-lg"
                onClick={() => window.open("https://calendly.com/jd-growwthpartners/15min?month=2025-11", "_blank")}
              >
                Talk to a Risk & Compliance Expert
              </Button>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Main visual card */}
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-3xl border border-slate-700/50 p-8 shadow-2xl">
                {/* Alert indicators */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm text-slate-400">Real-time Monitoring Active</span>
                  </div>
                  <Eye className="w-5 h-5 text-slate-500" />
                </div>

                {/* Risk metrics */}
                <div className="space-y-4 mb-6">
                  <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/30">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-slate-400 text-sm">Anomalies Detected</span>
                      <span className="text-red-400 font-semibold">3 flagged</span>
                    </div>
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div className="h-full w-1/4 bg-gradient-to-r from-red-500 to-orange-500 rounded-full" />
                    </div>
                  </div>

                  <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/30">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-slate-400 text-sm">Compliance Score</span>
                      <span className="text-green-400 font-semibold">94%</span>
                    </div>
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div className="h-full w-[94%] bg-gradient-to-r from-green-500 to-emerald-400 rounded-full" />
                    </div>
                  </div>

                  <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/30">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-slate-400 text-sm">Data Protected</span>
                      <span className="text-sky-400 font-semibold">100%</span>
                    </div>
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div className="h-full w-full bg-gradient-to-r from-sky-500 to-blue-400 rounded-full" />
                    </div>
                  </div>
                </div>

                {/* Alert item */}
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-red-200 font-medium text-sm">Unusual transaction pattern detected</p>
                    <p className="text-red-300/70 text-xs mt-1">GL Account 4500 - Review recommended</p>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-sky-500/20 to-blue-500/20 rounded-full blur-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
