import { Target, Globe, Shield, MessageSquare, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Tailored Solutions",
    description: "Custom strategies that match stage, industry, and growth goals, whether startup, SME, or multi-entity group.",
  },
  {
    icon: Globe,
    title: "Global Expertise, Local Insight",
    description: "International know-how with local precision across mainland and free zones such as DIFC and ADGM, for seamless ESOP implementation in the UAE.",
  },
  {
    icon: Shield,
    title: "Comprehensive Compliance",
    description: "Hassle-free coordination of payroll, tax, social security equivalents, labour law considerations, and documentation aligned to UAE frameworks.",
  },
  {
    icon: MessageSquare,
    title: "Effective Communication",
    description: "Clear, engaging plans and employee education so participants fully understand value, vesting, and outcomes.",
  },
  {
    icon: TrendingUp,
    title: "Strategic Alignment",
    description: "Design linked to business objectives, hiring plans, budgets, and long-term performance.",
  },
];

const WhatSetsUsApartSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Sets Growwth Partners'{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
              ESOP Advisory
            </span>{" "}
            in the UAE Apart
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-amber-50/50 to-orange-50/30 rounded-2xl p-8 border border-amber-100/50 hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatSetsUsApartSection;
