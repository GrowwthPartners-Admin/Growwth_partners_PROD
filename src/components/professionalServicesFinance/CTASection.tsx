import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase, TrendingUp, Receipt } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactModal } from "@/components/ui/contact-modal";

const CTASection: React.FC = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Icon row */}
            <div className="flex justify-center gap-4 mb-8">
              {[Briefcase, TrendingUp, Receipt].map((Icon, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="w-14 h-14 bg-white/10 backdrop-blur rounded-xl flex items-center justify-center border border-white/20"
                >
                  <Icon className="w-7 h-7 text-white" />
                </motion.div>
              ))}
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Eliminate Revenue Leakage and Improve Service Profitability
            </h2>

            <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
              Get CFO-led financial control that helps your professional services firm maximise margins and scale with confidence.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button
                size="lg"
                onClick={() => setContactModalOpen(true)}
                className="group bg-white text-indigo-600 hover:bg-indigo-50 px-10 py-7 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Schedule a Professional Services Finance Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <ContactModal open={contactModalOpen} onOpenChange={setContactModalOpen} />
    </section>
  );
};

export default CTASection;
