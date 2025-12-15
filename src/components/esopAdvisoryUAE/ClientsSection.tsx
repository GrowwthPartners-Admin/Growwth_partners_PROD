import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    quote: "Growwth Partners made our ESOP implementation seamless. Their understanding of UAE regulations and free zone requirements was invaluable.",
    author: "Mohammed Al-Hassan",
    role: "CEO, Tech Startup Dubai",
    company: "Dubai, UAE"
  },
  {
    quote: "The team's expertise in designing employee stock plans helped us attract top talent in a competitive market. Highly recommended.",
    author: "Sarah Chen",
    role: "CFO, FinTech Scale-up",
    company: "DIFC, UAE"
  },
  {
    quote: "Professional, thorough, and always available. Growwth Partners transformed our equity compensation strategy completely.",
    author: "Rajesh Patel",
    role: "Founder, E-commerce Platform",
    company: "Abu Dhabi, UAE"
  },
  {
    quote: "Their end-to-end ESOP advisory covered everything from design to ongoing administration. A true partner for growth.",
    author: "Emma Williams",
    role: "HR Director, SaaS Company",
    company: "ADGM, UAE"
  },
];

const ClientsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50/30 to-yellow-50/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Happy{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
              Clients
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted by startups and scale-ups across the UAE, GCC, Singapore, and India. Founders and finance leaders choose Growwth Partners for clear structures, smooth implementation, and ongoing support.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-amber-500/10 border border-amber-100">
            <Quote className="absolute top-6 left-6 w-12 h-12 text-amber-200" />
            
            <div className="relative z-10">
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 italic">
                "{testimonials[currentIndex].quote}"
              </p>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-gray-900 text-lg">
                    {testimonials[currentIndex].author}
                  </p>
                  <p className="text-amber-600">
                    {testimonials[currentIndex].role}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {testimonials[currentIndex].company}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={goToPrevious}
                    className="rounded-full border-amber-200 hover:bg-amber-50"
                  >
                    <ChevronLeft className="w-5 h-5 text-amber-600" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={goToNext}
                    className="rounded-full border-amber-200 hover:bg-amber-50"
                  >
                    <ChevronRight className="w-5 h-5 text-amber-600" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-amber-500 w-6"
                      : "bg-amber-200 hover:bg-amber-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
