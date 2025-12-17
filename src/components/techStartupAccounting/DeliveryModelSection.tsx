import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  Pencil, 
  Settings, 
  Play, 
  TrendingUp,
  ArrowRight
} from "lucide-react";
import { ContactModal } from "@/components/ui/contact-modal";
import { useState } from "react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Assess",
    description: "Map billing flows, revenue policy, metric definitions, and current books.",
    color: "indigo"
  },
  {
    number: "02",
    icon: Pencil,
    title: "Design",
    description: "Lock chart of accounts, recognition rules, KPI framework, and close cadence.",
    color: "purple"
  },
  {
    number: "03",
    icon: Settings,
    title: "Implement",
    description: "Set up workflows, automations, reconciliations, and reporting templates.",
    color: "cyan"
  },
  {
    number: "04",
    icon: Play,
    title: "Run",
    description: "Execute the monthly close, issue packs, and maintain controls with Ryzup.ai checks.",
    color: "emerald"
  },
  {
    number: "05",
    icon: TrendingUp,
    title: "Improve",
    description: "Add metrics, accelerate close steps, and support fundraising or audit prep.",
    color: "orange"
  }
];

const colorClasses = {
  indigo: { bg: "bg-indigo-500", border: "border-indigo-500", text: "text-indigo-500" },
  purple: { bg: "bg-purple-500", border: "border-purple-500", text: "text-purple-500" },
  cyan: { bg: "bg-cyan-500", border: "border-cyan-500", text: "text-cyan-500" },
  emerald: { bg: "bg-emerald-500", border: "border-emerald-500", text: "text-emerald-500" },
  orange: { bg: "bg-orange-500", border: "border-orange-500", text: "text-orange-500" }
};

export const DeliveryModelSection = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold mb-4">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Our Delivery Model
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            A structured approach that takes you from assessment to continuous improvement
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-orange-500 transform -translate-y-1/2 rounded-full" />

          <div className="grid lg:grid-cols-5 gap-8">
            {steps.map((step, index) => {
              const colors = colorClasses[step.color as keyof typeof colorClasses];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="flex flex-col items-center text-center">
                    {/* Step number circle */}
                    <div className={`relative z-10 w-20 h-20 ${colors.bg} rounded-full flex items-center justify-center shadow-lg mb-6`}>
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                    
                    {/* Step number badge */}
                    <div className={`absolute top-0 right-1/2 transform translate-x-12 -translate-y-2 w-8 h-8 ${colors.bg} rounded-full flex items-center justify-center text-white text-sm font-bold shadow-md`}>
                      {step.number}
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8"
            onClick={() => setIsContactModalOpen(true)}
          >
            Start Your Accounting Setup
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
