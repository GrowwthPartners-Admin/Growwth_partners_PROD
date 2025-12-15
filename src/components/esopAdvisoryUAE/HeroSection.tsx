import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Award, Users, TrendingUp } from "lucide-react";
import { ContactModal } from "@/components/ui/contact-modal";

const HeroSection = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background gradient - UAE amber/orange theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50/40 to-yellow-50/30" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-amber-200/30 to-orange-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-gradient-to-tr from-yellow-200/30 to-amber-200/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-amber-200/50 rounded-full px-4 py-2 mb-6">
            <Award className="w-4 h-4 text-amber-600" />
            <span className="text-sm font-medium text-amber-700">ESOP Advisory Services</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Crafting, executing, and managing{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
              Employee Stock Incentive Plans
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Retain talent, motivate teams, and build an ownership culture with expert ESOP advisory tailored for UAE businesses. Growwth Partners supports companies in the UAE and globally to optimise compensation structures, implement ESOPs with confidence, and navigate compliance with clarity.
          </p>

          <p className="text-base text-gray-500 mb-10 max-w-2xl mx-auto">
            Services cover both fast-growing startups and established companies seeking end-to-end ESOP advisory in the UAE.
          </p>

          {/* CTA */}
          <Button
            size="lg"
            onClick={() => setContactModalOpen(true)}
            className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-amber-500/25 hover:shadow-xl hover:shadow-amber-500/30 transition-all duration-300"
          >
            Enquire Now
          </Button>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {[
              { icon: Users, label: "Companies Served", value: "500+" },
              { icon: Award, label: "Years Experience", value: "15+" },
              { icon: TrendingUp, label: "Plans Implemented", value: "1000+" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-amber-100/50 shadow-sm"
              >
                <stat.icon className="w-8 h-8 text-amber-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ContactModal 
        open={contactModalOpen} 
        onOpenChange={setContactModalOpen}
      />
    </section>
  );
};

export default HeroSection;
