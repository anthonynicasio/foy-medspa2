"use client";

import type { ReactNode } from "react";
import {
  ArrowUpRight,
  CreditCard,
  Mail,
  Phone,
  Sparkles,
  Star,
} from "lucide-react";
import { motion } from "framer-motion";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const phone = "(202) 410-1199";
const phoneHref = "tel:+12024101199";
const email = "info@custombeautymedstudio.com";
const bookingUrl = "https://custom-beauty-med-studio.square.site/";
const newsletterUrl =
  "https://custombeautymedstudio.com/join-our-monthly-newsletter-for-discounts-deals/";

const videos = [
  {
    label: "Neurotoxins",
    title: "Botox treatment",
    id: "LxGYB9NqfYM",
    src: "/videos/tox-treatment.mp4",
    poster: "/images/medspa/injectable-consult-portrait.png",
  },
  {
    label: "Injectables",
    title: "Dermal fillers",
    id: "2STRyyGiEBc",
    src: "/videos/injectables.mp4",
    poster: "/images/medspa/filler-treatment-cheek.png",
  },
  {
    label: "Lip Filler",
    title: "Natural lip filler",
    id: "-nXrneYrUyA",
    src: "/videos/lip-filler.mp4",
    poster: "/images/medspa/glowing-skin-hands-face.png",
  },
  {
    label: "More Treatments",
    title: "More treatments",
    id: "XTgyyV5YDc8",
    src: "/videos/more-treatments.mp4",
    poster: "/images/medspa/natural-glow-portrait.png",
  },
];

const links = [
  {
    eyebrow: "Primary",
    heading: "Book Your Visit",
    text: "Schedule online with Custom Beauty Med Studio.",
    href: bookingUrl,
    featured: true,
    image: "/images/medspa/warm-group-portrait.png",
    imagePosition: "object-[50%_42%]",
  },
  {
    eyebrow: "Newsletter",
    heading: "Monthly Discounts + Deals",
    text: "Join the newsletter for limited specials.",
    href: newsletterUrl,
    image: "/images/medspa/radiant-client-duo.png",
    imagePosition: "object-[50%_38%]",
  },
  {
    eyebrow: "Service",
    heading: "Natural Lip Filler",
    text: "Enhance shape, hydration, and balance while keeping your lips elegant.",
    href: "https://custombeautymedstudio.com/lip-filler/",
    image: "/images/medspa/face-roller-skincare.png",
    imagePosition: "object-center",
  },
  {
    eyebrow: "Service",
    heading: "Botox + Neurotoxins",
    text: "Relax forehead lines, crow's feet, and expression lines with a customized plan.",
    href: "https://custombeautymedstudio.com/botox-capitol-hill-washington-dc/",
    image: "/images/medspa/injectable-consult-portrait.png",
    imagePosition: "object-[52%_34%]",
  },
  {
    eyebrow: "Service",
    heading: "Morpheus8 Skin Tightening",
    text: "Support smoother, firmer-looking skin on the face, neck, and chest.",
    href: "https://custombeautymedstudio.com/morpheus8/",
    image: "/images/medspa/clean-shoulder-portrait.png",
    imagePosition: "object-[52%_45%]",
  },
  {
    eyebrow: "Service",
    heading: "PRF Treatments",
    text: "Use platelet rich fibrin to refresh skin or support sleepy hair follicles.",
    href: "https://custombeautymedstudio.com/platelet-rich-fibrin/",
    image: "/images/medspa/weight-loss-injection.png",
    imagePosition: "object-[52%_52%]",
  },
  {
    eyebrow: "Site",
    heading: "Explore the Full Site",
    text: "Visit the main Custom Beauty website.",
    href: "https://custombeautymedstudio.com/",
    image: "/images/medspa/botanical-clear-skin.png",
    imagePosition: "object-[50%_42%]",
  },
  {
    eyebrow: "Social",
    heading: "Follow on Instagram",
    text: "See treatment education, before-and-afters, and current specials.",
    href: "https://www.instagram.com/custombeautymedstudio/",
    image: "/images/medspa/happy-skincare-duo.png",
    imagePosition: "object-[50%_38%]",
  },
  {
    eyebrow: "Contact",
    heading: "Contact Us",
    text: "Email the team directly.",
    href: `mailto:${email}`,
    external: false,
    image: "/images/medspa/diverse-beauty-group.png",
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
                  : link.eyebrow === "Newsletter"
                    ? Mail
                    : link.eyebrow === "Financing"
                      ? CreditCard
                      : link.eyebrow === "Social"
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
            <p className="font-display text-3xl tracking-tight">Custom Beauty Med Studio</p>
            <p className="mt-4 text-sm leading-7 text-cream/60">
              Capitol Hill · Washington, DC
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
              href="https://www.instagram.com/custombeautymedstudio/"
              className="inline-flex items-center gap-2 transition hover:text-blush"
            >
              <Star className="h-4 w-4" />
              Instagram
            </ExternalAnchor>
            <p className="pt-2 text-xs text-cream/40">
              © {new Date().getFullYear()} Custom Beauty Med Studio
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
