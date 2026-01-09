import { 
  Zap, Shield, Wallet, BarChart3, RefreshCw,
  CheckCircle, Clock, Users, FileCheck, Scale, ArrowRight
} from "lucide-react";

const HowWeDeliverSection = () => {
  const deliveryAreas = [
    {
      icon: Zap,
      title: "Rapid Stabilisation of Finance Operations",
      color: "from-orange-500 to-amber-500",
      items: [
        "Immediate assessment of financial health",
        "Restoration of monthly close and reporting timelines",
        "Oversight and direction of finance teams"
      ]
    },
    {
      icon: Shield,
      title: "Strengthening Financial Controls & Governance",
      color: "from-blue-500 to-indigo-500",
      items: [
        "Review and implementation of financial policies",
        "Risk and compliance assessment",
        "Improvement of approval and control frameworks"
      ]
    },
    {
      icon: Wallet,
      title: "Cash Flow & Liquidity Management",
      color: "from-green-500 to-emerald-500",
      items: [
        "Short-term and rolling cash flow forecasts",
        "Working capital optimisation",
        "Liquidity risk mitigation"
      ]
    },
    {
      icon: BarChart3,
      title: "Executive, Board & Investor Reporting",
      color: "from-purple-500 to-violet-500",
      items: [
        "Accurate MIS and board packs",
        "Clear performance and risk insights",
        "Transparent communication with stakeholders"
      ]
    },
    {
      icon: RefreshCw,
      title: "Transition & Handover Planning",
      color: "from-teal-500 to-cyan-500",
      items: [
        "Documentation of finance processes",
        "Support in recruiting or onboarding a permanent CFO",
        "Structured handover to internal leadership"
      ]
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 font-bold">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full mb-6">
              <Zap className="w-4 h-4 text-orange-600" />
              <span className="text-orange-700 text-sm font-semibold">Our Approach</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-growwth-dark mb-6">
              How Growwth Partners Delivers{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-brand-orange">
                Interim CFO Value
              </span>
            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our Interim CFO engagements are designed to <span className="font-semibold text-orange-600">stabilise first</span>, 
              then <span className="font-semibold text-orange-600">optimise</span>.
            </p>
          </div>

          {/* Delivery Areas */}
          <div className="space-y-6 font-bold">
            {deliveryAreas.map((area, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Number and Icon */}
                  <div className="flex items-center gap-4 lg:w-80 flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-amber-100 rounded-xl flex items-center justify-center text-xl font-bold text-orange-600">
                      {index + 1}
                    </div>
                    <div className={`w-14 h-14 bg-gradient-to-br ${area.color} rounded-xl flex items-center justify-center shadow-lg`}>
                      <area.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-growwth-dark lg:hidden">{area.title}</h3>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-growwth-dark mb-4 hidden lg:block">{area.title}</h3>
                    <div className="grid sm:grid-cols-3 gap-4">
                      {area.items.map((item, itemIndex) => (
                        <div 
                          key={itemIndex}
                          className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl"
                        >
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeDeliverSection;
