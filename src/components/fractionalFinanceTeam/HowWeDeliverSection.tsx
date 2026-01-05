import { motion } from "framer-motion";
import { 
  LineChart, 
  FileBarChart, 
  Wallet, 
  Shield, 
  Users2,
  TrendingUp
} from "lucide-react";

const HowWeDeliverSection = () => {
  const services = [
    {
      number: "01",
      icon: LineChart,
      title: "Financial Planning & Forecasting",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/10 to-cyan-500/10",
      items: [
        "Annual and rolling forecasts",
        "Scenario and sensitivity analysis",
        "Revenue and cost driver modelling"
      ]
    },
    {
      number: "02",
      icon: FileBarChart,
      title: "Management Reporting & Analysis",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-500/10 to-emerald-500/10",
      items: [
        "Monthly MIS and KPI dashboards",
        "Variance and trend analysis",
        "Actionable performance insights"
      ]
    },
    {
      number: "03",
      icon: Wallet,
      title: "Budgeting & Cost Control",
      gradient: "from-orange-500 to-amber-500",
      bgGradient: "from-orange-500/10 to-amber-500/10",
      items: [
        "Budget creation and ownership",
        "Department-level analysis",
        "Cost optimisation initiatives"
      ]
    },
    {
      number: "04",
      icon: Shield,
      title: "Financial Controls & Process Improvement",
      gradient: "from-purple-500 to-violet-500",
      bgGradient: "from-purple-500/10 to-violet-500/10",
      items: [
        "Review of existing finance processes",
        "Control framework implementation",
        "Improved data accuracy and consistency"
      ]
    },
    {
      number: "05",
      icon: Users2,
      title: "Decision Support & CFO Integration",
      gradient: "from-red-500 to-rose-500",
      bgGradient: "from-red-500/10 to-rose-500/10",
      items: [
        "Support for CFO-level strategy",
        "Data-driven input into leadership decisions",
        "Alignment with Virtual, Fractional, or Part-Time CFO services"
      ]
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">
              <TrendingUp className="w-4 h-4" />
              Our Approach
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              How Growwth Partners Delivers Fractional Finance Team Value
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Our Fractional Finance Team services are designed to strengthen financial insight, control, and scalability.
            </p>
          </motion.div>

          <div className="space-y-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative overflow-hidden rounded-2xl border border-slate-200 hover:border-transparent hover:shadow-xl transition-all duration-300`}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${service.bgGradient} opacity-0 opacity-100 transition-opacity duration-300`} />
                
                <div className="relative p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    {/* Number & Icon */}
                    <div className="flex items-center gap-4">
                      <span className={`text-4xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                        {service.number}
                      </span>
                      <div className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center`}>
                        <service.icon className="w-7 h-7 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
                        {service.title}
                      </h3>
                      <ul className="grid md:grid-cols-3 gap-3">
                        {service.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2 text-slate-600">
                            <span className={`w-2 h-2 mt-2 rounded-full bg-gradient-to-r ${service.gradient} flex-shrink-0`} />
                            {item}
                          </li>
                        ))}
                      </ul>
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
