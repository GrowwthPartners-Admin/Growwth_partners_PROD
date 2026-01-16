import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Calculator, 
  DollarSign, 
  FileText, 
  TrendingUp, 
  Shield, 
  Briefcase 
} from "lucide-react";

const deliveryAreas = [
  {
    number: "01",
    icon: Calculator,
    title: "Fund Accounting & NAV Reporting",
    items: [
      "Accurate NAV calculation and reporting",
      "Portfolio valuation tracking",
      "Capital account maintenance"
    ]
  },
  {
    number: "02",
    icon: DollarSign,
    title: "Capital Calls, Distributions & Waterfalls",
    items: [
      "Capital call planning and execution",
      "Distribution tracking and allocation",
      "Waterfall and carry calculations"
    ]
  },
  {
    number: "03",
    icon: FileText,
    title: "LP Reporting & Investor Communication",
    items: [
      "Quarterly and annual LP reports",
      "Performance and portfolio summaries",
      "Clear, consistent investor communication"
    ]
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Portfolio Valuation & Performance Tracking",
    items: [
      "Fair value assessment of portfolio companies",
      "IRR, TVPI, DPI, and MOIC analysis",
      "Portfolio dashboards and insights"
    ]
  },
  {
    number: "05",
    icon: Shield,
    title: "Financial Governance & Audit Support",
    items: [
      "Fund-level controls and documentation",
      "Audit coordination and support",
      "Compliance-ready financial records"
    ]
  },
  {
    number: "06",
    icon: Briefcase,
    title: "CFO-Led Strategic & Operational Support",
    items: [
      "Fund structuring and setup support",
      "Operational oversight for finance",
      "Trusted financial partner to GPs"
    ]
  }
];

const HowWeDeliverSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-gradient-to-b from-slate-950 via-gray-500 to-slate-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-8xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/20 text-orange-300 text-sm font-medium mb-4">
              Our Approach
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              How Growwth Partners Delivers{" "}
              <span className="text-orange-400">Fund Finance Value</span>
            </h2>
            <p className="text-lg text-orange-100/80 max-w-3xl mx-auto">
              Our Venture Capital & Fund Finance services are designed to deliver control, transparency, and institutional credibility.
            </p>
          </motion.div>

          {/* Delivery Areas Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliveryAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-orange-500/50 hover:bg-white/10 transition-all duration-300"
              >
                {/* Number badge */}
                <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-sm">{area.number}</span>
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-600/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <area.icon className="w-7 h-7 text-orange-400" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-4">{area.title}</h3>

                {/* Items */}
                <ul className="space-y-2">
                  {area.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2 text-orange-100/80 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0" />
                      {item}
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
