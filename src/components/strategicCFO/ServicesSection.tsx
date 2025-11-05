import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Waves, 
  Calculator, 
  TrendingUp, 
  LineChart, 
  Users, 
  BarChart3,
  ArrowRight
} from 'lucide-react';
import { ContactModal } from '@/components/ui/contact-modal';

export const ServicesSection: React.FC = () => {
  const [contactOpen, setContactOpen] = useState(false);

  const services = [
    {
      icon: Waves,
      title: 'Cash Flow Management',
      items: [
        'Cash flow forecasting and burn tracking',
        'Working capital planning',
        'Scenario planning ("what happens if revenue drops 20%?")'
      ],
      color: 'blue'
    },
    {
      icon: Calculator,
      title: 'Budgeting and Spend Control',
      items: [
        'Department-level budgets',
        'Headcount planning and hiring affordability',
        'Marketing spend efficiency and ROAS visibility'
      ],
      color: 'orange'
    },
    {
      icon: TrendingUp,
      title: 'Profitability Strategy',
      items: [
        'Revenue quality and pricing strategy',
        'Product / channel / geography profitability',
        'Margin protection and improvement'
      ],
      color: 'green'
    },
    {
      icon: LineChart,
      title: 'Financial Planning & Forecasting',
      items: [
        '12 to 24 month operating model',
        'Best case / base case / worst case projections',
        'Valuation impact modelling'
      ],
      color: 'purple'
    },
    {
      icon: Users,
      title: 'Investor & Fundraising Support',
      items: [
        'Investor-ready reporting and narrative',
        'Support during due diligence',
        'Financial sections of the pitch deck'
      ],
      color: 'indigo'
    },
    {
      icon: BarChart3,
      title: 'Board & Leadership Reporting',
      items: [
        'Monthly performance pack written in plain English',
        'KPI dashboards that track what actually matters',
        'Strategic recommendations, not just numbers'
      ],
      color: 'pink'
    }
  ];

  const colorClasses = {
    blue: 'bg-blue-50 border-blue-200',
    orange: 'bg-orange-50 border-orange-200',
    green: 'bg-green-50 border-green-200',
    purple: 'bg-purple-50 border-purple-200',
    indigo: 'bg-indigo-50 border-indigo-200',
    pink: 'bg-pink-50 border-pink-200'
  };

  const iconColorClasses = {
    blue: 'text-blue-600',
    orange: 'text-orange-600',
    green: 'text-green-600',
    purple: 'text-purple-600',
    indigo: 'text-indigo-600',
    pink: 'text-pink-600'
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
            What You Get With Our <span className="text-brand-orange">Part-Time CFO Model</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            This is not bookkeeping. This is strategic finance.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full ${colorClasses[service.color as keyof typeof colorClasses]} border-2 hover:shadow-lg transition-shadow duration-300`}>
                <CardHeader>
                  <CardTitle className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                      <service.icon className={`w-6 h-6 ${iconColorClasses[service.color as keyof typeof iconColorClasses]}`} />
                    </div>
                    <span className="text-xl font-bold text-gray-900">{service.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            This is what modern founders expect when they look for CFO services Singapore and don't want to overbuild finance too early.
          </p>

          <Card className="max-w-3xl mx-auto bg-gradient-to-br from-brand-orange/10 to-blue-50/50 border-brand-orange/20">
            <CardContent className="p-10 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Want investor-ready reporting without hiring a full-time CFO?
              </h3>
              <Button
                onClick={() => setContactOpen(true)}
                className="bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 group"
              >
                Speak To An Expert
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <ContactModal open={contactOpen} onOpenChange={setContactOpen} />
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
