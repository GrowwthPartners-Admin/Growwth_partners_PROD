import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { ContactModal } from "@/components/ui/contact-modal";
import { motion } from "framer-motion";

const CTASection = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-br from-brand-blue to-blue-700 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Make Compliance Stronger and Risk Lower
          </h2>
          
          <p className="text-xl text-amber-100 mb-10">
            Adopt AI compliance in the UAE and continuous AI risk monitoring with tools your finance team will actually use. 
            Monitor, prevent, and prove control without adding manual workload.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => setContactModalOpen(true)}
              className="bg-white text-blue-600 hover:bg-amber-50 px-8 py-6 text-lg rounded-xl shadow-lg font-bold hover:shadow-xl transition-all duration-300 group hover:scale-105"
            >
              Book a Risk & Compliance Demo
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() =>
                window.open(
                  "https://calendly.com/jd-growwthpartners/15min?month=2025-11",
                  "_blank"
                )
              }
              className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-xl font-bold transition-all duration-300 group hover:scale-105"
            >
              <Play className="mr-2 w-5 h-5" />
              Talk to a Ryzup.ai Specialist
            </Button>
          </div>
        </motion.div>
      </div>

      <ContactModal 
        open={contactModalOpen} 
        onOpenChange={setContactModalOpen}
      />
    </section>
  );
};

export default CTASection;
