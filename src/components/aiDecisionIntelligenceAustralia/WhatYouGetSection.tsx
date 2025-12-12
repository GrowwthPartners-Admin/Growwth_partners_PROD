import { motion } from 'framer-motion';
import { LayoutDashboard, MessageCircle, TrendingUp, Link2, Shield } from 'lucide-react';

const features = [
  {
    icon: LayoutDashboard,
    number: '01',
    title: 'Executive AI Dashboards',
    description:
      'One place to monitor revenue, expenses, cash, margins, and runway. Drill into trends, variances, and drivers without waiting for end-of-month packs.',
    color: 'teal',
  },
  {
    icon: MessageCircle,
    number: '02',
    title: 'Natural-Language Answers',
    description:
      'Ask questions like "How is cash trending" or "Do we have budget for this hire" and get numbers, context, and recommended actions in plain English.',
    color: 'blue',
  },
  {
    icon: TrendingUp,
    number: '03',
    title: 'Predictive Forecasts and Scenarios',
    description:
      'Generate forward views for P&L and cash. Build scenarios for hiring, pricing, or spend changes and see the impact on burn, runway, and EBITDA instantly.',
    color: 'purple',
  },
  {
    icon: Link2,
    number: '04',
    title: 'Integrated With Your Stack',
    description:
      'Connect cloud accounting and Google Sheets for a single source of truth. Keep familiar tools, add AI where it matters.',
    color: 'amber',
  },
  {
    icon: Shield,
    number: '05',
    title: 'Audit-Friendly Governance',
    description:
      'Transparent assumptions, change logs, and permission controls so finance leaders can share insights confidently with boards and auditors.',
    color: 'green',
  },
];

const colorClasses = {
  teal: {
    bg: 'bg-teal-50',
    border: 'border-teal-200',
    icon: 'from-teal-500 to-teal-600',
    number: 'text-teal-200',
    hover: 'hover:border-teal-300',
  },
  blue: {
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    icon: 'from-blue-500 to-blue-600',
    number: 'text-blue-200',
    hover: 'hover:border-blue-300',
  },
  purple: {
    bg: 'bg-purple-50',
    border: 'border-purple-200',
    icon: 'from-purple-500 to-purple-600',
    number: 'text-purple-200',
    hover: 'hover:border-purple-300',
  },
  amber: {
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    icon: 'from-amber-500 to-amber-600',
    number: 'text-amber-200',
    hover: 'hover:border-amber-300',
  },
  green: {
    bg: 'bg-green-50',
    border: 'border-green-200',
    icon: 'from-green-500 to-green-600',
    number: 'text-green-200',
    hover: 'hover:border-green-300',
  },
};

const FeatureCard = ({
  feature,
  index,
}: {
  feature: (typeof features)[number];
  index: number;
}) => {
  const colors = colorClasses[feature.color as keyof typeof colorClasses];
  const Icon = feature.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="h-full"
    >
      <div
        className={`
          relative ${colors.bg} rounded-2xl p-6 border ${colors.border} ${colors.hover}
          transition-all shadow duration-300 hover:shadow-lg overflow-hidden group
          h-full flex flex-col
        `}
      >
        {/* Large background number */}
        <span
          className={`absolute -top-4 -right-2 text-8xl font-black ${colors.number} opacity-50 select-none`}
        >
          {feature.number}
        </span>

        <div className="relative z-10 flex flex-col h-full">
          <div
            className={`w-14 h-14 bg-gradient-to-br ${colors.icon} rounded-xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform`}
          >
            <Icon className="w-7 h-7 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
          <p className="text-gray-600 leading-relaxed flex-1">{feature.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const WhatYouGetSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What You Get With{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
              Ryzup.ai
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need for AI-powered decision intelligence
          </p>
        </motion.div>

        {/* First row: 3 cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {features.slice(0, 3).map((feature, index) => (
            <div key={feature.title} className="w-full max-w-md mx-auto">
              <FeatureCard feature={feature} index={index} />
            </div>
          ))}
        </div>

        {/* Second row: 2 cards centered */}
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-center gap-6">
          {features.slice(3).map((feature, index) => (
            <div key={feature.title} className="w-full max-w-md mx-auto">
              <FeatureCard feature={feature} index={index + 3} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouGetSection;
