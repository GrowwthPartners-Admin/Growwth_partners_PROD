import { motion } from "framer-motion";
import { 
  AlertCircle, 
  FileSearch, 
  ShieldCheck, 
  Brain,
  CheckCircle2,
  Zap
} from "lucide-react";

const features = [
  {
    icon: AlertCircle,
    title: "Catch Hidden Errors and Anomalies in Spreadsheets",
    description: "The Error Detector Agent scans your Google Sheets with AI, spotting formula errors, data mismatches and financial inconsistencies that humans miss. It runs in live mode, monitoring as people work, and gives clear fix suggestions.",
    benefits: [
      "Manipulated or mis-keyed numbers slipping into reports",
      "Broken formulas masking irregular transactions",
      "Costly mistakes that can look like (or hide) fraud"
    ],
    highlight: "This is where AI fraud detection for Singapore businesses starts: clean, trustworthy data.",
    gradient: "from-red-500 to-orange-500"
  },
  {
    icon: FileSearch,
    title: "Strengthen Controls With GL, Reconciliation & Auditor Agents",
    description: "Inside Ryzup Sheets, finance teams can use agents like GL Analyser, Reconciliation Agent, Bookkeeping Review Agent and Auditor Agent to accelerate reconciliations, validate postings and highlight unusual patterns across ledgers and reports.",
    benefits: [
      "Compare data across systems and catch mismatched entries",
      "Flag out-of-pattern transactions for review",
      "Support audit readiness with documented, automated checks"
    ],
    highlight: "Together, they operate like AI compliance tools for finance teams: always-on helpers that reduce manual work and tighten your control environment.",
    gradient: "from-orange-500 to-amber-500"
  },
  {
    icon: ShieldCheck,
    title: "Protect Sensitive Data While Using AI",
    description: "The Ryzup Anonymiser lets you mask client names, company identifiers and other sensitive fields in Sheets before any AI processing happens. It replaces them with secure placeholders while preserving the structure of your data.",
    benefits: [
      "Use AI on financial data without exposing real identities",
      "Reduce the risk of data leaks to external models or third parties",
      "Support compliance with privacy regulations like GDPR and similar frameworks"
    ],
    highlight: "In other words, you get AI compliance tools that are built with privacy by design.",
    gradient: "from-sky-500 to-blue-500"
  },
  {
    icon: Brain,
    title: "Turn Risk Signals Into Actionable Insights",
    description: "With Ryzup.ai's built-in AI assistant and AI CFO experience, teams can ask questions in plain English and surface insights instantly—like unusual spend patterns, unexpected margin shifts or outlier transactions.",
    benefits: [
      '"Which accounts show abnormal movement this month?"',
      '"Where did expenses spike compared to last quarter?"',
      '"Which customers or suppliers look out of pattern?"'
    ],
    highlight: "That combination of monitoring + explanation is what makes AI fraud detection for Singapore finance teams practical day-to-day.",
    gradient: "from-violet-500 to-purple-500"
  }
];

export const HowRyzupHelpsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-orange/30 bg-brand-orange/10 px-4 py-2 text-sm font-medium text-brand-orange mb-4">
            <Zap className="w-4 h-4" />
            AI-Powered Protection
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            How Ryzup.ai Helps You Catch Problems{" "}
            <span className="text-brand-orange">Before They Become Fraud</span>
          </h2>
          <p className="text-lg text-slate-600">
            Traditional controls rely on manual reviews, reconciliations and "hoping" nothing slipped through. Ryzup.ai plugs directly into the tools your finance team already uses and layers AI on top to surface issues early.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="space-y-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} mb-6`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    {feature.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    {feature.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-sm font-medium text-slate-900 bg-slate-100 rounded-lg p-4 border-l-4 border-brand-orange">
                    {feature.highlight}
                  </p>
                </div>
              </div>

              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className={`bg-gradient-to-br ${feature.gradient} rounded-2xl p-1`}>
                  <div className="bg-slate-900 rounded-xl p-8">
                    <div className="space-y-4">
                      {/* Visual representation */}
                      <div className="flex items-center gap-4 text-white/80">
                        <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                          <feature.icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "75%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className={`h-full bg-gradient-to-r ${feature.gradient} rounded-full`}
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-3">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="bg-white/5 rounded-lg p-4 text-center">
                            <div className={`text-2xl font-bold bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                              {i === 1 ? "24/7" : i === 2 ? "99%" : "<1s"}
                            </div>
                            <div className="text-xs text-white/50 mt-1">
                              {i === 1 ? "Monitoring" : i === 2 ? "Accuracy" : "Response"}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="flex items-center gap-2 text-green-400 text-sm mb-2">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>AI Analysis Complete</span>
                        </div>
                        <div className="text-white/60 text-xs">
                          All checks passed. No critical issues detected.
                        </div>
                      </div>
                    </div>
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
