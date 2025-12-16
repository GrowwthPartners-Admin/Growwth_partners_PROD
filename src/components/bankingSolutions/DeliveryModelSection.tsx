import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  PenTool, 
  Settings, 
  PlayCircle, 
  TrendingUp,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { ContactModal } from "@/components/ui/contact-modal";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Assess",
    description: "Map revenue model, payment flows, currencies, and compliance needs.",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: PenTool,
    step: "02",
    title: "Design",
    description: "Choose banking partners, payment rails, card policies, and reconciliation logic.",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: Settings,
    step: "03",
    title: "Implement",
    description: "Prepare KYC documents, open accounts, configure gateways, connect feeds.",
    color: "from-brand-orange to-amber-500"
  },
  {
    icon: PlayCircle,
    step: "04",
    title: "Run",
    description: "Train your team, automate reconciliation, monitor exceptions, and report cash.",
    color: "from-green-500 to-green-600"
  },
  {
    icon: TrendingUp,
    step: "05",
    title: "Improve",
    description: "Add entities, cards, and rules as you scale. Refresh limits and controls regularly.",
    color: "from-cyan-500 to-cyan-600"
  }
];

const DeliveryModelSection = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Delivery Model
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A structured approach to get your banking infrastructure right from day one
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-brand-orange to-green-500 rounded-full" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                {/* Step card */}
                <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 relative z-10">
                  {/* Icon with gradient */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Step number */}
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                    <span className="text-sm font-bold text-gray-600">{step.step}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector dot for timeline */}
                <div className="hidden lg:block absolute top-[96px] left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-brand-orange z-20" />
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
            onClick={() => setContactModalOpen(true)}
            className="bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-6 text-lg rounded-xl shadow-lg font-semibold group"
          >
            Start Your Banking Setup
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>

      <ContactModal open={contactModalOpen} onOpenChange={setContactModalOpen} />
    </section>
  );
};

export default DeliveryModelSection;
