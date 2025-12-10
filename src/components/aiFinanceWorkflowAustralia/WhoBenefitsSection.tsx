import { motion } from "framer-motion";
import { 
  Briefcase, 
  Rocket, 
  Users, 
  Building2,
  Plug,
  Bot,
  TrendingUp
} from "lucide-react";

const beneficiaries = [
  {
    icon: Briefcase,
    title: "CFOs and Finance Leaders",
    description: "Standardise processes, reduce manual effort and get decision-ready numbers faster.",
  },
  {
    icon: Rocket,
    title: "Startups and Scale-ups",
    description: "Know burn, runway and ROI without rebuilding every model.",
  },
  {
    icon: Users,
    title: "Finance and Operations Teams",
    description: "Automate low-value tasks and spend time on analysis and action.",
  },
  {
    icon: Building2,
    title: "Accounting and Outsourced Finance Firms",
    description: "Deliver faster reporting and reduced error risk without changing client tools.",
  },
];

const implementationSteps = [
  {
    icon: Plug,
    step: "Connect",
    description: "Install RyzUp Sheets and connect Xero or other sources.",
  },
  {
    icon: Bot,
    step: "Automate",
    description: "Use the AI assistant, error detector and agents to automate reports, checks and reconciliations.",
  },
  {
    icon: TrendingUp,
    step: "Scale",
    description: "Extend into forecasting, board packs and multi-entity reporting using the same AI automation for finance in Australia foundation.",
  },
];

const WhoBenefitsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-slate-50/30 via-background to-slate-50/50">
      <div className="container mx-auto px-4">
        {/* Who Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium mb-4">
            Who We Serve
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Who Benefits in{" "}
            <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Australian Business
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-24">
          {beneficiaries.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group text-center p-6 rounded-2xl bg-white border hover:border-slate-200 border-teal-300 hover:shadow-xl transition-all duration-300 shadow"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center mx-auto mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Implementation Path */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium mb-4">
            Getting Started
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Implementation Path
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-teal-300 via-cyan-300 to-emerald-300 transform -translate-y-1/2 rounded-full" />
            
            <div className="grid md:grid-cols-3 gap-16 relative">
              {implementationSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative "
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center mb-5 shadow-xl relative z-10 border-4 border-white">
                      <step.icon className="w-9 h-9 text-white" />
                    </div>
                    <div className="bg-cyan-100 rounded-2xl p-6 border border-slate-200 shadow-lg hover:shadow-xl transition-shadow w-full">
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {step.step}
                      </h3>
                      <p className="text-foreground/70 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
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

export default WhoBenefitsSection;
