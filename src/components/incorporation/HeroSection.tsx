import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Building2, CheckCircle, FileText, ArrowRight } from "lucide-react";
import { ContactModal } from "@/components/ui/contact-modal";

export const HeroSection = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-orange-900 to-slate-800 py-20 lg:py-28">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 border border-orange-400/30 rounded-full mb-6">
              <Building2 className="w-4 h-4 text-orange-400" />
              <span className="text-orange-300 text-sm font-medium">Singapore Company Registration</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Register Your Singapore Company with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
                Confidence
              </span>
            </h1>

            <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-xl">
              Set up fast, stay compliant, and focus on growth. Growwth Partners provides end-to-end company incorporation in Singapore for founders and SMEs, with clear guidance on structure, compliance, and post-incorporation setup so you can register a business in Singapore without guesswork.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button
                onClick={() => setContactModalOpen(true)}
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-8 py-6 text-lg"
              >
                Book a Free Incorporation Consult
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                onClick={() => setContactModalOpen(true)}
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg"
              >
                Get Your Requirements Checklist
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6">
              {[
                "ACRA Registered",
                "100+ Companies Incorporated",
                "Fast Turnaround"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-400" />
                  <span className="text-gray-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              {/* Floating cards */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-2xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <FileText className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">UEN Issued</p>
                    <p className="text-xs text-gray-500">Within 1-2 days</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-2xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">Full Compliance</p>
                    <p className="text-xs text-gray-500">ACRA & MAS Ready</p>
                  </div>
                </div>
              </motion.div>

              {/* Main content */}
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-xl font-semibold text-white mb-2">Incorporation Steps</h3>
                  <p className="text-gray-400 text-sm">Simple, transparent process</p>
                </div>

                {[
                  { step: "01", title: "Name Reservation", desc: "ACRA approval" },
                  { step: "02", title: "Document Prep", desc: "Constitution & forms" },
                  { step: "03", title: "Submit & Register", desc: "UEN issuance" },
                  { step: "04", title: "Post-Setup", desc: "Bank & compliance" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-4 bg-white/5 rounded-xl p-4 border border-white/10"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center text-white font-bold">
                      {item.step}
                    </div>
                    <div>
                      <p className="text-white font-medium">{item.title}</p>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <ContactModal open={contactModalOpen} onOpenChange={setContactModalOpen} />
    </section>
  );
};

export default HeroSection;