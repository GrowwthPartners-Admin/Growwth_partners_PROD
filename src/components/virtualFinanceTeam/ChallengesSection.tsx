import { motion } from "framer-motion";
import { 
  Clock, Eye, Users, Link2, ShieldAlert,
  UserCheck, Cloud, CheckCircle2, BarChart3, Settings, TrendingUp
} from "lucide-react";

const challenges = [
  {
    icon: Clock,
    title: "Delayed Reporting",
    description: "Inconsistent and late financial reports"
  },
  {
    icon: Eye,
    title: "Limited Visibility",
    description: "No real-time view into performance"
  },
  {
    icon: Users,
    title: "Individual Dependency",
    description: "High reliance on people over systems"
  },
  {
    icon: Link2,
    title: "Poor Coordination",
    description: "Disconnected accounting, payroll, and reporting"
  },
  {
    icon: ShieldAlert,
    title: "Compliance Risk",
    description: "Increased risk during audits and reviews"
  }
];

const benefits = [
  {
    icon: UserCheck,
    title: "Dedicated Virtual Professionals",
    description: "Experienced finance team members assigned to your business"
  },
  {
    icon: Cloud,
    title: "Cloud-Based Systems",
    description: "Modern accounting and reporting platforms"
  },
  {
    icon: CheckCircle2,
    title: "Reliable Monthly Closes",
    description: "Consistent reporting timelines you can count on"
  },
  {
    icon: BarChart3,
    title: "Data Accuracy",
    description: "Improved accuracy and transparency"
  },
  {
    icon: Settings,
    title: "Reduced Burden",
    description: "Less operational load on leadership"
  },
  {
    icon: TrendingUp,
    title: "Scalable Infrastructure",
    description: "Finance that grows with your business"
  }
];

const ChallengesSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Challenges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-destructive/10 text-destructive rounded-full text-sm font-medium mb-4">
            Common Pain Points
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Challenges of Traditional Finance Setups
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Businesses using fragmented or manual finance setups often face these critical issues 
            that Virtual Finance Team services address.
          </p>
        </motion.div>

        {/* Challenges Grid - Creative Layout */}
        <div className="relative mb-24">
          <div className="absolute inset-0 bg-gradient-to-r from-destructive/5 via-transparent to-destructive/5 rounded-3xl" />
          <div className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-6 md:p-10">
            {challenges.map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-destructive/10 to-destructive/5 rounded-2xl transform group-hover:scale-105 transition-transform duration-300" />
                <div className="relative p-6 text-center">
                  <div className="w-14 h-14 bg-destructive/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-destructive/20 transition-colors">
                    <challenge.icon className="w-7 h-7 text-destructive" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 text-sm md:text-base">{challenge.title}</h3>
                  <p className="text-muted-foreground text-xs md:text-sm">{challenge.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Solution - What You Get */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            The Solution
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            What You Get with Our Virtual Finance Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Enterprise-grade finance operations at SME-friendly cost levels.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl border border-primary/10 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;
