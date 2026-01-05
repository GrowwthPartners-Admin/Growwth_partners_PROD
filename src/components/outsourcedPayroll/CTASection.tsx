import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(249,115,22,0.2),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(249,115,22,0.1),transparent_50%)]" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-5xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Eliminate Payroll Errors and Compliance {" "}
            <span className="text-brand-orange font-extrabold" >Stress</span>
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Let our experts handle your payroll while you focus on growing your
            business.
          </p>
          <Button
            size="lg"
            onClick={() =>
              window.open(
                "https://calendly.com/jd-growwthpartners/15min?month=2025-11",
                "_blank"
              )
            }
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-lg shadow-orange-500/25 transition-all duration-300 hover:shadow-orange-500/40 group hover:scale-105"
          >
            Schedule an Outsourced Payroll Consultation
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
