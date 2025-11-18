import { Button } from "@/components/ui/button";
import { FileText, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { ContactModal } from "@/components/ui/contact-modal";

export const HeroSection = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <>
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-orange-50 py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-4 py-2 bg-blue-100 text-brand-blue rounded-full text-sm font-semibold mb-6">
                Corporate Tax Filing Singapore
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Simplify Corporate Tax Filing
              </h1>
              
              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                Get corporate taxes filed correctly, on time, and in line with IRAS requirements. 
                Growwth Partners provides end to end corporate tax filing in Singapore so your company 
                stays compliant, avoids penalties, and maximises every eligible saving.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={() => setContactModalOpen(true)}
                  className="bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
                >
                  <FileText className="mr-2 h-5 w-5" />
                  Book a Free Tax Consultation
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => window.open('https://calendly.com/jd-growwthpartners/15min?month=2025-11', '_blank')}
                  className="border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white px-8 py-6 text-lg font-semibold rounded-lg transition-all"
                >
                  <Users className="mr-2 h-5 w-5" />
                  Speak to a Tax Advisor
                </Button>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80"
                  alt="Corporate tax filing professionals working"
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
              </div>
              
              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <FileText className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">100%</p>
                    <p className="text-sm text-gray-600">IRAS Compliant</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <ContactModal
        open={contactModalOpen}
        onOpenChange={setContactModalOpen}
      />
    </>
  );
};
