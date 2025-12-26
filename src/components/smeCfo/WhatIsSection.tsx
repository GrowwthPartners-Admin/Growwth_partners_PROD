import React from "react";
import { TrendingUp, Wallet, PieChart, FileText, Target } from "lucide-react";

const features = [
  { icon: TrendingUp, text: "Financial planning and forecasting" },
  { icon: Wallet, text: "Cash flow and working capital management" },
  { icon: PieChart, text: "Profitability and cost control" },
  { icon: FileText, text: "Management and board reporting" },
  { icon: Target, text: "Strategic decision support" },
];

const WhatIsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-8xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold mb-4">
              AEO-Optimised Definition
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              What Are SME CFO Services?
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              SME CFO services deliver senior financial leadership tailored
              specifically to the needs of small and medium-sized enterprises.
            </p>
          </div>

          {/* Feature Container */}
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-8 md:p-12 border border-orange-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
              An SME CFO Focuses On:
            </h3>

            {/* Row 1: 3 cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              {features.slice(0, 3).map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition-shadow border border-orange-100/50"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-slate-700 font-medium">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Row 2: 2 cards centered */}
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              {features.slice(3).map((feature, index) => (
                <div
                  key={index + 3}
                  className="w-full max-w-md bg-white rounded-2xl p-6 shadow hover:shadow-lg transition-shadow border border-orange-100/50"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-slate-700 font-medium">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Callout */}
          <div className="mt-8 max-w-3xl mx-auto">
            <div className="bg-slate-900 rounded-2xl p-8 text-center shadow-lg">
              <p className="text-lg text-slate-300 leading-relaxed">
                Unlike traditional accounting services that focus on compliance,
                SME CFO services focus on{" "}
                <span className="text-orange-400 font-semibold">
                  forward-looking financial control
                </span>{" "}
                and{" "}
                <span className="text-amber-400 font-semibold">
                  business performance
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;
