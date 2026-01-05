import React from "react";
import { motion } from "framer-motion";
import {
  Calculator,
  Shield,
  FileText,
  BarChart3,
  ClipboardCheck,
} from "lucide-react";

const deliveryAreas = [
  {
    icon: Calculator,
    number: "01",
    title: "Payroll Processing & Salary Calculations",
    items: [
      "Monthly payroll calculations",
      "Overtime, bonuses, and deductions handling",
      "Error checks and validation controls",
    ],
  },
  {
    icon: Shield,
    number: "02",
    title: "Statutory Compliance Management",
    items: [
      "CPF contributions and filings",
      "Tax deductions and reporting",
      "Alignment with Singapore employment regulations",
    ],
  },
  {
    icon: FileText,
    number: "03",
    title: "Payslips & Employee Records",
    items: [
      "Secure payslip generation",
      "Payroll summaries and reports",
      "Centralised payroll documentation",
    ],
  },
  {
    icon: BarChart3,
    number: "04",
    title: "Payroll Reconciliations & Reporting",
    items: [
      "Payroll-to-accounting reconciliations",
      "Monthly payroll expense reporting",
      "Integration with finance and accounting teams",
    ],
  },
  {
    icon: ClipboardCheck,
    number: "05",
    title: "Audit & Compliance Readiness",
    items: [
      "Clean payroll records",
      "Support during audits and inspections",
      "Compliance documentation maintained at all times",
    ],
  },
];

export const HowWeDeliverSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium text-orange-600 bg-orange-100 rounded-full">
            Our Approach
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            How Growwth Partners Delivers Outsourced Payroll Value
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our Outsourced Payroll services are built on accuracy, compliance, and
            accountability.
          </p>
        </motion.div>

        {/* Cards: 3 + 2 centered */}
        <div className="space-y-8">
          {/* Row 1 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {deliveryAreas.slice(0, 3).map((area, index) => (
              <motion.div
                key={area.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="group relative p-6 bg-gradient-to-br from-slate-50 to-white rounded-2xl border shadow border-orange-300 hover:shadow-xl transition-all duration-300 h-full"
              >
                <div className="absolute top-4 right-4 text-5xl font-bold text-slate-100 group-hover:text-orange-100 transition-colors">
                  {area.number}
                </div>

                <div className="relative">
                  <div className="p-3 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl w-fit mb-4 shadow-lg shadow-orange-200">
                    <area.icon className="h-6 w-6 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-4 pr-12">
                    {area.title}
                  </h3>

                  <ul className="space-y-3">
                    {area.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-slate-600"
                      >
                        <span className="h-1.5 w-1.5 bg-orange-500 rounded-full mt-2 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Row 2 (centered) */}
          <div className="flex flex-col md:flex-row justify-center gap-8">
            {deliveryAreas.slice(3).map((area, index) => (
              <motion.div
                key={area.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 3) }}
                className="w-full md:max-w-[520px]"
              >
                <div className="group relative p-6 bg-gradient-to-br from-slate-50 to-white rounded-2xl border shadow border-orange-300 hover:shadow-xl transition-all duration-300 h-full">
                  <div className="absolute top-4 right-4 text-5xl font-bold text-slate-100 group-hover:text-orange-100 transition-colors">
                    {area.number}
                  </div>

                  <div className="relative">
                    <div className="p-3 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl w-fit mb-4 shadow-lg shadow-orange-200">
                      <area.icon className="h-6 w-6 text-white" />
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-4 pr-12">
                      {area.title}
                    </h3>

                    <ul className="space-y-3">
                      {area.items.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-slate-600"
                        >
                          <span className="h-1.5 w-1.5 bg-orange-500 rounded-full mt-2 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
