import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="relative py-16 lg:py-24 bg-gradient-to-br from-brand-blue/5 via-background to-brand-orange/5 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-orange/10 rounded-full">
              <Sparkles className="w-4 h-4 text-brand-orange" />
              <span className="text-sm font-medium text-brand-orange">AI-Powered Finance Automation</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Transform Finance Operations with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-orange">
                AI
              </span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Ryzup.ai turns Google Sheets and Xero into an AI-powered finance hub. Automate reporting, error checks, reconciliations and forecasting so your team makes decisions, not spreadsheets.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="https://calendly.com/jd-growwthpartners/15min?month=2025-11" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-brand-orange hover:bg-brand-orange/90 text-white gap-2 w-full sm:w-auto">
                  Start with a Free Strategy Call
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
              <a href="https://ryzup.ai" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto border-brand-blue text-brand-blue hover:bg-brand-blue/5">
                  <Play className="w-4 h-4" />
                  See Ryzup.ai in Action
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
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
                alt="AI Finance Dashboard"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            {/* Floating badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-brand-green/20 rounded-full flex items-center justify-center">
                <Zap className="w-5 h-5 text-brand-green" />
              </div>
              <div>
                <p className="text-sm font-semibold">80% Faster</p>
                <p className="text-xs text-muted-foreground">Report Generation</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-brand-blue/20 rounded-full flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-brand-blue" />
              </div>
              <div>
                <p className="text-sm font-semibold">AI-Powered</p>
                <p className="text-xs text-muted-foreground">Smart Automation</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
