
import { motion } from "framer-motion";

export const D2COverview = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="heading-lg text-brand-dark">Client Overview</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our client, a pioneering direct-to-consumer (D2C) business, embarked on a transformative journey to expand its operations into the challenging markets of Indonesia and Thailand. Faced with complex legal landscapes and regulatory bans on foreign-owned e-commerce retail businesses, the client sought innovative solutions to establish a strong foothold in these countries.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-6 -right-6 w-64 h-64 bg-brand-orange/10 rounded-full filter blur-3xl"></div>
            <img
              src="/images/d2c-overview.jpg"
              alt="D2C Business Overview"
              className="rounded-2xl shadow-2xl relative z-10"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
