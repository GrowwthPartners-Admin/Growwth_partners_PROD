import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Award, 
  Globe, 
  Users, 
  Cpu, 
  Layers,
  ArrowRight
} from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Fund Experience",
    description: "Experience supporting VC funds, investment vehicles, and family offices"
  },
  {
    icon: Globe,
    title: "Singapore Expertise",
    description: "Strong understanding of Singapore's fund and regulatory environment"
  },
  {
    icon: Users,
    title: "CFO-Led Oversight",
    description: "CFO-led oversight—not admin-only execution"
  },
  {
    icon: Cpu,
    title: "Secure Systems",
    description: "Secure systems and investor-grade reporting"
  },
  {
    icon: Layers,
    title: "Integrated Support",
    description: "Integrated support across CFO, finance, and reporting services"
  }
];

const WhyChooseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const firstRow = reasons.slice(0, 3);
  const secondRow = reasons.slice(3);

  return (
    <section ref={ref} className="py-20 md:py-28 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-8xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Choose Growwth Partners for{" "}
              <span className="text-orange-600 dark:text-orange-400">Fund Finance?</span>
            </h2>
          </motion.div>

          {/* Row 1 – 3 cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {firstRow.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-orange-50/50 dark:from-slate-800/50 dark:to-orange-900/20 border border-slate-200 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-600 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-orange-500/25">
                  <reason.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{reason.title}</h3>
                <p className="text-muted-foreground">{reason.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Row 2 – 2 cards perfectly centered */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
            {secondRow.map((reason, index) => (
              <motion.div
                key={`second-${index}`}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: (3 + index) * 0.1 }}
                className="w-full max-w-md group p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-orange-50/50 dark:from-slate-800/50 dark:to-orange-900/20 border border-slate-200 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-600 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-orange-500/25">
                  <reason.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{reason.title}</h3>
                <p className="text-muted-foreground">{reason.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Bottom Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative p-8 md:p-10 rounded-3xl max-w-6xl mx-auto bg-gradient-to-r from-orange-400 via-orange-400 to-orange-500 overflow-hidden"
          >
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  We help funds operate with the discipline expected by institutional LPs
                </h3>
                <p className="text-orange-100">
                  Partner with us for fund finance excellence
                </p>
              </div>
              {/* <ArrowRight className="w-12 h-12 text-white/50 hidden md:block" /> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
