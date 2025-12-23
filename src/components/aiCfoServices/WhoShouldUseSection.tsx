import { motion } from "framer-motion";
import { 
  Rocket, 
  Code2, 
  ShoppingCart, 
  Coins,
  TrendingUp,
  Eye,
  CheckCircle
} from "lucide-react";

const idealFor = [
  {
    icon: Rocket,
    title: "Data-driven startups and SMEs",
    description: "Fast-growing companies needing real-time insights"
  },
  {
    icon: Code2,
    title: "Tech, SaaS, ecommerce, and fintech companies",
    description: "Complex business models requiring sophisticated analytics"
  },
  {
    icon: ShoppingCart,
    title: "Businesses with complex revenue or cost structures",
    description: "Multi-product, multi-channel operations"
  },
  {
    icon: TrendingUp,
    title: "Companies scaling rapidly",
    description: "Needing faster decisions as complexity grows"
  },
  {
    icon: Eye,
    title: "Leadership teams demanding real-time visibility",
    description: "Executives who need instant financial clarity"
  }
];

const WhoShouldUseSection = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">
            Ideal Clients
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Who Should Use AI CFO Services?
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            AI CFO services are ideal for businesses that outgrow spreadsheet-based reporting
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {idealFor.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-slate-100"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-amber-100 rounded-xl flex items-center justify-center mb-4">
                <item.icon className="w-7 h-7 text-orange-500" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-600 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Call-out Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 text-white"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <Coins className="w-6 h-6 text-orange-400" />
            </div>
            <div>
              <p className="text-lg font-medium mb-4">
                If your business relies on spreadsheets that are outdated the moment they're created, AI CFO services provide a significant advantage.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-orange-400" />
                  <span>Real-time data updates</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-orange-400" />
                  <span>Automated reconciliation</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-orange-400" />
                  <span>Predictive analytics</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-orange-400" />
                  <span>Decision-ready insights</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoShouldUseSection;
