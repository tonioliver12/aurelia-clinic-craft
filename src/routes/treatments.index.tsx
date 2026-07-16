import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { treatments, categoryMeta } from "@/data/site";
import { CTASection } from "@/components/CTASection";

export const Route = createFileRoute("/treatments/")({
  head: () => ({
    meta: [
      { title: "Treatments — Aurelia Dental, Dublin 4" },
      { name: "description", content: "Explore our range of cosmetic, restorative, preventive and emergency dental treatments in Dublin 4." },
      { property: "og:title", content: "Treatments — Aurelia Dental" },
      { property: "og:url", content: "/treatments" },
    ],
    links: [{ rel: "canonical", href: "/treatments" }],
  }),
  component: TreatmentsIndex,
});

const order = ["enhance", "restore", "maintain", "urgent"] as const;

function TreatmentsIndex() {
  return (
    <>
      <section className="pt-40 md:pt-52 pb-16 md:pb-24">
        <div className="container-editorial grid gap-12 lg:grid-cols-12 items-end">
          <div className="lg:col-span-8">
            <p className="eyebrow">Treatments</p>
            <h1 className="display-serif mt-6 text-5xl md:text-7xl lg:text-8xl text-ink">
              Care for every stage of a smile.
            </h1>
          </div>
          <div className="lg:col-span-4">
            <p className="text-ink/70 leading-relaxed">
              Whether you're considering a cosmetic enhancement, restoring worn teeth,
              or simply looking for a better everyday check-up, our treatments are
              delivered with the same thoughtful, unhurried approach.
            </p>
          </div>
        </div>
      </section>

      {order.map((cat) => {
        const list = treatments.filter((t) => t.category === cat);
        const meta = categoryMeta[cat];
        return (
          <section key={cat} className="border-t border-line py-20 md:py-28">
            <div className="container-editorial grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-4 lg:sticky lg:top-32 self-start">
                <p className="eyebrow">{meta.eyebrow}</p>
                <h2 className="display-serif mt-4 text-3xl md:text-4xl lg:text-5xl text-ink">{meta.title}</h2>
              </div>
              <ul className="lg:col-span-8 divide-y divide-line border-y border-line">
                {list.map((t) => (
                  <li key={t.slug}>
                    <Link
                      to="/treatments/$slug"
                      params={{ slug: t.slug }}
                      className="group grid grid-cols-[minmax(0,1fr)_auto] items-center gap-6 py-6 md:py-8"
                    >
                      <div className="min-w-0">
                        <h3 className="font-serif text-2xl md:text-3xl text-ink">{t.name}</h3>
                        <p className="mt-2 text-ink/70 leading-relaxed max-w-2xl">{t.short}</p>
                        {t.from && <p className="mt-2 text-xs tracking-[0.15em] uppercase text-ink/50">{t.from}</p>}
                      </div>
                      <ArrowUpRight className="h-5 w-5 shrink-0 text-ink/60 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        );
      })}

      <CTASection />
    </>
  );
}
