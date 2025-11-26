import { motion } from "framer-motion";
import { Monitor, ShoppingCart, Briefcase, Factory } from "lucide-react";

const sectors = [
  {
    icon: Monitor,
    title: "SaaS, Marketplaces, and B2B Services",
    gradient: "from-orange-500 to-amber-500"
  },
  {
    icon: ShoppingCart,
    title: "Retail, E-commerce, and Omni-channel",
    gradient: "from-amber-500 to-orange-500"
  },
  {
    icon: Briefcase,
    title: "Professional Services and Agencies",
    gradient: "from-orange-600 to-amber-600"
  },
  {
    icon: Factory,
    title: "Manufacturing, Distribution, and Logistics",
    gradient: "from-amber-600 to-orange-600"
  }
];

export const SectorsSection = () => {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Sectors We Support
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Specialized expertise across diverse industries in the UAE
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {sectors.map((sector, index) => {
            const Icon = sector.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-xl hover:shadow-xl transition-all border border-orange-100 hover:border-orange-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${sector.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{sector.title}</h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
