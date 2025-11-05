import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { MessageSquare, Eye, Settings, Headphones } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      number: 1,
      icon: MessageSquare,
      title: 'Finance Strategy Session',
      description: 'We sit with founder / director / finance lead to understand current financial pressure, burn exposure, investor expectations, and growth plans.',
      color: 'blue'
    },
    {
      number: 2,
      icon: Eye,
      title: 'Financial Visibility Pack',
      description: 'We build immediate visibility: runway, margins, spend leakage, sales efficiency, and operational risk.',
      color: 'green'
    },
    {
      number: 3,
      icon: Settings,
      title: 'Implementation',
      description: 'We plug in as your part-time CFO. You get monthly / quarterly reporting cadence, cash flow discipline, investor-calibre forecasting, and decision support on spend, hiring, and expansion.',
      color: 'orange'
    },
    {
      number: 4,
      icon: Headphones,
      title: 'Ongoing Leadership Support',
      description: 'We join board calls, investor calls, and senior leadership discussions. We\'re in the room when it matters. This is what sets serious CFO services Singapore apart from basic outsourced accounting.',
      color: 'purple'
    }
  ];

  const colorClasses = {
    blue: { bg: 'bg-blue-50', border: 'border-blue-200', number: 'bg-blue-600', icon: 'text-blue-600' },
    green: { bg: 'bg-green-50', border: 'border-green-200', number: 'bg-green-600', icon: 'text-green-600' },
    orange: { bg: 'bg-orange-50', border: 'border-orange-200', number: 'bg-orange-600', icon: 'text-orange-600' },
    purple: { bg: 'bg-purple-50', border: 'border-purple-200', number: 'bg-purple-600', icon: 'text-purple-600' }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How Our <span className="text-brand-orange">Part-Time CFO Engagement</span> Works
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {steps.map((step, index) => {
            const colors = colorClasses[step.color as keyof typeof colorClasses];
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={`${colors.bg} ${colors.border} border-2 hover:shadow-lg transition-shadow duration-300`}>
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className={`w-16 h-16 rounded-2xl ${colors.number} text-white flex items-center justify-center text-2xl font-bold shadow-lg`}>
                          {step.number}
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center gap-3 mb-4">
                          <step.icon className={`w-6 h-6 ${colors.icon}`} />
                          <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                        </div>
                        <p className="text-gray-700 leading-relaxed text-lg">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Connection Lines */}
        <div className="max-w-4xl mx-auto relative -mt-6 mb-6 hidden md:block">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-6 bg-gray-300"
              style={{ top: `${i * 25}%` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
