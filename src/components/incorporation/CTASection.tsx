import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { ContactModal } from "@/components/ui/contact-modal";

export const CTASection = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-br from-orange-600 via-amber-600 to-orange-700 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Register Your Company in Singapore?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Get expert guidance, stay compliant, and focus on building your business. 
            Start your incorporation journey today.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {["Fast Processing", "Full Compliance", "Expert Support"].map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-white">
                <CheckCircle className="w-5 h-5 text-orange-200" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => setContactModalOpen(true)}
              size="lg"
              className="bg-white text-orange-700 hover:bg-gray-100 px-8 py-6 text-lg"
            >
              Book a Free Incorporation Consult
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              onClick={() => setContactModalOpen(true)}
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg"
            >
              Get Your Requirements Checklist
            </Button>
          </div>
        </motion.div>
      </div>

      <ContactModal open={contactModalOpen} onOpenChange={setContactModalOpen} />
    </section>
  );
};

export default CTASection;