import { BadgeHelp, Sparkles, ShieldCheck, LifeBuoy } from "lucide-react";

export type FaqItem = { q: string; a: string };
export type FaqCategory = {
  id: string;
  title: string;
  description: string;
  icon: any;
  items: FaqItem[];
};

export const FAQ_CATEGORIES: FaqCategory[] = [
  {
    id: "getting-started",
    title: "Getting Started (CFO Services)",
    description: "How to begin, onboarding, data access, and first deliverables.",
    icon: Sparkles,
    items: [
      {
        q: "How does CFO onboarding work?",
        a: "We start with a kickoff to understand your business model, KPIs, and reporting needs. Then we connect/validate your data sources and align on cadence, owners, and timelines.",
      },
      {
        q: "What information do you need from us to start?",
        a: "Typically: latest financial statements, access to accounting system, chart of accounts, revenue model details, current budgets/forecasts (if any), and operational metrics.",
      },
      {
        q: "When will we see the first outputs?",
        a: "Initial diagnostic and reporting baseline usually comes within the first 1–2 cycles depending on data readiness.",
      },
    ],
  },
  {
    id: "reporting",
    title: "Reporting & Dashboards",
    description: "Monthly reporting packs, KPI dashboards, board-ready summaries.",
    icon: BadgeHelp,
    items: [
      {
        q: "What does a standard monthly CFO pack include?",
        a: "P&L, cash flow, balance sheet highlights, KPI dashboard, variance analysis vs budget/forecast, runway/burn, and action items for leadership.",
      },
      {
        q: "Can you tailor dashboards to our KPIs?",
        a: "Yes. We align on your North Star metrics and build dashboards accordingly (MRR/ARR, GM%, CAC/LTV, utilization, churn, pipeline coverage, etc.).",
      },
      {
        q: "Do you support board/investor reporting?",
        a: "Yes. We prepare board-ready summaries with a clear narrative, charts, key decisions, and asks.",
      },
    ],
  },
  {
    id: "forecasting",
    title: "Budgeting & Forecasting",
    description: "Budgets, rolling forecasts, scenario planning, sensitivity analysis.",
    icon: ShieldCheck,
    items: [
      {
        q: "How do you build forecasts if we don’t have a model yet?",
        a: "We start with a driver-based model, then add scenarios and refine accuracy over time as assumptions are validated.",
      },
      {
        q: "Can we run multiple scenarios (base/best/worst)?",
        a: "Yes. We set up a base case plus sensitivity toggles to support confident decision-making.",
      },
      {
        q: "How do you handle seasonality and one-off items?",
        a: "We separate one-offs, incorporate seasonality factors where relevant, and keep assumptions transparent for iteration.",
      },
    ],
  },
  {
    id: "cash-runway",
    title: "Cash Flow & Runway",
    description: "Cash planning, runway tracking, working capital insights.",
    icon: LifeBuoy,
    items: [
      {
        q: "How do you calculate runway?",
        a: "Runway is based on current cash divided by projected net burn, adjusted for cash timing (collections, payroll, taxes, payables).",
      },
      {
        q: "Can you help improve collections and working capital?",
        a: "Yes—by analyzing invoice aging, payment terms, collection cycles, and vendor terms, then tracking improvements.",
      },
      {
        q: "Do you support treasury and bank reporting?",
        a: "Yes. We can set up cash visibility across accounts and build weekly cash dashboards for leadership.",
      },
    ],
  },
];
