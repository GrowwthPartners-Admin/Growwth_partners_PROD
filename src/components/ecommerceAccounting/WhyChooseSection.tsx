import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Package, BarChart3, Receipt, Globe, FileText, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ContactModal } from '@/components/ui/contact-modal';

const reasons = [
  {
    icon: ShoppingBag,
    title: 'Shopify and Amazon Native',
    description: 'Reconciliations that match payouts, fees, refunds, and chargebacks accurately.',
    color: 'from-orange-500 to-amber-500',
  },
  {
    icon: Package,
    title: 'Inventory and COGS Accuracy',
    description: 'Landed cost, bundles, and kits handled correctly for true margins.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: BarChart3,
    title: 'Real Margin Visibility',
    description: 'See margins by product, channel, country, and campaign clearly.',
    color: 'from-emerald-500 to-green-500',
  },
  {
    icon: Receipt,
    title: 'Tax Compliance',
    description: 'Sales tax, VAT, and GST compliance across regions with clean audit trails.',
    color: 'from-purple-500 to-violet-500',
  },
  {
    icon: Globe,
    title: 'Scalable Workflows',
    description: 'Multi-store, multi-currency, and multi-entity growth supported.',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: FileText,
    title: 'Founder-Friendly Reporting',
    description: 'Turn daily sales into monthly insights and board-ready views.',
    color: 'from-indigo-500 to-blue-500',
  },
];

const WhyChooseSection: React.FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-brand-orange/10 text-brand-orange rounded-full text-sm font-semibold mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Online Brands Choose{' '}
            <span className="text-brand-orange">Growwth Partners</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${reason.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <reason.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
              <p className="text-gray-600 leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>

      </div>

      <ContactModal open={isContactModalOpen} onOpenChange={setIsContactModalOpen} />
    </section>
  );
};

export default WhyChooseSection;
