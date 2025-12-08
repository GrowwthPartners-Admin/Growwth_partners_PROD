import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { UserCheck, Layers, Globe, Target, ArrowRight } from "lucide-react";

const reasons = [
  {
    icon: UserCheck,
    title: "Built around real CFO problems",
    description:
      "Founder is an ex-APAC CFO, and the platform is designed around the questions CFOs actually ask.",
  },
  {
    icon: Layers,
    title: "All-in-one AI finance stack",
    description:
      "AI CFO, Sheets agents, Error Detector, Anonymiser, Insights and Xero integration in one ecosystem.",
  },
  {
    icon: Globe,
    title: "Singapore rooted, global ready",
    description:
      "HQ and leadership in Singapore with clients across regions, so the advisory and product fit local realities and regional growth plans.",
  },
  {
    icon: Target,
    title: "Outcome focused",
    description:
      "The platform is explicitly positioned to save time, reduce errors, and improve decision-making, not just to showcase AI features.",
  },
];

export const WhyChooseSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1 bg-white/10 text-purple-300 rounded-full text-sm font-semibold mb-4">
            <Target className="w-4 h-4" />
            Why Ryzup.ai
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Singapore Businesses Choose{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Ryzup.ai
            </span>{" "}
            For AI Finance Transformation
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/15 transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center mb-6">
                <reason.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
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
            onClick={() =>
              window.open(
                "https://calendly.com/jd-growwthpartners/15min?month=2025-11",
                "_blank"
              )
            }
            className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/30 transition-all"
          >
            Book a Strategy Call With Ryzup.ai
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
