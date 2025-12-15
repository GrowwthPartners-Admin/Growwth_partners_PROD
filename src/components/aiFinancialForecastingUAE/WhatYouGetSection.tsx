import { motion } from "framer-motion";
import { 
  TrendingUp, 
  GitBranch, 
  Shield, 
  RefreshCw, 
  PresentationIcon,
  Users,
  DollarSign,
  Megaphone
} from "lucide-react";

const WhatYouGetSection = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Predictive Models",
      description: "Generate forward views for revenue, costs, margins and cash without wrestling complex formulas.",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: GitBranch,
      title: "Scenario Planning",
      description: "Model best case, base case and lean plans. Adjust hiring, pricing and marketing spend and see instant impact on burn, runway and EBITDA.",
      color: "from-teal-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Risk Mitigation",
      description: "Set guardrails for cash buffers and covenant thresholds. Get alerts when assumptions or trends push you near risk boundaries.",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: RefreshCw,
      title: "Real Time Refresh",
      description: "Keep a single source of truth. Forecasts update as actuals arrive so reviews are always current.",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: PresentationIcon,
      title: "Investor-Ready Outputs",
      description: "Clean charts, tables and commentary you can use for board and investor packs without rebuilding slides.",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const useCases = [
    {
      icon: Users,
      question: "Can we hire now or defer?",
      answer: "Add roles, salaries and start dates. Ryzup.ai recalculates burn and runway to show a clear go or wait decision.",
      color: "bg-emerald-500"
    },
    {
      icon: DollarSign,
      question: "What if revenue slips for a quarter?",
      answer: "Dial down the topline by 10 to 30 percent and identify the levers that protect cash and margin.",
      color: "bg-teal-500"
    },
    {
      icon: Megaphone,
      question: "Should we scale paid marketing?",
      answer: "Increase budget and apply expected CAC and payback. See when the plan breaks even and how it affects the runway.",
      color: "bg-cyan-500"
    }
  ];

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
            What You Get With{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
              Ryzup.ai
            </span>
          </h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Example Use Cases */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
            Example Use Cases
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-2xl overflow-hidden border border-gray-100"
            >
              {/* Mock UI Header */}
              <div className="bg-gray-800 px-4 py-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-2 text-xs text-gray-400">Ryzup.ai Scenario</span>
              </div>
              
              <div className="p-6">
                <div className={`w-12 h-12 rounded-xl ${useCase.color} flex items-center justify-center mb-4`}>
                  <useCase.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{useCase.question}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{useCase.answer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouGetSection;
