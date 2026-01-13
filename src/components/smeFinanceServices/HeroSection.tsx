import { motion } from "framer-motion";
import { TrendingUp, ArrowRight, BarChart3, DollarSign, PieChart } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-brand-orange/20 pt-16 md:pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-orange/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-brand-orange/5 to-emerald-500/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-brand-orange/20 rounded-full text-brand-orange text-sm font-medium mb-6"
            >
              <TrendingUp className="w-4 h-4" />
              Finance Built for Speed, Scale & Fundraising
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              SME Finance Services in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-orange-400">
                Singapore
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light">
              Practical Financial Control, Predictable Cash Flow & Better Decision-Making for SMEs
            </p>

            <p className="text-gray-400 text-lg mb-8 max-w-xl">
              Growwth Partners delivers scalable financial control and profitability insights for Singapore SMEs—enabling confident decision-making without the overhead of a large in-house team
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                onClick={() =>
                  window.open(
                    "https://calendly.com/jd-growwthpartners/15min?month=2025-11",
                    "_blank"
                  )
                }
                className="bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-6 text-lg group"
              >
                Speak to an SME Finance Expert
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
              <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/20 to-emerald-500/20 rounded-3xl blur-2xl" />
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="SME Finance services - financial analysis and planning"
                className="relative rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]"
              />
              
              {/* Floating stats cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">Better</div>
                    <div className="text-sm text-gray-600">Cash Visibility</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-orange/10 rounded-xl flex items-center justify-center">
                    <PieChart className="w-5 h-5 text-brand-orange" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">Smarter</div>
                    <div className="text-sm text-gray-600">Decisions</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 }}
                className="absolute top-1/2 -right-8 bg-white rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">Stronger</div>
                    <div className="text-sm text-gray-600">Profitability</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
