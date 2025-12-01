import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Bell, Users, Calculator, Shield, BarChart } from "lucide-react";

export const TailoredServicesSection = () => {
  const services = [
    { icon: FileText, text: "Designing Employee Stock Incentive Plans" },
    { icon: FileText, text: "Documenting Employee Stock Incentive Plans" },
    { icon: Bell, text: "Implementing and communicating with employees" },
    { icon: Users, text: "Administering Employee Stock Incentive Plans" },
    { icon: Calculator, text: "Handling accounting and valuation" },
    { icon: Shield, text: "Ensuring regulatory compliance" },
    { icon: BarChart, text: "Offering tax advisory services" }
  ];

  return (
    <section className="py-20 bg-secondary/5">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Tailored Services for Your Unique Business
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            These services support both early-stage companies exploring ESOP planning for startups and mature businesses optimising existing plans.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-lg font-medium text-foreground">{service.text}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
