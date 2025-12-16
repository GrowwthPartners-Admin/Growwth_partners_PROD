import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Building2, CreditCard, TrendingUp } from "lucide-react";
import { ContactModal } from "@/components/ui/contact-modal";

const HeroSection = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-orange/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-brand-orange/10 to-blue-500/10 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <Building2 className="w-4 h-4 text-brand-orange" />
              <span className="text-white/90 text-sm font-medium">Business Banking Solutions</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Smart and Simple{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-400">
                Banking
              </span>{" "}
              for Startups and SMEs
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
              Growwth Partners helps founders pick the right bank, set up accounts, streamline payments, and automate reconciliation. Get practical business banking solutions that reduce friction from day one.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button
                size="lg"
                onClick={() => setContactModalOpen(true)}
                className="bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-6 text-lg rounded-xl shadow-lg font-semibold hover:shadow-xl transition-all duration-300 group"
              >
                Book a Free Banking Setup Consult
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => setContactModalOpen(true)}
                className="border-2 border-white/30 text-white bg-white/5 hover:bg-white/10 px-8 py-6 text-lg rounded-xl font-semibold transition-all duration-300"
              >
                <Calendar className="mr-2 w-5 h-5" />
                Get a Banking Checklist
              </Button>
            </div>
          </motion.div>

          {/* Right side - Floating stat cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative h-[500px]">
              {/* Main visual card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="absolute top-10 left-10 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-orange/20 flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-brand-orange" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Bank Selection</p>
                    <p className="text-gray-400 text-sm">Multi-currency ready</p>
                  </div>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-[85%] bg-gradient-to-r from-brand-orange to-amber-400 rounded-full" />
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
                    <CreditCard className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Payment Rails</p>
                    <p className="text-gray-400 text-sm">Gateway configured</p>
                  </div>
                </div>
                <div className="flex gap-2 mt-2">
                  <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">Stripe</span>
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full">PayPal</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute bottom-20 left-20 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Auto Reconciliation</p>
                    <p className="text-gray-400 text-sm">Books always accurate</p>
                  </div>
                </div>
                <p className="text-3xl font-bold text-white">98%</p>
                <p className="text-gray-400 text-sm">Auto-matched transactions</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <ContactModal open={contactModalOpen} onOpenChange={setContactModalOpen} />
    </section>
  );
};

export default HeroSection;
