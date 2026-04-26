"use client";

import { useEffect, useState } from "react";

export type MinimalTestimonial = {
  quote: string;
  name: string;
  role: string;
  image: string;
};

const defaultTestimonials: MinimalTestimonial[] = [
  {
    quote:
      "Working with them transformed our entire brand identity. The attention to detail was exceptional.",
    name: "Sarah Chen",
    role: "CEO at Stripe",
    image:
      "https://images.unsplash.com/photo-1701615004837-40d8573b6652?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGF2YXRhcnN8ZW58MHx8MHx8fDA%3D",
  },
  {
    quote:
      "A rare talent who combines strategic thinking with flawless execution. Highly recommended.",
    name: "Marcus Johnson",
    role: "Design Lead at Linear",
    image:
      "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGF2YXRhcnN8ZW58MHx8MHx8fDA%3D",
  },
  {
    quote:
      "The most seamless collaboration I've experienced. They truly understand modern design.",
    name: "Elena Voss",
    role: "Founder at Notion",
    image:
      "https://plus.unsplash.com/premium_photo-1689977830819-d00b3a9b7363?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGF2YXRhcnN8ZW58MHx8MHx8fDA%3D",
  },
];

type TestimonialsMinimalProps = {
  testimonials?: MinimalTestimonial[];
  autoSlideMs?: number;
  className?: string;
};

export function TestimonialsMinimal({
  testimonials = defaultTestimonials,
  autoSlideMs = 6000,
  className = "",
}: TestimonialsMinimalProps) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (testimonials.length <= 1 || autoSlideMs <= 0) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActive((current) => (current + 1) % testimonials.length);
    }, autoSlideMs);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [autoSlideMs, testimonials.length]);

  if (testimonials.length === 0) {
    return null;
  }

  return (
    <div className={`mx-auto w-full max-w-5xl px-0 py-8 ${className}`.trim()}>
      <div className="relative mb-12 min-h-[210px] sm:min-h-[220px]">
        {testimonials.map((t, i) => (
          <p
            key={t.name}
            className={`
              absolute inset-0 font-display text-[1.75rem] leading-[0.95] text-zinc-900 transition-all duration-500 ease-out sm:text-[3.3rem]
              ${
                active === i
                  ? "translate-y-0 opacity-100 blur-0"
                  : "pointer-events-none translate-y-4 opacity-0 blur-sm"
              }
            `}
          >
            "{t.quote}"
          </p>
        ))}
      </div>

      <div className="flex items-center gap-6">
        <div className="flex -space-x-2">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              onClick={() => setActive(i)}
              aria-label={`Show review by ${t.name}`}
              className={`
                relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-white transition-all duration-300 ease-out
                ${active === i ? "z-10 scale-110" : "grayscale hover:scale-105 hover:grayscale-0"}
              `}
            >
              <img
                src={t.image || "/placeholder.svg"}
                alt={t.name}
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </button>
          ))}
        </div>

        <div className="h-8 w-px bg-zinc-300" />

        <div className="relative min-h-[44px] flex-1">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`
                absolute inset-0 flex flex-col justify-center transition-all duration-500 ease-out
                ${active === i ? "translate-x-0 opacity-100" : "pointer-events-none -translate-x-2 opacity-0"}
              `}
            >
              <span className="font-sans text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-zinc-700">
                {t.name}
              </span>
              <span className="mt-1 text-xs text-zinc-500">{t.role}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
