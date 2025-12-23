import { motion } from "framer-motion";
import { 
  TrendingUp, 
  FileText, 
  Calculator, 
  Wallet, 
  BarChart3,
  Users
} from "lucide-react";

const services = [
  {
    icon: TrendingUp,
    number: "01",
    title: "Recurring Revenue & ARR Management",
    features: [
      "Accurate MRR and ARR calculations",
      "Contract and subscription-level tracking",
      "Revenue churn and expansion analysis"
    ]
  },
  {
    icon: FileText,
    number: "02",
    title: "Deferred Revenue & Revenue Recognition",
    features: [
      "Deferred revenue accounting",
      "Contract-based revenue recognition",
      "Alignment with reporting standards"
    ]
  },
  {
    icon: Calculator,
    number: "03",
    title: "Unit Economics & SaaS Metrics",
    features: [
      "CAC, LTV, and payback period analysis",
      "Gross margin and contribution margin tracking",
      "Cohort and retention analysis"
    ]
  },
  {
    icon: Wallet,
    number: "04",
    title: "Burn Rate & Runway Management",
    features: [
      "Monthly burn-rate tracking",
      "Rolling cash flow and runway forecasts",
      "Scenario modelling for growth and hiring"
    ]
  },
  {
    icon: BarChart3,
    number: "05",
    title: "SaaS Forecasting & Financial Planning",
    features: [
      "ARR-driven financial models",
      "Headcount and infrastructure cost planning",
      "Pricing and packaging impact analysis"
    ]
  },
  {
    icon: Users,
    number: "06",
    title: "Investor & Board Reporting",
    features: [
      "SaaS KPI dashboards",
      "Investor-ready financial reports",
      "Data-backed growth narratives"
    ]
  }
];

const HowWeDeliverSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-orange-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm font-medium mb-4 border border-orange-500/30">
            Our Approach
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How Growwth Partners Delivers SaaS Finance Value
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Our SaaS Finance services are built to deliver predictability, transparency, and capital efficiency.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-orange-500/50 transition-all duration-300 group shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <span className="text-4xl font-bold text-orange-500/30">{service.number}</span>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-4">
                {service.title}
              </h3>
              
              <ul className="space-y-2">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-2 text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0" />
                    {feature}
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
