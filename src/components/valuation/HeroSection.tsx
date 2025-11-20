import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ContactModal } from "@/components/ui/contact-modal";
import { TrendingUp, BarChart3 } from "lucide-react";

export const HeroSection = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-orange-50 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1 bg-blue-100 text-brand-blue rounded-full text-sm font-semibold mb-6">
              Business Valuation Services in Singapore
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800">
              Do you truly know your company's value?
            </h1>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Knowing your business's worth sets the stage for everything that follows. Avoid the risks of undervaluation or overvaluation, especially when planning fundraising or strategic growth.
            </p>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            At Growwth Partners, we turn valuation challenges into triumphs. As founders, we understand dilution fears and the need for wealth maximization driving accurate business and startup valuations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => setContactModalOpen(true)}
                size="lg"
                className="bg-brand-orange hover:bg-brand-orange/90 text-white font-bold px-8"
              >
                Connect With Our Experts
              </Button>
              <Button
                onClick={() => window.open('https://calendly.com/jd-growwthpartners/15min?month=2025-11', '_blank')}
                size="lg"
                variant="outline"
                className="border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white font-bold px-8"
              >
                Connect For Free
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-blue-100 to-orange-50 rounded-2xl p-8 border border-blue-200 shadow-lg">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <TrendingUp className="w-12 h-12 text-brand-blue mb-4" />
                  <h3 className="font-bold text-xl mb-2 text-gray-900">Accurate Valuation</h3>
                  <p className="text-sm text-gray-600">Data-driven insights for informed decisions</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <BarChart3 className="w-12 h-12 text-brand-blue mb-4" />
                  <h3 className="font-bold text-xl mb-2 text-gray-900">Strategic Growth</h3>
                  <p className="text-sm text-gray-600">Expert guidance for scaling success</p>
                </div>
              </div>
              
              <div className="mt-6 bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-gray-700">Trusted by 500+ Companies</span>
                  <span className="text-2xl font-bold text-brand-orange">⭐⭐⭐⭐⭐</span>
                </div>
                <p className="text-sm text-gray-600">
                  Leading business valuation services across Singapore and Southeast Asia
                </p>
              </div>
            </div>
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
