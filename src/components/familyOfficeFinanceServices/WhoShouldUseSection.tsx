import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Users, 
  Briefcase, 
  TrendingUp, 
  Globe,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';

const idealFor = [
  {
    icon: Building2,
    title: 'Single-Family Offices',
    description: 'Managing operating companies and investments'
  },
  {
    icon: Users,
    title: 'Multi-Family Offices',
    description: 'Requiring consolidated reporting across families'
  },
  {
    icon: Briefcase,
    title: 'High-Net-Worth Families',
    description: 'With complex, multi-entity asset structures'
  },
  {
    icon: TrendingUp,
    title: 'Transitioning Families',
    description: 'Moving from founder-led to professionally managed wealth'
  },
  {
    icon: Globe,
    title: 'Singapore-Based Offices',
    description: 'Family offices operating or headquartered in Singapore'
  }
];

const WhoShouldUseSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold mb-4">
              Is This Right For You?
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Who Should Use Family Office Finance Services?
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Family Office Finance services are designed for families and offices 
              managing significant, multi-asset wealth structures who need institutional-grade 
              financial governance and reporting.
            </p>

            <div className="space-y-4">
              {idealFor.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 hover:bg-emerald-50 transition-colors duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                    <p className="text-slate-600 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Key Indicator */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 lg:p-10 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="w-8 h-8 text-amber-400" />
                <h3 className="text-2xl font-bold text-white">
                  The Key Question
                </h3>
              </div>

              <div className="bg-white/10 rounded-2xl p-6 mb-8 border border-white/10">
                <p className="text-xl text-white font-medium leading-relaxed">
                  "Do decision-makers have a single source of truth across all assets?"
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span>If not, fragmented reporting creates blind spots</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span>Capital allocation decisions lack proper data</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span>Governance risks increase without oversight</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-emerald-400 font-semibold text-lg">
                  Professional family office finance support becomes essential.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoShouldUseSection;
