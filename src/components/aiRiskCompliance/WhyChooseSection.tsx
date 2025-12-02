import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Target, 
  Bell, 
  Lock, 
  Users,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

const reasons = [
  {
    icon: Target,
    title: "Built for finance workflows, not generic AI",
    description: "Deep focus on spreadsheets, Xero data and financial processes."
  },
  {
    icon: Bell,
    title: "Real-time alerts instead of after-the-fact surprises",
    description: "Live error detection and risk signals inside the tools you already use."
  },
  {
    icon: Lock,
    title: "Privacy-first design",
    description: "Anonymisation and controlled access so you can adopt AI safely."
  },
  {
    icon: Users,
    title: "Trusted by fast-growing companies across regions",
    description: "Startups and SMEs already use Ryzup.ai to manage finance at scale."
  }
];

export const WhyChooseSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-900 via-slate-900 to-red-950 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,_rgba(239,68,68,0.1),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(251,146,60,0.08),_transparent_50%)]" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-300 mb-6">
              <CheckCircle2 className="w-4 h-4" />
              Why Singapore Businesses Choose Us
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Why Singapore Businesses Choose{" "}
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                Ryzup.ai for Risk & Compliance
              </span>
            </h2>

            <div className="space-y-6 mb-8">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-red-500/20 to-orange-500/20 border border-red-500/30 flex items-center justify-center group-hover:from-red-500/30 group-hover:to-orange-500/30 transition-colors">
                    <reason.icon className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-slate-400">
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button
              size="lg"
              className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-semibold px-8 shadow-lg shadow-red-500/25 group"
              onClick={() => window.open("https://calendly.com/jd-growwthpartners/15min?month=2025-11", "_blank")}
            >
              See How Ryzup.ai Handles Risk & Fraud
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              {/* Dashboard mockup */}
              <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-white font-semibold">Risk Dashboard</h4>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs text-slate-400">Live</span>
                  </div>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-slate-700/30 rounded-xl p-4">
                    <div className="text-2xl font-bold text-green-400">0</div>
                    <div className="text-xs text-slate-400">Critical Alerts</div>
                  </div>
                  <div className="bg-slate-700/30 rounded-xl p-4">
                    <div className="text-2xl font-bold text-orange-400">3</div>
                    <div className="text-xs text-slate-400">Pending Review</div>
                  </div>
                  <div className="bg-slate-700/30 rounded-xl p-4">
                    <div className="text-2xl font-bold text-sky-400">1,247</div>
                    <div className="text-xs text-slate-400">Transactions Scanned</div>
                  </div>
                  <div className="bg-slate-700/30 rounded-xl p-4">
                    <div className="text-2xl font-bold text-white">99.8%</div>
                    <div className="text-xs text-slate-400">Accuracy Rate</div>
                  </div>
                </div>

                {/* Activity feed */}
                <div className="space-y-3">
                  <div className="text-xs text-slate-400 uppercase tracking-wider mb-2">Recent Activity</div>
                  {[
                    { status: "success", text: "Reconciliation completed - All matched", time: "2m ago" },
                    { status: "warning", text: "Unusual pattern flagged - Invoice #4521", time: "15m ago" },
                    { status: "success", text: "Data anonymisation complete", time: "1h ago" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm">
                      <div className={`h-2 w-2 rounded-full ${item.status === 'success' ? 'bg-green-500' : 'bg-orange-500'}`} />
                      <span className="text-slate-300 flex-1">{item.text}</span>
                      <span className="text-slate-500 text-xs">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-gradient-to-br from-sky-500/15 to-blue-500/15 rounded-full blur-3xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
