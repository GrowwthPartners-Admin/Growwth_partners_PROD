import { motion } from "framer-motion";
import { 
  TrendingUp, 
  GitBranch, 
  Shield, 
  RefreshCw, 
  PresentationIcon,
  Users,
  DollarSign,
  Megaphone,
  ArrowUp,
  ArrowDown,
  Check,
  X,
  BarChart3,
  Target
} from "lucide-react";

const WhatYouGetSection = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Predictive Models",
      description: "Generate forward views for revenue, costs, margins and cash without wrestling complex formulas.",
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: GitBranch,
      title: "Scenario Planning",
      description: "Model best case, base case and lean plans. Adjust hiring, pricing and marketing spend and see instant impact on burn, runway and EBITDA.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Shield,
      title: "Risk Mitigation",
      description: "Set guardrails for cash buffers and covenant thresholds. Get alerts when assumptions or trends push you near risk boundaries.",
      color: "from-yellow-500 to-amber-500"
    },
    {
      icon: RefreshCw,
      title: "Real Time Refresh",
      description: "Keep a single source of truth. Forecasts update as actuals arrive so reviews are always current.",
      color: "from-amber-600 to-yellow-500"
    },
    {
      icon: PresentationIcon,
      title: "Investor-Ready Outputs",
      description: "Clean charts, tables and commentary you can use for board and investor packs without rebuilding slides.",
      color: "from-orange-600 to-amber-500"
    }
  ];

  const useCases = [
    {
      icon: Users,
      question: "Can we hire now or defer?",
      answer: "Add roles, salaries and start dates. Ryzup.ai recalculates burn and runway to show a clear go or wait decision.",
      screenshot: {
        title: "Hiring Impact Analysis",
        rows: [
          { role: "Senior Developer", salary: "AED 35,000", start: "Mar 2025", impact: "+12%" },
          { role: "Product Manager", salary: "AED 28,000", start: "Apr 2025", impact: "+8%" },
          { role: "UX Designer", salary: "AED 22,000", start: "May 2025", impact: "+5%" },
        ],
        metrics: [
          { label: "Current Runway", value: "18 mo", change: null },
          { label: "Post-Hire Runway", value: "14 mo", change: "-4 mo" },
          { label: "Burn Increase", value: "+25%", change: null },
        ],
        recommendation: "Defer UX Designer to Q3 to maintain 16-month runway"
      }
    },
    {
      icon: DollarSign,
      question: "What if revenue slips for a quarter?",
      answer: "Dial down the topline by 10 to 30 percent and identify the levers that protect cash and margin.",
      screenshot: {
        title: "Revenue Scenario Comparison",
        scenarios: [
          { name: "Base Case", revenue: "AED 2.4M", margin: "32%", status: "current" },
          { name: "-10% Revenue", revenue: "AED 2.16M", margin: "28%", status: "warning" },
          { name: "-20% Revenue", revenue: "AED 1.92M", margin: "22%", status: "danger" },
          { name: "-30% Revenue", revenue: "AED 1.68M", margin: "15%", status: "critical" },
        ],
        levers: ["Reduce marketing 15%", "Pause new hires", "Renegotiate vendor contracts"]
      }
    },
    {
      icon: Megaphone,
      question: "Should we scale paid marketing?",
      answer: "Increase budget and apply expected CAC and payback. See when the plan breaks even and how it affects the runway.",
      screenshot: {
        title: "Marketing ROI Forecast",
        chart: [30, 45, 55, 70, 85, 95, 110, 125],
        metrics: [
          { label: "Budget Increase", value: "+50%", icon: "up" },
          { label: "Expected CAC", value: "AED 450", icon: "neutral" },
          { label: "Payback Period", value: "4.2 mo", icon: "neutral" },
          { label: "Break Even", value: "Month 6", icon: "check" },
        ],
        impact: "Runway reduces by 2 months but LTV:CAC improves to 4.8:1"
      }
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
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
              className="group relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-amber-200"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Example Use Cases with Screenshots */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
            Example Use Cases
          </h3>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            See how Ryzup.ai helps UAE finance teams make faster, smarter decisions
          </p>
        </motion.div>

        <div className="space-y-12 max-w-6xl mx-auto">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900">{useCase.question}</h4>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">{useCase.answer}</p>
              </div>

              {/* Screenshot UI */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
                  {/* Window Header */}
                  <div className="bg-slate-800 px-4 py-3 flex items-center gap-2 border-b border-slate-700">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                    <span className="ml-3 text-xs text-slate-400">{useCase.screenshot.title} — Ryzup.ai</span>
                  </div>
                  
                  <div className="p-5">
                    {/* Hiring Use Case */}
                    {index === 0 && (
                      <>
                        <div className="overflow-x-auto mb-4">
                          <table className="w-full text-sm">
                            <thead>
                              <tr className="text-slate-400 text-left border-b border-slate-700">
                                <th className="pb-2 font-medium">Role</th>
                                <th className="pb-2 font-medium">Salary</th>
                                <th className="pb-2 font-medium">Start</th>
                                <th className="pb-2 font-medium">Burn Impact</th>
                              </tr>
                            </thead>
                            <tbody>
                              {useCase.screenshot.rows?.map((row, i) => (
                                <tr key={i} className="border-b border-slate-700/50 text-slate-300">
                                  <td className="py-2">{row.role}</td>
                                  <td className="py-2 text-amber-400">{row.salary}</td>
                                  <td className="py-2">{row.start}</td>
                                  <td className="py-2 text-orange-400">{row.impact}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                        <div className="grid grid-cols-3 gap-3 mb-4">
                          {useCase.screenshot.metrics?.map((metric, i) => (
                            <div key={i} className="bg-slate-800 rounded-lg p-3 text-center">
                              <div className="text-slate-400 text-xs mb-1">{metric.label}</div>
                              <div className="text-amber-400 font-bold">{metric.value}</div>
                              {metric.change && <div className="text-red-400 text-xs">{metric.change}</div>}
                            </div>
                          ))}
                        </div>
                        <div className="bg-amber-500/20 border border-amber-500/30 rounded-lg p-3 flex items-start gap-2">
                          <Check className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                          <span className="text-amber-300 text-sm">{useCase.screenshot.recommendation}</span>
                        </div>
                      </>
                    )}

                    {/* Revenue Scenario Use Case */}
                    {index === 1 && (
                      <>
                        <div className="space-y-2 mb-4">
                          {useCase.screenshot.scenarios?.map((scenario, i) => (
                            <div key={i} className={`flex items-center justify-between p-3 rounded-lg ${
                              scenario.status === 'current' ? 'bg-amber-500/20 border border-amber-500/30' :
                              scenario.status === 'warning' ? 'bg-yellow-500/10 border border-yellow-500/20' :
                              scenario.status === 'danger' ? 'bg-orange-500/10 border border-orange-500/20' :
                              'bg-red-500/10 border border-red-500/20'
                            }`}>
                              <span className="text-slate-300 font-medium">{scenario.name}</span>
                              <div className="flex items-center gap-4">
                                <span className={`${
                                  scenario.status === 'current' ? 'text-amber-400' :
                                  scenario.status === 'warning' ? 'text-yellow-400' :
                                  scenario.status === 'danger' ? 'text-orange-400' :
                                  'text-red-400'
                                }`}>{scenario.revenue}</span>
                                <span className="text-slate-400">Margin: {scenario.margin}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="bg-slate-800 rounded-lg p-3">
                          <div className="text-slate-400 text-xs mb-2">Recommended Levers</div>
                          <div className="flex flex-wrap gap-2">
                            {useCase.screenshot.levers?.map((lever, i) => (
                              <span key={i} className="bg-amber-500/20 text-amber-300 text-xs px-2 py-1 rounded-full">{lever}</span>
                            ))}
                          </div>
                        </div>
                      </>
                    )}

                    {/* Marketing ROI Use Case */}
                    {index === 2 && (
                      <>
                        <div className="flex items-end gap-1 h-20 mb-4 px-2">
                          {useCase.screenshot.chart?.map((height, i) => (
                            <motion.div
                              key={i}
                              initial={{ height: 0 }}
                              whileInView={{ height: `${height * 0.8}%` }}
                              viewport={{ once: true }}
                              transition={{ delay: i * 0.1, duration: 0.5 }}
                              className="flex-1 bg-gradient-to-t from-amber-500 to-orange-400 rounded-t"
                            />
                          ))}
                        </div>
                        <div className="text-center text-xs text-slate-500 mb-4">Revenue Growth Projection (8 months)</div>
                        <div className="grid grid-cols-2 gap-3 mb-4">
                          {useCase.screenshot.metrics?.map((metric, i) => (
                            <div key={i} className="bg-slate-800 rounded-lg p-3 flex items-center gap-2">
                              {metric.icon === 'up' && <ArrowUp className="w-4 h-4 text-amber-400" />}
                              {metric.icon === 'check' && <Check className="w-4 h-4 text-green-400" />}
                              {metric.icon === 'neutral' && <BarChart3 className="w-4 h-4 text-slate-400" />}
                              <div>
                                <div className="text-slate-400 text-xs">{metric.label}</div>
                                <div className="text-white font-semibold">{metric.value}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-3 flex items-start gap-2">
                          <Target className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-green-300 text-sm">{useCase.screenshot.impact}</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouGetSection;
