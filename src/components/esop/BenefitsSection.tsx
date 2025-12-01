import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Globe, Shield, MessageSquare, TrendingUp } from "lucide-react";

export const BenefitsSection = () => {
  const benefits = [
    {
      icon: Target,
      title: "Tailored Solutions",
      description: "Customised strategies to suit your unique business needs and goals, whether you are a startup or a regional SME.",
      color: "orange"
    },
    {
      icon: Globe,
      title: "Global Expertise, Local Insight",
      description: "Navigate international complexities with local precision for seamless ESOP implementation Singapore.",
      color: "blue"
    },
    {
      icon: Shield,
      title: "Comprehensive Compliance",
      description: "Hassle-free management of global payroll, tax, social security, and labour law compliance, aligned with Singapore regulations.",
      color: "green"
    },
    {
      icon: MessageSquare,
      title: "Effective Communication Strategies",
      description: "Clear and engaging communication plans ensure employees fully understand the value of their participation.",
      color: "purple"
    },
    {
      icon: TrendingUp,
      title: "Strategic Objective Alignment",
      description: "Beyond implementation, our services align ESOPs with broader business objectives to support long-term performance.",
      color: "indigo"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            What Sets Our ESOP Advisory Services Singapore Apart?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-2 hover:border-primary/50">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <benefit.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
