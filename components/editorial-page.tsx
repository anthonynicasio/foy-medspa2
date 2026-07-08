'use client';

import type { ReactNode } from 'react';
import { ArrowRight, ArrowUpRight, Plus } from 'lucide-react';
import { motion } from 'framer-motion';

const phone = '(904) 295-4595';
const phoneHref = 'tel:+19042954595';
const email = 'stauglaser@gmail.com';
const bookingUrl = 'https://booking.mangomint.com/737916';
const membershipUrl = 'https://clients.mangomint.com/fountainofyouthspa/memberships/29';
const giftCardUrl = 'https://clients.mangomint.com/gift-cards/737916';
const reviewsUrl = 'https://g.page/r/CS_nA0tgMpSZEBE/review';

const navLinks = [
  { label: 'Treatments', href: '#treatments' },
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Providers', href: '#providers' },
  { label: 'Visit', href: '#visit' },
];

const tickerItems = [
  'Botox & Wrinkle Reducers',
  'Dermal & Lip Filler',
  'Laser Hair Removal',
  'Laser Facials',
  'Medical Skincare',
  'Wellness & Weight Loss',
  'Tattoo Removal',
];

const treatments = [
  {
    number: '01',
    title: 'Botox & Wrinkle Reducers',
    text: 'Soften fine lines while keeping your natural expression intact.',
    image: '/images/medspa/calm-injectables-consult.png',
    alt: 'Calm client receiving a wrinkle-reducer consultation',
  },
  {
    number: '02',
    title: 'Dermal & Lip Filler',
    text: 'Subtle volume and balance, sculpted by expert injectors.',
    image: '/images/medspa/filler-injection.png',
    alt: 'Provider performing a precise filler injection',
  },
  {
    number: '03',
    title: 'Laser Hair Removal',
    text: 'Smooth, lasting results with advanced laser technology.',
    image: '/images/medspa/laser-underarm.png',
    alt: 'Client receiving underarm laser hair removal',
  },
  {
    number: '04',
    title: 'Laser Facials',
    text: 'Resurface, tighten, and renew for luminous skin.',
    image: '/images/medspa/laser-facial-goggles.png',
    alt: 'Client relaxing during a facial laser treatment',
  },
  {
    number: '05',
    title: 'Medical Skincare',
    text: 'Clinical-grade facials and skincare tailored to you.',
    image: '/images/medspa/provider-mask-treatment.jpg',
    alt: 'Provider applying a professional facial mask treatment',
  },
  {
    number: '06',
    title: 'Wellness & Weight Loss',
    text: 'Provider-guided programs to feel your best from within.',
    image: '/images/medspa/wellness-injection.png',
    alt: 'Client administering a provider-guided wellness injection',
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

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function Reveal({ className, children, id }: { className?: string; children: ReactNode; id?: string }) {
  return (
    <motion.section
      id={id}
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {children}
    </motion.section>
  );
}

const label = 'text-[0.64rem] font-semibold uppercase tracking-[0.3em]';

export function EditorialPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-950">
      <div className="border-b border-zinc-950 px-4 py-2 text-center text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-zinc-950 sm:text-[0.64rem] sm:tracking-[0.3em]">
        Complimentary Consultations · Members Save 10% Every Visit
      </div>

      <header className="sticky top-0 z-50 border-b border-zinc-950 bg-white">
        <div className="mx-auto flex h-16 max-w-[90rem] items-stretch justify-between">
          <a href="#" className="flex shrink-0 items-center border-r border-zinc-950 px-4 font-display text-lg font-semibold tracking-tight sm:px-8 sm:text-xl">
            Fountain of Youth
          </a>
          <nav className="hidden flex-1 items-center gap-10 px-10 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`${label} text-zinc-500 transition hover:text-zinc-950`}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex shrink-0 items-center gap-2 bg-zinc-950 px-4 text-white transition hover:bg-zinc-700 sm:px-10 ${label}`}
          >
            Book Now
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      <main>
        <Reveal className="border-b border-zinc-950">
          <div className="mx-auto max-w-[90rem]">
            <div className={`flex flex-wrap items-center justify-between gap-2 border-b border-zinc-950 px-5 py-3 text-zinc-500 sm:px-8 ${label}`}>
              <span>Vol. 01 · Medical Aesthetics</span>
              <span className="hidden sm:inline">St. Augustine, FL</span>
              <span>Est. 4.9 ★ / 223 Reviews</span>
            </div>

            <div className="grid lg:grid-cols-[1.2fr_1fr]">
              <div className="flex flex-col justify-between px-5 py-12 sm:px-8 lg:py-16">
                <h1 className="font-display text-[17vw] font-medium leading-[0.88] tracking-tight sm:text-[11vw] lg:text-[7.5rem] xl:text-[8.5rem]">
                  NATURALLY
                  <br />
                  <em className="font-light">confident.</em>
                </h1>
                <div className="mt-12 flex flex-wrap items-end justify-between gap-8">
                  <p className="max-w-sm text-[0.95rem] font-light leading-7 text-zinc-600">
                    Injectables, advanced lasers, medical skincare, and wellness, brought together
                    with an editorial approach to aesthetic medicine that is precise, restrained,
                    and unmistakably you.
                  </p>
                  <a
                    href={bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group inline-flex items-center gap-3 border border-zinc-950 px-7 py-4 transition hover:bg-zinc-950 hover:text-white ${label}`}
                  >
                    Book Your Consult
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </a>
                </div>
              </div>

              <figure className="border-t border-zinc-950 lg:border-l lg:border-t-0">
                <img
                  src="/images/medspa/curly-glow-portrait.png"
                  alt="Woman with glowing skin resting her cheek on her hand"
                  className="h-full max-h-[42rem] w-full object-cover object-top"
                  loading="eager"
                  decoding="async"
                />
                <figcaption className={`border-t border-zinc-950 px-5 py-3 text-zinc-500 sm:px-8 ${label}`}>
                  Fig. 01 · The natural result
                </figcaption>
              </figure>
            </div>
          </div>
        </Reveal>

        <div className="overflow-hidden border-b border-zinc-950 bg-zinc-950 py-3 text-white">
          <div className="flex w-max animate-ticker gap-0 whitespace-nowrap">
            {[...tickerItems, ...tickerItems].map((item, index) => (
              <span key={`${item}-${index}`} className={`flex items-center gap-6 pr-6 ${label}`}>
                {item}
                <Plus className="h-3 w-3" />
              </span>
            ))}
          </div>
        </div>

        <Reveal id="treatments" className="border-b border-zinc-950">
          <div className="mx-auto max-w-[90rem]">
            <div className="flex flex-wrap items-end justify-between gap-4 px-5 pb-10 pt-14 sm:px-8">
              <div>
                <p className={`${label} text-zinc-500`}>Index</p>
                <h2 className="mt-3 font-display text-5xl font-medium tracking-tight sm:text-6xl">
                  The Treatments
                </h2>
              </div>
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 ${label} underline underline-offset-8 transition hover:text-zinc-500`}
              >
                Full Menu
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>

            <div className="grid border-t border-zinc-950 sm:grid-cols-2 lg:grid-cols-3">
              {treatments.map((treatment, index) => (
                <a
                  key={treatment.number}
                  href={bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group border-b border-zinc-950 last:border-b-0 sm:[&:nth-child(odd)]:border-r lg:border-r lg:[&:nth-child(3n)]:border-r-0 ${
                    index >= treatments.length - 3 ? 'lg:border-b-0' : ''
                  } ${index >= treatments.length - 2 ? 'sm:border-b-0 lg:border-b-0' : ''}`}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={treatment.image}
                      alt={treatment.alt}
                      className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/65 via-zinc-950/25 to-zinc-950/5 transition-opacity duration-500 group-hover:opacity-0" />
                  </div>
                  <div className="flex items-start justify-between gap-4 border-t border-zinc-950 p-6">
                    <div>
                      <p className={`${label} text-zinc-400`}>{treatment.number}</p>
                      <h3 className="mt-2 font-display text-2xl font-medium leading-tight sm:text-3xl">
                        {treatment.title}
                      </h3>
                      <p className="mt-2 text-sm font-light leading-6 text-zinc-600">{treatment.text}</p>
                    </div>
                    <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal id="philosophy" className="border-b border-zinc-950">
          <div className="mx-auto grid max-w-[90rem] lg:grid-cols-[1fr_1.4fr]">
            <figure className="border-b border-zinc-950 lg:border-b-0 lg:border-r">
              <img
                src="/images/medspa/hero-calm-face.jpg"
                alt="Woman with closed eyes in soft light"
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <div className="px-5 py-16 sm:px-10 lg:py-24">
              <p className={`${label} text-zinc-500`}>The Philosophy</p>
              <p className="mt-8 font-display text-3xl font-light leading-snug tracking-tight sm:text-5xl">
                &ldquo;The best work simply looks like you on your best day,
                <em> refreshed, radiant, and completely yourself.</em>&rdquo;
              </p>
              <div className="mt-10 h-px w-16 bg-zinc-950" />
              <p className="mt-8 max-w-md text-[0.95rem] font-light leading-7 text-zinc-600">
                Every visit begins with a complimentary consultation, an honest conversation about
                your skin, your goals, and what will genuinely serve them. Our provider-led team
                builds a plan around you, pairing medical precision with a light, natural touch.
              </p>
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-10 inline-flex items-center gap-3 border border-zinc-950 px-7 py-4 transition hover:bg-zinc-950 hover:text-white ${label}`}
              >
                Start With a Consult
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal className="border-b border-zinc-950 bg-zinc-950 text-white">
          <div className="mx-auto grid max-w-[90rem] lg:grid-cols-2">
            <div className="flex flex-col justify-center px-5 py-16 sm:px-10 lg:py-24">
              <p className={`${label} text-zinc-400`}>The Glow Plan · Membership</p>
              <h2 className="mt-6 font-display text-5xl font-medium leading-[0.95] tracking-tight sm:text-7xl">
                Save 10%,
                <br />
                <em className="font-light">every visit.</em>
              </h2>
              <p className="mt-8 max-w-sm text-[0.95rem] font-light leading-7 text-zinc-400">
                Member-exclusive perks and pricing designed for continuity, because beautiful
                results deserve consistent care.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href={membershipUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 bg-white px-7 py-4 text-zinc-950 transition hover:bg-zinc-300 ${label}`}
                >
                  Explore Membership
                </a>
                <a
                  href={giftCardUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 border border-white/40 px-7 py-4 text-white transition hover:border-white ${label}`}
                >
                  Gift Cards
                </a>
              </div>
            </div>
            <figure className="border-t border-white/20 lg:border-l lg:border-t-0">
              <img
                src="/images/medspa/soft-reflection-face.jpg"
                alt="Serene face in soft reflected light"
                className="h-full max-h-[36rem] w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </figure>
          </div>
        </Reveal>

        <Reveal id="providers" className="border-b border-zinc-950">
          <div className="mx-auto max-w-[90rem]">
            <div className="flex flex-wrap items-end justify-between gap-4 px-5 pb-10 pt-14 sm:px-8">
              <div>
                <p className={`${label} text-zinc-500`}>The Masthead</p>
                <h2 className="mt-3 font-display text-5xl font-medium tracking-tight sm:text-6xl">
                  Expert Providers
                </h2>
              </div>
              <p className="max-w-sm text-sm font-light leading-6 text-zinc-600">
                Our team of nurses, nurse practitioners, and a medical director places every
                treatment in experienced, credentialed hands.
              </p>
            </div>

            <div className="flex snap-x snap-mandatory overflow-x-auto border-t border-zinc-950">
              {staffMembers.map((provider) => (
                <article
                  key={provider.name}
                  className="group min-w-[68%] snap-start border-r border-zinc-950 last:border-r-0 sm:min-w-[38%] lg:min-w-[24%]"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={provider.image}
                      alt={`${provider.name} professional portrait`}
                      className="aspect-[4/3] w-full bg-zinc-100 object-cover object-top"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/55 via-zinc-950/20 to-zinc-950/5 transition-opacity duration-500 group-hover:opacity-0" />
                  </div>
                  <div className="border-t border-zinc-950 p-5">
                    <h3 className="font-display text-xl font-medium leading-tight">{provider.name}</h3>
                    <p className="mt-1.5 min-h-10 text-[0.78rem] leading-5 text-zinc-500">
                      {provider.title}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal className="border-b border-zinc-950">
          <div className="mx-auto max-w-[90rem] px-5 py-16 text-center sm:px-8 lg:py-24">
            <p className={`${label} text-zinc-500`}>The Review · 4.9 / 5.0 on Google</p>
            <blockquote className="mx-auto mt-10 max-w-4xl">
              <p className="font-display text-3xl font-light leading-snug tracking-tight sm:text-5xl">
                &ldquo;Fountain of Youth Spa in St. Augustine is absolutely my top spa. The staff
                are all wonderful professionals&hellip; I have lost 35 pounds with their help
                too.&rdquo;
              </p>
              <footer className={`mt-8 ${label} text-zinc-500`}>
                Venessa Maxwell · Google Review
              </footer>
            </blockquote>
            <a
              href={reviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-10 inline-flex items-center gap-2 ${label} underline underline-offset-8 transition hover:text-zinc-500`}
            >
              Read 223 Reviews
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </Reveal>

        <Reveal id="visit" className="border-b border-zinc-950">
          <div className="mx-auto grid max-w-[90rem] lg:grid-cols-[1fr_1.4fr]">
            <img
              src="/images/medspa/light-skin-detail.jpg"
              alt="Detail of light falling across skin"
              className="h-full max-h-[30rem] w-full border-b border-zinc-950 object-cover lg:max-h-none lg:border-b-0 lg:border-r"
              loading="lazy"
              decoding="async"
            />
            <div className="flex flex-col justify-between px-5 py-12 sm:px-10 lg:py-20">
              <div>
                <p className={`${label} text-zinc-400`}>Fig. 02 · The Studio</p>
                <h3 className="mt-4 font-display text-5xl font-medium tracking-tight sm:text-6xl">
                  St. Augustine
                  <em className="block font-light">Florida</em>
                </h3>
                <p className="mt-6 max-w-md text-[0.95rem] font-light leading-7 text-zinc-600">
                  Our boutique studio sits in the heart of the nation&rsquo;s oldest city, where
                  every appointment feels considered, personal, and unhurried.
                </p>
                <div className="mt-6 flex flex-col gap-1.5 text-sm font-light text-zinc-600">
                  <a href={phoneHref} className="transition hover:text-zinc-950">
                    {phone}
                  </a>
                  <a href={`mailto:${email}`} className="transition hover:text-zinc-950">
                    {email}
                  </a>
                </div>
              </div>
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-10 inline-flex w-fit items-center gap-3 border border-zinc-950 px-7 py-4 transition hover:bg-zinc-950 hover:text-white ${label}`}
              >
                Book This Studio
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </main>

      <footer className="bg-zinc-950 text-white">
        <div className="mx-auto max-w-[90rem] px-5 pb-28 pt-16 sm:px-8 sm:pb-16">
          <div className="flex flex-wrap items-end justify-between gap-8 border-b border-white/15 pb-12">
            <p className="font-display text-[13vw] font-medium leading-none tracking-tight sm:text-7xl lg:text-8xl">
              Get glowing.
            </p>
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-3 bg-white px-8 py-5 text-zinc-950 transition hover:bg-zinc-300 ${label}`}
            >
              Book Your Visit
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid gap-10 pt-12 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className={`${label} text-zinc-500`}>Studio</p>
              <p className="mt-4 text-sm font-light leading-7 text-zinc-400">
                Fountain of Youth Spa &amp; Laser Center
                <br />
                St. Augustine, FL
              </p>
            </div>
            <div>
              <p className={`${label} text-zinc-500`}>Contact</p>
              <div className="mt-4 flex flex-col gap-2 text-sm font-light text-zinc-400">
                <a href={phoneHref} className="transition hover:text-white">
                  {phone}
                </a>
                <a href={`mailto:${email}`} className="transition hover:text-white">
                  {email}
                </a>
              </div>
            </div>
            <div>
              <p className={`${label} text-zinc-500`}>Links</p>
              <div className="mt-4 flex flex-col gap-2 text-sm font-light text-zinc-400">
                <a href={membershipUrl} target="_blank" rel="noopener noreferrer" className="transition hover:text-white">
                  Membership
                </a>
                <a href={giftCardUrl} target="_blank" rel="noopener noreferrer" className="transition hover:text-white">
                  Gift Cards
                </a>
                <a href={reviewsUrl} target="_blank" rel="noopener noreferrer" className="transition hover:text-white">
                  Reviews
                </a>
                <a href="/" className="transition hover:text-white">
                  Warm Edition
                </a>
              </div>
            </div>
            <div>
              <p className={`${label} text-zinc-500`}>Colophon</p>
              <p className="mt-4 text-sm font-light leading-7 text-zinc-400">
                © {new Date().getFullYear()} Fountain of Youth
                <br />
                Concept design · unofficial site
              </p>
            </div>
          </div>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-zinc-950 bg-white sm:hidden">
        <div className="grid grid-cols-2">
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex h-14 items-center justify-center bg-zinc-950 text-white ${label}`}
          >
            Book Now
          </a>
          <a href={phoneHref} className={`flex h-14 items-center justify-center ${label}`}>
            Call
          </a>
        </div>
      </div>
    </div>
  );
}
