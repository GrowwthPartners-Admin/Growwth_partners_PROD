import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket, TrendingUp, DollarSign, Activity, PieChart } from "lucide-react";
import { ContactModal } from "@/components/ui/contact-modal";

const HeroSection = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // Animation variants for the floating card elements
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.8 + i * 0.1, duration: 0.5 }
    })
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-orange-900/20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-orange-500/5 to-transparent rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text Content */}
          <div className="max-w-3xl mx-auto lg:mx-0 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 flex justify-center lg:justify-start"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400 text-sm font-medium">
                <Rocket className="w-4 h-4" />
                Finance Leadership Built for Startups
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Startup CFO Services{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">
                in Singapore
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-orange-200/90 mb-6 font-light"
            >
              Financial Leadership Built for Fundraising, Cash Runway Control & Scalable Growth
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-slate-300 mb-8 leading-relaxed mx-auto lg:mx-0 max-w-2xl lg:max-w-none"
            >
              Expert CFO leadership for Singapore startups: Manage your burn, gain financial clarity, and ace your next funding round without a full-time hire.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex justify-center lg:justify-start"
            >
              <Button
                size="lg"
                onClick={() => window.open('https://calendly.com/jd-growwthpartners/15min?month=2025-11', '_blank')}
                className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300 group"
              >
                Speak to a Startup CFO
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 grid grid-cols-3 gap-4 md:gap-8 border-t border-slate-700/50 pt-8"
            >
              {[
                { value: "100+", label: "Startups Supported" },
                { value: "$50M+", label: "Funding Raised" },
                { value: "6mo+", label: "Runway Extended" },
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Visual Element / Card */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block relative"
          >
            {/* Main Glass Card */}
            <div className="relative z-10 bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 shadow-2xl shadow-black/50 transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
              {/* Header of the fake app interface */}
              <div className="flex items-center justify-between mb-8 border-b border-slate-700/50 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="text-xs text-slate-400 font-mono">Financial Overview</div>
              </div>

              {/* Fake Charts / Data Rows */}
              <div className="space-y-4">
                <motion.div custom={0} variants={cardVariants} initial="hidden" animate="visible" className="bg-slate-900/50 p-4 rounded-xl flex items-center justify-between border border-slate-700/30">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-500/20 rounded-lg text-green-400"><TrendingUp size={20} /></div>
                    <div>
                      <div className="text-sm text-slate-400">Revenue Growth</div>
                      <div className="text-white font-bold">+127% YoY</div>
                    </div>
                  </div>
                  <div className="h-8 w-24 bg-green-500/10 rounded overflow-hidden relative">
                    <div className="absolute bottom-0 left-0 w-full h-[70%] bg-green-500/40" />
                  </div>
                </motion.div>

                <motion.div custom={1} variants={cardVariants} initial="hidden" animate="visible" className="bg-slate-900/50 p-4 rounded-xl flex items-center justify-between border border-slate-700/30">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-orange-500/20 rounded-lg text-orange-400"><Activity size={20} /></div>
                    <div>
                      <div className="text-sm text-slate-400">Burn Rate</div>
                      <div className="text-white font-bold">Optimized</div>
                    </div>
                  </div>
                  <div className="h-2 w-24 bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full w-[40%] bg-orange-500" />
                  </div>
                </motion.div>

                <motion.div custom={2} variants={cardVariants} initial="hidden" animate="visible" className="bg-slate-900/50 p-4 rounded-xl flex items-center justify-between border border-slate-700/30">
                   <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400"><DollarSign size={20} /></div>
                    <div>
                      <div className="text-sm text-slate-400">Cash Runway</div>
                      <div className="text-white font-bold">18 Months</div>
                    </div>
                  </div>
                   <div className="text-xs text-green-400 font-medium bg-green-900/20 px-2 py-1 rounded">Safe</div>
                </motion.div>
              </div>

              {/* Decorative floating elements around the card */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 bg-slate-800 p-3 rounded-xl border border-slate-700 shadow-xl"
              >
                <PieChart className="text-orange-400 w-8 h-8" />
              </motion.div>
            </div>
            
            {/* Background Glow behind card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-orange-500/20 blur-[80px] -z-10 rounded-full" />
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
