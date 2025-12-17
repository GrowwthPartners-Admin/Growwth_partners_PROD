import { Button } from "@/components/ui/button";
import { Plane, Briefcase, Globe, Info, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { ContactModal } from "@/components/ui/contact-modal";

const visaOptions = [
  {
    icon: Briefcase,
    title: "Employment Pass (EP)",
    description: "Incorporate first, then apply to work for the company in Singapore",
    color: "from-orange-500 to-amber-500"
  },
  {
    icon: Plane,
    title: "EntrePass",
    description: "For innovative, venture-backed or IP-driven ventures meeting specific criteria",
    color: "from-amber-500 to-orange-500"
  },
  {
    icon: Globe,
    title: "Operating from overseas",
    description: "Possible to own and direct, but working in Singapore requires a valid pass",
    color: "from-orange-400 to-amber-400"
  }
];

export const VisaSection = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

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
            Immigration Options
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Visa & Relocation Options{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
              (High-Level)
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {visaOptions.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${option.color} rounded-2xl opacity-5 group-hover:opacity-10 transition-opacity`} />
              <div className="relative bg-white p-8 rounded-2xl border border-orange-100 hover:border-orange-300 transition-all h-full shadow-sm hover:shadow-lg">
                <div className={`w-16 h-16 bg-gradient-to-r ${option.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <option.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{option.title}</h3>
                <p className="text-gray-600">{option.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-6 flex items-start gap-4 max-w-3xl mx-auto"
        >
          <Info className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" />
          <p className="text-gray-700">
            <strong>Note:</strong> Growwth Partners provides guidance and documentation support. Final visa decisions rest with authorities.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white"
            onClick={() => setContactModalOpen(true)}
          >
            Plan Your EP/EntrePass Path
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>

      <ContactModal open={contactModalOpen} onOpenChange={setContactModalOpen} />
    </section>
  );
};
