import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { dentists, treatments } from "@/data/site";
import { CTASection } from "@/components/CTASection";

export const Route = createFileRoute("/dentists/$slug")({
  loader: ({ params }) => {
    const dentist = dentists.find((d) => d.slug === params.slug);
    if (!dentist) throw notFound();
    return { dentist };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Dentist not found" }, { name: "robots", content: "noindex" }] };
    const d = loaderData.dentist;
    return {
      meta: [
        { title: `${d.name} — ${d.title} — Aurelia Dental` },
        { name: "description", content: d.intro },
        { property: "og:title", content: `${d.name} — Aurelia Dental` },
        { property: "og:url", content: `/dentists/${d.slug}` },
        { property: "og:image", content: d.image },
      ],
      links: [{ rel: "canonical", href: `/dentists/${d.slug}` }],
    };
  },
  component: DentistDetail,
  notFoundComponent: () => (
    <div className="pt-40 pb-24 container-editorial text-center">
      <h1 className="display-serif text-4xl">Dentist not found.</h1>
      <div className="mt-8"><Link to="/dentists" className="btn-primary">See our team</Link></div>
    </div>
  ),
});

function DentistDetail() {
  const data = Route.useLoaderData() as { dentist: (typeof dentists)[number] };
  const dentist = data.dentist;
  const offered = dentist.treatments
    .map((s: string) => treatments.find((t) => t.slug === s))
    .filter((t): t is NonNullable<typeof t> => Boolean(t));

  return (
    <>
      <section className="pt-40 md:pt-52 pb-16 md:pb-24">
        <div className="container-editorial grid gap-12 lg:grid-cols-12 items-end">
          <div className="lg:col-span-6">
            <Link to="/dentists" className="text-xs tracking-[0.18em] uppercase text-ink/50 hover:text-ink">← All dentists</Link>
            <h1 className="display-serif mt-8 text-5xl md:text-7xl text-ink">{dentist.name}</h1>
            <p className="mt-3 text-sm tracking-[0.08em] text-ink/60">{dentist.title}</p>
            <p className="mt-8 max-w-xl text-lg text-ink/75 leading-relaxed">{dentist.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/book" className="btn-primary">Book with {dentist.name.split(" ")[0]}</Link>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="image-hover aspect-[4/5] bg-bone">
              <img src={dentist.image} alt={dentist.name} className="h-full w-full object-cover object-top" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-y bg-cream border-t border-line">
        <div className="container-editorial grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">Philosophy of care</p>
            <h2 className="display-serif mt-5 text-3xl md:text-4xl text-ink">A calm, unhurried approach.</h2>
            <p className="mt-6 text-ink/75 leading-relaxed">{dentist.bio}</p>
          </div>
          <div className="lg:col-span-7 grid gap-10 sm:grid-cols-2">
            <Section title="Areas of clinical interest">
              <ul className="mt-4 space-y-2 text-ink/80">
                {dentist.interests.map((i, k) => <li key={k}>· {i}</li>)}
              </ul>
            </Section>
            <Section title="Qualifications">
              <p className="mt-4 text-ink/80">{dentist.qualifications}</p>
              <p className="mt-4 text-xs text-ink/50">Placeholder demo qualifications — replace before launch.</p>
            </Section>
            <Section title="Professional registration">
              <p className="mt-4 text-ink/80">{dentist.registration}</p>
            </Section>
            <Section title="Personal note">
              <p className="mt-4 text-ink/80">
                Outside the clinic, weekends are usually spent walking the Wicklow hills, cooking, or sea-swimming when the weather allows.
              </p>
            </Section>
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-editorial">
          <div className="max-w-2xl mb-10">
            <p className="eyebrow">Treatments offered</p>
            <h2 className="display-serif mt-5 text-3xl md:text-4xl text-ink">Areas of practice.</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {offered.map((t) => (
              <Link key={t.slug} to="/treatments/$slug" params={{ slug: t.slug }} className="group border border-line p-6 hover:bg-cream transition-colors">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-serif text-xl text-ink">{t.name}</h3>
                  <ArrowUpRight className="h-4 w-4 text-ink/50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
                </div>
                <p className="mt-2 text-sm text-ink/70">{t.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection headline={`Book with ${dentist.name}.`} eyebrow="Book" />
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-line pt-6">
      <p className="text-xs tracking-[0.18em] uppercase text-ink/50">{title}</p>
      {children}
    </div>
  );
}
