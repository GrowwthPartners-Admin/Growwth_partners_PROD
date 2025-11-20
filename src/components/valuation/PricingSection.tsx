import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ContactModal } from "@/components/ui/contact-modal";
import { Check } from "lucide-react";

const addOns = [
  "DCF analysis and forecasting for DCF valuation Singapore",
  "Fundraising deck valuation review",
  "Cap table clean up",
  "Comparable market benchmarking",
  "M&A deal readiness assessment"
];

export const PricingSection = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Packages and Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tailored valuation and consulting packages for different stages of business growth
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-background rounded-2xl border border-border overflow-hidden shadow-lg">
            <div className="bg-gradient-to-r from-primary to-primary/80 p-8 text-center">
              <h3 className="text-2xl font-bold text-primary-foreground mb-2">
                Custom Valuation Solutions
              </h3>
              <p className="text-primary-foreground/90">
                Get a personalized quote based on your business needs
              </p>
            </div>
            
            <div className="p-8">
              <div className="mb-8">
                <h4 className="text-xl font-bold mb-6 text-foreground">Available Add-Ons:</h4>
                <div className="space-y-4">
                  {addOns.map((addOn, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3 group"
                    >
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-muted-foreground leading-relaxed">{addOn}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="bg-primary/5 rounded-xl p-6 border border-primary/20 mb-8">
                <p className="text-center text-muted-foreground mb-4">
                  Each business is unique. Our pricing is customized based on:
                </p>
                <ul className="text-sm text-muted-foreground space-y-2 max-w-2xl mx-auto">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    Company size and complexity
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    Type of valuation required
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    Timeline and urgency
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    Additional services and add-ons
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <Button
                  onClick={() => setContactModalOpen(true)}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8"
                >
                  Optimise My Valuation Now
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <ContactModal 
        open={contactModalOpen} 
        onOpenChange={setContactModalOpen} 
      />
    </section>
  );
};
