import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Target, Coins, Handshake, HeadphonesIcon } from 'lucide-react';
import { useState } from 'react';
import { ContactModal } from '@/components/ui/contact-modal';

const benefits = [
  {
    icon: Target,
    title: "Accuracy First",
    description: "Through reconciliations and cross-checks"
  },
  {
    icon: Coins,
    title: "SME Focused Savings",
    description: "Within the rules"
  },
  {
    icon: Handshake,
    title: "End-to-End Partner",
    description: "For accounting, VAT and corporate tax UAE"
  },
  {
    icon: HeadphonesIcon,
    title: "Responsive Support",
    description: "From experienced tax professionals"
  }
];

const WhyGrowwthSection = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-brand-orange/20 text-brand-orange rounded-full text-sm font-semibold mb-4">
            The Growwth Difference
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Why{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-400">
              Growwth Partners
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-brand-orange/50 hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-orange to-amber-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-400 text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Button 
            size="lg"
            onClick={() => setIsContactModalOpen(true)}
            className="bg-gradient-to-r from-brand-orange to-amber-600 hover:bg-[#059b8a] text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            Book a Free Tax Consultation
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>

      <ContactModal 
        open={isContactModalOpen} 
        onOpenChange={setIsContactModalOpen} 
      />
    </section>
  );
};

export default WhyGrowwthSection;
