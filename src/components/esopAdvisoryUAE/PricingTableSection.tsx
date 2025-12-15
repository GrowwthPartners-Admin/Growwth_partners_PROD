import { Check, X, Minus,Star } from "lucide-react";

// Updated data structure for easier mapping in a table
const featuresList = [
  { category: "Plan Design", key: "design" },
  { category: "Documentation", key: "doc" },
  { category: "Implementation", key: "impl" },
  { category: "Administration", key: "admin" },
  { category: "Accounting", key: "acc" },
  { category: "Compliance", key: "comp" },
  { category: "Tax Advisory", key: "tax" },
];

const plans = {
  basic: {
    name: "Basic",
    description: "Essential support for early-stage startups",
    design: "Baseline design",
    doc: "Essential support",
    impl: "Basic strategy",
    admin: "Standard support",
    acc: "Basic support",
    comp: "Essential checks",
    tax: "General guidance",
    highlight: false,
    color: "gray",
  },
  advanced: {
    name: "Advanced",
    description: "Robust coverage for growing teams",
    design: "Detailed, tailored design",
    doc: "Comprehensive assistance",
    impl: "Comprehensive strategy",
    admin: "Enhanced services",
    acc: "Advanced support",
    comp: "Robust coverage",
    tax: "In-depth advisory",
    highlight: true,
    color: "amber",
  },
  premium: {
    name: "Premium",
    description: "Full-scale governance & custom strategy",
    design: "Highly customised",
    doc: "Complete drafting",
    impl: "Multi-channel strategy",
    admin: "Premium-level",
    acc: "Premium-level",
    comp: "Comprehensive governance",
    tax: "Custom strategic advisory",
    highlight: false,
    color: "gray",
  },
};

const PricingTableSection = () => {
  return (
    <section className="py-20 bg-gray-50/50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ESOP Packages for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
              Every Need
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose a package that fits your vision and team size. Tiered options
            help companies of all stages access reliable ESOP consulting.
          </p>
        </div>

        {/* Desktop Table View (Hidden on Mobile) */}
        <div className="hidden lg:block bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="grid grid-cols-4">
            {/* Header Column (Features) */}
            <div className="p-8 bg-gray-50/80 border-b border-r border-gray-100 flex flex-col justify-end">
              <span className="text-lg font-semibold text-gray-400 pb-2">Features</span>
            </div>

            {/* Plan Headers */}
            {Object.values(plans).map((plan, index) => (
              <div
                key={index}
                className={`p-8 border-b border-gray-100 text-center relative ${
                  plan.highlight ? "bg-amber-50/30" : ""
                } ${index !== 2 ? "border-r" : ""}`}
              >
                {plan.highlight && (
  <span className="absolute top-0 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-b-lg shadow-sm flex items-center gap-1.5 whitespace-nowrap z-10">
    <Star className="w-3 h-3 text-white fill-current" />
    Most Popular
    <Star className="w-3 h-3 text-white fill-current" />
  </span>
)}
                <h3 className={`text-xl font-bold mb-2 ${plan.highlight ? "text-amber-600" : "text-gray-900"}`}>
                  {plan.name}
                </h3>
                <p className="text-sm text-gray-500 px-4">{plan.description}</p>
              
              </div>
            ))}

            {/* Feature Rows */}
            {featuresList.map((feature, rowIndex) => (
              <>
                {/* Feature Label */}
                <div
                  key={`label-${rowIndex}`}
                  className="p-5 flex items-center bg-gray-50/50 border-b border-r border-gray-100 text-sm font-semibold text-gray-700"
                >
                  {feature.category}
                </div>

                {/* Plan Values */}
                {Object.values(plans).map((plan, colIndex) => (
                  <div
                    key={`${plan.name}-${rowIndex}`}
                    className={`p-5 flex items-center justify-center text-center border-b border-gray-100 text-sm text-gray-600 ${
                      plan.highlight ? "bg-amber-50/10 font-medium text-gray-900" : ""
                    } ${colIndex !== 2 ? "border-r" : ""}`}
                  >

                    {plan[feature.key]}
                  </div>
                ))}
              </>
            ))}
          </div>
        </div>

        {/* Mobile Card View (Hidden on Desktop) */}
        <div className="lg:hidden space-y-6">
          {Object.values(plans).map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-6 border transition-all ${
                plan.highlight
                  ? "bg-white border-amber-400 shadow-xl shadow-amber-500/10 ring-1 ring-amber-400"
                  : "bg-white border-gray-200"
              }`}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  {plan.highlight && (
                    <span className="inline-block bg-amber-100 text-amber-700 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md mb-2">
                      Popular
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{plan.description}</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {featuresList.map((feature, fIndex) => (
                  <div key={fIndex} className="flex justify-between text-sm py-2 border-b border-gray-50 last:border-0">
                    <span className="text-gray-500 font-medium">{feature.category}</span>

                    <span className="text-right font-semibold text-gray-900 max-w-[60%]">{plan[feature.key]}</span>
                  </div>
                ))}
              </div>

              <button
                className={`w-full py-3 rounded-xl font-semibold text-sm transition-all ${
                  plan.highlight
                    ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg"
                    : "bg-gray-100 text-gray-900"
                }`}
              >
                Choose {plan.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingTableSection;
