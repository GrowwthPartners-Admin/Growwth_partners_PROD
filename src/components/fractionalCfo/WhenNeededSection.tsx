import { motion } from "framer-motion";
import { TrendingUp, Eye, Briefcase, Globe, Users, CheckCircle } from "lucide-react";

const WhenNeededSection = () => {
  const scenarios = [
    {
      icon: TrendingUp,
      title: "Revenue Growing Faster Than Controls",
      description: "Financial systems can't keep pace with business growth"
    },
    {
      icon: Eye,
      title: "Lack of Financial Visibility",
      description: "Founders making decisions without clear financial data"
    },
    {
      icon: Briefcase,
      title: "Fundraising or Investor Discussions",
      description: "Need investor-ready financials and due diligence support"
    },
    {
      icon: Globe,
      title: "Market Expansion Planned",
      description: "Strategic financial guidance for new market entry"
    },
    {
      icon: Users,
      title: "Finance Team Needs Senior Oversight",
      description: "Existing teams require CFO-level leadership and direction"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-orange-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            When Does a Business Need a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
              Fractional CFO?
            </span>
          </h2>
          <p className="text-lg text-slate-600">
            Fractional CFO services are ideal when:
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scenarios.map((scenario, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 h-full shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-orange-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-amber-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:from-orange-500 group-hover:to-amber-500 transition-all duration-300">
                      <scenario.icon className="w-6 h-6 text-orange-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">
                        {scenario.title}
                      </h3>
                      <p className="text-slate-600 text-sm">
                        {scenario.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 bg-white rounded-2xl p-8 shadow-lg border border-orange-100"
          >
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="w-6 h-6 text-orange-500" />
              <h3 className="text-xl font-bold text-slate-900">Ready for Fractional CFO Support?</h3>
            </div>
            <p className="text-slate-600">
              If your business is at a growth inflection point and needs strategic financial leadership without the commitment of a full-time hire, Fractional CFO services provide the perfect solution.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhenNeededSection;
