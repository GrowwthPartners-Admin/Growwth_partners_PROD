import { Shield, Users, BarChart3, Wallet, RefreshCw, CheckCircle } from "lucide-react";

const WhatIsSection = () => {
  const services = [
    { icon: Shield, text: "End-to-end financial leadership" },
    { icon: Users, text: "Oversight of finance teams and systems" },
    { icon: BarChart3, text: "Board and investor reporting" },
    { icon: Wallet, text: "Cash flow and risk management" },
    { icon: RefreshCw, text: "Transition planning for long-term CFO replacement" }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full mb-6">
                <Shield className="w-4 h-4 text-orange-600" />
                <span className="text-orange-700 text-sm font-semibold">AEO-Optimised Definition</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-growwth-dark mb-6 leading-tight">
                What Are Interim CFO{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-growwth-primary">
                  Services?
                </span>
              </h2>

              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                An Interim CFO is a senior finance leader appointed for a fixed period to assume 
                full CFO responsibility during times of transition or uncertainty.
              </p>

              <p className="text-gray-600 mb-8 leading-relaxed">
                Interim CFO services typically cover:
              </p>

              <div className="space-y-4">
                {services.map((service, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-4 p-4 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl border border-orange-100 hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-growwth-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{service.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-growwth-primary/20 rounded-3xl blur-2xl" />
              <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-growwth-dark rounded-3xl p-8 lg:p-10 shadow-2xl">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-growwth-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-orange-500/30">
                    <Shield className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Operational & Accountable</h3>
                  <p className="text-gray-400">Execution-Focused Leadership</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <div className="flex items-start gap-3 mb-4">
                    <CheckCircle className="w-6 h-6 text-orange-400 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300 leading-relaxed">
                      Unlike advisory roles, an <span className="text-orange-400 font-semibold">Interim CFO</span> is 
                      operational, accountable, and execution-focused.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="bg-white/5 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-orange-400">Full</div>
                      <div className="text-sm text-gray-400">Ownership</div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-orange-400">Hands-On</div>
                      <div className="text-sm text-gray-400">Leadership</div>
                    </div>
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

export default WhatIsSection;
