import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Building2, 
  CreditCard, 
  Wallet, 
  RefreshCw, 
  BarChart3,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { ContactModal } from "@/components/ui/contact-modal";

const services = [
  {
    icon: Building2,
    number: "01",
    title: "Bank Selection and Account Opening",
    description: "Shortlist banks that match your needs: multi-currency, low fees, fast onboarding, API access, virtual cards. Prepare KYC packs and board documents so opening is straightforward.",
    features: ["Multi-currency accounts", "Low fee structures", "Fast onboarding", "API access"]
  },
  {
    icon: CreditCard,
    number: "02",
    title: "Payment Rails and Gateways",
    description: "Set up domestic and cross-border transfers, cards, and payouts. Configure gateways such as Stripe and PayPal so settlements match your ledger.",
    features: ["Cross-border transfers", "Gateway configuration", "Settlement matching", "Card payments"]
  },
  {
    icon: Wallet,
    number: "03",
    title: "Spend Management and Cards",
    description: "Issue physical and virtual cards with smart limits and policies. Route spend by team or project and keep approvals simple.",
    features: ["Virtual cards", "Smart spend limits", "Team-based routing", "Simple approvals"]
  },
  {
    icon: RefreshCw,
    number: "04",
    title: "Automated Reconciliation",
    description: "Connect banking feeds to accounting. Map fees, refunds, chargebacks, and settlements so month-end is predictable and clean.",
    features: ["Banking feed sync", "Fee mapping", "Chargeback handling", "Clean month-end"]
  },
  {
    icon: BarChart3,
    number: "05",
    title: "Cash Flow Views and Alerts",
    description: "Always-on cash positions, upcoming liabilities, and simple alerts for balance thresholds. Share concise views with leadership.",
    features: ["Real-time cash view", "Liability tracking", "Balance alerts", "Leadership reports"]
  }
];

const WhatYouGetSection = () => {
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
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-brand-blue rounded-full text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What You Get
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive banking setup and management services designed for growth
          </p>
        </motion.div>

        <div className="space-y-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-gradient-to-r from-gray-50 to-white rounded-2xl p-6 md:p-8 border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-orange/20 to-amber-500/10 flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-brand-orange" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-brand-blue text-white text-sm font-bold flex items-center justify-center">
                      {service.number}
                    </span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            onClick={() => setContactModalOpen(true)}
            className="bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-6 text-lg rounded-xl shadow-lg font-semibold group"
          >
            Request a Systems and Payments Review
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>

      <ContactModal open={contactModalOpen} onOpenChange={setContactModalOpen} />
    </section>
  );
};

export default WhatYouGetSection;
