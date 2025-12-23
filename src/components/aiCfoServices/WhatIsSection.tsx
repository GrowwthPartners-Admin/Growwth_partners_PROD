import { motion } from "framer-motion";
import { 
  LineChart, 
  TrendingUp, 
  Activity, 
  BarChart3, 
  Brain,
  Users
} from "lucide-react";

const features = [
  {
    icon: LineChart,
    title: "Real-time financial reporting",
    description: "Live dashboards that update automatically"
  },
  {
    icon: TrendingUp,
    title: "Predictive cash flow and forecasting",
    description: "AI-powered predictions for better planning"
  },
  {
    icon: Activity,
    title: "Scenario and sensitivity modelling",
    description: "Model different outcomes instantly"
  },
  {
    icon: BarChart3,
    title: "Automated performance monitoring",
    description: "Track KPIs without manual effort"
  },
  {
    icon: Users,
    title: "CFO-led interpretation of AI insights",
    description: "Human expertise guiding AI outputs"
  }
];

const WhatIsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">
              Definition
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              What Are AI CFO Services?
            </h2>
            <p className="text-lg text-slate-600 mb-6">
              AI CFO services integrate artificial intelligence, automation, and advanced analytics into the CFO function to enhance speed, accuracy, and decision-making.
            </p>
            <p className="text-slate-600 mb-8">
              Unlike standalone finance tools, AI CFO services combine technology with experienced financial leadership, ensuring insights translate into action.
            </p>

            <div className="bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-100 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Brain className="w-6 h-6 text-orange-500" />
                <span className="font-semibold text-slate-900">An AI CFO model focuses on:</span>
              </div>
              <ul className="space-y-2 text-slate-600">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                    {feature.title}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="group p-6 bg-slate-50 rounded-xl hover:bg-gradient-to-br hover:from-orange-500 hover:to-amber-500 transition-all duration-300 cursor-pointer"
              >
                <div className="w-12 h-12 bg-orange-100 group-hover:bg-white/20 rounded-xl flex items-center justify-center mb-4 transition-colors">
                  <feature.icon className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-slate-900 group-hover:text-white mb-2 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-600 group-hover:text-white/80 transition-colors">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;
