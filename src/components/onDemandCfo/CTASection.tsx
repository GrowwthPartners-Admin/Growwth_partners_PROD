import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  const handleCTAClick = () => {
    window.open("https://calendly.com/gp-jasprit/30min", "_blank");
  };

  return (
    <section className="py-20 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Need CFO-Level Decisions—Right Now?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
            Get immediate access to senior CFO expertise for your most critical
            financial decisions.
          </p>
          <Button
            onClick={() =>
              window.open(
                "https://calendly.com/jd-growwthpartners/15min?month=2025-11",
                "_blank"
              )
            }
            size="lg"
            className="bg-white text-orange-600 hover:bg-slate-100 px-10 py-7 text-lg rounded-xl shadow-2xl shadow-black/20 transition-all duration-300 hover:scale-105 group"
          >
            👉 Get On-Demand CFO Support Today
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
