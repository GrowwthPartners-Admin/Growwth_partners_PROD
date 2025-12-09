import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Shield, Clock, CheckCircle, FileCheck } from "lucide-react";
import { ContactModal } from "@/components/ui/contact-modal";
import { OptimizedImage } from "@/components/ui/optimized-image";
import heroImage from "@/assets/business-in-australia.webp";

export const HeroSection = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
  }, []);

  const trustBadges = [
    {
      icon: <Shield className="h-5 w-5 text-white" />,
      text: "ATO-Compliant",
      position: "bottom-8 left-4 lg:bottom-10 lg:left-10",
      delay: 0.5,
    },
    {
      icon: <Clock className="h-5 w-5 text-white" />,
      text: "On-Time Filing",
      position: "top-8 right-4 lg:top-10 lg:right-10",
      delay: 0.8,
    },
    {
      icon: <CheckCircle className="h-5 w-5 text-white" />,
      text: "Tax Optimised",
      position: "bottom-16 right-4 lg:bottom-20 lg:right-20",
      delay: 1.1,
    },
    {
      icon: <FileCheck className="h-5 w-5 text-white" />,
      text: "SME Focused",
      position: "top-16 left-4 lg:top-20 lg:left-10",
      delay: 1.4,
    },
  ];

  return (
    <section className="relative min-h-[650px] bg-gradient-to-br from-teal-50 via-emerald-50/50 to-cyan-50 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent via-white/70 to-white" />

      <div className="container-custom relative z-10 py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gray-900"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-[#06C0A9]/10 backdrop-blur-sm rounded-full text-[#06C0A9] text-sm font-semibold mb-6">
                Corporate Tax Filing Australia
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Simplify Tax Lodgements with <span className="text-[#06C0A9]">Confidence</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed"
            >
              Growwth Partners delivers accurate, on-time corporate tax filing in Australia so your company stays ATO-compliant, avoids penalties, and unlocks every eligible saving. From year-end tax computations to business tax compliance and planning, we handle the details so you can focus on growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                onClick={() => setContactModalOpen(true)}
                className="bg-[#06C0A9] hover:bg-[#05a899] text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                Book a Free Tax Consultation
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
                className="bg-white hover:bg-[#06C0A9] text-[#06C0A9] border-2 border-[#06C0A9] hover:text-white px-8 py-6 text-lg font-semibold rounded-lg transition-all"
              >
                <Phone className="mr-2 h-5 w-5" />
                Speak to a Corporate Tax Specialist
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="order-1 lg:order-2 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{
              opacity: showContent ? 1 : 0,
              scale: showContent ? 1 : 0.95,
            }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="relative z-10 w-full max-w-[600px] mx-auto aspect-[3/2]">
              {!imageLoaded && (
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg animate-pulse"></div>
              )}

              <div className="relative rounded-lg overflow-hidden shadow-2xl w-full h-full">
                <OptimizedImage
                  src={heroImage}
                  alt="Corporate Tax Filing Australia"
                  className="rounded-lg object-cover w-full h-full"
                  priority={true}
                  width={600}
                  height={400}
                  onLoad={() => setImageLoaded(true)}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                />

                {trustBadges.map((badge, index) => (
                  <motion.div
                    key={index}
                    className={`absolute ${badge.position} hidden sm:block`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: badge.delay }}
                  >
                    <div className="rounded-2xl overflow-hidden p-0.5 bg-white shadow-lg">
                      <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white">
                        <div className="bg-[#06C0A9] p-1.5 rounded-full flex items-center justify-center">
                          {badge.icon}
                        </div>
                        <span className="font-medium text-gray-800 whitespace-nowrap">
                          {badge.text}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {imageLoaded && (
                <div className="absolute inset-0 bg-[#06C0A9]/10 rounded-lg filter blur-xl -z-10 transform translate-x-4 translate-y-4 w-full h-full"></div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
      <ContactModal open={contactModalOpen} onOpenChange={setContactModalOpen} />
    </section>
  );
};
