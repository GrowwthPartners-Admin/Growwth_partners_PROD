import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: 'Sarah Mitchell',
      company: 'TechStart Australia',
      role: 'CEO',
      quote: 'Growwth Partners transformed our financial operations. Their Virtual CFO service gave us the strategic insights we desperately needed without the full-time cost.',
      rating: 5
    },
    {
      name: 'James Chen',
      company: 'Melbourne E-commerce Co.',
      role: 'Founder',
      quote: 'The fractional CFO support has been a game-changer. Cash flow optimization and strategic planning helped us scale 3x in just 18 months.',
      rating: 5
    },
    {
      name: 'Emma Thompson',
      company: 'Sydney Wellness Group',
      role: 'Managing Director',
      quote: 'Professional, responsive, and results-driven. Their Virtual CFO team feels like part of our leadership. Highly recommend to any Australian business.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Success stories from our happy <span className="text-brand-orange">Australian clients</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Join over <strong>200 startups and established businesses</strong> around the world who trust Growwth Partners with their financial success. With our comprehensive, expert-led Virtual CFO and fractional CFO Australia services, we help businesses grow smarter, faster, and more profitably.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-white border-2 border-gray-100 hover:shadow-xl transition-all duration-300 hover:border-brand-orange/30">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <Quote className="w-10 h-10 text-brand-orange/20" />
                  </div>
                  
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-brand-orange text-brand-orange" />
                    ))}
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-6 italic">
                    "{testimonial.quote}"
                  </p>

                  <div className="border-t pt-6">
                    <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
                    <p className="text-gray-600">{testimonial.role}</p>
                    <p className="text-brand-orange font-semibold">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <h3 className="text-3xl font-bold text-gray-900">
            Get in Touch Today!
          </h3>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
