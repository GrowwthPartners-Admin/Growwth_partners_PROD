import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

export const IntroSection: React.FC = () => {
  const challenges = [
    'High costs of hiring full-time CFOs in Australia',
    'Limited financial clarity',
    'Time-consuming financial management',
    'Lack of strategic financial advice'
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
            We understand the unique challenges <span className="text-[#06C0A9]">Australian businesses face</span>
          </h2>

          <Card className="bg-gradient-to-br from-red-50/50 via-white to-orange-50/30 border-2 border-red-100/50 shadow-lg mb-10">
            <CardContent className="p-8 md:p-10">
              <div className="space-y-4">
                {challenges.map((challenge, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-gray-700">{challenge}</span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50/50 via-white to-green-50/30 border-2 border-blue-100/50 shadow-lg">
            <CardContent className="p-8 md:p-10">
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-xl font-semibold text-gray-900">
                    Why pay a full-time salary when you can access top-tier Virtual CFO expertise for a fraction of the cost?
                  </p>
                </div>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Get the detailed financial insights you need to make informed decisions. Our <strong className="text-[#06C0A9]">Virtual CFOs and fractional CFO specialists</strong> work closely with you to develop growth strategies, optimise cash flow, and drive profitability for Australian businesses.
                </p>

                <div className="flex items-start gap-3 pt-4">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-xl font-semibold text-gray-900">
                    Focus on growing your business while we handle the numbers
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroSection;
