import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import esopHeroImage from "@/assets/esop-hero.jpg";

interface HeroSectionProps {
  onEnquireClick: () => void;
}

export const HeroSection = ({ onEnquireClick }: HeroSectionProps) => {
  return (
    <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Crafting, executing, and managing{" "}
              <span className="text-primary">Employee Stock Incentive Plans</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Retain talent, motivate teams, and instill ownership with expert ESOP advisory for enhanced performance and competitiveness in your company.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Our expert team empowers businesses in Singapore and globally to optimise compensation structures, implement ESOPs with confidence, and navigate compliance seamlessly. We support both established companies and fast-growing startups with end-to-end ESOP advisory services Singapore.
            </p>
            <Button
              onClick={onEnquireClick}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8"
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
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={esopHeroImage}
                alt="ESOP Advisory Services Singapore"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
