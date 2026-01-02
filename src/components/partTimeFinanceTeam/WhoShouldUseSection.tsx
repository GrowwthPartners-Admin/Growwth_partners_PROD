import { motion } from "framer-motion";
import { Check, Rocket, TrendingUp, User, Building2, DollarSign, AlertCircle } from "lucide-react";

const idealFor = [
  {
    icon: Rocket,
    text: "Startups and SMEs with growing transaction volumes"
  },
  {
    icon: TrendingUp,
    text: "Businesses that need execution support but not full-time hires"
  },
  {
    icon: User,
    text: "Founder-led companies managing finance manually"
  },
  {
    icon: Building2,
    text: "Organisations transitioning from basic bookkeeping to structured reporting"
  },
  {
    icon: DollarSign,
    text: "Companies expanding operations without increasing fixed costs"
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
              Who Should Use Part-Time Finance Team Services?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Part-Time Finance Team services are ideal for businesses seeking professional finance execution without the overhead of full-time staff.
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
                If your business struggles with any of the following, this model provides immediate relief:
              </p>

              <div className="space-y-4">
                {[
                  "Delayed month-end closes",
                  "Inconsistent financial reports",
                  "Finance-related operational bottlenecks",
                  "Over-reliance on founders for finance tasks",
                  "Lack of structured reporting processes"
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
