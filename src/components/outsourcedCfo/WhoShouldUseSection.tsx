import { motion } from "framer-motion";
import { Building2, Users, Rocket, Globe, Target, CheckCircle } from "lucide-react";

const idealFor = [
  { icon: Building2, text: "Startups and SMEs needing full CFO ownership" },
  { icon: Users, text: "Companies without internal finance leadership" },
  { icon: Rocket, text: "Businesses scaling rapidly with increasing complexity" },
  { icon: Globe, text: "International companies operating in Singapore" },
  { icon: Target, text: "Founders who want to focus on growth, not finance execution" }
];

const WhoShouldUseSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-orange-50/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Who Should Use Outsourced CFO Services?
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Perfect for businesses that need complete CFO leadership without the overhead
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Outsourced CFO Services are Ideal For:</h3>
              {idealFor.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:border-orange-200 transition-colors"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-slate-700 font-medium">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-orange-500 to-amber-500 rounded-3xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-6">Is This You?</h3>
              <p className="text-orange-100 mb-6">If your business needs a CFO but not the burden of building a finance department, outsourced CFO services provide the right balance.</p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-white flex-shrink-0 mt-0.5" />
                  <p className="text-orange-50">Need full financial leadership but can't justify full-time hire</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-white flex-shrink-0 mt-0.5" />
                  <p className="text-orange-50">Want to focus on business growth, not finance execution</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-white flex-shrink-0 mt-0.5" />
                  <p className="text-orange-50">Require experienced CFO oversight without building internal team</p>
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
