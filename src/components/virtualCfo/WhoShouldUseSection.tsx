import { motion } from "framer-motion";
import { Target, TrendingUp, Users, Globe, Rocket, Building2, Laptop, CreditCard } from "lucide-react";

const WhoShouldUseSection = () => {
  const businessNeeds = [
    { icon: Target, text: "Need strategic financial leadership, not just bookkeeping" },
    { icon: TrendingUp, text: "Are scaling but lack an internal finance head" },
    { icon: Users, text: "Are preparing for fundraising, expansion, or restructuring" },
    { icon: Globe, text: "Want real-time financial visibility instead of static reports" },
    { icon: Building2, text: "Need CFO insight without long-term hiring commitments" },
  ];

  const clientTypes = [
    { icon: Rocket, text: "Startups (Seed to Series B)", color: "bg-indigo-100 text-indigo-600" },
    { icon: Building2, text: "SMEs with growing complexity", color: "bg-purple-100 text-purple-600" },
    { icon: Laptop, text: "Tech, SaaS, ecommerce, fintech companies", color: "bg-cyan-100 text-cyan-600" },
    { icon: CreditCard, text: "International companies expanding into Singapore", color: "bg-pink-100 text-pink-600" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Who Should Use Virtual CFO Services?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Virtual CFO services are designed for businesses that need strategic financial leadership
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Business Needs */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-slate-50 to-indigo-50 rounded-3xl p-8 border border-slate-100"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Businesses That:
              </h3>
              
              <div className="space-y-4">
                {businessNeeds.map((need, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm"
                  >
                    <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <need.icon className="w-5 h-5 text-indigo-600" />
                    </div>
                    <span className="text-slate-700 font-medium pt-2">{need.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Client Types */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-slate-50 to-purple-50 rounded-3xl p-8 border border-slate-100"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Typical Clients Include:
              </h3>
              
              <div className="space-y-4">
                {clientTypes.map((client, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 p-5 bg-white rounded-xl shadow-sm"
                  >
                    <div className={`w-12 h-12 ${client.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <client.icon className="w-6 h-6" />
                    </div>
                    <span className="text-slate-700 font-semibold">{client.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoShouldUseSection;