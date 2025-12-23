import { motion } from "framer-motion";
import { 
  AlertTriangle, 
  TrendingDown, 
  Clock, 
  DollarSign, 
  Users, 
  Settings,
  CheckCircle2,
  BarChart3,
  Eye,
  Award,
  Layers
} from "lucide-react";

const challenges = [
  {
    icon: TrendingDown,
    title: "Inaccurate ARR and MRR reporting",
  },
  {
    icon: Clock,
    title: "Poor deferred revenue tracking",
  },
  {
    icon: Users,
    title: "Weak churn and retention analysis",
  },
  {
    icon: DollarSign,
    title: "Rising burn rate without visibility",
  },
  {
    icon: AlertTriangle,
    title: "Inefficient CAC and long payback periods",
  },
  {
    icon: Settings,
    title: "Misaligned pricing and packaging decisions",
  }
];

const benefits = [
  {
    icon: Users,
    title: "SaaS-experienced CFO and finance team"
  },
  {
    icon: BarChart3,
    title: "Accurate ARR, MRR, and churn dashboards"
  },
  {
    icon: Eye,
    title: "Clear burn rate and runway visibility"
  },
  {
    icon: Award,
    title: "Investor-grade SaaS metrics and reporting"
  },
  {
    icon: Layers,
    title: "Scalable finance systems aligned to growth"
  }
];

const ChallengesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">
            Challenges & Solutions
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Common Financial Challenges in SaaS Companies
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Without SaaS finance expertise, these issues directly impact valuation and funding outcomes.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Challenges */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 border border-red-100"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Without SaaS Finance Expertise
              </h3>
            </div>

            <div className="space-y-4">
              {challenges.map((challenge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-center gap-3 p-3 bg-white/70 rounded-lg shadow"
                >
                  <challenge.icon className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <span className="text-slate-700">{challenge.title}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-100"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                What You Get With Our Services
              </h3>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                  className="flex items-center gap-3 p-3 bg-white/70 rounded-lg shadow"
                >
                  <benefit.icon className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">{benefit.title}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-green-100/50 rounded-xl">
              <p className="text-green-800 text-sm font-medium">
                All designed to support valuation-driven, capital-efficient SaaS growth.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;
