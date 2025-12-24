import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  AlertCircle, 
  TrendingDown, 
  Eye, 
  Calculator,
  FileX,
  Clock,
  ArrowRight,
  CheckCircle2,
  User,
  Users,
  LineChart,
  BarChart3,
  MessageSquare,
  Zap
} from "lucide-react";
import { ContactModal } from "@/components/ui/contact-modal";

const challenges = [
  {
    icon: Calculator,
    title: "Inaccurate Forecasts",
    description: "Overly optimistic projections that don't hold"
  },
  {
    icon: Eye,
    title: "Poor Visibility",
    description: "Unclear burn rate and runway status"
  },
  {
    icon: TrendingDown,
    title: "Weak Unit Economics",
    description: "CAC, LTV, and margins not tracked"
  },
  {
    icon: FileX,
    title: "Disorganised Reporting",
    description: "Inconsistent investor updates"
  },
  {
    icon: Clock,
    title: "Reactive Decisions",
    description: "Financial choices driven by urgency"
  },
  {
    icon: AlertCircle,
    title: "Increased Risk",
    description: "Reduced valuation and delayed funding"
  }
];

const offerings = [
  { icon: User, text: "Dedicated Startup CFO" },
  { icon: Users, text: "Finance analyst support" },
  { icon: LineChart, text: "Investor-ready financial models" },
  { icon: BarChart3, text: "Cash flow and runway dashboards" },
  { icon: MessageSquare, text: "Monthly CFO-led strategy reviews" },
  { icon: Zap, text: "Scalable engagement model" }
];

const ChallengesSection = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Challenges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-red-100 text-red-600 rounded-full text-sm font-medium mb-4">
              Common Pain Points
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Common Startup Financial Challenges
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Most startups struggle with these critical financial issues
            </p>
          </motion.div>

          {/* Challenges Grid - Creative Hexagonal Layout */}
          <div className="relative mb-20">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {challenges.map((challenge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="h-full p-6 bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl border border-red-100 hover:border-red-300 hover:shadow-lg hover:shadow-red-100/50 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <challenge.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      {challenge.title}
                    </h3>
                    <p className="text-slate-600 text-sm">
                      {challenge.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Warning Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 p-6 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-2xl border border-red-200 text-center"
            >
              <p className="text-red-800 font-medium">
                These issues reduce valuation, delay fundraising, and increase failure risk.
              </p>
            </motion.div>
          </div>

          {/* What You Get */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-slate-900 via-slate-800 to-orange-900/30 rounded-3xl p-8 md:p-12"
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What You Get with Our Startup CFO Services
              </h2>
              <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                All delivered at a fraction of the cost of a full-time CFO
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {offerings.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Button
                size="lg"
                onClick={() => setIsContactModalOpen(true)}
                className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-8 py-6 text-lg rounded-xl group"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      <ContactModal
        open={isContactModalOpen}
        onOpenChange={setIsContactModalOpen}
      />
    </section>
  );
};

export default ChallengesSection;
