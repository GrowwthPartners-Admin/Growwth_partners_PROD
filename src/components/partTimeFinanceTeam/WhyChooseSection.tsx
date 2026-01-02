import { motion } from "framer-motion";
import { Award, MapPin, Users, Cpu, Target, CheckCircle } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Experienced Professionals",
    description: "Finance professionals with expertise across multiple industries"
  },
  {
    icon: MapPin,
    title: "Singapore Expertise",
    description: "Strong understanding of Singapore's accounting and compliance landscape"
  },
  {
    icon: Users,
    title: "CFO Integration",
    description: "Seamless integration with CFO services for strategic oversight"
  },
  {
    icon: Cpu,
    title: "AI-Enabled Tools",
    description: "Faster processing and improved accuracy through technology"
  },
  {
    icon: Target,
    title: "Process-Driven Execution",
    description: "Clear accountability and systematic approach to finance"
  }
];

const WhyChooseSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brand-orange font-semibold text-sm uppercase tracking-wider">Why Growwth Partners</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
              Why Choose Growwth Partners?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We focus on getting the fundamentals right, so leadership can focus on growth.
            </p>

            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-orange/10 to-orange-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:from-brand-orange/20 group-hover:to-orange-200 transition-all">
                    <reason.icon className="w-6 h-6 text-brand-orange" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-brand-orange transition-colors">
                      {reason.title}
                    </h3>
                    <p className="text-gray-600">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/20 to-blue-500/20 rounded-3xl blur-2xl" />
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Professional finance team meeting"
                className="relative rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]"
              />
              
              {/* Overlay card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Trusted by Growing Businesses</p>
                    <p className="text-sm text-gray-600">In Singapore and across the region</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
