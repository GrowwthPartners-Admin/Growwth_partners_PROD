import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Brain, BarChart3, Sparkles } from 'lucide-react';
import { ContactModal } from '@/components/ui/contact-modal';

const HeroSection = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-blue-100 via-teal-50 to-[#e9faf7]">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-teal-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-teal-100/20 to-blue-100/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-teal-200/50">
              <Brain className="w-5 h-5 text-teal-600" />
              <span className="text-sm font-medium text-teal-700">AI Decision Intelligence</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Smarter Insights for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
                Finance Leaders
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
              Ryzup.ai gives CFOs in Australia a live financial cockpit with AI dashboards, automated analysis, and predictive insights. Ask questions in plain English, see what changed, and understand what to do next with decision-ready analytics and forward views.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white shadow-lg shadow-teal-500/25"
                onClick={() => setContactModalOpen(true)}
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Schedule a Demo
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-teal-300 text-teal-700 hover:bg-teal-50"
                onClick={() => window.open('https://app.ryzup.ai/login', '_blank')}
              >
                <BarChart3 className="w-5 h-5 mr-2" />
                See the Dashboards
              </Button>
            </div>
          </motion.div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-teal-100">
              {/* Dashboard mockup */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <Brain className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">CFO Dashboard</p>
                      <p className="text-sm text-gray-500">Real-time insights</p>
                    </div>
                  </div>
                  <div className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">Live</div>
                </div>

                {/* Metrics grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-teal-50 to-teal-100/50 rounded-xl p-4">
                    <p className="text-sm text-gray-600">Revenue MTD</p>
                    <p className="text-2xl font-bold text-teal-700">$2.4M</p>
                    <p className="text-xs text-green-600">↑ 12% vs last month</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-xl p-4">
                    <p className="text-sm text-gray-600">Cash Runway</p>
                    <p className="text-2xl font-bold text-blue-700">18 mo</p>
                    <p className="text-xs text-green-600">↑ 2 months improved</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-xl p-4">
                    <p className="text-sm text-gray-600">Gross Margin</p>
                    <p className="text-2xl font-bold text-purple-700">68%</p>
                    <p className="text-xs text-gray-500">On target</p>
                  </div>
                  <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-xl p-4">
                    <p className="text-sm text-gray-600">Burn Rate</p>
                    <p className="text-2xl font-bold text-amber-700">$180K</p>
                    <p className="text-xs text-green-600">↓ 8% optimized</p>
                  </div>
                </div>

                {/* AI Query example */}
                <div className="bg-gradient-to-r from-gray-50 to-gray-100/50 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-4 h-4 text-teal-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Ask Ryzup AI</p>
                      <p className="text-gray-700 font-medium">"Can we afford 3 new hires this quarter?"</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-teal-100"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <BarChart3 className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Forecast</p>
                  <p className="text-sm font-semibold text-gray-900">+24% Growth</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <ContactModal open={contactModalOpen} onOpenChange={setContactModalOpen} />
    </section>
  );
};

export default HeroSection;
