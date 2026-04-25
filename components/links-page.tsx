"use client";

import type { ReactNode } from "react";
import {
  ArrowUpRight,
  CreditCard,
  Gift,
  Mail,
  Phone,
  PlayCircle,
  Sparkles,
  Star,
} from "lucide-react";
import { motion } from "framer-motion";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const phone = "(904) 295-4595";
const phoneHref = "tel:+19042954595";
const email = "stauglaser@gmail.com";
const bookingUrl = "https://booking.mangomint.com/737916";

const videos = [
  {
    label: "Wrinkle Reducers",
    title: "Tox treatment",
    id: "LxGYB9NqfYM",
    src: "/videos/tox-treatment.mp4",
    poster: "/images/medspa/radiant-skin-detail.jpg",
  },
  {
    label: "Injectables",
    title: "Injectables",
    id: "2STRyyGiEBc",
    src: "/videos/injectables.mp4",
    poster: "/images/medspa/confident-portrait.jpg",
  },
  {
    label: "Lip Filler",
    title: "Lip filler",
    id: "-nXrneYrUyA",
    src: "/videos/lip-filler.mp4",
    poster: "/images/medspa/soft-reflection-face.jpg",
  },
  {
    label: "More Treatments",
    title: "More treatments",
    id: "XTgyyV5YDc8",
    src: "/videos/more-treatments.mp4",
    poster: "/images/medspa/facial-treatment.jpg",
  },
];

const links = [
  {
    eyebrow: "Primary",
    heading: "Book Your Visit",
    text: "Schedule online through Mangomint.",
    href: bookingUrl,
    featured: true,
    image: "/images/medspa/facial-treatment.jpg",
    imagePosition: "object-[50%_42%]",
  },
  {
    eyebrow: "Member",
    heading: "Save 10% Every Visit",
    text: "Join the membership for recurring care.",
    href: "https://clients.mangomint.com/fountainofyouthspa/memberships/29",
    image: "/images/medspa/confident-portrait.jpg",
    imagePosition: "object-[50%_26%]",
  },
  {
    eyebrow: "Gift",
    heading: "Send a Gift Card",
    text: "Give someone a treatment they can choose.",
    href: "https://clients.mangomint.com/gift-cards/737916",
    image: "/images/medspa/cream-texture.jpg",
    imagePosition: "object-center",
  },
  {
    eyebrow: "Rewards",
    heading: "Earn on Injectables",
    text: "Access Xeomin Rewards through Merz Xperience+.",
    href: "https://app.xperiencemerz.com/",
    image: "/images/medspa/radiant-skin-detail.jpg",
    imagePosition: "object-[52%_32%]",
  },
  {
    eyebrow: "Financing",
    heading: "Pay Over Time with CareCredit",
    text: "Explore financing for eligible services.",
    href: "https://www.carecredit.com/go/969ZGZ/",
    image: "/images/medspa/serum-dropper.jpg",
    imagePosition: "object-[52%_48%]",
  },
  {
    eyebrow: "Financing",
    heading: "Apply with Cherry",
    text: "Review Cherry payment plan options.",
    href: "https://pay.withcherry.com/fountainofyouthspalaser/?utm_source=mobilepracticeportal",
    image: "/images/medspa/light-skin-detail.jpg",
    imagePosition: "object-[57%_42%]",
  },
  {
    eyebrow: "Site",
    heading: "Explore the Full Site",
    text: "Visit the main Fountain of Youth website.",
    href: "https://fountainofyouthspalaser.com/",
    image: "/images/medspa/soft-reflection-face.jpg",
    imagePosition: "object-[50%_42%]",
  },
  {
    eyebrow: "Reviews",
    heading: "4.9 Stars on Google",
    text: "Read 221 client reviews or share your experience.",
    href: "https://g.page/r/CS_nA0tgMpSZEBE/review",
    image: "/images/medspa/hero-calm-face.jpg",
    imagePosition: "object-[50%_34%]",
  },
  {
    eyebrow: "Contact",
    heading: "Contact Us",
    text: "Email the team directly.",
    href: `mailto:${email}`,
    external: false,
    image: "/images/medspa/provider-mask-treatment.jpg",
    imagePosition: "object-[50%_42%]",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function ExternalAnchor({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}

function Reveal({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <motion.section
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}

function LinksPage() {
  return (
    <div className="surface-cream grain min-h-screen overflow-hidden pb-24 text-espresso sm:pb-0">
      <main>
        <Reveal className="surface-cream-soft grain relative overflow-hidden px-5 pb-28 pt-[0.5in] sm:px-8 lg:px-10 lg:pb-36 lg:pt-[0.5in]">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.36em] text-clay">Quick links</p>
              <h2 className="mt-4 font-display text-5xl leading-none tracking-tight sm:text-6xl">
                Everything in one calm place.
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {links.map((link) => {
                const LinkIcon = link.featured
                  ? Sparkles
                  : link.eyebrow === "Gift"
                    ? Gift
                    : link.eyebrow === "Financing"
                      ? CreditCard
                      : link.eyebrow === "Reviews"
                        ? Star
                        : link.eyebrow === "Contact"
                          ? Mail
                          : ArrowUpRight;
                const cardClassName = cn(
                  "group relative overflow-hidden rounded-[2rem] border p-6 shadow-soft backdrop-blur-xl transition duration-300 hover:-translate-y-1",
                  link.featured
                    ? "min-h-56 border-cream/15 bg-espresso text-cream md:col-span-2"
                    : "min-h-48 border-white/65 bg-white/50 text-espresso hover:border-espresso/18 hover:bg-white/64",
                );
                const cardContent = (
                  <div className="flex items-start justify-between gap-6">
                    {link.image && (
                      <>
                        <img
                          src={link.image}
                          alt=""
                          aria-hidden="true"
                          className={cn(
                            "absolute inset-0 z-0 h-full w-full scale-105 object-cover opacity-[0.24] blur-[1px] transition duration-500 group-hover:scale-110 group-hover:opacity-[0.32]",
                            link.imagePosition,
                            link.featured && "opacity-[0.36] group-hover:opacity-[0.44]",
                          )}
                        />
                        <div
                          className={cn(
                            "absolute inset-0 z-[1] bg-gradient-to-br from-cream/90 via-cream/76 to-cream/52",
                            link.featured && "from-espresso/94 via-espresso/82 to-clay/38",
                          )}
                        />
                      </>
                    )}
                    <div className="relative z-10">
                      <p
                        className={cn(
                          "text-xs font-medium uppercase tracking-[0.3em] text-clay",
                          link.featured && "text-blush",
                        )}
                      >
                        {link.eyebrow}
                      </p>
                      <h3 className="mt-5 max-w-xl font-display text-4xl leading-none tracking-tight">{link.heading}</h3>
                      <p
                        className={cn(
                          "mt-5 max-w-xl font-light leading-7 text-espresso/68",
                          link.featured && "text-cream/76",
                        )}
                      >
                        {link.text}
                      </p>
                    </div>
                    <LinkIcon
                      className={cn(
                        "relative z-10 mt-1 h-6 w-6 shrink-0 rounded-full text-clay transition group-hover:translate-x-1 group-hover:-translate-y-1",
                        link.featured && "text-blush",
                      )}
                    />
                  </div>
                );

                return link.external === false ? (
                  <a key={link.heading} href={link.href} className={cardClassName}>
                    {cardContent}
                  </a>
                ) : (
                  <ExternalAnchor key={link.heading} href={link.href} className={cardClassName}>
                    {cardContent}
                  </ExternalAnchor>
                );
              })}
            </div>
          </div>
        </Reveal>

        <Reveal className="surface-espresso grain-light relative overflow-hidden px-5 py-28 text-cream sm:px-8 lg:px-10 lg:py-36">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10">
              <p className="text-xs font-semibold uppercase tracking-[0.36em] text-blush">See the work</p>
              <h2 className="mt-5 font-display text-5xl font-medium leading-none tracking-[0.015em] sm:text-6xl">
                Treatments, demystified.
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {videos.map((video) => (
                <article
                  key={video.id}
                  className="overflow-hidden rounded-[2rem] border border-cream/10 bg-cream/[0.04] p-3 shadow-soft"
                >
                  <p className="px-2 pb-3 pt-1 text-xs font-semibold uppercase tracking-[0.3em] text-blush">
                    {video.label}
                  </p>
                  <div className="overflow-hidden rounded-[1.45rem] bg-espresso">
                    {video.src ? (
                      <video
                        className="aspect-video w-full object-cover"
                        src={video.src}
                        poster={video.poster}
                        controls
                        playsInline
                        preload="metadata"
                        aria-label={video.title}
                      />
                    ) : (
                      <LiteYouTubeEmbed id={video.id} title={video.title} poster="maxresdefault" noCookie />
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Reveal>
      </main>

      <footer id="contact" className="surface-espresso grain-light relative overflow-hidden px-5 py-12 text-cream sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-3xl tracking-tight">Fountain of Youth Spa</p>
            <p className="mt-4 text-sm leading-7 text-cream/60">
              St. Augustine, FL · Jacksonville Beach, FL
            </p>
            <p className="mt-2 text-xs uppercase tracking-[0.24em] text-cream/45">
              Concept design — not the official site
            </p>
          </div>

          <div className="flex flex-col gap-3 text-sm text-cream/70 md:items-end">
            <a href={`mailto:${email}`} className="inline-flex items-center gap-2 transition hover:text-blush">
              <Mail className="h-4 w-4" />
              {email}
            </a>
            <a href={phoneHref} className="inline-flex items-center gap-2 transition hover:text-blush">
              <Phone className="h-4 w-4" />
              {phone}
            </a>
            <ExternalAnchor
              href="https://www.youtube.com/@fountainofyouthspalasercen3249"
              className="inline-flex items-center gap-2 transition hover:text-blush"
            >
              <PlayCircle className="h-4 w-4" />
              YouTube
            </ExternalAnchor>
            <p className="pt-2 text-xs text-cream/40">
              © {new Date().getFullYear()} Fountain of Youth Spa & Laser Center
            </p>
          </div>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/45 bg-cream/76 p-3 shadow-[0_-18px_55px_rgba(45,41,38,0.16)] backdrop-blur-[20px] backdrop-saturate-[180%] sm:hidden">
        <div className="grid grid-cols-2 gap-3">
          <Button asChild className="h-12 rounded-full bg-espresso text-xs font-bold uppercase tracking-[0.18em] text-cream shadow-sm hover:bg-clay">
            <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
              Book Now
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="h-12 rounded-full border-clay/35 bg-clay text-xs font-bold uppercase tracking-[0.18em] text-cream shadow-sm hover:bg-espresso"
          >
            <a href={phoneHref}>Call</a>
          </Button>
        </div>
      </div>
    </div>
  );
}

export { LinksPage };
