import { Navigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { PlaceholderContent } from "@/components/PlaceholderContent";
import { useCountry } from "@/contexts/CountryContext";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Construction } from "lucide-react";
import SEOhelper from "@/components/SEOhelper";

const SuccessStoriesPage = () => {
  const successStoriesSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Success Stories | Growwth Partners",
    description:
      "See how startups and SMEs have transformed their payroll and financial operations with Growwth Partners in our client success stories.",
    url: `https://growwthpartners.com/success-stories`,
    publisher: {
      "@type": "Organization",
      name: "Growwth Partners",
      url: "https://growwthpartners.com",
    },
    about: {
      "@type": "Thing",
      name: "Client Success Stories",
    },
  };

  return (
    <Layout>
      <SEOhelper
        title="Success Stories | Growwth Partners"
        description="See how startups and SMEs have transformed their payroll and financial operations with Growwth Partners in our client success stories."
        keywords="success stories, client testimonials, case studies, business growth, singapore"
        canonicalUrl={`https://growwthpartners.com/success-stories`}
        structuredData={successStoriesSchema}
      />
      <PlaceholderContent
        title="Success Stories"
        description="Discover how we've helped businesses overcome financial challenges and achieve sustainable growth."
        imageBg="bg-gradient-to-r from-green-500 to-brand-green"
      />
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-[#FEF7CD] rounded-full text-sm font-semibold mb-4 text-orange-500">
              Case Studies
            </span>
            <h2 className="heading-lg mb-4">Our Success Stories</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Explore how we've helped businesses across different industries achieve their financial goals and drive sustainable growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Transforming Patient Engagement In Healthcare",
                description: "Better financial management and analysis driving healthcare transformation.",
                url: "/case-studies/healthcare",
                category: "Healthcare"
              },
              {
                title: "Achieving E-Commerce Growth With Automation",
                description: "Leveraging automation and analytics for e-commerce success.",
                url: "/case-studies/ecommerce",
                category: "E-commerce"
              },
              {
                title: "Fueling Food Tech Growth",
                description: "Optimizing operations and financial management for a food technology company.",
                url: "/case-studies/food-tech",
                category: "Food Tech"
              },
              {
                title: "Transforming Online Consumer Goods Business",
                description: "Fast-growing business transformation through Virtual CFO partnership.",
                url: "/case-studies/online-consumer-goods",
                category: "Consumer Goods"
              },
              {
                title: "Achieving Remarkable Growth",
                description: "A data-driven success story showcasing strategic financial guidance.",
                url: "/case-studies/data-driven-success",
                category: "Fractional CFO"
              },
              {
                title: "Gaming Industry Business Transformation",
                description: "Strategic financial guidance for exponential growth in gaming.",
                url: "/case-studies/gaming-industry",
                category: "Gaming"
              },
              {
                title: "Transforming Financial Reporting for Multi-Country Tech Business",
                description: "From legacy Excel to efficient reporting across 15 tech businesses in 12+ countries.",
                url: "/case-studies/tech-business",
                category: "Tech Business"
              },
              {
                title: "Rapid Expansion into Thailand and Indonesia",
                description: "Strategic compliance navigation enabling 25% valuation growth for D2C business.",
                url: "/case-studies/d2c-expansion",
                category: "D2C Expansion"
              },
              {
                title: "Transforming Financial Forecasting in Retail Fuel Industry",
                description: "Data-driven financial modeling and automated dashboards for strategic growth and business valuation.",
                url: "/case-studies/finance-forecasting",
                category: "Financial Forecasting"
              }
            ].map((study, index) => (
              <a
                key={index}
                href={study.url}
                className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
              >
                <div className="p-8">
                  <div className="inline-block px-3 py-1 bg-brand-orange/10 text-brand-orange rounded-full text-xs font-semibold mb-4">
                    {study.category}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-brand-dark group-hover:text-brand-orange transition-colors line-clamp-2">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 mb-6 line-clamp-3">{study.description}</p>
                  <div className="flex items-center text-brand-orange font-medium">
                    <span>Read case study</span>
                    <svg className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SuccessStoriesPage;
