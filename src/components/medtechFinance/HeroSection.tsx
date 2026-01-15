import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, HeartPulse, Shield, Activity } from "lucide-react";
import { useState } from "react";
import { ContactModal } from "@/components/ui/contact-modal";

const HeroSection = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-brand-orange/20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-300/5 rounded-full blur-3xl" />
      </div>

      {/* Medical grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f97316' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 border border-orange-500/30 rounded-full"
            >
              <HeartPulse className="w-4 h-4 text-orange-400" />
              <span className="text-orange-300 text-sm font-medium">Finance for Regulated, High-Compliance MedTech Growth</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              MedTech & Healthcare Finance Services in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                Singapore
              </span>
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed max-w-xl">
              Compliance-Ready Financial Control, Cost Visibility & Sustainable Growth for Healthcare Businesses
            </p>

            <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
              Growwth Partners' MedTech & Healthcare Finance services in Singapore provide CFO-led financial leadership, regulatory-ready reporting, and scalable finance systems—helping healthcare businesses grow responsibly while maintaining compliance and financial clarity.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300"
                onClick={() => setContactModalOpen(true)}
              >
                Speak to a Healthcare Finance Expert
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main visual card */}
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-3xl p-8 border border-orange-500/20 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-slate-800/60 rounded-2xl p-6 border border-orange-500/10">
                    <HeartPulse className="w-10 h-10 text-orange-400 mb-4" />
                    <h3 className="text-white font-semibold mb-2">Regulatory Compliance</h3>
                    <p className="text-slate-400 text-sm">Audit-ready financial systems</p>
                  </div>
                  <div className="bg-slate-800/60 rounded-2xl p-6 border border-orange-500/10">
                    <Shield className="w-10 h-10 text-orange-400 mb-4" />
                    <h3 className="text-white font-semibold mb-2">Financial Governance</h3>
                    <p className="text-slate-400 text-sm">Risk management & controls</p>
                  </div>
                  <div className="bg-slate-800/60 rounded-2xl p-6 border border-orange-500/10">
                    <Activity className="w-10 h-10 text-orange-400 mb-4" />
                    <h3 className="text-white font-semibold mb-2">Cost Visibility</h3>
                    <p className="text-slate-400 text-sm">R&D and operational tracking</p>
                  </div>
                  <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-2xl p-6 border border-orange-500/30">
                    <div className="text-3xl font-bold text-orange-400 mb-2">CFO-Led</div>
                    <p className="text-slate-300 text-sm">Strategic healthcare finance leadership</p>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-4 shadow-xl"
              >
                <HeartPulse className="w-8 h-8 text-white" />
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

export default HeroSection;
