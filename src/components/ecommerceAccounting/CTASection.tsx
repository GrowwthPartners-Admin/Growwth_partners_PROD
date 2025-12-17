import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShoppingCart, TrendingUp, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactModal } from "@/components/ui/contact-modal";

const CTASection: React.FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <section className="py-24 bg-gradient-to-br from-brand-orange via-orange-500 to-amber-500 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
      <motion.div
        className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-80 h-80 bg-white/10 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icons row */}
        

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Turn Daily Sales Into Reliable Profits
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/90 mb-10 max-w-3xl mx-auto"
          >
            Choose ecommerce accounting that scales with your brand and keeps
            taxes and COGS in control. Get investor-ready numbers with reliable
            ecommerce bookkeeping services.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-white text-brand-orange hover:bg-white/90 px-8 py-6 text-lg rounded-xl shadow-lg font-semibold"
              onClick={() =>
                window.open(
                  "https://calendly.com/jd-growwthpartners/15min?month=2025-11",
                  "_blank"
                )
              }
            >
              Book a Free Ecommerce Finance Audit
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white bg-transparent hover:bg-transparent px-8 py-6 text-lg shadow-md rounded-xl backdrop-blur"
              onClick={() => setIsContactModalOpen(true)}
            >
              Request a Systems and Tax Check
            </Button>
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

export default CTASection;
