import { useState } from 'react';
import type { LucideIcon } from 'lucide-react';
import {
  BookOpen,
  ChevronLeft,
  ChevronRight,
  CalendarDays,
  Leaf,
  Menu,
  Search,
  Shield,
  ShoppingBag,
  Star,
  Stethoscope,
} from 'lucide-react';

const categoryItems = [
  {
    label: 'INJECTABLES',
    image: '/images/medspa/confident-portrait.jpg',
    alt: 'Model portrait with luminous skin',
  },
  {
    label: 'LASERS',
    image: '/images/medspa/light-skin-detail.jpg',
    alt: 'Close up skin texture in soft light',
  },
  {
    label: 'WELLNESS',
    image: '/images/medspa/facial-treatment.jpg',
    alt: 'Calm treatment room scene',
  },
  {
    label: 'SKINCARE',
    image: '/images/medspa/serum-dropper.jpg',
    alt: 'Skincare serum macro detail',
  },
];

const vibeCards = [
  {
    title: 'More Radiant',
    image: '/images/medspa/radiant-skin-detail.jpg',
    alt: 'Radiant complexion portrait',
  },
  {
    title: 'More Sculpted',
    image: '/images/medspa/soft-reflection-face.jpg',
    alt: 'Editorial profile in reflected light',
  },
  {
    title: 'More Rested',
    image: '/images/medspa/hero-calm-face.jpg',
    alt: 'Relaxed face in soft natural light',
  },
  {
    title: 'More Balanced',
    image: '/images/medspa/provider-mask-treatment.jpg',
    alt: 'Provider guided facial treatment',
  },
];

const staffMembers = [
  {
    name: 'Jaimie Green',
    title: 'BSN, RN CME, Laser Specialist, Owner',
    image: '/images/staff/jaimie-green.jpg',
  },
  {
    name: 'Eric Pulsfus, M.D.',
    title: 'Medical Director',
    image: '/images/staff/eric-pulsfus-md.jpeg',
  },
  {
    name: 'Brittney Day',
    title: 'FNP-C Aesthetic Nurse Practitioner',
    image: '/images/staff/brittney-day.jpg',
  },
  {
    name: 'Catherine Seneca',
    title: 'FNP-C Aesthetic Nurse Practitioner',
    image: '/images/staff/catherine-seneca.jpg',
  },
  {
    name: 'Lynn Spain',
    title: 'BSN, RN, CME Laser Specialist',
    image: '/images/staff/lynn-spain.jpg',
  },
  {
    name: 'Sarah Green',
    title: 'BSN, RN, CME Laser Specialist',
    image: '/images/staff/sarah-green.jpeg',
  },
  {
    name: 'Shannon Woodside',
    title: 'Medical Aesthetician',
    image: '/images/staff/shannon-woodside.jpg',
  },
  {
    name: 'Savannah Stokes',
    title: 'CME, Medical Aesthetician',
    image: '/images/staff/savannah-stokes.jpg',
  },
  {
    name: 'Taylor Waters',
    title: 'Medical Aesthetician',
    image: '/images/staff/taylor-waters.jpg',
  },
  {
    name: 'Carol Staples',
    title: 'Manager',
    image: '/images/staff/carol-staples.jpg',
  },
  {
    name: 'Olivia Berarducci',
    title: 'Nurse Intern',
    image: '/images/staff/olivia-berarducci.jpeg',
  },
];

const reviewSlides = [
  {
    quote:
      'Every service has been provided with the utmost care. Taylor, Lynn, and Catherine are consistently professional, intuitive, and exceptionally well-trained.',
    author: 'ALEXANDRIA K.',
  },
  {
    quote:
      'Every experience has been fantastic. I always feel welcome and comfortable, without being pushy.',
    author: 'REBECCA S.',
  },
  {
    quote:
      'The only place I go for my injections and facials. The staff are all wonderful professionals.',
    author: 'VENESSA M.',
  },
];

const trustItems: Array<{ icon: LucideIcon; title: string }> = [
  { icon: Stethoscope, title: 'Provider-Led Care' },
  { icon: Leaf, title: 'Natural Philosophy' },
  { icon: Shield, title: 'Safety First Standards' },
  { icon: CalendarDays, title: 'Personalized Plans' },
];

const footerSections = ['Treatments', 'About', 'Contact'];

const uiTextClass =
  'font-sans text-[0.68rem] font-semibold uppercase tracking-[0.2em]';

export function LandingPage() {
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);
  const activeReview = reviewSlides[activeReviewIndex];

  const handlePreviousReview = () => {
    setActiveReviewIndex((currentIndex) => {
      if (currentIndex === 0) {
        return reviewSlides.length - 1;
      }
      return currentIndex - 1;
    });
  };

  const handleNextReview = () => {
    setActiveReviewIndex((currentIndex) => (currentIndex + 1) % reviewSlides.length);
  };

  return (
    <div className="bg-white text-zinc-900">
      <div className="bg-zinc-900 px-4 py-2 text-center text-[0.62rem] font-medium uppercase tracking-[0.22em] text-white sm:text-xs">
        Complimentary Consultations • Members Save 15%
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
            Fountain of Youth
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
            <button
              type="button"
              aria-label="Book appointment"
              className="inline-flex h-9 w-9 items-center justify-center border border-transparent text-zinc-900 transition hover:border-zinc-300"
            >
              <BookOpen className="h-4 w-4" strokeWidth={1.75} />
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="relative h-screen overflow-hidden bg-zinc-900">
          <img
            src="/images/medspa/hero-calm-face.jpg"
            alt="Serene spa environment with soft natural light"
            className="h-full w-full object-cover object-center"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
            <p className="font-display text-5xl font-semibold leading-[0.9] sm:text-7xl">
              NATURALLY
              <br />
              CONFIDENT
            </p>
            <a
              href="#footer"
              className={`mt-8 inline-flex h-12 items-center justify-center bg-white px-7 text-zinc-900 transition hover:bg-zinc-100 ${uiTextClass} rounded-none`}
            >
              BOOK YOUR CONSULT
            </a>
          </div>
        </section>

        <section className="bg-white px-4 py-14 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-zinc-800">
              SHOP BY CATEGORY
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
                  <a
                    href="#"
                    className={`mt-3 inline-block text-zinc-900 underline underline-offset-4 ${uiTextClass}`}
                  >
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
              How do you want to feel?
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

        <section className="bg-white px-4 py-14 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-center font-display text-4xl leading-none text-zinc-900 sm:text-5xl">
              EXPERT PROVIDERS
            </h2>
            <div className="mt-7 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2">
              {staffMembers.map((provider) => (
                <article
                  key={provider.name}
                  className="min-w-[78%] snap-center border border-zinc-200 bg-gray-100 sm:min-w-[48%] md:min-w-[34%] lg:min-w-[24%]"
                >
                  <img
                    src={provider.image}
                    alt={`${provider.name} professional portrait`}
                    className="aspect-[4/5] w-full object-cover object-center grayscale contrast-125"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="border-t border-zinc-200 bg-white p-4">
                    <h3 className="font-sans text-base font-bold text-zinc-900">{provider.name}</h3>
                    <p className="mt-2 min-h-10 text-sm leading-5 text-zinc-500">{provider.title}</p>
                    <a
                      href="#"
                      className="mt-4 inline-block font-sans text-[0.62rem] font-medium uppercase tracking-[0.2em] text-zinc-800 underline underline-offset-4"
                    >
                      EXPLORE PROFILE
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden">
          <img
            src="/images/medspa/provider-mask-treatment.jpg"
            alt="Provider assisting a client in treatment room"
            className="h-[72vh] w-full object-cover object-center"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
            <h2 className="font-display text-5xl font-semibold leading-none sm:text-6xl">
              THE GLOW PLAN
            </h2>
            <button
              type="button"
              className={`mt-7 inline-flex h-12 items-center justify-center bg-white px-8 text-zinc-900 transition hover:bg-zinc-100 ${uiTextClass} rounded-none`}
            >
              EXPLORE MEMBERSHIPS
            </button>
          </div>
        </section>

        <section className="bg-gray-100 px-4 py-14 sm:px-6">
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <p className="font-sans text-[0.7rem] font-medium uppercase tracking-[0.18em] text-zinc-600">
                4.9 / 5.0 based on 222 Google reviews
              </p>
              <div className="mt-3 flex items-center justify-center gap-1 text-zinc-700">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={`review-star-${index}`}
                    className="h-4 w-4"
                    strokeWidth={1.2}
                  />
                ))}
              </div>
            </div>

            <div className="mt-10 border-y border-zinc-300 py-10">
              <p className="text-center font-display text-[2.2rem] leading-[0.95] text-zinc-900 sm:text-6xl">
                &ldquo;{activeReview.quote}&rdquo;
              </p>
              <p className="mt-6 text-center font-sans text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-zinc-600">
                {activeReview.author}
              </p>

              <div className="mt-8 flex items-center justify-center gap-3">
                <button
                  type="button"
                  aria-label="Previous review"
                  onClick={handlePreviousReview}
                  className="inline-flex h-11 w-11 items-center justify-center border border-zinc-300 bg-white text-zinc-800 transition hover:border-zinc-500"
                >
                  <ChevronLeft className="h-5 w-5" strokeWidth={1.25} />
                </button>
                <button
                  type="button"
                  aria-label="Next review"
                  onClick={handleNextReview}
                  className="inline-flex h-11 w-11 items-center justify-center border border-zinc-300 bg-white text-zinc-800 transition hover:border-zinc-500"
                >
                  <ChevronRight className="h-5 w-5" strokeWidth={1.25} />
                </button>
              </div>
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
          <h2 className="font-display text-3xl text-zinc-900 sm:text-4xl">Join the Community</h2>
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
                  Curated {section.toLowerCase()} details available during consultation.
                </div>
              </details>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
