import { Target, Globe, Shield, MessageSquare, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Tailored Solutions",
    description:
      "Custom strategies that match stage, industry, and growth goals, whether startup, SME, or multi-entity group.",
  },
  {
    icon: Globe,
    title: "Global Expertise, Local Insight",
    description:
      "International know-how with local precision across mainland and free zones such as DIFC and ADGM, for seamless ESOP implementation in the UAE.",
  },
  {
    icon: Shield,
    title: "Comprehensive Compliance",
    description:
      "Hassle-free coordination of payroll, tax, social security equivalents, labour law considerations, and documentation aligned to UAE frameworks.",
  },
  {
    icon: MessageSquare,
    title: "Effective Communication",
    description:
      "Clear, engaging plans and employee education so participants fully understand value, vesting, and outcomes.",
  },
  {
    icon: TrendingUp,
    title: "Strategic Alignment",
    description:
      "Design linked to business objectives, hiring plans, budgets, and long-term performance.",
  },
];

const FeatureCard = ({ feature }: { feature: (typeof features)[number] }) => {
  const Icon = feature.icon;

  return (
    <div className="group h-full relative bg-gradient-to-br from-amber-50/50 to-orange-50/30 rounded-2xl p-8 border border-amber-100/50 hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300 flex flex-col">
      <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-7 h-7 text-white" />
      </div>

      <h3 className="text-xl font-semibold text-gray-900 mb-3">
        {feature.title}
      </h3>

      <p className="text-gray-600 leading-relaxed flex-1">
        {feature.description}
      </p>
    </div>
  );
};

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

        {/* First row: 3 cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-10">
          {features.slice(0, 3).map((feature) => (
            <div key={feature.title} className="w-full max-w-md mx-auto h-full shadow rounded-lg">
              <FeatureCard feature={feature} />
            </div>
          ))}
        </div>

        {/* Second row: 2 cards centered */}
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-center gap-8">
          {features.slice(3).map((feature) => (
            <div key={feature.title} className="w-full max-w-md mx-auto h-full shadow rounded-lg">
              <FeatureCard feature={feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatSetsUsApartSection;
