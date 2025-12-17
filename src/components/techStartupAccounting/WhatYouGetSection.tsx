import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  LineChart, 
  FileCheck, 
  BookOpen, 
  Wallet, 
  Presentation,
  ArrowRight
} from "lucide-react";
import { ContactModal } from "@/components/ui/contact-modal";
import { useState } from "react";

const offerings = [
  {
    icon: LineChart,
    title: "SaaS Metrics and Performance Reporting",
    description: "Always-on views of MRR and ARR, cohort trends, NRR, gross margin by plan, and growth levers. Rollups match what investors expect to see.",
    color: "indigo"
  },
  {
    icon: FileCheck,
    title: "Revenue Recognition Done Right",
    description: "Policies and workflows aligned to your model. Monthly subscriptions, annual prepay, usage-based or milestones. Clean cut-offs, deferrals, and clear audit trails.",
    color: "purple"
  },
  {
    icon: BookOpen,
    title: "Tech Company Bookkeeping",
    description: "Tight coding and reconciliations with documentation that stands up in review. Payables, receivables, and expenses designed for fast product cycles.",
    color: "cyan"
  },
  {
    icon: Wallet,
    title: "Startup Financial Management",
    description: "Cash runway tracking, spend controls, budget vs actuals, and headcount tracking tied to hiring plans. Lightweight playbooks that your team will actually follow.",
    color: "emerald"
  },
  {
    icon: Presentation,
    title: "Board and Diligence Packs",
    description: "Crisp KPI pages, variance analysis, and narrative that explains what changed and why. Built for founder updates, board meetings, and data rooms.",
    color: "orange"
  }
];

const colorClasses = {
  indigo: { bg: "bg-indigo-100", text: "text-indigo-600", border: "border-indigo-200" },
  purple: { bg: "bg-purple-100", text: "text-purple-600", border: "border-purple-200" },
  cyan: { bg: "bg-cyan-100", text: "text-cyan-600", border: "border-cyan-200" },
  emerald: { bg: "bg-emerald-100", text: "text-emerald-600", border: "border-emerald-200" },
  orange: { bg: "bg-orange-100", text: "text-orange-600", border: "border-orange-200" }
};

export const WhatYouGetSection = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <section className="py-24 bg-slate-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-indigo-500/20 text-indigo-400 rounded-full text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            What You Get
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {offerings.map((offering, index) => {
            const colors = colorClasses[offering.color as keyof typeof colorClasses];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-indigo-500/50 transition-all duration-300 group`}
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${colors.bg} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <offering.icon className={`w-7 h-7 ${colors.text}`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {offering.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {offering.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8"
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
