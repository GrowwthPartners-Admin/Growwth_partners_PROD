import { motion } from "framer-motion";
import { Calculator, FileCheck, TrendingUp, Shield, HeadphonesIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ContactModal } from "@/components/ui/contact-modal";

export const ServicesSection = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const services = [
    {
      icon: Calculator,
      title: "Corporate Tax Computation and Review",
      points: [
        "Preparation of tax computation based on your financial statements",
        "Review of deductible and non deductible expenses",
        "Identification of tax adjustments and reliefs"
      ]
    },
    {
      icon: FileCheck,
      title: "IRAS e-Filing and Compliance",
      points: [
        "Preparation and filing of Form C / Form C-S",
        "Submission through IRAS e-Services on your behalf",
        "Monitoring of deadlines so you never miss a date"
      ]
    },
    {
      icon: TrendingUp,
      title: "Tax Planning and Optimisation",
      points: [
        "Guidance on legitimate ways to reduce tax payable",
        "Use of available tax exemptions and relief schemes",
        "Structuring advice to support long term tax efficiency"
      ]
    },
    {
      icon: Shield,
      title: "Support for Queries and Audits",
      points: [
        "Assistance with IRAS clarification requests",
        "Preparation of supporting schedules and documents",
        "Professional representation in tax discussions"
      ]
    },
    {
      icon: HeadphonesIcon,
      title: "Ongoing Corporate Tax Services in Singapore",
      points: [
        "Year on year continuity so nothing falls through the cracks",
        "Alignment between bookkeeping, accounts, and tax",
        "Regular check ins around changes in your business"
      ]
    }
  ];

  const ServiceCard = ({ service, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
  >
    <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
      <service.icon className="h-7 w-7 text-brand-blue" />
    </div>

    <h3 className="text-xl font-bold text-gray-900 mb-4">
      {service.title}
    </h3>

    <ul className="space-y-3">
      {service.points.map((point, pointIndex) => (
        <li key={pointIndex} className="flex items-start gap-2 text-gray-600">
          <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
          <span className="text-sm">{point}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);


  return (
    <>
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-blue-100 text-brand-blue rounded-full text-sm font-semibold mb-4">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What Our Corporate Tax Filing Services Include
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Growwth Partners covers the full cycle of corporate tax filing in
              Singapore so nothing is missed.
            </p>
          </motion.div>

          {/* First row: 3 items in grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {services.slice(0, 3).map((service, index) => (
              <ServiceCard
                key={service.title}
                service={service}
                index={index} // 0,1,2
              />
            ))}
          </div>

          {/* Second row: 2 items centered */}
          <div className="flex justify-center gap-8 mb-12 flex-wrap">
            {services.slice(3).map((service, index) => (
              <ServiceCard
                key={service.title}
                service={service}
                index={index + 3} // 3,4 – keeps animation delay consistent
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Button
              size="lg"
              onClick={() => setContactModalOpen(true)}
              className="bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-lg"
            >
              Find Out How Much You Can Save
            </Button>
          </motion.div>
        </div>
      </section>

      <ContactModal
        open={contactModalOpen}
        onOpenChange={setContactModalOpen}
      />
    </>
  );
};
