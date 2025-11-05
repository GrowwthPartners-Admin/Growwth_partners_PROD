import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Shield, Sparkles, TrendingUp, Zap } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-white to-[#F2FCE2]/30">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-orange/10 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-brand-orange" />
              <span className="text-sm font-semibold text-brand-orange">Transform Your Finance with AI Precision</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Use of AI in <span className="text-brand-orange">Finance</span>
            </h1>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              RyzUp brings the power of AI in finance directly into your daily workflow. Get instant clarity on cash flow, forecasting, spend, and performance without manual spreadsheets, slow reporting, or guesswork. Finance teams, founders, and operators use RyzUp to work faster, cut errors, and make better decisions in real time.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://workspace.google.com/u/0/marketplace/app/ryzup_sheets/1047771589087?flow_type=2&utm_source=website&utm_medium=click&utm_campaign=promotion&utm_content=cta"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-brand-orange text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-brand-orange/90 transition-colors"
              >
                Get Started Free
              </a>
              <a
                href="https://calendly.com/jd-growwthpartners/15min?month=2025-11"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-brand-orange border-2 border-brand-orange px-8 py-4 rounded-lg font-semibold text-lg hover:bg-brand-orange/10 transition-colors"
              >
                Request a Demo
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-brand-orange/20 to-brand-blue/20 p-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <TrendingUp className="w-8 h-8 text-brand-orange mb-3" />
                  <h3 className="font-bold mb-2 text-gray-900">Automated Forecasting</h3>
                  <p className="text-sm text-gray-700">Real-time predictions</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <Zap className="w-8 h-8 text-brand-orange mb-3" />
                  <h3 className="font-bold mb-2 text-gray-900">Instant Insights</h3>
                  <p className="text-sm text-gray-700">AI-powered analysis</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg ">
                  <Sparkles className="w-8 h-8 text-brand-orange mb-3" />
                  <h3 className="font-bold mb-2 text-gray-900">Smart Anomaly Detection</h3>
                  <p className="text-sm text-gray-700">Catch issues before they become problems</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg ">
                  <Shield className="w-8 h-8 text-brand-orange mb-3" />
                  <h3 className="font-bold mb-2 text-gray-900">Data Security</h3>
                  <p className="text-sm text-gray-700">Your sensitive data is safe and secure</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
