import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const TestimonialSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-orange-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 text-center">
                Ready to Simplify Your Journey?
              </h2>
              
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed mb-8">
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
                  className="inline-flex items-center gap-2 text-brand-blue hover:text-brand-blue/80 font-bold transition-colors group"
                >
                  Contact us today for a consultation and take the first step toward a simplified, compliant future.
                </button>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <span className="text-3xl">⭐⭐⭐⭐⭐</span>
                </div>
                <p className="text-center text-gray-600 italic">
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
