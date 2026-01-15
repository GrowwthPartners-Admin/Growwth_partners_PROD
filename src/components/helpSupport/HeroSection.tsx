import React from "react";
import { Search, LifeBuoy, PlayCircle, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type HelpHeroSectionProps = {
  query: string;
  onQueryChange: (val: string) => void;
  onSubmit: () => void;
};

export default function HelpHeroSection({ query, onQueryChange, onSubmit }: HelpHeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-[#0b0c10] text-white">
      {/* Background glow + subtle grid */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-48 left-16 h-[520px] w-[520px] rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,rgba(255,255,255,0.35)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.35)_1px,transparent_1px)] [background-size:56px_56px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/25 to-black/60" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 pb-10 pt-16 md:pb-16 md:pt-24">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
          <Search className="h-4 w-4 text-white/70" />
          Help Center • CFO Services Support
        </div>

        <h1 className="text-center text-3xl font-semibold tracking-wide text-white md:text-5xl">
          WHAT DO YOU NEED HELP WITH?
        </h1>

        <p className="mt-4 max-w-2xl text-center text-sm text-white/70 md:text-base">
          Search FAQs, watch a quick walkthrough, or explore CFO support topics by category.
        </p>

        {/* Search */}
        <div className="mt-8 w-full max-w-3xl">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit();
            }}
            className="flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <div className="relative w-full">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-black/40" />
              <Input
                value={query}
                onChange={(e) => onQueryChange(e.target.value)}
                placeholder="Search for..."
                className={cn(
                  "h-14 w-full rounded-full border-white/10 bg-white text-black",
                  "pl-12 pr-4 text-base shadow-[0_10px_30px_rgba(0,0,0,0.35)]",
                  "focus-visible:ring-2 focus-visible:ring-orange-500/60"
                )}
              />
            </div>

            <Button
              type="submit"
              className="h-14 rounded-full bg-orange-500 px-8 text-base font-semibold text-white hover:bg-orange-600"
            >
              Search
            </Button>
          </form>

          <div className="mt-3 text-center text-xs text-white/60">
            Experiencing problems? We're here to help{" "}
            <a href="/contact-us" className="font-bold text-orange-500 hover:text-orange-500">
               Let us know
            </a>
            
          </div>
        </div>

        {/* Feature cards */}
        <div className="mt-10 grid w-full max-w-6xl grid-cols-1 gap-4 md:grid-cols-3">
          <Card className="border-white/10 bg-white/5 text-white backdrop-blur">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-sm font-semibold">
                <LifeBuoy className="h-4 w-4 text-orange-300" />
                Faster Resolutions
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-white/70">
              Find answers quickly with search + category FAQs tailored to CFO services.
            </CardContent>
          </Card>

          <Card className="border-white/10 bg-white/5 text-white backdrop-blur">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-sm font-semibold">
                <PlayCircle className="h-4 w-4 text-orange-300" />
                Video Walkthrough
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-white/70">
              Watch a short video to understand the workflow end-to-end.
            </CardContent>
          </Card>

          <Card className="border-white/10 bg-white/5 text-white backdrop-blur">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-sm font-semibold">
                <ShieldCheck className="h-4 w-4 text-orange-300" />
                Best Practices
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-white/70">
              Follow proven steps for reporting, forecasting, and cash visibility.
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
