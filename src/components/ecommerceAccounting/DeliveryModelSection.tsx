import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Cog, Play, Rocket, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ContactModal } from '@/components/ui/contact-modal';

const steps = [
  {
    icon: Search,
    title: 'Assess',
    description: 'Map channels, gateways, inventory flows, tax footprint, and current books.',
    color: 'from-blue-500 to-cyan-500',
    number: '01',
  },
  {
    icon: PenTool,
    title: 'Design',
    description: 'Set chart of accounts, SKU and COGS rules, reconciliation logic, and tax workflow.',
    color: 'from-purple-500 to-violet-500',
    number: '02',
  },
  {
    icon: Cog,
    title: 'Implement',
    description: 'Connect apps, automate imports, configure checks, and build reporting templates.',
    color: 'from-orange-500 to-amber-500',
    number: '03',
  },
  {
    icon: Play,
    title: 'Run',
    description: 'Execute monthly close, file taxes, issue management packs, and maintain controls.',
    color: 'from-emerald-500 to-green-500',
    number: '04',
  },
  {
    icon: Rocket,
    title: 'Improve',
    description: 'Add channels, expand entities, automate more steps, and prepare investor or lender packs.',
    color: 'from-pink-500 to-rose-500',
    number: '05',
  },
];

const DeliveryModelSection: React.FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-brand-orange/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-semibold mb-4 backdrop-blur-sm">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Delivery Model
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            A proven approach to setting up and running your ecommerce accounting
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hidden lg:block transform -translate-y-1/2 opacity-30" />

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 h-full">
                  {/* Step number */}
                  <div className="absolute -top-4 -right-2 text-6xl font-black text-white/5">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-5 relative z-10`}>
                    <step.icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-white/70 leading-relaxed text-sm">{step.description}</p>
                </div>

                {/* Connector dot for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-2 h-2 rounded-full bg-white/50 transform -translate-y-1/2 z-20" />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button
            size="lg"
            className="bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-brand-orange/25"
            onClick={() => setIsContactModalOpen(true)}
          >
            Start Your Ecommerce Accounting Setup
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>

      <ContactModal open={isContactModalOpen} onOpenChange={setIsContactModalOpen} />
    </section>
  );
};

export default DeliveryModelSection;
