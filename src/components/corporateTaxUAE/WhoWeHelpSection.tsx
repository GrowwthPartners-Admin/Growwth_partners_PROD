import { motion } from 'framer-motion';
import { Rocket, Building2, Network, Users, Search, Calculator, FileText, BarChart3, RefreshCw } from 'lucide-react';

const clientTypes = [
  {
    icon: Rocket,
    title: "Startups and Scale-ups",
    description: "Seeking clean, credible FTA lodgements"
  },
  {
    icon: Building2,
    title: "SMEs and Family Businesses",
    description: "Needing reliable corporate tax filing in the UAE without building a large internal team"
  },
  {
    icon: Network,
    title: "Multi-entity Groups",
    description: "That require coordinated filings and consolidated reporting"
  },
  {
    icon: Users,
    title: "Investor-backed Companies",
    description: "That need diligence-ready documentation"
  }
];

const processSteps = [
  {
    step: 1,
    icon: Search,
    title: "Initial Review",
    description: "Growwth Partners reviews prior filings, financials and current structure."
  },
  {
    step: 2,
    icon: Calculator,
    title: "Compute and Plan",
    description: "Growwth Partners prepares the tax computation, applies reliefs and maps legal savings."
  },
  {
    step: 3,
    icon: FileText,
    title: "FTA Lodgement",
    description: "Growwth Partners finalises and lodges the return, managing timelines and any FTA clarifications."
  },
  {
    step: 4,
    icon: BarChart3,
    title: "Year-End Reporting",
    description: "Growwth Partners delivers a clear tax summary, supporting schedules and recommendations."
  },
  {
    step: 5,
    icon: RefreshCw,
    title: "Ongoing Compliance",
    description: "Quarterly check-ins keep VAT, ESR and record-keeping aligned with your UAE tax services needs."
  }
];

const WhoWeHelpSection = () => {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Who We Help */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-brand-orange/10 text-brand-orange rounded-full text-sm font-semibold mb-4">
            Our Clients
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Who We{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-600">
              Help
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {clientTypes.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-gradient-to-br from-amber-50 to-orange-50/50 rounded-2xl p-6 border border-amber-100/50 hover:shadow-xl transition-all duration-300 shadow"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-orange to-amber-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <client.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{client.title}</h3>
              <p className="text-gray-600 text-sm">{client.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-brand-orange/10 text-brand-orange rounded-full text-sm font-semibold mb-4">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            How It{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-600">
              Works
            </span>
          </h2>
        </motion.div>

        {/* Interactive Process Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Central line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-orange via-amber-400 to-yellow-400 transform -translate-x-1/2 hidden lg:block" />

          <div className="space-y-8 lg:space-y-0">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex-col lg:gap-8`}
              >
                {/* Content Card */}
                <div className={`w-full lg:w-[calc(50%-3rem)] ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-orange to-amber-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-brand-orange uppercase tracking-wider">Step {step.step}</span>
                        <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>

                {/* Center Circle */}
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-white border-4 border-brand-orange items-center justify-center z-10 shadow-lg">
                  <span className="text-sm font-bold text-brand-orange">{step.step}</span>
                </div>

                {/* Mobile step indicator */}
                <div className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-brand-orange to-amber-500 text-white font-bold mb-4">
                  {step.step}
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden lg:block w-[calc(50%-3rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelpSection;
