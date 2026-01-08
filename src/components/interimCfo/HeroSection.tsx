import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-growwth-dark via-slate-900 to-growwth-dark">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-growwth-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-growwth-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 border border-orange-500/30 rounded-full mb-8 backdrop-blur-sm">
            <Shield className="w-4 h-4 text-orange-400" />
            <span className="text-orange-300 text-sm font-medium">Crisis-Ready CFO Leadership</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
            Interim CFO Services in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-growwth-primary to-amber-400">
              Singapore
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-orange-200 font-medium mb-6 max-w-4xl mx-auto">
            Stabilise Financial Leadership During Transitions, Turnarounds, and High-Risk Phases
          </p>

          {/* Description */}
          <p className="text-lg text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Growwth Partners' Interim CFO services in Singapore provide immediate, hands-on CFO leadership 
            to stabilise finance operations, restore control, and guide the business safely through 
            transition—until a permanent solution is in place.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link to="/contact">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-orange-500 to-growwth-primary hover:from-orange-600 hover:to-growwth-primary/90 text-white px-8 py-6 text-lg rounded-full shadow-2xl shadow-orange-500/25 transition-all duration-300 hover:scale-105 group"
              >
                Discuss Interim CFO Support
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Clock, value: "24-48hrs", label: "Deployment Time" },
              { icon: Shield, value: "100%", label: "Continuity Assured" },
              { icon: TrendingUp, value: "5+ Days", label: "Reporting Restored" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <stat.icon className="w-8 h-8 text-orange-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};

export default HeroSection;
