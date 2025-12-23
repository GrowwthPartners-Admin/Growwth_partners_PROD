import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const CTASection = () => {

  return (
    <section className="py-20 bg-gradient-to-br from-brand-orange via-orange-500 to-amber-500">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Build Predictable, Investor-Ready SaaS Financials
          </h2>

          <p className="text-xl text-slate-800 mb-10 max-w-3xl mx-auto">
            Get SaaS-specific financial leadership that helps you optimise metrics, control burn, and build investor confidence.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              onClick={() => window.open('https://calendly.com/jd-growwthpartners/15min?month=2025-11', '_blank')}
              className="bg-white hover:bg-white text-orange px-8 py-6 text-lg rounded-xl shadow-lg shadow-orange-500/25"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Schedule a SaaS Finance Consultation
            </Button>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
};

export default CTASection;
