import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, TrendingUp } from "lucide-react";
import esopHeroImage from "@/assets/esop-advisory.jpg";

interface HeroSectionProps {
  onEnquireClick: () => void;
}

export const HeroSection = ({ onEnquireClick }: HeroSectionProps) => {
  return (
    <section className="relative bg-gradient-to-br from-blue-100 via-teal-50 to-[#e9faf7] py-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground" style={{lineHeight: 1.1}}>
              <span className="text-teal-600">Crafting,</span> executing and managing
              <span className="text-teal-600"> Employee </span> Stock Incentive <span className="text-teal-600">Plans</span>
            </h1>
            <p className="text-xl text-gray-700 mb-4">
              Retain talent, motivate teams, and build an ownership culture with expert ESOP advisory tailored for Australian businesses.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Growwth Partners supports companies in Australia and globally to optimise compensation structures, implement ESOPs with confidence, and navigate compliance with clarity. Services cover both fast-growing startups and established companies seeking end-to-end ESOP advisory in Australia.
            </p>
            <Button
              onClick={onEnquireClick}
              size="lg"
              className="bg-teal-600 hover:bg-teal-700 text-white font-semibold text-lg px-8 rounded-full"
            >
              Enquire Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl relative z-10">
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-blue-500/20 mix-blend-overlay rounded-2xl"></div>
              <img
                src={esopHeroImage}
                alt="ESOP Advisory Services Australia"
                className="w-full h-auto object-cover"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-8 -left-8 z-20"
            >
              <div className="flex items-center gap-2 bg-white rounded-xl p-3 shadow-lg animate-float-slow backdrop-blur-sm border border-gray-100">
                <div className="bg-teal-500/10 p-2 rounded-lg">
                  <Users className="h-5 w-5 text-teal-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">500+</p>
                  <p className="text-xs text-gray-600">Companies Served</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute -top-8 -right-8 z-20"
            >
              <div className="flex items-center gap-2 bg-white rounded-xl p-3 shadow-lg animate-float backdrop-blur-sm border border-gray-100">
                <div className="bg-teal-500/10 p-2 rounded-lg">
                  <TrendingUp className="h-5 w-5 text-teal-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">Expert</p>
                  <p className="text-xs text-gray-600">ESOP Advisory</p>
                </div>
              </div>
            </motion.div>

            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-teal-500/20 rounded-full filter blur-3xl"></div>
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-blue-400/20 rounded-full filter blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
