import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { Plus, Minus, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const TestimonialsSection: React.FC = () => {
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
            Success stories from our happy{" "}
            <span className="text-brand-orange">Australian clients</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Join over <strong>200 startups and established businesses</strong>{" "}
            around the world who trust Growwth Partners with their financial
            success. With our comprehensive, expert-led Virtual CFO and
            fractional CFO Australia services, we help businesses grow smarter,
            faster, and more profitably.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-brand-orange/10 via-blue-50/50 to-orange-50/30 border-2 border-brand-orange/30 shadow-xl">
            <CardContent className="p-10 text-center space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                Ready to Get Started?
              </h3>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Book your free consultation or speak with a part-time CFO today
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  className="bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 group"
                >
                  <a
                    href="https://calendly.com/jd-growwthpartners/15min?month=2025-11"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book Free 30 Mins Call
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
