import React from 'react';
import { Building2, AlertTriangle, Lightbulb, TrendingUp, CheckCircle2 } from 'lucide-react';

const UseCaseSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="container mx-auto px-4">
        <div className="max-w-8xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Practical Use Case
            </h2>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-amber-500 to-orange-600 p-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                  <Building2 className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Trading SME (Singapore)</h3>
                </div>
              </div>
            </div>

            <div className="p-8 font-bold">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Challenges */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 mb-6">
                    <AlertTriangle className="w-6 h-6 text-red-400" />
                    <h4 className="text-lg font-bold text-white">Challenges</h4>
                  </div>
                  
                  <ul className="space-y-3">
                    {[
                      'Margin pressure across product lines',
                      'Unpredictable cash flow',
                      'No structured forecasting',
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-slate-300">
                        <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solution */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 mb-6">
                    <Lightbulb className="w-6 h-6 text-amber-400" />
                    <h4 className="text-lg font-bold text-white">Growwth Partners Solution</h4>
                  </div>
                  
                  <ul className="space-y-3">
                    {[
                      'Implemented monthly CFO-led financial reviews',
                      'Built rolling cash flow forecasts',
                      'Introduced product-level profitability analysis',
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-slate-300">
                        <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Outcome */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 mb-6">
                    <TrendingUp className="w-6 h-6 text-green-400" />
                    <h4 className="text-lg font-bold text-white">Outcome</h4>
                  </div>
                  
                  <ul className="space-y-3">
                    {[
                      'Identified margin leakage',
                      'Improved profitability by 12%',
                      'Greater confidence in expansion decisions',
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-slate-300">
                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCaseSection;
