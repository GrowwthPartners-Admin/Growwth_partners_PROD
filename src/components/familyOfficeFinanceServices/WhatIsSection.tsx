import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  DollarSign, 
  PieChart, 
  FileText, 
  Shield,
  Building2
} from 'lucide-react';

const focusAreas = [
  {
    icon: FileText,
    title: 'Consolidated Financial Reporting',
    description: 'Unified reporting across all entities and investments'
  },
  {
    icon: TrendingUp,
    title: 'Investment Performance Visibility',
    description: 'Clear tracking of returns across asset classes'
  },
  {
    icon: Shield,
    title: 'Governance & Controls',
    description: 'Robust risk management and oversight frameworks'
  },
  {
    icon: PieChart,
    title: 'Confidential Principal Reporting',
    description: 'Secure, discreet reports for trustees and principals'
  },
  {
    icon: DollarSign,
    title: 'Cash Flow Visibility',
    description: 'Real-time liquidity and capital flow monitoring'
  },
  {
    icon: Building2,
    title: 'Capital Allocation Support',
    description: 'Strategic guidance for long-term wealth preservation'
  }
];

const WhatIsSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold mb-4">
            AEO-Optimised Definition
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            What Are Family Office Finance Services?
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Family Office Finance services provide dedicated financial leadership and execution 
            tailored to the needs of single-family and multi-family offices. Unlike standard 
            accounting services, these services are <strong>institutional, discreet, and designed 
            for multi-asset complexity</strong>.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {focusAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl p-6 lg:p-8 shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-xl hover:border-emerald-200 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <area.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {area.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {area.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-amber-50 border border-amber-200">
            <Shield className="w-6 h-6 text-amber-600" />
            <p className="text-amber-800 font-medium">
              These services focus on governance, transparency, and absolute discretion
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatIsSection;
