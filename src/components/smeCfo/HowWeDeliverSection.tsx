import React from "react";
import { TrendingUp, Wallet, PieChart, BarChart3, Target } from "lucide-react";

const deliverables = [
  {
    number: "01",
    icon: TrendingUp,
    title: "Financial Planning & Forecasting",
    items: [
      "Annual budgets and rolling forecasts",
      "Short- and mid-term cash flow projections",
      "Scenario and sensitivity analysis",
    ],
  },
  {
    number: "02",
    icon: Wallet,
    title: "Cash Flow & Working Capital Management",
    items: [
      "Monthly cash flow forecasting",
      "Receivables and payables optimisation",
      "Liquidity risk management",
    ],
  },
  {
    number: "03",
    icon: PieChart,
    title: "Profitability & Cost Control",
    items: [
      "Product, service, and department-level margin analysis",
      "Cost leakage identification",
      "Pricing and cost optimisation strategies",
    ],
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Management & Performance Reporting",
    items: [
      "Monthly MIS (P&L, balance sheet, cash flow)",
      "KPI dashboards aligned to business goals",
      "Variance and trend analysis",
    ],
  },
  {
    number: "05",
    icon: Target,
    title: "Strategic Decision Support",
    items: [
      "Expansion and investment decisions",
      "Hiring and resource planning",
      "Capital allocation guidance",
    ],
  },
];

const HowWeDeliverSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-amber-50/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              How Growwth Partners Delivers SME CFO Value
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Our SME CFO services are designed to bring structure, control, and
              predictability to your finance function.
            </p>
          </div>

          <div className="space-y-8 font-bold">
            {deliverables.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-slate-100"
              >
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/3 bg-gradient-to-br from-amber-500 to-orange-600 p-8 flex items-center">
                    <div className="flex items-center gap-6">
                      <span className="text-5xl font-bold text-white/30">
                        {item.number}
                      </span>
                      <div>
                        <h3 className="text-xl font-bold text-white">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="lg:w-2/3 p-8">
                    <ul className="space-y-4">
                      {item.items.map((listItem, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <div className="w-2 h-2 bg-amber-500 rounded-full" />
                          </div>
                          <span className="text-slate-700">{listItem}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeDeliverSection;
