import { motion } from "framer-motion";
import { Globe, MapPin, UserCheck, Cpu, HandshakeIcon, Settings } from "lucide-react";

const reasons = [
  {
    icon: Globe,
    title: "Global Experience",
    description: "Extensive experience delivering virtual finance teams globally"
  },
  {
    icon: MapPin,
    title: "Singapore Expertise",
    description: "Strong understanding of Singapore's accounting, tax, and compliance environment"
  },
  {
    icon: UserCheck,
    title: "CFO-Led Governance",
    description: "Strategic oversight and leadership-level accountability"
  },
  {
    icon: Cpu,
    title: "AI-Enabled Tools",
    description: "Automation and insights powered by modern technology"
  },
  {
    icon: HandshakeIcon,
    title: "One Partner Solution",
    description: "Execution, reporting, and strategic alignment under one roof"
  },
  {
    icon: Settings,
    title: "Systems Over Dependencies",
    description: "We build systems that scale with your business"
  }
];

const WhyChooseSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Why Growwth Partners
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Why Choose Us?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We focus on building systems, not dependencies—so finance scales with your business 
              and leadership can focus on growth.
            </p>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl" />
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop"
                alt="Professional finance team"
                className="relative rounded-2xl shadow-xl w-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group p-5 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <reason.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{reason.title}</h3>
                <p className="text-muted-foreground text-sm">{reason.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
