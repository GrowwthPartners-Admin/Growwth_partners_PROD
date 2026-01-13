import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  Globe, 
  UserCheck, 
  Lock, 
  Layers,
  ArrowRight,
  Shield,
  Building2
} from 'lucide-react';

const reasons = [
  {
    icon: Award,
    title: 'UHNW & Family Office Experience',
    description: 'Experience supporting family offices, UHNW structures, and complex portfolios'
  },
  {
    icon: Globe,
    title: 'Singapore Expertise',
    description: "Strong understanding of Singapore's regulatory and wealth management environment"
  },
  {
    icon: UserCheck,
    title: 'CFO-Led Governance',
    description: 'CFO-led governance—not advisor-led reporting'
  },
  {
    icon: Lock,
    title: 'Secure Systems',
    description: 'Secure systems and access-controlled reporting'
  },
  {
    icon: Layers,
    title: 'Integrated Support',
    description: 'Integrated support across CFO, finance, and reporting services'
  }
];

const WhyChooseSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold mb-4">
              Why Growwth Partners
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Why Choose Growwth Partners for{' '}
              <span className="text-emerald-600">Family Office Finance?</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We act as a trusted, independent financial backbone for family wealth—providing 
              institutional-grade governance, reporting, and strategic support with complete 
              confidentiality.
            </p>

            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 hover:bg-emerald-50 transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <reason.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">{reason.title}</h3>
                    <p className="text-slate-600 text-sm">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 lg:p-10 shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-amber-500 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Our Commitment</h3>
                  <p className="text-slate-400">To family office clients</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <div className="flex items-center gap-3 text-emerald-400 mb-2">
                    <Building2 className="w-5 h-5" />
                    <span className="font-semibold">Institutional Quality</span>
                  </div>
                  <p className="text-slate-300">
                    Professional-grade financial infrastructure designed for complex wealth structures
                  </p>
                </div>

                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <div className="flex items-center gap-3 text-amber-400 mb-2">
                    <Lock className="w-5 h-5" />
                    <span className="font-semibold">Complete Discretion</span>
                  </div>
                  <p className="text-slate-300">
                    Absolute confidentiality with secure, access-controlled systems
                  </p>
                </div>

                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <div className="flex items-center gap-3 text-blue-400 mb-2">
                    <UserCheck className="w-5 h-5" />
                    <span className="font-semibold">Independent Oversight</span>
                  </div>
                  <p className="text-slate-300">
                    CFO-led governance providing objective financial leadership
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-white font-medium flex items-center gap-2">
                  <ArrowRight className="w-5 h-5 text-emerald-400" />
                  We help move from reactive to disciplined financial management
                </p>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl p-3 shadow-xl"
            >
              <Lock className="w-6 h-6 text-white" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
