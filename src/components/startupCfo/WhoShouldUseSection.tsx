import { motion } from "framer-motion";
import { 
  Rocket, 
  Users, 
  TrendingUp, 
  Globe, 
  Target,
  HelpCircle,
  AlertTriangle
} from "lucide-react";

const idealFor = [
  {
    icon: Rocket,
    title: "Pre-seed, Seed, and Series A Startups",
    description: "Early-stage companies building foundations"
  },
  {
    icon: Users,
    title: "Founder-Led Teams",
    description: "Without senior finance expertise"
  },
  {
    icon: Target,
    title: "Startups Preparing for Funding",
    description: "External investor readiness"
  },
  {
    icon: TrendingUp,
    title: "Fast-Growing Startups",
    description: "Lacking financial controls"
  },
  {
    icon: Globe,
    title: "Companies Expanding",
    description: "Into Singapore or new markets"
  }
];

const questions = [
  "How long is our cash runway?",
  "Which metrics will investors challenge?",
  "What happens if growth slows or costs increase?"
];

const WhoShouldUseSection = () => {
  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-8xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Who Should Use Startup CFO Services?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Ideal for founders who need financial leadership without the overhead
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Ideal For List */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-8">
                Startup CFO services are ideal for:
              </h3>
              <div className="space-y-4">
                {idealFor.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-200 hover:border-orange-300 hover:shadow-md transition-all"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">{item.title}</h4>
                      <p className="text-slate-600 text-sm">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Questions Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Need CFO-Level Support If...
                </h3>
              </div>

              <p className="text-slate-300 mb-6">
                If your startup cannot clearly answer:
              </p>

              <div className="space-y-4 mb-8">
                {questions.map((question, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10"
                  >
                    <HelpCircle className="w-5 h-5 text-orange-400 flex-shrink-0" />
                    <span className="text-white font-medium">{question}</span>
                  </motion.div>
                ))}
              </div>

              <div className="p-4 bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-xl border border-orange-500/30">
                <p className="text-orange-200 font-medium text-center">
                  You need CFO-level support.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoShouldUseSection;
