"use client";

export default function TestimonialSection() {
  return (
    <section>
      <div className="py-12 sm:py-16">
        <div className="mx-auto w-full max-w-5xl px-6">
          <blockquote className="before:bg-primary relative mx-auto max-w-2xl pl-6 before:absolute before:inset-y-0 before:left-0 before:w-1 before:rounded-full">
            <p className="text-foreground text-base leading-7 sm:text-lg">
              The only place I will ever go! Chelsea is absolutely amazing. She
              will answer any questions and talk through everything so even as a
              Botox newbie I felt completely comfortable throughout the process
              and the results were beyond amazing.
            </p>
            <footer className="mt-4 flex items-center gap-2">
              <cite className="not-italic">Katie R.</cite>
              <span
                aria-hidden
                className="bg-foreground/15 h-1 w-1 rounded-full"
              ></span>
              <span className="text-muted-foreground">Google review</span>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
