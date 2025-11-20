import { motion } from "framer-motion";
import { Star, Users, Award } from "lucide-react";

const features = [
  {
    icon: Star,
    title: "5-STAR RATED SERVICES",
    description: "Experience working with more than 500 high-growth companies across Singapore and Southeast Asia that require reliable company valuation services."
  },
  {
    icon: Users,
    title: "ALL ROUND GROWTH",
    description: "Worked with early-stage startups, SMEs, and scaling organisations seeking fundraising valuation support and clarity in their growth roadmap."
  },
  {
    icon: Award,
    title: "STRONG LEADERSHIP",
    description: "Founded and led by an Ex-Rocket Internet APAC CFO with hands-on experience across business valuation Singapore, DCF valuation Singapore, and strategic finance."
  }
];

export const WhyChooseSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Why Choose Us?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-background rounded-xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground text-center leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/20"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4 text-foreground">See How We've Helped Businesses Grow</h3>
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <p className="text-muted-foreground">30 second demo video</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Showcasing how our valuation services have positively impacted businesses
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
