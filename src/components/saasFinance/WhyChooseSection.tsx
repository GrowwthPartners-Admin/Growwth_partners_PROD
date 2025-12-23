import { motion } from "framer-motion";
import { 
  Award, 
  Globe, 
  Users, 
  Cpu, 
  Layers,
  CheckCircle2
} from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Deep Experience",
    description: "Extensive experience supporting SaaS and subscription businesses"
  },
  {
    icon: Globe,
    title: "Singapore Expertise",
    description: "Strong understanding of Singapore's startup and SaaS ecosystem"
  },
  {
    icon: Users,
    title: "CFO-Led Approach",
    description: "Focus on metrics and valuation, not just compliance"
  },
  {
    icon: Cpu,
    title: "AI-Enabled Dashboards",
    description: "Real-time SaaS insights powered by intelligent automation"
  },
  {
    icon: Layers,
    title: "Integrated Services",
    description: "CFO, finance teams, bookkeeping, and payroll under one roof"
  }
];

const WhyChooseSection = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">
              Why Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Why Choose Growwth Partners for SaaS Finance?
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              We help SaaS founders move from growth stories to credible financial narratives.
            </p>

            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-white rounded-xl shadow hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <reason.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">{reason.title}</h3>
                    <p className="text-slate-600 text-sm">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="SaaS Analytics Dashboard"
                className="w-full rounded-3xl shadow-xl"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
              
              {/* Stats overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span className="font-semibold text-slate-900">Trusted by SaaS Founders</span>
                  </div>
                  <p className="text-sm text-slate-600">
                    Helping companies achieve sustainable, capital-efficient growth
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
