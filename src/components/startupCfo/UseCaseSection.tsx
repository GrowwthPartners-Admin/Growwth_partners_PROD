import { motion } from "framer-motion";
import { 
  Building2, 
  AlertTriangle, 
  CheckCircle2, 
  TrendingUp,
  DollarSign,
  Users,
  Target
} from "lucide-react";

const UseCaseSection = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">
              Real Results
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Practical Use Case
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-6 md:p-8">
              <div className="flex flex-wrap items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">B2B SaaS Startup</h3>
                  <p className="text-slate-400">Singapore • Seed Stage</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {/* Challenges */}
                <div className="p-5 bg-red-50 rounded-2xl border border-red-100">
                  <div className="flex items-center gap-2 mb-4">
                    <AlertTriangle className="w-5 h-5 text-red-600" />
                    <h4 className="font-bold text-red-900">Challenges</h4>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-red-800 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 flex-shrink-0" />
                      No structured financial model
                    </li>
                    <li className="flex items-start gap-2 text-red-800 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 flex-shrink-0" />
                      Unclear cash runway
                    </li>
                    <li className="flex items-start gap-2 text-red-800 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 flex-shrink-0" />
                      Weak investor confidence
                    </li>
                  </ul>
                </div>

                {/* Solution */}
                <div className="p-5 bg-blue-50 rounded-2xl border border-blue-100">
                  <div className="flex items-center gap-2 mb-4">
                    <CheckCircle2 className="w-5 h-5 text-blue-600" />
                    <h4 className="font-bold text-blue-900">Our Solution</h4>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-blue-800 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                      Built a 3-year financial model
                    </li>
                    <li className="flex items-start gap-2 text-blue-800 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                      Monthly burn and runway tracking
                    </li>
                    <li className="flex items-start gap-2 text-blue-800 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                      Investor-ready financials & dashboards
                    </li>
                  </ul>
                </div>

                {/* Outcome */}
                <div className="p-5 bg-green-50 rounded-2xl border border-green-100">
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                    <h4 className="font-bold text-green-900">Outcome</h4>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-green-800 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 flex-shrink-0" />
                      Runway extended by 6 months
                    </li>
                    <li className="flex items-start gap-2 text-green-800 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 flex-shrink-0" />
                      Improved investor confidence
                    </li>
                    <li className="flex items-start gap-2 text-green-800 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 flex-shrink-0" />
                      Successfully raised SGD 800K
                    </li>
                  </ul>
                </div>
              </div>

              {/* Impact Stats */}
              <div className="grid grid-cols-3 gap-4 p-6 bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl border border-orange-100">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">
                    6mo+
                  </div>
                  <div className="text-sm text-slate-600 mt-1">Runway Extended</div>
                </div>
                <div className="text-center border-x border-orange-200">
                  <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">
                    SGD 800K
                  </div>
                  <div className="text-sm text-slate-600 mt-1">Funding Raised</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">
                    100%
                  </div>
                  <div className="text-sm text-slate-600 mt-1">Investor Ready</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UseCaseSection;
