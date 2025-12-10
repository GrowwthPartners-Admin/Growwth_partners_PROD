import { motion } from "framer-motion";
import { 
  Clock, 
  AlertTriangle, 
  RefreshCw, 
  TrendingUp,
  Zap,
  Eye,
  CheckCircle,
  HelpCircle
} from "lucide-react";

const challenges = [
  {
    icon: Clock,
    title: "Manual spreadsheet updates slow everything down",
  },
  {
    icon: AlertTriangle,
    title: "Month-end reporting crunches drain time and focus",
  },
  {
    icon: RefreshCw,
    title: "Reconciliations and checks are repetitive and error-prone",
  },
  {
    icon: TrendingUp,
    title: "Forecasts break whenever assumptions change",
  },
];

const solutions = [
  {
    icon: Zap,
    title: "Automate recurring workflows",
  },
  {
    icon: AlertTriangle,
    title: "Catch issues before they hit reports",
  },
  {
    icon: Eye,
    title: "Give real-time visibility on cash, P&L and runway",
  },
  {
    icon: HelpCircle,
    title: 'Turn "what if" questions into clear answers in minutes',
  },
];

const WhyAINowSection = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-background via-slate-50/50 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium mb-4">
            The Challenge
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why Australian Finance Teams{" "}
            <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Need AI Now
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Challenges Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center">
                <AlertTriangle className="w-4 h-4 text-red-600" />
              </div>
              Current Challenges
            </h3>
            {challenges.map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-white border border-red-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0">
                  <challenge.icon className="w-5 h-5 text-red-500" />
                </div>
                <p className="text-foreground/80 pt-2">{challenge.title}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Solutions Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-teal-100 flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-teal-600" />
              </div>
              Ryzup.ai Solutions
            </h3>
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                  <solution.icon className="w-5 h-5 text-white" />
                </div>
                <p className="text-foreground/80 pt-2">{solution.title}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-lg text-foreground/70 mt-12 max-w-3xl mx-auto"
        >
          Ryzup.ai adds{" "}
          <span className="text-teal-600 font-semibold">AI finance automation in Australia</span>{" "}
          on top of your current stack to transform how your team works.
        </motion.p>
      </div>
    </section>
  );
};

export default WhyAINowSection;
