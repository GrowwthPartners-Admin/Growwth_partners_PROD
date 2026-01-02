import React from "react";
import { motion } from "framer-motion";
import { 
  Building2,
  AlertCircle,
  Lightbulb,
  TrendingUp,
  CheckCircle,
  Users,
  Clock,
  Smile
} from "lucide-react";

const challenges = [
  "Growing employee headcount",
  "Frequent payroll corrections",
  "Compliance concerns"
];

const solutions = [
  "Implemented outsourced payroll processing",
  "Standardised salary calculations and deductions",
  "Integrated payroll with accounting and reporting"
];

const outcomes = [
  { icon: CheckCircle, text: "Zero payroll errors" },
  { icon: Clock, text: "On-time statutory filings" },
  { icon: Users, text: "Reduced HR and founder workload" },
  { icon: Smile, text: "Improved employee confidence and satisfaction" }
];

export const UseCaseSection = () => {
  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(249,115,22,0.15),transparent_50%)]" />
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium text-orange-400 bg-orange-500/10 rounded-full border border-orange-500/20">
            Case Study
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Practical Use Case
          </h2>
        </motion.div>

        <div className="max-w-8xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-slate-800 to-slate-800/50 rounded-3xl p-8 md:p-10 border border-slate-700"
          >
            {/* Client Header */}
            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-slate-700">
              <div className="p-4 bg-orange-500/20 rounded-2xl">
                <Building2 className="h-8 w-8 text-orange-400" />
              </div>
              <div>
                <p className="text-sm text-orange-400 font-medium">Client Type</p>
                <h3 className="text-2xl font-bold text-white">Professional Services Firm (Singapore)</h3>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Challenges */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <AlertCircle className="h-5 w-5 text-red-400" />
                  <h4 className="text-lg font-semibold text-white">Challenges</h4>
                </div>
                <ul className="space-y-3">
                  {challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start gap-2 text-slate-300">
                      <span className="h-1.5 w-1.5 bg-red-400 rounded-full mt-2 shrink-0" />
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solution */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Lightbulb className="h-5 w-5 text-orange-400" />
                  <h4 className="text-lg font-semibold text-white">Growwth Partners Solution</h4>
                </div>
                <ul className="space-y-3">
                  {solutions.map((solution, index) => (
                    <li key={index} className="flex items-start gap-2 text-slate-300">
                      <span className="h-1.5 w-1.5 bg-orange-400 rounded-full mt-2 shrink-0" />
                      {solution}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outcome */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="h-5 w-5 text-green-400" />
                  <h4 className="text-lg font-semibold text-white">Outcome</h4>
                </div>
                <ul className="space-y-3">
                  {outcomes.map((outcome, index) => (
                    <li key={index} className="flex items-center gap-3 text-slate-300">
                      <outcome.icon className="h-4 w-4 text-green-400 shrink-0" />
                      {outcome.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
