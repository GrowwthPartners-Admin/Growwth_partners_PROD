import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ContactModal } from "@/components/ui/contact-modal";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { LazyIframe } from "@/components/ui/lazy-iframe";

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
      name: "Sejkin Cavan",
      role: "Founder & CEO, Seneva",
    },
    {
      id: "kos5z2qvc2",
      title: "Customer Testimonial 4",
      name: "Sheena Chein",
      role: "Founder & CEO, Tiger Hall",
    },
    {
      id: "u5hhsmcpqb",
      title: "Customer Testimonial 5",
      name: "Marcos",
      role: "Founder & CEO, Pengea",
    },
];

export const TestimonialsSection: React.FC = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our <span className="text-[#FFB343]">Clients Say</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="relative"
          >
            <p className="text-center text-gray-600 max-w-2xl mx-auto font-semibold">
              Finance made simple with our services. Not trusting our words?
              Hear what our clients are saying about us and our services.
            </p>
            <CarouselContent>
              {testimonialVideos.map((video) => (
                <CarouselItem key={video.id} className="md:basis-full">
                  <div className="bg-white rounded-lg p-8 shadow-lg">
                    <div className="flex flex-col items-center mb-4">
                      <div className="flex gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 fill-brand-orange text-brand-orange"
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
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12" />
          </Carousel>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="bg-gradient-to-br from-purple-50/50 via-white to-purple-50/30 border-2 border-purple-100 shadow-lg max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Get CFO-Level Insights Without the Full-Time Cost
              </h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Companies across the UAE trust Growwth Partners when they need a
                strategic finance partner,{" "}
                <span className="font-semibold text-[#FFB343]">
                  fractional CFO support
                </span>
                , or an{" "}
                <span className="font-semibold text-[#FFB343]">
                  outsourced CFO Dubai
                </span>{" "}
                model that scales with their growth.
              </p>
              <Button
                onClick={() => setContactModalOpen(true)}
                className="bg-[#FFB343] hover:bg-[#FFB343]/90 text-white rounded-full px-8 py-6 text-lg font-medium"
              >
                Book a Free Consultation
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
      <ContactModal
        open={contactModalOpen}
        onOpenChange={setContactModalOpen}
      />
    </section>
  );
};

export default TestimonialsSection;
