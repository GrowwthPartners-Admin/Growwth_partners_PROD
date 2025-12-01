import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, BarChart3, Building2, PieChart, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Building2,
    title: "Business Valuation",
    link: "/valuation-services-singapore",
  },
  {
    icon: BarChart3,
    title: "Financial Modelling",
    link: "/financial-modeling-singapore",
  },
  {
    icon: TrendingUp,
    title: "M&A Valuation",
    link: "/ma-advisory-singapore",
  },
  {
    icon: PieChart,
    title: "Cap Table Management",
    link: "/cap-table-management-singapore",
  },
  {
    icon: Briefcase,
    title: "Virtual CFO Services",
    link: "/virtual-cfo-services-singapore",
  },
];

const ServiceCard = ({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) => {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <Link to={service.link} className="block h-full">
        <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-white to-gray-50 group overflow-hidden flex">
          <CardContent className="p-0 flex-1">
            <div className="flex items-center gap-4 p-5 h-full">
              <div className="bg-gradient-to-br from-brand-orange to-brand-orange/70 w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                <Icon className="h-7 w-7 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-foreground group-hover:text-brand-orange transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground">Learn more →</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
};

export const ExploreServicesSection = () => {
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
            Explore More <span className="text-brand-blue">Services</span>
          </h2>
        </motion.div>

        {/* First row: 3 cards in grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {services.slice(0, 3).map((service, index) => (
            <div key={service.title} className="w-full max-w-md mx-auto">
              <ServiceCard service={service} index={index} />
            </div>
          ))}
        </div>

        {/* Second row: 2 cards centered */}
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-center gap-6">
          {services.slice(3).map((service, index) => (
            <div key={service.title} className="w-full max-w-md mx-auto">
              <ServiceCard service={service} index={index + 3} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
