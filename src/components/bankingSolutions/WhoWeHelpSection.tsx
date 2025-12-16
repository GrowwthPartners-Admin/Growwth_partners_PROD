import { motion } from "framer-motion";
import { 
  Rocket, 
  Building2, 
  ShoppingCart, 
  Globe2,
  Wallet,
  Receipt,
  FileText,
  BarChart3
} from "lucide-react";

const audiences = [
  {
    icon: Rocket,
    title: "Pre-seed and Seed Startups",
    description: "Fast, reliable accounts"
  },
  {
    icon: Building2,
    title: "Growing SMEs",
    description: "Formalising banking solutions and approvals"
  },
  {
    icon: ShoppingCart,
    title: "Subscription & E-commerce",
    description: "Smooth settlements for marketplace models"
  },
  {
    icon: Globe2,
    title: "Multi-currency Teams",
    description: "Selling across regions"
  }
];

const addOns = [
  {
    icon: Wallet,
    title: "Treasury Basics",
    description: "Short-term cash management"
  },
  {
    icon: Receipt,
    title: "Collections & Payouts",
    description: "Including refunds and chargebacks"
  },
  {
    icon: FileText,
    title: "Policy Templates",
    description: "Cards, approvals, and vendor onboarding"
  },
  {
    icon: BarChart3,
    title: "KPI Dashboards",
    description: "Cash, runway, and payments success rates"
  }
];

const WhoWeHelpSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Who We Help */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 bg-brand-blue/10 text-brand-blue rounded-full text-sm font-semibold mb-4">
              Our Clients
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Who We Help
            </h2>

            <div className="space-y-4">
              {audiences.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group flex items-center gap-4 bg-white rounded-xl p-4 border border-gray-100 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-6 h-6 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Add-on Services */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 bg-brand-orange/10 text-brand-orange rounded-full text-sm font-semibold mb-4">
              Extra Value
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Add-on Services
            </h2>

            <div className="space-y-4">
              {addOns.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group flex items-center gap-4 bg-white rounded-xl p-4 border border-gray-100 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-6 h-6 text-brand-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelpSection;
