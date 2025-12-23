import { motion } from "framer-motion";
import { 
  BarChart3, 
  TrendingUp, 
  Activity, 
  FileCheck, 
  Users,
  Layers
} from "lucide-react";

const deliveryAreas = [
  {
    number: "01",
    icon: BarChart3,
    title: "Real-Time Financial Dashboards",
    features: [
      "Live P&L, balance sheet, and cash flow views",
      "KPI dashboards aligned to business objectives",
      "Drill-down visibility across products, teams, and regions"
    ]
  },
  {
    number: "02",
    icon: TrendingUp,
    title: "Predictive Cash Flow & Forecasting",
    features: [
      "Rolling cash flow forecasts",
      "Predictive modelling using historical and real-time data",
      "Early warning signals for liquidity risk"
    ]
  },
  {
    number: "03",
    icon: Activity,
    title: "Scenario & Sensitivity Modelling",
    features: [
      "Growth, pricing, and cost scenarios",
      '"What-if" analysis for strategic decisions',
      "Capital allocation modelling"
    ]
  },
  {
    number: "04",
    icon: FileCheck,
    title: "Automated Reporting & Controls",
    features: [
      "Automated monthly MIS",
      "Reduced manual intervention",
      "Improved data accuracy and consistency"
    ]
  },
  {
    number: "05",
    icon: Users,
    title: "CFO-Led Insight & Decision Support",
    features: [
      "Interpretation of AI outputs by experienced CFOs",
      "Actionable recommendations",
      "Strategic guidance for leadership teams"
    ]
  }
];

const HowWeDeliverSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">
            Our Approach
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            How Growwth Partners Delivers AI CFO Value
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Our AI CFO services are built on a CFO-led, technology-enabled execution model
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {deliveryAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className={`relative group ${index === deliveryAreas.length - 1 ? 'lg:col-span-2 lg:max-w-2xl lg:mx-auto' : ''}`}
            >
              <div className="bg-slate-50 rounded-2xl p-8 h-full hover:bg-gradient-to-br hover:from-orange-50 hover:to-amber-50 transition-all duration-300 border border-slate-100 hover:border-orange-200">
                {/* Number Badge */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold">{area.number}</span>
                </div>

                <div className="flex items-start gap-4 mb-6 pt-2">
                  <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-orange-200 transition-colors">
                    <area.icon className="w-7 h-7 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 pt-3">
                    {area.title}
                  </h3>
                </div>

                <ul className="space-y-3 ml-2">
                  {area.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-slate-600">{feature}</span>
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
