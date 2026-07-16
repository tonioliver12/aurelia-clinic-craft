import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Star, Phone } from "lucide-react";
import { clinic, treatments, dentists, reviews, cases, images } from "@/data/site";
import { BeforeAfter } from "@/components/BeforeAfter";
import { CTASection } from "@/components/CTASection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aurelia Dental — Private dentistry in Dublin 4" },
      { name: "description", content: "Advanced dental care, natural-looking results and a calmer kind of patient experience in the heart of Dublin." },
      { property: "og:title", content: "Aurelia Dental — Private dentistry in Dublin 4" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const featured = ["invisalign", "composite-bonding", "dental-implants", "smile-makeovers"] as const;

function Home() {
  const featuredTreatments = featured
    .map((s) => treatments.find((t) => t.slug === s)!)
    .filter(Boolean);

  return (
    <>
      {/* ============================================================
          HERO
          ============================================================ */}
      <section className="relative min-h-[92vh] pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden">
        <div className="container-editorial grid gap-12 lg:grid-cols-12 lg:gap-16 items-end">
          <div className="lg:col-span-6 relative z-10 reveal">
            <p className="eyebrow">Private dentistry · Dublin 4</p>
            <h1 className="display-serif mt-6 text-[3.25rem] leading-[1] sm:text-6xl md:text-7xl lg:text-[5.5rem] text-ink">
              Dentistry,<br />
              <span className="italic font-light text-sage">thoughtfully</span><br />
              redefined.
            </h1>
            <p className="mt-8 max-w-md text-lg text-ink/70 leading-relaxed">
              Advanced dental care, natural-looking results and a calmer kind of patient experience in the heart of Dublin.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Link to="/book" className="btn-primary">Book a Consultation</Link>
              <Link to="/treatments" className="link-underline">Explore our treatments <ArrowUpRight className="h-4 w-4" aria-hidden /></Link>
            </div>
            <p className="mt-14 text-xs tracking-[0.18em] uppercase text-ink/50">
              Private dentistry &nbsp;·&nbsp; Dublin 4 &nbsp;·&nbsp; New patients welcome
            </p>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] md:aspect-[5/6] overflow-hidden bg-bone image-hover">
              <img
                src={images.hero}
                alt="Interior of Aurelia Dental — a warm minimalist treatment room with sage accent wall and natural light."
                width={1920}
                height={1280}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="hidden md:block absolute -bottom-6 -left-6 bg-ivory border border-line px-5 py-4 shadow-soft">
              <p className="eyebrow">Est. 2019</p>
              <p className="font-serif text-lg text-ink mt-1">A modern independent practice</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          TRUST STRIP
          ============================================================ */}
      <section aria-label="Practice highlights" className="border-y border-line bg-cream">
        <div className="container-editorial py-10 md:py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          <TrustItem eyebrow="Google" title={`${clinic.rating.score} rating`} sub={`${clinic.rating.count}+ patient reviews`} />
          <TrustItem eyebrow="Reviews" title="Consistently 5-star" sub="Independently verified" />
          <TrustItem eyebrow="Technology" title="Advanced digital dentistry" sub="3D scanning · guided implants" />
          <TrustItem eyebrow="Access" title="Flexible payment options" sub="Finance available on request" />
        </div>
      </section>

      {/* ============================================================
          INTRODUCTION
          ============================================================ */}
      <section className="section-y">
        <div className="container-editorial grid gap-12 lg:grid-cols-12 lg:gap-20 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <p className="eyebrow">Introducing Aurelia</p>
            <h2 className="display-serif mt-6 text-4xl md:text-5xl lg:text-6xl text-ink">
              Clinical precision. Genuine care.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <div className="space-y-6 text-lg text-ink/75 leading-relaxed">
              <p>
                Aurelia Dental brings together experienced clinicians, modern
                technology and a highly personalised approach in a considered,
                calm environment in Dublin 4.
              </p>
              <p>
                We take time with every patient — asking better questions,
                explaining options clearly and building treatment plans around
                the person, not the diagnosis. The result is dentistry that
                looks natural, lasts well and feels quietly reassuring.
              </p>
            </div>
            <div className="mt-10">
              <Link to="/about" className="link-underline">Discover Aurelia Dental <ArrowUpRight className="h-4 w-4" aria-hidden /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          FEATURED TREATMENTS
          ============================================================ */}
      <section className="section-y bg-cream">
        <div className="container-editorial">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-20">
            <div className="max-w-2xl">
              <p className="eyebrow">Selected treatments</p>
              <h2 className="display-serif mt-5 text-4xl md:text-5xl lg:text-6xl text-ink">
                A refined range,<br />delivered with care.
              </h2>
            </div>
            <Link to="/treatments" className="link-underline">View all treatments <ArrowUpRight className="h-4 w-4" aria-hidden /></Link>
          </div>

          <div className="grid gap-x-10 gap-y-16 md:grid-cols-2">
            {featuredTreatments.map((t, i) => (
              <Link
                key={t.slug}
                to="/treatments/$slug"
                params={{ slug: t.slug }}
                className="group block"
              >
                <div className={`image-hover aspect-[4/5] bg-bone ${i % 2 === 1 ? "md:mt-16" : ""}`}>
                  {t.image ? (
                    <img src={t.image} alt={t.name} className="h-full w-full object-cover" loading="lazy" />
                  ) : (
                    <div className="h-full w-full bg-gradient-to-br from-bone to-sage-soft" />
                  )}
                </div>
                <div className="mt-6 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs tracking-[0.18em] uppercase text-ink/50">0{i + 1}</p>
                    <h3 className="font-serif text-3xl md:text-4xl text-ink mt-2">{t.name}</h3>
                    <p className="mt-3 max-w-md text-ink/70 leading-relaxed">{t.short}</p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 mt-2 text-ink/60 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden />
                </div>
                <p className="mt-4 text-sm text-sage link-underline">Discover treatment</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          PATIENT EXPERIENCE
          ============================================================ */}
      <section className="section-y">
        <div className="container-editorial">
          <div className="max-w-3xl mb-16 md:mb-24">
            <p className="eyebrow">The Aurelia experience</p>
            <h2 className="display-serif mt-5 text-4xl md:text-5xl lg:text-6xl text-ink">
              Designed around how you want to feel.
            </h2>
          </div>

          <div className="space-y-24 md:space-y-32">
            <ExperienceRow
              index="I"
              title="Consultations without pressure"
              body="Every first visit is a conversation, not a sales pitch. We take the time to understand what you'd like — and just as importantly, what you'd like to avoid."
              image={images.consultation}
              alt="Two people in conversation over a tablet in a warm consulting room"
              reverse={false}
            />
            <ExperienceRow
              index="II"
              title="Treatment plans designed around the patient"
              body="Your plan is written for you, not adapted from a template. We stage treatment at your pace, with clear costs and no obligation to proceed."
              image={images.interior}
              alt="Warm oak reception area with sage green artwork and soft daylight"
              reverse
            />
            <ExperienceRow
              index="III"
              title="Natural-looking, clinically responsible results"
              body="We favour subtle, minimally invasive work that respects your natural teeth. The most successful outcomes rarely announce themselves."
              image={images.cosmetic}
              alt="Editorial close-up of a person's profile in warm natural light"
              reverse={false}
            />
          </div>
        </div>
      </section>

      {/* ============================================================
          MEET THE DENTISTS
          ============================================================ */}
      <section className="section-y bg-cream">
        <div className="container-editorial">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-20">
            <div className="max-w-2xl">
              <p className="eyebrow">Our clinicians</p>
              <h2 className="display-serif mt-5 text-4xl md:text-5xl lg:text-6xl text-ink">
                Expertise you can feel comfortable with.
              </h2>
            </div>
            <Link to="/dentists" className="link-underline">Meet the team <ArrowUpRight className="h-4 w-4" aria-hidden /></Link>
          </div>

          <div className="grid gap-10 md:grid-cols-2 md:gap-14">
            {dentists.map((d, i) => (
              <Link
                key={d.slug}
                to="/dentists/$slug"
                params={{ slug: d.slug }}
                className="group block"
              >
                <div className={`image-hover aspect-[4/5] bg-bone ${i === 1 ? "lg:mt-20" : ""}`}>
                  <img
                    src={d.image}
                    alt={d.name}
                    className="h-full w-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
                <div className="mt-6 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-3xl text-ink">{d.name}</h3>
                    <p className="mt-1 text-sm tracking-[0.06em] text-ink/60">{d.title}</p>
                    <p className="mt-4 max-w-md text-ink/70 leading-relaxed">{d.intro}</p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 mt-2 text-ink/60 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden />
                </div>
                <p className="mt-4 text-sm text-sage link-underline">View profile</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SMILE TRANSFORMATIONS
          ============================================================ */}
      <section className="section-y">
        <div className="container-editorial">
          <div className="grid gap-8 md:grid-cols-12 mb-14 md:mb-20 items-end">
            <div className="md:col-span-8">
              <p className="eyebrow">Case studies</p>
              <h2 className="display-serif mt-5 text-4xl md:text-5xl lg:text-6xl text-ink">
                Small details.<br />Meaningful changes.
              </h2>
            </div>
            <div className="md:col-span-4 md:text-right">
              <Link to="/smile-gallery" className="btn-ghost">View Smile Gallery</Link>
            </div>
          </div>

          <div className="grid gap-10 md:gap-6 md:grid-cols-3">
            {cases.map((c) => (
              <div key={c.id}>
                <BeforeAfter before={c.before} after={c.after} alt={c.treatment} label={`${c.treatment} case`} />
                <div className="mt-5">
                  <p className="text-xs tracking-[0.18em] uppercase text-ink/50">{c.duration}</p>
                  <h3 className="font-serif text-2xl text-ink mt-2">{c.treatment}</h3>
                  <p className="mt-2 text-sm text-ink/70 leading-relaxed">{c.note}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-10 text-xs text-ink/50 max-w-2xl">
            Results vary between patients. Suitability for any treatment requires a clinical assessment.
            Case imagery shown is representative demo content.
          </p>
        </div>
      </section>

      {/* ============================================================
          TECHNOLOGY (dark)
          ============================================================ */}
      <section className="relative overflow-hidden bg-sage-deep text-ivory">
        <div className="absolute inset-0">
          <img src={images.technology} alt="" className="h-full w-full object-cover opacity-25" loading="lazy" aria-hidden />
          <div className="absolute inset-0 bg-gradient-to-r from-sage-deep via-sage-deep/90 to-sage-deep/60" />
        </div>
        <div className="relative container-editorial section-y">
          <div className="grid gap-16 lg:grid-cols-12 items-start">
            <div className="lg:col-span-6">
              <p className="eyebrow !text-ivory/60">Technology</p>
              <h2 className="display-serif mt-6 text-4xl md:text-5xl lg:text-6xl text-ivory">
                Technology with a purpose.
              </h2>
              <p className="mt-8 max-w-md text-ivory/75 leading-relaxed">
                We invest in equipment that meaningfully improves patient experience —
                fewer impressions, more accurate planning and clearer conversations about
                what treatment will look like.
              </p>
            </div>
            <div className="lg:col-span-6 grid sm:grid-cols-2 gap-x-8 gap-y-10">
              <TechItem title="Digital scanning" body="Comfortable 3D scans replace traditional impression trays." />
              <TechItem title="Digital smile planning" body="See a preview of proposed changes before treatment begins." />
              <TechItem title="3D imaging" body="Low-dose CBCT for precise diagnosis and implant planning." />
              <TechItem title="Guided implant planning" body="Millimetre accuracy from planning through to placement." />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          REVIEWS
          ============================================================ */}
      <section className="section-y">
        <div className="container-editorial">
          <div className="grid gap-8 md:grid-cols-12 mb-14 md:mb-20 items-end">
            <div className="md:col-span-8">
              <p className="eyebrow">Patient reviews</p>
              <h2 className="display-serif mt-5 text-4xl md:text-5xl lg:text-6xl text-ink">
                The experience patients remember.
              </h2>
            </div>
            <div className="md:col-span-4 md:text-right">
              <div className="inline-flex items-center gap-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-sage text-sage" aria-hidden />
                ))}
              </div>
              <p className="mt-2 text-sm text-ink/70">
                <span className="font-medium text-ink">{clinic.rating.score}</span> average · {clinic.rating.count}+ reviews on Google
              </p>
            </div>
          </div>

          <div className="grid gap-10 md:grid-cols-3 md:gap-14">
            {reviews.slice(0, 3).map((r, i) => (
              <blockquote key={i} className="flex flex-col gap-8">
                <p className="font-serif text-2xl md:text-[1.6rem] leading-snug text-ink">"{r.quote}"</p>
                <footer className="mt-auto pt-6 border-t border-line">
                  <p className="text-sm font-medium text-ink">{r.name}</p>
                  {r.treatment && <p className="text-xs text-ink/60 mt-1">{r.treatment} · Google review</p>}
                </footer>
              </blockquote>
            ))}
          </div>

          <div className="mt-14">
            <Link to="/reviews" className="link-underline">Read more reviews <ArrowUpRight className="h-4 w-4" aria-hidden /></Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          NEW PATIENT JOURNEY
          ============================================================ */}
      <section className="section-y bg-cream">
        <div className="container-editorial">
          <div className="max-w-3xl mb-16 md:mb-20">
            <p className="eyebrow">New patients</p>
            <h2 className="display-serif mt-5 text-4xl md:text-5xl lg:text-6xl text-ink">
              A calm, considered path from first enquiry to finished treatment.
            </h2>
          </div>

          <ol className="relative border-l border-line pl-8 md:pl-14 space-y-14 md:space-y-20">
            {[
              { t: "Start with a conversation", b: "A relaxed first appointment to understand what you'd like to feel and what you'd like to change." },
              { t: "Receive a personalised plan", b: "A written plan with clear costs, staged options and no obligation to proceed." },
              { t: "Move forward at your own pace", b: "Treatment is scheduled around your life, with careful follow-through at every stage." },
            ].map((s, i) => (
              <li key={i} className="relative">
                <span className="absolute -left-[41px] md:-left-[57px] top-2 flex h-4 w-4 rounded-full bg-sage" aria-hidden />
                <p className="font-serif text-6xl md:text-7xl text-sage/60 leading-none">0{i + 1}</p>
                <h3 className="font-serif text-2xl md:text-3xl text-ink mt-4">{s.t}</h3>
                <p className="mt-3 max-w-xl text-ink/70 leading-relaxed">{s.b}</p>
              </li>
            ))}
          </ol>

          <div className="mt-16">
            <Link to="/new-patients" className="link-underline">Read the new patient guide <ArrowUpRight className="h-4 w-4" aria-hidden /></Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

function TrustItem({ eyebrow, title, sub }: { eyebrow: string; title: string; sub: string }) {
  return (
    <div>
      <p className="text-[0.65rem] tracking-[0.22em] uppercase text-sage">{eyebrow}</p>
      <p className="font-serif text-xl md:text-2xl text-ink mt-2">{title}</p>
      <p className="text-xs text-ink/60 mt-1">{sub}</p>
    </div>
  );
}

function ExperienceRow({
  index, title, body, image, alt, reverse,
}: { index: string; title: string; body: string; image: string; alt: string; reverse: boolean }) {
  return (
    <div className={`grid gap-10 md:grid-cols-12 md:gap-16 items-center ${reverse ? "md:[direction:rtl]" : ""}`}>
      <div className={`md:col-span-7 [direction:ltr]`}>
        <div className="image-hover aspect-[5/4] bg-bone">
          <img src={image} alt={alt} className="h-full w-full object-cover" loading="lazy" />
        </div>
      </div>
      <div className="md:col-span-5 [direction:ltr]">
        <p className="font-serif text-4xl text-sage">{index}</p>
        <h3 className="font-serif text-3xl md:text-4xl text-ink mt-4">{title}</h3>
        <p className="mt-4 text-ink/70 leading-relaxed text-lg">{body}</p>
      </div>
    </div>
  );
}

function TechItem({ title, body }: { title: string; body: string }) {
  return (
    <div className="border-t border-ivory/20 pt-6">
      <h3 className="font-serif text-2xl text-ivory">{title}</h3>
      <p className="mt-3 text-sm text-ivory/70 leading-relaxed">{body}</p>
    </div>
  );
}
