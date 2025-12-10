import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Phone } from "lucide-react";
import { useState } from "react";
import { ContactModal } from "@/components/ui/contact-modal";

export const CTASection = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-teal-900 via-emerald-900 to-cyan-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Make Finance Workflows{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-300">
              Faster and Smarter
            </span>
          </h2>
          <p className="text-lg mb-8 text-teal-100/90">
            Bring AI finance automation in Australia into daily operations. Keep the tools you trust, add AI where it matters and turn finance into a real-time decision engine.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-teal-700 hover:bg-teal-50 px-8 py-6 text-lg rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 font-semibold"
              onClick={() =>
                window.open(
                  "https://calendly.com/jd-growwthpartners/15min?month=2025-11",
                  "_blank"
                )}
            >
              <Phone className="w-4 h-4" />
              Talk to Ryzup.ai About Your Finance Workflow
            </Button>
              <Button
                size="lg"
                onClick={() => setContactModalOpen(true)}
                variant="outline"
                className="border-2 border-white/30 text-white bg-transparent px-8 py-6 text-lg rounded-xl backdrop-blur-sm transition-all duration-300 gap-4"

              >
                Get Your AI Automation Plan
                <Calendar className="w-4 h-4" />
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
