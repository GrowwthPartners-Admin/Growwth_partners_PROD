import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  FileEdit, 
  Building2, 
  Settings, 
  Rocket, 
  TrendingUp,
  ArrowRight
} from "lucide-react";
import { ContactModal } from "@/components/ui/contact-modal";

export const ProcessSection = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const steps = [
    {
      icon: Search,
      step: "01",
      title: "Discovery",
      description: "Clarify goals, investors, and operating model. Confirm the best structure."
    },
    {
      icon: FileEdit,
      step: "02",
      title: "Prepare",
      description: "Collect KYC documents, draft constitution and initial resolutions."
    },
    {
      icon: Building2,
      step: "03",
      title: "Register",
      description: "Reserve name and submit ACRA filings. Receive UEN on approval."
    },
    {
      icon: Settings,
      step: "04",
      title: "Set Up",
      description: "Activate company secretary, statutory registers, and compliance calendar."
    },
    {
      icon: Rocket,
      step: "05",
      title: "Launch",
      description: "Support bank account documentation and operational kick-off."
    },
    {
      icon: TrendingUp,
      step: "06",
      title: "Operate",
      description: "Add bookkeeping, payroll, GST, tax, and ongoing secretarial as you grow."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 via-amber-50 to-white relative overflow-hidden">
      {/* Background decoration - Warm Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-200/20 via-transparent to-transparent" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-amber-200/20 via-transparent to-transparent" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-white border border-orange-200 text-orange-600 rounded-full text-sm font-semibold mb-4 shadow-sm">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Simple, Transparent Process
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From discovery to operation in clear, defined steps
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="bg-white rounded-2xl p-8 h-full border border-orange-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center shadow-lg shadow-orange-100">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-4xl font-bold text-orange-100 group-hover:text-orange-200 transition-colors">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
              
              {/* Connector line for desktop - adjusted for light theme */}
              {index < steps.length - 1 && index !== 2 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-orange-300/50 to-transparent z-0" />
              )}
            </motion.div>
          ))}
        </div>

      </div>

      <ContactModal open={contactModalOpen} onOpenChange={setContactModalOpen} />
    </section>
  );
};

export default ProcessSection;
