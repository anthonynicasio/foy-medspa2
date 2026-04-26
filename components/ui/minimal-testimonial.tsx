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

export function TestimonialsMinimal({
  testimonials = defaultTestimonials,
  autoAdvanceMs = 6000,
  className = "",
}: TestimonialsMinimalProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const goToPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1,
    );
  };

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
  }, [autoAdvanceMs, isPaused, testimonials.length]);

  if (testimonials.length === 0) {
    return null;
  }

  return (
    <div
      className={`mx-auto w-full max-w-5xl py-3 ${className}`.trim()}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
    >
      <div className="relative mb-10 min-h-[24rem] sm:min-h-[20rem] md:min-h-[18rem]">
        {testimonials.map((testimonial, index) => (
          <div
            key={`${testimonial.author}-${index}`}
            className={`absolute inset-0 transition-all duration-500 ease-out ${
              activeIndex === index
                ? "translate-y-0 opacity-100 blur-0"
                : "pointer-events-none translate-y-3 opacity-0 blur-sm"
            }`}
          >
            <blockquote className="mx-auto max-w-[34ch]">
              <p className="font-display text-[1.38rem] leading-[1.16] tracking-[-0.01em] text-zinc-900 sm:text-[1.8rem] sm:leading-[1.1] md:text-[2.3rem]">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
            </blockquote>
            {testimonial.details && (
              <p className="mx-auto mt-5 max-w-[34ch] font-sans text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-zinc-600">
                {testimonial.details}
              </p>
            )}
            {testimonial.services && (
              <p className="mx-auto mt-3 max-w-[34ch] text-sm leading-6 text-zinc-600">
                <span className="mr-1 font-sans text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-zinc-700">
                  Services:
                </span>
                {testimonial.services}
              </p>
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-zinc-300 pt-5 sm:flex-nowrap">
        <div className="flex -space-x-2">
          {testimonials.map((testimonial, index) => (
            <button
              key={`${testimonial.author}-avatar-${index}`}
              type="button"
              onClick={() => setActiveIndex(index)}
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
