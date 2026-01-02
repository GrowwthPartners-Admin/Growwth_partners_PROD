import React from 'react';
import { Building2, Users, Landmark, Rocket, TrendingDown, HelpCircle } from 'lucide-react';

const idealFor = [
  { icon: Building2, text: 'Growing SMEs without in-house CFO expertise' },
  { icon: Users, text: 'Founder-led businesses where finance decisions rely on intuition' },
  { icon: Landmark, text: 'Family-owned businesses professionalising operations' },
  { icon: Rocket, text: 'SMEs planning expansion, fundraising, or restructuring' },
  { icon: TrendingDown, text: 'Businesses experiencing cash flow volatility or margin pressure' },
];

const questions = [
  'Why is profit not growing with revenue?',
  'Which products or departments are actually profitable?',
  'Can we afford to hire, expand, or invest right now?',
];

const WhoShouldUseSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-amber-50/30">
      <div className="container mx-auto px-4">
        <div className="max-w-8xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Who Should Use SME CFO Services?
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-6 ml-2">
                SME CFO services are ideal for:
              </h3>

              <div className="space-y-4">
                {idealFor.map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 p-4 bg-white rounded-xl shadow hover:shadow-md transition-all duration-300 border border-slate-100"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-slate-700 pt-2">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-8 text-white h-full">
                <div className="flex items-center gap-3 mb-6">
                  <HelpCircle className="w-8 h-8" />
                  <h3 className="text-xl font-bold">Do You Need CFO-Level Insight?</h3>
                </div>

                <p className="text-amber-100 mb-6">
                  If your business struggles to answer:
                </p>

                <div className="space-y-4 mb-8">
                  {questions.map((question, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-3 bg-white/10 backdrop-blur-sm shadow rounded-lg p-4"
                    >
                      <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </span>
                      <span className="font-medium">{question}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center">
                  <p className="text-lg font-semibold">
                    You need CFO-level insight
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoShouldUseSection;
