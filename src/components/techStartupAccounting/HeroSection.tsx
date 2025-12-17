import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calculator } from "lucide-react";
import { ContactModal } from "@/components/ui/contact-modal";
import { useState } from "react";

export const HeroSection = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.2, 0.4] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBtLTEgMGExIDEgMCAxIDAgMiAwYTEgMSAwIDEgMCAtMiAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIi8+PC9nPjwvc3ZnPg==')] opacity-40" />

      <div className="container-custom relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/20 border border-indigo-400/30 rounded-full mb-6"
            >
              <Calculator className="w-4 h-4 text-indigo-400" />
              <span className="text-indigo-300 text-sm font-medium">Tech-First Accounting</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Smart Accounting for{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Fast-Growing Tech Startups
              </span>
            </h1>

            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Growwth Partners is built by operators from the fintech and SaaS trenches. Founder Jatin Detwani has led finance in high-growth environments and also founded Ryzup.ai, an AI platform used by finance teams to clean data, speed up closes, and forecast with confidence. That means your books, metrics, and board packs are managed by a team that actually understands product velocity, monthly cohorts, and investor expectations, not just debits and credits.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8 py-6 text-lg shadow-lg shadow-indigo-500/30"
                onClick={() => setContactModalOpen(true)}
              >
                Book a Free Finance Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-500 text-white hover:bg-slate-800/50 px-8 py-6 text-lg"
                onClick={() => setContactModalOpen(true)}
              >
                Speak to a Startup Accounting Specialist
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            {/* Floating stat cards */}
            <motion.div
              className="absolute top-0 right-0 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <div className="text-3xl font-bold text-white mb-1">98%</div>
              <div className="text-slate-300 text-sm">Client Retention</div>
            </motion.div>

            <motion.div
              className="absolute bottom-20 left-0 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-xl"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              <div className="text-3xl font-bold text-indigo-400 mb-1">5x</div>
              <div className="text-slate-300 text-sm">Faster Close Cycles</div>
            </motion.div>

            <motion.div
              className="absolute top-1/2 right-10 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-xl"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
            >
              <div className="text-3xl font-bold text-cyan-400 mb-1">100+</div>
              <div className="text-slate-300 text-sm">Tech Startups Served</div>
            </motion.div>

            {/* Central visual element */}
            <div className="w-80 h-80 mx-auto relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-indigo-500/30 to-purple-600/30 rounded-3xl"
                animate={{ rotate: [0, 5, 0, -5, 0] }}
                transition={{ duration: 10, repeat: Infinity }}
              />
              <div className="absolute inset-4 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl flex items-center justify-center">
                <Calculator className="w-24 h-24 text-indigo-400/50" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <ContactModal
        open={contactModalOpen}
        onOpenChange={setContactModalOpen}
      />
    </section>
  );
};
