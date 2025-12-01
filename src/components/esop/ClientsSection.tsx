import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useCountry } from "@/contexts/CountryContext";

export const ClientsSection = () => {
  const { getCountryUrl } = useCountry();

  return (
    <section className="py-20 bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Our Happy Clients
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Not trusting our words? Hear what our clients are saying about us and our services. We support clients across Singapore, Southeast Asia, India, and global markets.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="max-w-3xl mx-auto bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20">
            <CardContent className="p-12">
              <Award className="h-16 w-16 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Trusted by Leading Companies Across APAC
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Our ESOP advisory services have helped numerous startups and established companies successfully implement employee stock incentive plans, driving growth and retention.
              </p>
              <Link to={getCountryUrl("/success-stories")}>
                <Button variant="outline" size="lg" className="font-semibold">
                  Read Success Stories
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
