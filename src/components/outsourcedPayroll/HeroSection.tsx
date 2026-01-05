import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Shield } from "lucide-react";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(249,115,22,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(249,115,22,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 opacity-20 bg-grid-pattern"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-8xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-orange-400 bg-orange-500/10 rounded-full border border-orange-500/20">
              Error-Free, On-Time Payroll—Every Month
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Outsourced Payroll Services in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">
                Singapore
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 mb-4 font-light">
              Accurate, Compliant, and On-Time Payroll—Without Operational
              Headaches
            </p>

            <p className="text-lg text-slate-400 mb-8 max-w-3xl mx-auto">
              Growwth Partners' Outsourced Payroll services in Singapore ensure
              accurate salary processing, statutory compliance, and timely
              payouts—delivered through structured processes, experienced
              payroll professionals, and integrated finance workflows.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Button
                size="lg"
                onClick={() =>
                  window.open(
                    "https://calendly.com/jd-growwthpartners/15min?month=2025-11",
                    "_blank"
                  )
                }
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-8 text-lg font-semibold rounded-full shadow-xl shadow-orange-500/25 transition-all duration-300 hover:shadow-orange-500/40 hover:scale-105"
              >
                Outsource Payroll with Confidence
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                icon: CheckCircle,
                label: "100% Accuracy",
                desc: "Error-free processing",
              },
              {
                icon: Clock,
                label: "On-Time Delivery",
                desc: "Never miss a deadline",
              },
              {
                icon: Shield,
                label: "Full Compliance",
                desc: "Singapore regulations",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
              >
                <div className="p-3 bg-orange-500/20 rounded-lg">
                  <item.icon className="h-6 w-6 text-orange-400" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-white">{item.label}</p>
                  <p className="text-sm text-slate-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
