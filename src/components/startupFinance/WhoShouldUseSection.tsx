import { motion } from "framer-motion";
import { Rocket, Users, Target, Globe, Lightbulb, HelpCircle } from "lucide-react";

const idealFor = [
  { icon: Rocket, text: "Pre-seed, seed, and Series A startups" },
  { icon: Users, text: "Founder-led teams without in-house finance expertise" },
  { icon: Target, text: "Startups preparing for fundraising or grants" },
  { icon: Globe, text: "High-growth startups expanding into Singapore" },
  { icon: Lightbulb, text: "Companies transitioning from idea stage to execution" },
];

const questions = [
  "How long is our runway?",
  "What are our key financial risks?",
  "Are our growth assumptions realistic?",
];

const WhoShouldUseSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-8xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">
              Target Audience
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
              Who Should Use Startup Finance Services?
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Ideal For Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-slate-50 to-teal-50 rounded-3xl p-8 border border-orange-500/20"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Startup Finance services are ideal for:
              </h3>
              <div className="space-y-4">
                {idealFor.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-slate-200"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-400 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-gray-700 font-bold">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Questions Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-slate-900 via-slate-800 to-orange-900/20 rounded-3xl p-8 border border-orange-500/20"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-400 rounded-xl flex items-center justify-center">
                  <HelpCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  If your startup struggles to answer:
                </h3>
              </div>

              <div className="space-y-4 mb-8">
                {questions.map((question, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10"
                  >
                    <p className="text-white font-bold">❓ {question}</p>
                  </motion.div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-orange-500/20 to-orange-400/20 rounded-xl p-6 text-center border border-orange-500/30">
                <p className="text-white text-lg font-semibold">
                  You need structured startup finance support.
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
