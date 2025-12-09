import { motion } from "framer-motion";
import { Calculator, FileText, TrendingUp, RefreshCw, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useCountry } from "@/contexts/CountryContext";

const services = [
  {
    icon: Calculator,
    title: "Year-End Tax Computation",
    items: [
      "Prepare taxable income from financial statements",
      "Identify deductions, offsets and concessions for SMEs",
      "Review non-deductible items and tax adjustments"
    ]
  },
  {
    icon: FileText,
    title: "ATO Lodgement and Business Tax Compliance",
    items: [
      "Prepare and lodge company tax returns through ATO channels",
      "Manage due dates, extensions and correspondence",
      "Monitor notices and respond to ATO queries"
    ]
  },
  {
    icon: TrendingUp,
    title: "Tax Planning and Optimisation",
    items: [
      "Apply small business concessions where eligible",
      "Advise on timing of income and expenses",
      "Structure guidance to improve long-term outcomes"
    ]
  },
  {
    icon: RefreshCw,
    title: "BAS, PAYG and Fringe Benefits Alignment",
    items: [
      "Reconcile BAS and PAYG instalments with year-end position",
      "Review FBT exposure and documentation",
      "Ensure consistency across compliance touchpoints"
    ]
  },
  {
    icon: BarChart3,
    title: "End-of-Year Reports for Leadership and Investors",
    items: [
      "Plain-English summaries of tax position and effective tax rate",
      "Schedules and workpapers for audit readiness",
      "Recommendations to improve next year's business tax compliance in Australia"
    ]
  }
];

export const ServicesSection = () => {
  const navigate = useNavigate();
  const { getCountryUrl } = useCountry();

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-teal-50/20 to-emerald-50/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 bg-[#06C0A9]/10 text-[#06C0A9] rounded-full text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Corporate Tax Filing Services Include
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#06C0A9] to-teal-600 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              <ul className="space-y-3">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#06C0A9] rounded-full mt-2.5 flex-shrink-0"></div>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            onClick={() => navigate(getCountryUrl("/contact-us"))}
            size="lg"
            className="bg-[#06C0A9] hover:bg-[#05a899] text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            Find Out How Much You Can Save
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
