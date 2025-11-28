
import { motion } from "framer-motion";

export const TechBusinessHero = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-brand-dark via-gray-900 to-brand-dark overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-block px-4 py-2 bg-brand-orange/20 rounded-full mb-6">
            <span className="text-brand-orange font-semibold">Tech Business</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Transforming Financial Reporting for Multi-Country Tech Business Group
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            From Legacy Excel to Efficient, Data-Driven Decision-Making Across 15 Tech Businesses in 12+ Countries
          </p>
        </motion.div>
      </div>
    </section>
  );
};
