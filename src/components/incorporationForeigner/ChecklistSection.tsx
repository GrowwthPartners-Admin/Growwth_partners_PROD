import { Button } from "@/components/ui/button";
import { FileCheck, Download, CheckSquare } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { ContactModal } from "@/components/ui/contact-modal";

const checklistItems = [
  "Passport copies and proof of address for all foreign directors/shareholders",
  "Proposed company name and business activities (SSIC)",
  "Local registered office details",
  "Share capital, cap table, and officer appointments",
  "KYC for corporate shareholders (if any)"
];

export const ChecklistSection = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 via-amber-50/30 to-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-4">
              Preparation
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Requirements Checklist{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
                (Snapshot)
              </span>
            </h2>
            <p className="text-gray-600 mb-8">
              Ensure you have these documents ready before starting your Singapore company incorporation journey.
            </p>

            <div className="space-y-4">
              {checklistItems.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 p-4 bg-white rounded-xl border border-orange-100 shadow-sm"
                >
                  <CheckSquare className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </motion.div>
              ))}
            </div>

            <Button
              size="lg"
              className="mt-8 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white"
              onClick={() => setContactModalOpen(true)}
            >
              <Download className="mr-2 w-5 h-5" />
              Download the Full Checklist
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-amber-400 rounded-3xl transform rotate-3 opacity-20" />
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-orange-100">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center">
                  <FileCheck className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Document Checklist</h3>
                  <p className="text-gray-600">Essential requirements</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {["Identity Documents", "Business Details", "Office Address", "Shareholding Info", "Corporate KYC"].map((item, i) => (
                  <div key={item} className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                    <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg flex items-center justify-center text-white font-semibold text-sm">
                      {i + 1}
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <ContactModal open={contactModalOpen} onOpenChange={setContactModalOpen} />
    </section>
  );
};
