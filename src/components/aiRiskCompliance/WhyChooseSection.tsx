import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Target, 
  Bell, 
  Lock, 
  Users,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

const reasons = [
  {
    icon: Target,
    title: "Built for finance workflows, not generic AI",
    description: "Deep focus on spreadsheets, Xero data and financial processes."
  },
  {
    icon: Bell,
    title: "Real-time alerts instead of after-the-fact surprises",
    description: "Live error detection and risk signals inside the tools you already use."
  },
  {
    icon: Lock,
    title: "Privacy-first design",
    description: "Anonymisation and controlled access so you can adopt AI safely."
  },
  {
    icon: Users,
    title: "Trusted by fast-growing companies across regions",
    description: "Startups and SMEs already use Ryzup.ai to manage finance at scale."
  }
];

export const WhyChooseSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-50 via-orange-50/30 to-amber-50/40 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,_rgba(251,146,60,0.08),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(239,68,68,0.05),_transparent_50%)]" />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-600 mb-6">
              <CheckCircle2 className="w-4 h-4" />
              Why Singapore Businesses Choose Us
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Why Singapore Businesses Choose{" "}
              <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                Ryzup.ai for Risk & Compliance
              </span>
            </h2>
          </motion.div>

          {/* Reasons Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 flex items-center justify-center group-hover:from-orange-500/20 group-hover:to-red-500/20 transition-colors">
                    <reason.icon className="w-7 h-7 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-slate-600">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-semibold px-8 shadow-lg shadow-red-500/25 group rounded-lg"
              onClick={() => window.open("https://ryzup.ai/", "_blank")}
            >
              See How Ryzup.ai Handles Risk & Fraud
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
