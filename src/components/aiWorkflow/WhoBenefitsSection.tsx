import { motion } from "framer-motion";
import { Briefcase, Rocket, Users, Building2 } from "lucide-react";

export const WhoBenefitsSection = () => {
  const beneficiaries = [
    {
      icon: Briefcase,
      title: "CFOs and Finance Leaders",
      description: "Standardise processes, reduce manual work and get decision-ready numbers faster."
    },
    {
      icon: Rocket,
      title: "Startup and Scale-Up Founders",
      description: "Know your burn, runway and performance without building every model yourself."
    },
    {
      icon: Users,
      title: "Finance and Ops Teams",
      description: "Automate low-value tasks like checks, refreshes and basic analysis so you can focus on higher-value projects."
    },
    {
      icon: Building2,
      title: "Accounting and Outsourced Finance Firms",
      description: "Offer clients AI-enhanced workflows, faster reporting and reduced error risk without changing your core tools."
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-brand-blue/5 to-brand-orange/5">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Who Benefits From AI Finance Workflow{" "}
            <span className="text-brand-blue">Integration</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            AI-powered finance automation for every role in Singapore
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {beneficiaries.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-6 text-center border border-border/50 hover:border-brand-orange/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-brand-orange/20 to-brand-blue/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-8 h-8 text-brand-orange" />
              </div>
              <h3 className="text-lg font-bold mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
