import React from "react";
import { PlayCircle, Sparkles, ShieldCheck, LifeBuoy } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type HelpVideoSectionProps = {
  youtubeId: string;
};

export default function HelpVideoSection({ youtubeId }: HelpVideoSectionProps) {
  return (
    <section className="relative overflow-hidden">
      {/* Light premium gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-indigo-50" />
        <div className="absolute -top-24 left-1/4 h-[420px] w-[420px] rounded-full bg-orange-200/40 blur-3xl" />
        <div className="absolute -bottom-24 right-1/4 h-[420px] w-[420px] rounded-full bg-indigo-200/40 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.55] [background-image:radial-gradient(rgba(15,23,42,0.08)_1px,transparent_1px)] [background-size:18px_18px]" />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="mb-6 flex items-center gap-3">
          <div className="rounded-2xl border border-black/10 bg-white/70 p-2 shadow-sm backdrop-blur">
            <PlayCircle className="h-5 w-5 text-orange-500" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-slate-900 md:text-2xl">
              Video Walkthrough
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              A quick overview of how our CFO support works—from data to insights.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          {/* Video */}
          <Card className="overflow-hidden border-black/10 bg-white/70 rounded-3xl shadow backdrop-blur">
            <div className="relative aspect-video w-full">
              <iframe
                className="absolute inset-0 h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${youtubeId}`}
                title="Help & Support Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </Card>

          {/* Side content */}
          <Card className="border-black/10 bg-white/70 shadow-sm backdrop-blur">
            <CardHeader className="pb-2">
              <CardTitle className="text-base font-semibold text-slate-900">
                What you’ll learn
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-slate-700">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 rounded-xl bg-orange-500/10 p-2">
                  <Sparkles className="h-4 w-4 text-orange-600" />
                </div>
                <div>
                  <div className="font-medium text-slate-900">Set up & onboarding</div>
                  <div className="text-slate-600">
                    How we structure reporting and align KPIs.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-0.5 rounded-xl bg-indigo-500/10 p-2">
                  <ShieldCheck className="h-4 w-4 text-indigo-600" />
                </div>
                <div>
                  <div className="font-medium text-slate-900">Forecasting & scenarios</div>
                  <div className="text-slate-600">
                    Driver-based models and assumptions.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-0.5 rounded-xl bg-emerald-500/10 p-2">
                  <LifeBuoy className="h-4 w-4 text-emerald-600" />
                </div>
                <div>
                  <div className="font-medium text-slate-900">Cash & runway</div>
                  <div className="text-slate-600">
                    Runway tracking and collections improvements.
                  </div>
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-black/10 bg-white/60 p-4">
                <div className="text-sm font-semibold text-slate-900">Pro tip</div>
                <div className="mt-1 text-xs text-slate-600">
                  Use the search in the hero section to jump straight to the best FAQ.
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
