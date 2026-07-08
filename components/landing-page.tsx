'use client';

import type { ReactNode } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Gem,
  Leaf,
  Menu,
  Phone,
  Shield,
  Sparkles,
  Star,
  Stethoscope,
} from 'lucide-react';
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
  { label: 'Experience', href: '#experience' },
  { label: 'Providers', href: '#providers' },
  { label: 'Membership', href: '#membership' },
];

const treatments = [
  {
    title: 'Botox & Wrinkle Reducers',
    text: 'Soften fine lines while keeping your natural expression.',
    image: '/images/medspa/calm-injectables-consult.png',
    alt: 'Calm client receiving a wrinkle-reducer consultation',
  },
  {
    title: 'Dermal & Lip Filler',
    text: 'Subtle volume and balance, sculpted by expert injectors.',
    image: '/images/medspa/filler-injection.png',
    alt: 'Provider performing a precise filler injection',
  },
  {
    title: 'Laser Hair Removal',
    text: 'Smooth, lasting results with advanced laser technology.',
    image: '/images/medspa/laser-underarm.png',
    alt: 'Client receiving underarm laser hair removal',
  },
  {
    title: 'Laser Facials',
    text: 'Resurface, tighten, and renew for luminous skin.',
    image: '/images/medspa/laser-facial-goggles.png',
    alt: 'Client relaxing during a facial laser treatment',
  },
  {
    title: 'Medical Skincare',
    text: 'Clinical-grade facials and skincare tailored to you.',
    image: '/images/medspa/provider-mask-treatment.jpg',
    alt: 'Provider applying a professional facial mask treatment',
  },
  {
    title: 'Wellness & Weight Loss',
    text: 'Provider-guided programs to feel your best from within.',
    image: '/images/medspa/wellness-injection.png',
    alt: 'Client administering a provider-guided wellness injection',
  },
];

const experienceItems = [
  {
    title: 'A Serene, Modern Space',
    text: 'A calm, welcoming environment that feels like a retreat, so every visit begins with ease.',
    image: '/images/medspa/hero-calm-face.jpg',
    alt: 'Woman with closed eyes in soft, calming light',
  },
  {
    title: 'Natural-Looking Results',
    text: 'We believe in gentle enhancement that leaves you looking refreshed and unmistakably like yourself.',
    image: '/images/medspa/clean-beauty-portrait.png',
    alt: 'Woman with naturally glowing skin among botanical leaves',
  },
  {
    title: 'Advanced Technology',
    text: 'From medical-grade lasers to the latest injectables, we invest in what is proven, safe, and effective.',
    image: '/images/medspa/laser-upper-lip.png',
    alt: 'Precision laser treatment in progress',
  },
  {
    title: 'Care Beyond the Visit',
    text: 'Personalized plans, honest guidance, and genuine follow-through, with your goals shaping every recommendation.',
    image: '/images/medspa/at-home-skincare.png',
    alt: 'Client continuing her skincare routine at home',
  },
  {
    title: 'For Him, Too',
    text: 'Tailored aesthetics and skincare for men that stays subtle, effective, and discreet.',
    image: '/images/medspa/mens-clear-skin.png',
    alt: 'Man with clear, healthy skin',
  },
  {
    title: 'Take the Glow Home',
    text: 'Medical-grade skincare curated by our providers keeps your results going between visits.',
    image: '/images/medspa/serum-dropper.jpg',
    alt: 'Serum dropper applying skincare to skin',
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

const trustItems = [
  { icon: Stethoscope, title: 'Provider-Led Care' },
  { icon: Leaf, title: 'Natural Philosophy' },
  { icon: Shield, title: 'Safety-First Standards' },
  { icon: CalendarDays, title: 'Personalized Plans' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
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
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    >
      {children}
    </motion.section>
  );
}

export function LandingPage() {
  return (
    <div className="surface-cream grain min-h-screen text-espresso">
      <div className="surface-espresso px-4 py-2.5 text-center text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-cream/90 sm:text-xs sm:tracking-[0.28em]">
        Complimentary Consultations&ensp;·&ensp;Members Save 10% Every Visit
      </div>

      <header className="sticky top-0 z-50 border-b border-espresso/10 bg-cream/85 backdrop-blur-xl">
        <div className="section-shell flex h-[4.5rem] items-center justify-between gap-3 sm:gap-6">
          <a
            href="#"
            className="shrink-0 font-display text-xl font-semibold leading-none tracking-tight sm:text-[1.6rem]"
          >
            Fountain of Youth
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-espresso/70 transition hover:text-espresso"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <a
              href={phoneHref}
              className="hidden items-center gap-2 text-sm font-medium text-espresso/70 transition hover:text-espresso md:inline-flex"
            >
              <Phone className="h-3.5 w-3.5" />
              {phone}
            </a>
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center justify-center rounded-full bg-espresso px-4 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-cream shadow-sm transition hover:bg-clay sm:h-11 sm:px-6 sm:text-[0.68rem] sm:tracking-[0.2em]"
            >
              Book Now
            </a>
            <button
              type="button"
              aria-label="Open menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-espresso/15 text-espresso transition hover:border-espresso/40 sm:h-11 sm:w-11 lg:hidden"
            >
              <Menu className="h-5 w-5" strokeWidth={1.75} />
            </button>
          </div>
        </div>
      </header>

      <main>
        <Reveal className="surface-cream-soft grain relative overflow-hidden">
          <div className="section-shell grid items-center gap-10 py-16 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:py-24">
            <div className="max-w-xl">
              <p className="eyebrow">Med Spa · St. Augustine, FL</p>
              <h1 className="mt-6 font-display text-[2.75rem] font-medium leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
                Naturally confident,
                <br />
                <em className="text-clay">expertly delivered.</em>
              </h1>
              <p className="mt-7 max-w-md text-base font-light leading-8 text-espresso/70">
                Injectables, advanced lasers, medical skincare, and wellness, all delivered by
                experienced providers in a space designed to put you at ease.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-[3.25rem] items-center justify-center gap-2 rounded-full bg-espresso px-8 py-4 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-cream shadow-soft transition hover:bg-clay"
                >
                  Book Your Consult
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#treatments" className="pill-link text-[0.7rem]">
                  Explore Treatments
                </a>
              </div>
              <div className="mt-10 flex items-center gap-3">
                <div className="flex items-center gap-1 text-clay">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={`hero-star-${index}`} className="h-4 w-4 fill-current" strokeWidth={0} />
                  ))}
                </div>
                <p className="text-sm text-espresso/60">
                  4.9 rated · 223 Google reviews
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-[2.5rem] shadow-soft">
                <img
                  src="/images/medspa/radiant-skin-models.png"
                  alt="Two models with radiant, glowing skin"
                  className="aspect-[4/5] w-full object-cover object-center sm:aspect-[5/6]"
                  loading="eager"
                  decoding="async"
                />
              </div>
              <div className="surface-sand absolute -bottom-6 -left-6 hidden max-w-56 rounded-[1.75rem] p-5 shadow-soft sm:block">
                <Sparkles className="h-5 w-5 text-clay" strokeWidth={1.5} />
                <p className="mt-3 font-display text-xl leading-tight">
                  A boutique studio in historic St. Augustine
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="border-y border-espresso/10 bg-white/40 backdrop-blur-sm">
          <div className="section-shell grid grid-cols-2 gap-x-6 gap-y-5 py-8 md:grid-cols-4">
            {trustItems.map((item) => (
              <div key={item.title} className="flex items-center justify-center gap-3">
                <item.icon className="h-5 w-5 shrink-0 text-clay" strokeWidth={1.5} />
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-espresso/75">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal id="treatments" className="py-20 lg:py-28">
          <div className="section-shell">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="eyebrow">Treatments</p>
                <h2 className="mt-4 font-display text-4xl font-medium leading-none tracking-tight sm:text-5xl">
                  Book <em className="text-clay">what&rsquo;s next</em>
                </h2>
              </div>
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="pill-link text-[0.66rem]"
              >
                View Full Menu
              </a>
            </div>

            <div className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 lg:grid lg:grid-cols-3 lg:overflow-visible">
              {treatments.map((treatment) => (
                <article
                  key={treatment.title}
                  className="group min-w-[78%] snap-center overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/60 shadow-soft backdrop-blur-sm transition duration-300 hover:-translate-y-1 sm:min-w-[46%] lg:min-w-0"
                >
                  <div className="overflow-hidden">
                    <img
                      src={treatment.image}
                      alt={treatment.alt}
                      className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-2xl leading-tight">{treatment.title}</h3>
                    <p className="mt-2.5 text-sm font-light leading-6 text-espresso/65">{treatment.text}</p>
                    <a
                      href={bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-1.5 text-[0.66rem] font-bold uppercase tracking-[0.2em] text-clay transition hover:text-espresso"
                    >
                      Book Now
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal className="surface-sand grain py-20 lg:py-24">
          <div className="section-shell grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div className="mx-auto w-full max-w-md lg:max-w-none">
              <img
                src="/images/medspa/curly-glow-portrait.png"
                alt="Woman with glowing skin resting her cheek on her hand"
                className="aspect-[4/5] w-full rounded-[2.5rem] object-cover object-top shadow-soft"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="max-w-xl">
              <p className="eyebrow">Our Philosophy</p>
              <h2 className="mt-5 font-display text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
                Let Fountain of Youth be your guide
              </h2>
              <p className="mt-7 text-base font-light leading-8 text-espresso/70">
                Aesthetic medicine works best when it starts with listening. Every visit begins with
                a complimentary consultation, an honest conversation about your skin, your goals,
                and what will genuinely serve them. From there, our provider-led team builds a plan
                around you, pairing medical expertise with a light, natural touch, so you leave
                looking like yourself at your very best.
              </p>
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-clay transition hover:text-espresso"
              >
                Start With a Consult
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal id="experience" className="py-20 lg:py-28">
          <div className="section-shell">
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow">The Experience</p>
              <h2 className="mt-4 font-display text-4xl font-medium leading-none tracking-tight sm:text-5xl">
                What to look forward to
              </h2>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {experienceItems.map((item) => (
                <article
                  key={item.title}
                  className="group relative overflow-hidden rounded-[2rem] shadow-soft"
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/85 via-espresso/25 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-7">
                    <h3 className="font-display text-2xl text-cream sm:text-3xl">{item.title}</h3>
                    <p className="mt-2 max-w-md text-sm font-light leading-6 text-cream/75">{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal id="membership" className="relative overflow-hidden">
          <img
            src="/images/medspa/glow-facial-treatment.png"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover object-[30%_35%]"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-espresso/95 via-espresso/70 to-espresso/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-espresso/30" />
          <div className="section-shell relative py-24 lg:py-32">
            <div className="max-w-xl text-cream lg:ml-auto">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-blush">
                <Gem className="mr-2 inline-block h-3.5 w-3.5 align-[-2px]" />
                The Glow Plan Membership
              </p>
              <h2 className="mt-5 font-display text-4xl font-medium leading-tight tracking-tight sm:text-6xl">
                Begin your skincare &amp; wellness journey with us
              </h2>
              <p className="mt-6 max-w-md text-base font-light leading-8 text-cream/75">
                Save 10% on every visit, enjoy member-exclusive perks, and keep your results going
                with care that fits your rhythm.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href={membershipUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-[3.25rem] items-center justify-center rounded-full bg-cream px-8 py-4 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-espresso transition hover:bg-blush"
                >
                  Explore Membership
                </a>
                <a
                  href={giftCardUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-[3.25rem] items-center justify-center rounded-full border border-cream/40 px-8 py-4 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-cream transition hover:border-cream hover:bg-cream/10"
                >
                  Send a Gift Card
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal id="providers" className="py-20 lg:py-28">
          <div className="section-shell">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="eyebrow">Our Team</p>
                <h2 className="mt-4 font-display text-4xl font-medium leading-none tracking-tight sm:text-5xl">
                  Expert providers, <em className="text-clay">genuine care</em>
                </h2>
              </div>
              <p className="max-w-sm text-sm font-light leading-6 text-espresso/65">
                Our team of nurses, nurse practitioners, and a medical director places every
                treatment in experienced, credentialed hands.
              </p>
            </div>

            <div className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4">
              {staffMembers.map((provider) => (
                <article
                  key={provider.name}
                  className="min-w-[70%] snap-center overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/60 shadow-soft backdrop-blur-sm sm:min-w-[42%] lg:min-w-[23%]"
                >
                  <img
                    src={provider.image}
                    alt={`${provider.name} professional portrait`}
                    className="aspect-[4/3] w-full bg-sand object-cover object-top"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="p-5">
                    <h3 className="font-display text-xl leading-tight">{provider.name}</h3>
                    <p className="mt-1.5 min-h-10 text-[0.8rem] leading-5 text-espresso/60">
                      {provider.title}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal className="surface-espresso grain-light py-20 text-cream lg:py-28">
          <div className="section-shell grid items-center gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <img
                src="/images/medspa/joyful-community-group.png"
                alt="Three happy clients laughing together"
                className="aspect-[4/3] w-full rounded-[2.5rem] object-cover shadow-soft"
                loading="lazy"
                decoding="async"
              />
              <img
                src="/images/medspa/kiwi-skincare.png"
                alt="Smiling woman holding kiwi halves for a skincare moment"
                className="absolute -bottom-8 -right-4 hidden w-36 rounded-[1.5rem] border-4 border-espresso object-cover shadow-soft sm:block lg:-right-8 lg:w-44"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-blush">
                Don&rsquo;t just take our word for it
              </p>
              <div className="mt-6 flex items-center gap-1.5 text-blush">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={`review-star-${index}`} className="h-5 w-5 fill-current" strokeWidth={0} />
                ))}
              </div>
              <blockquote className="mt-7">
                <p className="font-display text-2xl font-light leading-relaxed text-cream/90 sm:text-3xl">
                  &ldquo;Fountain of Youth Spa in St. Augustine is absolutely my top spa. The staff
                  are all wonderful professionals&hellip; I have lost 35 pounds with their help
                  too.&rdquo;
                </p>
                <footer className="mt-6 text-sm text-cream/60">
                  Venessa Maxwell · Google review
                </footer>
              </blockquote>
              <a
                href={reviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-9 inline-flex items-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-blush transition hover:text-cream"
              >
                Read 223 Reviews
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal className="surface-cream-soft grain border-t border-espresso/10 py-20 text-center lg:py-24">
          <div className="section-shell mx-auto max-w-2xl">
            <p className="font-display text-3xl italic leading-snug text-espresso/85 sm:text-4xl">
              We&rsquo;re ready whenever you are.
            </p>
            <p className="mt-4 text-base font-light text-espresso/65">
              Book your appointment and get glowing today.
            </p>
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex h-[3.25rem] items-center justify-center gap-2 rounded-full bg-espresso px-9 py-4 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-cream shadow-soft transition hover:bg-clay"
            >
              Book Your Visit
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </main>

      <footer className="surface-espresso grain-light px-5 pb-28 pt-16 text-cream sm:px-8 sm:pb-16 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
            <div>
              <p className="font-display text-3xl tracking-tight">Fountain of Youth</p>
              <p className="mt-4 max-w-xs text-sm font-light leading-7 text-cream/60">
                Modern medical aesthetics, delivered with a natural philosophy in historic
                St. Augustine, Florida.
              </p>
            </div>

            <div>
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.24em] text-blush">Treatments</p>
              <ul className="mt-5 flex flex-col gap-3 text-sm text-cream/65">
                {treatments.map((treatment) => (
                  <li key={treatment.title}>
                    <a href="#treatments" className="transition hover:text-cream">
                      {treatment.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.24em] text-blush">Quick Links</p>
              <ul className="mt-5 flex flex-col gap-3 text-sm text-cream/65">
                <li>
                  <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="transition hover:text-cream">
                    Book an Appointment
                  </a>
                </li>
                <li>
                  <a href={membershipUrl} target="_blank" rel="noopener noreferrer" className="transition hover:text-cream">
                    Membership
                  </a>
                </li>
                <li>
                  <a href={giftCardUrl} target="_blank" rel="noopener noreferrer" className="transition hover:text-cream">
                    Gift Cards
                  </a>
                </li>
                <li>
                  <a href={reviewsUrl} target="_blank" rel="noopener noreferrer" className="transition hover:text-cream">
                    Google Reviews
                  </a>
                </li>
                <li>
                  <a href="/links" className="transition hover:text-cream">
                    All Links
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.24em] text-blush">Stay in the Glow</p>
              <p className="mt-5 text-sm font-light leading-6 text-cream/60">
                Seasonal offers and skin wisdom, straight to your inbox.
              </p>
              <form className="mt-5 flex items-stretch gap-2">
                <input
                  type="email"
                  placeholder="Email address"
                  className="h-12 min-w-0 flex-1 rounded-full border border-cream/20 bg-cream/10 px-5 text-sm text-cream placeholder:text-cream/40 focus:border-cream/60 focus:outline-none"
                />
                <button
                  type="submit"
                  className="inline-flex h-12 shrink-0 items-center justify-center rounded-full bg-cream px-6 text-[0.64rem] font-bold uppercase tracking-[0.18em] text-espresso transition hover:bg-blush"
                >
                  Join
                </button>
              </form>
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-3 border-t border-cream/10 pt-7 text-xs text-cream/40 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Fountain of Youth Spa &amp; Laser Center</p>
            <p className="uppercase tracking-[0.2em]">Concept design · unofficial site</p>
          </div>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/45 bg-cream/80 p-3 shadow-[0_-18px_55px_rgba(45,41,38,0.16)] backdrop-blur-[20px] sm:hidden">
        <div className="grid grid-cols-2 gap-3">
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-full bg-espresso text-xs font-bold uppercase tracking-[0.18em] text-cream shadow-sm transition hover:bg-clay"
          >
            Book Now
          </a>
          <a
            href={phoneHref}
            className="inline-flex h-12 items-center justify-center rounded-full bg-clay text-xs font-bold uppercase tracking-[0.18em] text-cream shadow-sm transition hover:bg-espresso"
          >
            Call
          </a>
        </div>
      </div>
    </div>
  );
}
