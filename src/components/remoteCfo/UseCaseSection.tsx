import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2,
  AlertCircle,
  Lightbulb,
  TrendingUp,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

const challenges = [
  'No internal finance function',
  'Inconsistent reporting',
  'Limited cash flow visibility'
];

const solutions = [
  'Deployed a Remote CFO & Finance Team',
  'Implemented AI-driven dashboards',
  'Took ownership of bookkeeping, payroll, and reporting'
];

const outcomes = [
  { metric: '70%', label: 'Reporting errors reduced' },
  { metric: 'Faster', label: 'Monthly closes' },
  { metric: 'Freed', label: 'Founders from finance execution' },
  { metric: 'Improved', label: 'Strategic decision confidence' }
];

const UseCaseSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Practical Use Case
            </h2>
          </motion.div>

          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-brand-orange to-amber-500 p-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center">
                  <Building2 className="w-7 h-7 text-white" />
                </div>
                <div className="text-white">
                  <h3 className="text-2xl font-bold">Tech SME (Singapore)</h3>
                  <p className="text-white/80">Client Success Story</p>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Challenges */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                      <AlertCircle className="w-5 h-5 text-red-500" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">Challenges</h4>
                  </div>
                  <div className="space-y-3">
                    {challenges.map((challenge, index) => (
                      <div key={index} className="flex items-start gap-2 p-3 bg-red-50 rounded-xl">
                        <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700">{challenge}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Arrow */}
                <div className="hidden lg:flex items-center justify-center">
                  <ArrowRight className="w-12 h-12 text-gray-900" />
                </div>

                {/* Solution */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Lightbulb className="w-5 h-5 text-blue-500" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">Solution</h4>
                  </div>
                  <div className="space-y-3">
                    {solutions.map((solution, index) => (
                      <div key={index} className="flex items-start gap-2 p-3 bg-blue-50 rounded-xl">
                        <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{solution}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Outcomes */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-8 pt-8 border-t border-gray-100"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">Outcomes</h4>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {outcomes.map((outcome, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 shadow text-center border border-green-100"
                    >
                      <div className="text-2xl font-bold text-green-600 mb-1">{outcome.metric}</div>
                      <div className="text-sm text-gray-600">{outcome.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCaseSection;
