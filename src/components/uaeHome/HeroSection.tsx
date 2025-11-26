import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { OptimizedImage } from "@/components/ui/optimized-image";
import heroImage from "@/assets/uae-business.webp";
import { ContactModal } from "@/components/ui/contact-modal";
import { useState } from "react";

export const HeroSection = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const handlePrimaryCTA = () => {
    setContactModalOpen(true);
  };

  const handleSecondaryCTA = () => {
    window.open("https://calendly.com/jd-growwthpartners/15min?month=2025-11", "_blank");
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-amber-50 py-16 md:py-24">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold"
            >
              <Sparkles className="w-4 h-4" />
              UAE Finance Excellence
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight">
              Finance experts with AI that your team will actually use
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              Work with a senior finance team that blends real-world CFO know-how with practical AI. Growwth Partners helps UAE businesses get cleaner numbers, faster reporting, and confident decisions across accounting, tax, payroll, and strategic finance. Powered by Ryzup.ai for forecasting, reconciliations, error checks, and dashboards.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handlePrimaryCTA}
                size="lg"
                className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8"
              >
                Book a Free Strategy Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                onClick={handleSecondaryCTA}
                size="lg"
                variant="outline"
                className="border-orange-600 text-orange-600 hover:bg-orange-50 font-semibold px-8"
              >
                Speak to a CFO Expert
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <OptimizedImage
                src={heroImage}
                alt="UAE Business Finance Excellence"
                className="w-full h-auto"
              />
              <div className="absolute top-4 right-4 bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                AI-Powered Finance
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-orange-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <div className="text-sm text-gray-600">Near-Zero Errors</div>
                  <div className="text-lg font-bold text-gray-900">AI-Verified</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -top-6 -right-6 bg-white rounded-xl shadow-xl p-4 border border-orange-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <ArrowRight className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <div className="text-sm text-gray-600">Decision Speed</div>
                  <div className="text-lg font-bold text-gray-900">3x Faster</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <ContactModal
        open={contactModalOpen}
        onOpenChange={setContactModalOpen}
      />
    </section>
  );
};
