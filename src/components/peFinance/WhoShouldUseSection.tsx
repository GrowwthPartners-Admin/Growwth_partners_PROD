import { motion } from "framer-motion";
import { 
  Building2, 
  TrendingUp, 
  Users, 
  Briefcase, 
  Globe,
  CircleHelp,
  CheckCircle2
} from "lucide-react";

const idealFor = [
  { icon: Building2, text: "Private equity and buyout funds" },
  { icon: TrendingUp, text: "Growth equity investors" },
  { icon: Users, text: "Operating partners managing portfolios" },
  { icon: Briefcase, text: "PE-backed portfolio companies" },
  { icon: Globe, text: "International PE firms operating from Singapore" }
];

const questions = [
  "Are portfolio companies reporting consistently?",
  "Can we identify value creation levers quickly?",
  "Are we deal- and exit-ready at all times?"
];

const WhoShouldUseSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900/50 dark:to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Who Should Use Private Equity{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500">
                Finance Services?
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Private Equity Finance services are ideal for investment firms seeking institutional-grade financial control
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Left - Ideal For */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
                <div className="p-2 bg-orange-100 dark:bg-orange-900/50 rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                These services are ideal for:
              </h3>

              <div className="space-y-4">
                {idealFor.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-700 hover:shadow-md transition-all duration-300"
                  >
                    <div className="p-2.5 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg text-white shrink-0">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="text-foreground font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right - Questions */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-orange-400 to-orange-500 rounded-3xl p-8 lg:p-10 text-white h-full">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 bg-white/20 rounded-lg">
                    <CircleHelp className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold">If your fund struggles to answer:</h3>
                </div>

                <div className="space-y-5 mb-10">
                  {questions.map((question, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl"
                    >
                      <span className="text-2xl font-bold text-orange-200">{index + 1}</span>
                      <p className="text-white/90 text-lg">{question}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                  <p className="text-xl font-semibold text-center">
                    You need PE-specific finance leadership.
                  </p>
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
