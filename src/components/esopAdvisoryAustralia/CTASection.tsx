import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";
import { useState } from "react";
import { ContactModal } from "@/components/ui/contact-modal";

export const CTASection = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-br from-teal-600 to-teal-700 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-white/5 rounded-full"></div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <BookOpen className="w-5 h-5 text-teal-200" />
            <span className="text-teal-100 font-medium">Expert Insights</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Insights on Equity, Growth Finance, and Strategic Expansion
          </h2>
          <p className="text-xl text-teal-100 mb-10 max-w-2xl mx-auto">
            Curated reading tailored to founders and finance leaders in the region.
          </p>

          <Button
            onClick={() => setContactModalOpen(true)}
            size="lg"
            className="bg-white text-teal-700 hover:bg-teal-50 font-semibold text-lg px-10 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            Enquire Now for ESOP Advisory in Australia
            <ArrowRight className="ml-2 h-5 w-5" />
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
