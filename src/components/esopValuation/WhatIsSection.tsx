import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FileText, ArrowRight } from "lucide-react";

interface WhatIsSectionProps {
  onEnquireClick: () => void;
}

export const WhatIsSection = ({ onEnquireClick }: WhatIsSectionProps) => {
  return (
    <section className="py-20 bg-blue-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto font-medium"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="bg-brand-blue/10 p-4 rounded-full">
              <FileText className="h-12 w-12 text-brand-blue" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 text-foreground">
            What Is an <span className="text-brand-blue">ESOP Valuation?</span>
          </h2>
          <p className="text-lg text-gray-700 text-center mb-6">
            An ESOP valuation determines the fair market value (FMV) ESOP of company shares before options are granted to employees. This ensures every employee receives equity at a fair, justified, and unbiased price.
          </p>
          <p className="text-lg text-gray-700 text-center mb-8">
            It also helps companies maintain compliance, avoid HR or legal disputes, and stay transparent with investors and employees. Accurate ESOP share valuation is essential for startups, SMEs, and high-growth companies.
          </p>
          <div className="flex justify-center">
            <Button
              onClick={onEnquireClick}
              size="lg"
              className="bg-brand-blue hover:bg-brand-blue/90 text-white font-semibold text-lg px-8 rounded-full"
            >
              Enquire Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
