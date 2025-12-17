import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, Package, Receipt, TrendingUp, Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ContactModal } from '@/components/ui/contact-modal';

const services = [
  {
    icon: RefreshCw,
    title: 'Multi-Channel Sales Reconciliation',
    description: 'Tie orders, payouts, fees, and refunds back to the ledger. Platforms covered include Shopify, Amazon, WooCommerce, Etsy, eBay, and custom carts. Payment gateways supported include Stripe, PayPal, Razorpay, PayU, and COD workflows.',
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-50 to-cyan-50',
  },
  {
    icon: Package,
    title: 'Inventory, COGS, and Landed Cost',
    description: 'Track SKU-level movements, landed cost, freight, and duty. Handle bundles, kits, and BOMs. Keep COGS aligned to reality so margins are trusted.',
    gradient: 'from-emerald-500 to-green-500',
    bgGradient: 'from-emerald-50 to-green-50',
  },
  {
    icon: Receipt,
    title: 'Ecommerce Tax Management',
    description: 'Register, file, and reconcile sales tax, VAT, or GST as required. Align marketplace reports with returns. Maintain documentation for reviews and audits.',
    gradient: 'from-purple-500 to-violet-500',
    bgGradient: 'from-purple-50 to-violet-50',
  },
  {
    icon: TrendingUp,
    title: 'Performance and Profitability Reporting',
    description: 'MRR for subscriptions, contribution margin, ROAS-aware P&L views, cohort and repeat rate tracking. See product and channel winners and take action sooner.',
    gradient: 'from-orange-500 to-amber-500',
    bgGradient: 'from-orange-50 to-amber-50',
  },
  {
    icon: Calendar,
    title: 'Month-End Close for Ecommerce',
    description: 'Close calendars, checklist ownership, and review steps fitted to busy trading cycles. Fewer surprises at month end, faster reporting for leadership.',
    gradient: 'from-pink-500 to-rose-500',
    bgGradient: 'from-pink-50 to-rose-50',
  },
];

const WhatYouGetSection: React.FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What You Get
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive ecommerce accounting services designed for online business success
          </p>
        </motion.div>

        <div className="space-y-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${service.bgGradient} p-8 md:p-10`}
            >
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center flex-shrink-0`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">{service.description}</p>
                </div>
              </div>
              
              {/* Decorative element */}
              <div className={`absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-gradient-to-br ${service.gradient} opacity-10`} />
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
            Request a Systems and Tax Check
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>

      <ContactModal open={isContactModalOpen} onOpenChange={setIsContactModalOpen} />
    </section>
  );
};

export default WhatYouGetSection;
