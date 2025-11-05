import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Rocket, TrendingUp, Building2, Handshake } from 'lucide-react';

export const WhoWeSupport: React.FC = () => {
  const profiles = [
    {
      icon: Rocket,
      title: 'Venture-Backed Startups',
      description: 'You\'re raising or preparing to raise. You need credibility in the room, not chaos in the spreadsheet.',
      gradient: 'from-blue-500/10 to-cyan-500/10',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      icon: TrendingUp,
      title: 'High-Growth SMEs',
      description: 'Your revenue is scaling, but cost control and cash discipline need to catch up.',
      gradient: 'from-green-500/10 to-emerald-500/10',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      icon: Building2,
      title: 'Founder-Led and Family Businesses',
      description: 'You\'re profitable, but finance is living in multiple Excel files and decisions are instinct-driven. You want structured control.',
      gradient: 'from-purple-500/10 to-pink-500/10',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600'
    },
    {
      icon: Handshake,
      title: 'Groups Preparing for M&A or Exit',
      description: 'You need clean financials, clear valuation logic, and a story the buyer will actually believe.',
      gradient: 'from-orange-500/10 to-red-500/10',
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Who <span className="text-brand-orange">We Support</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {profiles.map((profile, index) => (
            <motion.div
              key={profile.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full bg-gradient-to-br ${profile.gradient} border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-2xl ${profile.iconBg} flex items-center justify-center mb-6`}>
                    <profile.icon className={`w-8 h-8 ${profile.iconColor}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{profile.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{profile.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-orange-50/50 border-2 border-brand-orange/20">
            <CardContent className="p-8">
              <p className="text-xl text-gray-800 leading-relaxed">
                If you recognise yourself in any of these profiles, you're the ideal fit for <span className="font-semibold text-brand-orange">CFO services Singapore</span> through a part-time CFO.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeSupport;
