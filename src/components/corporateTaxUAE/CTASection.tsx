import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import { ContactModal } from '@/components/ui/contact-modal';

const CTASection = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-br from-brand-orange via-amber-500 to-yellow-500 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Make corporate tax one less thing to worry about.
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Choose accurate, on-time corporate tax filing in the UAE with proactive planning and clear year-end reporting.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => setIsContactModalOpen(true)}
              className="bg-gradient-to-r from-brand-orange to-amber-600 text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all "
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book a Free Tax Consultation
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => window.open('https://calendly.com/jd-growwthpartners/15min?month=2025-11', '_blank')}
              className="border-2 border-white text-black backdrop-blur-sm hover:bg-transparent"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Speak to a Corporate Tax Specialist
            </Button>
          </div>
        </motion.div>
      </div>

      <ContactModal 
        open={isContactModalOpen} 
        onOpenChange={setIsContactModalOpen} 
      />
    </section>
  );
};

export default CTASection;
