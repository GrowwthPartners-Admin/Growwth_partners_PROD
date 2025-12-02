import { motion } from "framer-motion";
import { Plug, MessageSquare, Share2, ArrowRight, Database, Brain, PresentationIcon } from "lucide-react";

export const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      icon: Plug,
      title: "Connect Your Data",
      description: "Plug in your cloud accounting and key financial data. Ryzup.ai ingests and organises it for analysis.",
      visual: Database,
      color: "from-cyan-500 to-blue-600",
    },
    {
      number: "02",
      icon: MessageSquare,
      title: "Ask CFO Level Questions",
      description: "Use natural language to ask about cash, hiring, budgets or performance. The AI CFO responds with clear insights and recommended actions.",
      visual: Brain,
      color: "from-purple-500 to-indigo-600",
    },
    {
      number: "03",
      icon: Share2,
      title: "Share Insights With Stakeholders",
      description: "Turn answers into reports and dashboards for leadership and investors without rebuilding slide decks every month.",
      visual: PresentationIcon,
      color: "from-emerald-500 to-green-600",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-brand-green/10 px-4 py-2 rounded-full mb-6">
            <ArrowRight className="w-4 h-4 text-brand-green" />
            <span className="text-brand-green text-sm font-medium">Simple Process</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get from data to decision in three simple steps.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line - desktop only */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500 transform -translate-y-1/2 rounded-full opacity-20" />

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 h-full">
                  {/* Step number badge */}
                  <div className={`absolute -top-4 left-8 w-10 h-10 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                    <span className="text-white font-bold text-sm">{step.number}</span>
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 mt-4`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6">{step.description}</p>

                  {/* Visual indicator */}
                  <div className={`bg-gradient-to-br ${step.color} bg-opacity-10 rounded-xl p-4 flex items-center justify-center`}>
                    <step.visual className={`w-12 h-12 text-${step.color.includes('cyan') ? 'cyan' : step.color.includes('purple') ? 'purple' : 'emerald'}-500 opacity-60`} />
                  </div>
                </div>

                {/* Arrow connector - mobile/tablet */}
                {index < steps.length - 1 && (
                  <div className="hidden md:flex lg:hidden absolute -bottom-4 left-1/2 transform -translate-x-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-gray-300 rotate-90" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
