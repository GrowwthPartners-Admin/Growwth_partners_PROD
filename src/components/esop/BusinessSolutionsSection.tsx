import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, FileText, BarChart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useCountry } from "@/contexts/CountryContext";

export const BusinessSolutionsSection = () => {
  const { getCountryUrl } = useCountry();

  return (
    <section className="py-20 bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Explore Our Comprehensive Business Solutions
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Orange card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Link to={getCountryUrl("/corporate-secretary")}>
              <Card className="h-full bg-gradient-to-b from-brand-orange/5 to-brand-orange/0 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border-2 hover:border-brand-orange/50 group">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-full bg-brand-orange/10 flex items-center justify-center group-hover:bg-brand-orange/20 transition-colors">
                      <Shield className="h-8 w-8 text-brand-orange" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">
                    Corporate Secretary and Compliance Services
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Streamline governance with expert corporate secretary services and Singapore compliance support.
                  </p>
                  <div className="mt-6 flex items-center text-brand-orange font-semibold group-hover:translate-x-1 transition-transform">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>

          {/* Green card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Link to={getCountryUrl("/bookkeeping")}>
              <Card className="h-full bg-gradient-to-b from-brand-green/5 to-brand-green/0 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border-2 hover:border-brand-green/50 group">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-full bg-brand-green/10 flex items-center justify-center group-hover:bg-brand-green/20 transition-colors">
                      <FileText className="h-8 w-8 text-brand-green" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">
                    Bookkeeping Services
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Simplify financial management with accurate bookkeeping so you can focus on strategic decisions.
                  </p>
                  <div className="mt-6 flex items-center text-brand-green font-semibold group-hover:translate-x-1 transition-transform">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>

          {/* Blue card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link to={getCountryUrl("/valuation-services-singapore")}>
              <Card className="h-full bg-gradient-to-b from-brand-blue/5 to-brand-blue/0 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border-2 hover:border-brand-blue/50 group">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-full bg-brand-blue/10 flex items-center justify-center group-hover:bg-brand-blue/20 transition-colors">
                      <BarChart className="h-8 w-8 text-brand-blue" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">
                    Due Diligence Services
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Mitigate risks and make informed decisions with our due diligence support for acquisitions, fundraising, and expansion.
                  </p>
                  <div className="mt-6 flex items-center text-brand-blue font-semibold group-hover:translate-x-1 transition-transform">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
