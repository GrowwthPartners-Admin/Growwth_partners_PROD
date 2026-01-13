import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronRight, ArrowRight } from "lucide-react";
import { useCountry } from "@/contexts/CountryContext";
import { services1Categories, type ServiceCategory } from "@/data/services1MenuData";
import { cn } from "@/lib/utils";

interface Services1MegaMenuProps {
  onNavigate?: () => void;
}

export const Services1MegaMenu = ({ onNavigate }: Services1MegaMenuProps) => {
  const { getCountryUrl } = useCountry();
  const [activeCategory, setActiveCategory] = useState<string>("core-finance");
  const [isOpen, setIsOpen] = useState(false);

  const activeServices = services1Categories.find(cat => cat.id === activeCategory)?.services || [];

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Trigger Button */}
      <button
        type="button"
        className="px-3 py-2 text-gray-700 hover:text-brand-orange font-medium flex items-center transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        Services1
        <ChevronDown className={cn(
          "ml-1 w-4 h-4 transition-transform duration-200",
          isOpen && "rotate-180"
        )} />
      </button>

      {/* Desktop Mega Menu */}
      <div 
        className={cn(
          "absolute left-0 top-full pt-2 z-50 transition-all duration-300",
          isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
        )}
      >
        <div className="bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden min-w-[680px]">
          <div className="flex">
            {/* Categories Panel */}
            <div className="w-[240px] bg-gradient-to-b from-slate-50 to-slate-100 border-r border-gray-200 py-3">
              <div className="px-4 pb-2 mb-2 border-b border-gray-200">
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Categories
                </span>
              </div>
              {services1Categories.map((category) => {
                const Icon = category.icon;
                const isActive = activeCategory === category.id;
                return (
                  <button
                    key={category.id}
                    onMouseEnter={() => setActiveCategory(category.id)}
                    onClick={() => setActiveCategory(category.id)}
                    className={cn(
                      "w-full px-4 py-3 flex items-center gap-3 text-left transition-all duration-200 group",
                      isActive 
                        ? "bg-white text-brand-orange border-l-3 border-brand-orange shadow-sm" 
                        : "text-gray-700 hover:bg-white/60 hover:text-brand-orange border-l-3 border-transparent"
                    )}
                  >
                    <div className={cn(
                      "w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200",
                      isActive 
                        ? "bg-brand-orange/10 text-brand-orange" 
                        : "bg-gray-100 text-gray-500 group-hover:bg-brand-orange/10 group-hover:text-brand-orange"
                    )}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-sm font-medium block truncate">{category.title}</span>
                      <span className="text-xs text-gray-400 block truncate">{category.services.length} services</span>
                    </div>
                    <ChevronRight className={cn(
                      "w-4 h-4 transition-all duration-200",
                      isActive ? "text-brand-orange translate-x-1" : "text-gray-300 group-hover:text-brand-orange"
                    )} />
                  </button>
                );
              })}
            </div>

            {/* Services Panel */}
            <div className="flex-1 p-5 bg-white">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {services1Categories.find(c => c.id === activeCategory)?.title}
                </h3>
                <p className="text-sm text-gray-500">
                  {services1Categories.find(c => c.id === activeCategory)?.description}
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                {activeServices.map((service) => {
                  const Icon = service.icon;
                  return (
                    <Link
                      key={service.path}
                      to={getCountryUrl(service.path)}
                      onClick={() => {
                        setIsOpen(false);
                        onNavigate?.();
                      }}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700 hover:bg-gradient-to-r hover:from-brand-orange/5 hover:to-brand-orange/10 hover:text-brand-orange transition-all duration-200 group"
                    >
                      <div className="w-8 h-8 rounded-md bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-brand-orange/10 group-hover:text-brand-orange transition-all duration-200">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-medium flex-1">{service.title}</span>
                      <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-brand-orange" />
                    </Link>
                  );
                })}
              </div>

              {/* View All Link */}
              <div className="mt-4 pt-4 border-t border-gray-100">
                <Link
                  to={getCountryUrl("/services")}
                  onClick={() => {
                    setIsOpen(false);
                    onNavigate?.();
                  }}
                  className="inline-flex items-center gap-2 text-sm font-medium text-brand-orange hover:text-brand-orange/80 transition-colors"
                >
                  View All Services
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Mobile Version - Accordion Style
interface MobileServices1MenuProps {
  isOpen: boolean;
  onToggle: () => void;
  onNavigate: () => void;
}

export const MobileServices1Menu = ({ isOpen, onToggle, onNavigate }: MobileServices1MenuProps) => {
  const { getCountryUrl } = useCountry();
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  return (
    <div className="py-1">
      <button
        onClick={onToggle}
        className="flex justify-between items-center w-full py-2 text-gray-700"
      >
        <span>Services1</span>
        <ChevronDown
          className={cn(
            "w-4 h-4 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>

      {isOpen && (
        <div className="pl-2 mt-1 space-y-1">
          {services1Categories.map((category) => {
            const Icon = category.icon;
            const isCategoryExpanded = expandedCategory === category.id;
            
            return (
              <div key={category.id} className="border-l-2 border-gray-200">
                <button
                  onClick={() => toggleCategory(category.id)}
                  className={cn(
                    "flex items-center justify-between w-full py-2 pl-4 pr-2 text-left transition-colors",
                    isCategoryExpanded ? "text-brand-orange" : "text-gray-600 hover:text-brand-orange"
                  )}
                >
                  <div className="flex items-center gap-2">
                    <Icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{category.title}</span>
                  </div>
                  <ChevronRight
                    className={cn(
                      "w-4 h-4 transition-transform duration-200",
                      isCategoryExpanded && "rotate-90"
                    )}
                  />
                </button>

                {isCategoryExpanded && (
                  <div className="pl-6 pb-2 space-y-1">
                    {category.services.map((service) => {
                      const ServiceIcon = service.icon;
                      return (
                        <Link
                          key={service.path}
                          to={getCountryUrl(service.path)}
                          onClick={onNavigate}
                          className="flex items-center gap-2 py-2 pl-2 text-sm text-gray-500 hover:text-brand-orange transition-colors"
                        >
                          <ServiceIcon className="w-3.5 h-3.5" />
                          {service.title}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
          
          {/* View All Services Link */}
          <Link
            to={getCountryUrl("/services")}
            onClick={onNavigate}
            className="flex items-center gap-2 py-2 pl-4 text-sm font-medium text-brand-orange hover:text-brand-orange/80 transition-colors border-l-2 border-brand-orange"
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </div>
  );
};
