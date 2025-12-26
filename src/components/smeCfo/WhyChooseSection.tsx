import React from "react";
import { Building2, MapPin, Cpu, Users, Lightbulb, CheckCircle2 } from "lucide-react";

const reasons = [
  {
    icon: Building2,
    title: "SME Expertise",
    text: "Extensive experience working with SMEs across multiple industries",
  },
  {
    icon: MapPin,
    title: "Local Knowledge",
    text: "Strong understanding of Singapore's financial, tax, and regulatory environment",
  },
  {
    icon: Cpu,
    title: "AI-Enabled",
    text: "AI-enabled dashboards for real-time financial insights",
  },
  {
    icon: Users,
    title: "Integrated Support",
    text: "Integrated support across CFO services, finance teams, bookkeeping, and payroll",
  },
  {
    icon: Lightbulb,
    title: "Execution Focus",
    text: "Practical, execution-focused approach—not just advisory",
  },
];

const WhyChooseSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-8xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose Growwth Partners for SME CFO Services?
            </h2>
          </div>

          {/* Row 1: 3 cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {reasons.slice(0, 3).map((reason, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-slate-50 to-amber-50/50 rounded-2xl shadow p-8 hover:shadow-xl transition-all duration-500 border border-slate-100"
              >
                <div className="absolute top-4 right-4">
                  <CheckCircle2 className="w-6 h-6 text-amber-500" />
                </div>

                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <reason.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {reason.title}
                </h3>
                <p className="text-slate-600">{reason.text}</p>
              </div>
            ))}
          </div>

          {/* Row 2: 2 cards centered */}
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            {reasons.slice(3).map((reason, index) => (
              <div
                key={index + 3}
                className="w-full max-w-md group relative bg-gradient-to-br from-slate-50 to-amber-50/50 rounded-2xl p-8 shadow hover:shadow-xl transition-all duration-500 border border-slate-100"
              >
                <div className="absolute top-4 right-4">
                  <CheckCircle2 className="w-6 h-6 text-amber-500" />
                </div>

                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <reason.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {reason.title}
                </h3>
                <p className="text-slate-600">{reason.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-block bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-xl">
              <p className="text-lg font-semibold">
                We help SMEs move from reactive finance to disciplined financial control.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
