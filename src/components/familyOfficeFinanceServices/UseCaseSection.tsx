import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  AlertTriangle, 
  Lightbulb, 
  TrendingUp,
  CheckCircle2,
  Target,
  FileText,
  BarChart3,
  Eye
} from 'lucide-react';

const challenges = [
  'Fragmented reporting across entities',
  'Limited cash flow visibility',
  'Overreliance on external advisors'
];

const solutions = [
  'Implemented consolidated reporting framework',
  'Built portfolio and liquidity dashboards',
  'Provided CFO-led oversight and governance'
];

const outcomes = [
  'Single source of financial truth',
  'Improved capital allocation decisions',
  'Greater confidence for family principals'
];

const UseCaseSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold mb-4">
            Case Study
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Practical Use Case
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            See how we helped a Singapore-based single-family office transform their 
            financial operations and governance.
          </p>
        </motion.div>

        {/* Client Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-8xl mx-auto"
        >
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 lg:p-12 shadow-2xl mb-8">
            <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8 pb-8 border-b border-white/10">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500 to-amber-500 flex items-center justify-center">
                <Building2 className="w-10 h-10 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Single-Family Office (Singapore)</h3>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-sm font-medium">
                    Operating Businesses
                  </span>
                  <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-sm font-medium">
                    Private Investments
                  </span>
                  <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-sm font-medium">
                    Real Estate
                  </span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Challenges */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-red-400" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Challenges</h4>
                </div>
                <ul className="space-y-3">
                  {challenges.map((challenge, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-start gap-3 text-slate-300"
                    >
                      <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                      <span>{challenge}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Solution */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Our Solution</h4>
                </div>
                <ul className="space-y-3">
                  {solutions.map((solution, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                      className="flex items-start gap-3 text-slate-300"
                    >
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span>{solution}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Outcome */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-amber-400" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Outcome</h4>
                </div>
                <ul className="space-y-3">
                  {outcomes.map((outcome, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                      className="flex items-start gap-3 text-slate-300"
                    >
                      <Target className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                      <span>{outcome}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: FileText, label: 'Reporting', value: 'Consolidated', color: 'emerald' },
              { icon: BarChart3, label: 'Visibility', value: 'Complete', color: 'blue' },
              { icon: Eye, label: 'Governance', value: 'CFO-Led', color: 'amber' }
            ].map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 text-center"
              >
                <div className={`w-14 h-14 rounded-xl bg-${metric.color}-100 flex items-center justify-center mx-auto mb-4`}>
                  <metric.icon className={`w-7 h-7 text-${metric.color}-600`} />
                </div>
                <p className="text-2xl font-bold text-slate-900 mb-1">{metric.value}</p>
                <p className="text-slate-500">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UseCaseSection;
