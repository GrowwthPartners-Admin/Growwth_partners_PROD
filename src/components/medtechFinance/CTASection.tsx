import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, HeartPulse, Shield, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { ContactModal } from "@/components/ui/contact-modal";

const CTASection = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-brand-orange/20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl mb-8">
            <HeartPulse className="w-10 h-10 text-white" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Build Compliant, Investor-Ready Financials for Your Healthcare Business
          </h2>

          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Get expert healthcare finance leadership to support your compliance, growth, and funding goals.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 text-slate-300">
              <CheckCircle2 className="w-5 h-5 text-orange-400" />
              <span>Regulatory Compliance</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <CheckCircle2 className="w-5 h-5 text-orange-400" />
              <span>Cost Visibility</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <CheckCircle2 className="w-5 h-5 text-orange-400" />
              <span>Investor-Ready</span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-7 text-lg rounded-xl shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300"
              onClick={() => setContactModalOpen(true)}
            >
              Schedule a Healthcare Finance Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
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
