import { 
  PenTool, 
  FileText, 
  Users, 
  Settings, 
  Calculator, 
  Shield, 
  Receipt 
} from "lucide-react";

const services = [
  { icon: PenTool, title: "Designing Employee Stock Incentive Plans" },
  { icon: FileText, title: "Documenting Employee Stock Incentive Plans" },
  { icon: Users, title: "Implementation and employee communication" },
  { icon: Settings, title: "Ongoing administration of Employee Stock Incentive Plans" },
  { icon: Calculator, title: "Accounting treatment and independent valuation support" },
  { icon: Shield, title: "Regulatory and governance compliance" },
  { icon: Receipt, title: "Tax advisory for company and participants" },
];

const TailoredServicesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-amber-50/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tailored Services for Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
              Unique Business
            </span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-white rounded-xl p-6 border border-amber-100/50 shadow-sm hover:shadow-lg hover:border-amber-200 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <service.icon className="w-6 h-6 text-amber-600" />
                </div>
                <span className="text-lg font-medium text-gray-800">
                  {service.title}
                </span>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-600 mt-10 text-lg">
            These services support both early-stage planning and mature plan optimisation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TailoredServicesSection;
