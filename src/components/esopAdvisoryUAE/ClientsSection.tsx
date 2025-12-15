import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { LazyIframe } from "@/components/ui/lazy-iframe";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

 const testimonialVideos = [
    {
      id: "uylxy3pjgl",
      title: "Customer Testimonial 1",
      name: "Ellie Curran",
      role: "Ex Co-Founder & CEO, CoLab",
    },
    {
      id: "7lotud5v4w",
      title: "Customer Testimonial 2",
      name: "Migara Tennakoon",
      role: "Founder & CEO, Peace Lily",
    },
    {
      id: "70p2vilm80",
      title: "Customer Testimonial 3",
      name: "Seçkin Çağlın",
      role: "Co-Founder & Co-CEO Cenoa",
    },
    {
      id: "kos5z2qvc2",
      title: "Customer Testimonial 4",
      name: "Neha Jain",
      role: "FP&A Manager, Tigerhall",
    },
    {
      id: "u5hhsmcpqb",
      title: "Customer Testimonial 5",
      name: "Marcos Bulacio",
      role: "Founder & CEO, Pangea | Regenesis Labs",
    },
  ];

const ClientsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);


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

       <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="relative"
          >
            <CarouselContent>
              {testimonialVideos.map((video) => (
                <CarouselItem key={video.id} className="md:basis-full">
                  <div className=" rounded-2xl p-8 shadow-lg">
                    <div className="flex flex-col items-center mb-4">
                      <div className="flex gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 fill-orange-500 text-orange-500"
                          />
                        ))}
                      </div>
                      <h4 className="text-xl font-semibold mb-1">
                        {video.name}
                      </h4>
                      <p className="text-gray-600 mb-4">{video.role}</p>
                    </div>
                    <div className="aspect-video w-[85%] mx-auto overflow-hidden rounded-lg">
                      <LazyIframe
                        src={`https://fast.wistia.net/embed/iframe/${video.id}`}
                        title={video.title}
                        autoplay={true}
                        muted={true}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 border-orange-200 hover:bg-teal-50" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 border-orange-200 hover:bg-teal-50" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;
