import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Shield, ArrowRight } from "lucide-react";
import { useState } from "react";
import { ContactModal } from "@/components/ui/contact-modal";

export const HeroSection = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-100 via-teal-50 to-[#e9faf7]">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#06C0A9]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-400/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-300/10 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent via-[#e9faf7]/70 to-white" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#06C0A9]/10 border border-[#06C0A9]/30 text-[#06C0A9] text-sm font-semibold mb-6"
            >
              <Shield className="w-4 h-4" />
              AI Risk & Compliance for Australia
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Prevent Risk{" "}
              <span className="text-[#06C0A9]">
                Before It Happens
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Ryzup.ai gives Australian finance teams AI-powered monitoring across spreadsheets and accounting data. Improve AI compliance in Australia, strengthen controls, and use AI risk detection to catch anomalies, suspicious entries, and privacy issues before they become problems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={() => setContactModalOpen(true)}
                className="bg-[#06C0A9] hover:bg-[#059b8a] text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                Book a Risk & Compliance Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => setContactModalOpen(true)}
                className="bg-white hover:bg-[#06C0A9] text-[#06C0A9] hover:text-white border-2 border-[#06C0A9] px-8 py-6 text-lg font-semibold rounded-lg transition-all"
              >
                Talk to a Ryzup.ai Specialist
              </Button>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl border border-gray-200 p-6 shadow-2xl">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#06C0A9] flex items-center justify-center">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-semibold">Risk Monitor</h3>
                    <p className="text-gray-500 text-sm">Real-time detection</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 border border-emerald-200">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-emerald-600 text-sm font-medium">Active</span>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                  { label: "Anomalies Flagged", value: "12", trend: "This week" },
                  { label: "Compliance Score", value: "94%", trend: "+3%" },
                  { label: "Data Protected", value: "2.4K", trend: "Records" },
                ].map((metric, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                    className="bg-gradient-to-br from-gray-50 to-teal-50/50 rounded-xl p-4 border border-gray-200"
                  >
                    <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
                    <p className="text-gray-500 text-xs">{metric.label}</p>
                    <p className="text-[#06C0A9] text-xs mt-1 font-medium">{metric.trend}</p>
                  </motion.div>
                ))}
              </div>

              {/* Alert Item */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="bg-amber-50 border border-amber-200 rounded-xl p-4"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-4 h-4 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium text-sm">Anomaly Detected</p>
                    <p className="text-gray-600 text-xs mt-1">Unusual vendor payment pattern flagged in Q4 expenses</p>
                    <p className="text-amber-600 text-xs mt-2 font-medium">Flagged 2 hours ago</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <ContactModal open={contactModalOpen} onOpenChange={setContactModalOpen} />
    </section>
  );
};
