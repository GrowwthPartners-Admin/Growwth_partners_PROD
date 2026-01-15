import React, { useMemo, useState } from "react";
import {
  Search,
  BadgeHelp,
  Sparkles,
  X,
  ChevronRight,
} from "lucide-react";
import { FAQ_CATEGORIES } from "@/components/helpSupport/FaqData";
import { Plus, Minus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const normalize = (s: string) => s.toLowerCase().trim();

function highlightText(text: string, query: string) {
  const q = normalize(query);
  if (!q) return text;

  const idx = normalize(text).indexOf(q);
  if (idx === -1) return text;

  const before = text.slice(0, idx);
  const match = text.slice(idx, idx + query.length);
  const after = text.slice(idx + query.length);

  return (
    <>
      {before}
      <mark className="rounded-md bg-orange-200/70 px-1 py-0.5 text-slate-900">
        {match}
      </mark>
      {after}
    </>
  );
}

type HelpFaqSectionProps = {
  query: string;
  onQueryChange: (val: string) => void;
};

export default function HelpFaqSection({ query, onQueryChange }: HelpFaqSectionProps) {
  // NOTE: query comes from parent (Hero + FAQ share it)
  const [activeCategoryId, setActiveCategoryId] = useState(FAQ_CATEGORIES[0]?.id ?? "");
  const [openItems, setOpenItems] = useState<string[]>([]);

  // Flatten + score results for search
  const searchResults = useMemo(() => {
    const q = normalize(query);
    if (!q) return [];

    const rows: Array<{
      categoryId: string;
      categoryTitle: string;
      itemIndex: number;
      q: string;
      a: string;
      score: number;
    }> = [];

    FAQ_CATEGORIES.forEach((cat) => {
      cat.items.forEach((it, idx) => {
        const qText = normalize(it.q);
        const aText = normalize(it.a);

        let score = 0;
        if (qText.includes(q)) score += 10;
        if (aText.includes(q)) score += 4;

        if (score > 0) score += Math.max(0, 3 - idx * 0.25);

        if (score > 0) {
          rows.push({
            categoryId: cat.id,
            categoryTitle: cat.title,
            itemIndex: idx,
            q: it.q,
            a: it.a,
            score,
          });
        }
      });
    });

    return rows.sort((a, b) => b.score - a.score).slice(0, 12);
  }, [query]);

  const filteredCategories = useMemo(() => {
    const q = normalize(query);
    if (!q) return FAQ_CATEGORIES;

    return FAQ_CATEGORIES.map((cat) => {
      const matchedItems = cat.items.filter(
        (it) => normalize(it.q).includes(q) || normalize(it.a).includes(q)
      );
      return { ...cat, items: matchedItems };
    }).filter((cat) => cat.items.length > 0);
  }, [query]);

  const activeCategory = useMemo(() => {
    if (query) {
      const current = filteredCategories.find((c) => c.id === activeCategoryId);
      return current ?? filteredCategories[0];
    }
    return (
      filteredCategories.find((c) => c.id === activeCategoryId) ??
      filteredCategories[0]
    );
  }, [filteredCategories, activeCategoryId, query]);

  const totalFaqs = useMemo(
    () => FAQ_CATEGORIES.reduce((acc, c) => acc + c.items.length, 0),
    []
  );

  const quickFilters = useMemo(() => {
    return [
      { label: "Onboarding", categoryId: "getting-started" },
      { label: "Reporting", categoryId: "reporting" },
      { label: "Forecasting", categoryId: "forecasting" },
      { label: "Cash & Runway", categoryId: "cash-runway" },
    ];
  }, []);

  return (
    <section id="faqs" className="relative overflow-hidden py-20">
      {/* Premium light gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-orange-50" />
        <div className="absolute -top-24 right-1/4 h-[520px] w-[520px] rounded-full bg-orange-200/35 blur-3xl" />
        <div className="absolute -bottom-24 left-1/4 h-[520px] w-[520px] rounded-full bg-sky-200/35 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.45] [background-image:radial-gradient(rgba(15,23,42,0.09)_1px,transparent_1px)] [background-size:18px_18px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-16 pt-10">
        {/* Header */}
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="flex items-start gap-3">
            <div className="rounded-2xl border border-black/10 bg-white/70 p-2 shadow-sm backdrop-blur">
              <BadgeHelp className="h-5 w-5 text-orange-500" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-slate-900 md:text-2xl">
                FAQs (CFO Services)
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                Browse by category or search across{" "}
                <span className="font-semibold text-slate-900">{totalFaqs}</span>{" "}
                questions.
              </p>

              {/* Quick filter chips */}
              <div className="mt-3 flex flex-wrap items-center gap-2">
                {quickFilters.map((f) => (
                  <button
                    key={f.label}
                    type="button"
                    onClick={() => {
                      onQueryChange(""); // ✅ shared query cleared
                      setActiveCategoryId(f.categoryId);
                      setOpenItems([]);
                      document.getElementById("faqs")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className={cn(
                      "inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-medium transition",
                      activeCategoryId === f.categoryId && !query
                        ? "border-orange-500/30 bg-orange-500/10 text-orange-700"
                        : "border-black/10 bg-white/60 text-slate-700 hover:bg-white"
                    )}
                  >
                    <Sparkles className="h-3.5 w-3.5" />
                    {f.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Search box */}
          <div className="w-full md:w-[360px]">
            <div className="relative">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <Input
                value={query}
                onChange={(e) => {
                  onQueryChange(e.target.value); // ✅ shared query updated
                  setOpenItems([]);
                }}
                placeholder="Search FAQs (e.g., runway, board pack, onboarding...)"
                className="h-11 rounded-full border-black/10 bg-white/70 pl-11 pr-10 text-slate-900 placeholder:text-slate-400 shadow-sm focus-visible:ring-orange-500/40"
              />

              {!!query && (
                <button
                  type="button"
                  onClick={() => {
                    onQueryChange(""); // ✅ shared query cleared
                    setOpenItems([]);
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-slate-500 hover:bg-black/5"
                  aria-label="Clear search"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            <div className="mt-2 flex items-center justify-between text-xs text-slate-600">
              <span>Tip: search works across questions + answers.</span>
              {!!query && (
                <span className="font-medium text-slate-900">
                  {searchResults.length} match{searchResults.length === 1 ? "" : "es"}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[340px_1fr]">
          {/* Left: Categories */}
          <div className="lg:sticky lg:top-24 lg:h-fit">
            <Card className="border-black/10 bg-white/70 shadow-sm backdrop-blur">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold text-slate-900">
                  Categories
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-2">
                {(query ? filteredCategories : FAQ_CATEGORIES).map((cat) => {
                  const Icon = cat.icon;
                  const isActive = activeCategory?.id === cat.id;

                  const totalInCat =
                    FAQ_CATEGORIES.find((c) => c.id === cat.id)?.items.length ?? 0;
                  const shownInCat = cat.items.length;

                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => {
                        setActiveCategoryId(cat.id);
                        setOpenItems([]);
                      }}
                      className={cn(
                        "group relative w-full overflow-hidden rounded-2xl border p-3 text-left transition",
                        isActive
                          ? "border-orange-500/30 bg-gradient-to-br from-orange-500/10 via-white/40 to-white/10"
                          : "border-black/10 bg-white/50 hover:bg-white/70"
                      )}
                    >
                      <div
                        className={cn(
                          "absolute left-0 top-0 h-full w-1.5 rounded-r-full transition",
                          isActive ? "bg-orange-500" : "bg-transparent"
                        )}
                      />

                      <div className="flex items-start gap-3">
                        <div
                          className={cn(
                            "mt-0.5 rounded-xl p-2 transition",
                            isActive ? "bg-orange-500/15" : "bg-black/5"
                          )}
                        >
                          <Icon
                            className={cn(
                              "h-4 w-4",
                              isActive ? "text-orange-600" : "text-slate-600"
                            )}
                          />
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-2">
                            <div className="truncate text-sm font-semibold text-slate-900">
                              {cat.title}
                            </div>

                            <Badge
                              variant="secondary"
                              className={cn(
                                "rounded-full border border-black/10 bg-white/70 text-slate-700",
                                isActive &&
                                  "border-orange-500/20 bg-orange-500/10 text-orange-700"
                              )}
                            >
                              {query ? `${shownInCat}/${totalInCat}` : totalInCat}
                            </Badge>
                          </div>

                          <div className="mt-0.5 line-clamp-2 text-xs text-slate-600">
                            {cat.description}
                          </div>

                          <div className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-slate-700">
                            Explore
                            <ChevronRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                          </div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </CardContent>
            </Card>
          </div>

          {/* Right: FAQ content */}
          <div className="space-y-6">
            {!!query && (
              <Card className="border-black/10 bg-white/70 shadow-sm backdrop-blur">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-semibold text-slate-900">
                    Top matches
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-3">
                  {searchResults.length === 0 ? (
                    <div className="rounded-2xl border border-black/10 bg-white/60 p-6 text-center">
                      <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-2xl bg-orange-500/10">
                        <Search className="h-5 w-5 text-orange-600" />
                      </div>
                      <div className="text-sm font-semibold text-slate-900">
                        No results found
                      </div>
                      <div className="mt-1 text-sm text-slate-600">
                        Try different keywords (e.g., “runway”, “board”, “onboarding”).
                      </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                      {searchResults.map((r) => (
                        <button
                          key={`${r.categoryId}-${r.itemIndex}`}
                          type="button"
                          onClick={() => {
                            setActiveCategoryId(r.categoryId);
                            const itemKey = `${r.categoryId}-${r.itemIndex}`;
                            setOpenItems([itemKey]);
                            document.getElementById("faq-accordion")?.scrollIntoView({
                              behavior: "smooth",
                              block: "start",
                            });
                          }}
                          className="rounded-2xl border border-black/10 bg-white/60 p-4 text-left transition hover:bg-white"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="min-w-0">
                              <div className="text-xs font-semibold text-orange-700">
                                {r.categoryTitle}
                              </div>
                              <div className="mt-1 line-clamp-2 text-sm font-semibold text-slate-900">
                                {highlightText(r.q, query)}
                              </div>
                              <div className="mt-1 line-clamp-2 text-xs text-slate-600">
                                {r.a}
                              </div>
                            </div>

                            <div className="mt-0.5 rounded-xl bg-orange-500/10 p-2">
                              <ChevronRight className="h-4 w-4 text-orange-700" />
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            )}

            <Card
              id="faq-accordion"
              className="border-black/10 bg-white/70 shadow-sm backdrop-blur"
            >
              <CardHeader className="pb-2">
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <CardTitle className="text-base font-semibold text-slate-900">
                    {activeCategory?.title ?? "FAQs"}
                  </CardTitle>

                  {!query && activeCategory && (
                    <div className="text-xs text-slate-600">
                      {activeCategory.items.length} question
                      {activeCategory.items.length === 1 ? "" : "s"} in this category
                    </div>
                  )}
                </div>
              </CardHeader>

              <CardContent>
                {!activeCategory || activeCategory.items.length === 0 ? (
                  <div className="rounded-2xl border border-black/10 bg-white/60 p-6 text-center">
                    <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-2xl bg-orange-500/10">
                      <Search className="h-5 w-5 text-orange-600" />
                    </div>
                    <div className="text-sm font-semibold text-slate-900">
                      No results found
                    </div>
                    <div className="mt-1 text-sm text-slate-600">
                      Try a different search term or choose another category.
                    </div>
                  </div>
                ) : (
                  <Accordion
                    type="multiple"
                    value={openItems}
                    onValueChange={setOpenItems}
                    className="space-y-3"
                  >
                    {activeCategory.items.map((it, idx) => {
                      const key = `${activeCategory.id}-${idx}`;
                      const isOpen = openItems.includes(key);

                      return (
                        <AccordionItem
                          key={key}
                          value={key}
                          className={cn(
                            "rounded-2xl border border-black/10 bg-white/70 px-4 shadow-[0_2px_0_rgba(25,23,42,0.05)]",
                            "transition hover:bg-white"
                          )}
                        >
                          <AccordionTrigger
                            className={cn(
                              "group py-4 text-left text-sm font-semibold text-slate-900 hover:no-underline",
                              "[&>svg]:hidden" // ✅ hides default shadcn chevron, keeps only +/-
                            )}
                          >
                            <div className="flex w-full items-start justify-between gap-4">
                              <span className="leading-snug font-bold text-base">
                                {query ? highlightText(it.q, query) : it.q}
                              </span>

                              <span
                                className={cn(
                                  "mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition",
                                  isOpen
                                    ? "border-orange-500/25 bg-orange-500 text-white"
                                    : "border-black/10 bg-orange-500 text-white"
                                )}
                                aria-hidden="true"
                              >
                                {isOpen ? (
                                  <Minus className="h-5 w-5" />
                                ) : (
                                  <Plus className="h-5 w-5" />
                                )}
                              </span>
                            </div>
                          </AccordionTrigger>

                          <AccordionContent className="pb-4">
                            <div className="rounded-2xl border border-black/10 bg-gradient-to-br from-orange-50 via-white to-sky-50 p-4 text-sm leading-relaxed text-slate-700">
                              {it.a}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      );
                    })}
                  </Accordion>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
