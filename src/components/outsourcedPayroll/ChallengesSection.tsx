import React from "react";
import { motion } from "framer-motion";
import { 
  XCircle, 
  Clock, 
  AlertTriangle, 
  Users,
  FileX,
  CheckCircle,
  Shield,
  TrendingUp,
  Zap,
  Headphones,
  Scale
} from "lucide-react";

const risks = [
  { icon: XCircle, text: "Incorrect salary calculations" },
  { icon: Clock, text: "Missed statutory deadlines" },
  { icon: AlertTriangle, text: "Compliance penalties and audit risk" },
  { icon: Users, text: "Employee dissatisfaction due to errors or delays" },
  { icon: FileX, text: "Lack of proper payroll documentation" }
];

const benefits = [
  { icon: Users, text: "Dedicated payroll professionals" },
  { icon: CheckCircle, text: "Accurate, on-time payroll every cycle" },
  { icon: Shield, text: "Reduced compliance and operational risk" },
  { icon: TrendingUp, text: "Seamless coordination with accounting and finance teams" },
  { icon: Zap, text: "Scalable payroll support as headcount grows" },
  { icon: Headphones, text: "Peace of mind for founders, HR, and leadership" }
];

export const ChallengesSection = () => {
  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.1),transparent_70%)]" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Risks Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-8 bg-gradient-to-br from-red-500/10 to-transparent rounded-2xl border border-red-500/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-red-500/20 rounded-lg">
                  <AlertTriangle className="h-6 w-6 text-red-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Risks of Managing Payroll Internally
                </h3>
              </div>
              <p className="text-slate-400 mb-8">
                Without specialist payroll support, businesses often face:
              </p>
              <div className="space-y-4">
                {risks.map((risk, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700"
                  >
                    <risk.icon className="h-5 w-5 text-red-400 shrink-0" />
                    <span className="text-slate-300">{risk.text}</span>
                  </motion.div>
                ))}
              </div>
              <p className="mt-6 text-orange-400 font-medium">
                Payroll mistakes are costly—and completely avoidable with the right processes.
              </p>
            </div>
          </motion.div>

          {/* Benefits Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="p-8 bg-gradient-to-br from-orange-500/10 to-transparent rounded-2xl border border-orange-500/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-orange-500/20 rounded-lg">
                  <Scale className="h-6 w-6 text-orange-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  What You Get with Our Services
                </h3>
              </div>
              <p className="text-slate-400 mb-8">
                Our payroll services ensure employees are paid correctly, compliantly, and on time—every time.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700"
                  >
                    <benefit.icon className="h-5 w-5 text-orange-400 shrink-0" />
                    <span className="text-slate-300">{benefit.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
