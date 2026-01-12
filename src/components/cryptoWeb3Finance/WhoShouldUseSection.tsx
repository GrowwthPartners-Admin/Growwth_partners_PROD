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
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium text-orange-600 bg-orange-100 rounded-full">
            Is This Right For You?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Who Should Use Crypto & Web3 Finance Services?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Crypto & Web3 Finance services are ideal for blockchain-based businesses seeking institutional-grade financial control.
          </p>
        </motion.div>

        {/* Cards: 3 + 2 centered */}
        <div className="space-y-6 mb-12">
          {/* Row 1: first 3 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {idealFor.slice(0, 3).map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="group p-6 bg-white rounded-2xl border border-slate-200 hover:border-orange-300 hover:shadow-lg hover:shadow-orange-100/50 transition-all duration-300 h-full"
              >
                <div className="p-3 bg-gradient-to-br from-orange-100 to-orange-50 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="h-6 w-6 text-orange-600" />
                </div>
                <p className="text-slate-700 font-medium">{item.text}</p>
              </motion.div>
            ))}
          </div>

          {/* Row 2: last 2 centered */}
          <div className="flex flex-col md:flex-row justify-center gap-6">
            {idealFor.slice(3).map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 3) }}
                className="w-full md:max-w-[420px]"
              >
                <div className="group p-6 bg-white rounded-2xl border border-slate-200 hover:border-orange-300 shadow hover:shadow-lg hover:shadow-orange-100/50 transition-all duration-300 h-full">
                  <div className="p-3 bg-gradient-to-br from-orange-100 to-orange-50 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform">
                    <item.icon className="h-6 w-6 text-orange-600" />
                  </div>
                  <p className="text-slate-700 font-medium">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Struggles section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6 text-center">If your business struggles to explain:</h3>
            <div className="space-y-4 mb-8">
              {questions.map((question, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-white/10 rounded-xl p-4"
                >
                  <CheckCircle className="w-6 h-6 text-orange-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-200">{question}</span>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 text-center">
              <p className="text-lg font-semibold">
                You need specialised Web3 finance leadership.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoShouldUseSection;
