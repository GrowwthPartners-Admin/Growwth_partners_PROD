import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import { ContactModal } from "@/components/ui/contact-modal";

const CTASection = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-br from-amber-600 to-orange-600 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Zap className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white">AI Automation in the UAE</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Make Finance Workflows Faster and Smarter
          </h2>
          
          <p className="text-xl text-amber-100 mb-10">
            Bring AI automation in the UAE into daily operations. Keep the tools you trust, add AI where it matters and turn finance into a real time decision engine.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://calendly.com/jd-growwthpartners/15min?month=2025-11" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-white text-amber-600 hover:bg-amber-50 px-8 py-6 text-lg rounded-xl shadow-lg font-bold hover:shadow-xl transition-all duration-300 group hover:scale-105 w-full sm:w-auto"
              >
                Talk to Growwth Partners About Your Finance Workflow
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <Button
              size="lg"
              variant="outline"
              onClick={() => setContactModalOpen(true)}
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-xl font-bold w-full sm:w-auto"
            >
              Get Your AI Automation Plan
            </Button>
          </div>
        </div>
      </div>

      <ContactModal 
        open={contactModalOpen} 
        onOpenChange={setContactModalOpen}
      />
    </section>
  );
};

export default CTASection;
