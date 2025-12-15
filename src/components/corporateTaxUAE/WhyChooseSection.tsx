import { motion } from 'framer-motion';
import { CheckCircle, Shield, TrendingUp, FileCheck, Users } from 'lucide-react';

const reasons = [
  {
    icon: Shield,
    text: "Expert guidance on the new corporate tax regime and FTA expectations"
  },
  {
    icon: Users,
    text: "Year-round compliance support with practical advice for leadership"
  },
  {
    icon: TrendingUp,
    text: "SME focused tax optimisation within the rules"
  },
  {
    icon: FileCheck,
    text: "Clear reports and workpapers that are audit ready"
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
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-brand-orange/10 text-brand-orange rounded-full text-sm font-semibold mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why UAE Businesses Choose{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-600">
              Growwth Partners
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-4 p-6 bg-gradient-to-br from-amber-50/80 to-orange-50/50 rounded-2xl border border-amber-100/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-brand-orange to-amber-500 flex items-center justify-center">
                <reason.icon className="w-6 h-6 text-white" />
              </div>
              <p className="text-gray-700 font-medium leading-relaxed pt-2">
                {reason.text}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-brand-orange/10 to-amber-100/50 rounded-2xl border border-brand-orange/20 shadow">
            <CheckCircle className="w-6 h-6 text-brand-orange" />
            <p className="text-gray-700 font-medium">
              Stay confident about corporate tax UAE requirements and unlock every eligible saving through structured planning.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
