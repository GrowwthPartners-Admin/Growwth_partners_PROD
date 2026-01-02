import { motion } from "framer-motion";
import { Rocket, Globe, Building2, TrendingUp, Eye, ArrowRight } from "lucide-react";

const audiences = [
  {
    icon: Rocket,
    title: "Startups & SMEs",
    description: "Operating with lean teams needing full finance capability"
  },
  {
    icon: Globe,
    title: "Expanding Businesses",
    description: "Companies entering Singapore without local finance hires"
  },
  {
    icon: Building2,
    title: "Remote Operations",
    description: "Businesses with distributed or remote team structures"
  },
  {
    icon: TrendingUp,
    title: "Scaling Companies",
    description: "Organisations seeking cost-efficient finance scalability"
  },
  {
    icon: Eye,
    title: "Visibility-Focused Founders",
    description: "Leaders who want real-time financial visibility without operational burden"
  }
];

const WhoShouldUseSection = () => {
  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Is This Right For You?
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Who Should Use Virtual Finance Team Services?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              If your business relies on multiple tools, spreadsheets, or vendors to manage finance, 
              a Virtual Finance Team simplifies and centralises the entire function.
            </p>

            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-6 border border-primary/20">
              <p className="text-foreground font-medium flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>
                  Consolidate fragmented finance operations into one integrated, cloud-based team 
                  that delivers consistency and real-time visibility.
                </span>
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {audiences.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start gap-4 p-5 bg-background rounded-xl border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoShouldUseSection;
