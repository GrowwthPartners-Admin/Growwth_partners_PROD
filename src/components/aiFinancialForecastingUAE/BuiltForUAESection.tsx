import { motion } from "framer-motion";
import { 
  Cloud, 
  FileText, 
  Globe, 
  Rocket,
  Link,
  Cpu,
  GitBranch,
  Share2,
  ArrowRight,
  CheckCircle,
  Sparkles
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
      color: "from-amber-500 to-orange-500",
      details: ["Cloud accounting sync", "Google Sheets integration", "Secure data connection"]
    },
    {
      icon: Cpu,
      step: "02",
      title: "Model",
      description: "Ryzup.ai creates predictive models and a baseline forecast.",
      color: "from-orange-500 to-red-500",
      details: ["AI-powered analysis", "Baseline forecast", "Revenue predictions"]
    },
    {
      icon: GitBranch,
      step: "03",
      title: "Simulate",
      description: "Build scenarios, compare outcomes and choose an operating plan.",
      color: "from-yellow-500 to-amber-500",
      details: ["Multiple scenarios", "What-if analysis", "Risk assessment"]
    },
    {
      icon: Share2,
      step: "04",
      title: "Review",
      description: "Share a clear forecast pack for leadership and investor updates.",
      color: "from-amber-600 to-yellow-500",
      details: ["Board-ready reports", "Investor packs", "Auto-updated views"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-amber-950 via-orange-900 to-yellow-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-3xl" />
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
              UAE
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <p className="text-gray-200">{feature.text}</p>
            </motion.div>
          ))}
        </div>

        {/* How It Works - Redesigned */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-amber-500/20 rounded-full px-4 py-2 mb-4">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-medium text-amber-300">Simple 4-Step Process</span>
          </div>
          <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">
            How It Works
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            From data connection to investor-ready insights in days, not months
          </p>
        </motion.div>

        {/* Timeline Steps */}
        <div className="relative max-w-6xl mx-auto">
          {/* Vertical Connection Line for Mobile, Horizontal for Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-amber-500/50 via-orange-500/50 to-yellow-500/50 rounded-full" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="relative group"
              >
                {/* Step Number Badge */}
                <div className="flex justify-center mb-6">
                  <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-xl group-hover:scale-110 transition-all duration-300`}>
                    <step.icon className="w-9 h-9 text-white" />
                    {/* Glow Effect */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-50 blur-xl transition-opacity`} />
                  </div>
                </div>

                {/* Step Content Card */}
                <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20 hover:bg-white/15 transition-all relative overflow-hidden">
                  {/* Step Number */}
                  <div className="absolute top-4 right-4 text-4xl font-bold text-white/10">
                    {step.step}
                  </div>
                  
                  <h4 className="text-2xl font-bold text-white mb-3">{step.title}</h4>
                  <p className="text-gray-300 mb-4">{step.description}</p>
                  
                  {/* Details List */}
                  <ul className="space-y-2">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Arrow to Next Step (hidden on last item and mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-24 -right-4 w-8 h-8 bg-amber-500 rounded-full items-center justify-center z-10">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-300">
            Most teams connect data and see a{" "}
            <span className="text-amber-400 font-semibold">first forecast within days</span>, 
            then refine scenarios for board and planning cycles.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BuiltForUAESection;
