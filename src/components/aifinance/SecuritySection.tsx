import { motion } from "framer-motion";
import { Shield, Lock, FileCheck, Eye } from "lucide-react";

export const SecuritySection = () => {
  const securityFeatures = [
    { icon: Shield, text: "Enterprise grade security" },
    { icon: Lock, text: "Role based access and approvals" },
    { icon: FileCheck, text: "Audit ready reporting" },
    { icon: Eye, text: "Controlled data visibility across teams" },
  ];

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Security and Trust</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            RyzUp is built for finance. That means accuracy, security, and reliability are not optional.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-green-100/50 p-6 rounded-xl shadow-lg text-center"
            >
              <div className="w-14 h-14 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-7 h-7 text-brand-green" />
              </div>
              <p className="font-semibold text-gray-900">{feature.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-lg font-semibold text-brand-orange">
            AI in finance only works if finance can trust it. We build for CFO level scrutiny, not for demo screenshots.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
