import { motion } from "framer-motion";
import { Shield, Target, Lightbulb, Layers, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ContactModal } from "@/components/ui/contact-modal";

const ReasonCard = ({ reason, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="text-center"
  >
    <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
      <reason.icon className="h-8 w-8 text-white" />
    </div>
    
    <h3 className="text-xl font-bold text-gray-900 mb-4">
      {reason.title}
    </h3>
    
    <p className="text-gray-600 leading-relaxed">
      {reason.description}
    </p>
  </motion.div>
);

export const WhyChooseSection = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const reasons = [
    {
      icon: Shield,
      title: "IRAS Focused Compliance",
      description:
        "Growwth Partners stays updated on IRAS guidelines so your corporate tax services in Singapore are always aligned with the latest requirements.",
    },
    {
      icon: Target,
      title: "Accuracy First",
      description:
        "We cross check financials and tax computations to minimise errors, reduce the risk of queries, and protect you from avoidable penalties.",
    },
    {
      icon: Lightbulb,
      title: "Tax Saving Mindset",
      description:
        "Compliance is the baseline. Growwth Partners also looks for legitimate ways to reduce your tax liability through available schemes and reliefs.",
    },
    {
      icon: Layers,
      title: "End to End Finance Partner",
      description:
        "Growwth Partners provides virtual CFO, accounting, and advisory, viewing Singapore tax as integrated finance",
    },
    {
      icon: MessageCircle,
      title: "Responsive, Clear Communication",
      description:
        "You get direct access to experienced professionals who explain complex tax issues in clear, practical language.",
    },
  ];

  return (
    <>
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-orange-100 text-brand-orange rounded-full text-sm font-semibold mb-4">
              Why Growwth Partners
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Growwth Partners For Corporate Tax Filing in Singapore
            </h2>
          </motion.div>

          {/* First row: 3 items */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {reasons.slice(0, 3).map((reason, index) => (
              <ReasonCard key={reason.title} reason={reason} index={index} />
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-evenly mb-12">
            {reasons.slice(3).map((reason, index) => (
              <div key={reason.title} className="w-full max-w-sm">
                <ReasonCard reason={reason} index={index + 3} />
              </div>
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
              Book a Free Tax Consultation
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
