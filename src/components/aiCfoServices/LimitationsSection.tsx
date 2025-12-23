import { motion } from "framer-motion";
import { 
  Clock, 
  FileSpreadsheet, 
  Target, 
  Gauge, 
  AlertTriangle,
  ArrowRight,
  Zap
} from "lucide-react";

const limitations = [
  {
    icon: Clock,
    problem: "Delayed monthly reporting",
    solution: "Real-time dashboards"
  },
  {
    icon: FileSpreadsheet,
    problem: "Manual, error-prone spreadsheets",
    solution: "Automated data flows"
  },
  {
    icon: Target,
    problem: "Limited forecasting accuracy",
    solution: "AI-powered predictions"
  },
  {
    icon: Gauge,
    problem: "Inability to model scenarios quickly",
    solution: "Instant scenario modelling"
  },
  {
    icon: AlertTriangle,
    problem: "Reactive decision-making",
    solution: "Proactive intelligence"
  }
];

const LimitationsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-red-100 text-red-600 rounded-full text-sm font-medium mb-4">
            The Challenge
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Limitations of Traditional CFO & Reporting Models
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Without AI-enabled finance, businesses often face critical limitations that impact growth and decision-making
          </p>
        </motion.div>

        {/* Modern Comparison Layout */}
        <div className="max-w-5xl mx-auto">
          <div className="grid gap-4">
            {limitations.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="group relative bg-gradient-to-r from-slate-50 to-white rounded-xl p-6 border border-slate-100 hover:border-orange-200 hover:shadow-lg transition-all"
              >
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                  {/* Problem Side */}
                  <div className="flex items-center gap-4 flex-1">
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                      <span className="text-xs font-medium text-red-500 uppercase tracking-wide">Problem</span>
                      <p className="font-semibold text-slate-900">{item.problem}</p>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="hidden md:flex items-center justify-center px-4">
                    <ArrowRight className="w-6 h-6 text-orange-400" />
                  </div>

                  {/* Solution Side */}
                  <div className="flex items-center gap-4 flex-1">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <span className="text-xs font-medium text-orange-500 uppercase tracking-wide">AI Solution</span>
                      <p className="font-semibold text-slate-900">{item.solution}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Summary Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-3xl mx-auto mt-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-8 text-white text-center"
        >
          <Zap className="w-12 h-12 mx-auto mb-4 opacity-80" />
          <p className="text-xl font-medium">
            AI CFO services eliminate these limitations by shifting finance from historical reporting to forward-looking intelligence.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default LimitationsSection;
