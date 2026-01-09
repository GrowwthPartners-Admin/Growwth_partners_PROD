import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, TrendingUp, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-growwth-dark py-16">
      {/* Gradient Orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-orange-500/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-growwth-primary/20 rounded-full blur-[100px] translate-x-1/4 translate-y-1/4" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-amber-500/10 rounded-full blur-[80px]" />
      </div>

      {/* Subtle Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-8xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-orange-500/10 border border-orange-400/30 rounded-full mb-8 backdrop-blur-sm">
            <Zap className="w-4 h-4 text-orange-400" />
            <span className="text-orange-300 text-sm font-semibold tracking-wide">
              Crisis-Ready CFO Leadership
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-12 leading-[1.1]">
            <span className="text-gray-900">Interim CFO Services in</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-orange-600">
              Singapore
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-700 mb-16 font-bold max-w-4xl mx-auto leading-relaxed">
            Stabilise Financial Leadership During Transitions, Turnarounds, and
            High-Risk Phases
          </p>

          {/* Description */}
          <p className="text-lg text-gray-500 mb-16 max-w-3xl mx-auto leading-relaxed">
            Immediate, hands-on CFO leadership to stabilize operations and manage transitions until you're ready for a permanent solution
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              size="lg"
              onClick={() =>
                window.open(
                  "https://calendly.com/jd-growwthpartners/15min?month=2025-11",
                  "_blank"
                )
              }
              className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-10 py-7 text-lg font-semibold rounded-full shadow-2xl shadow-orange-500/30 transition-all duration-300 hover:scale-105 hover:shadow-orange-500/40 group"
            >
              Discuss Interim CFO Support
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Clock, value: "24-48hrs", label: "Deployment Time" },
              { icon: Shield, value: "100%", label: "Continuity Assured" },
              {
                icon: TrendingUp,
                value: "5+ Days",
                label: "Reporting Restored",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-orange-400/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:from-orange-500/30 group-hover:to-amber-500/30 transition-all">
                  <stat.icon className="w-6 h-6 text-orange-400" />
                </div>
                <div className="text-3xl font-bold text-orange-300 mb-1">
                  {stat.value}
                </div>
                <div className="text-orange-300 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};

export default HeroSection;
