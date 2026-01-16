import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  ChevronRight,
  Sparkles,
  Search,
} from "lucide-react";
import { useCountry } from "@/contexts/CountryContext";
import { services1Categories } from "@/data/services1MenuData";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface Services1MegaMenuProps {
  onNavigate?: () => void;
}

export const Services1MegaMenu = ({ onNavigate }: Services1MegaMenuProps) => {
  const { getCountryUrl } = useCountry();
  const [activeCategory, setActiveCategory] = useState<string>("core-finance");
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  const activeCategoryData = useMemo(
    () => services1Categories.find((c) => c.id === activeCategory),
    [activeCategory]
  );

  const activeServices = useMemo(
    () => activeCategoryData?.services || [],
    [activeCategoryData]
  );

  const filteredServices = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return activeServices;
    return activeServices.filter((s) => s.title.toLowerCase().includes(q));
  }, [query, activeServices]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Trigger */}
      <button
        type="button"
        className="group px-3 py-3 text-gray-700 hover:text-brand-orange font-medium flex items-center gap-2 transition-all duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="relative">
          Services
          <span
            className={cn(
              "absolute -bottom-0.5 left-0 h-0.5 bg-gradient-to-r from-brand-orange to-orange-400 transition-all duration-300",
              isOpen ? "w-full" : "w-0 group-hover:w-full"
            )}
          />
        </span>
        <ChevronDown
          className={cn(
            "w-4 h-4 transition-transform duration-300",
            isOpen && "rotate-180"
          )}
        />
      </button>

      {/* Desktop Mega Menu (Centered in viewport) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            // Centered in viewport via full-width fixed flex container (avoids transform clobbering)
            className="hidden lg:flex fixed top-[80px] left-0 right-0 z-50 justify-center px-4"
          >
            <div
              // ✅ responsive: wider desktop so all categories fit, but never overflow viewport
              className="relative w-[1240px] max-w-[calc(100vw-2rem)] overflow-hidden rounded-3xl border border-white/40 bg-white/90 backdrop-blur-xl shadow-[0_30px_90px_-35px_rgba(0,0,0,0.35)]"
            >
              {/* subtle background accents */}
              <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-brand-orange/10 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-28 -left-24 h-72 w-72 rounded-full bg-orange-200/40 blur-3xl" />

              {/* top header */}
              <div className="relative border-b border-gray-200/70 bg-gradient-to-r from-slate-50/80 to-white/50 px-5 py-4">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-brand-orange/10 text-brand-orange">
                      <Sparkles className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">
                        Explore Services
                      </div>
                      <div className="text-xs text-gray-500">
                        Browse by category • Search inside
                      </div>
                    </div>
                  </div>

                  {/* search (slightly smaller) */}
                  <div className="relative w-[300px]">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <input
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Search services…"
                      className="w-full rounded-2xl border border-gray-200 bg-white/80 px-10 py-2.5 text-sm outline-none focus:ring-2 focus:ring-brand-orange/30"
                    />
                  </div>
                </div>

                {/* TOP CATEGORIES (tabs) */}
                <div className="mt-4 flex flex-wrap items-center gap-2 pb-1">
                  {services1Categories.map((category) => {
                    const isActive = activeCategory === category.id;
                    const Icon = category.icon;

                    return (
                      <button
                        key={category.id}
                        onMouseEnter={() => setActiveCategory(category.id)}
                        onClick={() => setActiveCategory(category.id)}
                        className={cn(
                          "group flex items-center gap-2 whitespace-nowrap rounded-2xl px-3 py-2 text-sm font-semibold transition-all",
                          isActive
                            ? "bg-gray-900 text-white shadow-md"
                            : "bg-white/70 text-gray-700 hover:bg-white hover:text-gray-900 border border-gray-200/70"
                        )}
                        title={category.title}
                      >
                        <span
                          className={cn(
                            "flex h-7 w-7 items-center justify-center rounded-xl transition-all",
                            isActive
                              ? "bg-white/15 text-white"
                              : "bg-brand-orange/10 text-brand-orange group-hover:bg-brand-orange/15"
                          )}
                        >
                          <Icon className="h-4 w-4" />
                        </span>

                        {/* ✅ shows more name than truncate, but still tidy */}
                        <span className="max-w-[200px] line-clamp-1">
                          {category.title}
                        </span>

                        <span
                          className={cn(
                            "ml-1 rounded-full px-2 py-0.5 text-[11px] font-bold",
                            isActive
                              ? "bg-white/15 text-white"
                              : "bg-gray-100 text-gray-600"
                          )}
                        >
                          {category.services.length}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* body */}
              <div className="relative px-5 py-5">
                {/* category hero */}
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    {activeCategoryData && (
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-orange to-orange-500 text-white shadow-lg shadow-brand-orange/20">
                        <activeCategoryData.icon className="h-5 w-5" />
                      </div>
                    )}
                    <div className="min-w-0">
                      <h3 className="text-lg font-extrabold text-gray-900 tracking-tight">
                        {activeCategoryData?.title}
                      </h3>
                      <p className="mt-1 text-sm text-gray-600 max-w-[600px]">
                        {activeCategoryData?.description}
                      </p>
                    </div>
                  </div>

                  <div className="hidden lg:flex items-center gap-2 rounded-2xl border border-orange-100 bg-orange-50/60 px-3 py-2 text-xs text-gray-700">
                    <span className="font-semibold text-brand-orange">Tip:</span>
                    Hover tabs to preview
                  </div>
                </div>

                {/* services */}
                <div className="grid grid-cols-2 gap-2.5">
                  {filteredServices.map((service, index) => {
                    const Icon = service.icon;

                    return (
                      <motion.div
                        key={service.path}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.015 }}
                      >
                        <Link
                          to={getCountryUrl(service.path)}
                          onClick={() => {
                            setIsOpen(false);
                            onNavigate?.();
                          }}
                          className="group relative justify-center items-center flex gap-5 rounded-2xl border border-gray-100 bg-white/85 p-2 shadow-sm transition-all hover:-translate-y-0.5 hover:border-orange-200 hover:shadow-md"
                        >
                          {/* left accent */}
                          <div className="absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-gradient-to-b from-brand-orange/70 to-orange-400/70 opacity-0 group-hover:opacity-100 transition-opacity" />

                          <div className="flex h-6 w-6 items-center justify-center rounded-2xl bg-orange-50 text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all">
                            <Icon className="h-3 w-3" />
                          </div>

                          <div className="min-w-0">
                            <div className="text-sm font-semibold items-center justify-center text-gray-900">
                              {service.title}
                            </div>
                            {/* <div className="mt-1 text-xs text-gray-500">
                              View details → scope & deliverables
                            </div> */}
                          </div>

                          <ChevronRight className="ml-auto mt-1 h-4 w-4 text-gray-300 group-hover:text-brand-orange transition-all" />
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                {filteredServices.length === 0 && (
                  <div className="rounded-2xl border border-gray-200 bg-white/70 p-7 text-sm text-gray-600">
                    No results for{" "}
                    <span className="font-semibold">“{query}”</span>. Try a
                    different keyword.
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ------------------------- MOBILE VERSION (completed) ------------------------- */

interface MobileServices1MenuProps {
  isOpen: boolean;
  onToggle: () => void;
  onNavigate: () => void;
}

export const MobileServices1Menu = ({
  isOpen,
  onToggle,
  onNavigate,
}: MobileServices1MenuProps) => {
  const { getCountryUrl } = useCountry();
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [query, setQuery] = useState("");

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
    setQuery("");
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
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="mt-2 space-y-2 bg-gradient-to-br from-gray-50/60 to-slate-50/60 rounded-2xl p-3">
              {services1Categories.map((category, catIndex) => {
                const Icon = category.icon;
                const isCategoryExpanded = expandedCategory === category.id;

                const servicesFiltered =
                  isCategoryExpanded && query.trim()
                    ? category.services.filter((s) =>
                        s.title.toLowerCase().includes(query.toLowerCase())
                      )
                    : category.services;

                return (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: catIndex * 0.04 }}
                    className="rounded-2xl overflow-hidden bg-white shadow-sm border border-gray-100"
                  >
                    <button
                      onClick={() => toggleCategory(category.id)}
                      className={cn(
                        "flex items-center justify-between w-full py-3 px-4 text-left transition-all duration-300",
                        isCategoryExpanded
                          ? "text-brand-orange bg-gradient-to-r from-brand-orange/5 to-orange-50"
                          : "text-gray-800 hover:bg-gray-50"
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={cn(
                            "w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300",
                            isCategoryExpanded
                              ? "bg-gradient-to-br from-brand-orange to-orange-500 text-white shadow-md shadow-brand-orange/20"
                              : "bg-gray-100 text-gray-600"
                          )}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-sm font-semibold block">
                            {category.title}
                          </span>
                          <span className="text-xs text-gray-400">
                            {category.services.length} services
                          </span>
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
                          {/* mobile search inside category */}
                          <div className="px-4 pt-3">
                            <div className="relative">
                              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                              <input
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Search in this category…"
                                className="w-full rounded-xl border border-gray-200 bg-white px-10 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-orange/30"
                              />
                            </div>
                          </div>

                          <div className="px-4 pb-3 pt-2 space-y-1 bg-gradient-to-b from-gray-50/40 to-white">
                            {servicesFiltered.map((service, index) => {
                              const ServiceIcon = service.icon;
                              return (
                                <motion.div
                                  key={service.path}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: index * 0.015 }}
                                >
                                  <Link
                                    to={getCountryUrl(service.path)}
                                    onClick={onNavigate}
                                    className="flex items-center gap-3 py-2.5 px-3 text-sm text-gray-700 hover:text-brand-orange hover:bg-brand-orange/5 rounded-xl transition-all duration-200 group"
                                  >
                                    <div className="w-7 h-7 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 group-hover:bg-brand-orange/10 group-hover:text-brand-orange transition-colors">
                                      <ServiceIcon className="w-3.5 h-3.5" />
                                    </div>
                                    <span className="flex-1 font-medium">
                                      {service.title}
                                    </span>
                                    <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                  </Link>
                                </motion.div>
                              );
                            })}

                            {servicesFiltered.length === 0 && (
                              <div className="text-sm text-gray-500 px-3 py-4">
                                No results for{" "}
                                <span className="font-semibold">“{query}”</span>.
                              </div>
                            )}
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
