import React from 'react';
import { Clock, Eye, Calculator, PieChart, UserX, Users, CheckCircle2, User, FileText, BarChart3, Link, ArrowUpRight } from 'lucide-react';

const challenges = [
  { icon: Clock, text: 'Inconsistent or delayed financial reporting', color: 'from-red-500 to-rose-600' },
  { icon: Eye, text: 'Limited cash flow visibility', color: 'from-orange-500 to-amber-600' },
  { icon: Calculator, text: 'Weak budgeting and forecasting discipline', color: 'from-yellow-500 to-orange-600' },
  { icon: PieChart, text: 'Poor cost and margin analysis', color: 'from-amber-500 to-yellow-600' },
  { icon: UserX, text: 'Founder dependency for financial decisions', color: 'from-red-400 to-orange-500' },
  { icon: Users, text: 'Lack of accountability across departments', color: 'from-rose-500 to-red-600' },
];

const benefits = [
  { icon: User, text: 'Dedicated SME CFO' },
  { icon: FileText, text: 'Structured monthly or quarterly CFO involvement' },
  { icon: CheckCircle2, text: 'Clear financial action plans' },
  { icon: BarChart3, text: 'Management-level and board-ready reporting' },
  { icon: Link, text: 'Integration with bookkeeping and payroll teams' },
  { icon: ArrowUpRight, text: 'Scalable engagement as your business grows' },
];

const ChallengesSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Challenges */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Common Financial Challenges Faced by SMEs
              </h2>
              <p className="text-lg text-slate-600">
                Without CFO oversight, SMEs often face:
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {challenges.map((challenge, index) => (
                <div 
                  key={index}
                  className="group relative bg-slate-50 rounded-2xl p-6 hover:bg-white hover:shadow-xl transition-all duration-500 border border-slate-100 overflow-hidden"
                >
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${challenge.color}`} />
                  
                  <div className={`w-14 h-14 bg-gradient-to-br ${challenge.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <challenge.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <p className="text-slate-700 font-medium">{challenge.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-lg text-slate-600 bg-gradient-to-r from-red-50 to-orange-50 inline-block px-8 py-4 rounded-xl border border-red-100">
                These challenges <span className="font-semibold text-red-600">restrict scalability</span> and <span className="font-semibold text-orange-600">increase financial risk</span>.
              </p>
            </div>
          </div>

          {/* What You Get */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What You Get with Our SME CFO Services
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-white font-medium">{benefit.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <p className="text-amber-400 text-lg font-medium">
                All delivered at a fraction of the cost of a full-time CFO.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;
