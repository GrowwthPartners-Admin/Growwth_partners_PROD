import { motion } from 'framer-motion';
import { BarChart3, MessageSquare, TrendingUp, Clock } from 'lucide-react';

const reasons = [
  {
    icon: BarChart3,
    title: 'Real-time AI dashboards',
    description: 'Live dashboards for CFOs in Australia instead of static packs',
    color: 'from-teal-500 to-teal-600'
  },
  {
    icon: MessageSquare,
    title: 'Instant answers',
    description: 'Clear answers to cash, margin, and budget questions in seconds',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: TrendingUp,
    title: 'Dynamic forecasts',
    description: 'Forecasts and scenarios that update as actuals change',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Clock,
    title: 'More decision time',
    description: 'Less manual spreadsheet work, more time for decisions',
    color: 'from-amber-500 to-amber-600'
  }
];

const WhyChooseSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why CFOs & Business Owners in Australia{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
              Choose Ryzup
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Decision intelligence that moves as fast as your business
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 shadow hover:border-teal-200 hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${reason.color} rounded-xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform`}>
                <reason.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
