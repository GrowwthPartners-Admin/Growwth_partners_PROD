import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useCountry } from "@/contexts/CountryContext";

export const BlogSection = () => {
  const { getCountryUrl } = useCountry();

  const blogPosts = [
    {
      title: "AI in Finance for CFOs in Singapore",
      slug: "/blog/ai-in-finance-for-cfos-singapore",
      description: "Discover how AI is transforming financial operations and decision-making for CFOs across Singapore."
    },
    {
      title: "Taxation in Singapore: A Complete Guide for Small Business Owners",
      slug: "/blog/taxation-in-singapore-a-complete-guide-for-small-business-owners",
      description: "Navigate Singapore's tax landscape with our comprehensive guide designed specifically for small business owners."
    },
    {
      title: "Various Funding Options Available for Startups",
      slug: "/blog/various-funding-options-available-for-startups",
      description: "Explore diverse funding opportunities to fuel your startup's growth journey in Singapore and beyond."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#FFF5F0] to-[#F0F9FF]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            From Our Experts. Read Now
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link to={getCountryUrl(post.slug)}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group border-l-4 border-l-brand-orange">
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <div className="w-16 h-16 rounded-full bg-brand-orange/10 flex items-center justify-center group-hover:bg-brand-orange/20 transition-colors">
                        <FileText className="h-8 w-8 text-brand-orange" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-brand-orange transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {post.description}
                    </p>
                    <div className="flex items-center text-brand-orange font-semibold">
                      Read Article <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
