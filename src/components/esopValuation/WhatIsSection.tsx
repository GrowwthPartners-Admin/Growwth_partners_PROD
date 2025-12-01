import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FileText, ArrowRight } from "lucide-react";

interface WhatIsSectionProps {
  onEnquireClick: () => void;
}

export const WhatIsSection = ({ onEnquireClick }: WhatIsSectionProps) => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          {/* Header */}
          <div className="flex flex-col items-center text-center gap-4 mb-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-blue/10">
                <FileText className="h-4 w-4 text-brand-blue" />
              </span>
              <span className="text-xs font-medium tracking-[0.16em] uppercase text-slate-600">
                ESOP Valuation
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-tight">
              What is an{" "}
              <span className="text-brand-blue font-bold">
                ESOP Valuation?
              </span>
            </h2>

            <p className="max-w-2xl text-sm md:text-base text-muted-foreground">
              An ESOP valuation determines the{" "}
              <span className="font-semibold text-foreground">
                fair market value (FMV)
              </span>{" "}
              of your company&apos;s shares before stock options are granted to
              employees.
            </p>
          </div>

          {/* Content */}
          <div className="grid gap-8 md:grid-cols-2 md:items-start">
            {/* Left column: explanation */}
            <div className="space-y-4">
              <p className="text-sm md:text-base text-muted-foreground">
                Getting this valuation right ensures that equity is granted at a
                fair, defensible price – not based on guesswork or internal
                assumptions.
              </p>

              <div className="space-y-3">
                <p className="text-xs font-semibold tracking-[0.14em] uppercase text-slate-500">
                  Why it matters
                </p>
                <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="mt-1 h-5 w-5 flex items-center justify-center rounded-full bg-brand-blue/10 text-[10px] font-semibold text-brand-blue">
                      1
                    </span>
                    <span>
                      <span className="font-medium text-foreground">
                        Fair & unbiased equity grants
                      </span>{" "}
                      aligned with the actual value of your business.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-5 w-5 flex items-center justify-center rounded-full bg-brand-blue/10 text-[10px] font-semibold text-brand-blue">
                      2
                    </span>
                    <span>
                      <span className="font-medium text-foreground">
                        Lower compliance and HR risk
                      </span>{" "}
                      across tax, legal, and employee-related matters.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-5 w-5 flex items-center justify-center rounded-full bg-brand-blue/10 text-[10px] font-semibold text-brand-blue">
                      3
                    </span>
                    <span>
                      <span className="font-medium text-foreground">
                        Clear communication
                      </span>{" "}
                      with employees and investors on how equity is priced.
                    </span>
                  </li>
                </ul>
              </div>

              <p className="text-sm md:text-base text-muted-foreground">
                ESOP valuations are especially important for{" "}
                <span className="font-medium text-foreground">
                  startups, SMEs, and fast-scaling companies
                </span>{" "}
                where equity is a core part of compensation.
              </p>
            </div>

            {/* Right column: simple info card */}
            <div className="w-full">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6 shadow-sm space-y-4">
                <div>
                  <p className="text-xs font-semibold tracking-[0.14em] uppercase text-slate-500 mb-1">
                    Who typically needs it
                  </p>
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    <li>• Seed to Series C companies</li>
                    <li>• Founder-led and PE-backed SMEs</li>
                    <li>• Teams rolling out or refreshing ESOPs</li>
                  </ul>
                </div>

                <div className="border-t border-slate-100 pt-4 space-y-2">
                  <p className="text-xs font-semibold tracking-[0.14em] uppercase text-slate-500">
                    Outcomes you get
                  </p>
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    <li>✔ Defensible FMV for option grants</li>
                    <li>✔ Better governance and audit readiness</li>
                    <li>✔ Stronger trust with your team</li>
                  </ul>
                </div>

                <div className="pt-2">
                  <Button
                    onClick={onEnquireClick}
                    size="lg"
                    className="w-full md:w-auto bg-brand-blue hover:bg-brand-blue/90 text-white font-semibold text-sm md:text-base px-6 rounded-full transition-all"
                  >
                    Enquire Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <p className="mt-2 text-xs text-muted-foreground">
                    Share a few details about your company and we&apos;ll
                    recommend the right ESOP valuation approach.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
