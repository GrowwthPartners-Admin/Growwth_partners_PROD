import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, TrendingUp } from "lucide-react";
import esopHeroImage from "@/assets/esop-hero.jpg";

interface HeroSectionProps {
  onEnquireClick: () => void;
}

export const HeroSection = ({ onEnquireClick }: HeroSectionProps) => {
  return (
    <section className="relative bg-gradient-to-br from-[#FFF5F0] via-background to-[#F0F9FF] py-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground" style={{lineHeight: 1.1}}>
              <span className="text-brand-orange"> Crafting, </span> executing and managing
           <span className="text-brand-orange"> Employee </span>  Stock Incentive <span className="text-brand-orange"> Plans </span>
            </h1>
            <p className="text-xl text-gray-700 mb-4">
              Retain talent, motivate teams, and instill ownership with expert ESOP advisory for enhanced performance and competitiveness in your company.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              We empower businesses in Singapore and globally with end-to-end ESOP advisory services for startups and established companies.
            </p>
            <Button
              onClick={onEnquireClick}
              size="lg"
              className="bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold text-lg px-8 rounded-full"
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
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange/20 to-brand-blue/20 mix-blend-overlay rounded-2xl"></div>
              <img
                src={esopHeroImage}
                alt="ESOP Advisory Services Singapore"
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
                <div className="bg-brand-orange/10 p-2 rounded-lg">
                  <Users className="h-5 w-5 text-brand-orange" />
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
                <div className="bg-brand-orange/10 p-2 rounded-lg">
                  <TrendingUp className="h-5 w-5 text-brand-orange" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">Expert</p>
                  <p className="text-xs text-gray-600">ESOP Advisory</p>
                </div>
              </div>
            </motion.div>

            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-brand-orange/20 rounded-full filter blur-3xl"></div>
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-brand-blue/20 rounded-full filter blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
