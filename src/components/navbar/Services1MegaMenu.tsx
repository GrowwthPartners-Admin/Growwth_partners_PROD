import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronRight, Sparkles } from "lucide-react";
import { useCountry } from "@/contexts/CountryContext";
import { services1Categories, type ServiceCategory } from "@/data/services1MenuData";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface Services1MegaMenuProps {
  onNavigate?: () => void;
}

export const Services1MegaMenu = ({ onNavigate }: Services1MegaMenuProps) => {
  const { getCountryUrl } = useCountry();
  const [activeCategory, setActiveCategory] = useState<string>("core-finance");
  const [isOpen, setIsOpen] = useState(false);

  const activeServices = services1Categories.find(cat => cat.id === activeCategory)?.services || [];
  const activeCategoryData = services1Categories.find(c => c.id === activeCategory);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Trigger Button */}
      <button
        type="button"
        className="group px-3 py-3 text-gray-700 hover:text-brand-orange font-medium flex items-center gap-2 transition-all duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="relative">
          Services1
          <span className={cn(
            "absolute -bottom-0.5 left-0 h-0.5 bg-gradient-to-r from-brand-orange to-orange-400 transition-all duration-300",
            isOpen ? "w-full" : "w-0 group-hover:w-full"
          )} />
        </span>
        <ChevronDown className={cn(
          "w-4 h-4 transition-transform duration-300",
          isOpen && "rotate-180"
        )} />
      </button>

      {/* Desktop Mega Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute left-0 top-full pt-3 z-50"
          >
            {/* Decorative top bar */}
            <div className="absolute top-3 left-8 right-8 h-1 bg-gradient-to-r from-brand-orange via-orange-400 to-amber-400 rounded-full" />
            
            <div className="relative bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.2)] border border-white/20 overflow-hidden min-w-[780px]">
              {/* Background decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-brand-orange/5 to-transparent rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-orange-100/50 to-transparent rounded-full blur-2xl pointer-events-none" />
              
              <div className="relative flex">
                {/* Categories Panel */}
                <div className="w-[290px] bg-gradient-to-br from-slate-50/80 to-slate-100/60 backdrop-blur-sm border-r border-gray-200/60 py-4">
                  <div className="px-5 pb-3 mb-2">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-brand-orange" />
                      <span className="text-xs font-bold text-gray-500 uppercase tracking-[0.15em]">
                        Categories
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-1.3 px-2">
                    {services1Categories.map((category, index) => {
                      const Icon = category.icon;
                      const isActive = activeCategory === category.id;
                      return (
                        <motion.button
                          key={category.id}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          onMouseEnter={() => setActiveCategory(category.id)}
                          onClick={() => setActiveCategory(category.id)}
                          className={cn(
                            "w-full px-4 py-3.5 flex items-center gap-3 text-left transition-all duration-300 rounded-xl group relative overflow-hidden",
                            isActive 
                              ? "bg-white text-gray-900 shadow-lg shadow-brand-orange/10" 
                              : "text-gray-600 hover:bg-white/60"
                          )}
                        >
                          {/* Active indicator */}
                          <div className={cn(
                            "absolute left-0 top-1/2 -translate-y-1/2 w-1 rounded-full transition-all duration-300",
                            isActive ? "h-8 bg-gradient-to-b from-brand-orange to-orange-400" : "h-0 bg-brand-orange"
                          )} />
                          
                          {/* Icon container */}
                          <div className={cn(
                            "w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 relative",
                            isActive 
                              ? "bg-gradient-to-br from-brand-orange to-orange-500 text-white shadow-lg shadow-brand-orange/30" 
                              : "bg-gray-100 text-gray-500 group-hover:bg-gradient-to-br group-hover:from-brand-orange/10 group-hover:to-orange-100 group-hover:text-brand-orange"
                          )}>
                            <Icon className="w-5 h-5" />
                            {isActive && (
                              <div className="absolute inset-0 rounded-xl bg-white/20 animate-pulse" />
                            )}
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <span className={cn(
                              "text-sm font-semibold block truncate transition-colors",
                              isActive ? "text-gray-900" : "group-hover:text-gray-900"
                            )}>
                              {category.title}
                            </span>
                            <span className="text-xs text-gray-400 block truncate">
                              {category.services.length} services
                            </span>
                          </div>
                          
                          <ChevronRight className={cn(
                            "w-4 h-4 transition-all duration-300",
                            isActive 
                              ? "text-brand-orange translate-x-0.5" 
                              : "text-gray-300 group-hover:text-brand-orange group-hover:translate-x-0.5"
                          )} />
                        </motion.button>
                      );
                    })}
                  </div>
                </div>

                {/* Services Panel */}
                <div className="flex-1 p-6 relative">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeCategory}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2 }}
                    >
                      {/* Category Header */}
                      <div className="mb-5 pb-4 border-b border-gray-100">
                        <div className="flex items-center gap-3">
                          {activeCategoryData && (
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-orange to-orange-500 flex items-center justify-center text-white shadow-lg shadow-brand-orange/25">
                              <activeCategoryData.icon className="w-6 h-6" />
                            </div>
                          )}
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 tracking-tight">
                              {activeCategoryData?.title}
                            </h3>
                            <p className="text-sm text-gray-500 mt-0.5">
                              {activeCategoryData?.description}
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Services Grid */}
                      <div className="grid grid-cols-2 gap-2">
                        {activeServices.map((service, index) => {
                          const Icon = service.icon;
                          return (
                            <motion.div
                              key={service.path}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.03 }}
                            >
                              <Link
                                to={getCountryUrl(service.path)}
                                onClick={() => {
                                  setIsOpen(false);
                                  onNavigate?.();
                                }}
                                className="group flex items-center gap-4 px-3 py-3 rounded-xl text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:via-orange-100 hover:to-amber-100 transition-all duration-300 relative overflow-hidden"
                              >
                                {/* Hover effect line */}
                                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-orange to-orange-400 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
                                
                                <div className="w-9 h-9 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-gradient-to-br group-hover:from-brand-orange/20 group-hover:to-orange-100 group-hover:text-brand-orange transition-all duration-300 group-hover:shadow-md group-hover:shadow-brand-orange/10">
                                  <Icon className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                                </div>
                                <span className="text-sm font-medium flex-1 group-hover:text-gray-900 transition-colors">
                                  {service.title}
                                </span>
                                <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-brand-orange" />
                              </Link>
                            </motion.div>
                          );
                        })}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Mobile Version - Premium Accordion Style
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
        className="flex justify-between items-center w-full py-2.5 text-gray-700 font-medium"
      >
        <span className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-brand-orange" />
          Services1
        </span>
        <ChevronDown
          className={cn(
            "w-4 h-4 transition-transform duration-300",
            isOpen && "rotate-180"
          )}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pl-2 mt-2 space-y-2 bg-gradient-to-br from-gray-50/50 to-slate-50/50 rounded-xl p-3">
              {services1Categories.map((category, catIndex) => {
                const Icon = category.icon;
                const isCategoryExpanded = expandedCategory === category.id;
                
                return (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: catIndex * 0.05 }}
                    className="rounded-xl overflow-hidden bg-white shadow-sm"
                  >
                    <button
                      onClick={() => toggleCategory(category.id)}
                      className={cn(
                        "flex items-center justify-between w-full py-3 px-4 text-left transition-all duration-300",
                        isCategoryExpanded 
                          ? "text-brand-orange bg-gradient-to-r from-brand-orange/5 to-orange-50" 
                          : "text-gray-700 hover:bg-gray-50"
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <div className={cn(
                          "w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300",
                          isCategoryExpanded 
                            ? "bg-gradient-to-br from-brand-orange to-orange-500 text-white shadow-md shadow-brand-orange/20" 
                            : "bg-gray-100 text-gray-500"
                        )}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-sm font-semibold block">{category.title}</span>
                          <span className="text-xs text-gray-400">{category.services.length} services</span>
                        </div>
                      </div>
                      <ChevronRight
                        className={cn(
                          "w-4 h-4 transition-transform duration-300",
                          isCategoryExpanded && "rotate-90"
                        )}
                      />
                    </button>

                    <AnimatePresence>
                      {isCategoryExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="px-4 pb-3 pt-1 space-y-1 bg-gradient-to-b from-gray-50/50 to-white">
                            {category.services.map((service, index) => {
                              const ServiceIcon = service.icon;
                              return (
                                <motion.div
                                  key={service.path}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: index * 0.02 }}
                                >
                                  <Link
                                    to={getCountryUrl(service.path)}
                                    onClick={onNavigate}
                                    className="flex items-center gap-3 py-2.5 px-3 text-sm text-gray-600 hover:text-brand-orange hover:bg-brand-orange/5 rounded-lg transition-all duration-200 group"
                                  >
                                    <div className="w-7 h-7 rounded-md bg-gray-100 flex items-center justify-center text-gray-400 group-hover:bg-brand-orange/10 group-hover:text-brand-orange transition-colors">
                                      <ServiceIcon className="w-3.5 h-3.5" />
                                    </div>
                                    <span className="flex-1">{service.title}</span>
                                    <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                  </Link>
                                </motion.div>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};