import { motion } from "framer-motion";
import { AlertTriangle, FileCheck, TableProperties, RefreshCcw } from "lucide-react";

const useCases = [
  {
    icon: AlertTriangle,
    title: "Fraud and Anomaly Detection",
    description: "Spot unusual vendor payments, duplicate invoices, or unexpected GL movements with AI risk detection.",
    aiResponse: {
      query: "Check vendor payments for anomalies",
      response: "Flagged 3 potential issues:\n• Duplicate invoice #4521 ($12,450)\n• Unusual payment timing to Vendor XYZ\n• Amount variance of +45% vs historical average",
      status: "3 items require review",
    },
  },
  {
    icon: FileCheck,
    title: "Compliance and Audit Readiness",
    description: "Maintain clean workpapers, consistent reconciliations, and privacy-safe data for audits and reviews in Australia.",
    aiResponse: {
      query: "Prepare audit documentation",
      response: "Audit pack generated:\n• Bank reconciliations: 12 months ✓\n• GL schedules: Complete ✓\n• Supporting docs: 847 items linked\n• Compliance checklist: 94% complete",
      status: "Ready for review",
    },
  },
  {
    icon: TableProperties,
    title: "Spreadsheet Risk Control",
    description: "Eliminate fragile formulas and hidden errors that lead to misstatements or non-compliance.",
    aiResponse: {
      query: "Scan spreadsheet for errors",
      response: "Found 7 issues:\n• 2 broken formula references\n• 3 inconsistent range definitions\n• 1 circular reference\n• 1 hardcoded value in formula",
      status: "Auto-fix available",
    },
  },
  {
    icon: RefreshCcw,
    title: "Continuous Assurance",
    description: "Replace ad hoc checks with automated monitoring that runs in the background.",
    aiResponse: {
      query: "Daily monitoring summary",
      response: "24-hour activity:\n• 156 transactions verified\n• 0 anomalies detected\n• 2 reconciliation items cleared\n• All controls within thresholds",
      status: "All systems normal",
    },
  },
];

export const UseCasesSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-orange-50/20 to-red-50/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Use{" "}
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Cases
            </span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            See how Ryzup.ai helps Australian businesses detect risk and maintain compliance
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {useCases.map((useCase, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                  <useCase.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-1">{useCase.title}</h3>
                  <p className="text-slate-600 text-sm">{useCase.description}</p>
                </div>
              </div>

              {/* AI Response Mockup */}
              <div className="bg-slate-900 rounded-xl p-4 border border-slate-700">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">AI</span>
                  </div>
                  <span className="text-slate-400 text-sm">Ryzup.ai Response</span>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-3 mb-3">
                  <p className="text-slate-400 text-xs mb-2">Query: "{useCase.aiResponse.query}"</p>
                  <pre className="text-green-400 text-sm whitespace-pre-wrap font-mono">
                    {useCase.aiResponse.response}
                  </pre>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-orange-400 text-xs">{useCase.aiResponse.status}</span>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-slate-500 text-xs">Live</span>
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
