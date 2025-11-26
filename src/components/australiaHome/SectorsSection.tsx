import { motion } from "framer-motion";
import { ShoppingCart, Briefcase, Factory, Cloud } from "lucide-react";

const sectors = [
  {
    icon: Cloud,
    title: "SaaS, Marketplaces, and B2B Services",
    gradient: "from-blue-500 to-blue-600"
  },
  {
    icon: ShoppingCart,
    title: "E-commerce and Omni-channel Retail",
    gradient: "from-orange-500 to-orange-600"
  },
  {
    icon: Briefcase,
    title: "Professional Services and Agencies",
    gradient: "from-purple-500 to-purple-600"
  },
  {
    icon: Factory,
    title: "Manufacturing, Distribution, and Logistics",
    gradient: "from-green-500 to-green-600"
  }
];

export const SectorsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-brand-blue text-white rounded-full text-sm font-semibold mb-4">
            Industry Expertise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Sectors We Support
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((sector, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden bg-white/90 rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${sector.gradient}`}></div>
              
              <div className={`mb-6 inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${sector.gradient} rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <sector.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 leading-snug">
                {sector.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
