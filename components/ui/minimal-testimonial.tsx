"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type MinimalTestimonialItem = {
  quote: string;
  author: string;
  details?: string;
  services?: string;
  image?: string;
};

const defaultTestimonials: MinimalTestimonialItem[] = [
  {
    quote:
      "Working with them transformed our entire brand identity. The attention to detail was exceptional.",
    author: "Sarah Chen",
    details: "CEO at Stripe",
    image:
      "https://images.unsplash.com/photo-1701615004837-40d8573b6652?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGF2YXRhcnN8ZW58MHx8MHx8fDA%3D",
  },
  {
    quote:
      "A rare talent who combines strategic thinking with flawless execution. Highly recommended.",
    author: "Marcus Johnson",
    details: "Design Lead at Linear",
    image:
      "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGF2YXRhcnN8ZW58MHx8MHx8fDA%3D",
  },
  {
    quote:
      "The most seamless collaboration I've experienced. They truly understand modern design.",
    author: "Elena Voss",
    details: "Founder at Notion",
    image:
      "https://plus.unsplash.com/premium_photo-1689977830819-d00b3a9b7363?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGF2YXRhcnN8ZW58MHx8MHx8fDA%3D",
  },
];

type TestimonialsMinimalProps = {
  testimonials?: MinimalTestimonialItem[];
  autoAdvanceMs?: number;
  className?: string;
};

const transitionDurationMs = 380;
const transitionExitLeadMs = 190;

function TestimonialBody({
  testimonial,
}: {
  testimonial: MinimalTestimonialItem;
}) {
  return (
    <>
      <blockquote className="mx-auto max-w-[34ch]">
        <p className="font-display text-[1.08rem] leading-[1.34] tracking-[-0.004em] text-zinc-900 sm:text-[1.24rem] sm:leading-[1.3] md:text-[1.42rem] md:leading-[1.3]">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </blockquote>
      {testimonial.details && (
        <p className="mx-auto mt-4 max-w-[34ch] font-sans text-[0.64rem] font-semibold uppercase tracking-[0.2em] text-zinc-600">
          {testimonial.details}
        </p>
      )}
      {testimonial.services && (
        <p className="mx-auto mt-2.5 max-w-[34ch] font-sans text-[0.84rem] leading-6 text-zinc-600">
          <span className="mr-1 text-[0.56rem] font-semibold uppercase tracking-[0.18em] text-zinc-700">
            Services:
          </span>
          {testimonial.services}
        </p>
      )}
    </>
  );
}

export function TestimonialsMinimal({
  testimonials = defaultTestimonials,
  autoAdvanceMs = 5000,
  className = "",
}: TestimonialsMinimalProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [queuedIndex, setQueuedIndex] = useState<number | null>(null);
  const [phase, setPhase] = useState<"idle" | "exiting" | "entering">("idle");
  const [isPaused, setIsPaused] = useState(false);

  const requestIndex = (nextIndex: number) => {
    if (testimonials.length <= 1) {
      return;
    }

    const normalizedIndex =
      ((nextIndex % testimonials.length) + testimonials.length) %
      testimonials.length;

    if (normalizedIndex === activeIndex && phase === "idle") {
      return;
    }

    setQueuedIndex(normalizedIndex);
    if (phase !== "exiting") {
      setPhase("exiting");
    }
  };

  const goToNext = () => {
    const seedIndex = queuedIndex ?? activeIndex;
    requestIndex(seedIndex + 1);
  };

  const goToPrevious = () => {
    const seedIndex = queuedIndex ?? activeIndex;
    requestIndex(seedIndex - 1);
  };

  useEffect(() => {
    setActiveIndex((currentIndex) =>
      testimonials.length === 0
        ? 0
        : Math.min(currentIndex, testimonials.length - 1),
    );
    setQueuedIndex(null);
    setPhase("idle");
  }, [testimonials.length]);

  useEffect(() => {
    if (phase !== "exiting" || queuedIndex === null) {
      return undefined;
    }

    const exitTimer = window.setTimeout(() => {
      setActiveIndex(queuedIndex);
      setQueuedIndex(null);
      setPhase("entering");
    }, transitionExitLeadMs);

    return () => {
      window.clearTimeout(exitTimer);
    };
  }, [phase, queuedIndex]);

  useEffect(() => {
    if (phase !== "entering") {
      return undefined;
    }

    const frameId = window.requestAnimationFrame(() => {
      setPhase("idle");
    });

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, [phase, activeIndex]);

  useEffect(() => {
    if (
      testimonials.length <= 1 ||
      autoAdvanceMs <= 0 ||
      isPaused ||
      typeof window === "undefined"
    ) {
      return undefined;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) {
      return undefined;
    }

    const intervalId = window.setInterval(goToNext, autoAdvanceMs);
    return () => window.clearInterval(intervalId);
  }, [autoAdvanceMs, isPaused, testimonials.length, activeIndex, queuedIndex, phase]);

  if (testimonials.length === 0) {
    return null;
  }

  const activeTestimonial = testimonials[activeIndex];
  const textMotionClass =
    phase === "exiting"
      ? "-translate-y-2 opacity-0 blur-sm"
      : phase === "entering"
        ? "translate-y-2 opacity-0 blur-sm"
        : "translate-y-0 opacity-100 blur-0";

  return (
    <div
      className={`mx-auto w-full max-w-5xl py-3 ${className}`.trim()}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
      onTouchCancel={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
    >
      <div className="mb-10 grid">
        {testimonials.map((testimonial, index) => (
          <div
            key={`measure-${index}`}
            aria-hidden="true"
            className="invisible pointer-events-none row-start-1 col-start-1 select-none"
          >
            <TestimonialBody testimonial={testimonial} />
          </div>
        ))}
        <div
          className={`row-start-1 col-start-1 transition-all ease-out will-change-transform ${textMotionClass}`}
          style={{ transitionDuration: `${transitionDurationMs}ms` }}
        >
          <TestimonialBody testimonial={activeTestimonial} />
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-zinc-300 pt-5 sm:flex-nowrap">
        <div className="flex -space-x-2">
          {testimonials.map((testimonial, index) => (
            <button
              key={`${testimonial.author}-avatar-${index}`}
              type="button"
              onClick={() => requestIndex(index)}
              aria-label={`Show review by ${testimonial.author}`}
              className={`relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-zinc-200 ring-2 ring-white transition-all duration-300 ease-out ${
                activeIndex === index
                  ? "z-10 scale-110 grayscale-0"
                  : "grayscale hover:scale-105 hover:grayscale-0"
              }`}
            >
              {testimonial.image ? (
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              ) : (
                <span className="font-sans text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-zinc-700">
                  {testimonial.author.slice(0, 2)}
                </span>
              )}
            </button>
          ))}
        </div>

        <div className="min-w-0 flex-1">
          <p className="truncate font-sans text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-zinc-700">
            {testimonials[activeIndex].author}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={goToPrevious}
            className="inline-flex h-10 w-10 items-center justify-center border border-zinc-300 bg-white text-zinc-800 transition hover:border-zinc-500"
          >
            <ChevronLeft className="h-4 w-4" strokeWidth={1.25} />
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={goToNext}
            className="inline-flex h-10 w-10 items-center justify-center border border-zinc-300 bg-white text-zinc-800 transition hover:border-zinc-500"
          >
            <ChevronRight className="h-4 w-4" strokeWidth={1.25} />
          </button>
        </div>
      </div>
    </div>
  );
}
