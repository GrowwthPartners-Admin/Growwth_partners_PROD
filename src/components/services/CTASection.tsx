import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/10 text-center"
        >
          {/* Decorative elements */}
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg shadow-orange-500/30">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4">
            Not Sure Which Service You Need?
          </h2>
          
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Our experts can help you identify the right financial solutions for your business stage and goals. 
            Schedule a free consultation to get personalized recommendations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => window.open('https://calendly.com/jd-growwthpartners/15min?month=2025-11', '_blank')}
              className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-6 text-lg rounded-xl group"
            >
              Speak to an Expert
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-10 pt-8 border-t border-white/10">
            <p className="text-sm text-slate-400 mb-4">Trusted by industry leaders</p>
            <div className="flex flex-wrap justify-center gap-8 opacity-60">
              <div className="text-white font-semibold">Startups</div>
              <div className="text-white font-semibold">SMEs</div>
              <div className="text-white font-semibold">Tech Companies</div>
              <div className="text-white font-semibold">VCs & Investors</div>
            </div>
          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default CTASection;
