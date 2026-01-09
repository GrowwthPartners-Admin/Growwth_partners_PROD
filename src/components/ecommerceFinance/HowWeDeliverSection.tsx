import { motion } from "framer-motion";
import { 
  PieChart, 
  Wallet, 
  Target, 
  CreditCard, 
  FileText, 
  Lightbulb,
  ArrowRight
} from "lucide-react";

const HowWeDeliverSection = () => {
  const deliverables = [
    {
      icon: PieChart,
      number: "01",
      title: "SKU-Level Profitability & Margin Analysis",
      items: [
        "Product-wise revenue and margin tracking",
        "Platform fees, logistics, and returns allocation",
        "Contribution margin analysis per SKU and channel",
      ],
    },
    {
      icon: Wallet,
      number: "02",
      title: "Cash Flow & Inventory Planning",
      items: [
        "Rolling cash flow forecasts",
        "Inventory purchase and restocking models",
        "Working capital optimisation",
        "Payout cycle and liquidity planning",
      ],
    },
    {
      icon: Target,
      number: "03",
      title: "Marketing & Unit Economics Analysis",
      items: [
        "CAC, ROAS, and payback period tracking",
        "Marketing spend vs profitability analysis",
        "LTV and cohort-based performance insights",
      ],
    },
    {
      icon: CreditCard,
      number: "04",
      title: "Platform & Payment Reconciliations",
      items: [
        "Marketplace and payment gateway reconciliations",
        "Revenue accuracy checks",
        "Reduction of leakage and discrepancies",
      ],
    },
    {
      icon: FileText,
      number: "05",
      title: "Management & Investor Reporting",
      items: [
        "Monthly MIS and dashboards",
        "Ecommerce-specific KPIs",
        "Board and investor-ready reporting",
      ],
    },
    {
      icon: Lightbulb,
      number: "06",
      title: "CFO-Led Strategic Decision Support",
      items: [
        "Pricing and discount strategy",
        "Expansion into new platforms or markets",
        "Cost optimisation and scale planning",
      ],
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-8xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-4">
              Our Approach
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              How Growwth Partners Delivers{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
                Ecommerce Finance Value
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our Ecommerce Finance services are designed to bring clarity, control, and 
              predictability to ecommerce operations.
            </p>
          </motion.div>

          {/* Deliverables Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverables.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-gray-50 hover:bg-white rounded-2xl p-6 border border-gray-100 shadow hover:border-orange-200 hover:shadow-xl transition-all duration-300"
              >
                {/* Number Badge */}
                <div className="absolute top-4 right-4 text-4xl font-bold text-orange-100 transition-colors">
                  {item.number}
                </div>

                {/* Icon */}
                <div className="p-3 bg-orange-100 rounded-xl inline-block mb-4 group-hover:bg-orange-200 transition-colors">
                  <item.icon className="w-6 h-6 text-orange-600" />
                </div>

                {/* Title */}
                <h3 className="font-bold text-gray-900 mb-4 group-hover:text-orange-700 transition-colors pr-12">
                  {item.title}
                </h3>

                {/* Items */}
                <ul className="space-y-2">
                  {item.items.map((listItem, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                      <ArrowRight className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                      <span>{listItem}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeDeliverSection;
