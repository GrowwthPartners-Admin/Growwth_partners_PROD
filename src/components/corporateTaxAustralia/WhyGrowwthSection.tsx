import { useState } from "react";
import { motion } from "framer-motion";
import { Target, DollarSign, Briefcase, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactModal } from "@/components/ui/contact-modal";

const reasons = [
  {
    icon: Target,
    title: "Accuracy First",
    description: "Cross-checks and reconciliations to minimise errors in every filing"
  },
  {
    icon: DollarSign,
    title: "SME-Focused Savings",
    description: "Proactive identification of deductions and concessions available to you"
  },
  {
    icon: Briefcase,
    title: "All-in Finance Partner",
    description: "Bookkeeping, virtual CFO, and corporate tax filing Australia under one roof"
  },
  {
    icon: Headphones,
    title: "Responsive Support",
    description: "Direct access to experienced tax professionals when you need them"
  }
];

export const WhyGrowwthSection = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

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
            Why Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Growwth Partners
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-teal-50 to-emerald-50/50 rounded-xl p-6 border border-[#06C0A9]/10 hover:border-[#06C0A9]/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#06C0A9] to-teal-600 rounded-xl flex items-center justify-center mb-4">
                <reason.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            onClick={() => setContactModalOpen(true)}
            size="lg"
            className="bg-[#06C0A9] hover:bg-[#05a899] text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            Book a Free Tax Consultation
          </Button>
        </motion.div>
      </div>
      <ContactModal open={contactModalOpen} onOpenChange={setContactModalOpen} />
    </section>
  );
};
