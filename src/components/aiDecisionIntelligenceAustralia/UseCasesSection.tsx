import { motion } from 'framer-motion';
import { Presentation, DollarSign, Target, Building2, Brain, Sparkles } from 'lucide-react';

const useCases = [
  {
    icon: Presentation,
    title: 'Board and Investor Reporting',
    description: 'Replace manual decks with living AI dashboards for CFOs in Australia that are always current.',
    aiQuery: 'Generate a board summary for Q4',
    aiResponse: 'Q4 Summary: Revenue $4.2M (+18% YoY), Gross Margin 71% (+3pp), Cash Runway 22 months. Key wins: Enterprise expansion drove 40% of new ARR. Recommendation: Approve proposed Q1 hiring plan.',
    color: 'teal'
  },
  {
    icon: DollarSign,
    title: 'Cash and Runway Control',
    description: 'Track inflows, outflows, and risk signals. Simulate hiring or spend decisions before committing.',
    aiQuery: 'What happens if we hire 5 engineers next month?',
    aiResponse: 'Adding 5 engineers at avg $140K/yr reduces runway from 22 to 17 months. Burn increases to $245K/mo. Break-even extends by 4 months. Recommendation: Stage hiring over 3 months to maintain 18+ month runway.',
    color: 'blue'
  },
  {
    icon: Target,
    title: 'Budget vs Actuals',
    description: 'Spot variance drivers fast and turn insights into actions for the next cycle.',
    aiQuery: 'Why did we overspend on marketing?',
    aiResponse: 'Marketing exceeded budget by $42K (23%). Drivers: 1) Unplanned conference sponsorship ($18K), 2) Higher CAC on paid channels ($15K), 3) Agency overage ($9K). Impact: Still within quarterly envelope. Action: Reallocate from Q1 events budget.',
    color: 'purple'
  },
  {
    icon: Building2,
    title: 'Multi-Entity Oversight',
    description: 'Consolidated views with consistent metrics across subsidiaries and currencies.',
    aiQuery: 'Show consolidated cash position across all entities',
    aiResponse: 'Group Cash: $8.4M AUD. AU Parent: $5.1M, NZ Sub: $1.8M NZD (=$1.6M AUD), US Sub: $1.2M USD (=$1.7M AUD). FX exposure: 39% non-AUD. Alert: NZ entity cash covers only 4 months at current burn.',
    color: 'amber'
  }
];

const colorClasses = {
  teal: { bg: 'bg-teal-50', border: 'border-teal-200', icon: 'from-teal-500 to-teal-600', accent: 'bg-teal-100 text-teal-700' },
  blue: { bg: 'bg-blue-50', border: 'border-blue-200', icon: 'from-blue-500 to-blue-600', accent: 'bg-blue-100 text-blue-700' },
  purple: { bg: 'bg-purple-50', border: 'border-purple-200', icon: 'from-purple-500 to-purple-600', accent: 'bg-purple-100 text-purple-700' },
  amber: { bg: 'bg-amber-50', border: 'border-amber-200', icon: 'from-amber-500 to-amber-600', accent: 'bg-amber-100 text-amber-700' }
};

const UseCasesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Real-World{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
              Use Cases
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how Ryzup.ai answers real questions from Australian CFOs
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => {
            const colors = colorClasses[useCase.color as keyof typeof colorClasses];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`${colors.bg} rounded-2xl p-6 border ${colors.border} hover:shadow-xl transition-all duration-300`}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${colors.icon} rounded-xl flex items-center justify-center shadow-lg flex-shrink-0`}>
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{useCase.title}</h3>
                    <p className="text-gray-600">{useCase.description}</p>
                  </div>
                </div>

                {/* AI interaction mockup */}
                <div className="bg-white rounded-xl p-4 border border-gray-200 space-y-4">
                  {/* User query */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-medium text-gray-600">You</span>
                    </div>
                    <div className="bg-gray-100 rounded-xl rounded-tl-none px-4 py-3 flex-1">
                      <p className="text-gray-700">{useCase.aiQuery}</p>
                    </div>
                  </div>

                  {/* AI response */}
                  <div className="flex items-start gap-3">
                    <div className={`w-8 h-8 bg-gradient-to-br ${colors.icon} rounded-full flex items-center justify-center flex-shrink-0`}>
                      <Brain className="w-4 h-4 text-white" />
                    </div>
                    <div className={`${colors.accent} rounded-xl rounded-tl-none px-4 py-3 flex-1`}>
                      <div className="flex items-center gap-2 mb-2">
                        <Sparkles className="w-4 h-4" />
                        <span className="text-sm font-medium">Ryzup AI</span>
                      </div>
                      <p className="text-sm leading-relaxed">{useCase.aiResponse}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
