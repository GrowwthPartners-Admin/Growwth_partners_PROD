import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";


const CTASection = () => {


  return (
    <section className="py-20 md:py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-orange-900/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl" />
      </div>


      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Bring Financial Discipline and Clarity to{" "}
              <span className="text-transparent bg-clip-text text-6xl font-bold bg-gradient-to-r from-orange-400 to-amber-400">
                 Your SME
              </span>
            </h2>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
              Get the CFO-level leadership your startup needs to secure funding and achieve sustainable growth.
            </p>

            <Button
              size="lg"
              onClick={() => window.open('https://calendly.com/jd-growwthpartners/15min?month=2025-11', '_blank')}
              className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-10 py-7 text-lg rounded-xl shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300 group hover:scale-105"
            >
              Schedule a Startup CFO Consultation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
