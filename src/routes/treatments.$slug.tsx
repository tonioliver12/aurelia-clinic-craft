import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import { treatments, dentists, images } from "@/data/site";
import { FAQ } from "@/components/FAQ";
import { CTASection } from "@/components/CTASection";

export const Route = createFileRoute("/treatments/$slug")({
  loader: ({ params }) => {
    const treatment = treatments.find((t) => t.slug === params.slug);
    if (!treatment) throw notFound();
    return { treatment };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Treatment not found" }, { name: "robots", content: "noindex" }] };
    const t = loaderData.treatment;
    return {
      meta: [
        { title: `${t.name} — Aurelia Dental, Dublin 4` },
        { name: "description", content: t.short },
        { property: "og:title", content: `${t.name} — Aurelia Dental` },
        { property: "og:url", content: `/treatments/${t.slug}` },
        ...(t.image ? [{ property: "og:image", content: t.image }] : []),
      ],
      links: [{ rel: "canonical", href: `/treatments/${t.slug}` }],
    };
  },
  component: TreatmentDetail,
  notFoundComponent: TreatmentNotFound,
});

function TreatmentNotFound() {
  return (
    <div className="pt-40 pb-24 container-editorial text-center">
      <p className="eyebrow">Not found</p>
      <h1 className="display-serif mt-4 text-4xl md:text-5xl">This treatment page can't be found.</h1>
      <div className="mt-8">
        <Link to="/treatments" className="btn-primary">View all treatments</Link>
      </div>
    </div>
  );
}

// Treatment-specific content library. Fallback used for treatments
// that don't yet have a bespoke long-form page.
const detail: Record<string, {
  overview: string;
  suits: string[];
  benefits: string[];
  journey: { title: string; body: string }[];
  technology: string;
  dentist: string;
  faqs: { q: string; a: string }[];
  pricing: string;
}> = {
  invisalign: {
    overview:
      "Invisalign uses a series of near-invisible, medical-grade aligners to move teeth into a planned position. It's often chosen by adults who want a discreet way to straighten their smile without the visibility of traditional braces.",
    suits: [
      "Adults with mild to moderate crowding, spacing or bite concerns",
      "Patients who prefer a removable, low-visibility option",
      "Those who have finished orthodontic treatment and want a subtle refinement",
    ],
    benefits: [
      "Discreet — clear aligners are virtually unnoticeable in most situations",
      "Removable for eating, brushing and important events",
      "Predictable — treatment is mapped digitally from start to finish",
      "Often combined with whitening or subtle composite refinement at the end",
    ],
    journey: [
      { title: "Consultation and assessment", body: "A clinical assessment, digital scan and photographs help us understand whether Invisalign is suitable and what results are realistically achievable." },
      { title: "Digital treatment plan", body: "You'll see a 3D preview of the proposed movements before we commit to a plan or ordering aligners." },
      { title: "Wearing your aligners", body: "Each set is worn for about a week. Most patients change aligners at home, with in-clinic reviews every 6–10 weeks." },
      { title: "Refinement and retention", body: "We finish carefully — with optional whitening or minor composite polishing — and provide bespoke retainers to protect your result." },
    ],
    technology: "Intraoral 3D scanning replaces messy impressions, and Invisalign's ClinCheck software allows precise digital planning that you can review before treatment begins.",
    dentist: "amelia-byrne",
    faqs: [
      { q: "How long does Invisalign treatment take?", a: "Most adult cases take 6–18 months. Simpler refinements can be shorter; complex orthodontic cases may take longer. Your treatment length will be estimated during your consultation." },
      { q: "Does it hurt?", a: "You may feel gentle pressure for a day or two when moving to a new aligner. Most patients describe it as mild and quickly settling." },
      { q: "How visible are the aligners?", a: "In most situations they are barely noticeable. Small tooth-coloured attachments are often used to guide movement and are also discreet." },
      { q: "Will I need retainers afterwards?", a: "Yes — as with any orthodontic treatment, retainers are essential to maintain your result. We'll fit bespoke retainers at the end of treatment." },
    ],
    pricing:
      "Invisalign treatment at Aurelia typically starts from €3,600 and includes your digital plan, all aligners, in-clinic reviews and final retainers. Your consultation will provide a personalised written estimate.",
  },
};

const fallback = {
  overview:
    "A considered, evidence-based treatment delivered with the same unhurried, patient-first approach that defines every aspect of our care at Aurelia Dental.",
  suits: [
    "Patients seeking a natural-looking, long-lasting result",
    "Those who value a clear plan and transparent costs",
    "Adults who want to feel genuinely listened to during treatment",
  ],
  benefits: [
    "A treatment plan tailored to your circumstances",
    "Delivered by an experienced clinician using modern technology",
    "Clear communication throughout your care",
    "Considered, minimally invasive where possible",
  ],
  journey: [
    { title: "Consultation and assessment", body: "A relaxed first appointment to understand your goals and assess suitability." },
    { title: "Personalised plan", body: "A written plan with clear staging and costs, and time to consider your options." },
    { title: "Treatment", body: "Delivered carefully over the appropriate number of appointments." },
    { title: "Aftercare and review", body: "Follow-up and long-term care to protect your investment." },
  ],
  technology: "Digital imaging, 3D scanning and modern planning tools help us deliver more predictable outcomes with fewer visits.",
  dentist: "amelia-byrne",
  faqs: [
    { q: "How do I know if this treatment is right for me?", a: "The best next step is a consultation. A clinical assessment allows us to explain your options and whether the treatment is likely to suit you." },
    { q: "How much does it cost?", a: "Costs vary based on complexity. Your consultation will include a clear written plan with costs before any treatment is agreed." },
    { q: "Do you offer payment plans?", a: "Yes — flexible payment options are available for many treatments. We'll be happy to talk you through them at consultation." },
  ],
  pricing:
    "Pricing depends on the complexity of your case. Your consultation includes a written plan and cost breakdown before any decision is made.",
};

function TreatmentDetail() {
  const { treatment } = Route.useLoaderData();
  const content = detail[treatment.slug] ?? fallback;
  const dentist = dentists.find((d) => d.slug === content.dentist)!;

  return (
    <>
      {/* HERO */}
      <section className="pt-40 md:pt-52 pb-16 md:pb-24">
        <div className="container-editorial grid gap-12 lg:grid-cols-12 items-end">
          <div className="lg:col-span-6">
            <Link to="/treatments" className="text-xs tracking-[0.18em] uppercase text-ink/50 hover:text-ink">← All treatments</Link>
            <h1 className="display-serif mt-8 text-5xl md:text-7xl lg:text-8xl text-ink">{treatment.name}</h1>
            <p className="mt-6 max-w-lg text-lg text-ink/70 leading-relaxed">{treatment.short}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/book" className="btn-primary">Book a Consultation</Link>
            </div>
            <dl className="mt-14 grid grid-cols-2 gap-8 max-w-lg border-t border-line pt-8">
              {treatment.duration && (
                <div>
                  <dt className="eyebrow">Typical duration</dt>
                  <dd className="font-serif text-2xl text-ink mt-2">{treatment.duration}</dd>
                </div>
              )}
              {treatment.from && (
                <div>
                  <dt className="eyebrow">Investment</dt>
                  <dd className="font-serif text-2xl text-ink mt-2">{treatment.from}</dd>
                </div>
              )}
            </dl>
          </div>
          <div className="lg:col-span-6">
            <div className="image-hover aspect-[5/6] bg-bone">
              <img
                src={treatment.image ?? images.interior}
                alt={treatment.name}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW + SUITS */}
      <section className="section-y bg-cream border-t border-line">
        <div className="container-editorial grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">Overview</p>
            <h2 className="display-serif mt-5 text-3xl md:text-4xl text-ink">A clear picture of the treatment.</h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-lg text-ink/75 leading-relaxed">{content.overview}</p>

            <div className="mt-14">
              <p className="eyebrow">Who it may suit</p>
              <ul className="mt-6 space-y-4">
                {content.suits.map((s, i) => (
                  <li key={i} className="flex gap-4 text-ink/80">
                    <Check className="h-5 w-5 mt-1 text-sage shrink-0" aria-hidden />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs text-ink/50">Suitability is confirmed at a clinical assessment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="section-y">
        <div className="container-editorial">
          <div className="max-w-2xl mb-14">
            <p className="eyebrow">Patient benefits</p>
            <h2 className="display-serif mt-5 text-4xl md:text-5xl text-ink">Why patients choose this option.</h2>
          </div>
          <div className="grid gap-x-10 gap-y-10 md:grid-cols-2">
            {content.benefits.map((b, i) => (
              <div key={i} className="border-t border-line pt-6">
                <p className="font-serif text-xl text-ink">0{i + 1}</p>
                <p className="mt-3 text-ink/75 leading-relaxed">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="section-y bg-cream">
        <div className="container-editorial">
          <div className="max-w-2xl mb-14">
            <p className="eyebrow">Treatment journey</p>
            <h2 className="display-serif mt-5 text-4xl md:text-5xl text-ink">A clear path, step by step.</h2>
          </div>
          <ol className="relative border-l border-line pl-8 md:pl-14 space-y-14">
            {content.journey.map((s, i) => (
              <li key={i} className="relative">
                <span className="absolute -left-[41px] md:-left-[57px] top-2 flex h-4 w-4 rounded-full bg-sage" aria-hidden />
                <p className="font-serif text-5xl text-sage/60 leading-none">0{i + 1}</p>
                <h3 className="font-serif text-2xl md:text-3xl text-ink mt-4">{s.title}</h3>
                <p className="mt-3 max-w-xl text-ink/75 leading-relaxed">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* TECHNOLOGY + DENTIST */}
      <section className="section-y">
        <div className="container-editorial grid gap-14 lg:grid-cols-2">
          <div className="border border-line p-8 md:p-12 bg-card">
            <p className="eyebrow">Technology</p>
            <h3 className="font-serif text-3xl text-ink mt-4">Precise planning, better outcomes.</h3>
            <p className="mt-6 text-ink/75 leading-relaxed">{content.technology}</p>
          </div>
          <div className="border border-line p-8 md:p-12 bg-card grid gap-6 sm:grid-cols-[auto_1fr] items-start">
            <div className="w-24 h-32 sm:w-32 sm:h-40 bg-bone overflow-hidden shrink-0">
              <img src={dentist.image} alt={dentist.name} className="h-full w-full object-cover object-top" loading="lazy" />
            </div>
            <div>
              <p className="eyebrow">Treatment lead</p>
              <h3 className="font-serif text-2xl text-ink mt-3">{dentist.name}</h3>
              <p className="text-sm text-ink/60 mt-1">{dentist.title}</p>
              <Link to="/dentists/$slug" params={{ slug: dentist.slug }} className="link-underline mt-5 inline-flex">
                View profile <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING + FAQ */}
      <section className="section-y bg-cream">
        <div className="container-editorial grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">Pricing</p>
            <h2 className="display-serif mt-5 text-3xl md:text-4xl text-ink">Considered, transparent investment.</h2>
            <p className="mt-6 text-ink/75 leading-relaxed">{content.pricing}</p>
            <div className="mt-8">
              <Link to="/book" className="btn-primary">Book a Consultation</Link>
            </div>
          </div>
          <div className="lg:col-span-7">
            <p className="eyebrow">Common questions</p>
            <h2 className="display-serif mt-5 mb-10 text-3xl md:text-4xl text-ink">Frequently asked.</h2>
            <FAQ items={content.faqs} />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
