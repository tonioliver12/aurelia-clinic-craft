import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { dentists } from "@/data/site";
import { CTASection } from "@/components/CTASection";

export const Route = createFileRoute("/dentists/")({
  head: () => ({
    meta: [
      { title: "Our Dentists — Aurelia Dental, Dublin 4" },
      { name: "description", content: "Meet the experienced clinicians behind Aurelia Dental — a considered, patient-centred private practice in Dublin 4." },
      { property: "og:title", content: "Our Dentists — Aurelia Dental" },
      { property: "og:url", content: "/dentists" },
    ],
    links: [{ rel: "canonical", href: "/dentists" }],
  }),
  component: DentistsIndex,
});

function DentistsIndex() {
  return (
    <>
      <section className="pt-40 md:pt-52 pb-16 md:pb-24">
        <div className="container-editorial">
          <p className="eyebrow">Our dentists</p>
          <h1 className="display-serif mt-6 text-5xl md:text-7xl lg:text-8xl text-ink max-w-4xl">
            Clinicians who take time to listen.
          </h1>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-editorial grid gap-16 lg:gap-24">
          {dentists.map((d, i) => (
            <article key={d.slug} className={`grid gap-10 md:grid-cols-12 md:gap-16 items-center ${i % 2 === 1 ? "md:[direction:rtl]" : ""}`}>
              <div className="md:col-span-6 [direction:ltr]">
                <div className="image-hover aspect-[4/5] bg-bone">
                  <img src={d.image} alt={d.name} className="h-full w-full object-cover object-top" loading="lazy" />
                </div>
              </div>
              <div className="md:col-span-6 [direction:ltr]">
                <p className="eyebrow">0{i + 1} / {String(dentists.length).padStart(2, "0")}</p>
                <h2 className="display-serif mt-4 text-4xl md:text-5xl text-ink">{d.name}</h2>
                <p className="mt-2 text-sm tracking-[0.06em] text-ink/60">{d.title}</p>
                <p className="mt-6 text-ink/75 leading-relaxed text-lg">{d.intro}</p>
                <p className="mt-4 text-ink/70 leading-relaxed">{d.bio}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link to="/dentists/$slug" params={{ slug: d.slug }} className="btn-ghost">View profile</Link>
                  <Link to="/book" className="btn-primary">Book with {d.name.split(" ")[0]}</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
