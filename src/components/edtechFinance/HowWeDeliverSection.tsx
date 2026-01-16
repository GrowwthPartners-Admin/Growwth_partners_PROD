import { motion } from "framer-motion";
import { 
  Receipt, 
  BarChart3, 
  Target, 
  Wallet,
  TrendingUp,
  Users,
  CheckCircle2
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Revenue & Cohort-Based Financial Tracking",
    icon: Receipt,
    items: [
      "Subscription, course, and contract revenue models",
      "Cohort-wise revenue and margin analysis",
      "Deferred revenue and enrolment-based recognition",
    ],
  },
  {
    number: "02",
    title: "Cost Structure & Margin Analysis",
    icon: BarChart3,
    items: [
      "Content development and instructor cost tracking",
      "Platform, marketing, and learner acquisition costs",
      "Contribution margin analysis per course or cohort",
    ],
  },
  {
    number: "03",
    title: "Unit Economics & Learner Profitability",
    icon: Target,
    items: [
      "CAC, LTV, and payback period by learner segment",
      "Institutional vs consumer revenue comparison",
      "Pricing and discount impact analysis",
    ],
  },
  {
    number: "04",
    title: "Cash Flow & Runway Management",
    icon: Wallet,
    items: [
      "Cash flow forecasting aligned to enrolment cycles",
      "Working capital planning for instructor and platform costs",
      "Scenario modelling for enrolment volatility",
    ],
  },
  {
    number: "05",
    title: "Financial Planning & Forecasting",
    icon: TrendingUp,
    items: [
      "Enrolment-driven financial models",
      "Headcount and platform scaling forecasts",
      "Market expansion and pricing simulations",
    ],
  },
  {
    number: "06",
    title: "CFO-Led Strategic & Investor Support",
    icon: Users,
    items: [
      "Investor and board reporting",
      "Financial narratives aligned to growth strategy",
      "Support during fundraising and due diligence",
    ],
  },
];

const HowWeDeliverSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brand-orange font-semibold text-sm uppercase tracking-wider">
            Our Approach
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
            How Growwth Partners Delivers EdTech Finance Value
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our EdTech Finance services are designed to bring clarity, discipline, and predictability to education-focused business models.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-8xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 shadow-lg">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/20">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-4xl font-bold text-brand-orange/30 group-hover:text-brand-orange/50 transition-colors">
                    {service.number}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-brand-orange transition-colors">
                  {service.title}
                </h3>
                <ul className="space-y-3">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeDeliverSection;
