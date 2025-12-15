import { Shield, BookOpen, Search } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Corporate Secretary and Compliance",
    description: "Governance support and ongoing compliance suitable for UAE entities and free zones.",
  },
  {
    icon: BookOpen,
    title: "Bookkeeping and Finance Operations",
    description: "Accurate books, monthly closes, and management reporting so leaders can focus on decisions.",
  },
  {
    icon: Search,
    title: "Due Diligence and Transaction Support",
    description: "Preparation for fundraising, acquisitions, and expansions with clean documentation and clear metrics.",
  },
];

const BroaderSupportSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-amber-50/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Explore Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
              Broader Support
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border border-amber-100/50 shadow-sm hover:shadow-xl hover:border-amber-200 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BroaderSupportSection;
