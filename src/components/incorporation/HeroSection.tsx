import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Building2, CheckCircle, FileText, ArrowRight } from "lucide-react";
import { ContactModal } from "@/components/ui/contact-modal";

export const HeroSection = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-white py-20 lg:py-28">
      {/* Animated background elements - Soft Warm Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-orange-200/30 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ rotate: -360, scale: [1, 1.2, 1] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-amber-200/30 rounded-full blur-[100px]"
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
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-orange-100 shadow-sm rounded-full mb-6">
              <Building2 className="w-4 h-4 text-orange-600" />
              <span className="text-orange-700 text-sm font-semibold tracking-wide">
                Singapore Company Registration
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
              Register Your Singapore Company with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">
                Confidence
              </span>
            </h1>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
              Set up fast, stay compliant, and focus on growth. Growwth Partners
              provides end-to-end company incorporation in Singapore for
              founders and SMEs, with clear guidance so you can register a business without guesswork.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button
                onClick={() =>
                  window.open(
                    "https://calendly.com/jd-growwthpartners/15min?month=2025-11",
                    "_blank"
                  )
                }
                size="lg"
                className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-600 hover:to-amber-600 text-white px-8 py-6 text-lg shadow-lg shadow-orange-200 rounded-xl hover:scale-105 transition-all"
              >
                Book a Free Incorporation Consult
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6">
              {[
                "ACRA Registered",
                "100+ Companies Incorporated",
                "Fast Turnaround",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-700 text-sm font-medium">{item}</span>
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
            {/* Main Glass Card */}
            <div className="relative bg-white/60 backdrop-blur-md rounded-3xl p-8 border border-white shadow-xl ring-1 ring-orange-100/50">
              
              {/* Floating Element 1 - Top Right */}
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-[0_20px_40px_-15px_rgba(249,115,22,0.15)] border border-orange-50"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center">
                    <FileText className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">
                      UEN Issued
                    </p>
                    <p className="text-xs text-gray-500 font-medium">Within 1-2 days</p>
                  </div>
                </div>
              </motion.div>

              {/* Internal Steps List */}
              <div className="space-y-4">
                <div className="text-center mb-8 pt-2">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    Incorporation Steps
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Simple, transparent process
                  </p>
                </div>

                {[
                  {
                    step: "01",
                    title: "Name Reservation",
                    desc: "ACRA approval",
                  },
                  {
                    step: "02",
                    title: "Document Prep",
                    desc: "Constitution & forms",
                  },
                  {
                    step: "03",
                    title: "Submit & Register",
                    desc: "UEN issuance",
                  },
                  {
                    step: "04",
                    title: "Post-Setup",
                    desc: "Bank & compliance",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-4 bg-white rounded-xl p-4 border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center text-white font-bold shadow-orange-200 shadow-md">
                      {item.step}
                    </div>
                    <div>
                      <p className="text-gray-900 font-bold">{item.title}</p>
                      <p className="text-gray-500 text-sm font-medium">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
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

export default HeroSection;
