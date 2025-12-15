import { motion } from "framer-motion";
import {
  Search,
  BookOpen,
  EyeOff,
  Bell,
  FileText,
  AlertTriangle,
  FileCheck,
  Shield,
  Clock,
  Check,
  X,
  TrendingUp,
  BarChart3,
} from "lucide-react";

const WhatYouGetSection = () => {
  const features = [
    {
      icon: Search,
      title: "Smart Error Detection",
      description:
        "Scan Google Sheets for broken formulas, inconsistent ranges, duplicate logic, and unusual values. Reduce silent errors that hide fraud signals and create compliance gaps.",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: BookOpen,
      title: "GL, Reconciliation & Audit Agents",
      description:
        "Automate ledger checks, reconciliations, bookkeeping review, and audit prep. Flag out-of-pattern postings, cross-source mismatches, and unreconciled balances.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: EyeOff,
      title: "Anonymiser for Privacy-Safe AI",
      description:
        "Mask client names, supplier identifiers, and sensitive fields while preserving structure. Run AI safely and support AI compliance in the UAE.",
      color: "from-yellow-500 to-amber-500",
    },
    {
      icon: Bell,
      title: "Continuous Monitoring & Alerts",
      description:
        "Turn recurring checks into automated guardrails. Get notified when metrics drift, rules break, or transactions fall outside expected patterns.",
      color: "from-amber-600 to-yellow-500",
    },
    {
      icon: FileText,
      title: "Decision-Ready Reporting",
      description:
        "Convert findings into clear summaries and dashboards that help finance, risk, and leadership act quickly.",
      color: "from-orange-600 to-amber-500",
    },
  ];

  const useCases = [
    {
      icon: AlertTriangle,
      title: "Fraud and Anomaly Detection",
      description:
        "Spot unusual vendor payments, duplicate invoices, or unexpected GL movements with AI risk monitoring.",
      screenshot: {
        title: "Anomaly Detection Dashboard",
        alerts: [
          { type: "critical", vendor: "ABC Supplies", amount: "AED 125,000", issue: "Duplicate Invoice", confidence: 94 },
          { type: "warning", vendor: "XYZ Services", amount: "AED 45,200", issue: "Unusual Timing", confidence: 78 },
          { type: "info", vendor: "Gulf Trading", amount: "AED 18,900", issue: "New Vendor", confidence: 65 },
        ],
        stats: [
          { label: "Anomalies Detected", value: "23" },
          { label: "False Positive Rate", value: "2.1%" },
          { label: "Avg Response Time", value: "4 hrs" },
        ],
      },
    },
    {
      icon: FileCheck,
      title: "Regulatory Automation",
      description:
        "Maintain VAT, Corporate Tax, and FTA-aligned documentation with consistent workpapers and logs.",
      screenshot: {
        title: "Compliance Status Overview",
        regulations: [
          { name: "VAT Returns", status: "compliant", dueDate: "Jan 28", progress: 100 },
          { name: "Corporate Tax", status: "in-progress", dueDate: "Mar 31", progress: 65 },
          { name: "FTA Documentation", status: "compliant", dueDate: "Ongoing", progress: 100 },
          { name: "ESR Filing", status: "pending", dueDate: "Dec 31", progress: 30 },
        ],
        automatedTasks: 47,
        timeSaved: "18 hrs/month",
      },
    },
    {
      icon: Shield,
      title: "Spreadsheet Risk Control",
      description:
        "Eliminate fragile formulas and hidden errors that lead to misstatements or non-compliance.",
      screenshot: {
        title: "Spreadsheet Health Report",
        issues: [
          { file: "Q4_Budget.xlsx", errors: 12, severity: "high" },
          { file: "Vendor_Payments.xlsx", errors: 5, severity: "medium" },
          { file: "Tax_Calc.xlsx", errors: 2, severity: "low" },
        ],
        metrics: [
          { label: "Files Scanned", value: "156" },
          { label: "Errors Found", value: "42" },
          { label: "Auto-Fixed", value: "38" },
        ],
      },
    },
    {
      icon: Clock,
      title: "Continuous Assurance",
      description:
        "Replace ad hoc checks with automated monitoring that runs in the background.",
      screenshot: {
        title: "Monitoring Dashboard",
        monitors: [
          { name: "Cash Balance Check", lastRun: "2 min ago", status: "passed", frequency: "Every 15 min" },
          { name: "AP/AR Reconciliation", lastRun: "1 hr ago", status: "passed", frequency: "Hourly" },
          { name: "Expense Policy Check", lastRun: "30 min ago", status: "warning", frequency: "Real-time" },
          { name: "Revenue Recognition", lastRun: "4 hrs ago", status: "passed", frequency: "Daily" },
        ],
        uptime: "99.9%",
        checksToday: 1847,
      },
    },
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
          {features.slice(0, 3).map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="w-full max-w-md mx-auto group relative bg-white rounded-2xl p-6 border border-gray-100 shadow hover:shadow-xl transition-all duration-300 hover:border-amber-200"
            >
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color}
        flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
              >
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Second row: 2 cards centered */}
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-center gap-6 mb-20">
          {features.slice(3).map((feature, index) => (
            <motion.div
              key={index + 3}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index + 3) * 0.1 }}
              className="w-full max-w-md mx-auto group relative bg-white rounded-2xl p-6 border border-gray-100 shadow hover:shadow-xl transition-all duration-300 hover:border-amber-200"
            >
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color}
        flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
              >
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
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
            Use Cases
          </h3>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            See how Ryzup.ai helps UAE finance teams stay compliant and prevent fraud
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
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Content */}
              <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900">
                    {useCase.title}
                  </h4>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {useCase.description}
                </p>
              </div>

              {/* Screenshot UI */}
              <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
                  {/* Window Header */}
                  <div className="bg-slate-800 px-4 py-3 flex items-center gap-2 border-b border-slate-700">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                    <span className="ml-3 text-xs text-slate-400">
                      {useCase.screenshot.title} — Ryzup.ai
                    </span>
                  </div>

                  <div className="p-5">
                    {/* Fraud Detection Use Case */}
                    {index === 0 && (
                      <>
                        <div className="space-y-2 mb-4">
                          {useCase.screenshot.alerts?.map((alert, i) => (
                            <div
                              key={i}
                              className={`flex items-center justify-between p-3 rounded-lg ${
                                alert.type === "critical"
                                  ? "bg-red-500/20 border border-red-500/30"
                                  : alert.type === "warning"
                                  ? "bg-yellow-500/10 border border-yellow-500/20"
                                  : "bg-blue-500/10 border border-blue-500/20"
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <AlertTriangle className={`w-4 h-4 ${
                                  alert.type === "critical" ? "text-red-400" : 
                                  alert.type === "warning" ? "text-yellow-400" : "text-blue-400"
                                }`} />
                                <div>
                                  <span className="text-slate-300 font-medium text-sm block">
                                    {alert.vendor}
                                  </span>
                                  <span className="text-slate-500 text-xs">{alert.issue}</span>
                                </div>
                              </div>
                              <div className="text-right">
                                <span className="text-amber-400 font-medium text-sm block">{alert.amount}</span>
                                <span className="text-slate-500 text-xs">{alert.confidence}% confidence</span>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="grid grid-cols-3 gap-3">
                          {useCase.screenshot.stats?.map((stat, i) => (
                            <div key={i} className="bg-slate-800 rounded-lg p-3 text-center">
                              <div className="text-slate-400 text-xs mb-1">{stat.label}</div>
                              <div className="text-amber-400 font-bold">{stat.value}</div>
                            </div>
                          ))}
                        </div>
                      </>
                    )}

                    {/* Regulatory Automation Use Case */}
                    {index === 1 && (
                      <>
                        <div className="space-y-2 mb-4">
                          {useCase.screenshot.regulations?.map((reg, i) => (
                            <div
                              key={i}
                              className="flex items-center justify-between p-3 rounded-lg bg-slate-800"
                            >
                              <div className="flex items-center gap-3">
                                <div className={`w-2 h-2 rounded-full ${
                                  reg.status === "compliant" ? "bg-green-400" : 
                                  reg.status === "in-progress" ? "bg-yellow-400" : "bg-orange-400"
                                }`} />
                                <span className="text-slate-300 font-medium text-sm">{reg.name}</span>
                              </div>
                              <div className="flex items-center gap-4">
                                <div className="w-24 h-2 bg-slate-700 rounded-full overflow-hidden">
                                  <div 
                                    className={`h-full rounded-full ${
                                      reg.status === "compliant" ? "bg-green-400" : 
                                      reg.status === "in-progress" ? "bg-yellow-400" : "bg-orange-400"
                                    }`}
                                    style={{ width: `${reg.progress}%` }}
                                  />
                                </div>
                                <span className="text-slate-400 text-xs w-16">{reg.dueDate}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="flex items-center justify-between bg-amber-500/20 border border-amber-500/30 rounded-lg p-3">
                          <span className="text-amber-300 text-sm">Automated Tasks</span>
                          <span className="text-amber-400 font-bold">{useCase.screenshot.automatedTasks}</span>
                        </div>
                      </>
                    )}

                    {/* Spreadsheet Risk Use Case */}
                    {index === 2 && (
                      <>
                        <div className="space-y-2 mb-4">
                          {useCase.screenshot.issues?.map((issue, i) => (
                            <div
                              key={i}
                              className="flex items-center justify-between p-3 rounded-lg bg-slate-800"
                            >
                              <div className="flex items-center gap-3">
                                <FileText className="w-4 h-4 text-slate-400" />
                                <span className="text-slate-300 text-sm">{issue.file}</span>
                              </div>
                              <div className="flex items-center gap-3">
                                <span className={`px-2 py-0.5 rounded text-xs ${
                                  issue.severity === "high" ? "bg-red-500/20 text-red-400" :
                                  issue.severity === "medium" ? "bg-yellow-500/20 text-yellow-400" :
                                  "bg-green-500/20 text-green-400"
                                }`}>
                                  {issue.errors} errors
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="grid grid-cols-3 gap-3">
                          {useCase.screenshot.metrics?.map((metric, i) => (
                            <div key={i} className="bg-slate-800 rounded-lg p-3 text-center">
                              <div className="text-slate-400 text-xs mb-1">{metric.label}</div>
                              <div className="text-amber-400 font-bold">{metric.value}</div>
                            </div>
                          ))}
                        </div>
                      </>
                    )}

                    {/* Continuous Assurance Use Case */}
                    {index === 3 && (
                      <>
                        <div className="space-y-2 mb-4">
                          {useCase.screenshot.monitors?.map((monitor, i) => (
                            <div
                              key={i}
                              className="flex items-center justify-between p-3 rounded-lg bg-slate-800"
                            >
                              <div className="flex items-center gap-3">
                                {monitor.status === "passed" ? (
                                  <Check className="w-4 h-4 text-green-400" />
                                ) : (
                                  <AlertTriangle className="w-4 h-4 text-yellow-400" />
                                )}
                                <div>
                                  <span className="text-slate-300 text-sm block">{monitor.name}</span>
                                  <span className="text-slate-500 text-xs">{monitor.frequency}</span>
                                </div>
                              </div>
                              <span className="text-slate-400 text-xs">{monitor.lastRun}</span>
                            </div>
                          ))}
                        </div>
                        <div className="flex items-center justify-between gap-4">
                          <div className="bg-amber-500/20 border border-amber-500/30 rounded-lg p-3 flex-1 text-center">
                            <div className="text-amber-300 text-xs">Uptime</div>
                            <div className="text-amber-400 font-bold">{useCase.screenshot.uptime}</div>
                          </div>
                          <div className="bg-slate-800 rounded-lg p-3 flex-1 text-center">
                            <div className="text-slate-400 text-xs">Checks Today</div>
                            <div className="text-amber-400 font-bold">{useCase.screenshot.checksToday?.toLocaleString()}</div>
                          </div>
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
