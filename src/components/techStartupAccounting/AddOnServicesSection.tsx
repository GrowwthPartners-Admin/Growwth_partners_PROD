import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Calculator,
  FileSpreadsheet,
  FolderSearch,
  ClipboardList,
  Clock,
  Presentation,
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { ContactModal } from "@/components/ui/contact-modal";
import { useState } from "react";

const addOnServices = [
  {
    icon: Calculator,
    text: "FP&A with scenario modelling for hiring, pricing, and paid growth",
  },
  {
    icon: FileSpreadsheet,
    text: "ESOP accounting and cap table coordination",
  },
  {
    icon: FolderSearch,
    text: "Due diligence data rooms and transaction support",
  },
  {
    icon: ClipboardList,
    text: "Tax and compliance coordination with local regulators",
  },
];

const proofItems = [
  {
    icon: Clock,
    title: "Close cycles cut from weeks to days",
    description: "Streamlined processes that accelerate your financial close",
  },
  {
    icon: Presentation,
    title: "Faster board cycles",
    description: "Consistent KPI definitions and clean trend pages",
  },
  {
    icon: AlertTriangle,
    title: "Fewer last-minute surprises",
    description: "Automated reconciliations and variance alerts",
  },
];

export const AddOnServicesSection = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Add-on Services */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
              Extended Support
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              Add-on Support for Tech Finance
            </h2>

            <div className="space-y-4">
              {addOnServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:border-purple-200 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <service.icon className="w-5 h-5 text-purple-600" />
                  </div>
                  <p className="text-slate-700 font-medium pt-1">
                    {service.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Proof of Impact */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
              Results
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              Proof of Impact
            </h2>

            <div className="space-y-6">
              {proofItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="relative bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-100"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-slate-600">{item.description}</p>
                    </div>
                  </div>
                  <CheckCircle2 className="absolute top-4 right-4 w-6 h-6 text-emerald-500" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-500 font-bold text-white px-8 py-6 transition-all hover:scale-105"
            onClick={() =>
              window.open(
                "https://calendly.com/jd-growwthpartners/15min?month=2025-11",
                "_blank"
              )
            }
          >
            Book a Free Finance Audit
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>

      <ContactModal
        open={isContactModalOpen}
        onOpenChange={setIsContactModalOpen}
      />
    </section>
  );
};
