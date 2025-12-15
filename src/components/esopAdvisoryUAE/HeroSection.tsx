import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, TrendingUp, Sparkles } from "lucide-react";
import { ContactModal } from "@/components/ui/contact-modal";
import esopHeroImage from "@/assets/esop-advisory.jpg";

const HeroSection = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50/50 to-yellow-50/40">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 right-[10%] w-96 h-96 bg-gradient-to-br from-amber-300/30 to-orange-300/20 rounded-full blur-3xl" 
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-0 left-[5%] w-80 h-80 bg-gradient-to-tr from-yellow-300/30 to-amber-300/20 rounded-full blur-3xl" 
        />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmNTk1MDYiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-60"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-amber-200/60 rounded-full px-5 py-2.5 mb-8 shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span className="text-sm font-semibold text-amber-700">ESOP Advisory Services</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-[1.1]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Crafting,</span> executing and managing{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Employee</span> Stock Incentive{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Plans</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-700 mb-4 leading-relaxed">
              Retain talent, motivate teams, and build an ownership culture with expert ESOP advisory tailored for UAE businesses.
            </p>

            <p className="text-base text-gray-600 mb-8">
              We support startups and established companies in the UAE and globally to optimise compensation structures and implement ESOPs with confidence.
            </p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button
                size="lg"
                onClick={() => setContactModalOpen(true)}
                className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-6 text-lg rounded-full shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/40 transition-all duration-300 group"
              >
                Enquire Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Right - Image with floating elements */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-amber-500/20">
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-orange-500/10 mix-blend-overlay z-10 rounded-3xl"></div>
              <img
                src={esopHeroImage}
                alt="ESOP Advisory Services UAE"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
            </div>

            {/* Floating Card - Bottom Left */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-6 -left-6 z-20"
            >
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="flex items-center gap-3 bg-white rounded-2xl p-4 shadow-xl shadow-amber-500/15 backdrop-blur-sm border border-amber-100/50"
              >
                <div className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 p-3 rounded-xl">
                  <Users className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <p className="text-xl font-bold text-gray-900">500+</p>
                  <p className="text-sm text-gray-600">Companies Served</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Floating Card - Top Right */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute -top-6 -right-6 z-20"
            >
              <motion.div 
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="flex items-center gap-3 bg-white rounded-2xl p-4 shadow-xl shadow-amber-500/15 backdrop-blur-sm border border-amber-100/50"
              >
                <div className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 p-3 rounded-xl">
                  <TrendingUp className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <p className="text-xl font-bold text-gray-900">1000+</p>
                  <p className="text-sm text-gray-600">Plans Implemented</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Floating Badge - Middle Right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-20"
            >
              <motion.div 
                animate={{ rotate: [0, 5, 0, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-4 shadow-xl shadow-orange-500/30"
              >
                <Award className="h-7 w-7 text-white" />
              </motion.div>
            </motion.div>

            {/* Decorative blur elements */}
            <div className="absolute -bottom-12 -right-12 w-56 h-56 bg-amber-400/20 rounded-full filter blur-3xl"></div>
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-orange-300/20 rounded-full filter blur-3xl"></div>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20"
        >
          {[
            { icon: Users, label: "Companies Served", value: "500+", color: "from-amber-500 to-orange-500" },
            { icon: Award, label: "Years Experience", value: "15+", color: "from-orange-500 to-amber-500" },
            { icon: TrendingUp, label: "Plans Implemented", value: "1000+", color: "from-amber-600 to-orange-600" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-amber-100/60 shadow-lg shadow-amber-500/10 hover:shadow-xl hover:shadow-amber-500/15 transition-all duration-300 group"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="w-7 h-7 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <ContactModal 
        open={contactModalOpen} 
        onOpenChange={setContactModalOpen}
      />
    </section>
  );
};

export default HeroSection;
