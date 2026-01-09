import { motion } from "framer-motion";
import { 
  Building2, 
  AlertCircle, 
  Wrench, 
  CheckCircle2,
  TrendingUp,
  Clock,
  Users
} from "lucide-react";

const UseCaseSection = () => {
  const challenges = [
    "High revenue growth but low cash availability",
    "No SKU-level margin visibility",
    "Inventory cash crunch during peak seasons",
  ];

  const solutions = [
    "Implemented SKU-level profitability analysis",
    "Built rolling cash flow and inventory planning models",
    "Introduced marketing ROI dashboards",
  ];

  const outcomes = [
    { icon: TrendingUp, text: "Identified loss-making SKUs" },
    { icon: Clock, text: "Improved contribution margins" },
    { icon: Users, text: "Stabilised cash flow during growth periods" },
    { icon: CheckCircle2, text: "Improved confidence in scaling decisions" },
  ];

  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
              Real Results
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Practical{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">
                Use Case
              </span>
            </h2>
          </motion.div>

          {/* Case Study Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100"
          >
            {/* Client Header */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-6 text-white">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/20 rounded-xl">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-emerald-100 text-sm font-medium">Client Type</p>
                  <h3 className="text-xl font-bold">D2C Ecommerce Brand (Singapore)</h3>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Challenges */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <AlertCircle className="w-5 h-5 text-red-500" />
                    <h4 className="font-bold text-gray-900">Challenges</h4>
                  </div>
                  <ul className="space-y-3">
                    {challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 shrink-0" />
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solutions */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Wrench className="w-5 h-5 text-emerald-500" />
                    <h4 className="font-bold text-gray-900">Our Solution</h4>
                  </div>
                  <ul className="space-y-3">
                    {solutions.map((solution, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                        {solution}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Outcomes */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="w-5 h-5 text-teal-500" />
                    <h4 className="font-bold text-gray-900">Outcome</h4>
                  </div>
                  <ul className="space-y-3">
                    {outcomes.map((outcome, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                        <outcome.icon className="w-4 h-4 text-teal-500 mt-0.5 shrink-0" />
                        {outcome.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UseCaseSection;
