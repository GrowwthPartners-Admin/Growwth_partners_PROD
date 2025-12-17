import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Rocket,
  BarChart3,
  Bot,
  TrendingUp,
  Shield,
  ArrowRight,
} from "lucide-react";
import { ContactModal } from "@/components/ui/contact-modal";
import { useState } from "react";

const reasons = [
  {
    icon: Rocket,
    title: "Founder DNA in SaaS and fintech",
    description:
      "Led by Jatin Detwani, Growwth Partners brings real-world operating experience. Your accounting is designed to support product, growth, and fundraising, not slow them down.",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    icon: BarChart3,
    title: "SaaS-native metrics and revenue rules",
    description:
      "MRR, ARR, NRR, churn, CAC, LTV, payback, expansion and contraction are standard. Subscription, usage or hybrid revenue models get the right recognition policy and clean deferrals.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Bot,
    title: "AI-enabled, human-led operations",
    description:
      "With Ryzup.ai, the team automates error checks, reconciliations, and reporting inside your spreadsheets and accounting stack. Your reviewers get to focus on analysis, not manual fixes.",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: TrendingUp,
    title: "Investor-ready by default",
    description:
      "Monthly packs carry clear commentary, variance drivers, and scenario notes. When you raise, diligence pulls from well-structured workpapers and consistent metric definitions.",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: Shield,
    title: "Scalable controls from seed to Series B+",
    description:
      "Close calendars, review steps, and documentation scale as you add entities, currencies, and teams.",
    gradient: "from-orange-500 to-amber-500",
  },
];

export const WhyChooseSection = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Why Tech Teams Choose{" "}
            <span className="text-indigo-600">Growwth Partners</span>
          </h2>
        </motion.div>

        {/* First row – 3 cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-10">
          {reasons.slice(0, 3).map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="w-full max-w-md mx-auto group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100"
            >
              <div
                className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r ${reason.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <reason.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {reason.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Second row – 2 cards centered */}
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-center gap-8 mb-12">
          {reasons.slice(3).map((reason, index) => (
            <motion.div
              key={index + 3}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
              viewport={{ once: true }}
              className="w-full max-w-md mx-auto group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100"
            >
              <div
                className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r ${reason.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <reason.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {reason.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>

      <ContactModal
        open={isContactModalOpen}
        onOpenChange={setIsContactModalOpen}
      />
    </section>
  );
};
