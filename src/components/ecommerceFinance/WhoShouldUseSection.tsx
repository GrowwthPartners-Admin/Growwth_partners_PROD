import { motion } from "framer-motion";
import { 
  Store, 
  Rocket, 
  TrendingDown, 
  DollarSign, 
  Eye, 
  HelpCircle,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

const WhoShouldUseSection = () => {
  const idealFor = [
    {
      icon: Store,
      title: "D2C & Ecommerce Brands",
      description: "Selling via Shopify, marketplaces, or omnichannel",
    },
    {
      icon: Rocket,
      title: "High-Growth Startups",
      description: "Ecommerce startups and SMEs scaling rapidly",
    },
    {
      icon: TrendingDown,
      title: "Cash Flow Challenges",
      description: "Brands struggling with cash flow despite strong sales",
    },
    {
      icon: DollarSign,
      title: "Margin Pressure",
      description: "Businesses facing pressure from rising ad costs",
    },
    {
      icon: Eye,
      title: "Limited Visibility",
      description: "Founders lacking real-time financial visibility",
    },
  ];

  const questions = [
    "Which SKUs are actually profitable?",
    "How much cash do we need to restock inventory?",
    "Are we scaling profitably or just increasing revenue?",
  ];

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left - Who Should Use */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Who Should Use{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">
                  Ecommerce Finance Services?
                </span>
              </h2>

              <div className="space-y-4">
                {idealFor.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:border-emerald-200 hover:shadow-md transition-all"
                  >
                    <div className="p-2 bg-emerald-100 rounded-lg shrink-0">
                      <item.icon className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right - Questions Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-24"
            >
              <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl p-8 text-white shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-white/20 rounded-xl">
                    <HelpCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">Do You Struggle to Answer:</h3>
                </div>

                <div className="space-y-4 mb-8">
                  {questions.map((question, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-start gap-3 p-4 bg-white/10 rounded-xl backdrop-blur-sm"
                    >
                      <CheckCircle2 className="w-5 h-5 text-emerald-300 shrink-0 mt-0.5" />
                      <span className="text-white/95 font-medium">{question}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="p-4 bg-white/10 rounded-xl border border-white/20">
                  <div className="flex items-center gap-2 text-emerald-200">
                    <ArrowRight className="w-5 h-5" />
                    <span className="font-semibold">
                      You need specialised ecommerce finance support.
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoShouldUseSection;
