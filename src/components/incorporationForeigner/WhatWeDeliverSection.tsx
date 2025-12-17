import { Button } from "@/components/ui/button";
import { MessageSquare, FileText, Shield, Building, ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { ContactModal } from "@/components/ui/contact-modal";

const deliverables = [
  {
    icon: MessageSquare,
    title: "Pre-Incorporation Advisory",
    items: [
      "Best-fit structure, shareholding, and governance",
      "Director and secretary options for foreign founders",
      "Name availability and SSIC scoping"
    ]
  },
  {
    icon: FileText,
    title: "Document Preparation & ACRA Filing",
    items: [
      "Constitution, resolutions, and KYC",
      "Name reservation and incorporation",
      "UEN issuance coordination"
    ]
  },
  {
    icon: Shield,
    title: "Company Secretary & Registers",
    items: [
      "Statutory registers and minute books",
      "First board meeting documentation",
      "Annual compliance calendar"
    ]
  },
  {
    icon: Building,
    title: "Banking & Post-Launch Essentials",
    items: [
      "Bank account documentation pack and intros",
      "Accounting system setup and chart of accounts",
      "Payroll, GST readiness, and basic policies"
    ]
  }
];

export const WhatWeDeliverSection = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Growwth Partners{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">
              Delivers
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {deliverables.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-orange-500/30 transition-all"
            >
              <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl flex items-center justify-center mb-6">
                <item.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
              <ul className="space-y-3">
                {item.items.map((listItem) => (
                  <li key={listItem} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{listItem}</span>
                  </li>
                ))}
              </ul>
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
            Start Your Incorporation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>

      <ContactModal open={contactModalOpen} onOpenChange={setContactModalOpen} />
    </section>
  );
};
