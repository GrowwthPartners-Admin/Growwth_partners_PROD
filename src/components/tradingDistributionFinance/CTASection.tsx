import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Package, TrendingUp, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactModal } from "@/components/ui/contact-modal";

const CTASection: React.FC = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Icons */}
          <div className="flex justify-center gap-4 mb-8">
            {[Package, TrendingUp, DollarSign].map((Icon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-white/10 flex items-center justify-center"
              >
                <Icon className="w-7 h-7 text-emerald-400" />
              </motion.div>
            ))}
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Optimise Margins and Cash Flow{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              Across Your Trading Operations
            </span>
          </h2>

          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Get expert trading finance support to improve profitability, optimize working capital, and scale your trading business sustainably.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Button
              size="lg"
              onClick={() => setContactModalOpen(true)}
              className="group bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white px-10 py-7 text-lg rounded-xl shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300"
            >
              Schedule a Trading Finance Consultation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          <p className="mt-6 text-sm text-slate-400">
            No commitment required • Free initial consultation
          </p>
        </motion.div>
      </div>

      <ContactModal open={contactModalOpen} onOpenChange={setContactModalOpen} />
    </section>
  );
};

export default CTASection;
