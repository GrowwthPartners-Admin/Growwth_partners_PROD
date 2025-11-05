import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { AlertCircle, CheckCircle2, Eye, DollarSign, Target, TrendingUp } from 'lucide-react';

export const WhyChooseSection: React.FC = () => {
  const problems = [
    { icon: AlertCircle, text: 'No forward view of cash runway' },
    { icon: AlertCircle, text: 'No consistent financial reporting for investors or directors' },
    { icon: AlertCircle, text: 'Marketing and hiring decisions made without financial guardrails' },
    { icon: AlertCircle, text: 'High burn, unclear margins, and silent leakages' },
    { icon: AlertCircle, text: 'Pressure to "look investor-ready" before you actually are' }
  ];

  const outcomes = [
    { icon: Eye, text: 'Financial visibility' },
    { icon: DollarSign, text: 'Cost discipline' },
    { icon: TrendingUp, text: 'Investor confidence' },
    { icon: Target, text: 'Strategic clarity' }
  ];

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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Singapore Businesses Choose <span className="text-brand-orange">Part-Time CFO Support</span>
          </h2>
          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-blue-50/50 via-white to-orange-50/30 border-2 border-blue-100/50 shadow-md">
            <CardContent className="p-8 md:p-10">
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p className="text-xl font-medium text-gray-900">
                  You're growing. You're moving fast. Your investors expect clarity. Your team expects control. Your finance team expects direction. But hiring a full-time CFO in Singapore is expensive and often premature.
                </p>
                <p className="text-lg">
                  That's where <strong className="text-brand-orange">part-time CFO and outsourced finance leadership</strong> comes in.
                </p>
                <p className="text-lg">
                  With Growwth Partners, you get access to a senior finance partner who acts like your CFO, helps drive strategy, and protects cash flow, <strong>without adding another permanent executive to payroll</strong>. This is the core value of CFO services Singapore founders are now choosing instead of rushing into a full-time hire.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Pain Points */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full bg-red-50/50 border-red-100">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                    <AlertCircle className="w-6 h-6 text-red-600" />
                  </div>
                  Pain We Solve
                </h3>
                <ul className="space-y-4">
                  {problems.map((problem, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <problem.icon className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{problem.text}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Outcomes */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full bg-green-50/50 border-green-100">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  </div>
                  Outcome We Deliver
                </h3>
                <ul className="space-y-4">
                  {outcomes.map((outcome, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <outcome.icon className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-medium">{outcome.text}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
