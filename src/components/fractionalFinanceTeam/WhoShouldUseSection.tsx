import { motion } from "framer-motion";
import {
  Rocket,
  Building2,
  TrendingUp,
  Network,
  Target,
  CheckCircle2,
} from "lucide-react";

const idealClients = [
  {
    icon: Rocket,
    title: "Startups & SMEs in Growth Phase",
    description:
      "Companies scaling operations and needing enhanced financial oversight",
  },
  {
    icon: Building2,
    title: "Basic Accounting, Limited Analytics",
    description:
      "Businesses with reliable books but lacking decision-grade analysis",
  },
  {
    icon: TrendingUp,
    title: "Fundraising or Expansion Ready",
    description: "Companies preparing for investment rounds or market expansion",
  },
  {
    icon: Network,
    title: "Increasing Operational Complexity",
    description: "Organisations outgrowing simple financial management",
  },
  {
    icon: Target,
    title: "Leadership Needing Better Insights",
    description: "Teams requiring strategic financial visibility for decisions",
  },
];

const ClientCard = ({
  client,
  index,
}: {
  client: (typeof idealClients)[number];
  index: number;
}) => {
  const Icon = client.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group h-full bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-transparent hover:border-orange-200"
    >
      <div className="flex items-start gap-4 h-full">
        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
          <Icon className="w-6 h-6 text-white" />
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-semibold text-slate-900 mb-2">
            {client.title}
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            {client.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const WhoShouldUseSection = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-slate-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="max-w-8xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">
              <Target className="w-4 h-4" />
              Ideal For
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Who Should Use Fractional Finance Team Services?
            </h2>
          </motion.div>

          {/* Row 1 – 3 cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {idealClients.slice(0, 3).map((client, index) => (
              <ClientCard key={client.title} client={client} index={index} />
            ))}
          </div>

          {/* Row 2 – 2 cards centered */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
            {idealClients.slice(3).map((client, index) => (
              <div key={client.title} className="w-full max-w-md">
                <ClientCard client={client} index={index + 3} />
              </div>
            ))}
          </div>

          {/* Callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-2xl p-8 shadow-xl border border-orange-200"
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-8 h-8 text-orange-600" />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  Bridge the Gap
                </h3>
                <p className="text-slate-600 text-lg">
                  If your business has reliable books but lacks{" "}
                  <span className="text-orange-600 font-semibold">
                    decision-grade financial analysis
                  </span>
                  , a Fractional Finance Team bridges the gap between basic
                  accounting and strategic financial leadership.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoShouldUseSection;
