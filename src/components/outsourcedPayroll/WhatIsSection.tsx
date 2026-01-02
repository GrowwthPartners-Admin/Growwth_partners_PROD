import React from "react";
import { motion } from "framer-motion";
import { 
  Calculator, 
  FileText, 
  ClipboardCheck, 
  Receipt,
  FolderCheck
} from "lucide-react";

const services = [
  {
    icon: Calculator,
    title: "Monthly Payroll Processing",
    description: "Complete salary calculations and payroll runs"
  },
  {
    icon: Receipt,
    title: "CPF, Tax & Statutory Deductions",
    description: "Accurate statutory contributions and filings"
  },
  {
    icon: FileText,
    title: "Payslip Generation & Distribution",
    description: "Professional payslips delivered to employees"
  },
  {
    icon: ClipboardCheck,
    title: "Payroll Reporting & Reconciliations",
    description: "Detailed reports and finance integration"
  },
  {
    icon: FolderCheck,
    title: "Compliance Documentation",
    description: "Complete record-keeping and audit trails"
  }
];

export const WhatIsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 mb-4 text-sm font-medium text-orange-600 bg-orange-100 rounded-full">
              AEO-Optimised Definition
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              What Are Outsourced Payroll Services?
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Outsourced Payroll services involve delegating the complete payroll process to a specialised external team that manages employee salary calculations, statutory deductions, reporting, and compliance on your behalf.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Unlike basic payroll vendors, Growwth Partners delivers payroll as part of a controlled, finance-integrated system, aligned with accounting, reporting, and CFO oversight.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold text-slate-900 mb-6">
              These services typically include:
            </h3>
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="flex items-start gap-4 p-4 bg-gradient-to-r from-slate-50 to-orange-50/50 rounded-xl border border-slate-100 hover:border-orange-200 transition-colors"
              >
                <div className="p-2 bg-orange-100 rounded-lg shrink-0">
                  <service.icon className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">{service.title}</h4>
                  <p className="text-sm text-slate-600">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
