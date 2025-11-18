import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { useState } from "react";
import { ContactModal } from "@/components/ui/contact-modal";

interface CtaSectionProps {
  title: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText?: string;
  backgroundColor?: string;
}

export const CtaSection = ({
  title,
  description,
  primaryButtonText,
  secondaryButtonText,
  backgroundColor = "from-brand-blue to-blue-700"
}: CtaSectionProps) => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <>
      <section className={`py-20 bg-gradient-to-r ${backgroundColor} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {title}
            </h2>
            
            <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed">
              {description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => setContactModalOpen(true)}
                className="bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                {primaryButtonText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              {secondaryButtonText && (
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => window.open('https://calendly.com/jd-growwthpartners/15min?month=2025-11', '_blank')}
                  className="bg-white hover:bg-gray-100 text-brand-blue border-2 border-white px-8 py-6 text-lg font-semibold rounded-lg transition-all"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  {secondaryButtonText}
                </Button>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      <ContactModal
        open={contactModalOpen}
        onOpenChange={setContactModalOpen}
      />
    </>
  );
};
