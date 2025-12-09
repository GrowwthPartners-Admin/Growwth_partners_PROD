import { motion } from "framer-motion";
import { Rocket, Building2, Layers, TrendingUp } from "lucide-react";

const audiences = [
  {
    icon: Rocket,
    title: "Startups and Scale-ups",
    description: "Clean, credible ATO lodgements that build investor confidence"
  },
  {
    icon: Building2,
    title: "SMEs and Family Businesses",
    description: "Reliable corporate tax filing in Australia without building a large internal team"
  },
  {
    icon: Layers,
    title: "Multi-entity Groups",
    description: "Coordinated filings and consolidated reporting across your business structure"
  },
  {
    icon: TrendingUp,
    title: "Investor-backed Companies",
    description: "Diligence-ready financials and tax position year round"
  }
];

export const WhoWeHelpSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 bg-[#06C0A9]/10 text-[#06C0A9] rounded-full text-sm font-semibold mb-4">
            Who We Serve
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Who We Help
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#06C0A9]/10 to-teal-100/50 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <audience.icon className="w-10 h-10 text-[#06C0A9]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{audience.title}</h3>
              <p className="text-gray-600">{audience.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
