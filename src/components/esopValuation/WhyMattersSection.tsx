import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Shield, TrendingUp, Users, Target } from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "Ensures Fair Allocation of Equity",
    description: "Employees receive options based on a realistic, independent valuation.",
    color: "brand-orange",
  },
  {
    icon: Shield,
    title: "Required for Compliance",
    description: "Singapore startups issuing ESOPs must maintain proper FMV documentation.",
    color: "brand-green",
  },
  {
    icon: TrendingUp,
    title: "Supports Fundraising & Future Rounds",
    description:
      "Investors prefer companies with solid valuation hygiene and proper pre-money and post-money valuation discipline.",
    color: "brand-blue",
  },
  {
    icon: CheckCircle2,
    title: "Reduces Legal or HR Misalignment",
    description: "A clear FMV avoids internal conflicts, disputes, and confusion.",
    color: "brand-orange",
  },
  {
    icon: Target,
    title: "Protects Founders from Unexpected Dilution",
    description: "Accurate valuation ensures ESOP pool planning aligns with long-term strategy.",
    color: "brand-green",
  },
];

// optional: map Tailwind-safe color classes instead of string interpolation
const colorClassMap: Record<
  string,
  { bg: string; text: string }
> = {
  "brand-orange": {
    bg: "bg-orange-50",
    text: "text-brand-orange",
  },
  "brand-green": {
    bg: "bg-emerald-50",
    text: "text-emerald-600",
  },
  "brand-blue": {
    bg: "bg-blue-50",
    text: "text-brand-blue",
  },
};

const ReasonCard = ({ reason, index }: { reason: (typeof reasons)[number]; index: number }) => {
  const Icon = reason.icon;
  const colorClasses = colorClassMap[reason.color] ?? {
    bg: "bg-slate-100",
    text: "text-brand-orange",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <Card
        className="
          h-full flex flex-col
          shadow-lg hover:shadow-xl transition-all duration-300
          border border-slate-100 hover:border-brand-orange
          bg-white/90
        "
      >
        <CardContent className="p-6 flex flex-col flex-1">
          <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 ${colorClasses.bg}`}>
            <Icon className={`h-7 w-7 ${colorClasses.text}`} />
          </div>
          <h3 className="text-xl font-bold mb-3 text-foreground">
            {reason.title}
          </h3>
          <p className="text-gray-700 leading-relaxed flex-1">
            {reason.description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export const WhyMattersSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#F0F9FF] to-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Why ESOP Valuation <span className="text-brand-orange">Matters</span>
          </h2>
        </motion.div>

        {/* First row: 3 cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {reasons.slice(0, 3).map((reason, index) => (
            <div key={reason.title} className="w-full max-w-md mx-auto">
              <ReasonCard reason={reason} index={index} />
            </div>
          ))}
        </div>

        {/* Second row: 2 centered cards */}
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-center gap-8">
          {reasons.slice(3).map((reason, index) => (
            <div key={reason.title} className="w-full max-w-md mx-auto">
              <ReasonCard reason={reason} index={index + 3} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
