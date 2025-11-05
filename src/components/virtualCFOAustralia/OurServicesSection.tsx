import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Waves, 
  BarChart3, 
  Shield, 
  FileText, 
  TrendingUp, 
  Calculator,
  Lightbulb,
  PieChart,
  DollarSign,
  Building,
  Target,
  Briefcase,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

export const OurServicesSection: React.FC = () => {
  const services = [
    { icon: Waves, title: 'Cash Flow Optimisation' },
    { icon: BarChart3, title: 'Financial Performance Dashboards' },
    { icon: Shield, title: 'Compliance' },
    { icon: FileText, title: 'Custom Financial Reporting' },
    { icon: TrendingUp, title: 'Budgeting & Forecasting' },
    { icon: Calculator, title: 'Accounting & Bookkeeping' },
    { icon: Lightbulb, title: 'Implementing best financial practices for your business' },
    { icon: PieChart, title: 'Financial Analysis' },
    { icon: DollarSign, title: 'Tax Planning' },
    { icon: FileText, title: 'Tax Filing' },
    { icon: Building, title: 'Business Valuation' },
    { icon: Target, title: 'Funding Evaluation' },
  ];

  const assurances = [
    'Assured Regular Strategic Meetings',
    'On-demand Fractional CFO Support for Australian businesses'
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-brand-orange">Services</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            Designed to meet the specific needs of Australian businesses, we provide expert Virtual CFO and fractional CFO support in Australia with hands-on strategic guidance and seamless delivery
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-gradient-to-br from-blue-50/30 to-white border-2 border-blue-100/50 hover:shadow-lg transition-all duration-300 hover:border-brand-orange/30">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-6 h-6 text-brand-orange" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 leading-tight">{service.title}</h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Card className="bg-gradient-to-br from-green-50/50 via-white to-blue-50/30 border-2 border-green-100/50 shadow-lg">
            <CardContent className="p-8 md:p-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                We're Always by Your Side
              </h3>
              <div className="space-y-4 mb-8">
                {assurances.map((assurance, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <span className="text-lg font-medium text-gray-800">{assurance}</span>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <Button
                  asChild
                  className="bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 group"
                >
                  <a href="https://calendly.com/jd-growwthpartners/15min?month=2025-11" target="_blank" rel="noopener noreferrer">
                    Book Free 30 Mins Call
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default OurServicesSection;
