import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Building2, TrendingUp, CheckCircle, ArrowRight } from "lucide-react";
import { useState } from "react";
import { ContactModal } from "@/components/ui/contact-modal";

export const BuiltForCFOsSection = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const useCases = [
    {
      icon: Users,
      text: "Report to founders, boards and investors with confidence",
    },
    {
      icon: Building2,
      text: "Manage multiple entities and fast growing teams without scaling headcount at the same rate",
    },
    {
      icon: TrendingUp,
      text: "Make hiring, spend and expansion decisions with a clear view of cash and profitability",
    },
  ];

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span className="text-cyan-400 text-sm font-medium">Singapore-Based</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Built For CFOs And Finance Leaders{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  In Singapore
                </span>
              </h2>

              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Ryzup.ai is headquartered in Singapore and built around the realities of regional and global finance teams.
              </p>

              <p className="text-lg text-white font-medium mb-6">
                Use Ryzup.ai when you need to:
              </p>

              <div className="space-y-4 mb-8">
                {useCases.map((useCase, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <useCase.icon className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-gray-300 leading-relaxed pt-2">{useCase.text}</p>
                  </motion.div>
                ))}
              </div>

              <p className="text-gray-400 italic mb-8">
                Instead of digging through spreadsheets before every meeting, you open your AI CFO and ask.
              </p>

              <Button
                size="lg"
                onClick={() => setContactModalOpen(true)}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg shadow-cyan-500/25 transition-all"
              >
                Talk To A Ryzup.ai Expert In Singapore
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>

            {/* Right visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Singapore Headquarters</h3>
                  <p className="text-gray-400">Serving APAC & Global Teams</p>
                </div>

                <div className="space-y-4">
                  {[
                    "Local expertise in Singapore regulations",
                    "Multi-currency & multi-entity support",
                    "24/7 AI-powered assistance",
                    "Dedicated Singapore support team",
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 bg-white/5 rounded-xl p-4"
                    >
                      <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Floating Singapore map indicator */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl p-4 shadow-xl"
              >
                <div className="text-white text-center">
                  <p className="text-2xl font-bold">SG</p>
                  <p className="text-xs opacity-80">Based</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <ContactModal open={contactModalOpen} onOpenChange={setContactModalOpen} />
    </>
  );
};
