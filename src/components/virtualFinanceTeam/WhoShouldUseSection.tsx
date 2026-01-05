import { motion } from "framer-motion";
import { Check, Rocket, Globe, Building2, TrendingUp, Eye, AlertCircle } from "lucide-react";

const idealFor = [
  {
    icon: Rocket,
    text: "Startups and SMEs operating with lean teams"
  },
  {
    icon: Globe,
    text: "Businesses expanding into Singapore without local finance hires"
  },
  {
    icon: Building2,
    text: "Companies with distributed or remote operations"
  },
  {
    icon: TrendingUp,
    text: "Organisations seeking cost-efficient finance scalability"
  },
  {
    icon: Eye,
    text: "Founders who want real-time financial visibility without operational burden"
  }
];

const WhoShouldUseSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brand-orange font-semibold text-sm uppercase tracking-wider">Is This Right For You?</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
              Who Should Use Virtual Finance Team Services?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Virtual Finance Team services are ideal for businesses seeking a cloud-first, integrated finance function without building an in-house team.
            </p>

            <div className="space-y-4">
              {idealFor.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 bg-brand-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-brand-orange" />
                  </div>
                  <p className="text-gray-700 font-medium">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mt-8"
          >
            <div className="bg-gradient-to-br from-brand-orange/10 via-orange-50 to-amber-50 rounded-3xl p-8 md:p-10 shadow">
              <div className="flex items-center gap-3 mb-6">
                <AlertCircle className="w-8 h-8 text-brand-orange" />
                <h3 className="text-xl font-bold text-gray-900">Signs You Need This Service</h3>
              </div>
              
              <p className="text-gray-700 mb-6">
                If your business relies on multiple tools, spreadsheets, or vendors to manage finance, a Virtual Finance Team simplifies and centralises the entire function:
              </p>

              <div className="space-y-4">
                {[
                  "Fragmented finance operations across tools",
                  "Limited real-time visibility into performance",
                  "High dependency on individuals rather than systems",
                  "Poor coordination between accounting and reporting",
                  "Increased risk during audits or compliance reviews"
                ].map((sign, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-brand-orange rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">{sign}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-orange/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoShouldUseSection;
