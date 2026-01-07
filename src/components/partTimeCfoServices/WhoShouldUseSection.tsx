import { motion } from "framer-motion";
import { Building2, Rocket, User, Users, Globe, HelpCircle, CheckCircle } from "lucide-react";

const suitableFor = [
  {
    icon: Building2,
    text: "SMEs experiencing growth but lacking senior finance leadership"
  },
  {
    icon: Rocket,
    text: "Startups transitioning from early-stage to scale-up"
  },
  {
    icon: User,
    text: "Founder-led businesses where finance decisions depend heavily on the owner"
  },
  {
    icon: Users,
    text: "Family-owned companies professionalising operations"
  },
  {
    icon: Globe,
    text: "Companies expanding into new markets, including Singapore"
  }
];

const questions = [
  "Are we making the right financial decisions?",
  "Can we afford to scale?",
  "Why do profits not match revenue growth?"
];

const WhoShouldUseSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <span className="text-brand-orange font-semibold text-sm uppercase tracking-wider">Is This Right For You?</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
            Who Should Use Part-Time CFO Services?
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Part-Time CFO services are best suited for:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {suitableFor.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <p className="text-gray-700 font-medium">{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Questions section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-8 md:p-12 border border-orange-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-brand-orange/20 rounded-full flex items-center justify-center">
                <HelpCircle className="w-5 h-5 text-brand-orange" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">If your business is asking:</h3>
            </div>
            
            <div className="space-y-4 mb-8">
              {questions.map((question, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm"
                >
                  <CheckCircle className="w-5 h-5 text-brand-orange flex-shrink-0" />
                  <p className="text-gray-700 font-medium italic">"{question}"</p>
                </motion.div>
              ))}
            </div>

            <p className="text-center text-xl font-semibold text-gray-900">
              You are ready for <span className="text-brand-orange">Part-Time CFO support</span>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoShouldUseSection;
