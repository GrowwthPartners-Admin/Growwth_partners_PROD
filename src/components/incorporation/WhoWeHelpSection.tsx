import React from "react";
import { motion } from "framer-motion";
import { User, Rocket, Building, Users } from "lucide-react";

export const WhoWeHelpSection = () => {
  const clients = [
    {
      icon: User,
      title: "First-time founders",
      description: "Solo entrepreneurs starting their business journey"
    },
    {
      icon: Rocket,
      title: "Startups",
      description: "Registering holding and operating entities"
    },
    {
      icon: Building,
      title: "SMEs",
      description: "Relocating or expanding into Singapore"
    },
    {
      icon: Users,
      title: "Investor-backed teams",
      description: "Needing clean governance from day one"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-4">
            Our Clients
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Who We Help
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From solo founders to investor-backed teams
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-orange-100 to-orange-100 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <client.icon className="w-10 h-10 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{client.title}</h3>
              <p className="text-gray-600">{client.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelpSection;
