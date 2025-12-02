import { motion } from "framer-motion";
import { Shield, Users, FileCheck, Lock } from "lucide-react";

export const SecuritySection = () => {
  const features = [
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "Your financial data is protected with industry-leading security standards"
    },
    {
      icon: Users,
      title: "Role-Based Access",
      description: "Teams see only what they need with granular permission controls"
    },
    {
      icon: FileCheck,
      title: "Audit-Friendly Logs",
      description: "Complete audit trails for all changes in assumptions and models"
    },
    {
      icon: Lock,
      title: "Compliance Ready",
      description: "Built with the needs of finance and compliance teams in mind"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Security and{" "}
            <span className="text-brand-blue">Compliance</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 bg-card rounded-xl border border-border"
            >
              <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-6 h-6 text-brand-blue" />
              </div>
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
