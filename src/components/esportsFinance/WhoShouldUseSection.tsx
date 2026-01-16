import { motion } from "framer-motion";
import { 
  Gamepad2, 
  Trophy, 
  Smartphone, 
  Globe, 
  Building2,
  HelpCircle,
  CheckCircle2
} from "lucide-react";

const idealUsers = [
  { icon: Gamepad2, text: "Game studios and publishers" },
  { icon: Trophy, text: "Esports teams and tournament organisers" },
  { icon: Smartphone, text: "Mobile, PC, and console game developers" },
  { icon: Globe, text: "Web3 and play-to-earn gaming platforms" },
  { icon: Building2, text: "Gaming companies expanding or operating from Singapore" },
];

const questions = [
  "Which games, titles, or events are profitable?",
  "How predictable is our monetisation?",
  "Can we fund development and live operations sustainably?",
];

const WhoShouldUseSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Who Should Use{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-fuchsia-600">
                Gaming Finance Services?
              </span>
            </h2>
            
            <p className="text-lg text-slate-600 mb-8">
              These services are ideal for gaming businesses that need specialised 
              financial expertise to navigate the unique challenges of the interactive entertainment industry.
            </p>

            <div className="space-y-4">
              {idealUsers.map((user, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-purple-50 transition-colors duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-fuchsia-500 flex items-center justify-center flex-shrink-0">
                    <user.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-slate-700 font-medium">{user.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-purple-600 to-fuchsia-600 rounded-3xl p-8 lg:p-10 text-white">
              <div className="flex items-center gap-3 mb-6">
                <HelpCircle className="w-8 h-8" />
                <h3 className="text-2xl font-bold">Do You Need Gaming Finance?</h3>
              </div>
              
              <p className="text-purple-100 mb-8 text-lg">
                If your business struggles to answer these questions, you need gaming-specific finance leadership:
              </p>

              <div className="space-y-4">
                {questions.map((question, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4"
                  >
                    <CheckCircle2 className="w-6 h-6 text-purple-200 flex-shrink-0 mt-0.5" />
                    <span className="text-white font-medium">{question}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/20">
                <p className="text-purple-100 italic">
                  "Gaming-specific finance leadership brings the clarity needed for sustainable growth."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoShouldUseSection;
