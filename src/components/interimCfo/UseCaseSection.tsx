import { 
  Building2, AlertTriangle, Clock, TrendingUp,
  CheckCircle, ArrowRight, BarChart3, Shield
} from "lucide-react";

const UseCaseSection = () => {
  const challenges = [
    "Missed reporting deadlines",
    "Weak cash flow visibility",
    "Investor concern"
  ];

  const solutions = [
    "Appointed an Interim CFO within days",
    "Restored monthly reporting discipline",
    "Implemented rolling cash flow forecasts",
    "Strengthened financial controls"
  ];

  const outcomes = [
    { metric: "20 → 5 days", label: "Reporting Cycle" },
    { metric: "100%", label: "Investor Confidence Restored" },
    { metric: "Seamless", label: "CFO Transition" }
  ];

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-white via-orange-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="max-w-8xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full mb-6">
              <Building2 className="w-4 h-4 text-orange-600" />
              <span className="text-orange-700 text-sm font-semibold">Success Story</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-growwth-dark mb-6">
              Practical{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-growwth-primary">
                Use Case
              </span>
            </h2>
          </div>

          {/* Case Study Card */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            {/* Client Info Header */}
            <div className="bg-gradient-to-r from-orange-500 to-orange-200 p-6 lg:p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <div className="text-orange-100 text-sm font-medium mb-1">Client Type</div>
                  <h3 className="text-2xl font-bold text-white">PE-Backed SME (Singapore)</h3>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-3">
                  <div className="text-orange-100 text-sm">Situation</div>
                  <div className="text-white font-semibold">CFO resignation during reporting delays</div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 lg:p-8">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Challenges */}
                <div className="bg-red-50 rounded-2xl p-6 border border-red-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                      <AlertTriangle className="w-5 h-5 text-red-600" />
                    </div>
                    <h4 className="text-lg font-bold text-red-800">Challenges</h4>
                  </div>
                  <ul className="space-y-3">
                    {challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-red-400 rounded-full mt-2" />
                        <span className="text-red-700">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solutions */}
                <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Shield className="w-5 h-5 text-blue-600" />
                    </div>
                    <h4 className="text-lg font-bold text-blue-800">Our Solution</h4>
                  </div>
                  <ul className="space-y-3">
                    {solutions.map((solution, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span className="text-blue-700">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Outcomes */}
                <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-green-600" />
                    </div>
                    <h4 className="text-lg font-bold text-green-800">Outcomes</h4>
                  </div>
                  <div className="space-y-4">
                    {outcomes.map((outcome, index) => (
                      <div key={index} className="text-center p-3 bg-white rounded-xl border border-green-200">
                        <div className="text-2xl font-bold text-green-600">{outcome.metric}</div>
                        <div className="text-sm text-green-700">{outcome.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCaseSection;
