import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ContactModal } from "@/components/ui/contact-modal";

const CTASection = () => {

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-orange-500 via-orange-500 to-amber-500 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Scale Your Ecommerce Business with{" "}
            <span className="text-orange-100">Financial Control</span> and
            Confidence
          </h2>

          <p className="text-lg text-gray-100 mb-10 max-w-2xl mx-auto">
            Get the financial clarity and strategic support you need to grow
            profitably.
          </p>

          <Button
            onClick={() => window.open('https://calendly.com/jd-growwthpartners/15min?month=2025-11', '_blank')}
            size="lg"
            className="bg-white text-orange-700 hover:bg-gray-100 px-8 py-6 text-lg rounded-3xl font-semibold shadow-xl shadow-orange-900/20 transition-all hover:scale-105"
          >
            Schedule an Ecommerce Finance Consultation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>

    </section>
  );
};

export default CTASection;
