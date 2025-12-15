import { Check } from "lucide-react";

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
      { category: "Tax Advisory", value: "General guidance" },
    ],
    highlighted: false,
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
      { category: "Tax Advisory", value: "In-depth advisory" },
    ],
    highlighted: true,
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
      { category: "Tax Advisory", value: "Custom, strategic advisory" },
    ],
    highlighted: false,
  },
];

const PricingTableSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ESOP Packages for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
              Every Need
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose a package that fits your vision and team size. Tiered options help companies of all stages access reliable ESOP consulting in the UAE.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 border transition-all duration-300 ${
                pkg.highlighted
                  ? "bg-gradient-to-br from-amber-500 to-orange-500 border-amber-400 shadow-xl shadow-amber-500/25 scale-105"
                  : "bg-white border-gray-200 hover:border-amber-200 hover:shadow-lg"
              }`}
            >
              {pkg.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-amber-600 text-sm font-semibold px-4 py-1 rounded-full shadow-md">
                  Most Popular
                </div>
              )}

              <h3
                className={`text-2xl font-bold mb-8 text-center ${
                  pkg.highlighted ? "text-white" : "text-gray-900"
                }`}
              >
                {pkg.name}
              </h3>

              <div className="space-y-4">
                {pkg.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-start gap-3">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        pkg.highlighted
                          ? "bg-white/20"
                          : "bg-amber-100"
                      }`}
                    >
                      <Check
                        className={`w-3 h-3 ${
                          pkg.highlighted ? "text-white" : "text-amber-600"
                        }`}
                      />
                    </div>
                    <div>
                      <p
                        className={`text-xs font-medium uppercase tracking-wide mb-0.5 ${
                          pkg.highlighted ? "text-amber-100" : "text-gray-500"
                        }`}
                      >
                        {feature.category}
                      </p>
                      <p
                        className={`text-sm ${
                          pkg.highlighted ? "text-white" : "text-gray-700"
                        }`}
                      >
                        {feature.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingTableSection;
