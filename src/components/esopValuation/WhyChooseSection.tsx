import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Shield, Lightbulb, Briefcase, MessageCircle, ArrowRight } from "lucide-react";


const reasons = [
  {
    icon: Award,
    title: "200+ Successful Valuations Completed",
    description: "Deep experience across startups, SMEs, and high-growth companies.",
    color: "brand-orange",
  },
  {
    icon: Shield,
    title: "Independent and Compliant FMV Reports",
    description: "Built to meet investor expectations and Singapore standards.",
    color: "brand-green",
  },
  {
    icon: Lightbulb,
    title: "Strong Understanding of Startup Finance",
    description:
      "Hands-on expertise across equity valuation services Singapore, fundraising, and ESOP structuring.",
    color: "brand-blue",
  },
  {
    icon: Briefcase,
    title: "Integrated CFO and Financial Planning Support",
    description:
      "From ESOP valuation to cap table planning and fundraising strategy, we support your full finance stack.",
    color: "brand-orange",
  },
  {
    icon: MessageCircle,
    title: "We don't just calculate valuation.",
    description: "We explain it in a way founders can actually use.",
    color: "brand-green",
  },
];

const cardGradientByColor: Record<string, string> = {
  "brand-orange": "bg-gradient-to-b from-brand-orange/5 to-brand-orange/0",
  "brand-green": "bg-gradient-to-b from-brand-green/5 to-brand-green/0",
  "brand-blue": "bg-gradient-to-b from-brand-blue/5 to-brand-blue/0",
};

const iconBgByColor: Record<string, string> = {
  "brand-orange": "bg-brand-orange/10 group-hover:bg-brand-orange/20",
  "brand-green": "bg-brand-green/10 group-hover:bg-brand-green/20",
  "brand-blue": "bg-brand-blue/10 group-hover:bg-brand-blue/20",
};

const iconTextByColor: Record<string, string> = {
  "brand-orange": "text-brand-orange",
  "brand-green": "text-brand-green",
  "brand-blue": "text-brand-blue",
};

const ctaGradient = "bg-brand-orange hover:bg-brand-orange/90";

const ReasonCard = ({
  reason,
  index,
}: {
  reason: (typeof reasons)[number];
  index: number;
}) => {
  const Icon = reason.icon;
  const cardGradient = cardGradientByColor[reason.color] ?? "";
  const iconBg = iconBgByColor[reason.color] ?? "";
  const iconText = iconTextByColor[reason.color] ?? "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <Card
        className={`
          h-full border-none shadow-lg hover:shadow-xl 
          transition-all duration-300 bg-white ${cardGradient}
          flex flex-col
        `}
      >
        <CardContent className="p-6 flex flex-col flex-1">
          <div
            className={`
              w-14 h-14 rounded-full flex items-center justify-center mb-4 
              transition-colors ${iconBg}
            `}
          >
            <Icon className={`h-7 w-7 ${iconText}`} />
          </div>
          <h3 className="text-xl font-bold mb-3 text-foreground">
            {reason.title}
          </h3>
          <p className="text-gray-700 leading-relaxed flex-1">
            {reason.description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};


export const WhyChooseSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Why Choose <span className="text-brand-orange">Growwth Partners?</span>
          </h2>
        </motion.div>

        {/* First row: 3 cards in grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {reasons.slice(0, 3).map((reason, index) => (
            <div key={reason.title} className="w-full max-w-md mx-auto">
              <ReasonCard reason={reason} index={index} />
            </div>
          ))}
        </div>

        {/* Second row: 2 cards centered */}
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-center gap-8 mb-12">
          {reasons.slice(3).map((reason, index) => (
            <div key={reason.title} className="w-full max-w-md mx-auto">
              <ReasonCard reason={reason} index={index + 3} />
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Button
            onClick={() => window.open('https://calendly.com/jd-growwthpartners/15min?month=2025-11', '_blank')}
            size="lg"
            className={`${ctaGradient} text-white font-semibold text-lg px-8 rounded-full`}
          >
            Schedule Free 1-1 Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
