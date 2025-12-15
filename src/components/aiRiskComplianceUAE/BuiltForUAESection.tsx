import { motion } from "framer-motion";
import { Check, Plug, Eye, Lock, FileCheck } from "lucide-react";

const features = [
  "Works with cloud accounting and Google Sheets",
  "Supports VAT, Corporate Tax, and FTA documentation needs",
  "Handles multi-entity and multi-currency groups across GCC",
  "Suits startups, SMEs, and scale-ups that need fast, credible oversight",
];

const steps = [
  {
    step: "01",
    title: "Connect",
    description: "Enable Ryzup.ai in Google Sheets and connect your accounting source.",
    icon: Plug,
    color: "amber",
  },
  {
    step: "02",
    title: "Monitor",
    description: "Run error detection, GL and reconciliation agents, and set alert rules.",
    icon: Eye,
    color: "orange",
  },
  {
    step: "03",
    title: "Protect",
    description: "Activate the Anonymiser to keep sensitive data private while using AI.",
    icon: Lock,
    color: "amber",
  },
  {
    step: "04",
    title: "Report",
    description: "Share decision-ready summaries with finance, leadership, and auditors.",
    icon: FileCheck,
    color: "orange",
  },
];

const BuiltForUAESection = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Ambient Light Background Orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-amber-100/40 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] right-[-5%] w-[500px] h-[500px] bg-orange-100/40 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* --- PART 1: FEATURES SECTION --- */}
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16 relative"
          >
            {/* Floating Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-amber-100 shadow-sm text-amber-700 text-[11px] font-bold uppercase tracking-wider mb-5"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              Regional Focus
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
              Built for the{" "}
              <span className="relative inline-block px-2">
                 {/* Text Gradient */}
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
                  UAE
                </span>
                {/* Soft highlight behind text */}
                <span className="absolute inset-0 bg-amber-100/50 -rotate-2 rounded-lg z-0 scale-105" />
              </span>
            </h2>
            <p className="mt-5 text-slate-500 max-w-lg mx-auto text-lg leading-relaxed">
              Compliance, privacy, and risk monitoring designed specifically for Gulf businesses.
            </p>
          </motion.div>

          {/* Enhanced Feature Grid - Light & Clean */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto mb-24"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative p-8 bg-white rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md hover:border-amber-200 hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  {/* Icon Box */}
                  <div className="w-10 h-10 rounded-xl text-amber-600 border border-amber-100 flex items-center justify-center flex-shrink-0 bg-amber-500 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  
                  {/* Text */}
                  <p className="text-slate-700 text-[17px] leading-relaxed pt-1.5 font-semibold group-hover:text-slate-900 transition-colors">
                    {feature}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>


          {/* --- PART 2: IMPLEMENTATION STEPS --- */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              How It{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
                Works
              </span>
            </h2>
            <p className="text-slate-500 mt-2 max-w-lg mx-auto">
              From connection to continuous assurance in four simple steps.
            </p>
          </motion.div>

          {/* Steps Timeline */}
          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-0.5 bg-slate-200 z-0">
              <motion.div 
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="h-full bg-gradient-to-r from-amber-400 to-orange-500" 
              />
            </div>

            <div className="grid lg:grid-cols-4 gap-6 relative z-10">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative group h-full"
                >
                  {/* Step Number Badge (Compact) */}
                  <div className="w-20 h-20 mx-auto bg-white rounded-full border-4 border-slate-50 shadow-lg flex items-center justify-center mb-6 relative z-10 group-hover:scale-105 transition-transform duration-300">
                     <div className={`w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br ${step.color === 'amber' ? 'from-amber-100 to-amber-50 text-amber-600' : 'from-orange-100 to-orange-50 text-orange-600'}`}>
                        <step.icon className="w-6 h-6" />
                     </div>
                     <div className={`absolute -right-1 -top-1 w-6 h-6 rounded-full bg-slate-800 text-white flex items-center justify-center text-[10px] font-bold border-2 border-white`}>
                        {step.step}
                     </div>
                  </div>

                  {/* Card (Compact Height) */}
                  <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow text-center font-semibold hover:shadow-lg hover:-translate-y-1 hover:border-amber-100 transition-all duration-300 ">
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-slate-600 leading-snug text-[13px]">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default BuiltForUAESection;
