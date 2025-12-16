import { motion } from "framer-motion";
import { 
  Rocket, 
  Building2, 
  Globe2, 
  Layers 
} from "lucide-react";

const features = [
  {
    icon: Rocket,
    title: "Banking for New Businesses",
    description: "Banking for new businesses that need speed, clarity, and low overhead"
  },
  {
    icon: Building2,
    title: "Startup Banking Services",
    description: "Startup banking services that work with subscription or marketplace models"
  },
  {
    icon: Globe2,
    title: "SME Banking Setup",
    description: "SME banking setup for single-entity or multi-entity groups, with multi-currency options"
  },
  {
    icon: Layers,
    title: "Digital Banking Solutions",
    description: "Digital banking solutions that plug into Xero or QuickBooks without heavy custom work"
  }
];

const BuiltForSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-white/10 text-white rounded-full text-sm font-semibold mb-4 backdrop-blur-sm">
            Built For You
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Built for Startups and SMEs
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Solutions designed specifically for the unique needs of growing businesses
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-orange/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-brand-orange" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BuiltForSection;
