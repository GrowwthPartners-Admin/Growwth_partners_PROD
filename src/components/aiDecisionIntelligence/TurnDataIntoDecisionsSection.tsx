import { motion } from "framer-motion";
import { MessageSquare, TrendingUp, BarChart3, Lightbulb, ArrowRight } from "lucide-react";

export const TurnDataIntoDecisionsSection = () => {
  const capabilities = [
    {
      icon: MessageSquare,
      text: 'Ask questions like "How is my cash flow trending" and get a projected view with suggested actions.',
    },
    {
      icon: TrendingUp,
      text: 'Test decisions such as "Should I hire a new operations manager" and see the budget impact instantly.',
    },
    {
      icon: BarChart3,
      text: "Get forward looking views of your next quarter based on current trends, not guesses.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-brand-orange/10 px-4 py-2 rounded-full mb-6">
              <Lightbulb className="w-4 h-4 text-brand-orange" />
              <span className="text-brand-orange text-sm font-medium">AI Decision Intelligence</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Turn Your Finance Data Into{" "}
              <span className="text-brand-blue">Decisions</span>, Not Just Reports
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              CFOs today handle more than reporting. You are expected to guide strategy, protect cash and answer complex questions on the spot. Manual spreadsheets and static reports cannot keep up.
            </p>

            <p className="text-lg text-gray-700 font-medium mb-8">
              Ryzup.ai acts like an AI powered decision partner for CFOs in Singapore:
            </p>

            <div className="space-y-5">
              {capabilities.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-blue to-blue-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-gray-700 leading-relaxed pt-2">{item.text}</p>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8 text-lg font-semibold text-brand-blue flex items-center gap-2"
            >
              This is AI decision intelligence for CFOs built directly into your daily workflow.
            </motion.p>
          </motion.div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl p-8 shadow-xl">
              {/* Query example */}
              <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-brand-blue flex items-center justify-center">
                    <MessageSquare className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-500 text-sm">You asked:</span>
                </div>
                <p className="text-gray-800 font-medium text-lg">
                  "Should I hire a new operations manager this quarter?"
                </p>
              </div>

              {/* AI Response */}
              <div className="bg-gradient-to-br from-brand-blue to-blue-600 rounded-2xl p-6 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <Lightbulb className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white/80 text-sm">AI CFO Analysis</span>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center bg-white/10 rounded-xl p-3">
                    <span className="text-white/80">Annual Cost Impact</span>
                    <span className="font-bold">-$95,000</span>
                  </div>
                  <div className="flex justify-between items-center bg-white/10 rounded-xl p-3">
                    <span className="text-white/80">Runway Change</span>
                    <span className="font-bold text-yellow-300">-2.3 months</span>
                  </div>
                  <div className="flex justify-between items-center bg-white/10 rounded-xl p-3">
                    <span className="text-white/80">Recommendation</span>
                    <span className="font-bold text-green-300">Delay to Q3</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-brand-blue/10 to-brand-orange/10 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
