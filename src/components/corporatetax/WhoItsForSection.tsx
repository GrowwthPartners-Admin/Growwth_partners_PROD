import { motion } from "framer-motion";
import { Building2, Rocket, Users2, Briefcase } from "lucide-react";

export const WhoItsForSection = () => {
  const audiences = [
    {
      icon: Building2,
      title: "Private Limited Companies (Pte Ltd)",
      description: "Growing companies that want clean, compliant tax filings and better visibility on their effective tax rate."
    },
    {
      icon: Rocket,
      title: "Startups and High Growth Companies",
      description: "Venture backed or fast growing startups that need tax done right, aligned with accounting and investor expectations."
    },
    {
      icon: Users2,
      title: "SMEs and Family Businesses",
      description: "Established businesses that want to avoid IRAS penalties, reduce manual work, and get practical tax saving guidance."
    },
    {
      icon: Briefcase,
      title: "Holding Companies and Investment Structures",
      description: "Groups or holding entities that need coordinated corporate tax filing in Singapore support across multiple entities."
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
          <span className="inline-block px-4 py-2 bg-orange-100 text-brand-orange rounded-full text-sm font-semibold mb-4">
            Who We Serve
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Who Our Corporate Tax Services in Singapore Are For
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Growwth Partners supports a wide range of businesses that need reliable corporate tax 
            services in Singapore without building a large internal finance team.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-8 border border-blue-100 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-brand-blue rounded-lg flex items-center justify-center flex-shrink-0">
                  <audience.icon className="h-7 w-7 text-white" />
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {audience.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {audience.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-blue-100 to-orange-100 rounded-2xl p-8"
        >
          <p className="text-lg font-semibold text-gray-900">
            If you operate in Singapore and want tax handled properly, Growwth Partners can step in as your dedicated tax partner.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
