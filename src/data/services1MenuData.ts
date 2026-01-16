import { 
  Calculator, 
  BookOpen, 
  DollarSign, 
  FileText, 
  TrendingUp, 
  Building2, 
  Globe, 
  Award, 
  Briefcase, 
  Users, 
  Laptop, 
  ShoppingCart, 
  Coins, 
  Cloud, 
  Bitcoin, 
  UserCheck, 
  Clock, 
  Puzzle, 
  Monitor, 
  Timer, 
  ExternalLink, 
  Rocket, 
  Building, 
  Wifi, 
  UsersRound, 
  ClipboardList, 
  Receipt,
  Gamepad2,
  Landmark,
  type LucideIcon
} from "lucide-react";

export interface ServiceItem {
  title: string;
  path: string;
  icon: LucideIcon;
}

export interface ServiceCategory {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  services: ServiceItem[];
}

export const services1Categories: ServiceCategory[] = [
  {
    id: "core-finance",
    title: "Core Finance Services",
    icon: Calculator,
    description: "Essential financial services for your business",
    services: [
      { title: "Accounting Services", path: "/accounting", icon: Calculator },
      { title: "Bookkeeping", path: "/bookkeeping", icon: BookOpen },
      { title: "Payroll", path: "/payroll", icon: DollarSign },
      { title: "Taxation & Compliance", path: "/taxation", icon: FileText },
      { title: "Cash Flow Modelling", path: "/cash-flow", icon: TrendingUp },
      { title: "Outsourced Bookkeeping", path: "/outsourced-bookkeeping", icon: ClipboardList },
      { title: "Outsourced Payroll", path: "/outsourced-payroll", icon: Receipt },
    ],
  },
  {
    id: "cfo-advisory",
    title: "CFO & Advisory",
    icon: Briefcase,
    description: "Strategic CFO services for growth",
    services: [
      { title: "Part Time CFO", path: "/part-time-cfo", icon: Clock },
      { title: "On-Demand CFO Services", path: "/on-demand-cfo-services", icon: UserCheck },
      { title: "Part-Time CFO Services", path: "/part-time-cfo-services", icon: Timer },
      { title: "Fractional CFO Services", path: "/fractional-cfo-services", icon: Puzzle },
      { title: "Virtual CFO Services", path: "/virtual-cfo-services", icon: Monitor },
      { title: "Interim CFO Services", path: "/interim-cfo-services", icon: Clock },
      { title: "Outsourced CFO Services", path: "/outsourced-cfo-services", icon: ExternalLink },
      { title: "Startup CFO Services", path: "/startup-cfo-services", icon: Rocket },
      { title: "SME CFO Services", path: "/sme-cfo-services", icon: Building },
    ],
  },
  {
    id: "finance-teams",
    title: "Finance Teams",
    icon: Users,
    description: "Dedicated finance team solutions",
    services: [
      { title: "Remote CFO & Finance Team", path: "/remote-cfo-finance-team", icon: Wifi },
      { title: "Fractional Finance Team", path: "/fractional-finance-team", icon: Puzzle },
      { title: "Part-Time Finance Team", path: "/part-time-finance-team", icon: Clock },
      { title: "Virtual Finance Team", path: "/virtual-finance-team", icon: Monitor },
      { title: "Startup Finance Services", path: "/startup-finance-services", icon: Rocket },
      { title: "SME Finance Services", path: "/sme-finance-services", icon: Building },
      { title: "Family Office Finance", path: "/family-office-finance-services", icon: Briefcase },
    ],
  },
  {
    id: "industry-solutions",
    title: "Industry Solutions",
    icon: Laptop,
    description: "Specialized solutions by industry",
    services: [
      { title: "Tech Startup Accounting", path: "/accounting-for-tech-start-ups-companies", icon: Laptop },
      { title: "Ecommerce Accounting", path: "/ecommerce-accounting-services", icon: ShoppingCart },
      { title: "Ecommerce Finance Services", path: "/ecommerce-finance-services", icon: ShoppingCart },
      { title: "Trading & Distribution Finance", path: "/trading-distribution-finance", icon: ShoppingCart },
      { title: "Professional Services Finance", path: "/professional-services-finance", icon: Briefcase },
      { title: "MedTech Finance Services", path: "/medtech-finance", icon: Laptop },
      { title: "Fintech Finance Services", path: "/fintech-finance", icon: Coins },
      { title: "Tech Business Finance", path: "/tech-business-finance", icon: Laptop },
      { title: "SaaS Finance Services", path: "/saas-finance", icon: Cloud },
      { title: "Crypto & Web3 Finance", path: "/crypto-web3-finance", icon: Bitcoin },
      { title: "EdTech Finance Services", path: "/edtech-finance", icon: Laptop },
      { title: "Esports & Gaming Finance", path: "/esports-finance", icon: Gamepad2 },
      { title: "VC & Fund Finance", path: "/vc-fund-finance", icon: Landmark },
    ],
  },
  {
    id: "specialised-services",
    title: "Specialised Services",
    icon: Award,
    description: "Expert specialized financial services",
    services: [
      { title: "Incorporation Services", path: "/incorporation", icon: Building2 },
      { title: "Incorporation for Foreigners", path: "/incorporation/foreigner", icon: Globe },
      { title: "ESOP Advisory Services", path: "/esop-advisory-singapore", icon: UsersRound },
      { title: "ESOP Valuation Services", path: "/esop-valuation-singapore", icon: Award },
      { title: "Banking Solutions", path: "/simplified-banking-solutions", icon: Building2 },
    ],
  },
];
