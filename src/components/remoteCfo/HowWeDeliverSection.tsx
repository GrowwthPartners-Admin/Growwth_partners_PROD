import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target,
  BarChart3,
  Calculator,
  Users,
  Cpu,
  TrendingUp,
  PieChart,
  Shield,
  FileCheck,
  Settings,
  LineChart,
  Zap
} from 'lucide-react';

const services = [
  {
    number: '01',
    title: 'CFO-Led Financial Strategy & Governance',
    icon: Target,
    color: 'from-orange-500 to-amber-500',
    items: [
      { icon: TrendingUp, text: 'Financial planning and forecasting' },
      { icon: PieChart, text: 'Cash flow and capital management' },
      { icon: Shield, text: 'Risk assessment and governance frameworks' }
    ]
  },
  {
    number: '02',
    title: 'Finance Analysts & Decision Support',
    icon: BarChart3,
    color: 'from-blue-500 to-cyan-500',
    items: [
      { icon: TrendingUp, text: 'Budgeting and rolling forecasts' },
      { icon: LineChart, text: 'Scenario and sensitivity analysis' },
      { icon: BarChart3, text: 'KPI and performance dashboards' }
    ]
  },
  {
    number: '03',
    title: 'Bookkeeping & Accounting Execution',
    icon: Calculator,
    color: 'from-green-500 to-emerald-500',
    items: [
      { icon: FileCheck, text: 'Accurate monthly bookkeeping' },
      { icon: Settings, text: 'Timely closes and reconciliations' },
      { icon: Shield, text: 'Compliance-ready financial records' }
    ]
  },
  {
    number: '04',
    title: 'Payroll & Compliance Support',
    icon: Users,
    color: 'from-purple-500 to-violet-500',
    items: [
      { icon: Calculator, text: 'Payroll processing and reporting' },
      { icon: Shield, text: 'Statutory compliance coordination' },
      { icon: Settings, text: 'Integration with accounting systems' }
    ]
  },
  {
    number: '05',
    title: 'AI-Enabled Reporting & Automation',
    icon: Cpu,
    color: 'from-pink-500 to-rose-500',
    items: [
      { icon: LineChart, text: 'Real-time dashboards' },
      { icon: Zap, text: 'Automated MIS reporting' },
      { icon: TrendingUp, text: 'Predictive cash flow and performance insights' }
    ]
  }
];

const HowWeDeliverSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
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
              How Growwth Partners Delivers Remote Finance Value
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our Remote CFO & Finance Team services are designed around clear roles, strong governance, and technology-enabled execution.
            </p>
          </motion.div>

          <div className="space-y-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col lg:flex-row">
                  {/* Header */}
                  <div className={`lg:w-1/3 p-6 bg-gradient-to-br ${service.color} text-white flex items-center gap-4`}>
                    <span className="text-4xl font-bold opacity-50">{service.number}</span>
                    <div>
                      <h3 className="text-xl font-bold">{service.title}</h3>
                    </div>
                  </div>

                  {/* Items */}
                  <div className="lg:w-2/3 p-6">
                    <div className="grid sm:grid-cols-3 gap-4">
                      {service.items.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl shadow"
                        >
                          <item.icon className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeDeliverSection;
