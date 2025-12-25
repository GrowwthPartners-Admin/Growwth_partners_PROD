import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ContactModal } from '@/components/ui/contact-modal';

const CTASection: React.FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-br from-amber-500 to-orange-600">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Bring Financial Discipline and Clarity to Your SME
          </h2>

          <Button 
            size="lg"
            onClick={() => setIsContactModalOpen(true)}
            className="bg-white text-amber-600 hover:bg-slate-100 px-8 py-6 text-lg rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            Schedule a Free SME CFO Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
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
