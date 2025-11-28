
import { motion } from "framer-motion";

export const D2CHero = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/images/d2c-hero-bg.png)' }} />
      <div className="absolute inset-0 bg-brand-dark/80" />
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-block px-4 py-2 bg-brand-orange/20 rounded-full mb-6">
            <span className="text-brand-orange font-semibold">D2C Expansion</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Rapid Expansion into Thailand and Indonesia
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Strategic Market Entry and Compliance Navigation for D2C Business Growth
          </p>
        </motion.div>
      </div>
    </section>
  );
};
