import {
  AlertTriangle,
  Eye,
  Package,
  Receipt,
  BarChart2,
  User,
  Clock,
  ArrowRight,
  CheckCircle,
  Users, 
  LayoutDashboard, 
  TrendingUp, 
  Target, 
  FileText, 
  Layers, 
} from "lucide-react";

const ChallengesSection = () => {
  const risks = [
    { icon: Eye, text: "Poor SKU-level margin visibility" },
    { icon: Package, text: "Inventory overstocking or stockouts" },
    { icon: Clock, text: "Cash flow gaps due to delayed platform payouts" },
    { icon: Receipt, text: "Inaccurate revenue recognition across channels" },
    {
      icon: BarChart2,
      text: "Limited insight into CAC, ROAS, and contribution margins",
    },
    { icon: User, text: "Founder-driven decisions based on incomplete data" },
  ];

  // Updated benefits array to include icons
  const benefits = [
    {
      icon: Users,
      text: "Ecommerce-experienced CFO and finance team",
    },
    {
      icon: LayoutDashboard,
      text: "SKU-level profitability dashboards",
    },
    {
      icon: TrendingUp,
      text: "Cash flow and inventory planning models",
    },
    {
      icon: Target,
      text: "Marketing ROI and unit economics insights",
    },
    {
      icon: FileText,
      text: "Accurate, timely ecommerce reporting",
    },
    {
      icon: Layers,
      text: "Scalable finance infrastructure as volume grows",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-8xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Risks Card */}
            <div className="bg-gradient-to-br from-red-50 via-orange-50 to-amber-50 rounded-3xl p-8 lg:p-10 border border-red-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-growwth-dark">
                  Financial Risks During CFO Transitions
                </h3>
              </div>

              <p className="text-gray-600 mb-8">
                Without immediate CFO leadership, businesses face:
              </p>

              <div className="space-y-4">
                {risks.map((risk, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-white rounded-xl border border-red-100 shadow-sm"
                  >
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <risk.icon className="w-5 h-5 text-red-600" />
                    </div>
                    <span className="text-gray-700 font-medium">
                      {risk.text}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-white/80 rounded-xl border border-orange-200">
                <p className="text-orange-800 font-medium text-center">
                  An Interim CFO ensures{" "}
                  <span className="font-bold">
                    continuity, control, and credibility
                  </span>
                  .
                </p>
              </div>
            </div>

            {/* Benefits Card */}
            <div className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 rounded-3xl p-8 lg:p-10 border border-green-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-growwth-dark">
                  What You Get with Our Interim CFO Services
                </h3>
              </div>

              <p className="text-gray-600 mb-8">
                Our Interim CFO engagement delivers:
              </p>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-white rounded-xl border border-green-100 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      {/* Render the icon dynamically here */}
                      <benefit.icon className="w-5 h-5 text-green-600" />
                    </div>
                    <span className="text-gray-700 font-medium">
                      {benefit.text}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl text-white">
                <p className="font-medium text-center">
                  Engagements are{" "}
                  <span className="font-bold">time-bound, outcome-driven</span>,
                  and focused on continuity.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Arrow */}
          <div className="flex justify-center mt-12">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center animate-bounce">
              <ArrowRight className="w-6 h-6 text-orange-600 rotate-90" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;
