import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket, Shield, TrendingUp } from "lucide-react";
import { ContactModal } from "@/components/ui/contact-modal";

const CTASection = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-orange-900/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl" />
      </div>

      {/* Floating Icons */}
      <motion.div
        className="absolute top-20 right-[20%] hidden lg:block"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="p-3 bg-orange-500/20 rounded-xl backdrop-blur-sm">
          <Rocket className="w-6 h-6 text-orange-400" />
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-[15%] hidden lg:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <div className="p-3 bg-green-500/20 rounded-xl backdrop-blur-sm">
          <TrendingUp className="w-6 h-6 text-green-400" />
        </div>
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Bring Financial Control to Your Startup{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">
                Before Scaling Further
              </span>
            </h2>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
              Get the CFO-level leadership your startup needs to secure funding and achieve sustainable growth.
            </p>

            <Button
              size="lg"
              onClick={() => setIsContactModalOpen(true)}
              className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-10 py-7 text-lg rounded-xl shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300 group"
            >
              Schedule a Startup CFO Consultation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-12 flex flex-wrap justify-center gap-6 text-slate-400"
            >
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-orange-400" />
                <span>Trusted by 100+ Startups</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <span>$50M+ Funding Raised</span>
              </div>
              <div className="flex items-center gap-2">
                <Rocket className="w-5 h-5 text-blue-400" />
                <span>Seed to Series A Experts</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <ContactModal
        open={isContactModalOpen}
        onOpenChange={setIsContactModalOpen}
      />
    </section>
  );
};

export default CTASection;
