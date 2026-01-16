import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Briefcase, 
  Building2, 
  Users, 
  Rocket, 
  Globe,
  HelpCircle,
  CheckCircle2
} from "lucide-react";

const idealFor = [
  { icon: Briefcase, text: "Venture capital firms and micro-VCs" },
  { icon: Building2, text: "Private investment funds and SPVs" },
  { icon: Users, text: "Family office investment arms" },
  { icon: Rocket, text: "First-time fund managers and emerging GPs" },
  { icon: Globe, text: "Funds domiciled or operating from Singapore" },
];

const questions = [
  "Are our LP reports accurate and timely?",
  "Is NAV calculation consistent and defensible?",
  "Are capital calls and distributions well controlled?",
];

const WhoShouldUseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
              Who Should Use{" "}
              <span className="text-blue-600 dark:text-blue-400">VC & Fund Finance Services?</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Ideal For */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-foreground mb-6">
                These services are ideal for:
              </h3>
              {idealFor.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-foreground font-medium">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Key Questions */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative"
            >
              <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-blue-950 dark:from-slate-800 dark:to-blue-900 text-white h-full">
                <div className="flex items-center gap-3 mb-8">
                  <HelpCircle className="w-8 h-8 text-blue-400" />
                  <h3 className="text-2xl font-bold">If your fund struggles to answer:</h3>
                </div>
                
                <div className="space-y-6 mb-8">
                  {questions.map((question, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-blue-400 font-bold text-sm">{index + 1}</span>
                      </div>
                      <p className="text-blue-100 text-lg">{question}</p>
                    </div>
                  ))}
                </div>

                <div className="p-6 rounded-2xl bg-blue-500/10 border border-blue-500/20">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-blue-400" />
                    <p className="text-white font-semibold text-lg">
                      You need professional fund finance leadership.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoShouldUseSection;
