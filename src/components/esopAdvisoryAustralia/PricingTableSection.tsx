import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

export const PricingTableSection = () => {
  const packages = [
    {
      name: "Basic",
      features: [
        { category: "Plan Design", value: "Baseline design" },
        { category: "Documentation", value: "Essential support" },
        { category: "Implementation & Communication", value: "Basic strategy" },
        { category: "Administration", value: "Standard support" },
        { category: "Accounting & Valuation", value: "Basic support" },
        { category: "Compliance", value: "Essential checks" },
        { category: "Tax Advisory", value: "General guidance" }
      ],
      highlighted: false
    },
    {
      name: "Advanced",
      features: [
        { category: "Plan Design", value: "Detailed, tailored design" },
        { category: "Documentation", value: "Comprehensive assistance" },
        { category: "Implementation & Communication", value: "Comprehensive strategy" },
        { category: "Administration", value: "Enhanced services" },
        { category: "Accounting & Valuation", value: "Advanced support" },
        { category: "Compliance", value: "Robust coverage" },
        { category: "Tax Advisory", value: "In-depth advisory" }
      ],
      highlighted: true
    },
    {
      name: "Premium",
      features: [
        { category: "Plan Design", value: "Highly customised design" },
        { category: "Documentation", value: "Complete drafting support" },
        { category: "Implementation & Communication", value: "Tailored, multi-channel strategy" },
        { category: "Administration", value: "Premium-level administration" },
        { category: "Accounting & Valuation", value: "Premium-level support" },
        { category: "Compliance", value: "Comprehensive governance" },
        { category: "Tax Advisory", value: "Custom, strategic advisory" }
      ],
      highlighted: false
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            ESOP Packages for <span className="text-teal-600">Every Need</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose a package that fits your vision and team size. Tiered options help companies of all stages access reliable ESOP consulting in Australia.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-2xl p-8 ${
                pkg.highlighted 
                  ? "bg-gradient-to-br from-teal-600 to-teal-700 text-white shadow-2xl scale-105" 
                  : "bg-gradient-to-br from-teal-50 to-blue-50 border border-teal-100"
              }`}
            >
              {pkg.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 bg-amber-400 text-amber-900 px-4 py-1 rounded-full text-sm font-semibold">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <h3 className={`text-2xl font-bold mb-8 text-center ${pkg.highlighted ? "text-white" : "text-foreground"}`}>
                {pkg.name}
              </h3>
              
              <ul className="space-y-4">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className={`mt-1 p-0.5 rounded-full ${pkg.highlighted ? "bg-white/20" : "bg-teal-600"}`}>
                      <Check className={`w-4 h-4 ${pkg.highlighted ? "text-white" : "text-white"}`} />
                    </div>
                    <div>
                      <p className={`text-sm font-medium ${pkg.highlighted ? "text-teal-100" : "text-gray-500"}`}>
                        {feature.category}
                      </p>
                      <p className={`font-medium ${pkg.highlighted ? "text-white" : "text-foreground"}`}>
                        {feature.value}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
