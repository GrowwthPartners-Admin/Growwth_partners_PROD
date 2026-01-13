import { motion } from "framer-motion";
import { Building2, User, Users, Rocket, TrendingDown, HelpCircle, CheckCircle } from "lucide-react";

const idealFor = [
  {
    icon: Building2,
    title: "Growing SMEs",
    description: "Without structured finance functions"
  },
  {
    icon: User,
    title: "Founder-Led Businesses",
    description: "Where finance decisions rely on intuition"
  },
  {
    icon: Users,
    title: "Family-Owned Companies",
    description: "Professionalising operations"
  },
  {
    icon: Rocket,
    title: "Expansion-Ready SMEs",
    description: "Planning expansion, hiring, or investment"
  },
  {
    icon: TrendingDown,
    title: "Margin-Pressured Businesses",
    description: "Experiencing cash flow volatility"
  }
];

const questions = [
  "Why profits fluctuate despite steady revenue?",
  "Where is cash getting stuck?",
  "Can we afford to expand or hire right now?"
];

const WhoShouldUseSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brand-orange font-semibold text-sm uppercase tracking-wider">Who It's For</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
            Who Should Use SME Finance Services?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            SME Finance services are ideal for businesses looking to build financial discipline and gain better visibility into their operations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
          {idealFor.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:border-brand-orange/20 shadow transition-all duration-300 text-center group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-brand-orange/10 to-orange-100 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:from-brand-orange/20 group-hover:to-orange-200 transition-all">
                <item.icon className="w-7 h-7 text-brand-orange" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Questions Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 md:p-10 border border-amber-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                <HelpCircle className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                If your business struggles to answer:
              </h3>
            </div>

            <div className="space-y-4 mb-8">
              {questions.map((question, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm"
                >
                  <span className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 font-bold text-sm">
                    ?
                  </span>
                  <span className="text-gray-700 font-medium">{question}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center gap-3 bg-gradient-to-r from-brand-orange to-orange-500 rounded-2xl p-5 text-white">
              <CheckCircle className="w-6 h-6 flex-shrink-0" />
              <span className="font-semibold text-lg">
                You need structured SME finance support.
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoShouldUseSection;
