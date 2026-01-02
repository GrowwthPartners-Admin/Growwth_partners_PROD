import { motion } from "framer-motion";
import { Users, Calculator, Wallet, LayoutDashboard, CheckCircle2 } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Finance Managers & Analysts",
    description: "Experienced professionals managing your finance function"
  },
  {
    icon: Calculator,
    title: "Accountants & Bookkeeping",
    description: "Accurate transaction recording and reconciliations"
  },
  {
    icon: Wallet,
    title: "Payroll & Compliance",
    description: "Full payroll processing and regulatory compliance"
  },
  {
    icon: LayoutDashboard,
    title: "Cloud Systems & Dashboards",
    description: "Real-time visibility through modern platforms"
  }
];

const benefits = [
  "Process-driven and continuously engaged",
  "Fully accountable team structure",
  "Consistent and reliable execution",
  "Operates as an extension of your organisation"
];

const WhatIsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Understanding Virtual Finance Teams
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            What Are Virtual Finance Team Services?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Virtual Finance Team services deliver end-to-end finance execution and reporting through a remote, 
            digitally enabled team that operates as an extension of your organisation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Unlike Traditional Outsourcing</h3>
              <p className="text-muted-foreground mb-6">
                Virtual Finance Teams are process-driven, continuously engaged, and fully accountable—ensuring 
                consistency and reliability in every aspect of your finance operations.
              </p>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=600&h=400&fit=crop"
                alt="Cloud-based finance team collaboration"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatIsSection;
