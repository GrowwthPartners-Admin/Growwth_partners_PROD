
import { motion } from "framer-motion";
import { Award } from "lucide-react";

export const AchievementsHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-brand-dark via-brand-dark/95 to-brand-dark/90 text-white py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-orange/10 via-transparent to-transparent"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand-orange/20 mb-6"
          >
            <Award className="w-10 h-10 text-brand-orange" />
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Independent recognition for fractional CFO <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-yellow-500">excellence</span> , <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-yellow-500">innovation</span>, and leadership across <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-orange-500">APAC</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Our work is measured by outcomes for clients first. The awards below reflect that impact being recognised by respected industry platforms.
          </p>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-orange to-transparent"></div>
    </section>
  );
};
