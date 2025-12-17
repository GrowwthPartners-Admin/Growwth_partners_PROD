import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, CreditCard, Boxes, Calculator, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ContactModal } from '@/components/ui/contact-modal';

const platforms = [
  {
    icon: ShoppingCart,
    title: 'Carts and Marketplaces',
    items: ['Shopify', 'Amazon', 'WooCommerce', 'Etsy', 'eBay', 'Custom builds'],
    color: 'bg-gradient-to-br from-orange-500 to-amber-500',
    lightBg: 'bg-orange-50',
  },
  {
    icon: CreditCard,
    title: 'Gateways and Payouts',
    items: ['Stripe', 'PayPal', 'Razorpay', 'PayU', 'Cashfree', 'COD aggregation'],
    color: 'bg-gradient-to-br from-blue-500 to-cyan-500',
    lightBg: 'bg-blue-50',
  },
  {
    icon: Boxes,
    title: 'Ops and Inventory',
    items: ['Shopify Inventory', 'Unleashed', 'Dear/Cin7', 'Zoho', 'WMS integrations'],
    color: 'bg-gradient-to-br from-emerald-500 to-green-500',
    lightBg: 'bg-emerald-50',
  },
  {
    icon: Calculator,
    title: 'Accounting',
    items: ['Xero', 'QuickBooks Online', 'NetSuite coordination'],
    color: 'bg-gradient-to-br from-purple-500 to-violet-500',
    lightBg: 'bg-purple-50',
  },
];

const PlatformStackSection: React.FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            Integrations
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Platform and App Stack Support
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We integrate seamlessly with your existing ecommerce ecosystem
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
            >
              <div className={`${platform.color} p-6`}>
                <platform.icon className="w-10 h-10 text-white mb-3" />
                <h3 className="text-xl font-bold text-white">{platform.title}</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {platform.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-gray-700">
                      <span className={`w-2 h-2 rounded-full ${platform.color}`} />
                      {item}
                    </li>
                  ))}
                </ul>
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
            Get a Quick Stack Review
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>

      <ContactModal open={isContactModalOpen} onOpenChange={setIsContactModalOpen} />
    </section>
  );
};

export default PlatformStackSection;
