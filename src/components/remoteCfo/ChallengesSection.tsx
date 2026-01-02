import React from 'react';
import { motion } from 'framer-motion';
import { 
  AlertTriangle,
  Puzzle,
  Clock,
  Eye,
  UserX,
  CheckCircle2,
  Users,
  FileCheck,
  BarChart3,
  Shield,
  TrendingUp,
  Zap
} from 'lucide-react';

const challenges = [
  { icon: Puzzle, text: 'Fragmented responsibilities across vendors' },
  { icon: AlertTriangle, text: 'Poor coordination between accounting, payroll, and reporting' },
  { icon: Clock, text: 'Delayed closes and inconsistent numbers' },
  { icon: Eye, text: 'Weak cash flow visibility' },
  { icon: UserX, text: 'Founder dependency for financial decisions' }
];

const benefits = [
  { icon: Users, text: 'Dedicated senior CFO' },
  { icon: FileCheck, text: 'Integrated finance team (analysts, bookkeeping, payroll)' },
  { icon: BarChart3, text: 'Clear reporting ownership and accountability' },
  { icon: Eye, text: 'Real-time financial visibility' },
  { icon: Shield, text: 'Reduced operational risk' },
  { icon: TrendingUp, text: 'Scalable finance infrastructure as you grow' }
];

const ChallengesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-8xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Common Finance Challenges Without a Unified Team
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Challenges Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-100 to-orange-100 rounded-3xl blur-xl opacity-50" />
              <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-red-100 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-red-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Without Integration</h3>
                </div>
                <div className="space-y-4">
                  {challenges.map((challenge, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start gap-3 p-3 bg-red-50 rounded-xl shadow"
                    >
                      <challenge.icon className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{challenge.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Solution Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl blur-xl opacity-50" />
              <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-green-100 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">What You Get</h3>
                </div>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start gap-3 p-3 bg-green-50 rounded-xl shadow"
                    >
                      <benefit.icon className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{benefit.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-r from-brand-orange to-amber-500 rounded-2xl p-8 text-center mx-auto max-w-4xl"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Zap className="w-8 h-8 text-white" />
              <h3 className="text-2xl font-bold text-white">One Accountable Finance Owner</h3>
            </div>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              A Remote CFO & Finance Team eliminates these gaps by creating unified accountability—delivered at a lower cost and faster setup than building an internal finance department.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;
