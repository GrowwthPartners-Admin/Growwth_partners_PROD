import { motion } from "framer-motion";
import { 
  FileText, 
  ClipboardList, 
  Users, 
  Settings, 
  Calculator, 
  Shield, 
  Coins 
} from "lucide-react";

export const TailoredServicesSection = () => {
  const services = [
    {
      icon: FileText,
      title: "Designing Employee Stock Incentive Plans"
    },
    {
      icon: ClipboardList,
      title: "Documenting Employee Stock Incentive Plans"
    },
    {
      icon: Users,
      title: "Implementation and employee communication"
    },
    {
      icon: Settings,
      title: "Ongoing administration of Employee Stock Incentive Plans"
    },
    {
      icon: Calculator,
      title: "Accounting treatment and independent valuation support"
    },
    {
      icon: Shield,
      title: "Regulatory and governance compliance"
    },
    {
      icon: Coins,
      title: "Tax advisory for company and participants"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-teal-50/30 to-blue-50/40">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Tailored Services for Your <span className="text-teal-600">Unique Business</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            These services support both early-stage planning and mature plan optimisation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-teal-100/50 hover:border-teal-300"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
