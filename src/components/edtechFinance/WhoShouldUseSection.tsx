import { motion } from "framer-motion";
import { 
  Monitor, 
  Award, 
  Building2, 
  Users,
  Globe,
  HelpCircle,
  CheckCircle2
} from "lucide-react";

const idealFor = [
  { icon: Monitor, title: "Online learning platforms and marketplaces" },
  { icon: Award, title: "Test prep, certification, and coaching platforms" },
  { icon: Building2, title: "B2B EdTech selling to schools, universities, or enterprises" },
  { icon: Users, title: "Subscription-based and cohort-based learning businesses" },
  { icon: Globe, title: "EdTech startups expanding regionally from Singapore" },
];

const questions = [
  "Are learner cohorts profitable?",
  "How long does it take to recover content and platform costs?",
  "Is growth sustainable without burning cash?",
];

const WhoShouldUseSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brand-orange font-semibold text-sm uppercase tracking-wider">
            Who Benefits
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
            Who Should Use EdTech Finance Services?
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-8xl mx-auto">
          {/* Ideal For Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-100 shadow-lg"
          >
            <h3 className="text-xl font-semibold text-brand-orange mb-8">
              EdTech Finance services are ideal for:
            </h3>
            <div className="space-y-4">
              {idealFor.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center group-hover:bg-brand-orange/20 transition-all">
                    <item.icon className="w-6 h-6 text-brand-orange" />
                  </div>
                  <span className="text-gray-700 font-medium">{item.title}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Questions Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-brand-orange/5 to-amber-50 rounded-3xl p-8 border border-brand-orange/20"
          >
            <div className="flex items-center gap-3 mb-8">
              <HelpCircle className="w-8 h-8 text-brand-orange" />
              <h3 className="text-xl font-semibold text-gray-900">
                If your business struggles to answer:
              </h3>
            </div>
            <div className="space-y-4 mb-8">
              {questions.map((question, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3 p-4 bg-white rounded-xl shadow"
                >
                  <CheckCircle2 className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 italic">{question}</p>
                </motion.div>
              ))}
            </div>
            <div className="p-6 bg-gradient-to-r from-brand-orange to-amber-500 rounded-2xl text-center">
              <p className="text-white text-lg font-semibold">
                You need EdTech-specific finance leadership.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoShouldUseSection;
