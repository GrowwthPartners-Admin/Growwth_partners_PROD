import React from 'react';
import { motion } from 'framer-motion';
import { Store, Package, RefreshCw, Globe } from 'lucide-react';

const audiences = [
  {
    icon: Store,
    title: 'DTC Brands',
    description: 'Scaling across Shopify plus marketplaces',
    color: 'from-orange-500 to-amber-500',
  },
  {
    icon: Package,
    title: 'Amazon Sellers',
    description: 'FBA and FBM sellers needing clean payouts and fees mapping',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: RefreshCw,
    title: 'Subscription Stores',
    description: 'With prepaid and recurring revenue models',
    color: 'from-emerald-500 to-green-500',
  },
  {
    icon: Globe,
    title: 'Multi-Country Groups',
    description: 'Complex VAT or GST footprints across regions',
    color: 'from-purple-500 to-violet-500',
  },
];

const WhoWeHelpSection: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
            Our Clients
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Who We Help
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 text-center"
            >
              <div className={`w-20 h-20 mx-auto rounded-3xl bg-gradient-to-br ${audience.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <audience.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{audience.title}</h3>
              <p className="text-gray-600">{audience.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelpSection;
