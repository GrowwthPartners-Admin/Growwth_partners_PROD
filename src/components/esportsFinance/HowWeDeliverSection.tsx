import { motion } from "framer-motion";
import { 
  BarChart3, 
  Wallet, 
  Users, 
  TrendingUp, 
  LineChart, 
  Briefcase,
  ArrowRight
} from "lucide-react";

const deliverables = [
  {
    number: "01",
    icon: BarChart3,
    title: "Revenue & Monetisation Analysis",
    items: [
      "Tracking of ads, in-app purchases, subscriptions, sponsorships, and prize income",
      "Platform and publisher revenue reconciliation",
      "Monetisation performance dashboards",
    ],
  },
  {
    number: "02",
    icon: Wallet,
    title: "Development & Live-Ops Cost Management",
    items: [
      "Game development and content cost tracking",
      "Live-ops, server, and infrastructure cost analysis",
      "Cost allocation across titles and projects",
    ],
  },
  {
    number: "03",
    icon: Users,
    title: "Unit Economics & Player Cohort Analysis",
    items: [
      "Player acquisition cost (PAC) and lifetime value (LTV)",
      "Retention, ARPU, and cohort performance metrics",
      "Event and tournament profitability analysis",
    ],
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Cash Flow & Release Cycle Planning",
    items: [
      "Cash flow forecasting aligned to game releases and events",
      "Funding and runway planning",
      "Scenario modelling for performance volatility",
    ],
  },
  {
    number: "05",
    icon: LineChart,
    title: "Financial Planning & Forecasting",
    items: [
      "Title-level and portfolio-level forecasting",
      "Headcount and production planning models",
      "Expansion and publishing strategy simulations",
    ],
  },
  {
    number: "06",
    icon: Briefcase,
    title: "CFO-Led Strategic & Investor Support",
    items: [
      "Investor and publisher reporting",
      "Financial narratives aligned to monetisation strategy",
      "Support during fundraising, partnerships, and negotiations",
    ],
  },
];

const HowWeDeliverSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            How Growwth Partners Delivers{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-fuchsia-600">
              Gaming Finance Value
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Our Esports & Gaming Finance services are designed to bring clarity, discipline, 
            and predictability to gaming business models.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {deliverables.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-slate-50 hover:bg-white rounded-2xl p-6 lg:p-8 border border-slate-100 hover:border-purple-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl font-bold text-purple-200 group-hover:text-purple-300 transition-colors">
                  {item.number}
                </span>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-fuchsia-500 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                {item.title}
              </h3>

              <ul className="space-y-3">
                {item.items.map((listItem, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3 text-slate-600">
                    <ArrowRight className="w-4 h-4 text-purple-500 flex-shrink-0 mt-1" />
                    <span className="text-sm">{listItem}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeDeliverSection;
