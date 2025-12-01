import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Globe, Shield, MessageSquare, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Target,
    title: "Tailored Solutions",
    description:
      "Customised strategies to suit your unique business needs and goals, whether you are a startup or a regional SME.",
  },
  {
    icon: Globe,
    title: "Global Expertise, Local Insight",
    description:
      "Navigate international complexities with local precision for seamless ESOP implementation Singapore.",
  },
  {
    icon: Shield,
    title: "Comprehensive Compliance",
    description:
      "Hassle-free management of global payroll, tax, social security, and labour law compliance, aligned with Singapore regulations.",
  },
  {
    icon: MessageSquare,
    title: "Effective Communication Strategies",
    description:
      "Clear and engaging communication plans ensure employees fully understand the value of their participation.",
  },
  {
    icon: TrendingUp,
    title: "Strategic Objective Alignment",
    description:
      "Beyond implementation, our services align ESOPs with broader business objectives to support long-term performance.",
  },
];

const BenefitCard = ({ benefit, index }) => {
  const Icon = benefit.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <Card
        className="
          h-full bg-gradient-to-br from-orange-50 to-blue-50 
          hover:shadow-xl transition-shadow duration-300 
          border hover:border-brand-orange/40 
          rounded-2xl flex flex-col
        "
      >
        <CardContent className="p-8 flex flex-col flex-1">
          {/* Icon */}
          <div className="mb-6">
            <div className="
              w-16 h-16 rounded-full 
              bg-gradient-to-br from-brand-orange/20 to-brand-blue/20 
              flex items-center justify-center 
              group-hover:scale-110 transition-transform duration-300
            ">
              <Icon className="h-8 w-8 text-brand-orange" />
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold mb-4 text-foreground">
            {benefit.title}
          </h3>

          {/* Description (flex-1 ensures equal height) */}
          <p className="text-gray-700 leading-relaxed flex-1">
            {benefit.description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export const BenefitsSection = () => {
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

        {/* First row: 3 cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {benefits.slice(0, 3).map((benefit, index) => (
            <div key={benefit.title} className="w-full max-w-md mx-auto">
              <BenefitCard benefit={benefit} index={index} />
            </div>
          ))}
        </div>

        {/* Second row: 2 centered cards */}
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-center gap-8">
          {benefits.slice(3).map((benefit, index) => (
            <div key={benefit.title} className="w-full max-w-md mx-auto">
              <BenefitCard benefit={benefit} index={index + 3} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
