import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-orange/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-100/50 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-orange-200">
              <Users className="w-5 h-5 text-brand-orange" />
              <span className="text-sm font-medium text-gray-700">Complete Finance Department</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Remote CFO & Finance Team Services in{' '}
              <span className="text-brand-orange">Singapore</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 font-medium">
              Your Complete Finance Department—Delivered Remotely, Built to Scale
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
A fully functional remote finance department: CFO expertise, payroll, and AI workflows with total accountability for your Singapore business            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-orange-200/50"
                onClick={() => window.open('https://calendly.com/jd-growwthpartners/15min?month=2025-11', '_blank')}
              >
                Build Your Remote Finance Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/20 to-amber-200/30 rounded-3xl blur-2xl transform rotate-3" />
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-orange-100">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'CFO Leadership', value: 'Strategic' },
                    { label: 'Finance Team', value: 'Integrated' },
                    { label: 'Cost Savings', value: 'Up to 60%' },
                    { label: 'Setup Time', value: '< 2 Weeks' },
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 text-center border-2 shadow-sm border-orange-100"
                    >
                      <div className="text-2xl font-bold text-brand-orange mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
