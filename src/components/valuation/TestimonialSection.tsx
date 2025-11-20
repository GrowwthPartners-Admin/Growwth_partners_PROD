import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const TestimonialSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-primary/5">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-background rounded-2xl border border-border shadow-xl overflow-hidden">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground text-center">
                Ready to Simplify Your Journey?
              </h2>
              
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-8">
                <p>
                  At Growwth Partners, we are more than just service providers. We are your allies in growth.
                </p>
                
                <p>
                  Let us handle the complexities of valuation, modelling, and compliance while you focus on building your business. Whether you need private company valuation, startup valuation Singapore, or corporate valuation consulting, our team brings clarity to every financial decision.
                </p>
                
                <button
                  onClick={() => {
                    navigate('/contact-us');
                    window.scrollTo(0, 0);
                  }}
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors group"
                >
                  Contact us today for a consultation and take the first step toward a simplified, compliant future.
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <span className="text-3xl">⭐⭐⭐⭐⭐</span>
                </div>
                <p className="text-center text-muted-foreground italic">
                  "Trusted by 500+ high-growth companies across Singapore and Southeast Asia"
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
