import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Sparkles,
  Brain,
  ShieldCheck,
  LineChart,
} from "lucide-react";
import { ContactModal } from "@/components/ui/contact-modal";

const featureItems = [
  {
    icon: Brain,
    label: "AI CFO",
    desc: "Board-ready insights and scenario planning.",
    tag: "Decision Engine",
  },
  {
    icon: ShieldCheck,
    label: "Error Detector",
    desc: "Catches anomalies before your auditors do.",
    tag: "Data Quality",
  },
  {
    icon: LineChart,
    label: "Anonymiser",
    desc: "Strip PII before sharing models or exports.",
    tag: "Privacy First",
  },
  {
    icon: Sparkles,
    label: "GL Analyser",
    desc: "The General Ledger (GL) is the heart of a business's financial health",
    tag: "Data Analyser",
  },
];

export const HeroSection = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="container-custom relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300 text-sm font-medium">
                AI Finance Transformation
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Redefine Finance{" "}
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                with AI
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Ryzup.ai helps finance leaders in Singapore rebuild their finance
              function with AI, from strategy to hands-on implementation with an
              AI CFO, spreadsheet error detection, and data anonymisation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => setContactModalOpen(true)}
                className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/30 transition-all"
              >
                Talk to an AI Finance Expert
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() =>
                  window.open(
                    "https://calendly.com/jd-growwthpartners/15min?month=2025-11",
                    "_blank"
                  )
                }
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white px-8 py-6 text-lg font-semibold rounded-xl transition-all"
              >
                Book a Strategy Call
              </Button>
            </div>
          </motion.div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl">
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
                      <Brain className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">
                        AI Transformation
                      </p>
                      <p className="text-gray-400 text-sm">
                        End-to-end advisory
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-emerald-300">
                      Live in client accounts
                    </span>
                  </div>
                </div>

                {/* Feature cards */}
                <div className="grid grid-cols-2 gap-4">
                  {featureItems.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="group relative flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-white/5/10 p-4 backdrop-blur-sm hover:border-purple-400/60 hover:bg-white/10 transition-all duration-300"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-4 h-4 text-white" />
                        </div>
                        <span className="rounded-full bg-white/5 px-2 py-0.5 text-[10px] font-medium text-purple-200 border border-white/10">
                          {item.tag}
                        </span>
                      </div>

                      <div className="mt-3 space-y-1">
                        <p className="text-white text-sm font-semibold">
                          {item.label}
                        </p>
                        <p className="text-gray-400 text-xs leading-relaxed">
                          {item.desc}
                        </p>
                      </div>

                      <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-white/5">
                        <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-500" />
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Status indicator */}
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl p-4 shadow-xl"
            >
              <Brain className="w-6 h-6 text-white" />
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute -bottom-4 -left-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-4 shadow-xl"
            >
              <ShieldCheck className="w-6 h-6 text-white" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <ContactModal
        open={contactModalOpen}
        onOpenChange={setContactModalOpen}
      />
    </section>
  );
};
