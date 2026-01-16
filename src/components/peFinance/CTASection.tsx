import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Shield, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactModal } from "@/components/ui/contact-modal";

const CTASection = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Icon Row */}
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="p-3 bg-emerald-500/20 rounded-xl">
                <Shield className="w-8 h-8 text-emerald-400" />
              </div>
              <div className="p-3 bg-teal-500/20 rounded-xl">
                <TrendingUp className="w-8 h-8 text-teal-400" />
              </div>
              <div className="p-3 bg-emerald-500/20 rounded-xl">
                <Calendar className="w-8 h-8 text-emerald-400" />
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Strengthen Portfolio Performance and{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                Exit with Confidence
              </span>
            </h2>

            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
              Get CFO-led financial governance, deal-ready reporting, and portfolio-level insight for your PE fund.
            </p>

            <Button
              size="lg"
              onClick={() => setContactModalOpen(true)}
              className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-10 py-7 text-lg rounded-full shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300 group"
            >
              Schedule a Private Equity Finance Consultation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            {/* Trust Indicators */}
            <div className="mt-12 pt-10 border-t border-white/10">
              <div className="flex flex-wrap items-center justify-center gap-8 text-slate-400">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                  <span>50+ PE Clients</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-teal-400 rounded-full" />
                  <span>S$2B+ AUM Supported</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                  <span>95% Exit Success Rate</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <ContactModal open={contactModalOpen} onOpenChange={setContactModalOpen} />
    </section>
  );
};

export default CTASection;
