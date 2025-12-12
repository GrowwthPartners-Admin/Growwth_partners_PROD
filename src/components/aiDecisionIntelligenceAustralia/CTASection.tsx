import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, BarChart3, Calendar } from "lucide-react";
import { ContactModal } from "@/components/ui/contact-modal";

const CTASection = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-teal-900 to-gray-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/20 px-4 py-2 rounded-full mb-8">
            <Sparkles className="w-5 h-5 text-teal-400" />
            <span className="text-sm font-medium text-teal-300">
              Decision Intelligence for CFOs
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Give Your Finance Team Decision Intelligence That{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">
              Moves as Fast as the Business
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Choose AI dashboards for CFOs in Australia that turn numbers into
            clear actions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-teal-700 hover:bg-teal-50 px-8 py-6 text-lg rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 font-semibold"
              onClick={() =>
                window.open(
                  "https://calendly.com/jd-growwthpartners/15min?month=2025-11",
                  "_blank"
                )
              }
            >
              <Calendar className="w-4 h-4" />
              Schedule a Demo
            </Button>
            <Button
              size="lg"
              onClick={() =>
                window.open(
                  "https://workspace.google.com/u/0/marketplace/app/ryzup_sheets/1047771589087?flow_type=2",
                  "_blank"
                )
              }
              variant="outline"
              className="border-2 border-white/30 text-white bg-transparent px-8 py-6 text-lg rounded-xl backdrop-blur-sm transition-all duration-300 gap-4"
            >
              See the Dashboards
              <BarChart3 className="w-4 h-4" />
            </Button>
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

export default CTASection;
