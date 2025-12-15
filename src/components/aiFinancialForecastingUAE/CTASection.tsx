import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";
import { ContactModal } from "@/components/ui/contact-modal";

const CTASection = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-600 to-teal-700 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <TrendingUp className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white">AI Financial Forecasting</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Plan faster and reduce risk with AI financial forecasting in the UAE that keeps up with your business.
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Button
              size="lg"
              onClick={() => setContactModalOpen(true)}
              className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-6 text-lg rounded-xl shadow-lg font-bold hover:shadow-xl transition-all duration-300 group hover:scale-105"
            >
              Start a Free Forecasting Consultation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => setContactModalOpen(true)}
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-xl font-semibold"
            >
              Request a Forecast Walkthrough
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
