import { motion } from "framer-motion";
import { CheckCircle, Bitcoin, Layers, Wallet, Globe, Building2 } from "lucide-react";

const idealFor = [
  { icon: Bitcoin, text: "Blockchain startups and Web3 platforms" },
  { icon: Layers, text: "Token-issuing companies (utility or governance tokens)" },
  { icon: Wallet, text: "Crypto exchanges, wallets, and infrastructure providers" },
  { icon: Building2, text: "DAO-linked entities and Web3 foundations" },
  { icon: Globe, text: "Web3 companies operating or expanding in Singapore" }
];

const questions = [
  "How tokens are accounted for",
  "How treasury risk is managed",
  "How revenue is recognised"
];

const WhoShouldUseSection = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium mb-4">
              Ideal For
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              Who Should Use Crypto & Web3 Finance Services?
            </h2>
            
            <div className="space-y-4">
              {idealFor.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-4 bg-white rounded-xl p-4 shadow border border-slate-100"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-slate-700 font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-3xl p-8 text-white mt-8"
          >
            <h3 className="text-2xl font-bold mb-6">If your business struggles to explain:</h3>
            <div className="space-y-4 mb-8">
              {questions.map((question, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-white/10 rounded-xl p-4"
                >
                  <CheckCircle className="w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-200">{question}</span>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl p-6 text-center">
              <p className="text-lg font-semibold">
                You need specialised Web3 finance leadership.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoShouldUseSection;
