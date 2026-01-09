import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Clock, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute top-20 left-20 w-32 h-32 bg-growwth-primary/20 rounded-full blur-2xl" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-amber-500/20 rounded-full blur-2xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Need Immediate CFO Leadership to{" "}
            <span className="text-transparent bg-clip-text bg-white">
              Navigate Change?
            </span>
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-100 mb-10 max-w-2xl mx-auto">
            Don't let leadership gaps threaten your business stability. 
            Get experienced Interim CFO support deployed within days.
          </p>

          {/* CTA Buttons */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              className="bg-white text-orange-600 hover:bg-slate-100 px-10 py-7 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-semibold"
              onClick={() => window.open('https://calendly.com/jd-growwthpartners/15min?month=2025-11', '_blank')}
            >
              Secure Intrim CFO Support Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CTASection;
