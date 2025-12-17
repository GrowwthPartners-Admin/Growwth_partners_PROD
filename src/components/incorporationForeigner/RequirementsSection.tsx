import { Button } from "@/components/ui/button";
import { Building2, Users, UserCheck, Briefcase, MapPin, DollarSign, FileText, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { ContactModal } from "@/components/ui/contact-modal";

const requirements = [
  {
    icon: Building2,
    title: "Company structure",
    description: "Most founders choose a Private Limited (Pte. Ltd.)"
  },
  {
    icon: UserCheck,
    title: "At least one local director",
    description: "A Singapore citizen/PR or EP holder ordinarily resident in Singapore"
  },
  {
    icon: Users,
    title: "Shareholders",
    description: "1–50 (100% foreign ownership allowed)"
  },
  {
    icon: Briefcase,
    title: "Company secretary",
    description: "Must be appointed within 6 months of incorporation"
  },
  {
    icon: MapPin,
    title: "Registered office address",
    description: "Physical local address (no P.O. boxes)"
  },
  {
    icon: DollarSign,
    title: "Paid-up capital",
    description: "From S$1 (often higher for banking/visas)"
  },
  {
    icon: FileText,
    title: "SSIC business activity code",
    description: "For filings and compliance"
  }
];

export const RequirementsSection = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-4">
            Requirements
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What's Required to Register as a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
              Foreigner
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {requirements.map((req, index) => (
            <motion.div
              key={req.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-amber-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
              <div className="relative bg-white p-6 rounded-2xl border border-orange-100 hover:border-orange-300 transition-all h-full">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-100 to-amber-100 rounded-xl flex items-center justify-center mb-4">
                  <req.icon className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{req.title}</h3>
                <p className="text-sm text-gray-600">{req.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white"
            onClick={() => setContactModalOpen(true)}
          >
            Request a Custom Eligibility Review
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>

      <ContactModal open={contactModalOpen} onOpenChange={setContactModalOpen} />
    </section>
  );
};
