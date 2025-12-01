import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Calculator,
  PieChart,
  TrendingUp,
  FileCheck,
  Calendar,
  LineChart,
} from "lucide-react";

export const ServicesIncludeSection = () => {
  const services = [
    {
      icon: Calculator,
      title: "Fair Market Value Calculation",
      description:
        "Precise startup ESOP value calculation using DCF, market comparables, growth metrics, and recognised financial models.",
      color: "brand-blue",
    },
    {
      icon: PieChart,
      title: "Cap Table Impact Analysis",
      description:
        "We review dilution scenarios with in-depth cap table valuation and ESOP pool modelling.",
      color: "brand-green",
    },
    {
      icon: TrendingUp,
      title: "Pre- and Post-Round Valuation",
      description:
        "Full support for seed, Series A, and growth-stage fundraising.",
      color: "brand-orange",
    },
    {
      icon: FileCheck,
      title: "Independent Valuation Report",
      description:
        "Delivered by certified professionals and independent ESOP valuation experts. Investor-ready, founder-friendly, and compliant with Singapore requirements.",
      color: "brand-blue",
    },
    {
      icon: Calendar,
      title: "Annual ESOP Valuation Support",
      description:
        "For companies issuing grants yearly or updating their ESOP plans.",
      color: "brand-green",
    },
    {
      icon: LineChart,
      title: "Equity and ESOP Financial Modeling",
      description:
        "Scenario-based forecasting, sensitivity analysis, and ESOP financial modeling for strategic decisions.",
      color: "brand-orange",
    },
  ];

  const cardGradientByColor: Record<string, string> = {
    "brand-blue": "bg-gradient-to-b from-brand-blue/5 to-brand-blue/0",
    "brand-green": "bg-gradient-to-b from-brand-green/5 to-brand-green/0",
    "brand-orange": "bg-gradient-to-b from-brand-orange/5 to-brand-orange/0",
  };

  const iconBgByColor: Record<string, string> = {
    "brand-blue": "bg-brand-blue/10 group-hover:bg-brand-blue/20",
    "brand-green": "bg-brand-green/10 group-hover:bg-brand-green/20",
    "brand-orange": "bg-brand-orange/10 group-hover:bg-brand-orange/20",
  };

  const iconTextByColor: Record<string, string> = {
    "brand-blue": "text-brand-blue",
    "brand-green": "text-brand-green",
    "brand-orange": "text-brand-orange",
  };

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
            Our ESOP Valuation Services{" "}
            <span className="text-brand-orange">Include</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const cardGradient = cardGradientByColor[service.color] ?? "";
            const iconBg = iconBgByColor[service.color] ?? "";
            const iconText = iconTextByColor[service.color] ?? "";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  className={`h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white ${cardGradient} group`}
                >
                  <CardContent className="p-6">
                    <div
                      className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 transition-colors ${iconBg}`}
                    >
                      <Icon className={`h-7 w-7 ${iconText}`} />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-gray-700">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
