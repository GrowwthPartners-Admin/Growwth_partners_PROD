import { motion } from "framer-motion";
import { 
  Award, 
  Globe, 
  Rocket, 
  Cpu, 
  Link2,
  ArrowUpRight
} from "lucide-react";

const WhyChooseSection = () => {
  const benefits = [
    {
      icon: Award,
      title: "Seasoned Finance Professionals",
      description: "Access to experienced analysts and controllers across multiple industries"
    },
    {
      icon: Globe,
      title: "Local Expertise",
      description: "Deep understanding of Singapore accounting and reporting standards"
    },
    {
      icon: Rocket,
      title: "Growth-Stage Experience",
      description: "Proven track record supporting businesses in their scaling journey"
    },
    {
      icon: Cpu,
      title: "AI-Enabled Tools",
      description: "Modern dashboards and finance automation tools for better insights"
    },
    {
      icon: Link2,
      title: "Seamless Integration",
      description: "Works alongside your CFO and execution teams without friction"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-slate-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">
              <Award className="w-4 h-4" />
              Why Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Why Choose Growwth Partners?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-transparent hover:border-orange-200 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/10 to-amber-500/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
                
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <benefit.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2 flex items-center gap-2">
                    {benefit.title}
                    <ArrowUpRight className="w-4 h-4 text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-slate-600">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 text-center"
          >
            <p className="text-lg md:text-xl text-slate-300">
              We help businesses move from <span className="text-slate-400">basic reporting</span> to{" "}
              <span className="text-orange-400 font-semibold">strategic financial insight</span>.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
