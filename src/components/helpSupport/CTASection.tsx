import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Want a personalised answer?
          </h2>

          <p className="text-xl text-teal-100 mb-10 max-w-4xl mx-auto">
 If your question is specific to your business, a quick conversation is
          often faster than back-and-forth. Let’s review your situation together.          </p>

          <Button
            onClick={() =>
              window.open(
                "https://calendly.com/jd-growwthpartners/15min?month=2025-11",
                "_blank"
              )
            }
            size="lg"
            className="bg-orange-500 text-white px-8 py-6 text-lg rounded-xl shadow-lg transition-all duration-300 hover:scale-105 group"
          >
            👉  Schedule Your Free Strategy Session
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
           <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs text-white/60">
          <span className="flex items-center gap-1">
            <Sparkles className="h-3.5 w-3.5 text-orange-400" />
            Free 30-minute discussion
          </span>
          <span>•</span>
          <span>No obligation</span>
          <span>•</span>
          <span>Confidential</span>
        </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
