import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection: React.FC = () => {

  return (
    <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900/20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
            <span className="text-amber-400 text-sm font-medium">
              SME Financial Leadership
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            SME CFO Services in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
              Singapore
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-amber-200/90 mb-16 font-light">
            Financial Discipline, Predictability & Control for Growing SMEs
          </p>

          <p className="text-lg text-slate-300 mb-10 max-w-5xl mx-auto leading-relaxed">
            Growwth Partners' SME CFO services in Singapore provide experienced
            financial leadership to help small and medium-sized businesses gain
            control over their numbers, improve profitability, and scale with
            confidence—without the cost of a full-time CFO
          </p>

          <Button
            size="lg"
            onClick={() => window.open('https://calendly.com/jd-growwthpartners/15min?month=2025-11', '_blank')}
            className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-8 py-6 text-lg rounded-full shadow-lg shadow-amber-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/30 hover:scale-105"
          >
            Speak to an SME CFO
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
