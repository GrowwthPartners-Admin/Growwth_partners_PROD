import { motion } from "framer-motion";
import { BarChart3, Brain, LineChart, Plug, PieChart, DollarSign, AlertTriangle, Layers } from "lucide-react";

export const WhatRyzupGivesSection = () => {
  const features = [
    {
      icon: BarChart3,
      title: "AI Dashboards With CFO Level Clarity",
      description: "Ryzup AI CFO connects to your accounting data and turns it into visual summaries of revenue, expenses, cash and profitability. You get clear data visualisation and quick access to the financial reports you need, without chasing files.",
      highlights: [
        { icon: PieChart, text: "Snapshot of cash flow and P&L" },
        { icon: DollarSign, text: "Revenue stream breakdowns with recommendations" },
        { icon: AlertTriangle, text: "Operating expense trends and risk areas" },
      ],
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      icon: Brain,
      title: "AI Decision Intelligence For Everyday Questions",
      description: "The AI CFO is designed around real questions CFOs and founders ask:",
      highlights: [
        { icon: DollarSign, text: "How can we streamline cash flow and cut costs without slowing growth" },
        { icon: BarChart3, text: "Do we have the budget to hire this role" },
        { icon: LineChart, text: "What is our financial outlook for next quarter based on current trends" },
      ],
      bottomText: "Ryzup.ai analyses your data and replies with numbers, context and recommended actions in plain language.",
      gradient: "from-purple-500 to-indigo-600",
    },
    {
      icon: LineChart,
      title: "Forecasting And Scenario Thinking",
      description: "Use the same AI engine to understand how changes in spend, hiring or revenue affect your runway and growth. Ryzup.ai uses your existing financial data to support projections and suggestions so you can move from static plans to flexible, scenario driven planning.",
      gradient: "from-emerald-500 to-green-600",
    },
    {
      icon: Plug,
      title: "Accounting Native, Audit Friendly",
      description: "Ryzup.ai is built to work with modern cloud accounting platforms. That means your accounting data flows in securely and reliably. You get an AI CFO that understands your ledger, not just a generic chatbot.",
      gradient: "from-orange-500 to-amber-600",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-brand-blue/10 px-4 py-2 rounded-full mb-6">
            <Layers className="w-4 h-4 text-brand-blue" />
            <span className="text-brand-blue text-sm font-medium">Platform Capabilities</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Ryzup.ai Gives CFOs in Singapore
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A complete AI-powered financial intelligence platform designed for modern finance leaders.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-4">{feature.description}</p>

              {/* Highlights */}
              {feature.highlights && (
                <div className="space-y-3 mb-4">
                  {feature.highlights.map((highlight, hIndex) => (
                    <div key={hIndex} className="flex items-start gap-3">
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center flex-shrink-0 opacity-80`}>
                        <highlight.icon className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed pt-1">{highlight.text}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Bottom text */}
              {feature.bottomText && (
                <p className="text-gray-600 text-sm italic bg-gray-50 rounded-xl p-4 mt-4">
                  {feature.bottomText}
                </p>
              )}

              {/* Decorative corner */}
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${feature.gradient} opacity-5 rounded-bl-full`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
