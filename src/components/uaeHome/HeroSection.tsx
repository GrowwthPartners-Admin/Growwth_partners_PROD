import { useState,useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { } from "lucide-react";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { ContactModal } from "@/components/ui/contact-modal";
import {
  ArrowDown,
  DollarSign,
  Trophy,
  Users,
  Clock,
  Phone,
  ArrowRight, Sparkles 
} from "lucide-react";
import heroImage from "@/assets/uae-business.webp";

export const HeroSection = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);

    useEffect(() => {
      setShowContent(true);
    }, []);

  const factBadges = [
    {
      icon: <DollarSign className="h-5 w-5 text-white" />,
      text: "$50M+ managed annually",
      position: "bottom-10 left-10",
      delay: 0.5,
      variant: "gradient",
    },
    {
      icon: <Trophy className="h-5 w-5 text-white" />,
      text: "95% client retention",
      position: "top-10 right-10",
      delay: 0.8,
      variant: "success",
    },
    {
      icon: <Users className="h-5 w-5 text-white" />,
      text: "500+ clients served",
      position: "bottom-20 right-5 lg:bottom-0 lg:right-20",
      delay: 1.1,
      variant: "info",
    },
    {
      icon: <Clock className="h-5 w-5 text-white" />,
      text: "15+ years experience",
      position: "top-10 left-5 lg:top-20 lg:left-10",
      delay: 1.4,
      variant: "gradient",
    },
  ];

  const handlePrimaryCTA = () => {
    setContactModalOpen(true);
  };

  const handleSecondaryCTA = () => {
    window.open("https://calendly.com/jd-growwthpartners/15min?month=2025-11", "_blank");
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-amber-50 py-16 md:py-24">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold"
            >
              <Sparkles className="w-4 h-4" />
              UAE Finance Excellence
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight">
              Finance <span className="text-brand-orange"> experts </span>  with <span className="text-brand-orange"> AI </span> that your <span className="text-brand-orange"> team </span> will  actually  use
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              Growwth Partners provides UAE businesses with CFO expertise and practical AI (Ryzup.ai) for faster, cleaner numbers across accounting, tax, payroll, and strategy
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handlePrimaryCTA}
                size="lg"
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                Book a Free Strategy Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                onClick={handleSecondaryCTA}
                size="lg"
                variant="outline"
                className="border-orange-600 text-orange-600 hover:bg-orange-50 px-8 py-6 text-lg font-semibold rounded-lg transition-all"
              >
                Speak to a CFO Expert
              </Button>
            </div>
          </motion.div>

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
              {/* Skeleton loader - only show briefly while image loads */}
              {!imageLoaded && (
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg animate-pulse"></div>
              )}

              <div className="relative rounded-lg overflow-hidden shadow-2xl w-full h-full">
                <OptimizedImage
                  src={heroImage}
                  alt="Financial Growth"
                  className="rounded-lg object-cover w-full h-full"
                  priority={true}
                  width={600}
                  height={400}
                  onLoad={() => setImageLoaded(true)}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                />

                {/* Floating badges - show after image loads */}
                {factBadges.map((badge, index) => (
                  <motion.div
                    key={index}
                    className={`absolute ${badge.position} hidden sm:block`}
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: badge.delay,
                    }}
                  >
                    <div className="rounded-2xl overflow-hidden p-0.5 bg-white shadow-lg">
                      <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white">
                        <div className="bg-[#1c7c6e] p-1.5 rounded-full flex items-center justify-center">
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

              {/* Shadow background - show after image loads */}
              {imageLoaded && (
                <div className="absolute inset-0 bg-[#21C55D]/10 rounded-lg filter blur-xl -z-10 transform translate-x-4 translate-y-4 w-full h-full"></div>
              )}
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
