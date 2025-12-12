import { motion } from 'framer-motion';
import { UserCircle, Lightbulb, Users, Link, Settings, BarChart3, MessageSquare, CheckCircle2 } from 'lucide-react';

const audiences = [
  {
    icon: UserCircle,
    title: 'CFOs & Finance Leaders',
    description: 'Needing decision-ready views and faster answers',
    color: 'from-teal-500 to-teal-600'
  },
  {
    icon: Lightbulb,
    title: 'Founders and CEOs',
    description: 'Who want clarity on burn, margins, and growth levers',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Users,
    title: 'Finance Teams',
    description: 'That want less manual work and more analysis',
    color: 'from-purple-500 to-purple-600'
  }
];

const steps = [
  {
    number: '01',
    title: 'Connect',
    description: 'Sync accounting data and key spreadsheets',
    icon: Link,
    features: ['Cloud accounting integration', 'Google Sheets sync', 'Multi-entity support']
  },
  {
    number: '02',
    title: 'Configure',
    description: 'Set KPIs, dashboards, and alert rules that matter to your business',
    icon: Settings,
    features: ['Custom KPI definitions', 'Dashboard layouts', 'Automated alerts']
  },
  {
    number: '03',
    title: 'Decide',
    description: 'Ask questions, run scenarios, and share decision-ready insights',
    icon: BarChart3,
    features: ['Natural language queries', 'Scenario modeling', 'Board-ready reports']
  }
];

const WhoItsForSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Who It's For */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Who It's{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
              For
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-teal-200 hover:shadow-xl transition-all duration-300 text-center group shadow"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${audience.color} rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg group-hover:scale-110 transition-transform`}>
                <audience.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{audience.title}</h3>
              <p className="text-gray-600">{audience.description}</p>
            </motion.div>
          ))}
        </div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
              Works
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Three simple steps to decision intelligence
          </p>
        </motion.div>

        {/* Enhanced Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connection line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-teal-200 via-blue-200 to-purple-200 rounded-full" />

          <div className="grid lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                {/* Step card */}
                <div className="bg-gradient-to-br from-teal-100 to-blue-50 rounded-2xl p-6 border border-gray-100 hover:border-teal-200 hover:shadow-xl transition-all duration-300 group">
                  {/* Number badge */}
                  <div className="relative z-10 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg mx-auto group-hover:scale-110 transition-transform">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 lg:right-auto lg:-left-2 w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
                      {step.number}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">{step.title}</h3>
                  <p className="text-gray-600 mb-6 text-center">{step.description}</p>

                  {/* Feature list */}
                  <div className="space-y-3">
                    {step.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Arrow connector - Mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <div className="w-8 h-8 bg-gradient-to-b from-teal-100 to-blue-100 rounded-full flex items-center justify-center">
                      <MessageSquare className="w-4 h-4 text-teal-600 rotate-90" />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoItsForSection;
