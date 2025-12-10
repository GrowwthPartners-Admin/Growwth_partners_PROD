import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Bot } from "lucide-react";
import { ContactModal } from "@/components/ui/contact-modal";

const CTASection = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-900 via-emerald-900 to-cyan-900" />
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl" />
      
      {/* Floating icons */}
      <motion.div
        className="absolute top-20 right-20 hidden lg:block"
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center shadow-lg">
          <Bot className="w-7 h-7 text-white" />
        </div>
      </motion.div>
      
      <motion.div
        className="absolute bottom-20 left-20 hidden lg:block"
        animate={{ y: [0, 12, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-lg">
          <Zap className="w-6 h-6 text-white" />
        </div>
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Make Finance Workflows{" "}
            <span className="bg-gradient-to-r from-teal-300 to-cyan-300 bg-clip-text text-transparent">
              Faster and Smarter
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-teal-100/90 mb-10 leading-relaxed">
            Bring AI finance automation in Australia into daily operations. Keep the tools you trust, 
            add AI where it matters and turn finance into a real-time decision engine.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => setContactModalOpen(true)}
              className="bg-white text-teal-700 hover:bg-teal-50 px-8 py-6 text-lg rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 font-semibold"
            >
              Talk to Ryzup.ai About Your Finance Workflow
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => setContactModalOpen(true)}
              className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-xl backdrop-blur-sm transition-all duration-300"
            >
              Get Your AI Automation Plan
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
