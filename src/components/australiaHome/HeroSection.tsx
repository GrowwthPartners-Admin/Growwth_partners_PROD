import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ArrowDown,
  DollarSign,
  Trophy,
  Users,
  Clock,
  Phone,
} from "lucide-react";
import heroImage from "@/assets/business-in-australia.webp";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { Badge } from "@/components/ui/badge";

export const HeroSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);

  // Show content immediately, don't wait for image
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

  return (
    <section className="relative min-h-[600px] bg-gradient-to-br from-blue-100 to-[#e9faf7] overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            {/* Bottom fade so it blends into the next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent via-[#e9faf7]/70 to-white" />

      <div className="container-custom relative z-10 py-20">
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
              <span className="inline-block px-4 py-2 bg-brand-blue/10 backdrop-blur-sm rounded-full text-[#06C0A9] text-sm font-semibold mb-6">
                Finance Solutions for Australia
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Expert-Led. AI-Powered <span className="text-[#06C0A9]"> Finance </span>  That Moves Your <span className="text-[#06C0A9]"> Business </span> 
                Forward.
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed"
            >
              Get strategic finance, accounting, and tax services enhanced by Ryzup.ai for faster decisions and full compliance across<span className=" font-bold"> Australia </span>  
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                onClick={() =>
                  window.open(
                    "https://calendly.com/jd-growwthpartners/15min?month=2025-11",
                    "_blank"
                  )
                }
                className="bg-[#06C0A9] hover:bg-[#06C0A9] text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                Book a Free Strategy Call
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
                className="bg-white hover:bg-[#06C0A9] text-[#06C0A9] border-2 border-[#06C0A9] px-8 py-6 text-lg font-semibold rounded-lg transition-all"
              >
                <Phone className="mr-2 h-5 w-5" />
                Speak to a CFO Expert
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
    </section>
  );
};
