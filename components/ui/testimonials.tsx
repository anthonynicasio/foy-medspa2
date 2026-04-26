"use client";

export default function TestimonialSection() {
  return (
    <section>
      <div className="py-12 sm:py-16">
        <div className="mx-auto w-full max-w-5xl px-6">
          <blockquote className="before:bg-primary relative mx-auto max-w-2xl pl-6 before:absolute before:inset-y-0 before:left-0 before:w-1 before:rounded-full">
            <p className="text-foreground text-base leading-7 sm:text-lg">
              Using Tailark has been like unlocking a secret design superpower.
              It&apos;s the perfect fusion of simplicity and versatility,
              enabling us to create UIs that are as stunning as they are
              user-friendly.
            </p>
            <footer className="mt-4 flex items-center gap-2">
              <cite className="not-italic">John Doe</cite>
              <span
                aria-hidden
                className="bg-foreground/15 h-1 w-1 rounded-full"
              ></span>
              <span className="text-muted-foreground">Product Designer</span>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
