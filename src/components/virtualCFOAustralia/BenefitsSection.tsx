import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Rocket, Clock, TrendingUp } from 'lucide-react';

export const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: Rocket,
      title: 'Stress-Free Financial Management',
      description: 'Focus on growing your business while we handle the numbers with our Virtual CFO and fractional CFO services in Australia.',
      color: 'blue'
    },
    {
      icon: Clock,
      title: 'Never Miss Deadlines',
      description: 'Stay compliant with timely tax filings, reports, and financial obligations.',
      color: 'orange'
    },
    {
      icon: TrendingUp,
      title: 'Save Time & Money',
      description: 'Optimise financial processes and reduce costs with experienced Virtual CFO and fractional CFO guidance in Australia.',
      color: 'green'
    }
  ];

  const colorClasses = {
    blue: 'bg-blue-50 border-blue-200',
    orange: 'bg-orange-50 border-orange-200',
    green: 'bg-green-50 border-green-200'
  };

  const iconColorClasses = {
    blue: 'text-blue-600 bg-blue-100',
    orange: 'text-orange-600 bg-orange-100',
    green: 'text-green-600 bg-green-100'
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full ${colorClasses[benefit.color as keyof typeof colorClasses]} border-2 hover:shadow-lg transition-shadow duration-300`}>
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 rounded-2xl ${iconColorClasses[benefit.color as keyof typeof iconColorClasses]} flex items-center justify-center mx-auto mb-6 shadow-sm`}>
                    <benefit.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
