import { motion } from "framer-motion";
import { Building2, Calendar, AlertTriangle, Wrench, CheckCircle } from "lucide-react";

const UseCaseSection = () => {
  const caseStudy = {
    clientType: "Fintech Startup (Singapore)",
    situation: "Investor meeting scheduled in 10 days",
    challenges: [
      "Weak financial model",
      "Unclear cash runway",
      "Inconsistent assumptions",
    ],
    solutions: [
      "Rebuilt financial model",
      "Conducted scenario and sensitivity analysis",
      "Prepared investor-ready financial narrative",
    ],
    outcomes: [
      "Restored investor confidence",
      "Improved clarity on runway and capital needs",
      "Funding discussions progressed successfully",
    ],
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-orange-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-4">
            Real Results
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Practical Use Case
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-8xl mx-auto"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-t-3xl p-8 text-white">
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-3">
                <Building2 className="w-6 h-6 text-orange-400" />
                <div>
                  <span className="text-slate-400 text-sm">Client Type</span>
                  <p className="text-lg font-semibold">{caseStudy.clientType}</p>
                </div>
              </div>
              <div className="w-px h-12 bg-slate-700 hidden md:block" />
              <div className="flex items-center gap-3">
                <Calendar className="w-6 h-6 text-orange-400" />
                <div>
                  <span className="text-slate-400 text-sm">Situation</span>
                  <p className="text-lg font-semibold">{caseStudy.situation}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Grid */}
          <div className="bg-white rounded-b-3xl border border-t-0 overflow-hidden">
            <div className="grid md:grid-cols-3">
              {/* Challenges */}
              <div className="p-8 border-b md:border-b-0 md:border-r bg-red-50 font-bold">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Challenge</h3>
                </div>
                <ul className="space-y-4">
                  {caseStudy.challenges.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600">
                      <span className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solution */}
              <div className="p-8 border-b md:border-b-0 md:border-r bg-yellow-50 font-bold">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center">
                    <Wrench className="w-5 h-5 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Solution</h3>
                </div>
                <ul className="space-y-4">
                  {caseStudy.solutions.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600">
                      <span className="w-2 h-2 rounded-full bg-orange-400 mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outcome */}
              <div className="p-8 bg-emerald-50 font-bold">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Outcome</h3>
                </div>
                <ul className="space-y-4">
                  {caseStudy.outcomes.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UseCaseSection;
