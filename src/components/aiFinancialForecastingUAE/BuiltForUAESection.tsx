import { motion } from "framer-motion";
import { 
  Cloud, 
  FileText, 
  Globe, 
  Rocket,
  Link,
  Cpu,
  GitBranch,
  Share2
} from "lucide-react";

const BuiltForUAESection = () => {
  const features = [
    { icon: Cloud, text: "Works with cloud accounting and Google Sheets" },
    { icon: FileText, text: "Supports VAT and Corporate Tax reporting calendars in your planning cadence" },
    { icon: Globe, text: "Handles multi-entity and multi-currency groups across GCC" },
    { icon: Rocket, text: "Fits startups, SMEs and scale-ups that need fast, credible forecasts" },
  ];

  const steps = [
    {
      icon: Link,
      step: "01",
      title: "Connect",
      description: "Sync accounting data and key spreadsheets.",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Cpu,
      step: "02",
      title: "Model",
      description: "Ryzup.ai creates predictive models and a baseline forecast.",
      color: "from-teal-500 to-cyan-500"
    },
    {
      icon: GitBranch,
      step: "03",
      title: "Simulate",
      description: "Build scenarios, compare outcomes and choose an operating plan.",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: Share2,
      step: "04",
      title: "Review",
      description: "Share a clear forecast pack for leadership and investor updates.",
      color: "from-blue-500 to-indigo-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-950 via-teal-900 to-cyan-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Built for UAE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Built For The{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              UAE
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <p className="text-gray-200">{feature.text}</p>
            </motion.div>
          ))}
        </div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            How It Works
          </h3>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 transform -translate-y-1/2 rounded-full" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20 text-center hover:bg-white/15 transition-all group">
                  {/* Step Number */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="text-emerald-400 text-sm font-semibold mb-2">Step {step.step}</div>
                  <h4 className="text-xl font-bold text-white mb-3">{step.title}</h4>
                  <p className="text-gray-300 text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuiltForUAESection;
