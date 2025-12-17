import { User, Rocket, Building, Globe } from "lucide-react";
import { motion } from "framer-motion";

const audiences = [
  {
    icon: User,
    title: "Solo founders",
    description: "Incorporating a Pte. Ltd. from overseas"
  },
  {
    icon: Rocket,
    title: "Venture-backed teams",
    description: "Planning a Singapore HQ or holding company"
  },
  {
    icon: Building,
    title: "SMEs",
    description: "Relocating management or sales into Singapore"
  },
  {
    icon: Globe,
    title: "Multi-entity groups",
    description: "Needing clean governance from day one"
  }
];

export const WhoWeHelpSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-4">
            Our Clients
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Who This Is{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
              For
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group text-center p-8 bg-gradient-to-br from-orange-50/50 to-amber-50/50 rounded-2xl border border-orange-100 hover:shadow-xl hover:shadow-orange-100/50 transition-all"
            >
              <div className="w-16 h-16 mx-auto bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <audience.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{audience.title}</h3>
              <p className="text-gray-600">{audience.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
