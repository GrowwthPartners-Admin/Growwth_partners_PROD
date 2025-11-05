import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, Users, Target } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import ExpertForm from '../partTimeCFO/ExpertForm';

export const HeroSection: React.FC = () => {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-orange-50/30">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-brand-orange/10 rounded-full filter blur-3xl animate-pulse delay-300" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-brand-orange/10 text-brand-orange font-semibold text-sm border border-brand-orange/20"
            >
              <Target className="w-4 h-4" />
              Strategic Finance Leadership
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
            >
              Part-Time CFO & Strategic Finance Support{' '}
              <span className="text-brand-orange">For Singapore Businesses</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
            >
              Get board-level financial clarity without hiring a full-time CFO. Growwth Partners helps you take control of cash flow, improve profitability, and scale with confidence through CFO services Singapore.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Dialog open={contactOpen} onOpenChange={setContactOpen}>
                <Button
                  onClick={() => setContactOpen(true)}
                  className="bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-7 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 group"
                >
                  Book a Free CFO Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle className="text-center">Book a Free CFO Consultation</DialogTitle>
                    <DialogDescription className="text-center">
                      Fill in the form below and we'll get back to you shortly.
                    </DialogDescription>
                  </DialogHeader>
                  <ExpertForm onSuccess={() => setContactOpen(false)} />
                </DialogContent>
              </Dialog>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto pt-8"
            >
              {[
                { icon: TrendingUp, label: 'Cost Savings', value: '50-70%' },
                { icon: Users, label: 'Businesses Served', value: '200+' },
                { icon: Target, label: 'Strategic Focus', value: '100%' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md border border-gray-100"
                >
                  <stat.icon className="w-8 h-8 text-brand-orange mx-auto mb-3" />
                  <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
