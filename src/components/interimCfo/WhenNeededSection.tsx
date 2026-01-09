import { UserMinus, RefreshCw, GitMerge, FileWarning, Rocket, AlertTriangle, Clock, Zap } from "lucide-react";

const WhenNeededSection = () => {
  const scenarios = [
    { 
      icon: UserMinus, 
      title: "CFO Resignation",
      description: "A CFO resigns or exits unexpectedly"
    },
    { 
      icon: RefreshCw, 
      title: "Restructuring",
      description: "The business is undergoing restructuring or turnaround"
    },
    { 
      icon: GitMerge, 
      title: "M&A Activity",
      description: "A merger, acquisition, or integration is underway"
    },
    { 
      icon: FileWarning, 
      title: "Compliance Issues",
      description: "Audit, compliance, or regulatory issues must be resolved"
    },
    { 
      icon: Rocket, 
      title: "Exit Preparation",
      description: "The company is preparing for fundraising, exit, or IPO"
    },
    { 
      icon: AlertTriangle, 
      title: "Leadership Gaps",
      description: "Financial leadership gaps threaten operational stability"
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-white via-orange-50/30 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-8xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full mb-6">
              <Clock className="w-4 h-4 text-orange-600" />
              <span className="text-orange-700 text-sm font-semibold">Critical Timing</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-growwth-dark mb-6">
              When Do Businesses Need an{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-growwth-primary">
                Interim CFO?
              </span>
            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Businesses commonly engage Interim CFO services when facing transitions, 
              crises, or critical milestones that demand immediate senior financial leadership.
            </p>
          </div>

          {/* Scenarios Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {scenarios.map((scenario, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-orange-200 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-amber-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <scenario.icon className="w-7 h-7 text-orange-600" />
                </div>
                <h3 className="text-lg font-bold text-growwth-dark mb-2">{scenario.title}</h3>
                <p className="text-gray-600">{scenario.description}</p>
              </div>
            ))}
          </div>

          {/* Urgency Banner */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-400 rounded-2xl p-8 text-center shadow-xl">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Zap className="w-8 h-8 text-white" />
              <h3 className="text-2xl font-bold text-white">Speed & Experience Are Critical</h3>
            </div>
            <p className="text-orange-100 text-lg max-w-2xl mx-auto">
              In these scenarios, having an experienced Interim CFO deployed quickly 
              can mean the difference between stability and crisis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhenNeededSection;
