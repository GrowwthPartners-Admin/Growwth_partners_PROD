import { Button } from "@/components/ui/button";
import { Search, FileEdit, Send, Shield, Rocket, TrendingUp, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { ContactModal } from "@/components/ui/contact-modal";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Discovery & KYC",
    description: "Confirm goals, structure, and collect KYC documents."
  },
  {
    icon: FileEdit,
    step: "02",
    title: "Draft & Review",
    description: "Constitution, shareholder/director details, and initial resolutions."
  },
  {
    icon: Send,
    step: "03",
    title: "File with ACRA",
    description: "Reserve name, file incorporation, receive UEN."
  },
  {
    icon: Shield,
    step: "04",
    title: "Secretary & Statutory Setup",
    description: "Registers, first board minutes, compliance calendar."
  },
  {
    icon: Rocket,
    step: "05",
    title: "Banking & Go-Live",
    description: "Prepare banking pack; align accounting, payroll, and GST."
  },
  {
    icon: TrendingUp,
    step: "06",
    title: "Operate & Scale",
    description: "Add bookkeeping, tax, and ongoing secretarial as the team grows."
  }
];

export const ProcessSection = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-50/50 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-4">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Remote Incorporation,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
              Step by Step
            </span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-300 via-amber-400 to-orange-300 hidden lg:block" />

          <div className="space-y-8 lg:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative lg:flex ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8`}
              >
                {/* Content */}
                <div className={`lg:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'lg:text-right lg:pr-8' : 'lg:text-left lg:pl-8'}`}>
                  <div className={`bg-white p-6 rounded-2xl border border-orange-100 shadow-lg hover:shadow-xl transition-shadow ${index % 2 === 0 ? 'lg:ml-auto' : 'lg:mr-auto'} max-w-md`}>
                    <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl flex items-center justify-center">
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-3xl font-bold text-orange-200">{step.step}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full border-4 border-white shadow-lg" />

                {/* Spacer for alternating layout */}
                <div className="hidden lg:block lg:w-[calc(50%-2rem)]" />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white"
            onClick={() => setContactModalOpen(true)}
          >
            Get Timeline & Fees
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>

      <ContactModal open={contactModalOpen} onOpenChange={setContactModalOpen} />
    </section>
  );
};
