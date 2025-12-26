import { motion } from "framer-motion";
import { 
  LineChart, 
  Wallet, 
  BarChart3, 
  Target,
  Shield,
  FileCheck,
  TrendingUp,
  PiggyBank,
  AlertTriangle,
  Settings,
  PresentationIcon,
  Users,
  ClipboardCheck,
  Lightbulb
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Financial Modelling & Forecasting",
    icon: LineChart,
    color: "from-blue-500 to-cyan-500",
    items: [
      "3–5 year integrated financial models",
      "Revenue, cost, and cash flow projections",
      "Scenario and sensitivity analysis",
      "Assumption validation aligned with investor expectations"
    ]
  },
  {
    number: "02",
    title: "Cash Burn & Runway Management",
    icon: Wallet,
    color: "from-green-500 to-emerald-500",
    items: [
      "Monthly burn-rate tracking",
      "Rolling runway forecasts",
      "Liquidity risk identification",
      "Cost optimisation strategies"
    ]
  },
  {
    number: "03",
    title: "Unit Economics & Growth Metrics",
    icon: BarChart3,
    color: "from-orange-500 to-amber-500",
    items: [
      "CAC, LTV, and payback analysis",
      "Gross margin and contribution analysis",
      "Cohort analysis (where applicable)",
      "KPI dashboards aligned to growth goals"
    ]
  },
  {
    number: "04",
    title: "Fundraising & Investor Readiness",
    icon: Target,
    color: "from-purple-500 to-pink-500",
    items: [
      "Pitch deck financials",
      "Investor Q&A preparation",
      "Due diligence support",
      "Financial narrative alignment"
    ]
  },
  {
    number: "05",
    title: "Financial Governance & Controls",
    icon: Shield,
    color: "from-red-500 to-rose-500",
    items: [
      "Budget ownership and discipline",
      "Basic financial controls",
      "Founder-level financial decision frameworks"
    ]
  }
];

const HowWeDeliverSection = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">
              Our Approach
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              How Growwth Partners Supports Startups
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Our Startup CFO services are designed to bring discipline, clarity, and credibility to your finance function.
            </p>
          </motion.div>

          <div className="space-y-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl border border-slate-200 hover:border-orange-300 shadow hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="flex flex-col lg:flex-row">
                    {/* Left Section */}
                    <div className={`lg:w-1/3 p-6 md:p-8 bg-gradient-to-br ${service.color} flex items-center gap-4`}>
                      <div className="text-4xl md:text-5xl font-bold text-white/30">
                        {service.number}
                      </div>
                      <div className="flex items-center gap-3">
                        <h3 className="text-xl md:text-2xl font-bold text-white">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    {/* Right Section */}
                    <div className="lg:w-2/3 p-6 md:p-8">
                      <div className="grid sm:grid-cols-2 gap-3">
                        {service.items.map((item, itemIndex) => (
                          <div
                            key={itemIndex}
                            className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 group-hover:bg-orange-50/50 transition-colors"
                          >
                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 mt-2 flex-shrink-0" />
                            <span className="text-slate-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeDeliverSection;
