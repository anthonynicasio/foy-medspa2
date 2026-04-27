"use client";

export default function TestimonialSection() {
  return (
    <section>
      <div className="py-12 sm:py-16">
        <div className="mx-auto w-full max-w-5xl px-6">
          <blockquote className="before:bg-primary relative mx-auto max-w-2xl pl-6 before:absolute before:inset-y-0 before:left-0 before:w-1 before:rounded-full">
            <p className="text-foreground text-base leading-7 sm:text-lg">
              I&apos;m a regular customer with experience at several med spas over
              the years. Fountain of Youth Spa in St. Augustine is absolutely my
              top spa. Since going there, it&apos;s the only place I go for my
              Xeomin injections, lips and cheek fillers, and facials. The staff
              are all wonderful professionals, but I almost always get my
              injections from Catherine Seneca. She is the BEST. I have lost 35
              pounds with their help too.
            </p>
            <footer className="mt-4 flex items-center gap-2">
              <cite className="not-italic">Venessa Maxwell</cite>
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
