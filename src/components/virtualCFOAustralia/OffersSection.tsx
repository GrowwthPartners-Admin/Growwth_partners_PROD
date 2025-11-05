import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Gift, Phone, Percent, CheckCircle2 } from 'lucide-react';

export const OffersSection: React.FC = () => {
  const offers = [
    {
      icon: Phone,
      title: 'Free 30-Minute Consultation Call',
      description: 'Get expert financial advice and see how we can help your business grow.',
      color: 'blue'
    },
    {
      icon: Percent,
      title: '30% Off First 3 Months of Services',
      description: 'Experience our full suite of Virtual CFO / fractional CFO services at a discounted rate.',
      color: 'orange'
    },
    {
      icon: CheckCircle2,
      title: 'Guaranteed Results & Cost-Efficient Scaling',
      description: 'As your business grows, we scale our services to ensure you have the financial support needed without overextending your budget.',
      color: 'green'
    }
  ];

  const colorClasses = {
    blue: 'from-blue-50 to-blue-100/50 border-blue-200',
    orange: 'from-orange-50 to-orange-100/50 border-orange-200',
    green: 'from-green-50 to-green-100/50 border-green-200'
  };

  const iconColorClasses = {
    blue: 'text-blue-600',
    orange: 'text-orange-600',
    green: 'text-green-600'
  };

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-brand-orange/10 text-brand-orange font-semibold text-sm border border-brand-orange/20 mb-6">
            <Gift className="w-4 h-4" />
            Limited Time Offers
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Offers You <span className="text-brand-orange">Can't Refuse</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            For a limited time, we're offering exclusive deals to Australian businesses looking for Virtual CFO or fractional CFO support
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full bg-gradient-to-br ${colorClasses[offer.color as keyof typeof colorClasses]} border-2 hover:shadow-xl transition-all duration-300 hover:scale-105`}>
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center mx-auto mb-6">
                    <offer.icon className={`w-10 h-10 ${iconColorClasses[offer.color as keyof typeof iconColorClasses]}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{offer.title}</h3>
                  <p className="text-gray-700 leading-relaxed text-lg">{offer.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OffersSection;
