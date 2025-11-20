import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export const SimplifiedSection = () => {
  const outcomes = [
    "Clean, accurate tax computations",
    "Stress free IRAS filing and communication",
    "Clear understanding of what you can legally save",
    "Full visibility on your company's tax position"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
                alt="Tax filing made simple"
                className="w-full h-[450px] object-cover"
              />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-orange-100 text-brand-orange rounded-full text-sm font-semibold mb-4">
              Why Choose Us
            </span>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Corporate Tax Filing Made Simple For Singapore Businesses
            </h2>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Corporate tax in Singapore should not be a guessing game.
            </p>
            
            <p className="text-base text-gray-600 mb-6 leading-relaxed">
              Between IRAS deadlines, changing regulations, and complex structures, many businesses 
              spend hours worrying if everything is filed correctly. A missed detail can lead to 
              penalties, audits, or overpaying tax.
            </p>
            
            <p className="text-base text-gray-600 mb-8 leading-relaxed">
              Growwth Partners: Accurate computation, error-free submission, and proactive planning for Singapore corporate tax, letting you focus on growth.
            </p>

            <div className="space-y-4">
              <p className="font-semibold text-gray-900 mb-4">Key outcomes:</p>
              {outcomes.map((outcome, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">{outcome}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
