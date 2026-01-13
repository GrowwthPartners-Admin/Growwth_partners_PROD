import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  TrendingUp, 
  DollarSign, 
  Shield, 
  Users,
  Building2,
  BarChart3,
  Globe,
  Wallet,
  CheckCircle2,
  Lock,
  Briefcase
} from 'lucide-react';

const services = [
  {
    number: '01',
    title: 'Consolidated Financial Reporting',
    icon: FileText,
    color: 'emerald',
    items: [
      'Group-level P&L, balance sheet, and cash flow',
      'Consolidation across operating companies, SPVs, and investments',
      'Currency and entity-level reporting'
    ]
  },
  {
    number: '02',
    title: 'Investment Performance & Portfolio Reporting',
    icon: TrendingUp,
    color: 'blue',
    items: [
      'Performance tracking across asset classes',
      'Cash yield and capital deployment analysis',
      'Investment-level dashboards for principals'
    ]
  },
  {
    number: '03',
    title: 'Cash Flow & Liquidity Management',
    icon: DollarSign,
    color: 'amber',
    items: [
      'Consolidated cash flow forecasting',
      'Capital call and distribution tracking',
      'Liquidity planning across entities'
    ]
  },
  {
    number: '04',
    title: 'Financial Governance & Controls',
    icon: Shield,
    color: 'purple',
    items: [
      'Approval and authority frameworks',
      'Risk management and oversight',
      'Audit and compliance coordination'
    ]
  },
  {
    number: '05',
    title: 'CFO-Led Strategic Support',
    icon: Briefcase,
    color: 'rose',
    items: [
      'Capital allocation and rebalancing insights',
      'Support for new investments or exits',
      'Trusted financial partner to principals and advisors'
    ]
  }
];

const HowWeDeliverSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-400 text-sm font-semibold mb-4 border border-emerald-500/30">
            Our Approach
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            How Growwth Partners Delivers{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-amber-400 bg-clip-text text-transparent">
              Family Office Finance Value
            </span>
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Our Family Office Finance services are built on governance, transparency, and discretion.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white/5 backdrop-blur-xl rounded-2xl p-6 lg:p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 ${
                index === 4 ? 'lg:col-span-2 lg:max-w-2xl lg:mx-auto' : ''
              }`}
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/25">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-emerald-400 font-bold text-md">{service.number}</span>
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3 text-slate-300">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-amber-500/10 border border-amber-500/20">
            <Lock className="w-6 h-6 text-amber-400" />
            <p className="text-amber-300 font-medium">
              All services delivered with complete confidentiality and discretion
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowWeDeliverSection;
