import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Scale, UserCheck } from "lucide-react";

export const PremiumAddOnsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Premium Add-On Services
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-2 border-primary/20">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Scale className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Legal Advisory Services</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Expert legal consultation to ensure all ESOP-related agreements and documentation comply with current Singapore regulations and industry best practices.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-2 border-primary/20">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <UserCheck className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Dedicated Relationship Manager</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Personalised support with a dedicated professional serving as a direct point of contact for seamless communication and fast issue resolution.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
