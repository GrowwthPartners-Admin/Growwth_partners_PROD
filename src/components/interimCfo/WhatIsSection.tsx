import { Shield, Users, BarChart3, Wallet, RefreshCw, ArrowRight, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const WhatIsSection = () => {
  const services = [
    { icon: Shield, text: "End-to-end financial leadership", color: "from-orange-500 to-amber-500" },
    { icon: Users, text: "Oversight of finance teams and systems", color: "from-amber-500 to-yellow-500" },
    { icon: BarChart3, text: "Board and investor reporting", color: "from-growwth-primary to-orange-500" },
    { icon: Wallet, text: "Cash flow and risk management", color: "from-orange-600 to-growwth-primary" },
    { icon: RefreshCw, text: "Transition planning for long-term CFO replacement", color: "from-amber-500 to-orange-500" }
  ];

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-white via-orange-50/30 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-100/50 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-100/50 rounded-full blur-[80px] -translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-100 to-amber-100 rounded-full mb-6 border border-orange-200">
              <Briefcase className="w-4 h-4 text-orange-600" />
              <span className="text-orange-700 text-sm font-semibold">AEO-Optimised Definition</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-growwth-dark mb-6 leading-tight">
              What Are Interim CFO{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-growwth-primary">
                Services?
              </span>
            </h2>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              An Interim CFO is a senior finance leader appointed for a fixed period to assume 
              full CFO responsibility during times of transition or uncertainty.
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left - Services List */}
            <div className="lg:col-span-7">
              <p className="text-gray-600 mb-8 font-medium text-lg">
                Interim CFO services typically cover:
              </p>

              <div className="space-y-4">
                {services.map((service, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group flex items-center gap-5 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-orange-200 transition-all duration-300"
                  >
                    <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="text-gray-800 font-semibold text-lg group-hover:text-growwth-dark transition-colors">
                      {service.text}
                    </span>
                    <ArrowRight className="w-5 h-5 text-gray-300 ml-auto group-hover:text-orange-500 group-hover:translate-x-1 transition-all" />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right - Feature Card */}
            <div className="lg:col-span-5">
              <div className="sticky top-8">
                <div className="relative">
                  {/* Glow Effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl blur-lg opacity-20" />
                  
                  {/* Card */}
                  <div className="relative bg-gradient-to-br from-growwth-dark via-slate-800 to-slate-900 rounded-3xl p-8 lg:p-10 overflow-hidden">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-orange-500/10 rounded-full blur-2xl" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-amber-500/10 rounded-full blur-xl" />
                    
                    <div className="relative z-10">
                      {/* Icon */}
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-orange-500/30">
                        <Shield className="w-8 h-8 text-white" />
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                        Operational & Accountable
                      </h3>
                      <p className="text-orange-300 font-medium mb-6">Execution-Focused Leadership</p>
                      
                      {/* Description */}
                      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10 mb-6">
                        <p className="text-gray-300 leading-relaxed">
                          Unlike advisory roles, an <span className="text-orange-400 font-semibold">Interim CFO</span> is 
                          operational, accountable, and execution-focused.
                        </p>
                      </div>
                      
                      {/* Stats Grid */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gradient-to-br from-orange-500/10 to-amber-500/10 rounded-xl p-5 text-center border border-orange-500/20">
                          <div className="text-2xl font-bold text-white mb-1">Full</div>
                          <div className="text-sm text-orange-300/80">Ownership</div>
                        </div>
                        <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-xl p-5 text-center border border-amber-500/20">
                          <div className="text-2xl font-bold text-white mb-1">Hands-On</div>
                          <div className="text-sm text-amber-300/80">Leadership</div>
                        </div>
                      </div>
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