import { motion } from "framer-motion";
import { Shield, BookOpen, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCountry } from "@/contexts/CountryContext";

export const BroaderSupportSection = () => {
  const navigate = useNavigate();
  const { getCountryUrl } = useCountry();

  const services = [
    {
      icon: Shield,
      title: "Corporate Secretary and Compliance",
      description: "Governance support and ongoing compliance suitable for Australian entities.",
      path: "/corporate-secretary"
    },
    {
      icon: BookOpen,
      title: "Bookkeeping and Finance Operations",
      description: "Accurate books, monthly closes, and management reporting so leaders can focus on decisions.",
      path: "/bookkeeping"
    },
    {
      icon: Search,
      title: "Due Diligence and Transaction Support",
      description: "Preparation for fundraising, acquisitions, and expansions with clean documentation and clear metrics.",
      path: "/contact-us"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-teal-50/30 to-blue-50/40">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Explore Our <span className="text-teal-600">Broader Support</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => navigate(getCountryUrl(service.path))}
              className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-teal-100/50 cursor-pointer border-teal-300"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-teal-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
