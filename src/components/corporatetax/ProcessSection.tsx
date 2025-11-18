import { motion } from "framer-motion";
import { Search, Calculator, FileCheck, MessageSquare, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ContactModal } from "@/components/ui/contact-modal";

export const ProcessSection = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const steps = [
    {
      icon: Search,
      step: "Step 1",
      title: "Initial Tax Review",
      description: "We review your latest financial statements, prior tax filings, and current business structure to understand your position."
    },
    {
      icon: Calculator,
      step: "Step 2",
      title: "Tax Computation and Planning",
      description: "Growwth Partners prepares your tax computation, identifies allowable deductions, and highlights opportunities for optimisation."
    },
    {
      icon: FileCheck,
      step: "Step 3",
      title: "IRAS Corporate Tax Filing",
      description: "We handle the full corporate tax filing in Singapore process, including Form C / Form C-S preparation and e-filing with IRAS."
    },
    {
      icon: MessageSquare,
      step: "Step 4",
      title: "Clarifications and Support",
      description: "If IRAS requests clarifications or additional documents, Growwth Partners prepares responses and manages communication."
    },
    {
      icon: TrendingUp,
      step: "Step 5",
      title: "Ongoing Advisory",
      description: "We advise you on how upcoming decisions, investments, or restructuring will impact future tax so you can plan ahead."
    }
  ];

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-blue-100 text-brand-blue rounded-full text-sm font-semibold mb-4">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              How Our Corporate Tax Filing Process Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Clear, simple, and structured.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6 mb-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-blue-600 rounded-lg flex items-center justify-center">
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-orange-100 text-brand-orange rounded-full text-sm font-semibold">
                        {step.step}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
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
            className="text-center"
          >
            <Button
              size="lg"
              onClick={() => setContactModalOpen(true)}
              className="bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-lg"
            >
              Start Your Corporate Tax Filing
            </Button>
          </motion.div>
        </div>
      </section>

      <ContactModal
        open={contactModalOpen}
        onOpenChange={setContactModalOpen}
      />
    </>
  );
};
