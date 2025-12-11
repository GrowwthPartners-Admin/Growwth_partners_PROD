import { motion } from "framer-motion";
import { Users, Building2, Briefcase, Search, Link, BarChart3, Shield, FileText, ArrowRight, CheckCircle } from "lucide-react";

const audiences = [
  {
    icon: Users,
    title: "CFOs and Finance Leaders",
    description: "Seeking stronger controls without slowing the team.",
  },
  {
    icon: Building2,
    title: "SMEs and Scale-ups",
    description: "In Australia needing practical AI compliance and risk monitoring.",
  },
  {
    icon: Briefcase,
    title: "Accounting and Outsourced Finance Firms",
    description: "Standardising quality across multiple clients.",
  },
  {
    icon: Search,
    title: "Internal Audit and Risk Teams",
    description: "Building continuous oversight into daily workflows.",
  },
];

const steps = [
  {
    icon: Link,
    title: "Connect",
    description: "Enable Ryzup.ai in Google Sheets and connect your accounting source.",
    features: ["Google Sheets integration", "Xero & accounting sync"],
  },
  {
    icon: BarChart3,
    title: "Monitor",
    description: "Run error detection, GL and reconciliation agents, and set up alert rules.",
    features: ["Real-time alerts", "Automated checks"],
  },
  {
    icon: Shield,
    title: "Protect",
    description: "Activate the Anonymiser to keep sensitive data private while using AI.",
    features: ["Data anonymisation", "Privacy compliance"],
  },
  {
    icon: FileText,
    title: "Report",
    description: "Share decision-ready summaries with finance, leadership, and auditors.",
    features: ["Audit-ready reports", "Clear insights"],
  },
];

export const WhoItsForSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Who It's For */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-[#06C0A9]/10 rounded-full text-[#06C0A9] text-sm font-semibold mb-4">
            Built For You
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Who It's{" "}
            <span className="text-[#06C0A9]">For</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {audiences.map((audience, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#06C0A9]/50 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#06C0A9] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <audience.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{audience.title}</h3>
              <p className="text-gray-600 text-sm">{audience.description}</p>
            </motion.div>
          ))}
        </div>

        {/* How It Works - Enhanced Design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#06C0A9]/10 rounded-full text-[#06C0A9] text-sm font-semibold mb-4">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It{" "}
            <span className="text-[#06C0A9]">Works</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get started in minutes with our streamlined onboarding process
          </p>
        </motion.div>

        {/* Enhanced Steps with Timeline */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-[12.5%] right-[12.5%] h-1 bg-gradient-to-r from-[#06C0A9]/20 via-[#06C0A9] to-[#06C0A9]/20 rounded-full" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
                className="relative"
              >
                {/* Step Card */}
                <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#06C0A9] hover:shadow-xl transition-all duration-300 group relative z-10">
                  {/* Step Number Badge */}
                  <div className="absolute -top-4 left-6">
                    <div className="w-8 h-8 rounded-full bg-[#06C0A9] text-white flex items-center justify-center text-sm font-bold shadow-lg shadow-[#06C0A9]/30">
                      {idx + 1}
                    </div>
                  </div>
                  
                  {/* Icon */}
                  <div className="mt-4 mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#06C0A9]/10 to-teal-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="w-7 h-7 text-[#06C0A9]" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{step.description}</p>
                  
                  {/* Features */}
                  <div className="space-y-2">
                    {step.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-[#06C0A9]" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Arrow for mobile/tablet */}
                {idx < steps.length - 1 && (
                  <div className="flex justify-center my-4 lg:hidden">
                    <ArrowRight className="w-6 h-6 text-[#06C0A9] rotate-90 md:rotate-0" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA hint */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600">
            Ready to get started?{" "}
            <span className="text-[#06C0A9] font-semibold">Most teams are live within days.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};
