import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-growwth-dark via-slate-900 to-growwth-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute top-20 left-20 w-32 h-32 bg-growwth-primary/20 rounded-full blur-2xl" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-amber-500/20 rounded-full blur-2xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-growwth-primary rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-orange-500/30">
            <Shield className="w-10 h-10 text-white" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Need Immediate CFO Leadership to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-growwth-primary to-amber-400">
              Navigate Change?
            </span>
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-100 mb-10 max-w-2xl mx-auto">
            Don't let leadership gaps threaten your business stability. 
            Get experienced Interim CFO support deployed within days.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link to="/contact">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-growwth-primary hover:from-orange-600 hover:to-growwth-primary/90 text-white px-8 py-6 text-lg rounded-full shadow-2xl shadow-orange-500/25 transition-all duration-300 hover:scale-105 group"
              >
                Secure Interim CFO Support Today
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-100">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-orange-300" />
              <span className="font-medium">24-48hr Deployment</span>
            </div>
            <div className="hidden sm:block w-1.5 h-1.5 bg-orange-400 rounded-full" />
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-orange-300" />
              <span className="font-medium">Proven Track Record</span>
            </div>
            <div className="hidden sm:block w-1.5 h-1.5 bg-orange-400 rounded-full" />
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-orange-300" />
              <span className="font-medium">Free Consultation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
