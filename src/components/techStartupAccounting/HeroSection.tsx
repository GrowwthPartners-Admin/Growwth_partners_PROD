import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calculator, TrendingUp, BarChart3 } from "lucide-react";
import { ContactModal } from "@/components/ui/contact-modal";
import { useState } from "react";

export const HeroSection = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-orange/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-brand-orange/10 to-blue-500/10 rounded-full blur-3xl" />
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
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <Calculator className="w-4 h-4 text-brand-orange" />
              <span className="text-white/90 text-sm font-medium">Tech-First Accounting</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Smart Accounting for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-400">
                Fast-Growing Tech Startups
              </span>
            </h1>

            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Growwth Partners is built by operators from the fintech and SaaS trenches. Founder Jatin Detwani has led finance in high-growth environments and also founded Ryzup.ai, an AI platform used by finance teams to clean data, speed up closes, and forecast with confidence. That means your books, metrics, and board packs are managed by a team that actually understands product velocity, monthly cohorts, and investor expectations, not just debits and credits.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => window.open("https://calendly.com/jd-growwthpartners/15min?month=2025-11", "_blank")}
                className="bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-6 text-lg rounded-xl shadow-lg font-semibold hover:shadow-xl transition-all duration-300 group"
              >
                Book a Free Finance Audit
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => setContactModalOpen(true)}
                className="border-2 border-white/30 text-white bg-white/5 px-8 py-6 text-lg rounded-xl font-semibold transition-all duration-300"
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
            <div className="relative h-[500px]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="absolute top-10 left-10 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-orange/20 flex items-center justify-center">
                    <Calculator className="w-6 h-6 text-brand-orange" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">SaaS Metrics</p>
                    <p className="text-gray-400 text-sm">MRR, ARR, NRR tracked</p>
                  </div>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-[90%] bg-gradient-to-r from-brand-orange to-amber-400 rounded-full" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute top-40 right-0 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Faster Closes</p>
                    <p className="text-gray-400 text-sm">Weeks to days</p>
                  </div>
                </div>
                <p className="text-3xl font-bold text-white">5x</p>
                <p className="text-gray-400 text-sm">Faster close cycles</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute bottom-20 left-20 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Investor Ready</p>
                    <p className="text-gray-400 text-sm">Board packs included</p>
                  </div>
                </div>
                <p className="text-3xl font-bold text-white">100+</p>
                <p className="text-gray-400 text-sm">Tech startups served</p>
              </motion.div>
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
