import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Sparkles, BarChart3, ArrowRight } from 'lucide-react';
import { ContactModal } from '@/components/ui/contact-modal';

const CTASection = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-teal-900 to-gray-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/20 px-4 py-2 rounded-full mb-8">
            <Sparkles className="w-5 h-5 text-teal-400" />
            <span className="text-sm font-medium text-teal-300">Decision Intelligence for CFOs</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Give Your Finance Team Decision Intelligence That{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">
              Moves as Fast as the Business
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Choose AI dashboards for CFOs in Australia that turn numbers into clear actions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white shadow-lg shadow-teal-500/25 group"
              onClick={() => setContactModalOpen(true)}
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Schedule a Demo
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-teal-400/50 text-teal-300 hover:bg-teal-500/10 hover:text-teal-200"
              onClick={() => window.open('https://app.ryzup.ai/login', '_blank')}
            >
              <BarChart3 className="w-5 h-5 mr-2" />
              See the Dashboards
            </Button>
          </div>
        </motion.div>
      </div>

      <ContactModal open={contactModalOpen} onOpenChange={setContactModalOpen} />
    </section>
  );
};

export default CTASection;
