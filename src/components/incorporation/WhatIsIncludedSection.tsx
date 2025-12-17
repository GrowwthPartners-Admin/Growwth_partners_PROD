import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  FileSearch, 
  FileText, 
  ClipboardList, 
  Briefcase,
  CheckCircle,
  ArrowRight 
} from "lucide-react";
import { ContactModal } from "@/components/ui/contact-modal";

export const WhatIsIncludedSection = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const services = [
    {
      icon: FileSearch,
      title: "Pre-Incorporation Advisory",
      items: [
        "Entity selection and share structure",
        "Director, shareholder, and secretary requirements",
        "Registered office and business activity codes"
      ]
    },
    {
      icon: FileText,
      title: "Document Preparation and Filing",
      items: [
        "Name reservation",
        "Constitution drafting",
        "ACRA submission and company registration",
        "UEN issuance coordination"
      ]
    },
    {
      icon: ClipboardList,
      title: "Corporate Secretary Setup",
      items: [
        "Statutory registers and minute books",
        "First board resolutions and share issuance",
        "Annual compliance calendar"
      ]
    },
    {
      icon: Briefcase,
      title: "Post-Incorporation Essentials",
      items: [
        "Bank account support documentation",
        "Accounting, payroll, and GST readiness",
        "Basic policies and templates for operations"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-4">
            Full Package
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Is Included
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive incorporation services from start to finish
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 pt-2">{service.title}</h3>
              </div>
              <ul className="space-y-3">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            onClick={() => setContactModalOpen(true)}
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-lg shadow-lg text-white px-8 py-6 font-bold transition-all hover:scale-105"
          >
            Request a Scope and Timeline
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>

      <ContactModal open={contactModalOpen} onOpenChange={setContactModalOpen} />
    </section>
  );
};

export default WhatIsIncludedSection;