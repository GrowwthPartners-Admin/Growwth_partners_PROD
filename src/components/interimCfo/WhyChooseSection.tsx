import { 
  RefreshCw, Globe, Users, Layers, Target,
  CheckCircle, ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const WhyChooseSection = () => {
  const reasons = [
    {
      icon: RefreshCw,
      title: "Transition Expertise",
      description: "CFOs with experience managing transitions, turnarounds, and high-growth phases"
    },
    {
      icon: Globe,
      title: "Singapore Focus",
      description: "Strong understanding of Singapore's financial, tax, and regulatory environment"
    },
    {
      icon: Users,
      title: "Stakeholder Management",
      description: "Proven ability to work with boards, investors, and auditors"
    },
    {
      icon: Layers,
      title: "Integrated Support",
      description: "Integrated support across CFO services, finance teams, bookkeeping, and payroll"
    },
    {
      icon: Target,
      title: "Execution-Focused",
      description: "Execution-focused approach—not just advisory"
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-growwth-dark via-slate-900 to-growwth-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-growwth-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 border border-orange-500/30 rounded-full mb-6">
              <Target className="w-4 h-4 text-orange-400" />
              <span className="text-orange-300 text-sm font-semibold">The Growwth Advantage</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Why Choose{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-growwth-primary">
                Growwth Partners?
              </span>
            </h2>
          </div>

          {/* Reasons Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {reasons.map((reason, index) => (
              <div 
                key={index}
                className={`group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 ${
                  index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-growwth-primary rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <reason.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
                <p className="text-gray-200 leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link to="/contact">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-growwth-primary hover:from-orange-600 hover:to-growwth-primary/90 text-white px-8 py-6 text-lg rounded-full shadow-2xl shadow-orange-500/25 transition-all duration-300 hover:scale-105 group"
              >
                Get Interim CFO Support
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
