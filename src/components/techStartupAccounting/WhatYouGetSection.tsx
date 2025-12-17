import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  LineChart,
  FileCheck,
  BookOpen,
  Wallet,
  Presentation,
  ArrowRight,
} from "lucide-react";
import { ContactModal } from "@/components/ui/contact-modal";
import { useState } from "react";

const offerings = [
  {
    icon: LineChart,
    title: "SaaS Metrics and Performance Reporting",
    description:
      "Always-on views of MRR and ARR, cohort trends, NRR, gross margin by plan, and growth levers. Rollups match what investors expect to see.",
    color: "indigo",
  },
  {
    icon: FileCheck,
    title: "Revenue Recognition Done Right",
    description:
      "Policies and workflows aligned to your model. Monthly subscriptions, annual prepay, usage-based or milestones. Clean cut-offs, deferrals, and clear audit trails.",
    color: "purple",
  },
  {
    icon: BookOpen,
    title: "Tech Company Bookkeeping",
    description:
      "Tight coding and reconciliations with documentation that stands up in review. Payables, receivables, and expenses designed for fast product cycles.",
    color: "cyan",
  },
  {
    icon: Wallet,
    title: "Startup Financial Management",
    description:
      "Cash runway tracking, spend controls, budget vs actuals, and headcount tracking tied to hiring plans. Lightweight playbooks that your team will actually follow.",
    color: "emerald",
  },
  {
    icon: Presentation,
    title: "Board and Diligence Packs",
    description:
      "Crisp KPI pages, variance analysis, and narrative that explains what changed and why. Built for founder updates, board meetings, and data rooms.",
    color: "orange",
  },
];

// Updated color classes for Light Mode Gradients
const colorClasses = {
  indigo: {
    cardGradient: "bg-gradient-to-br from-indigo-50 to-white",
    iconBg: "bg-indigo-100",
    text: "text-indigo-600",
    borderHover: "group-hover:border-indigo-200",
  },
  purple: {
    cardGradient: "bg-gradient-to-br from-purple-50 to-white",
    iconBg: "bg-purple-100",
    text: "text-purple-600",
    borderHover: "group-hover:border-purple-200",
  },
  cyan: {
    cardGradient: "bg-gradient-to-br from-cyan-50 to-white",
    iconBg: "bg-cyan-100",
    text: "text-cyan-600",
    borderHover: "group-hover:border-cyan-200",
  },
  emerald: {
    cardGradient: "bg-gradient-to-br from-emerald-50 to-white",
    iconBg: "bg-emerald-100",
    text: "text-emerald-600",
    borderHover: "group-hover:border-emerald-200",
  },
  orange: {
    cardGradient: "bg-gradient-to-br from-orange-50 to-white",
    iconBg: "bg-orange-100",
    text: "text-orange-600",
    borderHover: "group-hover:border-orange-200",
  },
};

export const WhatYouGetSection = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-indigo-50/50 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-50/50 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-slate-100 text-slate-600 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-slate-200">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            What You Get
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-600">
            Comprehensive financial operations designed for scale, transparency,
            and investor confidence.
          </p>
        </motion.div>

        {/* First row: 3 cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
          {offerings.slice(0, 3).map((offering, index) => {
            const colors =
              colorClasses[offering.color as keyof typeof colorClasses];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`
                  w-full max-w-md mx-auto
                  relative group p-8 rounded-3xl
                  ${colors.cardGradient}
                  border border-slate-100 ${colors.borderHover}
                  shadow hover:shadow-xl hover:-translate-y-1
                  transition-all duration-300
                `}
              >
                <div
                  className={`
                    inline-flex items-center justify-center w-14 h-14 rounded-2xl
                    ${colors.iconBg} mb-6
                    group-hover:scale-110 transition-transform duration-300
                  `}
                >
                  <offering.icon className={`w-7 h-7 ${colors.text}`} />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-900 transition-colors">
                  {offering.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-[15px]">
                  {offering.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Second row: 2 cards centered */}
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-center gap-6 mb-16">
          {offerings.slice(3).map((offering, index) => {
            const colors =
              colorClasses[offering.color as keyof typeof colorClasses];

            return (
              <motion.div
                key={index + 3}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
                viewport={{ once: true }}
                className={`
                  w-full max-w-md mx-auto
                  relative group p-8 rounded-3xl
                  ${colors.cardGradient}
                  border border-slate-100 ${colors.borderHover}
                  shadow hover:shadow-xl hover:-translate-y-1
                  transition-all duration-300
                `}
              >
                <div
                  className={`
                    inline-flex items-center justify-center w-14 h-14 rounded-2xl
                    ${colors.iconBg} mb-6
                    group-hover:scale-110 transition-transform duration-300
                  `}
                >
                  <offering.icon className={`w-7 h-7 ${colors.text}`} />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-900 transition-colors">
                  {offering.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-[15px]">
                  {offering.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 rounded-xl font-bold shadow-lg shadow-indigo-200 transition-transform hover:scale-105"
            onClick={() => setIsContactModalOpen(true)}
          >
            Request a Sample Monthly Pack
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
