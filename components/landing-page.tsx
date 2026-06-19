import type { LucideIcon } from 'lucide-react';
import {
  BookOpen,
  CalendarDays,
  Leaf,
  Menu,
  Search,
  Shield,
  ShoppingBag,
  Star,
  Stethoscope,
} from 'lucide-react';
import TestimonialSection from '@/components/ui/testimonials';

const appointmentUrl = 'https://custom-beauty-med-studio.square.site/';
const newsletterUrl =
  'https://custombeautymedstudio.com/join-our-monthly-newsletter-for-discounts-deals/';
const phoneHref = 'tel:+12024101199';
const emailHref = 'mailto:info@custombeautymedstudio.com';

const categoryItems = [
  {
    label: 'LIPS',
    image: '/images/medspa/filler-treatment-cheek.png',
    alt: 'Provider performing a natural filler treatment',
    href: 'https://custombeautymedstudio.com/lip-filler/',
  },
  {
    label: 'BOTOX',
    image: '/images/medspa/clean-shoulder-portrait.png',
    alt: 'Fresh skin portrait with soft studio light',
    href: 'https://custombeautymedstudio.com/botox-capitol-hill-washington-dc/',
  },
  {
    label: 'SKIN TIGHTENING',
    image: '/images/medspa/wellness-active-client.png',
    alt: 'Confident client after skin tightening care',
    href: 'https://custombeautymedstudio.com/morpheus8/',
  },
  {
    label: 'BODY CONTOURING',
    image: '/images/medspa/face-roller-skincare.png',
    alt: 'Close up skincare treatment detail',
    href: 'http://custombeautymedstudio.com/emsculpt/',
  },
];

const vibeCards = [
  {
    title: 'Natural Beauty',
    image: '/images/medspa/natural-glow-portrait.png',
    alt: 'Smiling portrait with healthy glowing skin',
  },
  {
    title: 'Aesthetic Touch',
    image: '/images/medspa/glowing-skin-hands-face.png',
    alt: 'Beauty portrait framing sculpted cheeks',
  },
  {
    title: 'Facial Balancing',
    image: '/images/medspa/towel-skincare-routine.png',
    alt: 'Calm skincare routine with towel wrap',
  },
  {
    title: 'Customized Results',
    image: '/images/medspa/radiant-client-duo.png',
    alt: 'Two clients smiling with radiant skin',
  },
];

const trustItems: Array<{ icon: LucideIcon; title: string }> = [
  { icon: Stethoscope, title: 'Advanced Injector' },
  { icon: Leaf, title: 'Natural Results' },
  { icon: Shield, title: 'Not Pushy Care' },
  { icon: CalendarDays, title: 'Custom Plans' },
];

const footerSections = ['Services', 'About Chelsea', 'Contact'];

const uiTextClass =
  'font-sans text-[0.68rem] font-semibold uppercase tracking-[0.2em]';

export function LandingPage() {
  return (
    <div className="bg-white text-zinc-900">
      <div className="bg-zinc-900 px-4 py-2 text-center text-[0.62rem] font-medium uppercase tracking-[0.22em] text-white sm:text-xs">
        <a href={newsletterUrl} className="transition hover:text-white/80">
          Join Our Monthly Newsletter for Discounts + Deals
        </a>
      </div>

      <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <button
            type="button"
            aria-label="Open menu"
            className="inline-flex h-9 w-9 items-center justify-center border border-transparent text-zinc-900 transition hover:border-zinc-300"
          >
            <Menu className="h-5 w-5" strokeWidth={1.75} />
          </button>

          <a href="#" className="font-display text-2xl tracking-tight text-zinc-900">
            Custom Beauty
          </a>

          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Search"
              className="inline-flex h-9 w-9 items-center justify-center border border-transparent text-zinc-900 transition hover:border-zinc-300"
            >
              <Search className="h-4 w-4" strokeWidth={1.75} />
            </button>
            <button
              type="button"
              aria-label="Shopping bag"
              className="inline-flex h-9 w-9 items-center justify-center border border-transparent text-zinc-900 transition hover:border-zinc-300"
            >
              <ShoppingBag className="h-4 w-4" strokeWidth={1.75} />
            </button>
            <a
              href={appointmentUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book appointment"
              className="inline-flex h-9 w-9 items-center justify-center border border-transparent text-zinc-900 transition hover:border-zinc-300"
            >
              <BookOpen className="h-4 w-4" strokeWidth={1.75} />
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="relative h-screen overflow-hidden bg-zinc-900">
          <img
            src="/images/medspa/diverse-beauty-group.png"
            alt="Diverse group of women with natural glowing skin"
            className="h-full w-full object-cover object-[50%_34%]"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
            <p className="font-display text-5xl font-semibold leading-[0.9] sm:text-7xl">
              YOUR BEAUTY,
              <br />
              YOUR WAY
            </p>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/85 sm:text-lg">
              Natural looking aesthetic results customized by gender, age, and ethnicity.
            </p>
            <a
              href={appointmentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-8 inline-flex h-12 items-center justify-center bg-white px-7 text-zinc-900 transition hover:bg-zinc-100 ${uiTextClass} rounded-none`}
            >
              BOOK APPOINTMENT
            </a>
          </div>
        </section>

        <section className="bg-white px-4 py-14 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-zinc-800">
              CHOOSE A TREATMENT
            </h2>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {categoryItems.map((item) => (
                <article key={item.label}>
                  <div className="aspect-square overflow-hidden bg-gray-100">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="h-full w-full object-cover object-center"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <a href={item.href} className={`mt-3 inline-block text-zinc-900 underline underline-offset-4 ${uiTextClass}`}>
                    {item.label}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-100 px-4 py-14 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-display text-4xl leading-none text-zinc-900 sm:text-5xl">
              Get something done, without looking like you did.
            </h2>

            <div className="mt-7 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2">
              {vibeCards.map((card) => (
                <article
                  key={card.title}
                  className="min-w-[80%] snap-center bg-white shadow-sm sm:min-w-[55%] md:min-w-[40%]"
                >
                  <img
                    src={card.image}
                    alt={card.alt}
                    className="aspect-[4/5] w-full object-cover object-center"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="p-4">
                    <button
                      type="button"
                      className={`inline-flex h-11 w-full items-center justify-center bg-zinc-900 text-white transition hover:bg-zinc-700 ${uiTextClass} rounded-none`}
                    >
                      {card.title} &rarr;
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="bg-white px-4 py-14 sm:px-6">
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div className="overflow-hidden bg-gray-100">
              <img
                src="/images/staff/chelsea-samo-lipman.jpg"
                alt="Chelsea Samo-Lipman, MSHS, PA-C"
                className="aspect-[4/5] w-full object-cover object-center grayscale contrast-110"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div>
              <p className={uiTextClass}>ABOUT CUSTOM BEAUTY</p>
              <h2 className="mt-4 font-display text-4xl leading-none text-zinc-900 sm:text-5xl">
                Meet Chelsea Samo-Lipman, MSHS, PA-C
              </h2>
              <p className="mt-6 text-base leading-8 text-zinc-600">
                Chelsea founded Custom Beauty Med Studio to make confidence-boosting,
                natural-looking treatments feel personal, approachable, and never pushy.
                Her own experience with hair loss led her to PRP and PRF therapy, then
                to advanced training in injectables, threads, mesotherapy, and regenerative aesthetics.
              </p>
              <p className="mt-4 text-base leading-8 text-zinc-600">
                Each plan is customized around your features, goals, age, gender, and ethnicity
                so your results look like you: refreshed, balanced, and beautifully natural.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {['George Washington University MSHS, PA-C', 'Advanced Botox + Filler', 'PDO Threads', 'ASL-friendly'].map((credential) => (
                  <span
                    key={credential}
                    className="border border-zinc-200 bg-gray-100 px-3 py-2 text-[0.65rem] font-medium uppercase tracking-[0.16em] text-zinc-700"
                  >
                    {credential}
                  </span>
                ))}
              </div>
              <a
                href={appointmentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 inline-flex h-12 items-center justify-center bg-zinc-900 px-7 text-white transition hover:bg-zinc-700 ${uiTextClass} rounded-none`}
              >
                SCHEDULE WITH CHELSEA
              </a>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden">
          <img
            src="/images/medspa/botanical-clear-skin.png"
            alt="Client portrait framed by lush botanical leaves"
            className="h-[72vh] w-full object-cover object-center"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
            <h2 className="font-display text-5xl font-semibold leading-none sm:text-6xl">
              NATURAL RESULTS
            </h2>
            <a
              href="#about"
              className={`mt-7 inline-flex h-12 items-center justify-center bg-white px-8 text-zinc-900 transition hover:bg-zinc-100 ${uiTextClass} rounded-none`}
            >
              READ CHELSEA'S STORY
            </a>
          </div>
        </section>

        <section className="bg-gray-100 px-4 py-14 sm:px-6">
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <p className="font-sans text-[0.7rem] font-medium uppercase tracking-[0.18em] text-zinc-600">
                PATIENT-LOVED CARE NEAR CAPITOL HILL
              </p>
              <div className="mt-3 flex items-center justify-center gap-1 text-zinc-700">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={`review-star-${index}`}
                    className="h-4 w-4 fill-current"
                    strokeWidth={1.2}
                  />
                ))}
              </div>
            </div>

            <div className="mt-10 border-y border-zinc-300 py-6">
              <TestimonialSection />
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-14 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-2 gap-4">
              {trustItems.map((item) => (
                <article
                  key={item.title}
                  className="flex min-h-28 flex-col items-center justify-center border border-zinc-200 bg-gray-100 px-3 py-5 text-center"
                >
                  <item.icon className="h-7 w-7 text-zinc-700" strokeWidth={1.3} />
                  <p className="mt-3 text-[0.67rem] font-medium uppercase tracking-[0.16em] text-zinc-700">
                    {item.title}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer id="footer" className="border-t border-zinc-200 bg-white px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-3xl text-zinc-900 sm:text-4xl">Join the Custom Beauty Community</h2>
          <form className="mt-5 flex w-full items-stretch gap-2">
            <input
              type="email"
              placeholder="Email Address"
              className="h-12 flex-1 border border-zinc-300 bg-white px-3 text-sm text-zinc-900 placeholder:text-zinc-500 focus:border-zinc-900 focus:outline-none"
            />
            <button
              type="submit"
              className={`h-12 bg-zinc-900 px-5 text-white transition hover:bg-zinc-700 ${uiTextClass} rounded-none`}
            >
              SUBMIT
            </button>
          </form>
          <div className="mt-6 grid gap-2 text-sm leading-6 text-zinc-600 sm:grid-cols-3">
            <a href={phoneHref} className="transition hover:text-zinc-900">
              (202) 410-1199
            </a>
            <a href={emailHref} className="transition hover:text-zinc-900">
              info@custombeautymedstudio.com
            </a>
            <p>660 Pennsylvania Ave SE, Suite 103, Washington, DC 20003</p>
          </div>

          <div className="mt-10 border-t border-zinc-200">
            {footerSections.map((section) => (
              <details key={section} className="group border-b border-zinc-200">
                <summary
                  className={`flex cursor-pointer list-none items-center justify-between py-4 text-zinc-900 ${uiTextClass} [&::-webkit-details-marker]:hidden`}
                >
                  {section}
                  <span className="text-sm tracking-normal transition group-open:rotate-45">+</span>
                </summary>
                <div className="pb-4 text-sm text-zinc-600">
                  Custom Beauty {section.toLowerCase()} details available during consultation.
                </div>
              </details>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
