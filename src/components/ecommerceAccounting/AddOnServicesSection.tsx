import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Wallet, Users, FileCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ContactModal } from '@/components/ui/contact-modal';

const addOns = [
  {
    icon: TrendingUp,
    title: 'FP&A for Ecommerce',
    description: 'Demand planning, pricing, and channel mix analysis',
  },
  {
    icon: Wallet,
    title: 'Cash Flow Planning',
    description: 'Purchase order and inventory cycles management',
  },
  {
    icon: Users,
    title: 'ESOP Accounting',
    description: 'Cap table coordination for growing teams',
  },
  {
    icon: FileCheck,
    title: 'Due Diligence Support',
    description: 'Data rooms and lender-ready packs',
  },
];

const proofPoints = [
  {
    title: 'Payout Matching Accuracy',
    description: 'Improved with channel-level checks',
    metric: '99%+',
  },
  {
    title: 'Faster Month-End Closes',
    description: 'With automated order and fee reconciliations',
    metric: '3x',
  },
  {
    title: 'Clearer SKU Margins',
    description: 'Leading to smarter ad spend decisions',
    metric: '100%',
  },
];

const AddOnServicesSection: React.FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Add-on Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
            Additional Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Add-On Support
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {addOns.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-brand-orange" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Proof of Impact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            Results That Matter
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Proof of Impact
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {proofPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 rounded-3xl p-8 overflow-hidden"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/10 rounded-full blur-2xl" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                  <span className="text-4xl font-black text-white">{point.metric}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{point.title}</h3>
                <p className="text-white/70">{point.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            size="lg"
            className="bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-6 text-lg rounded-xl"
            onClick={() => setIsContactModalOpen(true)}
          >
            Book a Free Ecommerce Finance Audit
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>

      <ContactModal open={isContactModalOpen} onOpenChange={setIsContactModalOpen} />
    </section>
  );
};

export default AddOnServicesSection;
