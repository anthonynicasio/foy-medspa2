"use client";

import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CyclingWords } from "@/components/ui/cycling-words";

function Hero() {
  const titles = [
    "radiant.",
    "refined.",
    "balanced.",
    "confident.",
    "restored.",
    "renewed.",
    "luminous.",
    "softened.",
    "sculpted.",
    "refreshed.",
  ];

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex min-h-[520px] flex-col items-start justify-center gap-10 py-12 lg:py-24">
          <div>
            <Button
              variant="secondary"
              size="sm"
              className="gap-3 rounded-full border border-espresso/10 bg-white/60 px-5 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-espresso shadow-sm backdrop-blur hover:bg-white"
            >
              Capitol Hill, Washington DC <MoveRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex max-w-3xl flex-col gap-6">
            <h1 className="font-display text-[4rem] leading-[0.94] tracking-[-0.028em] text-espresso sm:text-[5.5rem] lg:text-[6.8rem]">
              <span className="block">Medical aesthetics,</span>
              <span className="block">
                naturally{" "}
                <CyclingWords
                  words={titles}
                  reserveWord="confident."
                  className="text-clay"
                  itemClassName="font-semibold"
                />
              </span>
            </h1>

            <p className="max-w-2xl text-lg leading-8 tracking-tight text-espresso/70 sm:text-xl sm:leading-9">
              Custom Beauty Med Studio pairs customized injectables, skin
              tightening, PRF, body contouring, and wellness-minded aesthetics
              with a subtle, natural point of view.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-14 gap-3 rounded-full bg-espresso px-8 text-xs font-bold uppercase tracking-[0.22em] text-cream shadow-soft hover:bg-clay"
            >
              <a href="#book">
                Start with a consult <MoveRight className="h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="h-14 gap-3 rounded-full border-espresso/20 bg-white/50 px-7 text-xs font-medium uppercase tracking-[0.2em] text-espresso shadow-sm backdrop-blur hover:border-clay hover:bg-white hover:text-clay"
              variant="outline"
            >
              <a href="tel:+10000000000">
                Call to book <PhoneCall className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
