import React from 'react';
import { motion } from 'framer-motion';
import { 
  AlertTriangle, 
  Eye, 
  BarChart3, 
  Shield, 
  Users2,
  FileX,
  CheckCircle2,
  UserCheck,
  Layers,
  TrendingUp,
  Lock,
  Scaling
} from 'lucide-react';

const challenges = [
  { icon: FileX, text: 'Fragmented reporting across entities and advisors' },
  { icon: Eye, text: 'Limited visibility into consolidated cash flow and liquidity' },
  { icon: BarChart3, text: 'Inconsistent performance measurement across asset classes' },
  { icon: Shield, text: 'Weak governance and control frameworks' },
  { icon: Users2, text: 'Overdependence on external advisors without internal oversight' }
];

const benefits = [
  { icon: UserCheck, text: 'Dedicated CFO-level finance leadership' },
  { icon: Layers, text: 'Consolidated, confidential financial reporting' },
  { icon: Eye, text: 'Clear visibility across all assets and entities' },
  { icon: Shield, text: 'Strong governance and internal controls' },
  { icon: TrendingUp, text: 'Reduced reliance on fragmented external advisors' },
  { icon: Scaling, text: 'Scalable finance infrastructure as complexity grows' }
];

const ChallengesSection: React.FC = () => {
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
            Challenges & Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Key Financial Challenges in Family Offices
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Without structured finance leadership, these issues increase operational risk 
            and reduce decision confidence.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Challenges */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 lg:p-10 border border-red-100"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
                <AlertTriangle className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900">Common Challenges</h3>
                <p className="text-slate-600">Issues facing family offices</p>
              </div>
            </div>

            <div className="space-y-4">
              {challenges.map((challenge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm"
                >
                  <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                    <challenge.icon className="w-5 h-5 text-red-600" />
                  </div>
                  <p className="text-slate-700 font-medium">{challenge.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* What You Get */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 lg:p-10 border border-emerald-100"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                <CheckCircle2 className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900">What You Get</h3>
                <p className="text-slate-600">With our Family Office Finance services</p>
              </div>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-5 h-5 text-emerald-600" />
                  </div>
                  <p className="text-slate-700 font-medium">{benefit.text}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-emerald-600/10 rounded-xl border border-emerald-200">
              <div className="flex items-center gap-2 text-emerald-700 font-semibold">
                <Lock className="w-5 h-5" />
                <span>All services delivered with absolute discretion and confidentiality</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;
