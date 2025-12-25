import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCountry } from "@/contexts/CountryContext";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactModal } from "@/components/ui/contact-modal";
import { CountrySwitcher } from "@/components/CountrySwitcher";

// Import the company logo
import companyLogo from "/lovable-uploads/5f2bc1cf-2bab-424d-8245-eb52af504603.png";

// Navigation dropdown data, update for country-specific slugs:
const navItems = [
  {
    title: "Home",
    path: "/",
    dropdown: false,
  },
  {
    title: "Services",
    path: "/accounting",
    dropdown: true,
    items: [
      { title: "Accounting Services", path: "/accounting" },
      { title: "Bookkeeping", path: "/bookkeeping" },
      { title: "Payroll", path: "/payroll" },
      { title: "Taxation & Compliance", path: "/taxation" },
      { title: "Part Time CFO", path: "/part-time-cfo" },
      { title: "Cash Flow Modelling", path: "/cash-flow" },
      { title: "Incorporation Services", path: "/incorporation" },
      { title: "Incorporation for Foreigners", path: "/incorporation/foreigner" },
      { title: "ESOP Advisory Services", path: "/esop-advisory-singapore" },
      { title: "ESOP Valuation Services", path: "/esop-valuation-singapore" },
      { title: "Banking Solutions", path: "/simplified-banking-solutions" },
      { title: "Tech Startup Accounting", path: "/accounting-for-tech-start-ups-companies" },
      { title: "Ecommerce Accounting", path: "/ecommerce-accounting-services" },
      { title: "Fintech Finance Services", path: "/fintech-finance" },
      { title: "Tech Business Finance", path: "/tech-business-finance" },
      { title: "SaaS Finance Services", path: "/saas-finance" },
      { title: "Outsourced CFO Services", path: "/outsourced-cfo-services" },
      { title: "Startup CFO Services", path: "/startup-cfo-services" },
      { title: "SME CFO Services", path: "/sme-cfo-services" },
    ],
  },
  {
    title: "Contact Us",
    path: "/contact-us",
    dropdown: false,
  },
  {
    title: "AI in Finance",
    path: "/use-of-ai-in-finance",
    dropdown: true,
    items: [
      { title: "Use of AI in Finance", path: "/use-of-ai-in-finance" },
      {
        title: "Strategic Finance Support",
        path: "/strategic-finance-singapore",
      },
      {
        title: "Corporate Tax Filing",
        path: "/corporate-tax-filing-singapore",
      },
      {
        title: "Business Valuation Services",
        path: "/valuation-services-singapore",
      },
      {
        title: "AI Finance Workflow",
        path: "/ai-finance-workflow-singapore",
      },
      {
        title: "AI Financial Forecasting",
        path: "/ai-financial-forecasting-singapore",
      },
      {
        title: "AI Risk & Compliance",
        path: "/ai-risk-compliance-singapore",
      },
      {
        title: "AI Decision Intelligence",
        path: "/ai-decision-intelligence-singapore",
      },
      {
        title: "AI Advisory for Finance Transformation",
        path: "/ai-advisory-finance-transformation-singapore",
      },
      {
        title: "AI CFO Services",
        path: "/ai-cfo-services",
      },
    ],
  },
  {
    title: "Resources",
    path: "/achievements",
    dropdown: true,
    items: [
      {
        title: "About Us",
        path: "/about",
        dropdown: false,
      },
      { title: "Blog", path: "/blog" },
      { title: "Success Stories", path: "/success-stories" },
      { title: "Guide", path: "/guide" },
      { title: "Achievements & Awards", path: "/achievements" },
      { title: "In The News", path: "/news" },
    ],
  },
];

export const Navbar = () => {
  const { getCountryUrl } = useCountry();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = (title: string) => {
    if (openDropdown === title) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(title);
    }
  };

  // Close mobile menu
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container-custom py-3">
        <div className="flex items-center justify-between">
          {/* Logo - with navigation */}
          <div className="flex items-center">
            <Link to={getCountryUrl("/")} className="flex items-center ml-8" onClick={closeMobileMenu}>
              <img src={companyLogo} alt="Growwth Partners" className="h-11" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => (
              <div key={item.title} className="relative group">
                {item.dropdown ? (
                  <div className="flex flex-col">
                    <button
                      type="button"
                      className="px-3 py-2 text-gray-700 hover:text-brand-orange font-medium flex items-center"
                    >
                      {item.title}
                      <ChevronDown className="ml-1 w-4 h-4" />
                    </button>
                    <div className="absolute left-0 mt-10 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      <div className="bg-white rounded-md shadow-lg py-2">
                        {item.items?.map((subItem) => (
                          <Link
                            key={subItem.title}
                            to={getCountryUrl(subItem.path)}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-brand-orange"
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={getCountryUrl(item.path)}
                    className="px-3 py-2 text-gray-700 hover:text-brand-orange font-medium"
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Country Switcher & Contact Button */}
          <div className="hidden lg:flex items-center gap-4">
            <CountrySwitcher variant="dark" showLabel={true} style="dropdown" />
            <Button onClick={() => setContactModalOpen(true)} className="bg-brand-orange hover:bg-brand-orange/90 mr-4">
              Speak To An Expert
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden text-gray-700">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 border-t pt-4">
            {navItems.map((item) => (
              <div key={item.title} className="py-1">
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(item.title)}
                      className="flex justify-between items-center w-full py-2 text-gray-700"
                    >
                      <span>{item.title}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${openDropdown === item.title ? "rotate-180" : ""}`}
                      />
                    </button>
                    {openDropdown === item.title && (
                      <div className="pl-4 mt-1 border-l-2 border-gray-200">
                        {item.items?.map((subItem) => (
                          <Link
                            key={subItem.title}
                            to={getCountryUrl(subItem.path)}
                            onClick={closeMobileMenu}
                            className="block py-2 text-gray-600 hover:text-brand-orange"
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={getCountryUrl(item.path)}
                    onClick={closeMobileMenu}
                    className="block py-2 text-gray-700 hover:text-brand-orange"
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
            <div className="mt-4 space-y-3">
              <CountrySwitcher variant="dark" showLabel={true} style="dropdown" className="w-full" />
              <Button
                onClick={() => {
                  setContactModalOpen(true);
                  setMobileMenuOpen(false);
                }}
                className="w-full bg-brand-orange hover:bg-brand-orange/90"
              >
                Speak To An Expert
              </Button>
            </div>
          </nav>
        )}
      </div>

      <ContactModal open={contactModalOpen} onOpenChange={setContactModalOpen} />
    </header>
  );
};
