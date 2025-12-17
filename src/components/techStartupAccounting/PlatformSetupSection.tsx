import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  LayoutGrid, 
  Receipt, 
  ClipboardCheck, 
  Zap,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { ContactModal } from "@/components/ui/contact-modal";
import { useState } from "react";

const features = [
  {
    icon: LayoutGrid,
    text: "Chart of accounts designed for SaaS and product-led growth"
  },
  {
    icon: Receipt,
    text: "Billing and collections mapped to revenue policies and dunning rules"
  },
  {
    icon: ClipboardCheck,
    text: "Close checklist with clear ownership and reviewer sign-offs"
  },
  {
    icon: Zap,
    text: "Integrations and automations that reduce manual work"
  }
];

export const PlatformSetupSection = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <section className="py-24 bg-gradient-to-br from-indigo-50 via-purple-50 to-cyan-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold mb-4">
              Technical Setup
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Platform and Workflow Setup
            </h2>
            
            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-slate-700 font-medium pt-2">{feature.text}</p>
                </motion.div>
              ))}
            </div>

            <Button
              size="lg"
              className="bg-indigo-600 hover:bg-indigo-700 text-white"
              onClick={() => setIsContactModalOpen(true)}
            >
              Get a Quick Systems Review
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-red-400 rounded-full" />
                <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                <div className="w-3 h-3 bg-green-400 rounded-full" />
                <span className="text-slate-400 text-sm ml-2">workflow-setup.config</span>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded-lg border border-emerald-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span className="text-slate-700">Chart of Accounts → Configured</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded-lg border border-emerald-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span className="text-slate-700">Revenue Recognition → Active</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded-lg border border-emerald-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span className="text-slate-700">Billing Integration → Connected</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-indigo-50 rounded-lg border border-indigo-200">
                  <Zap className="w-5 h-5 text-indigo-600" />
                  <span className="text-slate-700">Automations → 12 Active Rules</span>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>

      <ContactModal
        open={isContactModalOpen}
        onOpenChange={setIsContactModalOpen}
      />
    </section>
  );
};
