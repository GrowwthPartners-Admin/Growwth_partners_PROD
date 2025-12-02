import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Rocket, Building2, Briefcase, Calendar } from "lucide-react";

export const BuiltForSection = () => {
  const audiences = [
    {
      icon: Rocket,
      title: "Singapore Startups And Scale-ups",
      benefits: [
        "Quickly show investors your runway, burn, and growth plan",
        "Run scenarios before fundraises, expansions, or new product launches",
        "Make every board meeting data backed"
      ],
      color: "brand-green"
    },
    {
      icon: Building2,
      title: "SMEs And Family Businesses In Singapore",
      benefits: [
        "Understand how seasonal sales and costs affect cash",
        "Plan hiring and capital expenditure with confidence",
        "Avoid surprises with clear forward views"
      ],
      color: "brand-blue"
    },
    {
      icon: Briefcase,
      title: "CFOs And Finance Leaders",
      benefits: [
        "Stop rebuilding models manually for every meeting",
        "Use AI forecasting to standardise planning",
        "Align leadership around one set of trusted numbers"
      ],
      color: "brand-orange"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-brand-blue/5 via-background to-brand-green/5">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Built For Finance Teams,{" "}
            <span className="text-brand-blue">Founders, And CFOs</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 lg:p-8 shadow-lg border border-border hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className={`w-14 h-14 bg-${audience.color}/10 rounded-xl flex items-center justify-center mb-4`}>
                <audience.icon className={`w-7 h-7 text-${audience.color}`} />
              </div>
              <h3 className="text-lg font-semibold mb-4">{audience.title}</h3>
              <ul className="space-y-3">
                {audience.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <div className={`w-1.5 h-1.5 rounded-full bg-${audience.color} mt-2 shrink-0`} />
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a href="https://calendly.com/jd-growwthpartners/15min?month=2025-11" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-brand-blue hover:bg-brand-blue/90 text-white">
              <Calendar className="w-4 h-4 mr-2" />
              Book a Call With a RyzUp Expert
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
