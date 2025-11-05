import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { UserCheck, BookOpen, MapPin, DollarSign, ArrowRight } from 'lucide-react';
import { ContactModal } from '@/components/ui/contact-modal';

export const WhyGrowwthSection: React.FC = () => {
  const [contactOpen, setContactOpen] = useState(false);

  const reasons = [
    {
      icon: UserCheck,
      title: 'You Get an Actual CFO, Not a Junior Analyst',
      description: 'You work directly with senior finance leadership that has supported founders through fundraising, regional expansion, and exits.',
      gradient: 'from-blue-500/10 to-cyan-500/10'
    },
    {
      icon: BookOpen,
      title: 'Investor-Grade Storytelling',
      description: 'We don\'t just send reports. We shape the story around revenue quality, path to profitability, and scalability. That\'s what investors, boards, and acquirers want.',
      gradient: 'from-green-500/10 to-emerald-500/10'
    },
    {
      icon: MapPin,
      title: 'Singapore Focus',
      description: 'We work closely with Singapore-based startups, SMEs, and holding companies. We understand what investors in Singapore, the broader Southeast Asia market, and global partners expect to see.',
      gradient: 'from-purple-500/10 to-pink-500/10'
    },
    {
      icon: DollarSign,
      title: 'Cost Efficient',
      description: 'You get top-tier strategic guidance, without locking in a full-time CFO salary package. This is why founders are shifting to a part-time CFO model and looking for CFO services Singapore instead of hiring too early.',
      gradient: 'from-orange-500/10 to-red-500/10'
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
            Why <span className="text-brand-orange">Growwth Partners</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full bg-gradient-to-br ${reason.gradient} border-2 hover:shadow-xl transition-all duration-300`}>
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center flex-shrink-0">
                      <reason.icon className="w-6 h-6 text-brand-orange" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 leading-tight">{reason.title}</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{reason.description}</p>
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
          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-brand-orange/10 via-blue-50/50 to-orange-50/30 border-2 border-brand-orange/30">
            <CardContent className="p-10">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Ready to Transform Your Finance Function?
              </h3>
              <Button
                onClick={() => setContactOpen(true)}
                className="bg-brand-orange hover:bg-brand-orange/90 text-white px-10 py-7 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 group"
              >
                Speak To An Expert
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <ContactModal open={contactOpen} onOpenChange={setContactOpen} />
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyGrowwthSection;
