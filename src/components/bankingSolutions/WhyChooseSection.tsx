import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Zap, 
  TrendingUp, 
  RefreshCw, 
  Shield, 
  Scale,
  ArrowRight 
} from "lucide-react";
import { ContactModal } from "@/components/ui/contact-modal";

const benefits = [
  {
    icon: Zap,
    title: "Founder-Friendly Setup",
    description: "Get accounts opened quickly with the right features tailored for startups",
    color: "bg-amber-500/10 text-amber-500"
  },
  {
    icon: TrendingUp,
    title: "Payment Flows for Growth",
    description: "Payment flows designed for growth across cards, payouts, and subscriptions",
    color: "bg-green-500/10 text-green-500"
  },
  {
    icon: RefreshCw,
    title: "Automated Reconciliation",
    description: "Keep books accurate with minimal manual work through smart automation",
    color: "bg-blue-500/10 text-blue-500"
  },
  {
    icon: Shield,
    title: "Integrated Controls",
    description: "Approvals, spend limits, and clear documentation built into workflows",
    color: "bg-purple-500/10 text-purple-500"
  },
  {
    icon: Scale,
    title: "Bank-Agnostic Advice",
    description: "Choose partners that fit your model and markets without vendor lock-in",
    color: "bg-brand-orange/10 text-brand-orange"
  }
];

const WhyChooseSection = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-brand-orange/10 text-brand-orange rounded-full text-sm font-semibold mb-4">
            Why Growwth Partners
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Growwth Partners for Startup Banking
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We simplify banking setup so you can focus on building your business
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className={`w-14 h-14 rounded-xl ${benefit.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            size="lg"
            onClick={() => setContactModalOpen(true)}
            className="bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-6 text-lg rounded-xl shadow-lg font-semibold group"
          >
            Speak to a Banking Specialist
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>

      <ContactModal open={contactModalOpen} onOpenChange={setContactModalOpen} />
    </section>
  );
};

export default WhyChooseSection;
