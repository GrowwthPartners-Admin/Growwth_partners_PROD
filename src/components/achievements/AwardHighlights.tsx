
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Award as AwardIcon } from "lucide-react";
import acquisitionAwardImg from "@/assets/achievements/acquisition-international-award.jpeg";
import goldenGlobeTrophyImg from "@/assets/achievements/golden-globe-trophy.jpg";
import cmoAsiaCertImg from "@/assets/achievements/cmo-asia-certificate.jpg";
import magiTrophyImg from "@/assets/achievements/magi-trophy.jpg";

interface AwardProps {
  year: string;
  organization: string;
  title: string;
  recognition: string;
  description: string;
  aboutTitle: string;
  aboutDescription: string;
  link?: string;
  image: string;
  index: number;
}

const AwardCard = ({ 
  year, 
  organization, 
  title, 
  recognition, 
  description, 
  aboutTitle,
  aboutDescription, 
  link, 
  image,
  index 
}: AwardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="h-full overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group">
        <div className="h-3 bg-gradient-to-r from-brand-orange via-brand-blue to-brand-green"></div>
        
        <CardContent className="p-8">
          <div className="flex items-start gap-6 mb-6">
            <div className="flex-shrink-0 w-32 h-32 rounded-lg overflow-hidden shadow-lg">
              <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-orange/10 text-brand-orange rounded-full text-sm font-semibold mb-3">
                <AwardIcon className="w-4 h-4" />
                {year}
              </div>
              <h3 className="text-2xl font-bold mb-2 text-brand-dark">{organization}</h3>
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-brand-orange/20 to-brand-blue/20 rounded-lg">
                <p className="text-lg font-semibold text-brand-dark">{title}</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-brand-orange">
              <h4 className="font-bold text-brand-dark mb-2">{recognition}</h4>
              <p className="text-gray-700 leading-relaxed">{description}</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4">
              <h4 className="font-bold text-brand-dark mb-2 flex items-center gap-2">
                <span className="w-2 h-2 bg-brand-blue rounded-full"></span>
                {aboutTitle}
              </h4>
              <p className="text-gray-700 leading-relaxed">{aboutDescription}</p>
            </div>

            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-brand-orange hover:text-brand-orange/80 font-semibold transition-colors group"
              >
                Learn more
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export const AwardHighlights = () => {
  const awards = [
    {
      year: "2024",
      organization: "Acquisition International M&A Awards",
      title: "Winner",
      recognition: "Winner",
      description: "Acquisition International listed Growwth Partners among its 2024 M&A Awards winners, recognising firms that demonstrate tactical excellence across the deal lifecycle.",
      aboutTitle: "About the awards",
      aboutDescription: "The M&A Awards are run by Acquisition International, a brand of AI Global Media, with an editorial and research team selecting winners each year.",
      link: "https://acquisition-international.com",
      image: acquisitionAwardImg
    },
    {
      year: "2024",
      organization: "Golden Globe Tigers Awards (BFSI)",
      title: "Best Fractional CFO Services",
      recognition: "Best Fractional CFO Services",
      description: "Growwth Partners was declared Best Fractional CFO Services at the Golden Globe Tigers Awards for Excellence in Banking, Financial Services and Insurance, held on 8 May 2024 at Pullman Kuala Lumpur City Hotel & Residences.",
      aboutTitle: "About the awards",
      aboutDescription: "Golden Globe Tigers is part of a family of recognition platforms associated with World CSR Day and CMO Asia.",
      link: "https://goldenglobetigers.org/",
      image: goldenGlobeTrophyImg
    },
    {
      year: "2022",
      organization: "CMO Asia • Innovation Excellence",
      title: "Innovation Leadership Award",
      recognition: "Innovation Leadership Award",
      description: "Team-confirmed recognition under the CMO Asia Innovation Excellence programme. CMO Asia runs multiple leadership and innovation award platforms across APAC each year.",
      aboutTitle: "About the awards",
      aboutDescription: "CMO Asia Innovation Excellence recognizes companies and leaders who demonstrate outstanding innovation and leadership in their respective industries across the Asia-Pacific region.",
      image: cmoAsiaCertImg
    },
    {
      year: "2021",
      organization: "Passion Vista",
      title: "Most Admired Global Indians 2021 (#MAGI2021)",
      recognition: "Most Admired Global Indians 2021",
      description: "Founder Jatin Detwani was featured by Passion Vista in its Most Admired Global Indians special collector's edition released in early 2022.",
      aboutTitle: "About the feature",
      aboutDescription: "Passion Vista is a global luxury, lifestyle, and business magazine that periodically features the MAGI list, celebrating Indian entrepreneurs and leaders making a global impact.",
      link: "https://theprint.in",
      image: magiTrophyImg
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4">
            Award Highlights
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-orange to-brand-blue mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto">
          {awards.map((award, index) => (
            <AwardCard key={index} {...award} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
