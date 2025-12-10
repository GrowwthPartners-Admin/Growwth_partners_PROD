import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import { useState } from "react";
import { ContactModal } from "@/components/ui/contact-modal";

export const CTASection = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-brand-green/10 via-background to-brand-blue/10">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Make Finance Workflows{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-brand-blue">
              Faster and Smarter
            </span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Bring AI finance automation in Australia into daily operations. Keep the tools you trust, add AI where it matters and turn finance into a real-time decision engine.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-brand-green hover:bg-brand-green/90 text-white gap-2"
              onClick={() => setContactModalOpen(true)}
            >
              <Calendar className="w-4 h-4" />
              Talk to Ryzup.ai About Your Finance Workflow
            </Button>
            <a href="https://ryzup.ai" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="gap-2 border-brand-blue text-brand-blue hover:bg-brand-blue/5 w-full sm:w-auto"
              >
                Get Your AI Automation Plan
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
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
