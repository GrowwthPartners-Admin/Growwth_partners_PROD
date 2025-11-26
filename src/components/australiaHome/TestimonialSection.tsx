import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const TestimonialSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            Ready to Simplify Your Journey?
          </h2>

          <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-8 md:p-12 shadow-lg">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              At Growwth Partners, we are more than just service providers. We
              are your allies in growth. Let us handle the complexities of
              valuation, modelling, and compliance while you focus on building
              your business.
            </p>

            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Whether you need private company valuation, startup valuation
              Singapore, or corporate valuation consulting, our team brings
              clarity to every financial decision.
            </p>

            <p
              onClick={() => navigate("/contact-us")}
              className="text-xl font-semibold text-brand-blue hover:text-brand-orange cursor-pointer transition-colors inline-flex items-center gap-2"
            >
              Contact us today for a consultation and take the first step toward
              a simplified, compliant future.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
