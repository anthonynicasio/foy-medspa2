"use client"

import { useState } from "react"

const testimonials = [
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
]

export function TestimonialsMinimal() {
  const [active, setActive] = useState(0)

  return (
    <div className="mx-auto w-full max-w-xl px-6 py-16">
      <div className="relative mb-12 min-h-[80px]">
        {testimonials.map((t, i) => (
          <p
            key={i}
            className={`
              absolute inset-0 text-xl font-light leading-relaxed text-foreground transition-all duration-500 ease-out md:text-2xl
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
              key={i}
              onClick={() => setActive(i)}
              className={`
                relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-background transition-all duration-300 ease-out
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

        <div className="h-8 w-px bg-border" />

        <div className="relative min-h-[44px] flex-1">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`
                absolute inset-0 flex flex-col justify-center transition-all duration-500 ease-out
                ${active === i ? "translate-x-0 opacity-100" : "pointer-events-none -translate-x-2 opacity-0"}
              `}
            >
              <span className="text-sm font-medium text-foreground">{t.name}</span>
              <span className="text-xs text-muted-foreground">{t.role}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
