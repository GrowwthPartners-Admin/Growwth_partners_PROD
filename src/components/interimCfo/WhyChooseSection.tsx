import React from "react";
import { motion } from "framer-motion";
import {
  RefreshCw,
  Globe,
  Users,
  Layers,
  Target,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

type Reason = {
  icon: React.ElementType;
  title: string;
  description: string;
};

const WhyChooseSection: React.FC = () => {
  const reasons: Reason[] = [
    {
      icon: RefreshCw,
      title: "Transition Expertise",
      description:
        "CFOs with experience managing transitions, turnarounds, and high-growth phases",
    },
    {
      icon: Globe,
      title: "Singapore Focus",
      description:
        "Strong understanding of Singapore's financial, tax, and regulatory environment",
    },
    {
      icon: Users,
      title: "Stakeholder Management",
      description:
        "Proven ability to work with boards, investors, and auditors",
    },
    {
      icon: Layers,
      title: "Integrated Support",
      description:
        "Integrated support across CFO services, finance teams, bookkeeping, and payroll",
    },
    {
      icon: Target,
      title: "Execution-Focused",
      description: "Execution-focused approach—not just advisory",
    },
  ];

  return (
    <section className="py-20 lg:py-20 bg-gradient-to-br from-orange-100 via-slate-500 to-orange-300 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-8xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 border border-orange-500/30 rounded-full mb-6">
              <Target className="w-4 h-4 text-orange-400" />
              <span className="text-orange-300 text-sm font-semibold">
                The Growwth Advantage
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-500 mb-6">
              Why Choose{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">
                Growwth Partners?
              </span>
            </h2>
          </motion.div>

          {/* Reasons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 mb-12">
            {reasons.map((reason, index) => {
              const isLastRow = index >= 3; // last 2 cards

              return (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`
          group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6
          hover:bg-white/10 transition-all duration-300
          lg:${isLastRow ? "col-span-3" : "col-span-2"}
        `}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-400 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <reason.icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-gray-200 leading-relaxed">
                    {reason.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
              <Button
                size="lg"
                onClick={() => window.open('https://calendly.com/jd-growwthpartners/15min?month=2025-11', '_blank')}
                className="bg-gradient-to-r from-orange-400 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white px-8 py-6 text-lg rounded-full shadow-2xl shadow-orange-500/25 transition-all duration-300 hover:scale-105 group"
              >
                Get Interim CFO Support
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
           
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
