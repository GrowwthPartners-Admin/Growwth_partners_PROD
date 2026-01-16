import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Gamepad2 } from "lucide-react";
import { useState } from "react";
import { ContactModal } from "@/components/ui/contact-modal";

const CTASection = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-fuchsia-500/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-fuchsia-500 mb-8">
            <Gamepad2 className="w-10 h-10 text-white" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Build Financial Control and Monetisation Clarity for Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400">
              Gaming Business
            </span>
          </h2>

          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Get CFO-led financial leadership designed specifically for the gaming industry. 
            Schedule a consultation to discuss your needs.
          </p>

          <Button
            size="lg"
            onClick={() => setContactModalOpen(true)}
            className="bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 text-white px-10 py-7 text-lg rounded-xl shadow-lg shadow-purple-500/25 group"
          >
            Schedule an Esports & Gaming Finance Consultation
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
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
