import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { cases, images } from "@/data/site";
import { BeforeAfter } from "@/components/BeforeAfter";
import { CTASection } from "@/components/CTASection";

const filters = [
  { slug: "all", label: "All" },
  { slug: "invisalign", label: "Invisalign" },
  { slug: "composite-bonding", label: "Composite bonding" },
  { slug: "teeth-whitening", label: "Whitening" },
  { slug: "dental-implants", label: "Implants" },
  { slug: "restorative-dentistry", label: "Restorative" },
];

// Demo expanded case set — reuses imagery for template purposes.
const gallery = [
  ...cases,
  { id: "c4", treatment: "Composite bonding", slug: "composite-bonding", duration: "1 visit", note: "Chip repair on a single upper central incisor.", before: images.bonding, after: images.bonding },
  { id: "c5", treatment: "Whitening", slug: "teeth-whitening", duration: "2 weeks", note: "Take-home whitening tailored to patient enamel.", before: images.cosmetic, after: images.cosmetic },
  { id: "c6", treatment: "Restorative", slug: "restorative-dentistry", duration: "4 months", note: "Full arch rehabilitation using ceramic crowns.", before: images.implants, after: images.implants },
];

export const Route = createFileRoute("/smile-gallery")({
  head: () => ({
    meta: [
      { title: "Smile Gallery — Aurelia Dental, Dublin 4" },
      { name: "description", content: "Before and after cases from Aurelia Dental — Invisalign, composite bonding, whitening, implants and restorative dentistry." },
      { property: "og:title", content: "Smile Gallery — Aurelia Dental" },
      { property: "og:url", content: "/smile-gallery" },
    ],
    links: [{ rel: "canonical", href: "/smile-gallery" }],
  }),
  component: Gallery,
});

function Gallery() {
  const [filter, setFilter] = useState("all");
  const items = useMemo(() => filter === "all" ? gallery : gallery.filter((c) => c.slug === filter), [filter]);

  return (
    <>
      <section className="pt-40 md:pt-52 pb-12">
        <div className="container-editorial">
          <p className="eyebrow">Smile gallery</p>
          <h1 className="display-serif mt-6 text-5xl md:text-7xl lg:text-8xl text-ink max-w-4xl">
            Small details.<br />Meaningful changes.
          </h1>
          <p className="mt-8 max-w-xl text-ink/70 leading-relaxed">
            A selection of representative case studies. Results vary between
            patients and suitability for any treatment requires a clinical assessment.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-editorial">
          <div className="flex flex-wrap gap-2 mb-10 border-b border-line pb-6">
            {filters.map((f) => (
              <button
                key={f.slug}
                onClick={() => setFilter(f.slug)}
                className={`px-5 py-2.5 text-sm border transition-colors ${
                  filter === f.slug
                    ? "bg-ink text-ivory border-ink"
                    : "bg-transparent text-ink/70 border-line hover:border-ink"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((c) => (
              <div key={c.id}>
                <BeforeAfter before={c.before} after={c.after} alt={c.treatment} />
                <div className="mt-5">
                  <p className="text-xs tracking-[0.18em] uppercase text-ink/50">{c.duration}</p>
                  <h3 className="font-serif text-2xl text-ink mt-2">{c.treatment}</h3>
                  <p className="mt-2 text-sm text-ink/70 leading-relaxed">{c.note}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-16 text-xs text-ink/50 max-w-2xl">
            Case imagery shown is representative demo content and should be replaced
            with verified clinical before/after photography before launch.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
