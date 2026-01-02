import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTASection = () => {

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
           

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Build a Scalable Finance Department—
              <span className="text-brand-orange"> Without Hiring Internally</span>
            </h2>

            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Get CFO leadership, finance analysts, bookkeeping, and payroll—all delivered remotely with clear accountability and measurable outcomes.
            </p>

            <Button
              size="lg"
              className="bg-brand-orange hover:bg-brand-orange/90 text-white px-10 py-6 text-lg rounded-xl shadow-lg shadow-orange-500/25"
              onClick={() => window.open('https://calendly.com/jd-growwthpartners/15min?month=2025-11', '_blank')}
            >
              Schedule a Remote Finance Team Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default CTASection;
