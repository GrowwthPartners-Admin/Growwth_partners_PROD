import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, TrendingUp, Target } from "lucide-react";
import { useState } from "react";
import { ContactModal } from "@/components/ui/contact-modal";

export const HeroSection = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <section className="relative py-16 lg:py-24 bg-gradient-to-br from-brand-green/5 via-background to-brand-blue/5 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-green/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-green/10 rounded-full">
              <TrendingUp className="w-4 h-4 text-brand-green" />
              <span className="text-sm font-medium text-brand-green">AI-Powered Forecasting</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Forecast Smarter with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-brand-blue">
                AI
              </span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Ryzup.ai brings AI financial forecasting in Australia straight into your finance stack. Generate predictive models in minutes, run scenario simulations, and see how hiring, pricing, and spend decisions change cash, profit, and runway.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-brand-green hover:bg-brand-green/90 text-white gap-2 w-full sm:w-auto"
                onClick={() => setContactModalOpen(true)}
              >
                Start a Free Forecasting Consultation
                <ArrowRight className="w-4 h-4" />
              </Button>
              <a href="https://ryzup.ai" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto border-brand-blue text-brand-blue hover:bg-brand-blue/5">
                  <Play className="w-4 h-4" />
                  See a Sample Forecast Pack
                </Button>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-brand-green/20 to-brand-blue/20 p-8">
              <div className="bg-background/90 rounded-xl p-6 space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="space-y-3">
                  <div className="h-4 bg-brand-green/20 rounded w-3/4" />
                  <div className="h-4 bg-brand-blue/20 rounded w-1/2" />
                  <div className="h-8 bg-gradient-to-r from-brand-green/30 to-brand-blue/30 rounded mt-4" />
                  <div className="grid grid-cols-3 gap-2 mt-4">
                    <div className="h-16 bg-brand-green/20 rounded" />
                    <div className="h-16 bg-brand-blue/20 rounded" />
                    <div className="h-16 bg-brand-orange/20 rounded" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-4 -left-4 bg-background rounded-xl shadow-lg p-4 flex items-center gap-3 border"
            >
              <div className="w-10 h-10 bg-brand-green/20 rounded-full flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-brand-green" />
              </div>
              <div>
                <p className="text-sm font-semibold">Real-Time</p>
                <p className="text-xs text-muted-foreground">Cash Runway Views</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute -top-4 -right-4 bg-background rounded-xl shadow-lg p-4 flex items-center gap-3 border"
            >
              <div className="w-10 h-10 bg-brand-blue/20 rounded-full flex items-center justify-center">
                <Target className="w-5 h-5 text-brand-blue" />
              </div>
              <div>
                <p className="text-sm font-semibold">Predictive</p>
                <p className="text-xs text-muted-foreground">Finance Models</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <ContactModal 
        open={contactModalOpen} 
        onOpenChange={setContactModalOpen} 
      />
    </section>
  );
};
