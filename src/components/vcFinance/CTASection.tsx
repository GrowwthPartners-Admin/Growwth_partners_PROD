import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-orange-500 to-amber-500">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        > 
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Operate Your Fund with Institutional Financial Discipline
          </h2>
          
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
Partner with Growwth Partners for CFO-led fund finance management, LP-ready reporting, and scalable finance systems. </p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              className="bg-white text-orange-600 hover:bg-slate-100 px-10 py-7 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-semibold"
              onClick={() => window.open('https://calendly.com/jd-growwthpartners/15min?month=2025-11', '_blank')}
            >
              Schedule a Fund Finance Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
