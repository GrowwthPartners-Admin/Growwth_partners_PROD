import { motion } from "framer-motion";
import { 
  Gamepad2, 
  MapPin, 
  Users, 
  Cpu, 
  Layers,
  ArrowRight
} from "lucide-react";

const reasons = [
  {
    icon: Gamepad2,
    title: "Gaming Industry Experience",
    description: "Experience across game studios, esports organisations, and gaming platforms",
  },
  {
    icon: MapPin,
    title: "Singapore Ecosystem",
    description: "Strong understanding of Singapore's gaming and digital economy ecosystem",
  },
  {
    icon: Users,
    title: "CFO-Led Approach",
    description: "CFO-led approach focused on monetisation and sustainability",
  },
  {
    icon: Cpu,
    title: "AI-Enabled Dashboards",
    description: "AI-enabled dashboards for real-time insights and decision-making",
  },
  {
    icon: Layers,
    title: "Integrated Services",
    description: "Integrated services across CFO, finance teams, bookkeeping, and payroll",
  },
];

const WhyChooseSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Why Choose Growwth Partners for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-fuchsia-600">
                Gaming Finance?
              </span>
            </h2>
            
            <p className="text-lg text-slate-600 mb-8">
              We help gaming businesses move from hit-driven success to structured, scalable growth.
            </p>

            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-fuchsia-500 flex items-center justify-center flex-shrink-0">
                    <reason.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-slate-600 text-sm">
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-purple-600 to-fuchsia-600 rounded-3xl p-8 lg:p-10">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6">
                <h3 className="text-2xl font-bold text-white mb-4">
                  From Hit-Driven to Scalable Growth
                </h3>
                <p className="text-purple-100">
                  Our approach transforms gaming businesses from relying on unpredictable successes 
                  to building structured, sustainable financial foundations.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Studios Supported", value: "50+" },
                  { label: "Revenue Tracked", value: "$100M+" },
                  { label: "Titles Analysed", value: "200+" },
                  { label: "Events Covered", value: "100+" },
                ].map((stat, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-purple-200 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-fuchsia-400 to-pink-400 rounded-full opacity-20 blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-400 to-violet-400 rounded-full opacity-20 blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
