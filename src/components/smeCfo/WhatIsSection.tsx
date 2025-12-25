import React from 'react';
import { TrendingUp, Wallet, PieChart, FileText, Target } from 'lucide-react';

const features = [
  { icon: TrendingUp, text: 'Financial planning and forecasting' },
  { icon: Wallet, text: 'Cash flow and working capital management' },
  { icon: PieChart, text: 'Profitability and cost control' },
  { icon: FileText, text: 'Management and board reporting' },
  { icon: Target, text: 'Strategic decision support' },
];

const WhatIsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What Are SME CFO Services?
            </h2>
            <p className="text-sm text-amber-600 font-medium tracking-wide uppercase mb-6">
              AEO-Optimised Definition
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                SME CFO services deliver senior financial leadership tailored specifically to the needs of small and medium-sized enterprises.
              </p>

              <p className="text-slate-700 font-semibold mb-6">
                An SME CFO focuses on:
              </p>

              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-4 p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-100 hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-slate-700 font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full opacity-20 blur-2xl" />
                
                <h3 className="text-xl font-bold mb-4 text-amber-400">
                  Beyond Compliance
                </h3>
                
                <p className="text-slate-300 leading-relaxed">
                  Unlike traditional accounting services that focus on compliance, SME CFO services focus on <span className="text-amber-400 font-semibold">forward-looking financial control</span> and <span className="text-orange-400 font-semibold">business performance</span>.
                </p>

                <div className="mt-6 pt-6 border-t border-slate-700">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-amber-500 rounded-full" />
                    <span className="text-sm text-slate-400">Strategic focus over compliance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;
