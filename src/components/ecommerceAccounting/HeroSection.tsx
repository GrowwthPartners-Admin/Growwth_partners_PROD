import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, TrendingUp, Package, Calculator, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ContactModal } from '@/components/ui/contact-modal';

const HeroSection: React.FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-brand-orange/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-3xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
            >
              <ShoppingCart className="w-4 h-4 text-brand-orange" />
              <span className="text-white/90 text-sm font-medium">Ecommerce Finance Experts</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Accounting Built for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-400">
                Ecommerce Growth
              </span>
            </h1>

            <p className="text-lg text-white/80 mb-8 leading-relaxed max-w-xl">
              Growwth Partners delivers specialist ecommerce accounting for DTC brands and marketplace sellers. From accurate channel reconciliation to inventory, COGS, and tax, the team sets up reliable ecommerce bookkeeping services that scale across Shopify, Amazon, WooCommerce, and more.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                size="lg"
                className="bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-brand-orange/25"
                onClick={() => setIsContactModalOpen(true)}
              >
                Book a Free Ecommerce Finance Audit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-xl backdrop-blur-sm"
                onClick={() => setIsContactModalOpen(true)}
              >
                Speak to a Specialist
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { value: '50+', label: 'Ecommerce Brands' },
                { value: '99%', label: 'Payout Accuracy' },
                { value: '5 Days', label: 'Avg Close Time' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-white/60 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right content - Visual cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main card */}
              <motion.div
                className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-brand-orange to-amber-500 rounded-2xl flex items-center justify-center">
                    <ShoppingCart className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">Multi-Channel Dashboard</h3>
                    <p className="text-white/60 text-sm">Real-time reconciliation</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {['Shopify', 'Amazon', 'WooCommerce', 'Stripe'].map((platform, i) => (
                    <div key={platform} className="flex items-center justify-between bg-white/5 rounded-xl p-4">
                      <span className="text-white/90">{platform}</span>
                      <span className="text-emerald-400 text-sm font-medium">✓ Synced</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Floating cards */}
              <motion.div
                className="absolute -top-6 -right-6 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl p-4 shadow-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <TrendingUp className="w-6 h-6 text-white mb-2" />
                <div className="text-white font-bold">+32%</div>
                <div className="text-white/80 text-xs">Margin Clarity</div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-4 shadow-xl"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                <Package className="w-6 h-6 text-white mb-2" />
                <div className="text-white font-bold">SKU-Level</div>
                <div className="text-white/80 text-xs">COGS Tracking</div>
              </motion.div>

              <motion.div
                className="absolute top-1/2 -right-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-4 shadow-xl"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity }}
              >
                <Calculator className="w-6 h-6 text-white mb-2" />
                <div className="text-white font-bold">Tax Ready</div>
                <div className="text-white/80 text-xs">GST/VAT/Sales</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <ContactModal open={isContactModalOpen} onOpenChange={setIsContactModalOpen} />
    </section>
  );
};

export default HeroSection;
