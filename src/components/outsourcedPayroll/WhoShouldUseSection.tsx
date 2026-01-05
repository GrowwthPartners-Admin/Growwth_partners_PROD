import React from "react";
import { motion } from "framer-motion";
import { Rocket, TrendingUp, Globe, AlertTriangle, Users } from "lucide-react";

const idealUsers = [
  {
    icon: Rocket,
    title: "Startups & SMEs",
    description: "Without dedicated payroll teams",
  },
  {
    icon: TrendingUp,
    title: "Growing Companies",
    description: "With increasing employee headcount",
  },
  {
    icon: Globe,
    title: "Expanding Businesses",
    description: "Operations in Singapore",
  },
  {
    icon: AlertTriangle,
    title: "Error-Prone Organisations",
    description: "Facing frequent payroll errors or delays",
  },
  {
    icon: Users,
    title: "Overwhelmed Teams",
    description: "Founders and HR teams burdened by compliance complexity",
  },
];

export const WhoShouldUseSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium text-orange-600 bg-orange-100 rounded-full">
            Is This Right For You?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Who Should Use Outsourced Payroll Services?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            If payroll is consuming leadership time or causing repeated corrections,
            outsourcing is the most efficient solution.
          </p>
        </motion.div>

        {/* Cards: 3 + 2 centered (same format you requested) */}
        <div className="space-y-6">
          {/* Row 1: first 3 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {idealUsers.slice(0, 3).map((user, index) => (
              <motion.div
                key={user.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="group p-6 bg-white rounded-2xl border border-slate-200 hover:border-orange-300 hover:shadow-lg hover:shadow-orange-100/50 transition-all duration-300 h-full"
              >
                <div className="p-3 bg-gradient-to-br from-orange-100 to-orange-50 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform">
                  <user.icon className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {user.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{user.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Row 2: last 2 centered */}
          <div className="flex flex-col md:flex-row justify-center gap-6">
            {idealUsers.slice(3).map((user, index) => (
              <motion.div
                key={user.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 3) }}
                className="w-full md:max-w-[420px]"
              >
                <div className="group p-6 bg-white rounded-2xl border border-slate-200 hover:border-orange-300 shadow hover:shadow-lg hover:shadow-orange-100/50 transition-all duration-300 h-full">
                  <div className="p-3 bg-gradient-to-br from-orange-100 to-orange-50 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform">
                    <user.icon className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {user.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{user.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
